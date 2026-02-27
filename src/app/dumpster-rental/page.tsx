import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, ArrowRight, Search, BarChart2, Truck, DollarSign } from 'lucide-react'
import Breadcrumbs from '@/components/Breadcrumbs'
import { STATE_NAMES } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Dumpster Rental Near Me — Compare Local Companies & Prices (2026)',
  description:
    'Find dumpster rental companies in any US city. Compare prices on 10, 20, 30, and 40 yard roll-off dumpsters. Free quotes from local providers in 31,000+ cities.',
  alternates: { canonical: '/dumpster-rental' },
  openGraph: {
    title: 'Dumpster Rental Near Me — Compare Local Companies & Prices',
    description: 'The largest directory of dumpster rental companies in the US. Find local providers, compare prices, and get free quotes for any project.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does dumpster rental cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dumpster rental costs range from $275–$750 depending on size, location, and rental duration. A 10-yard dumpster typically costs $275–$450, a 20-yard runs $350–$550, and a 30-yard is $400–$650. Prices vary by city — coastal and urban markets tend to be 20–40% higher than rural areas.',
      },
    },
    {
      '@type': 'Question',
      name: 'What size dumpster do I need?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For a single-room cleanout or small renovation, a 10-yard dumpster is usually sufficient. A 20-yard is the most popular size for full home cleanouts and medium renovations. A 30-yard works for large remodels and roofing projects. A 40-yard is for major construction or demolition jobs. When in doubt, go one size up — it\'s cheaper than renting a second dumpster.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long can I keep a rental dumpster?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most dumpster rental companies include 7–14 days in the base rental price. Extensions are typically available for $5–$15 per additional day. Confirm the rental period upfront so you avoid surprise fees if your project runs long.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a permit to rent a dumpster?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A permit is usually required if the dumpster is placed on a public street or sidewalk. No permit is needed if it sits entirely on your private property (driveway, yard, parking lot). Permit fees typically range from $15–$100 depending on your city. Many rental companies handle the permit application for you — ask when booking.',
      },
    },
    {
      '@type': 'Question',
      name: 'What can I put in a dumpster?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most dumpsters accept household junk, furniture, appliances, renovation debris, roofing shingles, yard waste, and concrete. Items that are NOT allowed include hazardous materials (paint, chemicals, batteries), tires, electronics, and liquids. Always confirm with your rental company what is accepted before loading.',
      },
    },
  ],
}

const POPULAR_CITIES = [
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
  { name: 'Columbus, OH', slug: '/dumpster-rental/ohio/columbus' },
  { name: 'Indianapolis, IN', slug: '/dumpster-rental/indiana/indianapolis' },
  { name: 'Jacksonville, FL', slug: '/dumpster-rental/florida/jacksonville' },
  { name: 'Memphis, TN', slug: '/dumpster-rental/tennessee/memphis' },
]

const PRICING_OVERVIEW = [
  { size: '10 Yard', range: '$275–$450', best: 'Small cleanouts, single room' },
  { size: '15 Yard', range: '$300–$480', best: 'Medium cleanouts, small renos' },
  { size: '20 Yard', range: '$350–$550', best: 'Full home cleanouts, remodels' },
  { size: '30 Yard', range: '$400–$650', best: 'Large renovations, roofing' },
  { size: '40 Yard', range: '$475–$750', best: 'Construction, demolition' },
]

const STATE_ENTRIES = Object.entries(STATE_NAMES).map(([abbr, name]) => ({
  abbr,
  name,
  slug: name.toLowerCase().replace(/\s+/g, '-'),
})).sort((a, b) => a.name.localeCompare(b.name))

