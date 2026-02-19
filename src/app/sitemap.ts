import { MetadataRoute } from 'next'
import { getAllCitySlugs, getAllStates } from '@/lib/supabase'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date()

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE_URL}/dumpster-rental`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/dumpster-sizes`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/dumpster-rental-near-me`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    ...[10, 15, 20, 30, 40].map((size) => ({
      url: `${BASE_URL}/dumpster-sizes/${size}-yard`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]

  // State pages from Supabase
  const states = await getAllStates()
  const statePages: MetadataRoute.Sitemap = states.map((s: { state_slug: string }) => ({
    url: `${BASE_URL}/dumpster-rental/${s.state_slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // City pages + cost pages from Supabase
  const slugs = await getAllCitySlugs()
  const cityPages: MetadataRoute.Sitemap = slugs.flatMap((c: { state_slug: string; city_slug: string }) => [
    {
      url: `${BASE_URL}/dumpster-rental/${c.state_slug}/${c.city_slug}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/dumpster-rental/${c.state_slug}/${c.city_slug}/cost`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
  ])

  return [...staticPages, ...statePages, ...cityPages]
}
