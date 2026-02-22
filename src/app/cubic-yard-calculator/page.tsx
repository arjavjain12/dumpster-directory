import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Breadcrumbs from '@/components/Breadcrumbs'
import CubicYardCalculator from './CubicYardCalculator'

export const metadata: Metadata = {
  title: 'Cubic Yard Calculator — Convert Dimensions to Cubic Yards (2026)',
  description:
    'Calculate cubic yards from feet, inches, or yards. Add multiple areas. Instantly see how many cubic yards of debris you have and which dumpster size you need.',
  alternates: { canonical: '/cubic-yard-calculator' },
  openGraph: {
    title: 'Cubic Yard Calculator — Add Multiple Areas',
    description: 'Enter length, width, and depth in feet or inches. Calculate total cubic yards and find the right dumpster size.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do you calculate cubic yards?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'To calculate cubic yards, multiply the length × width × depth (all in feet) and then divide by 27. For example, a space that is 10 feet long, 10 feet wide, and 1 foot deep = 100 cubic feet ÷ 27 = 3.7 cubic yards.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many cubic yards fit in a pickup truck?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A standard full-size pickup truck (like an F-150 or Silverado) holds approximately 1.5 to 2 cubic yards of debris. A 10-yard dumpster therefore holds roughly the same as 5–6 full pickup truck loads.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many cubic feet are in a cubic yard?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'One cubic yard equals 27 cubic feet (3 feet × 3 feet × 3 feet = 27). To convert cubic feet to cubic yards, divide by 27. To convert cubic yards to cubic feet, multiply by 27.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many cubic yards is a 10-yard dumpster?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A "10-yard" dumpster holds 10 cubic yards of debris — equivalent to 270 cubic feet or approximately 3–4 pickup truck loads. The "yard" in dumpster sizing refers to cubic yards of volume, not linear feet.',
      },
    },
  ],
}

export default function CubicYardCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs crumbs={[
            { label: 'Home', href: '/' },
            { label: 'Cubic Yard Calculator' },
          ]} />
          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900">
            Cubic Yard Calculator
          </h1>
          <p className="mt-3 max-w-3xl text-gray-600 leading-relaxed">
            Calculate cubic yards from any dimensions — feet, inches, or yards. Add multiple areas and get
            a running total. Instantly see how many pickup truck loads that equals and which dumpster size
            you need for your project.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        <CubicYardCalculator />

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
