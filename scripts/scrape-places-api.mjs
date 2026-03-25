/**
 * Scrapes dumpster rental businesses using Google Places API (Text Search)
 * and inserts them into Supabase for all cities with 0 business listings.
 *
 * Uses the new Places API (v1) Text Search endpoint.
 *
 * Usage:
 *   node scripts/scrape-places-api.mjs                    # all empty cities
 *   node scripts/scrape-places-api.mjs --limit 500        # first 500 empty cities (by population)
 *   node scripts/scrape-places-api.mjs --state texas      # only empty cities in Texas
 *   node scripts/scrape-places-api.mjs --dry-run          # preview without inserting
 *
 * Env vars required in .env.local:
 *   GOOGLE_PLACES_API_KEY
 *   NEXT_PUBLIC_SUPABASE_URL
 *   SUPABASE_SERVICE_ROLE_KEY
 *
 * Cost estimate:
 *   Google Places Text Search (New): $32 per 1,000 requests (SKU: Text Search)
 *   ~27,000 empty cities = ~$864 if all are searched
 *   Recommended: start with --limit 500 (~$16), then scale up
 */

import { createClient } from '@supabase/supabase-js'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

// ─── Load env ─────────────────────────────────────────────────────────────────
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const envPath = path.join(__dirname, '..', '.env.local')
const envVars = Object.fromEntries(
  fs.readFileSync(envPath, 'utf8')
    .split('\n')
    .filter((l) => l.includes('=') && !l.startsWith('#'))
    .map((l) => { const i = l.indexOf('='); return [l.slice(0, i).trim(), l.slice(i + 1).trim()] })
)

const SUPABASE_URL = envVars['NEXT_PUBLIC_SUPABASE_URL']
const SERVICE_KEY  = envVars['SUPABASE_SERVICE_ROLE_KEY']
const PLACES_KEY   = envVars['GOOGLE_PLACES_API_KEY']

if (!SUPABASE_URL || !SERVICE_KEY) { console.error('Missing Supabase credentials in .env.local'); process.exit(1) }
if (!PLACES_KEY) { console.error('Missing GOOGLE_PLACES_API_KEY in .env.local'); process.exit(1) }

const supabase = createClient(SUPABASE_URL, SERVICE_KEY)

// ─── Args ─────────────────────────────────────────────────────────────────────
const args    = process.argv.slice(2)
const LIMIT   = parseInt(args[args.indexOf('--limit') + 1] || '0') || 0 // 0 = all
const STATE   = args.includes('--state') ? args[args.indexOf('--state') + 1] : null
const DRY_RUN = args.includes('--dry-run')

// ─── Helpers ──────────────────────────────────────────────────────────────────
function slugify(str) {
  return str.toLowerCase().normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim().replace(/\s+/g, '-').replace(/-+/g, '-')
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)) }

const STATE_ABBR = {
  'Alabama':'AL','Alaska':'AK','Arizona':'AZ','Arkansas':'AR','California':'CA',
  'Colorado':'CO','Connecticut':'CT','Delaware':'DE','Florida':'FL','Georgia':'GA',
  'Hawaii':'HI','Idaho':'ID','Illinois':'IL','Indiana':'IN','Iowa':'IA','Kansas':'KS',
  'Kentucky':'KY','Louisiana':'LA','Maine':'ME','Maryland':'MD','Massachusetts':'MA',
  'Michigan':'MI','Minnesota':'MN','Mississippi':'MS','Missouri':'MO','Montana':'MT',
  'Nebraska':'NE','Nevada':'NV','New Hampshire':'NH','New Jersey':'NJ','New Mexico':'NM',
  'New York':'NY','North Carolina':'NC','North Dakota':'ND','Ohio':'OH','Oklahoma':'OK',
  'Oregon':'OR','Pennsylvania':'PA','Rhode Island':'RI','South Carolina':'SC',
  'South Dakota':'SD','Tennessee':'TN','Texas':'TX','Utah':'UT','Vermont':'VT',
  'Virginia':'VA','Washington':'WA','West Virginia':'WV','Wisconsin':'WI','Wyoming':'WY',
  'Washington DC':'DC',
}

