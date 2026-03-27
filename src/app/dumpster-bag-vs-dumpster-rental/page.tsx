import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  CheckCircle,
  XCircle,
  DollarSign,
  Package,
  Truck,
  Scale,
} from 'lucide-react'
import Breadcrumbs from '@/components/Breadcrumbs'
import AuthorByline from '@/components/AuthorByline'

export const metadata: Metadata = {
  title: 'Dumpster Bags vs. Dumpster Rental: Which Is Better?',
  description:
    'Compare dumpster bags (Bagster) vs traditional roll-off dumpster rentals by price, capacity, convenience, and best use cases. Find out which option saves you more.',
  alternates: { canonical: '/dumpster-bag-vs-dumpster-rental' },
  openGraph: {
    title: 'Dumpster Bags vs. Dumpster Rental: Which Is Better?',
    description:
      'Compare dumpster bags (Bagster) vs traditional roll-off dumpster rentals by price, capacity, convenience, and best use cases. Find out which option saves you more.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does a Bagster dumpster bag cost compared to a dumpster rental?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A Bagster bag costs about $30 at home improvement stores, plus $150–$300 for pickup depending on your location. A standard 10-yard roll-off dumpster rental costs $300–$500 all-in, including delivery, pickup, and disposal. For jobs over 1 cubic yard, the roll-off rental is almost always the better deal per cubic yard.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much can you fit in a dumpster bag vs a dumpster?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A standard dumpster bag like the Bagster holds up to 3 cubic yards (about 3,300 pounds). The smallest roll-off dumpster — a 10-yard container — holds over three times that volume at 10 cubic yards with a typical weight limit of 2–4 tons. If your project generates more than a small bathroom remodel worth of debris, a roll-off is the better fit.',
      },
    },
    {
      '@type': 'Question',
      name: 'When should I use a dumpster bag instead of renting a dumpster?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dumpster bags make sense for small, one-time cleanouts under 1 cubic yard — think a single-room declutter, minor landscaping, or a small bathroom demo. They also work well when you have a tight driveway that cannot accommodate a roll-off container or when you need flexible timing since bags can sit for weeks before scheduling pickup.',
      },
    },
  ],
}

const BAG_PROS = [
  'No delivery scheduling — buy at a store and set up yourself',
  'Fits in tight spaces where a roll-off container cannot',
  'Sits on your property as long as needed before pickup',
  'Low upfront cost ($30 for the bag itself)',
]

const BAG_CONS = [
  'Only 3 cubic yards of capacity (about one small room)',
  'Pickup fees ($150–$300) make per-cubic-yard cost very high',
  'Weight limit of 3,300 lbs — heavy debris fills it fast',
  'Not available in all areas for pickup',
  'Cannot handle large or bulky items like furniture frames',
]

const RENTAL_PROS = [
  '10–40 cubic yards of capacity — handles any residential project',
  'All-in pricing includes delivery, pickup, and disposal',
  'Lower cost per cubic yard, especially for larger jobs',
  'Walk-in door on many containers for easy loading',
  'Weight allowances of 2–6 tons cover most debris types',
]

const RENTAL_CONS = [
  'Requires a flat placement area (driveway or street)',
  'Delivery truck needs overhead clearance (~23 feet)',
  'Fixed rental period (typically 7–14 days)',
  'May need a permit if placed on a public street',
]

const COMPARISON_ROWS = [
  { feature: 'Capacity', bag: 'Up to 3 cubic yards', rental: '10–40 cubic yards' },
  { feature: 'Total Cost', bag: '$180–$330', rental: '$300–$500 (10-yd)' },
  { feature: 'Cost per Cubic Yard', bag: '$60–$110', rental: '$30–$50' },
  { feature: 'Weight Limit', bag: '3,300 lbs', rental: '4,000–12,000 lbs' },
  { feature: 'Rental Period', bag: 'Flexible (no deadline)', rental: '7–14 days included' },
  { feature: 'Delivery', bag: 'Self-serve (buy at store)', rental: 'Truck delivery to driveway' },
  { feature: 'Pickup Scheduling', bag: 'Call when ready', rental: 'Scheduled at booking' },
  { feature: 'Space Needed', bag: '8 ft × 4 ft × 2.5 ft', rental: '12–22 ft × 8 ft × 4–8 ft' },
  { feature: 'Best For', bag: 'Small single-room jobs', rental: 'Renovations, cleanouts, roofing' },
]

export default function DumpsterBagVsRentalPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs
            crumbs={[
              { label: 'Home', href: '/' },
              { label: 'Dumpster Sizes', href: '/dumpster-sizes' },
              { label: 'Dumpster Bags vs. Dumpster Rental' },
            ]}
          />
          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900">
            Dumpster Bags vs. Dumpster Rental: Which Is Better?
          </h1>
          <p className="mt-3 max-w-3xl text-gray-600 leading-relaxed">
            Dumpster bags like the Bagster promise cheap, convenient debris removal — but is the
            total cost really lower than renting a traditional roll-off dumpster? Here is an honest
            side-by-side comparison so you can pick the right option for your project and budget.
          </p>
          <AuthorByline updatedDate="March 2026" readTimeMin={4} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-14">

        {/* How Each Option Works */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">How Each Option Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-full bg-green-50 flex items-center justify-center">
                  <Package className="h-5 w-5 text-green-700" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg">Dumpster Bag (Bagster)</h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                You buy a collapsible woven bag at a home improvement store for about <strong className="text-gray-900">$30</strong>.
                Unfold it on your driveway, fill it with debris, then call the manufacturer to schedule
                a pickup. Pickup costs <strong className="text-gray-900">$150–$300</strong> depending on
                your zip code. The bag holds up to 3 cubic yards — roughly equivalent to 12 large trash
                bags — with a weight limit of 3,300 pounds.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-full bg-green-50 flex items-center justify-center">
                  <Truck className="h-5 w-5 text-green-700" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg">Roll-Off Dumpster Rental</h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                You book a dumpster (10 to 40 cubic yards) from a local hauler. They deliver a steel
                container to your driveway, you fill it over your rental period (typically 7–14 days),
                and they pick it up and haul it to the landfill. A standard <strong className="text-gray-900">10-yard
                rental runs $300–$500 all-in</strong> — delivery, pickup, disposal, and a weight allowance
                of 2–4 tons are included in one flat rate.
              </p>
            </div>
          </div>
        </section>

        {/* Price Comparison Table */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Side-by-Side Comparison</h2>
          <p className="text-gray-600 mb-6 max-w-2xl">
            This table compares a standard dumpster bag (3 cubic yards) against a 10-yard roll-off
            rental — the smallest traditional dumpster and the most direct competitor to a bag.
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-5 py-3 font-semibold text-gray-900">Feature</th>
                  <th className="text-left px-5 py-3 font-semibold text-gray-900">Dumpster Bag</th>
                  <th className="text-left px-5 py-3 font-semibold text-gray-900">Roll-Off Rental</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row) => (
                  <tr key={row.feature} className="border-b border-gray-100 last:border-0">
                    <td className="px-5 py-3 font-medium text-gray-900">{row.feature}</td>
                    <td className="px-5 py-3 text-gray-600">{row.bag}</td>
                    <td className="px-5 py-3 text-gray-600">{row.rental}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Pros and Cons */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Pros and Cons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Bag Pros/Cons */}
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Package className="h-5 w-5 text-green-700" /> Dumpster Bag
              </h3>
              <div className="space-y-2 mb-5">
                {BAG_PROS.map((pro) => (
                  <div key={pro} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{pro}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-2">
                {BAG_CONS.map((con) => (
                  <div key={con} className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-red-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{con}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Rental Pros/Cons */}
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Truck className="h-5 w-5 text-green-700" /> Roll-Off Dumpster Rental
              </h3>
              <div className="space-y-2 mb-5">
                {RENTAL_PROS.map((pro) => (
                  <div key={pro} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{pro}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-2">
                {RENTAL_CONS.map((con) => (
                  <div key={con} className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-red-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{con}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* When to Use Which */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">When to Use Each Option</h2>
          <p className="text-gray-600 mb-6 max-w-2xl">
            The right choice depends on the size of your project, your available space, and how
            quickly you need debris removed.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-green-200 bg-green-50 p-5">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Package className="h-5 w-5 text-green-700" /> Choose a Dumpster Bag When:
              </h3>
              <ul className="space-y-2">
                {[
                  'Your project generates less than 1 cubic yard of debris',
                  'You have a tight driveway or no space for a roll-off',
                  'You want to fill at your own pace with no rental deadline',
                  'Small bathroom demo, single-room declutter, or minor landscaping',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-green-200 bg-green-50 p-5">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Truck className="h-5 w-5 text-green-700" /> Choose a Dumpster Rental When:
              </h3>
              <ul className="space-y-2">
                {[
                  'Your project generates more than 1–2 cubic yards of debris',
                  'You are doing a full renovation, roofing job, or whole-home cleanout',
                  'You have heavy materials like concrete, brick, or dirt',
                  'You want the best cost per cubic yard of disposal',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Verdict */}
        <section className="rounded-xl border border-green-200 bg-green-50 p-7">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
              <Scale className="h-5 w-5 text-green-700" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">The Verdict</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Dumpster bags are a decent option for truly small jobs — a single room cleanout, a weekend
            landscaping project, or anything under about 1 cubic yard of debris. But once your project
            exceeds that threshold, a traditional roll-off rental is{' '}
            <strong className="text-gray-900">significantly cheaper per cubic yard</strong> and offers
            far more capacity. For most home projects — kitchen remodels, garage cleanouts, roofing jobs —
            a 10 or 20-yard dumpster rental is the smarter investment. You get 3–13 times the capacity
            of a bag, often for less than double the total cost.
          </p>
          <div className="mt-4 flex items-start gap-2 rounded-lg bg-white border border-green-100 p-3">
            <DollarSign className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
            <p className="text-sm text-green-800 font-medium">
              Bottom line: If you need to dispose of more than a few trash cans worth of stuff, skip
              the bag and rent a dumpster. The math works out in your favor every time.
            </p>
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

        {/* Internal Links */}
        <section className="rounded-xl border border-gray-100 bg-gray-50 p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Related Guides & Tools</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: 'Dumpster Sizes Guide', href: '/dumpster-sizes', desc: 'Compare 10, 15, 20, 30, and 40-yard containers' },
              { label: 'Cheap Dumpster Rental', href: '/cheap-dumpster-rental', desc: 'Tips to find the lowest prices in your area' },
              { label: 'Find Dumpster Rental Near You', href: '/dumpster-rental', desc: 'Compare local haulers and get quotes' },
              { label: 'Dumpster Rental Cost Guide', href: '/how-much-does-dumpster-rental-cost', desc: 'National pricing breakdown by size and region' },
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
            Ready to Rent a Dumpster?
          </h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Skip the bag and get a real dumpster. Compare quotes from local haulers and get
            next-day delivery in most areas.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/dumpster-rental-near-me"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-700 px-7 py-3.5 font-bold text-white hover:bg-green-800 transition"
            >
              Find Local Companies <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/dumpster-sizes"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-green-300 bg-white px-7 py-3.5 font-bold text-green-700 hover:bg-green-50 transition"
            >
              Compare Dumpster Sizes <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </section>

      </div>
    </>
  )
}
