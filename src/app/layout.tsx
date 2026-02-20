import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'DumpsterListing — Find Dumpster Rental Companies Near You',
    template: '%s | DumpsterListing',
  },
  description:
    'Compare dumpster rental companies in your city. Get free quotes from local providers. 10, 20, 30, 40 yard roll-off dumpsters available.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  openGraph: {
    type: 'website',
    siteName: 'DumpsterListing',
    images: [{ url: '/api/og', width: 1200, height: 630, alt: 'DumpsterListing — Find Dumpster Rental Companies Near You' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DumpsterListing — Find Dumpster Rental Companies Near You',
    description: 'Compare dumpster rental companies in your city. Free quotes from local roll-off providers.',
    images: ['/api/og'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://dumpsterlisting.com/#organization',
      name: 'DumpsterListing',
      url: 'https://dumpsterlisting.com',
      description: 'The largest directory of dumpster rental companies in the United States.',
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'hello@dumpsterlisting.com',
        contactType: 'customer support',
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://dumpsterlisting.com/#website',
      url: 'https://dumpsterlisting.com',
      name: 'DumpsterListing',
      publisher: { '@id': 'https://dumpsterlisting.com/#organization' },
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://dumpsterlisting.com/dumpster-rental/{search_term_string}',
        },
        'query-input': 'required name=search_term_string',
      },
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-gray-50 text-gray-900`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
