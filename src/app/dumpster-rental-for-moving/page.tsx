import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  CheckCircle,
  PackageOpen,
  Truck,
  DollarSign,
  Scale,
  XCircle,
  ArrowLeftRight,
} from 'lucide-react'
import Breadcrumbs from '@/components/Breadcrumbs'
import AuthorByline from '@/components/AuthorByline'

export const metadata: Metadata = {
  title: 'Do You Need a Dumpster When Moving?',
  description:
    'Find out when renting a dumpster for a move makes sense vs. donation or junk removal. Includes size recommendations, cost comparisons ($300-$800), and tips for downsizing.',
  alternates: { canonical: '/dumpster-rental-for-moving' },
  openGraph: {
    title: 'Do You Need a Dumpster When Moving?',
    description:
      'Find out when renting a dumpster for a move makes sense vs. donation or junk removal. Includes size recommendations, cost comparisons ($300-$800), and tips for downsizing.',
  },
}

const FAQ_ITEMS = [
  {
    question: 'How far in advance should I rent a dumpster before moving?',
    answer:
      'Book your dumpster 1 to 2 weeks before your planned declutter date. This gives you time to sort belongings, schedule donations, and have the container delivered on the day you need it. During peak moving season (May through September), book even earlier — haulers fill up fast and next-day delivery may not be available.',
  },
  {
    question: 'What size dumpster is best for moving out of a 3-bedroom house?',
    answer:
      'A 20-yard dumpster is the most common choice for a full-house purge from a 3-bedroom home. It holds roughly 8 pickup truck loads of debris — enough for old furniture, mattresses, clothing, and general household junk. If you are only tossing a few rooms worth of items, a 10-yard container is more cost effective.',
  },
  {
    question: 'Is it cheaper to rent a dumpster or hire a junk removal company?',
    answer:
      'A dumpster rental ($300 to $500 for a 10 or 20-yard container) is usually cheaper when you have a large volume of items and can load them yourself. Junk removal ($400 to $800 for a full truck) costs more but includes labor — they carry everything out for you. For smaller amounts, junk removal can be more efficient since you only pay for the space you use.',
  },
]

const WHEN_TO_RENT = [
  {
    title: 'You Are Downsizing',
    detail:
      'Moving from a 4-bedroom house to a 2-bedroom apartment means half your furniture, decor, and stored items have to go somewhere. A dumpster gives you a single place to toss everything that is not worth donating or selling.',
  },
  {
    title: 'You Are Moving Cross-Country',
    detail:
      'Shipping furniture across the country costs $1,000+ per room. For many families, it is cheaper to sell or discard older items and buy replacements at the destination. A dumpster handles the disposal side quickly.',
  },
  {
    title: 'The Home Has Years of Accumulated Stuff',
    detail:
      'If you have lived in the same home for 10+ years, closets, attics, garages, and basements fill up. A pre-move declutter with a dumpster means you only pack and ship what you actually want to keep.',
  },
  {
    title: 'You Are Renovating Before Selling',
    detail:
      'Updating a kitchen or pulling up old carpet before listing generates debris that does not fit in curbside trash. A dumpster handles both the renovation waste and the household junk in one rental.',
  },
]

const WHEN_NOT_TO = [
  {
    title: 'Small Apartment, Minimal Stuff',
    detail:
      'If you are moving out of a studio or 1-bedroom apartment and only have a few bags of trash and a couple of unwanted items, curbside pickup or a single junk removal appointment is more cost effective than a full dumpster rental.',
  },
  {
    title: 'Most Items Are Donatable',
    detail:
      'If the majority of your unwanted belongings are in good condition — working appliances, clean furniture, wearable clothing — donation is free and more meaningful. Schedule pickup from Habitat ReStore, Goodwill, or The Salvation Army before considering a dumpster.',
  },
  {
    title: 'Your City Offers Bulk Pickup',
    detail:
      'Many municipalities offer free or low-cost bulk item pickup a few times per year. If your move aligns with a scheduled bulk pickup day, you may be able to set items at the curb at no cost.',
  },
]

const COMPARISON = [
  {
    method: 'Dumpster Rental',
    cost: '$300–$500',
    pros: 'Handle large volumes on your schedule; keep it for 7–14 days; load at your own pace',
    cons: 'You do all the lifting; requires driveway space; weight limits apply',
    bestFor: 'Large declutters, full-house purges, renovation debris',
  },
  {
    method: 'Junk Removal Service',
    cost: '$400–$800',
    pros: 'No lifting — crew does all the work; same-day service often available',
    cons: 'More expensive per volume; one-time visit means you need everything ready at once',
    bestFor: 'Moderate amounts of junk; people who cannot load heavy items themselves',
  },
  {
    method: 'Donation Pickup',
    cost: 'Free',
    pros: 'No cost; items go to people who need them; potential tax deduction',
    cons: 'Only accepts items in good condition; scheduling can take 1–2 weeks; limited to certain items',
    bestFor: 'Functional furniture, clothing, kitchenware, and appliances',
  },
]

