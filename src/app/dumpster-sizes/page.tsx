import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'
import Breadcrumbs from '@/components/Breadcrumbs'
import { formatPrice } from '@/lib/utils'
import SizeComparisonInfographic from '@/components/infographics/SizeComparisonInfographic'
import WeightLimitsInfographic from '@/components/infographics/WeightLimitsInfographic'

export const metadata: Metadata = {
  title: 'Dumpster Sizes & Dimensions Guide (2026) — 10, 15, 20, 30, 40 Yard',
  description:
    'Not sure what size dumpster you need? Compare 10, 15, 20, 30, and 40 yard dumpsters — dimensions, capacity, pricing, and what each size is best for.',
  alternates: { canonical: '/dumpster-sizes' },
  openGraph: {
    title: 'Dumpster Sizes & Dimensions Guide (2026)',
    description: 'Compare 10–40 yard roll-off dumpster sizes, pricing, and use cases.',
  },
}

const SIZES = [
  {
    yards: 10,
    slug: '10-yard',
    dimensions: '12 × 7.5 × 3.5 ft',
    priceRange: '$275–$450',
    lowPrice: 275,
    highPrice: 450,
    capacity: '3–4 pickup loads',
    idealFor: ['Small cleanouts', 'Bathroom remodels', 'Garage cleanouts', 'Minor landscaping'],
    color: 'blue',
  },
  {
    yards: 15,
    slug: '15-yard',
    dimensions: '14 × 7.5 × 4 ft',
    priceRange: '$325–$500',
    lowPrice: 325,
    highPrice: 500,
    capacity: '4–6 pickup loads',
    idealFor: ['Kitchen renovations', 'Flooring removal', 'Medium cleanouts', 'Small roofing jobs'],
    color: 'green',
  },
  {
    yards: 20,
    slug: '20-yard',
    dimensions: '16 × 7.5 × 4.5 ft',
    priceRange: '$375–$575',
    lowPrice: 375,
    highPrice: 575,
    capacity: '6–8 pickup loads',
    idealFor: ['Whole-home cleanouts', 'Medium roofing', 'Siding removal', 'Large renovations'],
    color: 'yellow',
  },
  {
    yards: 30,
    slug: '30-yard',
    dimensions: '18 × 7.5 × 5.5 ft',
    priceRange: '$425–$650',
    lowPrice: 425,
    highPrice: 650,
    capacity: '9–12 pickup loads',
    idealFor: ['Large home remodels', 'New construction', 'Commercial projects', 'Estate cleanouts'],
    color: 'orange',
  },
  {
    yards: 40,
    slug: '40-yard',
    dimensions: '22 × 7.5 × 8 ft',
    priceRange: '$475–$750',
    lowPrice: 475,
    highPrice: 750,
    capacity: '12–16 pickup loads',
    idealFor: ['Major construction', 'Commercial demolition', 'Large commercial builds', 'Industrial projects'],
    color: 'red',
  },
]

const QUICK_GUIDE = [
  { project: 'Bathroom remodel', recommended: 10, reason: 'Old tile, fixtures, and drywall fit easily' },
  { project: 'Kitchen renovation', recommended: 15, reason: 'Cabinets, appliances, and demo debris' },
  { project: 'Roof replacement (1,500 sq ft)', recommended: 20, reason: 'Shingles are heavy — 20-yd handles typical weight' },
  { project: 'Whole-house cleanout', recommended: 20, reason: 'Furniture, appliances, and household items' },
  { project: 'Home addition or new build', recommended: 30, reason: 'Framing, drywall, and construction waste' },
  { project: 'Large commercial project', recommended: 40, reason: 'Maximum capacity for big jobs' },
]

const schema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Dumpster Sizes Guide',
  description: 'Compare 10, 15, 20, 30, and 40 yard roll-off dumpster sizes',
  numberOfItems: 5,
  itemListElement: SIZES.map((s, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: `${s.yards} Yard Dumpster`,
    url: `/dumpster-sizes/${s.slug}`,
  })),
}

