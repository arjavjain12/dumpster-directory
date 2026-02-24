import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Breadcrumbs from '@/components/Breadcrumbs'
import WeightLimitCalculator from './WeightLimitCalculator'

export const metadata: Metadata = {
  title: 'Dumpster Weight Limit Calculator — Estimate Your Load (2026)',
  description:
    "Calculate whether your debris will exceed your dumpster's weight limit. Instantly estimate weight by material type and see potential overage fees.",
  alternates: { canonical: '/dumpster-weight-limit-calculator' },
  openGraph: {
    title: 'Dumpster Weight Limit Calculator',
    description: "Estimate the weight of your debris by material type and see if it fits within your dumpster's weight limit — avoiding costly overage fees.",
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are typical dumpster weight limits?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Weight limits vary by dumpster size: 10-yard dumpsters typically allow 2 tons, 20-yard dumpsters allow 3–4 tons, 30-yard dumpsters allow 4–6 tons, and 40-yard dumpsters allow 6–8 tons. These limits are set by the hauler based on truck capacity and local road weight restrictions.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost to exceed a dumpster weight limit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Overage fees typically run $50–$100 per ton over the included weight limit. If your load exceeds the limit by 2 tons and the overage rate is $65/ton, you'd pay an extra $130. Overage fees are charged at pickup when the truck is weighed at the disposal facility.",
      },
    },
    {
      '@type': 'Question',
      name: 'How heavy is a cubic yard of concrete?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'According to the Portland Cement Association, standard concrete weighs approximately 4,050 lbs per cubic yard (about 2 tons). This means a 10-yard dumpster filled entirely with concrete would weigh roughly 20 tons — far exceeding any standard weight limit. Always rent a concrete-specific dumpster for heavy materials.',
      },
    },
    {
      '@type': 'Question',
      name: 'What materials are heaviest in a dumpster?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The heaviest common dumpster materials are concrete (~4,050 lbs/cu yd), gravel (~2,800 lbs/cu yd), sand (~2,700 lbs/cu yd), and soil (~2,700 lbs/cu yd). Asphalt shingles (~850 lbs/cu yd) and tile (~1,800 lbs/cu yd) are also significantly heavier than general household debris (~300 lbs/cu yd).',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I put concrete in a regular dumpster?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Concrete can go in a regular roll-off dumpster, but weight limits apply strictly. Many haulers offer concrete-only or heavy material dumpsters at lower rates since concrete can be recycled. A 10-yard concrete-only dumpster is often more economical than attempting to fit concrete into a larger general dumpster.',
      },
    },
  ],
}

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Dumpster Weight Limit Calculator',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  description: 'Free calculator to estimate debris weight by material type and check against dumpster weight limits.',
  url: 'https://dumpsterlisting.com/dumpster-weight-limit-calculator',
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Dumpster Weight Limit Calculator: Estimate Your Load Before You Rent',
  description: 'Free tool to calculate debris weight by material type and check against dumpster weight limits to avoid overage fees.',
  datePublished: '2026-02-24',
  dateModified: '2026-02-24',
  author: { '@type': 'Organization', name: 'DumpsterListing', url: 'https://dumpsterlisting.com' },
  publisher: { '@type': 'Organization', name: 'DumpsterListing', url: 'https://dumpsterlisting.com' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://dumpsterlisting.com/dumpster-weight-limit-calculator' },
}

const WEIGHT_REFERENCE = [
  { material: 'Concrete / brick', lbsPerCuYd: '4,050', tonsPerCuYd: '2.03', notes: 'Heaviest — use concrete-only dumpsters' },
  { material: 'Gravel / stone', lbsPerCuYd: '2,800', tonsPerCuYd: '1.40', notes: 'Very heavy — watch limits carefully' },
  { material: 'Soil / dirt', lbsPerCuYd: '2,700', tonsPerCuYd: '1.35', notes: 'Very heavy — even small volumes add up' },
  { material: 'Sand', lbsPerCuYd: '2,700', tonsPerCuYd: '1.35', notes: 'Very heavy — use heavy-material dumpster' },
  { material: 'Tile / ceramic', lbsPerCuYd: '1,800', tonsPerCuYd: '0.90', notes: 'Heavy — mix with lighter materials' },
  { material: 'Asphalt shingles', lbsPerCuYd: '850', tonsPerCuYd: '0.43', notes: 'Moderate — watch for multi-layer tear-offs' },
  { material: 'Lumber / wood', lbsPerCuYd: '600', tonsPerCuYd: '0.30', notes: 'Moderate — mix of solid and hollow lumber varies' },
  { material: 'Drywall / plaster', lbsPerCuYd: '500', tonsPerCuYd: '0.25', notes: 'Moderate — typically fine in standard limits' },
  { material: 'Yard waste / brush', lbsPerCuYd: '400', tonsPerCuYd: '0.20', notes: 'Light — usually stays well within limits' },
  { material: 'General household junk', lbsPerCuYd: '300', tonsPerCuYd: '0.15', notes: 'Light — furniture, boxes, misc debris' },
]

export default function DumpsterWeightCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs crumbs={[
            { label: 'Home', href: '/' },
            { label: 'Calculators', href: '/cubic-yard-calculator' },
            { label: 'Dumpster Weight Limit Calculator' },
          ]} />
          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900">
            Dumpster Weight Limit Calculator
          </h1>
          <p className="mt-3 max-w-3xl text-gray-600 leading-relaxed">
            Overage fees hit when your load exceeds the weight limit — typically $50–$100 per extra ton. Enter your material and volume to see whether you&apos;ll stay within limits.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-14">

        {/* Calculator */}
        <section className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Estimate Your Load Weight</h2>
          <WeightLimitCalculator />
        </section>

        {/* Weight reference table */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Material Weight Reference</h2>
          <p className="text-gray-500 text-sm mb-5">Weights per cubic yard for common dumpster materials. Source: Portland Cement Association, industry averages.</p>
          <div className="rounded-xl border border-gray-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">Material</th>
                  <th className="text-right px-4 py-3 font-semibold text-gray-700">lbs/cu yd</th>
                  <th className="text-right px-4 py-3 font-semibold text-gray-700">tons/cu yd</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                {WEIGHT_REFERENCE.map((row) => (
                  <tr key={row.material} className="hover:bg-gray-50 transition">
                    <td className="px-4 py-3 font-medium text-gray-800">{row.material}</td>
                    <td className="px-4 py-3 text-right text-gray-700">{row.lbsPerCuYd}</td>
                    <td className="px-4 py-3 text-right text-gray-700">{row.tonsPerCuYd}</td>
                    <td className="px-4 py-3 text-gray-500 text-xs">{row.notes}</td>
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

        {/* Related tools */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Related Calculators & Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: 'Cubic Yard Calculator', href: '/cubic-yard-calculator' },
              { label: 'Concrete Weight Calculator', href: '/concrete-weight-calculator' },
              { label: 'Dumpster Size Estimator', href: '/dumpster-size-estimator' },
              { label: 'How to Dispose of Concrete', href: '/how-to-dispose-of-concrete' },
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
        <section className="rounded-2xl bg-gradient-to-r from-green-600 to-green-700 p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Find the Right Dumpster for Your Load</h2>
          <p className="text-green-100 mb-6 max-w-xl mx-auto">Compare local dumpster rental companies with the right size and weight limits for your project.</p>
          <Link href="/dumpster-rental"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 font-bold text-green-700 hover:bg-green-50 transition">
            Find Local Companies <ArrowRight className="h-5 w-5" />
          </Link>
        </section>
      </div>
    </>
  )
}
