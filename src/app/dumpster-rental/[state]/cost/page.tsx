import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Info, DollarSign } from 'lucide-react'

import Breadcrumbs from '@/components/Breadcrumbs'
import { titleCase, formatPrice, STATE_NAMES, DEFAULT_PRICING } from '@/lib/utils'
import { getCitiesByState, getAllStates } from '@/lib/supabase'

const SIZES = [10, 15, 20, 30, 40] as const

// State-specific pricing multipliers based on known CPC/cost data
// FL, NY, CA are expensive; Midwest/rural states are cheaper
const STATE_PRICE_MODIFIERS: Record<string, number> = {
  fl: 1.18, ca: 1.22, ny: 1.20, nj: 1.18, ma: 1.15, ct: 1.12, md: 1.10,
  wa: 1.10, co: 1.05, tx: 1.05, ga: 1.02, nc: 1.00, pa: 1.08,
  oh: 0.92, in: 0.90, ia: 0.88, ks: 0.88, ne: 0.88, mo: 0.90,
  mi: 0.92, mn: 0.95, wi: 0.93, tn: 0.95, al: 0.90, ms: 0.88,
  ok: 0.90, ar: 0.88, ky: 0.90, wv: 0.88, ri: 0.95,
}

function getStatePricing(stateSlug: string) {
  const mod = STATE_PRICE_MODIFIERS[stateSlug] ?? 1.0
  return SIZES.map((size) => {
    const base = DEFAULT_PRICING[size]
    return {
      size,
      low: Math.round(base.low * mod / 5) * 5,
      high: Math.round(base.high * mod / 5) * 5,
    }
  })
}

const COST_FACTORS = [
  { title: 'Local Landfill Tipping Fees', desc: 'The single biggest price variable. Dense metro areas pay $80–$120/ton while rural states pay $30–$50/ton — that gap flows directly into rental prices.' },
  { title: 'Container Size', desc: 'A 10-yard starts around $275–$450; a 40-yard runs $475–$750. Choose the right size upfront to avoid a second haul.' },
  { title: 'Distance from Landfill', desc: 'Companies servicing rural areas drive farther to dispose of material, raising delivery and disposal fees.' },
  { title: 'Rental Duration', desc: 'Standard rentals include 7–14 days. Extra days typically cost $5–$15/day — negotiate this before booking if your project may run long.' },
  { title: 'Type of Debris', desc: 'Heavy materials like concrete, soil, and roofing shingles often trigger weight overage fees. Always confirm your included tonnage.' },
  { title: 'Local Competition', desc: 'Markets with more independently-owned operators tend to have lower prices. National chains price 15–25% higher than local independents.' },
]

export async function generateMetadata({
  params,
}: {
  params: Promise<{ state: string }>
}): Promise<Metadata> {
  const { state } = await params
  const stateName = STATE_NAMES[state]
  if (!stateName) return { title: 'Not Found' }
  const year = new Date().getFullYear()
  const stateAbbr = state.toUpperCase()
  const pricing = getStatePricing(state)
  const p20 = pricing.find((p) => p.size === 20)!
  const title = `Dumpster Rental Cost in ${stateName} (${year}) — Prices by City & Size`
  const description = `How much does dumpster rental cost in ${stateName}? A 20-yard container averages ${formatPrice(p20.low)}–${formatPrice(p20.high)}. Compare prices by size and city across ${stateName}.`
  return {
    title,
    description,
    alternates: { canonical: `/dumpster-rental/${state}/cost` },
  }
}

export async function generateStaticParams() {
  const states = await getAllStates()
  return states.map((s: { state_slug: string }) => ({ state: s.state_slug }))
}