export default function DumpsterSizesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs crumbs={[
            { label: 'Home', href: '/' },
            { label: 'Dumpster Sizes' },
          ]} />
          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900">
            Dumpster Size Guide: Which Size Do You Need?
          </h1>
          <p className="mt-3 max-w-3xl text-gray-600 leading-relaxed">
            Choosing the right dumpster size saves money and headaches. Too small and you pay for a second haul.
            Too large and you&apos;re paying for space you don&apos;t need. Use this guide to pick the perfect
            roll-off for your project — from small home cleanouts to large commercial builds.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">

        {/* Size comparison infographic */}
        <section>
          <SizeComparisonInfographic />
        </section>

        {/* Size cards */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Compare All Dumpster Sizes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SIZES.map((s) => (
              <Link
                key={s.yards}
                href={`/dumpster-sizes/${s.slug}`}
                className="group rounded-xl border border-gray-200 bg-white p-6 hover:border-green-300 hover:shadow-md transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className="text-3xl font-extrabold text-gray-900">{s.yards}</span>
                    <span className="text-lg font-semibold text-gray-500 ml-1">yard</span>
                  </div>
                  <span className="text-sm font-semibold text-green-700 bg-green-50 rounded-full px-3 py-1">
                    {s.priceRange}
                  </span>
                </div>

                <div className="space-y-1 text-sm text-gray-600 mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Dimensions</span>
                    <span className="font-medium text-gray-700">{s.dimensions}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Capacity</span>
                    <span className="font-medium text-gray-700">{s.capacity}</span>
                  </div>
                </div>

                <ul className="space-y-1 mb-4">
                  {s.idealFor.map((use) => (
                    <li key={use} className="flex items-center gap-1.5 text-sm text-gray-700">
                      <CheckCircle className="h-3.5 w-3.5 text-green-500 shrink-0" />
                      {use}
                    </li>
                  ))}
                </ul>

                <span className="flex items-center gap-1 text-sm font-semibold text-green-600 group-hover:gap-2 transition-all">
                  Full {s.yards}-yard guide <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Comparison table */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-5">Quick Comparison Table</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">Size</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">Dimensions</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">Capacity</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">Avg. Price</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">Best For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {SIZES.map((s) => (
                  <tr key={s.yards} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3">
                      <Link href={`/dumpster-sizes/${s.slug}`} className="font-bold text-green-600 hover:underline">
                        {s.yards} yard
                      </Link>
                    </td>
                    <td className="px-4 py-3 text-gray-600">{s.dimensions}</td>
                    <td className="px-4 py-3 text-gray-600">{s.capacity}</td>
                    <td className="px-4 py-3 font-medium text-gray-900">
                      {formatPrice(s.lowPrice)}–{formatPrice(s.highPrice)}
                    </td>
                    <td className="px-4 py-3 text-gray-600">{s.idealFor[0]}, {s.idealFor[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-gray-400">* Prices are national averages. Actual costs vary by location and company.</p>
        </section>

        {/* Project-based quick guide */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-5">What Size Do I Need for My Project?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {QUICK_GUIDE.map((item) => (
              <div key={item.project} className="flex gap-3 rounded-xl border border-gray-200 bg-white p-4">
                <div className="shrink-0 h-9 w-9 rounded-full bg-green-50 flex items-center justify-center">
                  <span className="text-sm font-extrabold text-green-700">{item.recommended}</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{item.project}</p>
                  <p className="text-sm text-gray-500 mt-0.5">
                    <span className="text-green-700 font-medium">{item.recommended}-yard recommended</span> — {item.reason}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Weight limits infographic */}
        <section>
          <WeightLimitsInfographic />
        </section>

        {/* Tips */}
        <section className="rounded-xl border border-green-200 bg-green-50 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Pro Tips for Choosing the Right Size</h2>
          <ul className="space-y-3">
            {[
              { tip: 'When in doubt, go bigger', detail: 'Upgrading to a larger size typically costs $50–$75 more. An extra haul costs $200–$400.' },
              { tip: 'Heavy materials need weight limits', detail: 'Concrete, dirt, and shingles are very heavy. A 10-yard dumpster can hit weight limits even when only half-full.' },
              { tip: 'Measure your space first', detail: 'Roll-off dumpsters need clearance for delivery. Measure your driveway and check for overhead wires or trees.' },
              { tip: 'Ask about included tonnage', detail: 'Most rentals include 1–3 tons. Extra weight is billed at $60–$80 per ton overage.' },
            ].map((item) => (
              <li key={item.tip} className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-gray-900">{item.tip}: </span>
                  <span className="text-gray-700 text-sm">{item.detail}</span>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Related tools & guides */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Calculators & Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { label: '20 Yard vs 30 Yard: Full Comparison', href: '/20-yard-dumpster-vs-30-yard-dumpster' },
              { label: 'Dumpster Weight Limit Calculator', href: '/dumpster-weight-limit-calculator' },
              { label: 'Dumpster Size Estimator', href: '/dumpster-size-estimator' },
              { label: 'Do You Need a Permit?', href: '/dumpster-rental-permit' },
              { label: 'How Long Can You Keep a Dumpster?', href: '/how-long-can-you-keep-a-rental-dumpster' },
              { label: 'What Can You Put in a Dumpster?', href: '/what-can-you-put-in-a-dumpster' },
            ].map((link) => (
              <Link key={link.href} href={link.href}
                className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-700 hover:text-green-600 hover:border-green-200 transition">
                <ArrowRight className="h-3.5 w-3.5 text-gray-400 shrink-0" />
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-xl border border-gray-200 bg-white p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Ready to Rent a Dumpster?</h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Find local dumpster rental companies in your city. Compare prices and get free quotes in minutes.
          </p>
          <Link
            href="/dumpster-rental"
            className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-8 py-3.5 font-bold text-white hover:bg-green-700 transition"
          >
            Find Local Companies <ArrowRight className="h-5 w-5" />
          </Link>
        </section>
      </div>
    </>
  )
}
