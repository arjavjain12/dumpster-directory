-- Run this in Supabase SQL Editor BEFORE running generate-city-intros.mjs
-- https://supabase.com/dashboard/project/zeoritxrwngqpfoqsglh/sql

ALTER TABLE cities ADD COLUMN IF NOT EXISTS intro text;
