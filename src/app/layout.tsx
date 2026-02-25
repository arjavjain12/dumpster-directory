import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
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
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-green-700 focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Skip to main content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-RPM642YBHC"
          strategy="afterInteractive"
        />
        <Script
          id="ga4"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-RPM642YBHC');`,
          }}
        />
        {/* Tawk.to chat widget */}
        <Script
          id="tawk-to"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `var Tawk_API=Tawk_API||{},Tawk_LoadStart=new Date();(function(){var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];s1.async=true;s1.src='https://embed.tawk.to/699b01252c4f881c3a336e7c/1ji2novd4';s1.charset='UTF-8';s1.setAttribute('crossorigin','*');s0.parentNode.insertBefore(s1,s0);})();`,
          }}
        />
      </body>
    </html>
  )
}
