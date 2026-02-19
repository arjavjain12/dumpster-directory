import { createClient } from '@supabase/supabase-js'
import { parse } from 'csv-parse/sync'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

// ─── Load env ────────────────────────────────────────────────────────────────
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const envPath = path.join(__dirname, '..', '.env.local')
const envVars = Object.fromEntries(
  fs.readFileSync(envPath, 'utf8')
    .split('\n')
    .filter((l) => l.includes('=') && !l.startsWith('#'))
    .map((l) => {
      const idx = l.indexOf('=')
      return [l.slice(0, idx).trim(), l.slice(idx + 1).trim()]
    })
)

const SUPABASE_URL = envVars['NEXT_PUBLIC_SUPABASE_URL']
const SERVICE_KEY  = envVars['SUPABASE_SERVICE_ROLE_KEY']

if (!SUPABASE_URL || !SERVICE_KEY) {
  console.error('❌  Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env.local')
  process.exit(1)
}

const supabase = createClient(SUPABASE_URL, SERVICE_KEY)

// ─── Slug helper ─────────────────────────────────────────────────────────────
function slugify(str) {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')   // strip accents
    .replace(/[^a-z0-9\s-]/g, '')      // remove special chars
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}

// ─── Parse CSV ───────────────────────────────────────────────────────────────
const csvPath = '/Users/arjav/Downloads/simplemaps_uscities_basicv1.93/uscities.csv'
console.log('📂  Reading CSV…')
const raw  = fs.readFileSync(csvPath, 'utf8')
const rows = parse(raw, { columns: true, skip_empty_lines: true })
console.log(`    ${rows.length} raw rows`)

// ─── Transform ───────────────────────────────────────────────────────────────
const slugsSeen = new Set()
const cities = []

for (const row of rows) {
  if (row.military === 'TRUE') continue   // skip military installations

  const cityName  = row.city
  const stateName = row.state_name
  const stateSlug = slugify(stateName)
  let   citySlug  = slugify(row.city_ascii || row.city)

  if (!citySlug || !stateSlug) continue

  // Handle duplicate city slugs within the same state (e.g. two "Washington"s)
  const baseKey = `${stateSlug}/${citySlug}`
  if (slugsSeen.has(baseKey)) {
    const countySlug = slugify(row.county_name || 'unknown')
    citySlug = `${citySlug}-${countySlug}`
    // If still a duplicate, skip (extremely rare)
    if (slugsSeen.has(`${stateSlug}/${citySlug}`)) continue
  }
  slugsSeen.add(`${stateSlug}/${citySlug}`)

  cities.push({
    city_name:   cityName,
    city_slug:   citySlug,
    state:       stateName,
    state_slug:  stateSlug,
    county:      row.county_name ? `${row.county_name} County` : null,
    metro_area:  null,
    population:  parseInt(row.population) || 0,
    latitude:    parseFloat(row.lat)  || null,
    longitude:   parseFloat(row.lng)  || null,
  })
}

console.log(`✅  ${cities.length} cities ready to insert (${rows.length - cities.length} skipped)`)

// ─── Batch upsert ────────────────────────────────────────────────────────────
const BATCH = 500
let total = 0

for (let i = 0; i < cities.length; i += BATCH) {
  const chunk = cities.slice(i, i + BATCH)
  const batchNum = Math.floor(i / BATCH) + 1
  const totalBatches = Math.ceil(cities.length / BATCH)

  const { error } = await supabase
    .from('cities')
    .upsert(chunk, { onConflict: 'state_slug,city_slug', ignoreDuplicates: true })

  if (error) {
    console.error(`❌  Batch ${batchNum}/${totalBatches} failed:`, error.message)
  } else {
    total += chunk.length
    process.stdout.write(`\r⏳  Batch ${batchNum}/${totalBatches} — ${total} cities inserted`)
  }
}

console.log(`\n\n🎉  Done! ${total} cities upserted into Supabase.`)
