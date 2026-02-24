import { MetadataRoute } from 'next'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://dumpsterlisting.com'

// This is the main sitemap. It covers all static, category, and state-level
// pages. The large dynamic collections (cities, businesses) are split into
// dedicated sub-sitemaps served from their own routes so that no single
// sitemap exceeds the 50 000-URL / 50 MB limit.

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  // ── Static pages ────────────────────────────────────────────────────────────
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/dumpster-rental`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/dumpster-rental-cost`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/how-much-does-dumpster-rental-cost`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/dumpster-rental-near-me`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/dumpster-sizes`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/small-dumpster-rental`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/large-dumpster-rental`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/cheap-dumpster-rental`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/list-your-business`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    // Calculators
    {
      url: `${BASE_URL}/dumpster-size-estimator`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/cubic-yard-calculator`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/concrete-weight-calculator`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/drywall-weight-calculator`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Disposal guides
    {
      url: `${BASE_URL}/dumpster-rental-vs-junk-removal`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/what-can-you-put-in-a-dumpster`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/how-to-dispose-of-furniture`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/how-to-dispose-of-concrete`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/how-to-dispose-of-yard-waste`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // Comparison & info guides
    {
      url: `${BASE_URL}/20-yard-dumpster-vs-30-yard-dumpster`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/roll-off-dumpster-sizes`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/dumpster-rental-permit`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/how-long-can-you-keep-a-rental-dumpster`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/dumpster-weight-limit-calculator`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]

  // ── Dumpster-size detail pages ───────────────────────────────────────────────
  const sizePages: MetadataRoute.Sitemap = [10, 15, 20, 30, 40].map((size) => ({
    url: `${BASE_URL}/dumpster-sizes/${size}-yard`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // ── Category pages ───────────────────────────────────────────────────────────
  const categories = [
    'construction',
    'roll-off',
    'residential',
    'commercial',
    'concrete',
    'yard-waste',
    'roofing',
  ]
  const categoryPages: MetadataRoute.Sitemap = categories.map((slug) => ({
    url: `${BASE_URL}/dumpster-rental/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...sizePages, ...categoryPages]
}