export default async function StateCostPage({
  params,
}: {
  params: Promise<{ state: string }>
}) {
  const { state: stateSlug } = await params
  const stateName = STATE_NAMES[stateSlug]
  if (!stateName) notFound()

  const cities = await getCitiesByState(stateSlug)
  if (!cities.length) notFound()

  const pricing = getStatePricing(stateSlug)
  const p20 = pricing.find((p) => p.size === 20)!
  const topCities = [...cities].sort((a, b) => b.population - a.population).slice(0, 20)

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `How much does dumpster rental cost in ${stateName}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Dumpster rental in ${stateName} typically costs ${formatPrice(p20.low)}–${formatPrice(p20.high)} for the most popular 20-yard roll-off container. Smaller 10-yard dumpsters start around ${formatPrice(pricing[0].low)}, while large 40-yard containers run up to ${formatPrice(pricing[4].high)}. Prices vary by city based on local landfill fees.`,
        },
      },
      {
        '@type': 'Question',
        name: `What size dumpster do I need in ${stateName}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `The 20-yard dumpster is the most popular size in ${stateName} for home renovations, cleanouts, and roofing jobs. A 10-yard works for single-room remodels and small garage cleanouts. A 30-yard or 40-yard is needed for large construction projects, estate cleanouts from large homes, or commercial demolition.`,
        },
      },
      {
        '@type': 'Question',
        name: `How can I get the cheapest dumpster rental in ${stateName}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `To get the best price in ${stateName}: compare quotes from at least 3 local companies (local independents price 15–25% below national chains), choose the right size for your project to avoid a second haul, ask for an all-in quote including weight allowance and fees, and book 2–3 days in advance.`,
        },
      },
      {
        '@type': 'Question',
        name: `Are there hidden fees with dumpster rentals in ${stateName}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Common extra charges in ${stateName} include weight overages ($60–$100/ton above the included limit), extended rental days ($5–$15/day), fuel surcharges ($10–$45), and street permit fees ($20–$100) if the dumpster sits on a public road. Always ask for a total all-in quote before booking.`,
        },
      },
    ],
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `Dumpster Rental Cost in ${stateName} — Prices by City & Size`,
    description: `How much does dumpster rental cost in ${stateName}? Compare prices by size and city.`,
    datePublished: '2026-01-01',
    dateModified: new Date().toISOString().split('T')[0],
    author: { '@type': 'Organization', name: 'DumpsterListing', url: 'https://dumpsterlisting.com' },
    publisher: { '@type': 'Organization', name: 'DumpsterListing', url: 'https://dumpsterlisting.com' },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://dumpsterlisting.com/dumpster-rental/${stateSlug}/cost`,
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs crumbs={[
            { label: 'Home', href: '/' },
            { label: 'Dumpster Rental', href: '/dumpster-rental' },
            { label: stateName, href: `/dumpster-rental/${stateSlug}` },
            { label: 'Cost Guide' },
          ]} />

          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900">
            Dumpster Rental Cost in {stateName}
          </h1>
          <p className="mt-3 text-gray-600 max-w-2xl">
            A 20-yard dumpster in {stateName} typically costs{' '}
            <strong>{formatPrice(p20.low)}–{formatPrice(p20.high)}</strong>. Prices vary by city,
            container size, and local landfill fees. Select your city below for exact pricing.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
          <div className="xl:col-span-2 space-y-12">

            {/* State pricing table */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {stateName} Dumpster Rental Prices by Size
              </h2>
              <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="text-left px-4 py-3 font-semibold text-gray-700">Size</th>
                      <th className="text-left px-4 py-3 font-semibold text-gray-700">Avg. Price Range</th>
                      <th className="text-left px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">Best For</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {pricing.map((row) => (
                      <tr key={row.size} className="hover:bg-gray-50 transition-colors">
                        <td className="px-4 py-3">
                          <Link href={`/dumpster-sizes/${row.size}-yard`} className="font-bold text-green-700 hover:underline">
                            {row.size} yd
                          </Link>
                        </td>
                        <td className="px-4 py-3 font-semibold text-gray-900">
                          {formatPrice(row.low)}–{formatPrice(row.high)}
                        </td>
                        <td className="px-4 py-3 text-gray-600 hidden md:table-cell">
                          {row.size === 10 && 'Small remodels, garage cleanouts'}
                          {row.size === 15 && 'Kitchen/bath remodels, medium cleanouts'}
                          {row.size === 20 && 'Whole-home cleanouts, roofing, large remodels'}
                          {row.size === 30 && 'Large renovations, estate cleanouts, new construction'}
                          {row.size === 40 && 'Commercial demolition, large construction projects'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-2 text-xs text-gray-400">
                Estimated ranges for {stateName}. Actual prices vary by city and company.
                Select your city below for local pricing.
              </p>
            </section>

            {/* Cost factors */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-5">
                What Affects Dumpster Rental Cost in {stateName}?
              </h2>
              <div className="space-y-4">
                {COST_FACTORS.map((f) => (
                  <div key={f.title} className="flex gap-3 rounded-xl border border-gray-200 bg-white p-4">
                    <Info className="h-5 w-5 text-green-700 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-gray-900">{f.title}</h3>
                      <p className="mt-0.5 text-sm text-gray-600">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Cities with cost guides */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Dumpster Rental Cost by City in {stateName}
              </h2>
              <p className="text-gray-600 mb-5 text-sm">
                Select your city to see exact pricing from local {stateName} companies, area-specific
                cost factors, and money-saving tips.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {topCities.map((city) => (
                  <Link
                    key={city.id}
                    href={`/dumpster-rental/${stateSlug}/${city.city_slug}/cost`}
                    className="group flex items-center justify-between rounded-xl border border-gray-200 bg-white p-4 hover:border-green-400 hover:shadow-sm transition"
                  >
                    <div>
                      <p className="font-semibold text-gray-900 group-hover:text-green-700 transition text-sm">
                        {city.city_name}
                      </p>
                      {city.county && (
                        <p className="text-xs text-gray-400 mt-0.5">{city.county}</p>
                      )}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-green-700 shrink-0">
                      <DollarSign className="h-3.5 w-3.5" />
                      <span className="font-medium">Cost Guide</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                  </Link>
                ))}
              </div>
              <div className="mt-4">
                <Link
                  href={`/dumpster-rental/${stateSlug}`}
                  className="text-sm text-green-700 hover:text-green-800 font-medium flex items-center gap-1"
                >
                  View all {cities.length} cities in {stateName} <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </section>

            {/* Money saving tips */}
            <div className="rounded-xl border border-green-200 bg-green-50 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Tips to Save on Dumpster Rental in {stateName}
              </h2>
              <ul className="space-y-2 text-sm text-gray-700">
                {[
                  `Compare quotes from at least 3 local ${stateName} companies before booking.`,
                  'Choose the right size — too big wastes money, too small means extra trips.',
                  'Ask for an all-in total including weight, fuel surcharge, and taxes.',
                  'Book 2–3 days in advance for better availability and pricing.',
                  'Local independent companies typically price 15–25% below national chains.',
                  'Avoid peak summer/fall demand periods when possible.',
                ].map((tip, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-green-700 font-bold shrink-0">✓</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            {/* FAQ */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-5">
                {stateName} Dumpster Rental Cost — FAQs
              </h2>
              <div className="space-y-4">
                {faqSchema.mainEntity.map((faq) => (
                  <div key={faq.name} className="rounded-xl border border-gray-200 bg-white p-5">
                    <h3 className="font-semibold text-gray-900 mb-2">{faq.name}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{faq.acceptedAnswer.text}</p>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="rounded-xl border border-green-200 bg-green-50 p-6">
              <h3 className="font-bold text-gray-900 mb-2">Get Exact Quotes</h3>
              <p className="text-sm text-gray-600 mb-4">
                Find {stateName} dumpster companies in your city and compare real prices.
              </p>
              <Link
                href={`/dumpster-rental/${stateSlug}`}
                className="block w-full rounded-lg bg-green-700 py-3 text-center font-bold text-white hover:bg-green-800 transition"
              >
                Browse {stateName} Companies
              </Link>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="font-bold text-gray-900 mb-3">Browse by Size</h3>
              <div className="space-y-2">
                {pricing.map((p) => (
                  <Link key={p.size} href={`/dumpster-sizes/${p.size}-yard`}
                    className="flex items-center justify-between text-sm text-gray-700 hover:text-green-700 transition">
                    <span>{p.size} Yard ({formatPrice(p.low)}–{formatPrice(p.high)})</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="font-bold text-gray-900 mb-3">Related Guides</h3>
              <div className="space-y-2 text-sm">
                {[
                  { label: 'Dumpster Size Guide', href: '/dumpster-sizes' },
                  { label: 'Full Pricing Guide', href: '/dumpster-rental-cost' },
                  { label: 'Do You Need a Permit?', href: '/dumpster-rental-permit' },
                  { label: 'What Can You Put in a Dumpster?', href: '/what-can-you-put-in-a-dumpster' },
                  { label: 'Weight Limit Calculator', href: '/dumpster-weight-limit-calculator' },
                ].map((link) => (
                  <Link key={link.href} href={link.href}
                    className="flex items-center gap-2 text-gray-700 hover:text-green-700 transition group">
                    <ArrowRight className="h-3.5 w-3.5 text-gray-400 group-hover:text-green-500" />
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  )
}