export default function NationalDirectoryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <Breadcrumbs crumbs={[
            { label: 'Home', href: '/' },
            { label: 'Dumpster Rental' },
          ]} />
          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900">
            Find Dumpster Rental Companies Near You
          </h1>
          <p className="mt-3 max-w-2xl text-gray-600 leading-relaxed">
            Compare dumpster rental prices from local companies in any US city. Get free quotes on 10–40 yard
            roll-off dumpsters for home cleanouts, renovations, roofing, and construction projects.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/dumpster-rental-near-me"
              className="inline-flex items-center gap-2 rounded-xl bg-green-700 px-6 py-3 font-bold text-white hover:bg-green-800 transition"
            >
              <Search className="h-5 w-5" /> Find Companies Near Me
            </Link>
            <Link
              href="#popular-cities"
              className="inline-flex items-center gap-2 rounded-xl border border-gray-300 px-6 py-3 font-semibold text-gray-700 hover:bg-gray-50 transition"
            >
              Browse by City
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-14">

        {/* Trust stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { stat: '31,000+', label: 'Cities covered', icon: MapPin },
            { stat: 'Free', label: 'Quote requests', icon: DollarSign },
            { stat: '10–40 yd', label: 'Dumpster sizes', icon: Truck },
            { stat: 'Local only', label: 'Companies listed', icon: BarChart2 },
          ].map(({ stat, label, icon: Icon }) => (
            <div key={label} className="rounded-xl border border-gray-200 bg-white p-5 text-center">
              <Icon className="h-6 w-6 text-green-700 mx-auto mb-2" />
              <div className="text-2xl font-extrabold text-gray-900">{stat}</div>
              <div className="text-sm text-gray-500 mt-0.5">{label}</div>
            </div>
          ))}
        </div>

        {/* How it works */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How DumpsterListing Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                step: '1',
                icon: Search,
                title: 'Search Your City',
                desc: 'Enter your city or browse by state to find every dumpster rental company in your area.',
                color: 'bg-blue-600',
              },
              {
                step: '2',
                icon: BarChart2,
                title: 'Compare Prices',
                desc: 'See ratings, phone numbers, and pricing side by side. No switching tabs, no guesswork.',
                color: 'bg-green-700',
              },
              {
                step: '3',
                icon: Truck,
                title: 'Book & Get Delivered',
                desc: 'Call directly or submit a quote request. Local companies respond fast — often same day.',
                color: 'bg-purple-600',
              },
            ].map(({ step, icon: Icon, title, desc, color }) => (
              <div key={step} className="rounded-xl border border-gray-200 bg-white p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`h-10 w-10 rounded-full ${color} flex items-center justify-center shrink-0`}>
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-xs font-extrabold uppercase tracking-widest text-gray-400">Step {step}</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Popular cities */}
        <section id="popular-cities">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Popular Cities</h2>
            <Link href="#all-states" className="text-sm font-medium text-green-700 hover:underline flex items-center gap-1">
              Browse all states <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {POPULAR_CITIES.map(({ name, slug }) => (
              <Link
                key={slug}
                href={slug}
                className="group rounded-lg border border-gray-200 bg-white px-3 py-3 text-sm font-medium text-gray-700 hover:border-green-400 hover:bg-green-50 hover:text-green-700 transition flex items-center gap-1.5"
              >
                <MapPin className="h-3.5 w-3.5 text-gray-400 group-hover:text-green-500 shrink-0" />
                <span className="truncate">{name}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Pricing overview */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Dumpster Rental Prices by Size (2026)</h2>
          <p className="text-sm text-gray-500 mb-5">National average ranges. Prices vary by city — get a local quote for exact pricing.</p>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">Size</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">Price Range</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 hidden sm:table-cell">Best For</th>
                  <th className="px-4 py-3 hidden md:table-cell"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {PRICING_OVERVIEW.map((row) => (
                  <tr key={row.size} className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-semibold text-gray-900">{row.size}</td>
                    <td className="px-4 py-3 font-bold text-green-700">{row.range}</td>
                    <td className="px-4 py-3 text-gray-600 hidden sm:table-cell">{row.best}</td>
                    <td className="px-4 py-3 hidden md:table-cell">
                      <Link
                        href={`/dumpster-sizes/${row.size.split(' ')[0].toLowerCase()}-yard`}
                        className="text-xs font-medium text-green-700 hover:underline"
                      >
                        Size guide →
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-3 flex items-center gap-4 text-sm flex-wrap">
            <Link href="/how-much-does-dumpster-rental-cost" className="text-green-700 font-medium hover:underline flex items-center gap-1">
              Full cost guide <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link href="/dumpster-rental-cost-by-city" className="text-green-700 font-medium hover:underline flex items-center gap-1">
              Most & least expensive cities <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link href="/dumpster-sizes" className="text-green-700 font-medium hover:underline flex items-center gap-1">
              Size comparison guide <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </section>

        {/* Common use cases */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Dumpster Rental by Project Type</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'Home Cleanout', desc: 'Clear out an entire home, estate, or apartment. A 20-yard dumpster handles most full cleanouts.', href: '/dumpster-rental/residential', size: '20-yard recommended' },
              { title: 'Renovation / Remodel', desc: 'Kitchen, bathroom, or whole-house remodel debris. Size depends on scope — 20 or 30-yard most common.', href: '/dumpster-rental/construction', size: '20–30-yard recommended' },
              { title: 'Roofing Project', desc: 'Shingles are heavy. A 10-yard dedicated roofing dumpster is usually enough for most homes.', href: '/dumpster-rental/roofing', size: '10-yard recommended' },
              { title: 'Construction / Demo', desc: 'New builds, additions, and demolition jobs. Multiple dumpsters may be needed for larger projects.', href: '/dumpster-rental/construction', size: '30–40-yard recommended' },
              { title: 'Concrete & Heavy Debris', desc: 'Concrete, brick, and dirt have strict weight limits. Use the smallest dumpster and fill only partway.', href: '/how-to-dispose-of-concrete', size: '10-yard only' },
              { title: 'Commercial / Business', desc: 'Office cleanouts, retail renovations, and ongoing commercial waste. Ask about recurring service.', href: '/dumpster-rental/commercial', size: 'Varies by project' },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group rounded-xl border border-gray-200 bg-white p-5 hover:border-green-300 hover:shadow-sm transition"
              >
                <h3 className="font-bold text-gray-900 group-hover:text-green-700 mb-1 transition-colors">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-3">{item.desc}</p>
                <span className="text-xs font-semibold text-green-700 bg-green-50 rounded-full px-2.5 py-1">{item.size}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-5">Dumpster Rental FAQ</h2>
          <div className="space-y-4">
            {faqSchema.mainEntity.map((faq) => (
              <div key={faq.name} className="rounded-xl border border-gray-200 bg-white p-5">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.name}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { label: 'Do I need a permit?', href: '/dumpster-rental-permit' },
              { label: 'What can go in a dumpster?', href: '/what-can-you-put-in-a-dumpster' },
              { label: 'Dumpster vs. junk removal?', href: '/dumpster-rental-vs-junk-removal' },
            ].map((link) => (
              <Link key={link.href} href={link.href}
                className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-700 hover:border-green-300 hover:text-green-700 transition">
                <ArrowRight className="h-3.5 w-3.5 text-gray-400 shrink-0" />
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        {/* Browse all states */}
        <section id="all-states">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse Dumpster Rental by State</h2>
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

      </div>
    </>
  )
}
