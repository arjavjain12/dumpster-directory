import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Roll-Off Dumpster Sizes: 10 to 40 Yard Guide (2026)',
  description:
    'Complete guide to roll-off dumpster sizes — 10, 15, 20, 30, and 40 yard. Dimensions, weight limits, pricing, and which size fits your project.',
  alternates: { canonical: '/roll-off-dumpster-sizes' },
  openGraph: {
    title: 'Roll-Off Dumpster Sizes: Complete Guide (10–40 Yard)',
    description: 'Every roll-off dumpster size explained — dimensions, capacity, weight limits, pricing, and the right size for each project type.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are the standard roll-off dumpster sizes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The five standard roll-off dumpster sizes are 10 yard, 15 yard, 20 yard, 30 yard, and 40 yard. Some companies also offer 12-yard and 25-yard containers in certain markets. The most commonly rented sizes are 10-yard (small cleanouts), 20-yard (medium renovations), and 30-yard (large projects).',
      },
    },
    {
      '@type': 'Question',
      name: 'How big is a 10 yard dumpster?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "A 10-yard dumpster typically measures 12 feet long × 8 feet wide × 3.5 feet high and holds about 10 cubic yards of debris — equivalent to 3 pickup truck loads. It's the smallest standard roll-off size and fits most standard driveways. Weight limit is typically 1–2 tons.",
      },
    },
    {
      '@type': 'Question',
      name: 'What size dumpster do I need for a whole-house cleanout?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most whole-house cleanouts require a 20-yard or 30-yard dumpster. A 20-yard handles medium-sized homes (2–3 bedrooms) with a moderate amount of furniture and junk. A 30-yard is safer for larger homes (4+ bedrooms), homes with lots of furniture, or when you\'re also disposing of appliances and bulky items.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does dumpster size affect the price?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Each step up in dumpster size typically adds $75–$150 to the weekly rental price. According to Angi's 2025 national pricing data: 10-yard averages $275–$375, 20-yard averages $350–$550, and 40-yard averages $550–$850. Location is a bigger price factor than size — California and Northeast markets often run 30–50% above the national average.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is the largest roll-off dumpster available?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The largest standard roll-off dumpster is the 40-yard, which holds 40 cubic yards of debris — equivalent to about 12 pickup truck loads. It measures approximately 22 ft long × 8 ft wide × 8 ft high and is used for major commercial construction, large demolition projects, and industrial cleanouts.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Roll-Off Dumpster Sizes: Complete 10 to 40 Yard Guide',
  description: 'Everything about roll-off dumpster sizes including dimensions, weight limits, pricing, and ideal projects for each size.',
  datePublished: '2026-02-24',
  dateModified: '2026-02-24',
  author: { '@type': 'Organization', name: 'DumpsterListing', url: 'https://dumpsterlisting.com' },
  publisher: { '@type': 'Organization', name: 'DumpsterListing', url: 'https://dumpsterlisting.com' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://dumpsterlisting.com/roll-off-dumpster-sizes' },
}

const SIZES = [
  {
    yards: 10,
    length: '12 ft', width: '8 ft', height: '3.5 ft',
    truckLoads: '~3 loads', weightLimit: '1–2 tons', price: '$275–$375',
    href: '/dumpster-sizes/10-yard',
    bestFor: ['Small bathroom or kitchen remodel', 'Single-room cleanout', 'Small deck removal', 'Garage cleanout', 'Small landscaping project'],
    notFor: ['Multi-room renovations', 'Whole-house cleanouts', 'Roofing jobs'],
  },
  {
    yards: 15,
    length: '16 ft', width: '7.5 ft', height: '4 ft',
    truckLoads: '~4.5 loads', weightLimit: '2–3 tons', price: '$300–$450',
    href: '/dumpster-sizes/15-yard',
    bestFor: ['Medium bathroom or kitchen remodel', 'Small roofing job', 'Multi-room cleanout', 'Basement or attic cleanout', 'Small home renovation'],
    notFor: ['Large roofing jobs', 'Whole-house cleanouts', 'Major construction'],
  },
  {
    yards: 20,
    length: '22 ft', width: '7.5 ft', height: '4.5 ft',
    truckLoads: '~6 loads', weightLimit: '2–4 tons', price: '$350–$550',
    href: '/dumpster-sizes/20-yard',
    bestFor: ['Standard residential roof replacement', 'Kitchen or bathroom renovation', 'Medium home cleanout', 'Deck or patio removal', 'Flooring replacement (whole house)'],
    notFor: ['Large multi-room renovations', 'Large estate cleanouts', 'Commercial projects'],
  },
  {
    yards: 30,
    length: '22 ft', width: '7.5 ft', height: '6 ft',
    truckLoads: '~9 loads', weightLimit: '3–6 tons', price: '$450–$700',
    href: '/dumpster-sizes/30-yard',
    bestFor: ['Large home renovation (multi-room)', 'Whole-house cleanout', 'Large roof replacement', 'Commercial remodel', 'New construction debris'],
    notFor: ['Small residential projects', 'Areas with strict weight limits'],
  },
  {
    yards: 40,
    length: '22 ft', width: '8 ft', height: '8 ft',
    truckLoads: '~12 loads', weightLimit: '4–8 tons', price: '$550–$850',
    href: '/dumpster-sizes/40-yard',
    bestFor: ['Major commercial construction', 'Large demolition projects', 'Industrial cleanouts', 'New home construction', 'Large commercial remodels'],
    notFor: ['Residential driveways (height clearance)', 'Small projects', 'Areas with weight restrictions'],
  },
]

export default function RollOffDumpsterSizesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs crumbs={[
            { label: 'Home', href: '/' },
            { label: 'Dumpster Sizes', href: '/dumpster-sizes' },
            { label: 'Roll-Off Dumpster Sizes' },
          ]} />
          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900">
            Roll-Off Dumpster Sizes: Complete Guide
          </h1>
          <p className="mt-3 max-w-3xl text-gray-600 leading-relaxed">
            Roll-off dumpsters come in five standard sizes: 10, 15, 20, 30, and 40 cubic yards. Here&apos;s everything you need to know about dimensions, pricing, and which size fits your project.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-14">

        {/* Quick reference table */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-5">Quick Reference: All Dumpster Sizes</h2>
          <div className="rounded-xl border border-gray-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">Size</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">Dimensions (L×W×H)</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">Capacity</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">Weight Limit</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">Avg. Price</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                {SIZES.map((s) => (
                  <tr key={s.yards} className="hover:bg-gray-50 transition">
                    <td className="px-4 py-3">
                      <Link href={s.href} className="font-semibold text-green-700 hover:underline">
                        {s.yards} Yard
                      </Link>
                    </td>
                    <td className="px-4 py-3 text-gray-600">{s.length} × {s.width} × {s.height}</td>
                    <td className="px-4 py-3 text-gray-600">{s.truckLoads}</td>
                    <td className="px-4 py-3 text-gray-600">{s.weightLimit}</td>
                    <td className="px-4 py-3 font-medium text-gray-800">{s.price}/week</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Size-by-size breakdown */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-gray-900">Size-by-Size Breakdown</h2>
          {SIZES.map((s) => (
            <div key={s.yards} className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="flex flex-wrap items-start gap-4 mb-5">
                <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-full bg-green-50">
                  <span className="text-2xl font-extrabold text-green-700">{s.yards}</span>
                  <span className="text-xs font-medium text-green-600">yard</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900">{s.yards}-Yard Dumpster</h3>
                  <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-500">
                    <span>{s.length} × {s.width} × {s.height}</span>
                    <span>·</span>
                    <span>{s.truckLoads}</span>
                    <span>·</span>
                    <span>{s.weightLimit}</span>
                    <span>·</span>
                    <span className="font-semibold text-gray-700">{s.price}/week</span>
                  </div>
                </div>
                <Link
                  href={s.href}
                  className="shrink-0 inline-flex items-center gap-1.5 rounded-lg border border-green-200 bg-green-50 px-4 py-2 text-sm font-semibold text-green-700 hover:bg-green-100 transition"
                >
                  View Details <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="font-semibold text-gray-800 mb-2">✅ Best for:</div>
                  <ul className="space-y-1 text-gray-600">
                    {s.bestFor.map((item) => <li key={item}>• {item}</li>)}
                  </ul>
                </div>
                <div>
                  <div className="font-semibold text-gray-800 mb-2">❌ Not ideal for:</div>
                  <ul className="space-y-1 text-gray-600">
                    {s.notFor.map((item) => <li key={item}>• {item}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          ))}
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
          <h2 className="text-2xl font-bold mb-2">Ready to Rent?</h2>
          <p className="text-green-100 mb-6 max-w-xl mx-auto">Find local dumpster rental companies and compare prices by size.</p>
          <Link href="/dumpster-rental"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 font-bold text-green-700 hover:bg-green-50 transition">
            Find Local Companies <ArrowRight className="h-5 w-5" />
          </Link>
        </section>
      </div>
    </>
  )
}
