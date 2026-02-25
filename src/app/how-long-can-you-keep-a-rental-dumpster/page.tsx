import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'How Long Can You Keep a Rental Dumpster? (2026 Guide)',
  description:
    'Standard dumpster rentals last 7–14 days. Learn about extensions, long-term rentals, daily overage fees, and how to avoid extra charges.',
  alternates: { canonical: '/how-long-can-you-keep-a-rental-dumpster' },
  openGraph: {
    title: 'How Long Can You Keep a Rental Dumpster?',
    description: 'Find out standard rental periods (7–14 days), extension fees, and tips for avoiding extra charges on your dumpster rental.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How long can you keep a rental dumpster?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Most dumpster rental companies include 7–14 days in their standard rental price. After that, extension fees typically run $5–$20 per day depending on the company and location. Some haulers offer 30-day or longer open-end rentals for ongoing construction projects — these are priced differently than standard short-term rentals.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is the standard dumpster rental period?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The most common standard rental period is 7 days (1 week), though many companies offer 10–14 day base rentals. According to Angi's 2025 national data, the average included rental period is 7–10 days. Always confirm the included days when getting a quote — some low-price offers only include 3–5 days.",
      },
    },
    {
      '@type': 'Question',
      name: 'How much do dumpster rental extensions cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Extension fees average $5–$15 per day for most roll-off dumpsters. Some companies charge a flat weekly extension fee ($35–$75/week) rather than daily rates. Fees vary by company, location, and dumpster size. Always ask upfront — extension rates are often negotiable, especially for longer-term rentals.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you keep a dumpster for a month?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, most companies accommodate month-long or longer rentals. For projects running 30+ days, ask about long-term rental pricing — it\'s often better than paying daily extension rates. Monthly dumpster rentals are common for construction sites, large renovations, and commercial cleanouts. Expect to pay $400–$900/month depending on size and location.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if I keep the dumpster longer than the rental period?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "If you exceed your rental period without requesting an extension, the company will typically charge the daily extension rate automatically. Contact your hauler proactively if you need more time — they almost always accommodate extensions, and proactive calls often result in better rates.",
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How Long Can You Keep a Rental Dumpster? Complete Guide',
  description: 'Standard rental periods, extension fees, long-term rental pricing, and tips for avoiding extra charges.',
  datePublished: '2026-02-24',
  dateModified: '2026-02-24',
  author: { '@type': 'Organization', name: 'DumpsterListing', url: 'https://dumpsterlisting.com' },
  publisher: { '@type': 'Organization', name: 'DumpsterListing', url: 'https://dumpsterlisting.com' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://dumpsterlisting.com/how-long-can-you-keep-a-rental-dumpster' },
}

const RENTAL_PERIODS = [
  {
    type: 'Short-term (standard)',
    duration: '7–14 days',
    price: 'Included in base rental',
    bestFor: 'One-time cleanouts, weekend projects, small renovations',
    notes: 'Most common. Confirm exact days included before booking.',
  },
  {
    type: 'Extended rental',
    duration: '15–29 days',
    price: '$5–$15/day in extension fees',
    bestFor: 'Larger renovations, projects with unpredictable timelines',
    notes: 'Call your hauler as you approach the end of your included period.',
  },
  {
    type: 'Monthly rental',
    duration: '30+ days',
    price: '$400–$900/month (all-in)',
    bestFor: 'Active construction sites, large commercial projects, ongoing cleanouts',
    notes: 'Ask about monthly pricing upfront — often better than daily extension rates.',
  },
]

const TIPS = [
  { title: 'Confirm included days upfront', detail: 'Some budget quotes only include 3–5 days. Ask specifically: "How many days are included?"' },
  { title: 'Ask about extension rates before signing', detail: 'Extension fees range from $5 to $20/day. Knowing the rate helps you plan your project timeline.' },
  { title: "Call to extend — don't just let it run over", detail: 'Proactive calls usually result in better rates and avoid surprise charges. Haulers appreciate the notice.' },
  { title: 'Schedule pickup for the right day', detail: "If you're done early, call for early pickup to avoid paying for days you don't need." },
  { title: 'For long projects, negotiate monthly rates', detail: 'Companies often offer flat monthly pricing that\'s cheaper than weekly rental + daily extensions.' },
  { title: 'Confirm permit validity matches rental period', detail: "If your dumpster is on a public street, make sure your permit covers any extensions." },
]

export default function HowLongKeepDumpsterPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs crumbs={[
            { label: 'Home', href: '/' },
            { label: 'How Long Can You Keep a Rental Dumpster?' },
          ]} />
          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900">
            How Long Can You Keep a Rental Dumpster?
          </h1>
          <p className="mt-3 max-w-3xl text-gray-600 leading-relaxed">
            Most dumpster rentals include 7–14 days. Extensions are available for $5–$15/day, and long-term monthly rentals are an option for larger projects. Here&apos;s what you need to know to avoid surprise fees.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-14">

        {/* Quick stats */}
        <div className="grid grid-cols-3 gap-4 text-center">
          {[
            { label: 'Standard rental period', value: '7–14 days' },
            { label: 'Extension fee (typical)', value: '$5–$15/day' },
            { label: 'Monthly rental (avg.)', value: '$400–$900/mo' },
          ].map((stat) => (
            <div key={stat.label} className="rounded-xl border border-gray-200 bg-white p-4">
              <div className="text-2xl font-extrabold text-green-700 mb-1">{stat.value}</div>
              <div className="text-xs text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Rental period options */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-5">Rental Period Options</h2>
          <div className="space-y-4">
            {RENTAL_PERIODS.map((period) => (
              <div key={period.type} className="rounded-xl border border-gray-200 bg-white p-6">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">{period.type}</h3>
                    <div className="text-green-700 font-semibold text-sm mt-0.5">{period.duration}</div>
                  </div>
                  <div className="rounded-lg bg-gray-50 border border-gray-200 px-3 py-1.5 text-sm font-semibold text-gray-700">
                    {period.price}
                  </div>
                </div>
                <div className="text-sm text-gray-600 mb-2">
                  <span className="font-medium">Best for:</span> {period.bestFor}
                </div>
                <div className="text-sm text-amber-700 bg-amber-50 rounded-lg px-3 py-2 border border-amber-100">
                  💡 {period.notes}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tips */}
        <section className="rounded-2xl border border-blue-100 bg-blue-50 p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Tips to Avoid Extra Charges</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {TIPS.map((t) => (
              <div key={t.title} className="flex gap-3">
                <div className="h-6 w-6 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">✓</div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">{t.title}</div>
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

        {/* Related */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Related Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: 'How much does a dumpster rental cost?', href: '/dumpster-rental-cost' },
              { label: 'Do you need a dumpster permit?', href: '/dumpster-rental-permit' },
              { label: 'What can you put in a dumpster?', href: '/what-can-you-put-in-a-dumpster' },
              { label: 'Roll-off dumpster sizes guide', href: '/roll-off-dumpster-sizes' },
            ].map((link) => (
              <Link key={link.href} href={link.href}
                className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-700 hover:text-green-700 hover:border-green-200 transition">
                <ArrowRight className="h-3.5 w-3.5 text-gray-400 shrink-0" />
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-2xl bg-gradient-to-r from-green-700 to-green-700 p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Find a Dumpster Rental Near You</h2>
          <p className="text-green-100 mb-6 max-w-xl mx-auto">Compare rental periods and pricing from local companies — free quotes in minutes.</p>
          <Link href="/dumpster-rental"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 font-bold text-green-700 hover:bg-green-50 transition">
            Find Local Companies <ArrowRight className="h-5 w-5" />
          </Link>
        </section>
      </div>
    </>
  )
}
