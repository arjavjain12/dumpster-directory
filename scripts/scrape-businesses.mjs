/**
 * Scrapes dumpster rental businesses from Google Maps via Apify
 * and inserts them into the Supabase businesses table.
 *
 * Tiered limits for maximum coverage quality:
 *   Rank 1–50    → 20 results/city  (major metros)
 *   Rank 51–200  → 10 results/city  (large cities)
 *   Rank 201–500 → 7  results/city  (mid-size cities)
 *   Rank 501+    → 5  results/city  (smaller cities)
 *
 * Usage:
 *   node scripts/scrape-businesses.mjs               # top 2000 cities (~$49)
 *   node scripts/scrape-businesses.mjs --limit 200   # top 200 cities (~$14)
 *   node scripts/scrape-businesses.mjs --limit 10    # test run (~$0.40)
 */

import { createClient } from '@supabase/supabase-js'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

// ─── Load env ─────────────────────────────────────────────────────────────────
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const envPath   = path.join(__dirname, '..', '.env.local')
const envVars   = Object.fromEntries(
  fs.readFileSync(envPath, 'utf8')
    .split('\n')
    .filter((l) => l.includes('=') && !l.startsWith('#'))
    .map((l) => { const i = l.indexOf('='); return [l.slice(0, i).trim(), l.slice(i + 1).trim()] })
)

const SUPABASE_URL  = envVars['NEXT_PUBLIC_SUPABASE_URL']
const SERVICE_KEY   = envVars['SUPABASE_SERVICE_ROLE_KEY']
const APIFY_TOKEN   = envVars['APIFY_TOKEN']

if (!SUPABASE_URL || !SERVICE_KEY) { console.error('❌  Missing Supabase credentials'); process.exit(1) }
if (!APIFY_TOKEN)                  { console.error('❌  Missing APIFY_TOKEN');           process.exit(1) }

const supabase   = createClient(SUPABASE_URL, SERVICE_KEY)
const ACTOR_ID   = 'compass~crawler-google-places'
const BATCH_SIZE = 150   // cities per Apify run

// ─── Tiered limits by city population rank ────────────────────────────────────
const TIERS = [
  { upTo: 50,   maxPerCity: 20 },   // NYC, LA, Chicago, etc.   ~$0.08/city
  { upTo: 200,  maxPerCity: 10 },   // large cities             ~$0.04/city
  { upTo: 500,  maxPerCity: 7  },   // mid-size cities          ~$0.028/city
  { upTo: Infinity, maxPerCity: 5 }, // smaller cities          ~$0.02/city
]

function getTierLimit(rank) {
  for (const tier of TIERS) {
    if (rank <= tier.upTo) return tier.maxPerCity
  }
  return 5
}

// ─── State abbreviations ──────────────────────────────────────────────────────
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
  'Washington DC':'DC','District of Columbia':'DC',
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
function slugify(str) {
  return str.toLowerCase().normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim().replace(/\s+/g, '-').replace(/-+/g, '-')
}

