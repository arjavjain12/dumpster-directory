import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, ArrowRight, Search, Truck, DollarSign, CheckCircle, Package } from 'lucide-react'
import Breadcrumbs from '@/components/Breadcrumbs'
import AuthorByline from '@/components/AuthorByline'
import { STATE_NAMES } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Rent a Dumpster — Compare Prices & Book Online (2026)',
  description:
    'Rent a dumpster for any project. Compare local prices from $275, choose 10–40 yard roll-offs, and schedule delivery online. Free quotes from companies in 31,000+ US cities.',
  alternates: { canonical: 'https://dumpsterlisting.com/rent-a-dumpster' },
  openGraph: {
    title: 'Rent a Dumpster — Compare Prices & Book Online (2026)',
    description: 'Find dumpster rental companies near you. Compare prices and get free quotes for 10–40 yard roll-off dumpsters.',
    url: 'https://dumpsterlisting.com/rent-a-dumpster',
    images: [{ url: '/api/og?title=Rent%20a%20Dumpster&subtitle=Compare%20prices%20%C2%B7%20Free%20quotes%20%C2%B7%2031%2C000%2B%20cities', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rent a Dumpster — Compare Prices & Book Online',
  description: 'How to rent a dumpster: compare local prices, choose the right size, and schedule delivery.',
  datePublished: '2025-06-01',
  dateModified: '2026-03-06',
  author: { '@type': 'Organization', name: 'DumpsterListing', url: 'https://dumpsterlisting.com' },
  publisher: { '@type': 'Organization', name: 'DumpsterListing', url: 'https://dumpsterlisting.com' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://dumpsterlisting.com/rent-a-dumpster' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I rent a dumpster?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Renting a dumpster is simple: (1) Choose the right size for your project — 10-yard for small cleanouts, 20-yard for renovations, 30-40 yard for construction. (2) Get quotes from 2-3 local companies to compare prices. (3) Schedule delivery — most companies deliver within 24-48 hours. (4) Fill the dumpster during your rental period (7-14 days) and schedule pickup when done.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost to rent a dumpster?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dumpster rental costs $275–$750 depending on size and location. A 10-yard costs $275–$450, a 20-yard costs $375–$575, and a 30-yard costs $425–$650. The price includes delivery, pickup, a 7-14 day rental period, and a base weight allowance. Get quotes from local companies for exact pricing in your area.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where can I rent a dumpster near me?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can rent a dumpster from local roll-off companies, national chains like Waste Management and Republic Services, or independent haulers. DumpsterListing covers 31,000+ US cities — search your city to find and compare every dumpster rental company in your area.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you rent a dumpster for one day?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most companies do not offer single-day rentals — the standard minimum is 3-7 days. However, you can schedule same-day delivery and next-day pickup with many providers for an additional rush fee of $25-$75. You still pay the base rental rate even for a one-day use.',
      },
    },
    {
      '@type': 'Question',
      name: 'What size dumpster should I rent?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For a single-room cleanout or bathroom remodel, rent a 10-yard. For a whole-home cleanout or medium renovation, a 20-yard is the most popular choice. For large construction, roofing, or demolition projects, a 30 or 40-yard is appropriate. When in doubt, size up — a second trip costs more than the upgrade.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long can you rent a dumpster?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Standard dumpster rentals include 7–14 days. Extensions are available from most companies at $5–$15 per extra day. For long-term projects, some providers offer 30-day or monthly rental options at discounted rates. Confirm the included rental period before booking.',
      },
    },
  ],
}

const PRICING = [
  { size: '10 Yard', range: '$275–$450', best: 'Small cleanouts, single room' },
  { size: '15 Yard', range: '$325–$500', best: 'Medium cleanouts, kitchen reno' },
  { size: '20 Yard', range: '$375–$575', best: 'Full home cleanouts, remodels' },
  { size: '30 Yard', range: '$425–$650', best: 'Large renovations, roofing' },
  { size: '40 Yard', range: '$475–$750', best: 'Construction, demolition' },
]

