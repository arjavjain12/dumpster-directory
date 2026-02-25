/**
 * Fetches OG/meta images from business websites and stores them in Supabase.
 * Run: node scripts/fetch-business-images.mjs
 */

import { createClient } from '@supabase/supabase-js'
import { readFileSync } from 'fs'

// Load env
const env = readFileSync('.env.local', 'utf8')
const SUPABASE_URL = env.match(/NEXT_PUBLIC_SUPABASE_URL=(.+)/)[1].trim()
const SERVICE_KEY = env.match(/SUPABASE_SERVICE_ROLE_KEY=(.+)/)[1].trim()

const supabase = createClient(SUPABASE_URL, SERVICE_KEY)

const BATCH_SIZE = 20
const TIMEOUT_MS = 8000
const FAKE_DOMAIN_PATTERNS = ['example.com', 'placeholder', 'localhost', '127.0.0.1']

function isFakeDomain(url) {
  return FAKE_DOMAIN_PATTERNS.some(p => url.includes(p))
}

async function fetchOgImage(website) {
  try {
    const url = website.startsWith('http') ? website : `https://${website}`
    if (isFakeDomain(url)) return null

    const controller = new AbortController()
    const timer = setTimeout(() => controller.abort(), TIMEOUT_MS)

    const res = await fetch(url, {
      signal: controller.signal,
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; DumpsterListing/1.0)' },
    })
    clearTimeout(timer)

    if (!res.ok) return null

    const html = await res.text()

    // Try og:image first, then twitter:image, then first large img src
    const ogMatch = html.match(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i)
      || html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image["']/i)
    if (ogMatch?.[1]) return resolveUrl(ogMatch[1], url)

    const twitterMatch = html.match(/<meta[^>]+name=["']twitter:image["'][^>]+content=["']([^"']+)["']/i)
      || html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+name=["']twitter:image["']/i)
    if (twitterMatch?.[1]) return resolveUrl(twitterMatch[1], url)

    return null
  } catch {
    return null
  }
}

function resolveUrl(imageUrl, baseUrl) {
  if (!imageUrl) return null
  if (imageUrl.startsWith('http')) return imageUrl
  try {
    return new URL(imageUrl, baseUrl).href
  } catch {
    return null
  }
}

async function processBatch(businesses) {
  return Promise.all(
    businesses.map(async (b) => {
      if (!b.website) return { id: b.id, image: null }
      const image = await fetchOgImage(b.website)
      return { id: b.id, image }
    })
  )
}

async function main() {
  console.log('Fetching businesses with websites...')

  const { data: businesses, error } = await supabase
    .from('businesses')
    .select('id, name, website, photos')
    .not('website', 'is', null)
    .neq('website', '')
    .order('id')

  if (error) { console.error(error); process.exit(1) }

  // Only process businesses that don't already have photos
  const toProcess = businesses.filter(b => !b.photos?.length)
  console.log(`${businesses.length} total with website. ${toProcess.length} need images.`)

  let found = 0, skipped = 0, failed = 0

  for (let i = 0; i < toProcess.length; i += BATCH_SIZE) {
    const batch = toProcess.slice(i, i + BATCH_SIZE)
    const results = await processBatch(batch)

    for (const { id, image } of results) {
      if (image) {
        const { error: updateErr } = await supabase
          .from('businesses')
          .update({ photos: [image] })
          .eq('id', id)
        if (updateErr) { failed++; continue }
        found++
      } else {
        skipped++
      }
    }

    const progress = Math.min(i + BATCH_SIZE, toProcess.length)
    console.log(`Progress: ${progress}/${toProcess.length} | Found: ${found} | No image: ${skipped} | Errors: ${failed}`)
  }

  console.log(`\nDone! Found images for ${found} businesses. ${skipped} had no OG image. ${failed} errors.`)
}

main()