export default function DumpsterRentalForMovingPage() {
  return (
    <>
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: FAQ_ITEMS.map((item) => ({
              '@type': 'Question',
              name: item.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer,
              },
            })),
          }),
        }}
      />

      {/* Hero */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs
            crumbs={[
              { label: 'Home', href: '/' },
              { label: 'Dumpster Rental for Moving' },
            ]}
          />
          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900">
            Do You Need a Dumpster When Moving? Here&apos;s When It Makes Sense
          </h1>
          <p className="mt-3 max-w-3xl text-gray-600 leading-relaxed">
            Most moves generate more junk than people expect. Between broken furniture, outdated
            electronics, and closets full of things you forgot you owned, the average household
            purge produces{' '}
            <strong className="text-gray-900">3,000–5,000 pounds of discarded items</strong>. A
            dumpster rental is not always the answer — but when it is, it saves time, money, and
            dozens of trips to the dump.
          </p>
          <AuthorByline updatedDate="March 2026" readTimeMin={5} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-14">

        {/* When to Rent */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            When Renting a Dumpster Makes Sense
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl">
            A dumpster is worth it when you have a high volume of items to discard and enough time
            to load them yourself. Here are the most common scenarios.
          </p>
          <div className="space-y-3">
            {WHEN_TO_RENT.map((item) => (
              <div
                key={item.title}
                className="flex gap-4 rounded-xl border border-gray-200 bg-white p-4 hover:border-green-200 transition-colors"
              >
                <CheckCircle className="h-5 w-5 text-green-700 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* When NOT to Rent */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            When You Probably Do Not Need a Dumpster
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl">
            A dumpster is overkill in some situations. Save your money if any of these apply.
          </p>
          <div className="space-y-3">
            {WHEN_NOT_TO.map((item) => (
              <div
                key={item.title}
                className="flex gap-4 rounded-xl border border-gray-200 bg-white p-4 hover:border-green-200 transition-colors"
              >
                <XCircle className="h-5 w-5 text-gray-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison Table */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Dumpster vs Junk Removal vs Donation
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl">
            Each disposal method has trade-offs. Most moves use a combination of all three.
          </p>
          <div className="space-y-5">
            {COMPARISON.map((option) => (
              <div
                key={option.method}
                className="rounded-xl border border-gray-200 bg-white p-5 hover:border-green-200 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                    <ArrowLeftRight className="h-5 w-5 text-green-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{option.method}</h3>
                    <span className="text-sm text-green-700 font-semibold">{option.cost}</span>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                  <div>
                    <span className="font-medium text-gray-900">Pros:</span>
                    <p className="text-gray-600 mt-0.5">{option.pros}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">Cons:</span>
                    <p className="text-gray-600 mt-0.5">{option.cons}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">Best for:</span>
                    <p className="text-gray-600 mt-0.5">{option.bestFor}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Size Recommendations */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Recommended Dumpster Sizes for Moving
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl">
            The right size depends on how much you are discarding. Here is a quick guide.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                size: '10-Yard Dumpster',
                icon: PackageOpen,
                bestFor: 'Light declutter — a few rooms of junk, small furniture, boxes',
                capacity: 'About 4 pickup truck loads',
                cost: '$300–$400',
                note: 'Good for apartment moves or targeted room cleanouts',
              },
              {
                size: '20-Yard Dumpster',
                icon: Truck,
                bestFor: 'Full-house purge — furniture, appliances, closets, garage',
                capacity: 'About 8 pickup truck loads',
                cost: '$400–$500',
                note: 'Most popular size for residential moves',
              },
            ].map((rec) => {
              const Icon = rec.icon
              return (
                <div
                  key={rec.size}
                  className="rounded-xl border border-gray-200 bg-white p-5 hover:border-green-200 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-10 w-10 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                      <Icon className="h-5 w-5 text-green-700" />
                    </div>
                    <h3 className="font-bold text-gray-900">{rec.size}</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 shrink-0" />
                      <span className="text-gray-700"><strong>Best for:</strong> {rec.bestFor}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Scale className="h-4 w-4 text-green-600 shrink-0" />
                      <span className="text-gray-700"><strong>Capacity:</strong> {rec.capacity}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-green-600 shrink-0" />
                      <span className="text-gray-700"><strong>Cost:</strong> {rec.cost}</span>
                    </div>
                  </div>
                  <p className="mt-3 text-xs text-gray-500 italic">{rec.note}</p>
                </div>
              )
            })}
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {FAQ_ITEMS.map((faq) => (
              <div
                key={faq.question}
                className="rounded-xl border border-gray-200 bg-white p-5 hover:border-green-200 transition-colors"
              >
                <h3 className="font-bold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Internal Links */}
        <section className="rounded-xl border border-gray-100 bg-gray-50 p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Related Guides & Tools</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: 'Dumpster Rental vs Junk Removal', href: '/dumpster-rental-vs-junk-removal', desc: 'Side-by-side cost and convenience comparison' },
              { label: 'Dumpster Sizes Guide', href: '/dumpster-sizes', desc: 'Dimensions, capacity, and pricing for every size' },
              { label: 'Dumpster Rental Checklist', href: '/dumpster-rental-checklist', desc: 'Everything to do before, during, and after your rental' },
              { label: 'Home Cleanout Dumpster Guide', href: '/home-cleanout-dumpster-guide', desc: 'Complete guide to whole-home cleanouts' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-3 hover:border-green-300 transition group"
              >
                <ArrowRight className="h-4 w-4 text-green-500 shrink-0 mt-0.5 group-hover:translate-x-0.5 transition-transform" />
                <div>
                  <div className="text-sm font-semibold text-gray-900">{link.label}</div>
                  <div className="text-xs text-gray-500">{link.desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-xl border border-green-200 bg-green-50 p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Moving Soon? Get Dumpster Quotes Now
          </h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Compare prices from local dumpster rental companies. Book early — especially during
            summer moving season — to lock in availability and the best rate.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/dumpster-rental-near-me"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-700 px-7 py-3.5 font-bold text-white hover:bg-green-800 transition"
            >
              Find Local Companies <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/dumpster-rental-cost"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-green-300 bg-white px-7 py-3.5 font-bold text-green-700 hover:bg-green-50 transition"
            >
              See Pricing Guide <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </section>

      </div>
    </>
  )
}
