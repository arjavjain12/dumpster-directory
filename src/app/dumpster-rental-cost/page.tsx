import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Info } from 'lucide-react'
import Breadcrumbs from '@/components/Breadcrumbs'
import { formatPrice, DEFAULT_PRICING } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Dumpster Rental Prices & Cost Guide (2026) — What to Expect',
  description:
    'Dumpster rental prices range from $275–$750 depending on size and location. See 2026 national averages by size, what affects price, and how to get the best rate.',
  alternates: { canonical: '/dumpster-rental-cost' },
  openGraph: {
    title: 'Dumpster Rental Cost Guide (2026)',
    description: 'National average prices by size, cost factors, and money-saving tips.',
  },
}

const SIZE_DETAILS = [
  {
    yards: 10,
    lowPrice: DEFAULT_PRICING[10].low,
    highPrice: DEFAULT_PRICING[10].high,
    dimensions: '12 × 7.5 × 3.5 ft',
    weightLimit: '2–4 tons',
    bestFor: 'Bathroom remodel, garage cleanout, single-room declutter',
  },
  {
    yards: 15,
    lowPrice: DEFAULT_PRICING[15].low,
    highPrice: DEFAULT_PRICING[15].high,
    dimensions: '14 × 7.5 × 4 ft',
    weightLimit: '2–5 tons',
    bestFor: 'Kitchen renovation, flooring removal, medium cleanout',
  },
  {
    yards: 20,
    lowPrice: DEFAULT_PRICING[20].low,
    highPrice: DEFAULT_PRICING[20].high,
    dimensions: '16 × 7.5 × 4.5 ft',
    weightLimit: '3–6 tons',
    bestFor: 'Whole-home cleanout, roofing, large renovation',
  },
  {
    yards: 30,
    lowPrice: DEFAULT_PRICING[30].low,
    highPrice: DEFAULT_PRICING[30].high,
    dimensions: '18 × 7.5 × 5.5 ft',
    weightLimit: '4–8 tons',
    bestFor: 'Large remodel, new construction, estate cleanout',
  },
  {
    yards: 40,
    lowPrice: DEFAULT_PRICING[40].low,
    highPrice: DEFAULT_PRICING[40].high,
    dimensions: '22 × 7.5 × 8 ft',
    weightLimit: '5–10 tons',
    bestFor: 'Commercial demolition, large construction projects',
  },
]

const COST_FACTORS = [
  {
    factor: 'Container Size',
    impact: 'High',
    detail: 'The single biggest variable. Going from a 10-yard to a 20-yard typically adds $100–$150 to the price.',
  },
  {
    factor: 'Your Location',
    impact: 'High',
    detail: 'Local landfill (tipping) fees vary dramatically by city. Miami and Tampa average $10–$16 CPC in competition vs. $1–3 in smaller markets.',
  },
  {
    factor: 'Debris Type',
    impact: 'High',
    detail: 'Heavy materials like concrete and asphalt incur weight overages. Hazardous materials require specialty disposal at 2–5x the cost.',
  },
  {
    factor: 'Rental Duration',
    impact: 'Medium',
    detail: 'Standard rentals include 7–14 days. Extra days cost $5–$15/day. Book the days you need upfront — it\'s cheaper than extending.',
  },
  {
    factor: 'Weight Overages',
    impact: 'Medium',
    detail: 'Most rentals include 1–3 tons. Every extra ton costs $60–$100. Heavy materials (shingles, concrete) max out limits quickly.',
  },
  {
    factor: 'Street Permits',
    impact: 'Low',
    detail: 'If the dumpster goes on a public street, you\'ll need a city permit: $20–$100 depending on your municipality.',
  },
  {
    factor: 'Season & Demand',
    impact: 'Low–Medium',
    detail: 'Spring and summer are peak season — book 3–5 days ahead. Off-peak (winter) often sees better availability and sometimes lower rates.',
  },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How Much Does Dumpster Rental Cost? (2026)',
  description: 'Dumpster rental costs $275–$750 nationally. This guide breaks down pricing by size, cost factors, and money-saving tips.',
  datePublished: '2026-02-24',
  dateModified: '2026-02-24',
  author: { '@type': 'Organization', name: 'DumpsterListing', url: 'https://dumpsterlisting.com' },
  publisher: { '@type': 'Organization', name: 'DumpsterListing', url: 'https://dumpsterlisting.com' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://dumpsterlisting.com/dumpster-rental-cost' },
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
        text: 'Dumpster rental costs $275–$750 nationally depending on size. A 10-yard averages $275–$450, a 20-yard averages $375–$575, and a 40-yard averages $475–$750. The price includes delivery, pickup, and standard weight allowance.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is included in dumpster rental pricing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most flat-rate dumpster rentals include delivery, pickup, 7–14 days rental period, and a weight allowance of 1–3 tons. Additional weight, extra rental days, and street permits are billed separately.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I save money on dumpster rental?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Get quotes from 3+ local companies, choose the right size (too big wastes money, too small causes overages), ask about hidden fees upfront, book during off-peak season, and avoid weight overages by confirming tonnage limits.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why do dumpster rental prices vary so much by city?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The biggest variable is local landfill tipping fees — what the facility charges to accept debris. These vary from $30–$50/ton in rural areas to $100+/ton in dense urban markets. Fuel costs, competition, and local regulations also affect final pricing.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are dumpster rental weight overage fees?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When you exceed the included weight allowance, most companies charge $60–$100 per extra ton. To avoid overages: confirm the included tonnage when booking, avoid mixing heavy materials (concrete, shingles) without checking limits, and don\'t overfill the container.',
      },
    },
  ],
}

