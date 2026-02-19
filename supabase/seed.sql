-- ============================================================
-- Seed data for local development
-- Run AFTER schema.sql
-- ============================================================

insert into cities (city_name, state, state_slug, city_slug, population, latitude, longitude, county, metro_area) values
('Austin',      'Texas',      'texas',      'austin',      978908,  30.2672,  -97.7431,  'Travis County',   'Austin-Round Rock'),
('Houston',     'Texas',      'texas',      'houston',     2304580, 29.7604,  -95.3698,  'Harris County',   'Houston-The Woodlands'),
('Dallas',      'Texas',      'texas',      'dallas',      1304379, 32.7767,  -96.7970,  'Dallas County',   'Dallas-Fort Worth'),
('San Antonio', 'Texas',      'texas',      'san-antonio', 1434625, 29.4241,  -98.4936,  'Bexar County',    'San Antonio-New Braunfels'),
('Chicago',     'Illinois',   'illinois',   'chicago',     2696555, 41.8781,  -87.6298,  'Cook County',     'Chicago-Naperville-Elgin'),
('Phoenix',     'Arizona',    'arizona',    'phoenix',     1608139, 33.4484,  -112.0740, 'Maricopa County', 'Phoenix-Mesa-Chandler'),
('Philadelphia','Pennsylvania','pennsylvania','philadelphia',1603797, 39.9526, -75.1652,  'Philadelphia County', 'Philadelphia-Camden-Wilmington'),
('Los Angeles', 'California', 'california', 'los-angeles', 3898747, 34.0522,  -118.2437, 'Los Angeles County', 'Los Angeles-Long Beach-Anaheim'),
('Denver',      'Colorado',   'colorado',   'denver',      715522,  39.7392,  -104.9903, 'Denver County',   'Denver-Aurora-Lakewood'),
('Atlanta',     'Georgia',    'georgia',    'atlanta',     498715,  33.7490,  -84.3880,  'Fulton County',   'Atlanta-Sandy Springs-Roswell')
on conflict (state_slug, city_slug) do nothing;

insert into businesses (city_id, name, slug, address, phone, website, rating, review_count, tier, sizes_available, service_area_miles, description)
select
  c.id,
  'Austin Roll Off Solutions',
  'austin-roll-off-solutions',
  '1234 S Congress Ave, Austin, TX 78704',
  '5124567890',
  'https://austinrolloff.example.com',
  4.8, 124, 'premium',
  array['10','20','30','40'], 30,
  'Family-owned dumpster rental serving Austin and surrounding areas since 2008. Same-day delivery available.'
from cities c where c.city_slug = 'austin' and c.state_slug = 'texas'
on conflict do nothing;

insert into businesses (city_id, name, slug, address, phone, website, rating, review_count, tier, sizes_available, service_area_miles, description)
select
  c.id,
  'Capital City Dumpsters',
  'capital-city-dumpsters',
  '5678 N Lamar Blvd, Austin, TX 78751',
  '5129876543',
  'https://capitalcitydumpsters.example.com',
  4.5, 87, 'basic',
  array['10','15','20','30'], 25,
  'Fast, affordable roll-off dumpster rental in Austin TX. Free delivery within city limits.'
from cities c where c.city_slug = 'austin' and c.state_slug = 'texas'
on conflict do nothing;

insert into businesses (city_id, name, slug, address, phone, website, rating, review_count, tier, sizes_available, service_area_miles, description)
select
  c.id,
  'Lone Star Waste Services',
  'lone-star-waste-services',
  '910 E Riverside Dr, Austin, TX 78704',
  '5121112233',
  null,
  4.2, 43, 'free',
  array['10','20'], 20,
  null
from cities c where c.city_slug = 'austin' and c.state_slug = 'texas'
on conflict do nothing;

insert into city_pricing (city_id, size_yards, price_low, price_high, rental_days_included)
select c.id, s.size_yards, s.price_low, s.price_high, 7
from cities c
cross join (values
  (10, 295, 420),
  (15, 345, 480),
  (20, 395, 540),
  (30, 445, 610),
  (40, 495, 720)
) as s(size_yards, price_low, price_high)
where c.city_slug = 'austin' and c.state_slug = 'texas'
on conflict (city_id, size_yards) do nothing;
