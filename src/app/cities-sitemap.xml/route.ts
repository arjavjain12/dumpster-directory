import { createClient } from '@supabase/supabase-js'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://dumpsterlisting.com'

// Escape XML special characters in a URL so the sitemap remains well-formed.
function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

export async function GET() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    return new Response('Supabase credentials are not configured.', { status: 500 })
  }

  const supabase = createClient(supabaseUrl, supabaseAnonKey)

  // Fetch all cities with pagination (Supabase default limit is 1000 rows)
  const PAGE = 1000
  let allCities: Array<{ state_slug: string; city_slug: string }> = []
  let from = 0

  while (true) {
    const { data, error } = await supabase
      .from('cities')
      .select('state_slug, city_slug')
      .range(from, from + PAGE - 1)

    if (error) {
      return new Response(`Failed to fetch cities: ${error.message}`, { status: 500 })
    }

    if (!data || data.length === 0) break
    allCities = allCities.concat(data)
    if (data.length < PAGE) break
    from += PAGE
  }

  const cities = allCities

  const lastmod = new Date().toISOString().split('T')[0] // YYYY-MM-DD

  const urlEntries = cities
    .map(({ state_slug, city_slug }) => {
      const loc = escapeXml(`${BASE_URL}/dumpster-rental/${state_slug}/${city_slug}`)
      return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`
    })
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      // Allow CDN / browser caching for up to 1 hour.
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
    },
  })
}
