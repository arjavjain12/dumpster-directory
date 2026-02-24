import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: '20 Yard vs 30 Yard Dumpster: Which Size Do You Need? (2026)',
  description:
    'Compare 20-yard and 30-yard dumpsters side by side — dimensions, weight limits, pricing, and which projects each size handles best.',
  alternates: { canonical: '/20-yard-dumpster-vs-30-yard-dumpster' },
  openGraph: {
    title: '20 Yard vs 30 Yard Dumpster: Size Comparison Guide',
    description: 'Not sure whether to rent a 20 or 30 yard dumpster? This guide breaks down dimensions, cost, weight limits, and ideal projects for each.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the difference between a 20 yard and 30 yard dumpster?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A 20-yard dumpster holds approximately 20 cubic yards of debris (about 6 pickup truck loads) and typically measures 22 ft long × 7.5 ft wide × 4.5 ft high. A 30-yard dumpster holds 30 cubic yards (roughly 9 pickup truck loads) and typically measures 22 ft long × 7.5 ft wide × 6 ft high. The main difference is height — a 30-yard sits noticeably taller. Pricing difference averages $75–$150 more for the 30-yard.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a 20 yard dumpster cost vs a 30 yard?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "According to Angi's 2025 national cost data, a 20-yard dumpster averages $350–$550 per week while a 30-yard averages $450–$700 per week. Prices vary significantly by location — markets with higher landfill fees (California, Northeast) cost 20–40% more than the national average.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is a 20 yard dumpster big enough for a roof replacement?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A 20-yard dumpster handles most residential roof replacements (1,500–2,500 sq ft, single layer of shingles). For larger roofs, multiple layers of shingles, or homes over 3,000 sq ft, a 30-yard is the safer choice. Roofing debris is heavy — most providers cap roofing-only loads at 3–4 tons in a 20-yard.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a 30 yard dumpster used for?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "A 30-yard dumpster is ideal for large home renovations, whole-house cleanouts, major construction projects, commercial remodels, and large roofing jobs. It's the most popular size for contractors handling multi-room renovations or estate cleanouts with bulky furniture and appliances.",
      },
    },
    {
      '@type': 'Question',
      name: 'Will a 20 yard dumpster fit in my driveway?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most standard driveways can accommodate a 20-yard dumpster. You need approximately 60 feet of clearance (driveway + street) for the truck to deliver. A 30-yard requires the same footprint length but sits 18 inches taller. Neither size should be placed under low-hanging power lines or tree branches.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: '20 Yard vs 30 Yard Dumpster: Which Size Do You Need?',
  description: 'Side-by-side comparison of 20-yard and 30-yard dumpsters including dimensions, pricing, weight limits, and ideal projects.',
  datePublished: '2026-02-24',
  dateModified: '2026-02-24',
  author: { '@type': 'Organization', name: 'DumpsterListing', url: 'https://dumpsterlisting.com' },
  publisher: { '@type': 'Organization', name: 'DumpsterListing', url: 'https://dumpsterlisting.com' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://dumpsterlisting.com/20-yard-dumpster-vs-30-yard-dumpster' },
}

const COMPARISON = [
  { label: 'Capacity', yard20: '20 cubic yards', yard30: '30 cubic yards' },
  { label: 'Pickup truck loads', yard20: '~6 loads', yard30: '~9 loads' },
  { label: 'Typical length', yard20: '22 feet', yard30: '22 feet' },
  { label: 'Typical width', yard20: '7.5 feet', yard30: '7.5 feet' },
  { label: 'Typical height', yard20: '4.5 feet', yard30: '6 feet' },
  { label: 'Weight limit', yard20: '2–4 tons', yard30: '3–6 tons' },
  { label: 'Avg. price / week', yard20: '$350–$550', yard30: '$450–$700' },
  { label: 'Driveway fit', yard20: 'Most driveways', yard30: 'Most driveways' },
]

const PROJECTS_20 = [
  'Kitchen or bathroom renovation',
  'Single-room home remodel',
  'Residential roof replacement (≤2,500 sq ft)',
  'Garage cleanout',
  'Medium home cleanout',
  'Deck removal or build',
  'Small landscaping project',
  'Flooring replacement (whole house)',
]

const PROJECTS_30 = [
  'Whole-house renovation (multi-room)',
  'Large roof replacement or double-layer tear-off',
  'Full estate or house cleanout',
  'Major room addition',
  'Commercial office cleanout',
  'Large landscaping project',
  'New construction debris',
  'Combined renovation + cleanout',
]

export default function TwentyVsThirtyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs crumbs={[
            { label: 'Home', href: '/' },
            { label: 'Dumpster Sizes', href: '/dumpster-sizes' },
            { label: '20 Yard vs 30 Yard Dumpster' },
          ]} />
          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900">
            20 Yard vs 30 Yard Dumpster
          </h1>
          <p className="mt-3 max-w-3xl text-gray-600 leading-relaxed">
            Both are popular mid-to-large sizes — but they serve different projects. Here&apos;s exactly how they compare on capacity, price, and use cases so you can pick the right one.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-14">

        {/* Summary cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border-2 border-blue-200 bg-blue-50 p-6">
            <div className="text-4xl font-extrabold text-blue-700 mb-1">20 Yard</div>
            <div className="text-sm font-semibold text-blue-600 mb-4">Best for medium projects</div>
            <div className="space-y-2 text-sm text-gray-700">
              <div><span className="font-medium">Capacity:</span> 20 cubic yards (~6 pickup truck loads)</div>
              <div><span className="font-medium">Dimensions:</span> 22 ft × 7.5 ft × 4.5 ft high</div>
              <div><span className="font-medium">Weight limit:</span> 2–4 tons</div>
              <div><span className="font-medium">Avg. price:</span> $350–$550/week</div>
            </div>
          </div>
          <div className="rounded-2xl border-2 border-green-200 bg-green-50 p-6">
            <div className="text-4xl font-extrabold text-green-700 mb-1">30 Yard</div>
            <div className="text-sm font-semibold text-green-600 mb-4">Best for large projects</div>
            <div className="space-y-2 text-sm text-gray-700">
              <div><span className="font-medium">Capacity:</span> 30 cubic yards (~9 pickup truck loads)</div>
              <div><span className="font-medium">Dimensions:</span> 22 ft × 7.5 ft × 6 ft high</div>
              <div><span className="font-medium">Weight limit:</span> 3–6 tons</div>
              <div><span className="font-medium">Avg. price:</span> $450–$700/week</div>
            </div>
          </div>
        </div>

        {/* Comparison table */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-5">Full Specification Comparison</h2>
          <div className="rounded-xl border border-gray-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">Specification</th>
                  <th className="text-center px-4 py-3 font-semibold text-blue-700">20 Yard</th>
                  <th className="text-center px-4 py-3 font-semibold text-green-700">30 Yard</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                {COMPARISON.map((row) => (
                  <tr key={row.label} className="hover:bg-gray-50 transition">
                    <td className="px-4 py-3 font-medium text-gray-800">{row.label}</td>
                    <td className="px-4 py-3 text-center text-blue-800">{row.yard20}</td>
                    <td className="px-4 py-3 text-center text-green-800">{row.yard30}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Project fit */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Which Projects Fit Each Size?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-blue-100 bg-blue-50 p-5">
              <h3 className="font-bold text-blue-800 mb-4 text-lg">20 Yard — Best For</h3>
              <ul className="space-y-2">
                {PROJECTS_20.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle className="h-3.5 w-3.5 text-blue-500 shrink-0 mt-0.5" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-green-100 bg-green-50 p-5">
              <h3 className="font-bold text-green-800 mb-4 text-lg">30 Yard — Best For</h3>
              <ul className="space-y-2">
                {PROJECTS_30.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle className="h-3.5 w-3.5 text-green-500 shrink-0 mt-0.5" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Decision guide */}
        <section className="rounded-2xl border border-amber-100 bg-amber-50 p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Quick Decision Guide</h2>
          <div className="space-y-3 text-sm">
            {[
              { q: 'Single room renovation or garage cleanout?', a: "Go with the 20 yard — it's sufficient and saves $75–$150." },
              { q: 'Multi-room renovation or whole-house project?', a: 'Get the 30 yard. Running out of space mid-project costs more in the long run.' },
              { q: 'On a tight budget and close on size?', a: 'Rent the 30 yard. Overage fees ($50–$100+/ton over the limit) often exceed the upfront size difference.' },
              { q: 'Driveway has height clearance issues?', a: 'The 20 yard is 18 inches shorter — better for low-clearance areas under trees or wires.' },
              { q: 'Heavy materials like concrete or brick?', a: 'Weight limits matter more than volume. Both sizes cap at 2–6 tons — confirm with your hauler.' },
            ].map(({ q, a }) => (
              <div key={q} className="rounded-lg bg-white border border-amber-100 p-4">
                <div className="font-semibold text-gray-800 mb-1">{q}</div>
                <div className="text-gray-600">{a}</div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-5">Frequently Asked Questions</h2>
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
        <section className="rounded-2xl bg-gradient-to-r from-green-600 to-green-700 p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Find Local Dumpster Rentals</h2>
          <p className="text-green-100 mb-6 max-w-xl mx-auto">Compare pricing for 20-yard and 30-yard dumpsters from local companies.</p>
          <Link href="/dumpster-rental"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 font-bold text-green-700 hover:bg-green-50 transition">
            Find Local Companies <ArrowRight className="h-5 w-5" />
          </Link>
        </section>
      </div>
    </>
  )
}
