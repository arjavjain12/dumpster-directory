import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle, AlertTriangle } from 'lucide-react'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Do You Need a Permit for a Dumpster? (2026 Guide)',
  description:
    "Find out when you need a dumpster rental permit, how to get one, and what it costs. Rules vary by city — here's what to expect.",
  alternates: { canonical: '/dumpster-rental-permit' },
  openGraph: {
    title: 'Dumpster Rental Permit: When You Need One & How to Get It',
    description: 'Do you need a permit to rent a dumpster? Learn when permits are required, costs ($15–$100), and how to apply before your delivery.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do I need a permit to rent a dumpster?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "It depends on where the dumpster will be placed. If the dumpster goes entirely on your private property (driveway, backyard), you typically do not need a permit. If it will be placed on a public street, sidewalk, or right-of-way, most cities require a permit. Always check with your local municipality before delivery.",
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a dumpster permit cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Dumpster permit costs vary widely by city. Most municipalities charge between $15 and $100 for a residential street permit valid for 1–7 days. Some cities like New York City and Boston charge more ($100–$300+) for permits in high-traffic areas. Many dumpster rental companies handle permit applications on your behalf, often including the cost in the rental price.",
      },
    },
    {
      '@type': 'Question',
      name: "Who gets the dumpster permit — me or the rental company?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Either you or the rental company can apply, depending on local regulations and the company's policies. Many haulers offer permit assistance as part of their service. Ask your rental company upfront — it's often easier and faster for them to pull permits since they know the local process. If you apply yourself, you'll need your address, rental dates, and the dumpster dimensions.",
      },
    },
    {
      '@type': 'Question',
      name: "What happens if I don't get a dumpster permit?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Placing a dumpster on a public street without a permit can result in fines of $50–$500+ depending on your city. Some cities may require immediate removal of the dumpster, which can disrupt your project. Repeat violations can result in higher fines. The rental company may also face penalties — some companies refuse to deliver to street locations without confirmed permits.",
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to get a dumpster permit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Processing times vary by city. Many municipalities issue permits same-day or within 1–2 business days for standard residential locations. High-volume cities (Chicago, NYC, LA) may take 3–5 business days. Apply at least a week before your dumpster delivery date to avoid delays.',
      },
    },
  ],
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Get a Dumpster Permit',
  description: 'Step-by-step guide to obtaining a dumpster street permit from your local municipality.',
  step: [
    {
      '@type': 'HowToStep',
      name: 'Confirm if a permit is required',
      text: "Contact your city or county public works department to ask if a permit is required for placing a dumpster on a public street in your area. Many cities have this information on their website.",
    },
    {
      '@type': 'HowToStep',
      name: 'Gather required information',
      text: "You'll typically need: your property address, the dumpster delivery and pickup dates, dumpster dimensions (ask your rental company), and sometimes a site sketch showing placement.",
    },
    {
      '@type': 'HowToStep',
      name: 'Submit the permit application',
      text: "Apply online through your city's permit portal, in-person at the public works office, or ask your dumpster rental company to handle the permit on your behalf. Pay the permit fee ($15–$100).",
    },
    {
      '@type': 'HowToStep',
      name: 'Display the permit and follow conditions',
      text: 'Once approved, keep the permit accessible during the rental. Most permits require traffic cones, reflective markers, or safety lights on the dumpster — especially if parked overnight.',
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Do You Need a Permit for a Dumpster? Complete 2026 Guide',
  description: 'When dumpster permits are required, how to get one, and what it costs — with city-specific guidance.',
  datePublished: '2026-02-24',
  dateModified: '2026-02-24',
  author: { '@type': 'Organization', name: 'DumpsterListing', url: 'https://dumpsterlisting.com' },
  publisher: { '@type': 'Organization', name: 'DumpsterListing', url: 'https://dumpsterlisting.com' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://dumpsterlisting.com/dumpster-rental-permit' },
}

const PERMIT_REQUIRED = [
  'Public street or road',
  'City sidewalk or walkway',
  'Public right-of-way',
  'Shared alley or lane',
  'Municipal parking lot',
]

const NO_PERMIT_NEEDED = [
  'Private driveway (on your property)',
  'Backyard or side yard',
  'Private parking lot',
  'Private alley (with owner permission)',
  'Construction site on private property',
]

const CITY_COSTS = [
  { city: 'New York City, NY', cost: '$100–$300+', notes: 'DOT permit required; high-traffic zones cost more' },
  { city: 'Los Angeles, CA', cost: '$50–$150', notes: 'LADBS permit; varies by district' },
  { city: 'Chicago, IL', cost: '$50–$100', notes: 'CDOT permit; 5–7 day processing time' },
  { city: 'Houston, TX', cost: '$15–$40', notes: 'Public Works permit; fast approval typical' },
  { city: 'Miami, FL', cost: '$30–$75', notes: 'City or county permit depending on location' },
  { city: 'Phoenix, AZ', cost: '$25–$50', notes: 'Street Use permit; available online' },
  { city: 'Denver, CO', cost: '$30–$60', notes: 'Right-of-way permit; 2–3 day typical processing' },
  { city: 'Most small cities', cost: '$15–$50', notes: 'Varies; many issue same-day' },
]

export default function DumpsterPermitPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs crumbs={[
            { label: 'Home', href: '/' },
            { label: 'Do You Need a Dumpster Permit?' },
          ]} />
          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900">
            Do You Need a Permit for a Dumpster Rental?
          </h1>
          <p className="mt-3 max-w-3xl text-gray-600 leading-relaxed">
            The short answer: it depends where the dumpster goes. Private property? Usually no permit needed. Public street? Most cities require one. Here&apos;s everything you need to know.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-14">

        {/* The simple rule */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-green-200 bg-green-50 p-6">
            <h2 className="font-bold text-gray-900 text-lg mb-3 flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-700" /> No Permit Needed
            </h2>
            <p className="text-sm text-gray-600 mb-4">When the dumpster is placed on:</p>
            <ul className="space-y-2">
              {NO_PERMIT_NEEDED.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle className="h-3.5 w-3.5 text-green-500 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-6">
            <h2 className="font-bold text-gray-900 text-lg mb-3 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-amber-500" /> Permit Usually Required
            </h2>
            <p className="text-sm text-gray-600 mb-4">When the dumpster is placed on:</p>
            <ul className="space-y-2">
              {PERMIT_REQUIRED.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                  <AlertTriangle className="h-3.5 w-3.5 text-amber-500 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* How to get one */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Get a Dumpster Permit</h2>
          <div className="space-y-4">
            {howToSchema.step.map((step, i) => (
              <div key={step.name} className="flex gap-4 rounded-xl border border-gray-200 bg-white p-5">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-700 text-white text-sm font-bold">
                  {i + 1}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">{step.name}</div>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* City costs */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Permit Costs by City</h2>
          <p className="text-gray-500 text-sm mb-5">Permit costs vary significantly by municipality. These are typical ranges — contact your local office for exact fees.</p>
          <div className="rounded-xl border border-gray-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">City</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">Typical Cost</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                {CITY_COSTS.map((row) => (
                  <tr key={row.city} className="hover:bg-gray-50 transition">
                    <td className="px-4 py-3 font-medium text-gray-800">{row.city}</td>
                    <td className="px-4 py-3 text-green-700 font-semibold">{row.cost}</td>
                    <td className="px-4 py-3 text-gray-600">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Tips */}
        <section className="rounded-2xl border border-blue-100 bg-blue-50 p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Permit Tips</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { tip: 'Ask your hauler first', detail: 'Many companies handle permits for you — often cheaper and faster than doing it yourself.' },
              { tip: 'Apply 5–7 days early', detail: "High-volume cities can take a week. Don't risk delaying your project." },
              { tip: 'Check safety requirements', detail: 'Most street permits require cones or reflectors on the dumpster at night.' },
              { tip: 'Extend if needed', detail: 'If your project runs long, extend the permit before it expires — same process, lower cost.' },
            ].map((t) => (
              <div key={t.tip} className="flex gap-3">
                <div className="h-6 w-6 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">✓</div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">{t.tip}</div>
                  <div className="text-xs text-gray-600 mt-0.5">{t.detail}</div>
                </div>
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
        <section className="rounded-2xl bg-gradient-to-r from-green-700 to-green-700 p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Find a Dumpster Rental Company Near You</h2>
          <p className="text-green-100 mb-6 max-w-xl mx-auto">Many local companies handle permits on your behalf. Compare quotes and book today.</p>
          <Link href="/dumpster-rental"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 font-bold text-green-700 hover:bg-green-50 transition">
            Find Local Companies <ArrowRight className="h-5 w-5" />
          </Link>
        </section>
      </div>
    </>
  )
}