// ─── Google Places Text Search (New API) ────────────────────────────────────
async function searchPlaces(query, lat, lng) {
  const body = {
    textQuery: query,
    locationBias: {
      circle: {
        center: { latitude: lat, longitude: lng },
        radius: 40000.0, // 40km (~25 miles)
      },
    },
    maxResultCount: 5,
    languageCode: 'en',
  }

  const res = await fetch('https://places.googleapis.com/v1/places:searchText', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Goog-Api-Key': PLACES_KEY,
      'X-Goog-FieldMask': 'places.displayName,places.formattedAddress,places.nationalPhoneNumber,places.websiteUri,places.rating,places.userRatingCount,places.id,places.types,places.businessStatus',
    },
    body: JSON.stringify(body),
  })

  if (!res.ok) {
    const errText = await res.text()
    throw new Error(`Places API ${res.status}: ${errText}`)
  }

  const data = await res.json()
  return data.places || []
}

// ─── Filter for dumpster-relevant businesses ────────────────────────────────
function isDumpsterRelevant(place) {
  if (place.businessStatus && place.businessStatus !== 'OPERATIONAL') return false

  const name  = (place.displayName?.text || '').toLowerCase()
  const types = (place.types || []).join(' ').toLowerCase()

  // Must have some signal of being dumpster/waste related
  const relevant =
    name.includes('dumpster') || name.includes('waste')    ||
    name.includes('junk')     || name.includes('haul')     ||
    name.includes('disposal') || name.includes('roll')     ||
    name.includes('debris')   || name.includes('rubbish')  ||
    name.includes('sanitation') || name.includes('trash')  ||
    types.includes('waste')   || types.includes('dumpster')

  return relevant
}

// ─── Fetch empty cities ──────────────────────────────────────────────────────
async function getEmptyCities() {
  // Get all city IDs that have at least one active business
  const PAGE = 1000
  const citiesWithBiz = new Set()
  let from = 0

  while (true) {
    const { data, error } = await supabase
      .from('businesses')
      .select('city_id')
      .eq('is_active', true)
      .range(from, from + PAGE - 1)

    if (error) throw error
    if (!data || data.length === 0) break
    for (const row of data) citiesWithBiz.add(row.city_id)
    if (data.length < PAGE) break
    from += PAGE
  }

  console.log(`Cities with businesses: ${citiesWithBiz.size}`)

  // Fetch all cities, sorted by population desc
  let allCities = []
  from = 0

  while (true) {
    let query = supabase
      .from('cities')
      .select('id, city_name, state, state_slug, city_slug, latitude, longitude, population')
      .order('population', { ascending: false })
      .range(from, from + PAGE - 1)

    if (STATE) {
      query = query.eq('state_slug', STATE)
    }

    const { data, error } = await query
    if (error) throw error
    if (!data || data.length === 0) break
    allCities = allCities.concat(data)
    if (data.length < PAGE) break
    from += PAGE
  }

  // Filter to only empty cities
  const emptyCities = allCities.filter(c => !citiesWithBiz.has(c.id))
  console.log(`Total cities: ${allCities.length}`)
  console.log(`Empty cities: ${emptyCities.length}`)

  if (LIMIT > 0) {
    return emptyCities.slice(0, LIMIT)
  }
  return emptyCities
}

