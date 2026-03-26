/**
 * Generates unique intro paragraphs for cities WITHOUT needing an external LLM API.
 * Uses city metadata (population, county, metro area, state, business count) to
 * construct varied, locally-generated intros.
 *
 * Usage:
 *   node scripts/generate-intros-local.mjs                 # all cities without intros
 *   node scripts/generate-intros-local.mjs --limit 5000    # first 5000 by population
 *   node scripts/generate-intros-local.mjs --state texas   # only Texas cities
 *   node scripts/generate-intros-local.mjs --dry-run       # preview without updating
 */

import { createClient } from '@supabase/supabase-js'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const envPath = path.join(__dirname, '..', '.env.local')
const envVars = Object.fromEntries(
  fs.readFileSync(envPath, 'utf8')
    .split('\n')
    .filter((l) => l.includes('=') && !l.startsWith('#'))
    .map((l) => { const i = l.indexOf('='); return [l.slice(0, i).trim(), l.slice(i + 1).trim()] })
)

const supabase = createClient(envVars['NEXT_PUBLIC_SUPABASE_URL'], envVars['SUPABASE_SERVICE_ROLE_KEY'])

const args = process.argv.slice(2)
const LIMIT = parseInt(args[args.indexOf('--limit') + 1] || '0') || 0
const STATE = args.includes('--state') ? args[args.indexOf('--state') + 1] : null
const DRY_RUN = args.includes('--dry-run')

// ─── Intro templates ────────────────────────────────────────────────────────
// Each template is a function that takes city data and returns a 2-sentence intro.
// We rotate through them based on city ID to ensure variety.

const templates = [
  // Template 0: Project-focused
  (c) => {
    const projects = pickRandom([
      'a home renovation', 'a garage cleanout', 'a roofing project',
      'a kitchen remodel', 'a basement cleanout', 'a landscaping overhaul',
      'a bathroom renovation', 'a deck removal', 'an estate cleanout',
      'a construction project', 'spring cleaning', 'a demolition job',
    ], c.id)
    const pop = c.population > 50000 ? `With a population of ${fmt(c.population)}, ${c.city_name} has` : `${c.city_name} has`
    return `${pop} plenty of local dumpster rental options for ${projects} or any debris removal job in ${c.county || c.state}. Compare roll-off dumpster companies serving ${c.city_name}, ${c.state}, read verified reviews, and request free quotes — all in one place.`
  },

  // Template 1: Location-focused
  (c) => {
    const metro = c.metro_area ? `in the ${c.metro_area} metro area` : `in ${c.state}`
    const county = c.county ? `${c.county}` : c.state
    return `${c.city_name} is located ${metro}, and residents and contractors here regularly need dumpster rentals for cleanouts, renovations, and construction projects. Browse our directory of roll-off dumpster companies serving ${county}, compare pricing on 10–40 yard containers, and get free quotes from trusted local providers.`
  },

  // Template 2: Action-focused
  (c) => {
    const action = pickRandom([
      'Clearing out a home', 'Renovating a property', 'Tackling a construction job',
      'Cleaning up after a storm', 'Remodeling a kitchen or bathroom', 'Removing old roofing',
      'Doing a full estate cleanout', 'Managing a job site', 'Handling demolition debris',
    ], c.id + 1)
    return `${action} in ${c.city_name}, ${c.state}? The right dumpster rental company makes the job easier and more affordable. Use this directory to compare local roll-off providers in ${c.county || c.city_name}, check ratings, and get free quotes without the runaround.`
  },

  // Template 3: Size-focused
  (c) => {
    const pop = c.population > 30000
      ? `a city of ${fmt(c.population)} in ${c.state}`
      : `a community in ${c.county || c.state}`
    return `Whether you need a 10-yard dumpster for a small cleanout or a 40-yard container for a major construction project, ${c.city_name} — ${pop} — has local haulers ready to deliver. Compare dumpster rental companies, view pricing by size, and get free quotes from providers serving the ${c.city_name} area.`
  },

  // Template 4: Problem-solution
  (c) => {
    const problem = pickRandom([
      'Searching for a reliable dumpster rental',
      'Finding affordable debris removal',
      'Getting a roll-off dumpster delivered quickly',
      'Comparing dumpster rental prices',
      'Booking a dumpster for your next project',
    ], c.id + 2)
    return `${problem} in ${c.city_name}, ${c.state} doesn't have to be complicated. Our directory lists local dumpster rental companies serving ${c.county || c.city_name} with ratings, phone numbers, and pricing — so you can compare options and book with confidence.`
  },

  // Template 5: County/region focused
  (c) => {
    const region = c.county ? `${c.county}` : c.state
    const activity = pickRandom([
      'home improvement projects', 'residential cleanouts', 'commercial renovations',
      'construction and demolition work', 'property cleanups', 'remodeling jobs',
    ], c.id + 3)
    return `${c.city_name} and the surrounding ${region} area see strong demand for dumpster rentals, especially for ${activity}. This page lists every roll-off dumpster company that serves ${c.city_name}, ${c.state} — compare them side by side and request free quotes in minutes.`
  },

  // Template 6: Seasonal/practical
  (c) => {
    const season = pickRandom([
      'Whether it\'s spring cleaning season or a year-round renovation',
      'From weekend garage cleanouts to multi-week construction projects',
      'Whether you\'re a homeowner or a contractor',
      'For one-time cleanups or ongoing construction needs',
    ], c.id + 4)
    return `${season}, finding the right dumpster rental in ${c.city_name}, ${c.state} starts here. Browse local companies, compare 10 to 40-yard roll-off options, and get free quotes from providers that deliver to ${c.county || c.city_name}.`
  },

  // Template 7: Direct/no-nonsense
  (c) => {
    const pop = c.population > 20000 ? ` (population ${fmt(c.population)})` : ''
    return `Need a dumpster delivered in ${c.city_name}${pop}? This directory has every roll-off rental company serving the area — with phone numbers, ratings, and pricing you can compare in seconds. Pick your size, request quotes, and get your project moving without overpaying.`
  },
]

