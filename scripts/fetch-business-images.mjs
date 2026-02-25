/**
 * Fetches up to 3 images from business websites and stores them in Supabase.
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
const MAX_IMAGES = 3
const FAKE_DOMAIN_PATTERNS = ['example.com', 'placeholder', 'localhost', '127.0.0.1']

function isFakeDomain(url) {
  return FAKE_DOMAIN_PATTERNS.some(p => url.includes(p))
}

async function fetchImages(website) {
  try {
    const url = website.startsWith('http') ? website : `https://${website}`
    if (isFakeDomain(url)) return []

    const controller = new AbortController()
    const timer = setTimeout(() => controller.abort(), TIMEOUT_MS)

    const res = await fetch(url, {
      signal: controller.signal,
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; DumpsterListing/1.0)' },
    })
    clearTimeout(timer)

    if (!res.ok) return []

    const html = await res.text()
    const images = []
    const seen = new Set()

    function addImage(src) {
      const resolved = resolveUrl(src, url)
      if (resolved && !seen.has(resolved)) {
        seen.add(resolved)
        images.push(resolved)
      }
    }

    // 1. og:image
    const ogMatch = html.match(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i)
      || html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image["']/i)
    if (ogMatch?.[1]) addImage(ogMatch[1])

    // 2. twitter:image
    const twitterMatch = html.match(/<meta[^>]+name=["']twitter:image["'][^>]+content=["']([^"']+)["']/i)
      || html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+name=["']twitter:image["']/i)
    if (twitterMatch?.[1]) addImage(twitterMatch[1])

    // 3. Large body images (up to fill MAX_IMAGES quota)
    if (images.length < MAX_IMAGES) {
      const imgMatches = [...html.matchAll(/<img[^>]+src=["']([^"']+\.(?:jpg|jpeg|png|webp))["'][^>]*>/gi)]
      for (const match of imgMatches) {
        if (images.length >= MAX_IMAGES) break
        const src = match[1]
        if (src.match(/logo|icon|pixel|spacer|tracking|banner-\d+x\d+|sprite/i)) continue
        if (src.match(/\b(1x1|2x2|10x10)\b/)) continue
        addImage(src)
      }
    }

    return images.slice(0, MAX_IMAGES)
  } catch {
    return []
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
      if (!b.website) return { id: b.id, images: [] }
      const images = await fetchImages(b.website)
      return { id: b.id, images }
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

  // Process all businesses — update if they have fewer than MAX_IMAGES photos
  const toProcess = businesses.filter(b => (b.photos?.length ?? 0) < MAX_IMAGES)
  console.log(`${businesses.length} total with website. ${toProcess.length} need images (or more images).`)

  let found = 0, skipped = 0, failed = 0

  for (let i = 0; i < toProcess.length; i += BATCH_SIZE) {
    const batch = toProcess.slice(i, i + BATCH_SIZE)
    const results = await processBatch(batch)

    for (const { id, images } of results) {
      if (images.length > 0) {
        const { error: updateErr } = await supabase
          .from('businesses')
          .update({ photos: images })
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

  console.log(`\nDone! Updated ${found} businesses. ${skipped} had no images. ${failed} errors.`)
}

main()
