/**
 * Generates unique descriptions for businesses using Kimi API
 * and stores them in Supabase `businesses.description` column.
 *
 * Usage:
 *   node scripts/generate-business-descriptions.mjs           # all businesses without descriptions
 *   node scripts/generate-business-descriptions.mjs --limit 100   # first 100 only
 *   node scripts/generate-business-descriptions.mjs --all         # overwrite existing too
 *
 * Cost: ~$2-4 per 1,000 businesses
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

const SUPABASE_URL = envVars['NEXT_PUBLIC_SUPABASE_URL']
const SERVICE_KEY  = envVars['SUPABASE_SERVICE_ROLE_KEY']
const KIMI_API_KEY = envVars['KIMI_API_KEY']
const KIMI_API_URL = envVars['KIMI_API_URL'] || 'https://api.moonshot.ai/v1'

if (!SUPABASE_URL || !SERVICE_KEY) { console.error('❌  Missing Supabase credentials'); process.exit(1) }
if (!KIMI_API_KEY)                 { console.error('❌  Missing KIMI_API_KEY');          process.exit(1) }

const supabase = createClient(SUPABASE_URL, SERVICE_KEY)

const args     = process.argv.slice(2)
const LIMIT    = parseInt(args[args.indexOf('--limit') + 1] || '99999')
const OVERWRITE = args.includes('--all')

// ─── Kimi call ────────────────────────────────────────────────────────────────
async function generateDescription(biz, cityName, stateName) {
  const ratingStr  = biz.rating
    ? `They have a ${biz.rating}/5 rating based on ${biz.review_count.toLocaleString()} Google reviews.`
    : ''
  const addressStr = biz.address ? `Located at ${biz.address}.` : `Based in ${cityName}, ${stateName}.`

  const prompt = `Write a 2-3 sentence description for a dumpster rental company listing page.

Business: ${biz.name}
City: ${cityName}, ${stateName}
${addressStr}
${ratingStr}

Requirements:
- Mention the business name naturally in the first sentence
- Mention the city and/or state
- Reference common dumpster rental use cases (home cleanouts, renovation, roofing, construction, etc.)
- If rating is provided, mention it briefly
- End with a call to action (call, get a quote, or contact them)
- Plain text only, no markdown, no bullet points
- 2-3 sentences, 60-100 words total
- Unique and specific — not generic boilerplate

Write the description now:`

  const res = await fetch(`${KIMI_API_URL}/chat/completions`, {
    method:  'POST',
    headers: { 'Authorization': `Bearer ${KIMI_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model:      'kimi-k2-turbo-preview',
      messages:   [{ role: 'user', content: prompt }],
      max_tokens: 160,
      temperature: 0.85,
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
  console.log(`\n🚀  Business description generator`)
  console.log(`    Mode: ${OVERWRITE ? 'Overwrite all' : 'Only missing descriptions'}`)
  console.log(`    Limit: ${LIMIT === 99999 ? 'all' : LIMIT}\n`)

  // Fetch businesses that need descriptions (join city for name/state)
  let query = supabase
    .from('businesses')
    .select('id, name, address, rating, review_count, city:cities(city_name, state)')
    .eq('is_active', true)
    .order('rating', { ascending: false })
    .limit(LIMIT)

  if (!OVERWRITE) {
    query = query.is('description', null)
  }

  const { data: businesses, error } = await query
  if (error) { console.error('❌  Supabase error:', error.message); process.exit(1) }

  console.log(`📋  ${businesses.length} businesses to process`)

  // Estimate cost
  const estCost = (businesses.length * 0.003).toFixed(2)
  console.log(`💰  Estimated Kimi cost: ~$${estCost}\n`)

  let success = 0
  let failed  = 0
  let cursor  = 0
  const CONCURRENCY = 5

  async function processOne() {
    while (cursor < businesses.length) {
      const i   = cursor++
      const biz = businesses[i]
      const cityName  = biz.city?.city_name ?? 'your city'
      const stateName = biz.city?.state     ?? ''
      const label     = `${biz.name} (${cityName}, ${stateName})`

      process.stdout.write(`[${i + 1}/${businesses.length}] ${label}... `)

      try {
        const description = await generateDescription(biz, cityName, stateName)

        if (!description) {
          console.log('⚠️  Empty response, skipping')
          failed++
          continue
        }

        const { error: updateError } = await supabase
          .from('businesses')
          .update({ description })
          .eq('id', biz.id)

        if (updateError) {
          console.log(`❌  DB: ${updateError.message}`)
          failed++
        } else {
          console.log('✓')
          success++
        }
      } catch (err) {
        console.log(`❌  ${err.message}`)
        failed++
        await new Promise((r) => setTimeout(r, 2000))
      }
    }
  }

  await Promise.all(Array.from({ length: CONCURRENCY }, processOne))

  console.log(`\n🎉  Done!`)
  console.log(`    ${success} descriptions generated`)
  console.log(`    ${failed} failed`)
  if (failed > 0) console.log(`    Re-run without --all to fill in failures`)
}

main().catch((err) => { console.error('Fatal:', err); process.exit(1) })