export default function CostGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Hero */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs crumbs={[
            { label: 'Home', href: '/' },
            { label: 'Dumpster Rental Cost Guide' },
          ]} />
          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900">
            How Much Does Dumpster Rental Cost? (2026)
          </h1>
          <p className="mt-3 max-w-3xl text-gray-600 leading-relaxed">
            Dumpster rental in the US costs{' '}
            <strong>{formatPrice(275)}–{formatPrice(750)}</strong> depending on container size and your location.
            This guide breaks down pricing by size, what drives costs up or down, and how to get the best rate
            from local companies.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
          <div className="xl:col-span-2 space-y-10">

            {/* Pricing by size table */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-5">
                Dumpster Rental Cost by Size
              </h2>
              <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="text-left px-4 py-3 font-semibold text-gray-700">Size</th>
                      <th className="text-left px-4 py-3 font-semibold text-gray-700">Avg. Price</th>
                      <th className="text-left px-4 py-3 font-semibold text-gray-700">Weight Limit</th>
                      <th className="text-left px-4 py-3 font-semibold text-gray-700 hidden sm:table-cell">Best For</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {SIZE_DETAILS.map((s) => (
                      <tr key={s.yards} className="hover:bg-gray-50 transition-colors">
                        <td className="px-4 py-3">
                          <Link href={`/dumpster-sizes/${s.yards}-yard`} className="font-bold text-green-600 hover:underline">
                            {s.yards} yard
                          </Link>
                        </td>
                        <td className="px-4 py-3 font-semibold text-gray-900">
                          {formatPrice(s.lowPrice)}–{formatPrice(s.highPrice)}
                        </td>
                        <td className="px-4 py-3 text-gray-600">{s.weightLimit}</td>
                        <td className="px-4 py-3 text-gray-600 hidden sm:table-cell">{s.bestFor}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-2 text-xs text-gray-400">
                * National averages. Includes delivery, pickup, and standard weight allowance (7–14 day rental).
                Prices vary significantly by city.
              </p>
            </section>

            {/* Individual size cards with full details */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-5">
                Price Breakdown by Size
              </h2>
              <div className="space-y-4">
                {SIZE_DETAILS.map((s) => (
                  <div key={s.yards} className="rounded-xl border border-gray-200 bg-white overflow-hidden">
                    <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 bg-gray-50">
                      <h3 className="font-bold text-gray-900 text-lg">{s.yards} Yard Dumpster</h3>
                      <span className="text-lg font-extrabold text-green-700">
                        {formatPrice(s.lowPrice)}–{formatPrice(s.highPrice)}
                      </span>
                    </div>
                    <div className="px-5 py-4 grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
                      <div>
                        <span className="text-gray-500 text-xs">Dimensions</span>
                        <p className="font-medium text-gray-900">{s.dimensions}</p>
                      </div>
                      <div>
                        <span className="text-gray-500 text-xs">Weight Limit</span>
                        <p className="font-medium text-gray-900">{s.weightLimit}</p>
                      </div>
                      <div className="col-span-2 sm:col-span-1">
                        <span className="text-gray-500 text-xs">Best For</span>
                        <p className="font-medium text-gray-900">{s.bestFor}</p>
                      </div>
                    </div>
                    <div className="px-5 pb-4">
                      <Link href={`/dumpster-sizes/${s.yards}-yard`}
                        className="text-sm font-medium text-green-600 hover:text-green-700 flex items-center gap-1">
                        Full {s.yards}-yard guide <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Cost factors */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-5">
                What Affects Dumpster Rental Cost?
              </h2>
              <div className="space-y-3">
                {COST_FACTORS.map((f) => (
                  <div key={f.factor} className="flex gap-3 rounded-xl border border-gray-200 bg-white p-4">
                    <Info className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2 mb-0.5">
                        <h3 className="font-semibold text-gray-900">{f.factor}</h3>
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                          f.impact === 'High'
                            ? 'bg-red-100 text-red-700'
                            : f.impact === 'Medium'
                            ? 'bg-amber-100 text-amber-700'
                            : 'bg-gray-100 text-gray-600'
                        }`}>
                          {f.impact} impact
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{f.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Hidden fees */}
            <section className="rounded-xl border border-amber-200 bg-amber-50 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Watch Out for These Hidden Fees
              </h2>
              <div className="space-y-3">
                {[
                  { fee: 'Weight overage', amount: '$60–$100/ton', note: 'Triggered when your load exceeds the included tonnage' },
                  { fee: 'Extra rental days', amount: '$5–$15/day', note: 'Charged after the included rental period ends' },
                  { fee: 'Street permit', amount: '$20–$100', note: 'Required if the container sits on a public road or sidewalk' },
                  { fee: 'Fuel surcharge', amount: '$10–$30', note: 'Some companies add this on top of quoted price' },
                  { fee: 'Prohibited items', amount: 'Varies', note: 'Disposal of mattresses, tires, electronics charged separately or refused' },
                  { fee: 'Same-day delivery', amount: '$25–$75', note: 'Rush delivery on short notice may carry a premium' },
                ].map((item) => (
                  <div key={item.fee} className="flex gap-2">
                    <span className="text-amber-600 font-bold shrink-0">!</span>
                    <div>
                      <span className="font-semibold text-gray-900">{item.fee} ({item.amount}): </span>
                      <span className="text-sm text-gray-700">{item.note}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Saving tips */}
            <section className="rounded-xl border border-green-200 bg-green-50 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                6 Ways to Lower Your Dumpster Rental Cost
              </h2>
              <ul className="space-y-3">
                {[
                  'Get quotes from at least 3 local companies — prices vary by 20–30% for identical service.',
                  'Choose the right size. Too small = second rental fee ($200+). Too big = wasted money. When unsure, go one size up.',
                  'Ask for an all-in quote that includes weight, fuel, and taxes — not just the base rate.',
                  'Book 3–5 days ahead. Last-minute bookings often get the leftover containers at premium prices.',
                  'Avoid heavy materials in standard containers. Concrete and shingles quickly exceed weight limits — use a specialty container.',
                  'Separate recyclables (metal, clean wood, cardboard) — some providers discount loads with high recycled content.',
                ].map((tip, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{tip}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-5">
                Cost FAQs
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
          <aside className="space-y-5">
            <div className="rounded-xl border border-green-200 bg-green-50 p-6">
              <h3 className="font-bold text-gray-900 text-lg mb-1">Get Local Prices</h3>
              <p className="text-sm text-gray-600 mb-4">
                National averages don&apos;t tell you what you&apos;ll pay locally. Compare quotes from companies in your city.
              </p>
              <Link href="/dumpster-rental"
                className="block w-full rounded-lg bg-green-600 py-3 text-center font-bold text-white hover:bg-green-700 transition">
                Find Local Companies
              </Link>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <h3 className="font-bold text-gray-900 mb-3">Price by Size</h3>
              <div className="space-y-2">
                {SIZE_DETAILS.map((s) => (
                  <Link key={s.yards} href={`/dumpster-sizes/${s.yards}-yard`}
                    className="flex items-center justify-between text-sm text-gray-700 hover:text-green-600 transition group">
                    <span>{s.yards} yard</span>
                    <span className="font-semibold group-hover:text-green-600">
                      {formatPrice(s.lowPrice)}–{formatPrice(s.highPrice)}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <h3 className="font-bold text-gray-900 mb-3">Related Guides</h3>
              <div className="space-y-2">
                {[
                  { label: 'Dumpster Size Guide', href: '/dumpster-sizes' },
                  { label: 'Weight Limit Calculator', href: '/dumpster-weight-limit-calculator' },
                  { label: 'Do You Need a Permit?', href: '/dumpster-rental-permit' },
                  { label: 'How Long Can You Keep a Dumpster?', href: '/how-long-can-you-keep-a-rental-dumpster' },
                  { label: 'Cheap Dumpster Rental Tips', href: '/cheap-dumpster-rental' },
                ].map((link) => (
                  <Link key={link.href} href={link.href}
                    className="flex items-center justify-between text-sm text-gray-700 hover:text-green-600 transition group">
                    <span>{link.label}</span>
                    <ArrowRight className="h-3.5 w-3.5 text-gray-400 group-hover:text-green-600 transition shrink-0" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <h3 className="font-bold text-gray-900 mb-3">Cost by Project</h3>
              <div className="space-y-2 text-sm text-gray-700">
                {[
                  { project: 'Bathroom remodel', size: 10 },
                  { project: 'Kitchen renovation', size: 15 },
                  { project: 'Roofing tear-off', size: 20 },
                  { project: 'Whole-home cleanout', size: 20 },
                  { project: 'New construction', size: 30 },
                ].map((item) => {
                  const p = DEFAULT_PRICING[item.size]
                  return (
                    <div key={item.project} className="flex justify-between gap-2">
                      <span className="text-gray-600">{item.project}</span>
                      <span className="font-medium shrink-0">
                        {formatPrice(p.low)}–{formatPrice(p.high)}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  )
}
