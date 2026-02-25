import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Info } from 'lucide-react'

import Breadcrumbs from '@/components/Breadcrumbs'
import PricingTable from '@/components/PricingTable'
import LeadForm from '@/components/LeadForm'
import { titleCase, formatPrice, STATE_NAMES, DEFAULT_PRICING } from '@/lib/utils'
import { getCityBySlug, getCityPricing, getAllCitySlugs } from '@/lib/supabase'

async function getCostData(stateSlug: string, citySlug: string) {
  const city = await getCityBySlug(stateSlug, citySlug)
  if (!city) return null
  const pricing = await getCityPricing(city.id)
  return { city, pricing }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ state: string; city: string }>
}): Promise<Metadata> {
  const { state, city } = await params
  const data = await getCostData(state, city)
  if (!data) return { title: 'Not Found' }
  const stateName = STATE_NAMES[state] ?? titleCase(state)
  const title = `Dumpster Rental Cost in ${data.city.city_name}, ${stateName} (February 2026 Pricing Guide)`
  const description = `How much does dumpster rental cost in ${data.city.city_name}? Compare 10–40 yard prices, rental fees, and what affects cost in ${data.city.city_name}, ${stateName}.`
  return {
    title, description,
    alternates: { canonical: `/dumpster-rental/${state}/${city}/cost` },
  }
}

export async function generateStaticParams() {
  const slugs = await getAllCitySlugs()
  return slugs.map((c: { state_slug: string; city_slug: string }) => ({
    state: c.state_slug,
    city: c.city_slug,
  }))
}

const COST_FACTORS = [
  { title: 'Dumpster Size', desc: 'Larger containers cost more. A 10-yard runs $275–$450 while a 40-yard is $475–$750.' },
  { title: 'Rental Duration', desc: 'Most companies include 7 days. Extra days typically cost $5–$15/day.' },
  { title: 'Distance from Landfill', desc: 'The farther a company is from the local landfill, the higher the delivery and disposal fees.' },
  { title: 'Local Landfill Fees', desc: 'Tipping fees vary by city and state — high tipping costs get passed to the renter.' },
  { title: 'Type of Debris', desc: 'Heavy materials like concrete, dirt, and shingles often have extra fees due to weight limits.' },
  { title: 'Permits Required', desc: 'If the dumpster sits on a public street, permit fees ($20–$100) may apply.' },
  { title: 'Season & Demand', desc: 'Summer and fall see higher demand. Booking ahead gets you better rates.' },
]

export default async function CostPage({
  params,
}: {
  params: Promise<{ state: string; city: string }>
}) {
  const { state: stateSlug, city: citySlug } = await params
  const data = await getCostData(stateSlug, citySlug)
  if (!data) notFound()

  const { city, pricing } = data
  const stateName = STATE_NAMES[stateSlug] ?? titleCase(stateSlug)
  const stateAbbr = stateSlug.toUpperCase().slice(0, 2)

  const avg20yd = pricing.find((p) => p.size_yards === 20)
  const avgLow = avg20yd?.price_low ?? DEFAULT_PRICING[20].low
  const avgHigh = avg20yd?.price_high ?? DEFAULT_PRICING[20].high

  const costSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `Dumpster Rental Cost in ${city.city_name}, ${stateName}`,
    description: `How much does dumpster rental cost in ${city.city_name}? Compare prices by size.`,
    author: { '@type': 'Organization', name: 'DumpsterListing' },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(costSchema) }} />

      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs crumbs={[
            { label: 'Home', href: '/' },
            { label: 'Dumpster Rental', href: '/dumpster-rental' },
            { label: stateName, href: `/dumpster-rental/${stateSlug}` },
            { label: city.city_name, href: `/dumpster-rental/${stateSlug}/${citySlug}` },
            { label: 'Cost Guide' },
          ]} />

          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900">
            How Much Does Dumpster Rental Cost in {city.city_name}?
          </h1>
          <p className="mt-3 text-gray-600 max-w-2xl">
            Dumpster rental in {city.city_name}, {stateName} typically costs{' '}
            <strong>{formatPrice(avgLow)}–{formatPrice(avgHigh)}</strong> for the most popular 20-yard
            container. Prices vary by size, company, and rental duration. Here&apos;s everything you need
            to know before you book.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
          <div className="xl:col-span-2 space-y-12">

            {/* Pricing table */}
            <PricingTable cityPricing={pricing} cityName={city.city_name} />

            {/* Cost factors */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-5">
                What Affects Dumpster Rental Cost in {city.city_name}?
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
            </div>

            {/* Money saving tips */}
            <div className="rounded-xl border border-green-200 bg-green-50 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Tips to Save on Dumpster Rental in {city.city_name}
              </h2>
              <ul className="space-y-2 text-sm text-gray-700">
                {[
                  'Compare quotes from at least 3 local companies before booking.',
                  'Choose the right size — too big wastes money, too small means extra trips.',
                  'Ask about hidden fees: fuel surcharges, overage fees, and landfill charges.',
                  'Book 2–3 days in advance for better availability and pricing.',
                  'For light debris, ask about weight-based pricing vs flat-rate.',
                  'Avoid overloading — materials above the fill line incur extra fees.',
                ].map((tip, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-green-700 font-bold shrink-0">✓</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA back to directory */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-bold text-gray-900">Ready to Compare {city.city_name} Companies?</h3>
                <p className="text-sm text-gray-600 mt-1">View listings, ratings, and get free quotes.</p>
              </div>
              <Link href={`/dumpster-rental/${stateSlug}/${citySlug}`}
                className="shrink-0 flex items-center gap-2 rounded-lg bg-green-700 px-5 py-2.5 font-semibold text-white hover:bg-green-800 transition">
                See {city.city_name} Listings <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="rounded-xl border border-green-200 bg-green-50 p-6">
              <h3 className="font-bold text-gray-900 mb-2">Get Exact Quotes</h3>
              <p className="text-sm text-gray-600 mb-4">
                Stop guessing. Get real prices from {city.city_name} dumpster companies in minutes.
              </p>
              <Link href="#quote"
                className="block w-full rounded-lg bg-green-700 py-3 text-center font-bold text-white hover:bg-green-800 transition">
                Get Free Quotes
              </Link>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="font-bold text-gray-900 mb-3">Browse by Size</h3>
              <div className="space-y-2">
                {[10, 15, 20, 30, 40].map((size) => {
                  const p = DEFAULT_PRICING[size]
                  return (
                    <Link key={size} href={`/dumpster-sizes/${size}-yard`}
                      className="flex items-center justify-between text-sm text-gray-700 hover:text-green-700 transition">
                      <span>{size} Yard ({formatPrice(p.low)}–{formatPrice(p.high)})</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  )
                })}
              </div>
            </div>
          </aside>
        </div>
      </div>

      <div className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LeadForm cityId={city.id} cityName={city.city_name} stateAbbr={stateAbbr} />
        </div>
      </div>
    </>
  )
}
