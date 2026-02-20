-- Run this in Supabase SQL Editor: https://supabase.com/dashboard/project/zeoritxrwngqpfoqsglh/sql
-- This creates the nearby_cities RPC function used by city page sidebars

CREATE OR REPLACE FUNCTION nearby_cities(
  city_id  bigint,
  lat      double precision,
  lng      double precision,
  limit_count int DEFAULT 6
)
RETURNS TABLE (
  id         bigint,
  city_name  text,
  city_slug  text,
  state      text,
  state_slug text,
  latitude   double precision,
  longitude  double precision
)
LANGUAGE sql
STABLE
AS $$
  SELECT
    id,
    city_name,
    city_slug,
    state,
    state_slug,
    latitude,
    longitude
  FROM cities
  WHERE
    id != city_id
    AND latitude  IS NOT NULL
    AND longitude IS NOT NULL
    AND latitude  BETWEEN lat - 1.5 AND lat + 1.5
    AND longitude BETWEEN lng - 1.5 AND lng + 1.5
  ORDER BY
    ((latitude - lat) ^ 2 + (longitude - lng) ^ 2)
  LIMIT limit_count;
$$;
