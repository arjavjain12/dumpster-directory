/**
 * Generates unique intro paragraphs for top cities using Kimi API
 * and stores them in Supabase `cities.intro` column.
 *
 * Usage:
 *   node scripts/generate-city-intros.mjs
 *   node scripts/generate-city-intros.mjs --limit 100   (only top 100 by population)
 *   node scripts/generate-city-intros.mjs --resume      (skip cities that already have intros)
 *
 * Prerequisites:
 *   1. Run the SQL migration to add the intro column:
 *      ALTER TABLE cities ADD COLUMN IF NOT EXISTS intro text;
 *   2. KIMI_API_KEY and SUPABASE_SERVICE_ROLE_KEY must be in .env.local
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
    .map((l) => {
      const idx = l.indexOf('=')
      return [l.slice(0, idx).trim(), l.slice(idx + 1).trim()]
    })
)

const SUPABASE_URL   = envVars['NEXT_PUBLIC_SUPABASE_URL']
const SERVICE_KEY    = envVars['SUPABASE_SERVICE_ROLE_KEY']
const KIMI_API_KEY   = envVars['KIMI_API_KEY']
const KIMI_API_URL   = envVars['KIMI_API_URL'] || 'https://api.moonshot.ai/v1'

if (!SUPABASE_URL || !SERVICE_KEY) {
  console.error('❌  Missing Supabase credentials in .env.local')
  process.exit(1)
}
if (!KIMI_API_KEY) {
  console.error('❌  Missing KIMI_API_KEY in .env.local')
  process.exit(1)
}

const supabase = createClient(SUPABASE_URL, SERVICE_KEY)

// ─── Args ─────────────────────────────────────────────────────────────────────
const args     = process.argv.slice(2)
const LIMIT    = parseInt(args[args.indexOf('--limit') + 1] || '500')
const RESUME   = args.includes('--resume')

// ─── Kimi call ────────────────────────────────────────────────────────────────
async function generateIntro(cityName, stateName, county, population) {
  const popStr = population > 0 ? `Population: ${population.toLocaleString()}.` : ''
  const prompt = `Write a 2-sentence intro paragraph for a dumpster rental directory page for ${cityName}, ${stateName} (${county}). ${popStr}

Requirements:
- Mention the city name and state naturally
- Reference the county or a local characteristic if helpful (projects, growth, home types common in the area)
- End with a call to compare local dumpster rental companies
- Write in second-person ("you") or third-person
- Do NOT use the phrase "look no further" or "nestled"
- Do NOT use markdown, just plain text
- Exactly 2 sentences, no more

Example output style:
Whether you're tackling a kitchen remodel in one of Maricopa County's fast-growing subdivisions or clearing out an estate in Central Phoenix, the right dumpster rental company makes the job faster and cheaper. Use this directory to compare local roll-off providers, read reviews, and get free quotes from companies that serve Phoenix, AZ.`

  const res = await fetch(`${KIMI_API_URL}/chat/completions`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${KIMI_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'moonshot-v1-8k',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 150,
      temperature: 0.8,
    }),
  })

  if (!res.ok) {
    const err = await res.text()
    throw new Error(`Kimi API error ${res.status}: ${err}`)
  }

  const data = await res.json()
  return data.choices?.[0]?.message?.content?.trim() || null
}

// ─── Main ─────────────────────────────────────────────────────────────────────
async function main() {
  console.log(`🚀  Starting city intro generation`)
  console.log(`    Limit: top ${LIMIT} cities by population`)
  console.log(`    Resume mode: ${RESUME ? 'ON (skip existing)' : 'OFF'}`)
  console.log()

  // Fetch top cities by population
  let query = supabase
    .from('cities')
    .select('id, city_name, state, state_slug, county, population, intro')
    .order('population', { ascending: false })
    .limit(LIMIT)

  if (RESUME) {
    query = query.is('intro', null)
  }

  const { data: cities, error } = await query
  if (error) {
    console.error('❌  Failed to fetch cities:', error.message)
    process.exit(1)
  }

  console.log(`📋  ${cities.length} cities to process\n`)

  let success = 0
  let failed  = 0

  for (let i = 0; i < cities.length; i++) {
    const city = cities[i]
    const label = `${city.city_name}, ${city.state}`

    process.stdout.write(`[${i + 1}/${cities.length}] ${label}... `)

    try {
      const intro = await generateIntro(
        city.city_name,
        city.state,
        city.county || `${city.state}`,
        city.population || 0
      )

      if (!intro) {
        console.log('⚠️  Empty response, skipping')
        failed++
        continue
      }

      const { error: upsertError } = await supabase
        .from('cities')
        .update({ intro })
        .eq('id', city.id)

      if (upsertError) {
        console.log(`❌  DB error: ${upsertError.message}`)
        failed++
      } else {
        console.log('✓')
        success++
      }

      // Rate limit: ~3 requests/sec to stay within Kimi limits
      await new Promise((r) => setTimeout(r, 350))

    } catch (err) {
      console.log(`❌  ${err.message}`)
      failed++

      // Back off on errors
      await new Promise((r) => setTimeout(r, 2000))
    }
  }

  console.log(`\n✅  Done! ${success} intros generated, ${failed} failed.`)
  console.log(`    Run with --resume to fill in any that failed.`)
}

main()
