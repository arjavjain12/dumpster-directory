-- ============================================================
-- DumpsterSearch — Full Database Schema
-- Run this in your Supabase SQL Editor
-- ============================================================

-- Enable PostGIS-style distance calculations (no extension needed)
-- We'll use basic lat/lng math for nearby cities

-- ============================================================
-- CITIES
-- ============================================================
create table if not exists cities (
  id            bigserial primary key,
  city_name     text not null,
  state         text not null,
  state_slug    text not null,
  city_slug     text not null,
  population    integer default 0,
  latitude      numeric(9,6) not null,
  longitude     numeric(9,6) not null,
  county        text,
  metro_area    text,
  created_at    timestamptz default now(),
  unique(state_slug, city_slug)
);

create index if not exists idx_cities_state_slug on cities(state_slug);
create index if not exists idx_cities_population on cities(population desc);

-- ============================================================
-- BUSINESSES
-- ============================================================
create table if not exists businesses (
  id                  bigserial primary key,
  city_id             bigint references cities(id) on delete cascade,
  name                text not null,
  slug                text not null,
  address             text,
  phone               text,
  website             text,
  email               text,
  google_place_id     text unique,
  yelp_id             text,
  rating              numeric(2,1),
  review_count        integer default 0,
  tier                text default 'free' check (tier in ('free','basic','premium')),
  is_active           boolean default true,
  sizes_available     text[] default '{}',
  service_area_miles  integer default 20,
  description         text,
  photos              text[] default '{}',
  created_at          timestamptz default now(),
  updated_at          timestamptz default now(),
  unique(city_id, slug)
);

create index if not exists idx_businesses_city_id on businesses(city_id);
create index if not exists idx_businesses_tier on businesses(tier);
create index if not exists idx_businesses_active on businesses(is_active);

-- ============================================================
-- CITY PRICING
-- ============================================================
create table if not exists city_pricing (
  id                    bigserial primary key,
  city_id               bigint references cities(id) on delete cascade,
  size_yards            integer not null check (size_yards in (10,15,20,30,40)),
  price_low             integer not null,
  price_high            integer not null,
  rental_days_included  integer default 7,
  updated_at            timestamptz default now(),
  unique(city_id, size_yards)
);

create index if not exists idx_city_pricing_city_id on city_pricing(city_id);

-- ============================================================
-- LEADS
-- ============================================================
create table if not exists leads (
  id                    bigserial primary key,
  city_id               bigint references cities(id),
  name                  text not null,
  email                 text not null,
  phone                 text not null,
  zip_code              text not null,
  project_type          text not null,
  dumpster_size_needed  text default 'Not Sure',
  project_start         text default 'ASAP',
  message               text,
  status                text default 'new' check (status in ('new','contacted','converted','lost')),
  businesses_notified   bigint[] default '{}',
  created_at            timestamptz default now()
);

create index if not exists idx_leads_city_id on leads(city_id);
create index if not exists idx_leads_status on leads(status);
create index if not exists idx_leads_created_at on leads(created_at desc);

-- ============================================================
-- NEARBY CITIES FUNCTION
-- Returns cities near a given lat/lng, excluding the current city
-- ============================================================
create or replace function nearby_cities(
  city_id   bigint,
  lat       numeric,
  lng       numeric,
  limit_count integer default 6
)
returns table (
  id          bigint,
  city_name   text,
  state       text,
  state_slug  text,
  city_slug   text,
  population  integer,
  distance_miles numeric
)
language sql stable
as $$
  select
    c.id,
    c.city_name,
    c.state,
    c.state_slug,
    c.city_slug,
    c.population,
    round(
      cast(
        3959 * acos(
          least(1.0, cos(radians(lat)) * cos(radians(c.latitude))
          * cos(radians(c.longitude) - radians(lng))
          + sin(radians(lat)) * sin(radians(c.latitude)))
        ) as numeric
      ), 1
    ) as distance_miles
  from cities c
  where c.id != city_id
  order by distance_miles asc
  limit limit_count;
$$;

-- ============================================================
-- ROW LEVEL SECURITY
-- ============================================================

-- Cities: public read
alter table cities enable row level security;
create policy "cities_public_read" on cities for select using (true);

-- Businesses: public read active only
alter table businesses enable row level security;
create policy "businesses_public_read" on businesses for select using (is_active = true);

-- City pricing: public read
alter table city_pricing enable row level security;
create policy "city_pricing_public_read" on city_pricing for select using (true);

-- Leads: insert only (public can submit, nobody can read via anon key)
alter table leads enable row level security;
create policy "leads_insert" on leads for insert with check (true);
