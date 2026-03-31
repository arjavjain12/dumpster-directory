import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Breadcrumbs from '@/components/Breadcrumbs'
import DumpsterEstimator from './DumpsterEstimator'

export const metadata: Metadata = {
  title: 'Dumpster Size Estimator — What Size Do I Need? (2026)',
  description:
    'Find out exactly what size dumpster you need. Select your project type, add specific items, and get an instant recommendation with 20% packing buffer — free.',
  alternates: { canonical: '/dumpster-size-estimator' },
  openGraph: {
    title: 'Dumpster Size Estimator — Get the Right Size First Time',
    description: 'Select your project type and add specific items to get an accurate dumpster size recommendation. Avoid paying for too much — or running out of space.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What size dumpster do I need for a home cleanout?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For a typical home cleanout (garage, basement, or estate cleanout), a 10-yard or 15-yard dumpster is usually sufficient. If you\'re clearing out a large home with multiple rooms of furniture, appliances, and junk, a 20-yard dumpster gives you more room and fewer trips.',
      },
    },
    {
      '@type': 'Question',
      name: 'What size dumpster do I need for a roofing project?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Roofing shingles are heavy and dense. For a typical 1,500–2,000 sq ft roof, a 10-yard dumpster is often sufficient. For larger roofs (2,500+ sq ft) or multi-layer tearoffs, go with a 15-yard or 20-yard dumpster. Always check weight limits — shingles are heavy.',
      },
    },
    {
      '@type': 'Question',
      name: 'What size dumpster do I need for a renovation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A bathroom renovation typically needs a 10-yard dumpster. A kitchen remodel usually calls for a 15-yard or 20-yard. Whole-home renovations often require a 30-yard or 40-yard dumpster, or multiple hauls with a smaller size.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it better to go bigger on dumpster size?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Generally yes — renting one size up is often cheaper than a second pickup. Most companies charge $50–$150 for an overfill fee or a second trip. Our estimator adds a 20% packing buffer automatically to account for inefficient loading and surprise debris.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does "yard" mean in dumpster sizes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The "yard" in dumpster sizing refers to cubic yards of volume — not linear feet. A 10-yard dumpster holds 10 cubic yards of debris (270 cubic feet), which is roughly equivalent to 3–4 pickup truck loads.',
      },
    },
  ],
}

const SIZE_GUIDE = [
  {
    size: '10-Yard',
    bestFor: 'Small cleanout, bathroom remodel, minor landscaping',
    holds: '3–4 pickup truck loads',
    typical: 'Single room, garage cleanout',
  },
  {
    size: '15-Yard',
    bestFor: 'Kitchen remodel, garage cleanout, medium landscaping',
    holds: '4–6 pickup truck loads',
    typical: 'Two-room renovation, large garage',
  },
  {
    size: '20-Yard',
    bestFor: 'Whole-home cleanout, full roofing, large renovation',
    holds: '6–8 pickup truck loads',
    typical: 'Most popular all-purpose size',
  },
  {
    size: '30-Yard',
    bestFor: 'New construction, large commercial, multi-room renovation',
    holds: '9–12 pickup truck loads',
    typical: 'New home construction, major remodel',
  },
  {
    size: '40-Yard',
    bestFor: 'Commercial projects, major demolition, large construction',
    holds: '12–16 pickup truck loads',
    typical: 'Commercial buildings, full gut renovations',
  },
]

export default function DumpsterSizeEstimatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'Dumpster Size Estimator',
        applicationCategory: 'UtilitiesApplication',
        operatingSystem: 'Web',
        url: 'https://dumpsterlisting.com/dumpster-size-estimator',
        description: 'Find the right dumpster size for your project. Select project type, add specific items, and get a recommendation with 20% packing buffer.',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        featureList: 'Project type selector. Item checklist with quantities. 20% packing buffer. Recommended dumpster size.',
      }) }} />

      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs crumbs={[
            { label: 'Home', href: '/' },
            { label: 'Dumpster Size Estimator' },
          ]} />
          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900">
            Dumpster Size Estimator
          </h1>
          <p className="mt-3 max-w-3xl text-gray-600 leading-relaxed">
            Not sure what size dumpster you need? Select your project type, then add the specific
            items you're disposing of. Our estimator applies a 20% packing buffer and recommends
            the right size — so you don't pay for too much or run out of room mid-project.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        <DumpsterEstimator />

        {/* Size Guide Table */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-5">Dumpster Size Quick Reference</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">Size</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">Best For</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 hidden sm:table-cell">Capacity</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">Typical Use</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {SIZE_GUIDE.map((row) => (
                  <tr key={row.size} className="hover:bg-gray-50 transition">
                    <td className="px-4 py-3 font-bold text-green-700 whitespace-nowrap">{row.size}</td>
                    <td className="px-4 py-3 text-gray-700">{row.bestFor}</td>
                    <td className="px-4 py-3 text-gray-600 hidden sm:table-cell whitespace-nowrap">{row.holds}</td>
                    <td className="px-4 py-3 text-gray-500 hidden md:table-cell">{row.typical}</td>
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
              { label: 'Cubic Yard Calculator', href: '/cubic-yard-calculator', desc: 'Convert dimensions to cubic yards' },
              { label: 'Dumpster Weight Limit Calculator', href: '/dumpster-weight-limit-calculator', desc: 'Check if your load exceeds weight limits' },
              { label: 'Concrete Weight Calculator', href: '/concrete-weight-calculator', desc: 'Estimate slab and demolition weight' },
              { label: 'Drywall Weight Calculator', href: '/drywall-weight-calculator', desc: 'Calculate drywall removal weight' },
            ].map((link) => (
              <Link key={link.href} href={link.href}
                className="flex flex-col rounded-xl border border-gray-200 bg-white px-4 py-3 hover:border-green-200 hover:shadow-sm transition group">
                <span className="text-sm font-semibold text-gray-900 group-hover:text-green-700 transition">{link.label}</span>
                <span className="text-xs text-gray-500 mt-0.5">{link.desc}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Shop by project type */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Find Dumpsters by Project Type</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { label: 'Construction Projects', href: '/dumpster-rental/construction' },
              { label: 'Residential Cleanouts', href: '/dumpster-rental/residential' },
              { label: 'Roofing Projects', href: '/dumpster-rental/roofing' },
              { label: 'Concrete Removal', href: '/dumpster-rental/concrete' },
              { label: 'Yard Waste', href: '/dumpster-rental/yard-waste' },
              { label: 'Roll-Off Rentals', href: '/dumpster-rental/roll-off' },
            ].map((link) => (
              <Link key={link.href} href={link.href}
                className="flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-green-700 hover:border-green-200 transition">
                <ArrowRight className="h-3.5 w-3.5 text-gray-400 shrink-0" />
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        <section className="rounded-2xl bg-gradient-to-r from-green-700 to-green-700 p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Know Your Size? Find a Dumpster Near You.</h2>
          <p className="text-green-100 mb-6 max-w-xl mx-auto">Browse local dumpster rental companies and get free quotes — takes less than 2 minutes.</p>
          <Link href="/dumpster-rental"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 font-bold text-green-700 hover:bg-green-50 transition">
            Find Local Companies <ArrowRight className="h-5 w-5" />
          </Link>
        </section>
      </div>
    </>
  )
}
