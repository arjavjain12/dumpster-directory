import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      // Block aggressive scrapers and SEO crawlers
      { userAgent: 'AhrefsBot', disallow: '/' },
      { userAgent: 'SemrushBot', disallow: '/' },
      { userAgent: 'DotBot', disallow: '/' },
      { userAgent: 'MJ12bot', disallow: '/' },
      { userAgent: 'BLEXBot', disallow: '/' },
      { userAgent: 'PetalBot', disallow: '/' },
      { userAgent: 'serpstatbot', disallow: '/' },
      { userAgent: 'SEOkicks', disallow: '/' },
      { userAgent: 'Baiduspider', disallow: '/' },
      { userAgent: 'YandexBot', disallow: '/' },
      { userAgent: 'Bytespider', disallow: '/' },
      // Explicit AI bot access for GEO (Generative Engine Optimization)
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'ChatGPT-User', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'anthropic-ai', allow: '/' },
      { userAgent: 'Googlebot', allow: '/' },
      { userAgent: 'Bingbot', allow: '/' },
    ],
    sitemap: [
      'https://dumpsterlisting.com/sitemap.xml',
      'https://dumpsterlisting.com/cities-sitemap.xml',
      'https://dumpsterlisting.com/cities-cost-sitemap.xml',
      'https://dumpsterlisting.com/businesses-sitemap.xml',
    ],
  }
}