const TOP_CITIES = [
  { name: 'New York, NY', slug: '/dumpster-rental/new-york/new-york' },
  { name: 'Los Angeles, CA', slug: '/dumpster-rental/california/los-angeles' },
  { name: 'Chicago, IL', slug: '/dumpster-rental/illinois/chicago' },
  { name: 'Houston, TX', slug: '/dumpster-rental/texas/houston' },
  { name: 'Phoenix, AZ', slug: '/dumpster-rental/arizona/phoenix' },
  { name: 'Philadelphia, PA', slug: '/dumpster-rental/pennsylvania/philadelphia' },
  { name: 'San Antonio, TX', slug: '/dumpster-rental/texas/san-antonio' },
  { name: 'San Diego, CA', slug: '/dumpster-rental/california/san-diego' },
  { name: 'Dallas, TX', slug: '/dumpster-rental/texas/dallas' },
  { name: 'Austin, TX', slug: '/dumpster-rental/texas/austin' },
  { name: 'San Francisco, CA', slug: '/dumpster-rental/california/san-francisco' },
  { name: 'Seattle, WA', slug: '/dumpster-rental/washington/seattle' },
  { name: 'Denver, CO', slug: '/dumpster-rental/colorado/denver' },
  { name: 'Boston, MA', slug: '/dumpster-rental/massachusetts/boston' },
  { name: 'Atlanta, GA', slug: '/dumpster-rental/georgia/atlanta' },
  { name: 'Nashville, TN', slug: '/dumpster-rental/tennessee/nashville' },
  { name: 'Charlotte, NC', slug: '/dumpster-rental/north-carolina/charlotte' },
  { name: 'Las Vegas, NV', slug: '/dumpster-rental/nevada/las-vegas' },
  { name: 'Detroit, MI', slug: '/dumpster-rental/michigan/detroit' },
  { name: 'Portland, OR', slug: '/dumpster-rental/oregon/portland' },
]

const STATE_ENTRIES = Object.entries(STATE_NAMES)
  .map(([abbr, name]) => ({ abbr, name, slug: name.toLowerCase().replace(/\s+/g, '-') }))
  .sort((a, b) => a.name.localeCompare(b.name))