function pickRandom(arr, seed) {
  return arr[Math.abs(seed) % arr.length]
}

function fmt(n) {
  return n.toLocaleString('en-US')
}

function generateIntro(city) {
  const templateIndex = Math.abs(city.id) % templates.length
  return templates[templateIndex](city)
}

// ─── Main ─────────────────────────────────────────────────────────────────────
async function main() {
  console.log(`City Intro Generator (local, no API needed)`)
  console.log(`=============================================`)
  if (STATE) console.log(`State filter: ${STATE}`)
  if (LIMIT) console.log(`Limit: ${LIMIT}`)
  if (DRY_RUN) console.log(`** DRY RUN **`)
  console.log()

  // Fetch cities without intros
  const PAGE = 1000
  let allCities = []
  let from = 0

  while (true) {
    let query = supabase
      .from('cities')
      .select('id, city_name, state, state_slug, county, metro_area, population, intro')
      .is('intro', null)
      .order('population', { ascending: false })
      .range(from, from + PAGE - 1)

    if (STATE) query = query.eq('state_slug', STATE)

    const { data, error } = await query
    if (error) { console.error('DB error:', error.message); process.exit(1) }
    if (!data || data.length === 0) break
    allCities = allCities.concat(data)
    if (data.length < PAGE) break
    from += PAGE
  }

  if (LIMIT > 0) allCities = allCities.slice(0, LIMIT)

  console.log(`Cities without intros: ${allCities.length}\n`)

  let success = 0
  let failed = 0

  for (let i = 0; i < allCities.length; i++) {
    const city = allCities[i]
    const intro = generateIntro(city)

    if (DRY_RUN) {
      if (i < 10) console.log(`[${i + 1}] ${city.city_name}, ${city.state}:\n    ${intro}\n`)
      success++
      continue
    }

    const { error } = await supabase
      .from('cities')
      .update({ intro })
      .eq('id', city.id)

    if (error) {
      if (i < 20 || i % 500 === 0) console.log(`ERROR: ${city.city_name} - ${error.message}`)
      failed++
    } else {
      success++
    }

    if ((i + 1) % 1000 === 0) {
      console.log(`Progress: ${i + 1}/${allCities.length} (${success} ok, ${failed} failed)`)
    }
  }

  console.log(`\nDone! ${success} intros generated, ${failed} failed.`)
}

main().catch((err) => { console.error('Fatal:', err); process.exit(1) })