async function apifyPost(path, body) {
  const res = await fetch(`https://api.apify.com/v2${path}?token=${APIFY_TOKEN}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
  const data = await res.json()
  if (!res.ok) throw new Error(`Apify POST ${path} failed: ${JSON.stringify(data)}`)
  return data
}

async function apifyGet(path) {
  const res = await fetch(`https://api.apify.com/v2${path}?token=${APIFY_TOKEN}&limit=10000`)
  if (!res.ok) throw new Error(`Apify GET ${path} failed: ${res.status}`)
  return res.json()
}

async function waitForRun(runId) {
  const start = Date.now()
  while (true) {
    const { data } = await apifyGet(`/actor-runs/${runId}`)
    const { status } = data
    if (status === 'SUCCEEDED') return data
    if (status === 'FAILED' || status === 'ABORTED') throw new Error(`Run ${runId} ${status}`)
    const elapsed = Math.round((Date.now() - start) / 1000)
    process.stdout.write(`\r    ⏳ ${status} (${elapsed}s)...                  `)
    await new Promise((r) => setTimeout(r, 12000))
  }
}

async function processBatch(slice, maxPerCity, idMap, batchLabel) {
  // Start Apify run
  let runId
  try {
    const { data } = await apifyPost(`/acts/${ACTOR_ID}/runs`, {
      searchStringsArray:        slice,
      maxCrawledPlacesPerSearch: maxPerCity,
      language:                  'en',
      maxImages:                 0,
      exportPlaceUrls:           false,
      additionalInfo:            false,
      maxReviews:                0,
      scrapeContacts:            false,
      skipClosedPlaces:          false,
    })
    runId = data.id
    console.log(`    Run ID: ${runId}`)
  } catch (err) {
    console.error(`    ❌  Failed to start run: ${err.message}`)
    return 0
  }

  // Wait for completion
  let runData
  try {
    runData = await waitForRun(runId)
    console.log(`\n    ✅  Run completed`)
  } catch (err) {
    console.error(`\n    ❌  Run failed: ${err.message}`)
    return 0
  }

  // Fetch results
  const items = await apifyGet(`/datasets/${runData.defaultDatasetId}/items`)
  console.log(`    📊  ${items?.length ?? 0} raw results`)
  if (!Array.isArray(items) || items.length === 0) return 0

  // Map results → businesses
  const toInsert  = []
  const slugsSeen = new Set()

  for (const item of items) {
    if (!item.title || !item.searchString) continue
    if (item.permanentlyClosed) continue

    const cityId = idMap.get(item.searchString.toLowerCase())
    if (!cityId) continue

    const cats = (item.categories || []).join(' ').toLowerCase()
    const name = (item.title || '').toLowerCase()
    const relevant =
      cats.includes('dumpster') || cats.includes('waste')    ||
      cats.includes('junk')     || cats.includes('haul')     ||
      cats.includes('trash')    || cats.includes('roll')     ||
      name.includes('dumpster') || name.includes('waste')    ||
      name.includes('junk')     || name.includes('disposal') ||
      name.includes('haul')     || name.includes('sanitation') ||
      name.includes('roll')     || name.includes('rubbish')
    if (!relevant) continue

    let slug  = slugify(item.title)
    const key = `${cityId}/${slug}`
    if (slugsSeen.has(key)) {
      slug = `${slug}-2`
      if (slugsSeen.has(`${cityId}/${slug}`)) continue
    }
    slugsSeen.add(`${cityId}/${slug}`)

    toInsert.push({
      city_id:         cityId,
      name:            item.title,
      slug,
      address:         item.address     || null,
      phone:           item.phone       || null,
      website:         item.website     || null,
      google_place_id: item.placeId     || null,
      rating:          item.totalScore  || null,
      review_count:    item.reviewsCount || 0,
      description:     item.description || null,
      tier:            'free',
      is_active:       true,
    })
  }

  console.log(`    📝  ${toInsert.length} relevant businesses to insert`)
  if (toInsert.length === 0) return 0

  // Upsert in chunks of 500
  for (let i = 0; i < toInsert.length; i += 500) {
    const chunk       = toInsert.slice(i, i + 500)
    const withPlaceId = chunk.filter(r => r.google_place_id)
    const withoutId   = chunk.filter(r => !r.google_place_id)

    if (withPlaceId.length > 0) {
      const { error } = await supabase
        .from('businesses')
        .upsert(withPlaceId, { onConflict: 'google_place_id', ignoreDuplicates: true })
      if (error) console.error(`    ❌  Upsert (place_id) error: ${error.message}`)
    }

    if (withoutId.length > 0) {
      const { error } = await supabase
        .from('businesses')
        .upsert(withoutId, { onConflict: 'city_id,slug', ignoreDuplicates: true })
      if (error) console.error(`    ❌  Upsert (city+slug) error: ${error.message}`)
    }
  }

  return toInsert.length
}

// ─── Main ─────────────────────────────────────────────────────────────────────
async function main() {
  const args   = process.argv.slice(2)
  const limit  = parseInt(args[args.indexOf('--limit')  + 1] || '2000')
  const offset = parseInt(args[args.indexOf('--offset') + 1] || '0')

  console.log(`\n🚀  Dumpster business scraper (tiered limits)`)
  console.log(`    Cities: ${offset + 1}–${offset + limit} by population`)
  console.log(`    Tiers: rank 1-50 → 20/city | 51-200 → 10/city | 201-500 → 7/city | 501+ → 5/city\n`)

  // Estimate cost
  const est50   = Math.max(0, Math.min(50,  offset + limit) - Math.max(0,  offset))
  const est200  = Math.max(0, Math.min(200, offset + limit) - Math.max(50,  offset))
  const est500  = Math.max(0, Math.min(500, offset + limit) - Math.max(200, offset))
  const estRest = Math.max(0, (offset + limit) - Math.max(500, offset))
  const estCost = (est50 * 20 + est200 * 10 + est500 * 7 + estRest * 5) * 0.004
  console.log(`    💰  Estimated cost: $${estCost.toFixed(2)}\n`)

  // Fetch cities in pages of 1000 (Supabase row limit)
  let cities = []
  let page   = 0
  const PAGE = 1000
  while (cities.length < limit) {
    const from = offset + page * PAGE
    const to   = from + Math.min(PAGE, limit - cities.length) - 1
    const { data, error: cityErr } = await supabase
      .from('cities')
      .select('id, city_name, state')
      .order('population', { ascending: false })
      .range(from, to)
    if (cityErr) { console.error('❌  Supabase error:', cityErr.message); process.exit(1) }
    if (!data || data.length === 0) break
    cities = cities.concat(data)
    if (data.length < PAGE) break
    page++
  }
  console.log(`📋  ${cities.length} cities loaded`)

  // Build search strings + city map
  const idMap = new Map()
  for (const city of cities) {
    const abbr   = STATE_ABBR[city.state] || ''
    const search = `dumpster rental ${city.city_name} ${abbr}`.trim()
    idMap.set(search.toLowerCase(), city.id)
  }

  // ── Group cities into tier segments ─────────────────────────────────────────
  // Each segment: { maxPerCity, searches[] }
  const segments = []
  let prevUpTo = 0
  for (const tier of TIERS) {
    const from = prevUpTo
    const to   = Math.min(tier.upTo, cities.length)
    if (from >= to) { prevUpTo = tier.upTo; continue }
    const slice = cities.slice(from, to).map(c => {
      const abbr = STATE_ABBR[c.state] || ''
      return `dumpster rental ${c.city_name} ${abbr}`.trim()
    })
    segments.push({ maxPerCity: tier.maxPerCity, searches: slice, from: from + 1, to })
    prevUpTo = tier.upTo
    if (to >= cities.length) break
  }

  // ── Process each segment in BATCH_SIZE chunks ────────────────────────────────
  let totalBusiness = 0
  let totalCities   = 0
  let batchNum      = 0
  const totalBatches = segments.reduce((acc, s) => acc + Math.ceil(s.searches.length / BATCH_SIZE), 0)

  for (const seg of segments) {
    const batches = Math.ceil(seg.searches.length / BATCH_SIZE)
    console.log(`\n🏙️  Tier: ${seg.maxPerCity} results/city — cities ranked ${seg.from}–${seg.to} (${seg.searches.length} cities, ${batches} batch${batches > 1 ? 'es' : ''})`)

    for (let b = 0; b < batches; b++) {
      batchNum++
      const slice = seg.searches.slice(b * BATCH_SIZE, (b + 1) * BATCH_SIZE)
      console.log(`\n📦  Batch ${batchNum}/${totalBatches} — ${slice.length} cities @ ${seg.maxPerCity} results each`)

      const inserted = await processBatch(slice, seg.maxPerCity, idMap, `${batchNum}/${totalBatches}`)
      totalBusiness += inserted
      totalCities   += slice.length
      console.log(`    ✅  Inserted. Running total: ${totalBusiness} businesses across ${totalCities} cities`)

      if (b < batches - 1 || seg !== segments[segments.length - 1]) {
        await new Promise((r) => setTimeout(r, 3000))
      }
    }
  }

  console.log(`\n🎉  Done!`)
  console.log(`    ${totalBusiness} businesses inserted`)
  console.log(`    ${totalCities} cities covered`)
}

main().catch((err) => { console.error('Fatal:', err); process.exit(1) })
