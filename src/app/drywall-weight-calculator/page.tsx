import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Breadcrumbs from '@/components/Breadcrumbs'
import DrywallCalculator from './DrywallCalculator'

export const metadata: Metadata = {
  title: 'Drywall Weight Calculator — How Heavy Is My Drywall? (2026)',
  description:
    'Calculate drywall weight by room dimensions or square footage. Get weight in lbs/tons, number of sheets, and the right dumpster size for drywall removal.',
  alternates: { canonical: '/drywall-weight-calculator' },
  openGraph: {
    title: 'Drywall Weight Calculator — By Room or Square Footage',
    description: 'Enter room dimensions to calculate total drywall weight and get the right dumpster size for removal.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does a sheet of drywall weigh?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A standard 4×8 foot sheet of 1/2-inch drywall weighs approximately 57 pounds. A 4×8 sheet of 5/8-inch drywall (fire-rated or ceiling) weighs about 74 pounds. Lightweight drywall options weigh around 44 lbs per 4×8 sheet.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does drywall weigh per square foot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '1/2-inch drywall weighs approximately 1.78 lbs per square foot. 5/8-inch drywall weighs about 2.31 lbs per square foot. So a room with 500 square feet of drywall (1/2 inch) would weigh roughly 890 lbs.',
      },
    },
    {
      '@type': 'Question',
      name: 'What size dumpster for drywall removal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For a single room renovation, a 10-yard dumpster is usually sufficient. For a full home renovation or whole-house drywall tearout, a 20-yard dumpster is the most common choice. Drywall is lighter than concrete, so you can fill a dumpster fairly full without hitting weight limits.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you put drywall in a dumpster?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, drywall (gypsum board) is accepted in most roll-off dumpsters. However, some areas require separate disposal for clean drywall because it can be recycled. Check with your local hauler — drywall-only loads sometimes qualify for lower disposal rates.',
      },
    },
  ],
}

export default function DrywallWeightCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs crumbs={[
            { label: 'Home', href: '/' },
            { label: 'Drywall Weight Calculator' },
          ]} />
          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900">
            Drywall Weight Calculator
          </h1>
          <p className="mt-3 max-w-3xl text-gray-600 leading-relaxed">
            Calculate the total weight of drywall you're removing — by room dimensions or total square footage.
            Get the number of sheets, weight in pounds and tons, and the right dumpster size for disposal.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        <DrywallCalculator />

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

        <section className="rounded-2xl bg-gradient-to-r from-green-600 to-green-700 p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Need a Dumpster for Your Renovation?</h2>
          <p className="text-green-100 mb-6 max-w-xl mx-auto">Find local dumpster rental companies and get free quotes in minutes.</p>
          <Link href="/dumpster-rental"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 font-bold text-green-700 hover:bg-green-50 transition">
            Find Local Companies <ArrowRight className="h-5 w-5" />
          </Link>
        </section>
      </div>
    </>
  )
}
