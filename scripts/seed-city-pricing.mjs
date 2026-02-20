/**
 * Seeds city_pricing table with realistic price ranges.
 * Prices adjusted by region and city population.
 *
 * Usage: node scripts/seed-city-pricing.mjs
 */

import { createClient } from '@supabase/supabase-js'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const envVars   = Object.fromEntries(
  fs.readFileSync(path.join(__dirname, '..', '.env.local'), 'utf8')
    .split('\n').filter(l => l.includes('=') && !l.startsWith('#'))
    .map(l => { const i = l.indexOf('='); return [l.slice(0, i).trim(), l.slice(i + 1).trim()] })
)

const supabase = createClient(envVars.NEXT_PUBLIC_SUPABASE_URL, envVars.SUPABASE_SERVICE_ROLE_KEY)

// Base prices (national average, mid-size city)
const BASE = {
  10: { low: 250, high: 325 },
  15: { low: 305, high: 395 },
  20: { low: 375, high: 475 },
  30: { low: 455, high: 575 },
  40: { low: 555, high: 710 },
}

// Regional cost-of-living multiplier by state slug
const STATE_MULT = {
  // Northeast — highest
  'new-york': 1.22, 'new-jersey': 1.18, 'connecticut': 1.16,
  'massachusetts': 1.16, 'rhode-island': 1.14, 'maryland': 1.12,
  'delaware': 1.10, 'pennsylvania': 1.06, 'new-hampshire': 1.08,
  'maine': 1.05, 'vermont': 1.05,
  // West Coast — high
  'california': 1.22, 'washington': 1.12, 'oregon': 1.10,
  'hawaii': 1.30, 'alaska': 1.25,
  // Mountain / Southwest — moderate
  'colorado': 1.06, 'arizona': 1.04, 'nevada': 1.04,
  'utah': 1.00, 'new-mexico': 0.95, 'idaho': 0.96, 'montana': 0.95,
  'wyoming': 0.94,
  // Midwest — below average
  'illinois': 0.96, 'minnesota': 0.95, 'wisconsin': 0.94,
  'michigan': 0.93, 'ohio': 0.93, 'indiana': 0.91, 'iowa': 0.91,
  'missouri': 0.91, 'nebraska': 0.90, 'kansas': 0.90,
  'north-dakota': 0.90, 'south-dakota': 0.88,
  // South — lowest
  'florida': 1.00, 'virginia': 0.97, 'georgia': 0.91,
  'texas': 0.94, 'north-carolina': 0.91, 'south-carolina': 0.90,
  'tennessee': 0.89, 'kentucky': 0.87, 'louisiana': 0.89,
  'alabama': 0.86, 'mississippi': 0.84, 'arkansas': 0.85,
  'west-virginia': 0.85, 'oklahoma': 0.88,
}

function getMultiplier(stateSlug, population) {
  const regionMult = STATE_MULT[stateSlug] ?? 1.0

  let popMult = 1.0
  if      (population > 1000000) popMult = 1.18
  else if (population >  500000) popMult = 1.10
  else if (population >  200000) popMult = 1.05
  else if (population >   75000) popMult = 1.00
  else if (population >   25000) popMult = 0.97
  else                           popMult = 0.94

  return regionMult * popMult
}

function computePricing(stateSlug, population) {
  const mult = getMultiplier(stateSlug, population)
  return [10, 15, 20, 30, 40].map(size => ({
    size_yards:           size,
    price_low:            Math.round(BASE[size].low  * mult / 5) * 5,  // round to $5
    price_high:           Math.round(BASE[size].high * mult / 5) * 5,
    rental_days_included: 7,
  }))
}

async function main() {
  console.log('\n🚀  Seeding city_pricing table\n')

  const PAGE   = 1000
  let   from   = 0
  let   total  = 0

  while (true) {
    const { data: cities, error } = await supabase
      .from('cities')
      .select('id, state_slug, population')
      .range(from, from + PAGE - 1)

    if (error) { console.error('❌  Fetch error:', error.message); process.exit(1) }
    if (!cities || cities.length === 0) break

    const rows = cities.flatMap(city =>
      computePricing(city.state_slug, city.population ?? 0).map(p => ({
        city_id: city.id,
        ...p,
      }))
    )

    const { error: upsertError } = await supabase
      .from('city_pricing')
      .upsert(rows, { onConflict: 'city_id,size_yards' })

    if (upsertError) {
      console.error('❌  Upsert error:', upsertError.message)
      process.exit(1)
    }

    total += cities.length
    console.log(`    ✅  ${total} cities priced`)

    if (cities.length < PAGE) break
    from += PAGE
  }

  console.log(`\n🎉  Done! ${total} cities × 5 sizes = ${total * 5} pricing rows seeded.\n`)
}

main().catch(err => { console.error('Fatal:', err); process.exit(1) })
