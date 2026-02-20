import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
    ],
    sitemap: [
      'https://dumpsterlisting.com/sitemap.xml',
      'https://dumpsterlisting.com/cities-sitemap.xml',
      'https://dumpsterlisting.com/businesses-sitemap.xml',
    ],
  }
}