export default function RentADumpsterPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <Breadcrumbs crumbs={[{ label: 'Home', href: '/' }, { label: 'Rent a Dumpster' }]} />
          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900">
            Rent a Dumpster
          </h1>
          <p className="mt-3 max-w-2xl text-gray-600 leading-relaxed">
            Whether you are cleaning out a garage, renovating a kitchen, or managing a construction
            site, renting a dumpster is the fastest way to handle large amounts of waste. Compare
            local dumpster rental companies, see prices from $275, and schedule delivery online —
            most areas offer next-day or same-day service.
          </p>
          <AuthorByline updatedDate="March 2026" readTimeMin={8} />
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/dumpster-rental-near-me"
              className="inline-flex items-center gap-2 rounded-xl bg-green-700 px-6 py-3 font-bold text-white hover:bg-green-800 transition"
            >
              <Search className="h-5 w-5" /> Find Companies Near Me
            </Link>
            <Link
              href="/dumpster-rental"
              className="inline-flex items-center gap-2 rounded-xl border border-gray-300 px-6 py-3 font-semibold text-gray-700 hover:bg-gray-50 transition"
            >
              Browse Full Directory
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-14">

        {/* How to Rent */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Rent a Dumpster in 4 Steps</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { step: 1, icon: Package, title: 'Choose your size', desc: 'Pick 10, 15, 20, 30, or 40 yards based on your project. A 20-yard fits most home renovations.' },
              { step: 2, icon: DollarSign, title: 'Get quotes', desc: 'Compare prices from 2-3 local companies. Rates vary 20-30% for the same container in the same area.' },
              { step: 3, icon: Truck, title: 'Schedule delivery', desc: 'Book online or by phone. Most companies deliver within 24-48 hours — same-day is often available.' },
              { step: 4, icon: CheckCircle, title: 'Fill & schedule pickup', desc: 'Load at your own pace during the 7-14 day rental period, then call for pickup when you are done.' },
            ].map((card) => (
              <div key={card.step} className="rounded-xl border border-gray-200 bg-white p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-8 w-8 rounded-full bg-green-700 text-white text-sm font-bold flex items-center justify-center shrink-0">
                    {card.step}
                  </div>
                  <card.icon className="h-5 w-5 text-green-700" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{card.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">How Much Does It Cost to Rent a Dumpster?</h2>
          <p className="text-gray-600 mb-5">National average prices for standard 7-14 day rentals including delivery, pickup, and base weight allowance.</p>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">Size</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">Price Range</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 hidden sm:table-cell">Best For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {PRICING.map((row) => (
                  <tr key={row.size} className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-semibold text-gray-900">{row.size}</td>
                    <td className="px-4 py-3 font-bold text-green-700">{row.range}</td>
                    <td className="px-4 py-3 text-gray-600 hidden sm:table-cell">{row.best}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-3 flex flex-wrap gap-4 text-sm">
            <Link href="/how-much-does-dumpster-rental-cost" className="text-green-700 font-medium hover:underline flex items-center gap-1">
              Full cost guide <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link href="/cheap-dumpster-rental" className="text-green-700 font-medium hover:underline flex items-center gap-1">
              Cheapest options <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </section>

        {/* What size */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">What Size Dumpster Should You Rent?</h2>
          <p className="text-gray-600 mb-5">Match your project to the right container. When in doubt, go one size up — a second haul costs more than the upgrade.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { size: 10, label: '10 Yard', project: 'Bathroom remodel, garage cleanout', popular: false },
              { size: 15, label: '15 Yard', project: 'Kitchen reno, multi-room flooring', popular: false },
              { size: 20, label: '20 Yard', project: 'Whole-home cleanout, large reno', popular: true },
              { size: 30, label: '30 Yard', project: 'Construction, large roofing job', popular: false },
              { size: 40, label: '40 Yard', project: 'Commercial demo, new construction', popular: false },
            ].map((s) => (
              <Link
                key={s.size}
                href={`/dumpster-sizes/${s.size}-yard`}
                className={`group rounded-xl border p-4 hover:shadow-sm transition ${s.popular ? 'border-green-300 bg-green-50' : 'border-gray-200 bg-white'}`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-lg font-bold text-gray-900 group-hover:text-green-700">{s.label}</span>
                  {s.popular && <span className="text-xs font-semibold text-green-700 bg-green-100 rounded-full px-2 py-0.5">Popular</span>}
                </div>
                <p className="text-xs text-gray-500">{s.project}</p>
              </Link>
            ))}
          </div>
          <div className="mt-3">
            <Link href="/dumpster-sizes" className="text-sm text-green-700 font-medium hover:underline flex items-center gap-1">
              Full size comparison guide <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </section>

        {/* Top cities */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-5">Where to Rent a Dumpster Near You</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {TOP_CITIES.map(({ name, slug }) => (
              <Link
                key={slug}
                href={slug}
                className="group flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-3 text-sm font-medium text-gray-700 hover:border-green-400 hover:bg-green-50 hover:text-green-700 transition"
              >
                <MapPin className="h-3.5 w-3.5 text-gray-400 group-hover:text-green-500 shrink-0" />
                <span className="truncate">{name}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Browse by state */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-5">Rent a Dumpster by State</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {STATE_ENTRIES.map(({ name, slug }) => (
              <Link
                key={slug}
                href={`/dumpster-rental/${slug}`}
                className="group flex items-center justify-between rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm hover:border-green-400 hover:bg-green-50 transition"
              >
                <span className="flex items-center gap-2 font-medium text-gray-800 group-hover:text-green-700">
                  <MapPin className="h-3.5 w-3.5 text-gray-400 group-hover:text-green-500" />
                  {name}
                </span>
                <ArrowRight className="h-3.5 w-3.5 text-gray-300 group-hover:text-green-500" />
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-5">Frequently Asked Questions About Renting a Dumpster</h2>
          <div className="space-y-4">
            {faqSchema.mainEntity.map((faq) => (
              <div key={faq.name} className="rounded-xl border border-gray-200 bg-white p-5">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.name}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-xl border border-green-200 bg-green-50 p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Ready to Rent a Dumpster?</h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Find local companies, compare prices, and schedule delivery — most providers offer
            next-day or same-day service in your area.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/dumpster-rental-near-me"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-700 px-7 py-3.5 font-bold text-white hover:bg-green-800 transition"
            >
              Find Dumpster Rental Near Me <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/dumpster-rental"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-green-300 bg-white px-7 py-3.5 font-bold text-green-700 hover:bg-green-50 transition"
            >
              Browse Full Directory <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}