// ─── Main ─────────────────────────────────────────────────────────────────────
async function main() {
  console.log(`\nDumpster Rental Business Scraper (Google Places API)`)
  console.log(`====================================================`)
  if (STATE) console.log(`State filter: ${STATE}`)
  if (LIMIT) console.log(`Limit: ${LIMIT} cities`)
  if (DRY_RUN) console.log(`** DRY RUN — no data will be inserted **`)
  console.log()

  const cities = await getEmptyCities()
  console.log(`Processing: ${cities.length} empty cities\n`)

  if (cities.length === 0) {
    console.log('No empty cities found. Done!')
    return
  }

  // Estimate cost
  const estCost = cities.length * 0.032  // $32/1000 requests
  console.log(`Estimated API cost: ~$${estCost.toFixed(2)}`)
  console.log()

  let totalInserted   = 0
  let totalSkipped    = 0
  let citiesProcessed = 0
  let citiesWithResults = 0
  let apiErrors       = 0
  const startTime     = Date.now()

  // Track progress in a log file
  const logPath = path.join(__dirname, 'scrape-places-log.json')
  const log = []

  for (let i = 0; i < cities.length; i++) {
    const city = cities[i]
    const stateAbbr = STATE_ABBR[city.state] || ''
    const query = `dumpster rental in ${city.city_name}, ${stateAbbr}`

    process.stdout.write(`[${i + 1}/${cities.length}] ${city.city_name}, ${city.state} (pop ${city.population || 0})... `)

    try {
      const places = await searchPlaces(query, city.latitude, city.longitude)
      const relevant = places.filter(isDumpsterRelevant)

      if (relevant.length === 0) {
        console.log('0 results')
        citiesProcessed++
        log.push({ city: city.city_slug, state: city.state_slug, results: 0 })
        // Throttle: 5 requests/second max
        await sleep(220)
        continue
      }

      citiesWithResults++
      let inserted = 0

      for (const place of relevant) {
        const name = place.displayName?.text
        if (!name) continue

        const slug = slugify(name)

        const record = {
          city_id:            city.id,
          name:               name,
          slug:               slug,
          address:            place.formattedAddress || null,
          phone:              place.nationalPhoneNumber || null,
          website:            place.websiteUri || null,
          google_place_id:    place.id || null,
          rating:             place.rating || null,
          review_count:       place.userRatingCount || 0,
          tier:               'free',
          is_active:          true,
          service_area_miles: 25,
        }

        if (DRY_RUN) {
          console.log(`  [DRY] Would insert: ${name} (${record.rating}★, ${record.review_count} reviews)`)
          inserted++
          continue
        }

        // Upsert by google_place_id if available, otherwise by city_id + slug
        if (record.google_place_id) {
          const { error } = await supabase
            .from('businesses')
            .upsert(record, { onConflict: 'google_place_id', ignoreDuplicates: true })

          if (error) {
            // Try city_id + slug fallback
            delete record.google_place_id
            const { error: err2 } = await supabase
              .from('businesses')
              .upsert(record, { onConflict: 'city_id,slug', ignoreDuplicates: true })
            if (err2) {
              totalSkipped++
              continue
            }
          }
        } else {
          const { error } = await supabase
            .from('businesses')
            .upsert(record, { onConflict: 'city_id,slug', ignoreDuplicates: true })
          if (error) {
            totalSkipped++
            continue
          }
        }

        inserted++
        totalInserted++
      }

      console.log(`${relevant.length} found, ${inserted} inserted`)
      log.push({ city: city.city_slug, state: city.state_slug, results: relevant.length, inserted })
      citiesProcessed++

      // Throttle: 5 requests/second max
      await sleep(220)

    } catch (err) {
      console.log(`ERROR: ${err.message}`)
      apiErrors++

      if (err.message.includes('429') || err.message.includes('RATE')) {
        console.log('  Rate limited, backing off 30s...')
        await sleep(30000)
      } else if (err.message.includes('403')) {
        console.error('\nAPI key may be invalid or Places API not enabled. Check Google Cloud Console.')
        break
      } else {
        await sleep(2000)
      }
    }

    // Save progress every 100 cities
    if ((i + 1) % 100 === 0) {
      fs.writeFileSync(logPath, JSON.stringify(log, null, 2))
      const elapsed = Math.round((Date.now() - startTime) / 1000)
      const rate = citiesProcessed / (elapsed / 60)
      console.log(`\n--- Progress: ${citiesProcessed}/${cities.length} cities, ${totalInserted} businesses, ${apiErrors} errors, ${rate.toFixed(0)} cities/min ---\n`)
    }
  }

  // Final save
  fs.writeFileSync(logPath, JSON.stringify(log, null, 2))

  const elapsed = Math.round((Date.now() - startTime) / 1000)
  console.log(`\n====================================================`)
  console.log(`Done in ${Math.floor(elapsed / 60)}m ${elapsed % 60}s`)
  console.log(`  Cities processed:     ${citiesProcessed}`)
  console.log(`  Cities with results:  ${citiesWithResults}`)
  console.log(`  Businesses inserted:  ${totalInserted}`)
  console.log(`  Businesses skipped:   ${totalSkipped}`)
  console.log(`  API errors:           ${apiErrors}`)
  console.log(`  Log saved to:         ${logPath}`)
  console.log(`  Estimated API cost:   ~$${(citiesProcessed * 0.032).toFixed(2)}`)
}

main().catch((err) => { console.error('Fatal:', err); process.exit(1) })
