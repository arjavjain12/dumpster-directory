import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Breadcrumbs from '@/components/Breadcrumbs'
import ConcreteCalculator from './ConcreteCalculator'

export const metadata: Metadata = {
  title: 'Concrete Weight Calculator — How Heavy Is My Concrete? (2026)',
  description:
    'Calculate the weight of concrete by entering dimensions. Instantly get weight in lbs and tons, cubic yards, and the right dumpster size for your concrete removal project.',
  alternates: { canonical: '/concrete-weight-calculator' },
  openGraph: {
    title: 'Concrete Weight Calculator — Slabs, Walls & Columns',
    description: 'Enter your concrete dimensions and instantly get weight in lbs, tons, and the right dumpster size for removal.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does concrete weigh per cubic yard?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Standard concrete weighs approximately 4,050 pounds (about 2 tons) per cubic yard. Reinforced concrete with rebar is slightly heavier at around 4,185 lbs per cubic yard. Lightweight concrete can weigh as little as 2,970 lbs per cubic yard.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a concrete slab weigh?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A standard 4-inch thick concrete slab weighs approximately 50 lbs per square foot. A 10×10 foot slab would weigh about 5,000 lbs (2.5 tons). A typical two-car driveway (20×20 feet at 4 inches thick) weighs approximately 20,000 lbs or 10 tons.',
      },
    },
    {
      '@type': 'Question',
      name: 'What size dumpster do I need for concrete?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Because concrete is so heavy, most haulers recommend using a smaller dumpster filled less than halfway rather than a large one. A 10-yard dumpster is typically recommended for up to 1.5 tons of concrete, a 15-yard for up to 3 tons, and a 20-yard for up to 5 tons. Always confirm the weight limit with your rental company before loading concrete.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many cubic yards is a standard concrete driveway?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A standard two-car driveway measuring 20 feet wide by 20 feet long at 4 inches thick contains approximately 5 cubic yards of concrete (20 × 20 × 0.33 ÷ 27 = 4.9 yd³), weighing about 10 tons.',
      },
    },
  ],
}

const COMMON_PROJECTS = [
  { project: 'Standard Patio (10×12×4")', weight: '~1.5 tons', size: 10 },
  { project: 'Two-car Driveway (20×20×4")', weight: '~10 tons', size: 30 },
  { project: 'Sidewalk (3×20×4")', weight: '~0.75 tons', size: 10 },
  { project: 'Foundation Wall (20×4×1\')', weight: '~4 tons', size: 20 },
  { project: 'Pool Deck (30×15×4")', weight: '~4.5 tons', size: 20 },
]

export default function ConcreteWeightCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs crumbs={[
            { label: 'Home', href: '/' },
            { label: 'Concrete Weight Calculator' },
          ]} />
          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900">
            Concrete Weight Calculator
          </h1>
          <p className="mt-3 max-w-3xl text-gray-600 leading-relaxed">
            Enter your concrete dimensions to instantly calculate weight in pounds and tons, total cubic yards,
            and the right dumpster size for removal. Works for slabs, driveways, patios, walls, columns, and steps.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">

        <ConcreteCalculator />

        {/* Common projects reference */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-5">Common Concrete Project Weights</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-5 py-3 font-semibold text-gray-700">Project</th>
                  <th className="text-left px-5 py-3 font-semibold text-gray-700">Approx. Weight</th>
                  <th className="text-left px-5 py-3 font-semibold text-gray-700">Recommended Dumpster</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {COMMON_PROJECTS.map((p) => (
                  <tr key={p.project} className="hover:bg-gray-50">
                    <td className="px-5 py-3 font-medium text-gray-900">{p.project}</td>
                    <td className="px-5 py-3 text-gray-600">{p.weight}</td>
                    <td className="px-5 py-3">
                      <Link href={`/dumpster-sizes/${p.size}-yard`} className="font-semibold text-green-600 hover:underline">
                        {p.size}-yard dumpster
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
          <h2 className="text-2xl font-bold mb-2">Ready to Rent a Dumpster for Your Concrete Project?</h2>
          <p className="text-green-100 mb-6 max-w-xl mx-auto">
            Find local dumpster rental companies that specialize in concrete and heavy debris. Get free quotes in minutes.
          </p>
          <Link
            href="/dumpster-rental"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 font-bold text-green-700 hover:bg-green-50 transition"
          >
            Find Local Companies <ArrowRight className="h-5 w-5" />
          </Link>
        </section>
      </div>
    </>
  )
}
