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
      'https://dumpstersearch.com/sitemap.xml',
      'https://dumpstersearch.com/cities-sitemap.xml',
      'https://dumpstersearch.com/businesses-sitemap.xml',
    ],
  }
}
