import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  CheckCircle,
  Truck,
  Calendar,
  Scale,
  Recycle,
  AlertTriangle,
} from 'lucide-react'
import Breadcrumbs from '@/components/Breadcrumbs'
import PricingBreakdownInfographic from '@/components/infographics/PricingBreakdownInfographic'
import WhatFitsInfographic from '@/components/infographics/WhatFitsInfographic'

export const metadata: Metadata = {
  title: 'How Much Does Dumpster Rental Cost? (2026 Price Guide)',
  description:
    'The average dumpster rental costs $300–$550 for a standard 20-yard container. See exact prices by size (10–40 yard), city, and project type — plus tips to avoid hidden fees.',
  alternates: { canonical: '/how-much-does-dumpster-rental-cost' },
  openGraph: {
    title: 'How Much Does Dumpster Rental Cost? (2026 Price Guide)',
    description:
      'The average dumpster rental costs $300–$550 for a standard 20-yard container. See exact prices by size (10–40 yard), city, and project type — plus tips to avoid hidden fees.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does it cost to rent a dumpster?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dumpster rental costs range from $250 to $750 depending on the container size, your location, and the type of debris. The national average is around $400 for a standard 20-yard roll-off dumpster, which is the most commonly rented size. Smaller 10-yard containers typically cost $250–$350, while large 40-yard dumpsters can reach $555–$750. Prices also vary by market — dense urban areas cost significantly more than rural regions.',
      },
    },
    {
      '@type': 'Question',
      name: 'What size dumpster do I need?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The right size depends on your project. A 10-yard dumpster handles small cleanouts like a single room, garage, or bathroom remodel. A 20-yard is the go-to choice for whole-home renovations, large cleanouts, and flooring removal across multiple rooms. A 30-yard suits larger construction projects, full roofing jobs, and commercial work. A 40-yard is reserved for new construction, major demolition, and large-scale commercial projects. When in doubt, go one size up — a second rental trip typically costs more than upgrading.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there hidden fees in dumpster rentals?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, several fees can increase your final bill beyond the quoted price. The most common are overage weight charges ($60–$100 per ton over the included allowance), extra day fees if you keep the dumpster longer than the rental period ($5–$15/day), prohibited item removal fees if restricted materials are found in the bin ($50–$150), fuel or environmental surcharges added at checkout, and street permit fees if the dumpster must be placed on a public road ($20–$100). Always ask for an all-in quote that includes these potential add-ons.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I get the cheapest dumpster rental?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'To get the best price on a dumpster rental: (1) Get at least 3 quotes from local companies — prices for the same container can vary 20–30% in the same market. (2) Book mid-week (Tuesday–Thursday) when demand is lower and haulers are more flexible on price. (3) Use your driveway instead of the street to avoid permit fees. (4) Stay under the weight limit — avoid throwing heavy materials like concrete or dirt unless confirmed with the hauler. (5) Return the dumpster on time to avoid daily extension fees.',
      },
    },
  ],
}

const PRICE_TABLE = [
  {
    size: '10 yd',
    low: '$250',
    high: '$350',
    bestFor: 'Single room cleanout, small remodel',
  },
  {
    size: '15 yd',
    low: '$305',
    high: '$425',
    bestFor: 'Kitchen/bath remodel, garage cleanout',
  },
  {
    size: '20 yd',
    low: '$375',
    high: '$500',
    bestFor: 'Whole-home renovation, large cleanout',
  },
  {
    size: '30 yd',
    low: '$455',
    high: '$600',
    bestFor: 'Construction, large roofing, commercial',
  },
  {
    size: '40 yd',
    low: '$555',
    high: '$750',
    bestFor: 'New construction, major demolition',
  },
]

const INCLUDED_CARDS = [
  {
    icon: Truck,
    title: 'Delivery & Pickup',
    detail:
      "The quoted price covers both drop-off and pickup by a roll-off truck. Most haulers offer next-day delivery, and you schedule pickup when you're done loading.",
  },
  {
    icon: Calendar,
    title: 'Rental Period (7–14 Days)',
    detail:
      'Standard rentals include 7 to 14 days on-site. Most residential projects wrap up within a week. Extensions cost $5–$15 per additional day.',
  },
  {
    icon: Scale,
    title: 'Weight Allowance (1–4 Tons)',
    detail:
      'Each rental includes a base tonnage allowance — typically 1–2 tons for small containers and 2–4 tons for large ones. Going over triggers per-ton overage charges.',
  },
  {
    icon: Recycle,
    title: 'Landfill Disposal',
    detail:
      "The hauler handles all tipping fees and landfill disposal. You don't need to arrange separate disposal — it's bundled into the quoted price.",
  },
]

const HIDDEN_FEES = [
  {
    fee: 'Overage Weight',
    detail: '$60–$100 per ton over your included allowance. The most common surprise charge.',
  },
  {
    fee: 'Extra Days',
    detail: '$5–$15 per day if you keep the dumpster beyond the rental period. Adds up fast.',
  },
  {
    fee: 'Prohibited Item Removal',
    detail: '$50–$150 if banned materials (tires, paint, batteries, etc.) are found in the bin.',
  },
  {
    fee: 'Fuel / Environmental Surcharge',
    detail: 'Many companies add a flat fee or percentage surcharge at checkout. Ask upfront.',
  },
  {
    fee: 'Street Permit',
    detail: '$20–$100 if the dumpster sits on a public road. Placing it in your driveway avoids this.',
  },
]

const CITY_TYPE_COSTS = [
  {
    type: 'Rural',
    range: '$200–$400',
    description:
      'Lower landfill tipping fees and less competition drive costs down. Rural markets often have fewer haulers, so call ahead to confirm availability.',
    highlight: false,
  },
  {
    type: 'Suburban',
    range: '$300–$500',
    description:
      'The most common price range. Suburban markets have strong competition among local haulers, making it easy to get multiple quotes and negotiate.',
    highlight: true,
  },
  {
    type: 'Urban',
    range: '$400–$750+',
    description:
      'Dense cities have higher landfill costs, stricter permitting, and tight delivery logistics. Street permits and fuel surcharges are most common here.',
    highlight: false,
  },
]

const SAVINGS_TIPS = [
  'Get quotes from at least 3 local companies — prices for the same container often vary by 20–30% in the same market.',
  'Book mid-week (Tuesday–Thursday) when haulers have more availability and are more likely to negotiate.',
  'Use your driveway instead of the street to skip city permit fees ($20–$100 saved immediately).',
  "Avoid putting heavy materials like concrete, dirt, or asphalt in the bin unless you've confirmed the weight allowance covers it.",
  'Return the dumpster on time — daily extension fees ($5–$15/day) accumulate quickly if your project runs long.',
]

export default function HowMuchDoesDumpsterRentalCostPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs
            crumbs={[
              { label: 'Home', href: '/' },
              { label: 'Pricing Guide', href: '/dumpster-rental-cost' },
              { label: 'How Much Does Dumpster Rental Cost?' },
            ]}
          />
          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900">
            How Much Does Dumpster Rental Cost? (2026)
          </h1>
          <p className="mt-3 max-w-3xl text-gray-600 leading-relaxed">
            The short answer: most dumpster rentals cost between{' '}
            <strong className="text-gray-900">$250 and $750</strong>, with the national average
            around <strong className="text-gray-900">$350–$450</strong> for a standard 20-yard
            container. Your actual price depends on the size you rent, where you live, how long you
            keep it, and how much it weighs when it's picked up. This guide breaks down exact prices
            by container size, city type, and project — plus the hidden fees most renters don't see
            coming.
          </p>
          <div className="mt-6">
            <Link
              href="/dumpster-rental-near-me"
              className="inline-flex items-center gap-2 rounded-xl bg-green-700 px-7 py-3.5 font-bold text-white hover:bg-green-800 transition"
            >
              Get Local Prices Near Me <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-14">

        {/* Price by Size Table */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Dumpster Rental Cost by Size
          </h2>
          <p className="text-gray-600 mb-5 max-w-2xl">
            Size is the single biggest factor in what you'll pay. Here are the national average price
            ranges for every standard roll-off container size, based on typical market rates in 2026.
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-5 py-3.5 font-semibold text-gray-700">Size</th>
                  <th className="text-left px-5 py-3.5 font-semibold text-gray-700">Avg. Low</th>
                  <th className="text-left px-5 py-3.5 font-semibold text-gray-700">Avg. High</th>
                  <th className="text-left px-5 py-3.5 font-semibold text-gray-700">Best For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {PRICE_TABLE.map((row) => (
                  <tr key={row.size} className="hover:bg-gray-50 transition-colors">
                    <td className="px-5 py-3.5 font-bold text-gray-900">{row.size}</td>
                    <td className="px-5 py-3.5 font-semibold text-green-700">{row.low}</td>
                    <td className="px-5 py-3.5 font-semibold text-green-700">{row.high}</td>
                    <td className="px-5 py-3.5 text-gray-600">{row.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-gray-400">
            Prices are national averages for a standard 7–14 day rental including delivery, pickup, and
            base tonnage. See the{' '}
            <Link href="/dumpster-rental-cost" className="text-green-700 hover:underline">
              full pricing guide
            </Link>{' '}
            for city-by-city breakdowns. Not sure what size you need?{' '}
            <Link href="/dumpster-sizes" className="text-green-700 hover:underline">
              Browse the dumpster size guide.
            </Link>
          </p>
        </section>

        {/* Pricing Breakdown Infographic */}
        <section>
          <PricingBreakdownInfographic />
        </section>

        {/* What's Included */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">What&apos;s Included in the Price?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl">
            A standard dumpster rental quote bundles four core services into one flat fee. Understanding
            what&apos;s covered helps you spot when a company is leaving things out of their headline price.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {INCLUDED_CARDS.map(({ icon: Icon, title, detail }) => (
              <div
                key={title}
                className="flex flex-col gap-3 rounded-xl border border-gray-200 bg-white p-5 hover:border-green-200 hover:shadow-sm transition-all"
              >
                <div className="h-10 w-10 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                  <Icon className="h-5 w-5 text-green-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Hidden Fees */}
        <section className="rounded-xl border border-amber-200 bg-amber-50 p-7">
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="h-6 w-6 text-amber-600 shrink-0" />
            <h2 className="text-2xl font-bold text-gray-900">Hidden Fees to Watch Out For</h2>
          </div>
          <p className="text-gray-600 mb-6 max-w-2xl">
            The base rental price rarely tells the whole story. These five charges catch renters off
            guard most often — ask about every one of them before signing.
          </p>
          <div className="space-y-3">
            {HIDDEN_FEES.map(({ fee, detail }) => (
              <div
                key={fee}
                className="flex gap-4 rounded-xl border border-amber-100 bg-white p-4"
              >
                <div className="h-2 w-2 rounded-full bg-amber-500 shrink-0 mt-2" />
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{fee}</p>
                  <p className="text-sm text-gray-600 leading-relaxed mt-0.5">{detail}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm text-gray-600">
            Want the full breakdown on saving money?{' '}
            <Link href="/cheap-dumpster-rental" className="text-green-700 font-medium hover:underline">
              See our cheap dumpster rental guide
            </Link>{' '}
            for more strategies.
          </p>
        </section>

        {/* Cost by City Type */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Dumpster Rental Cost by City Type</h2>
          <p className="text-gray-600 mb-6 max-w-2xl">
            Where you live has a major impact on what you&apos;ll pay. Landfill tipping fees, fuel costs,
            permitting requirements, and local competition all vary by market type.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {CITY_TYPE_COSTS.map(({ type, range, description, highlight }) => (
              <div
                key={type}
                className={`rounded-xl border p-6 ${
                  highlight
                    ? 'border-green-300 bg-green-50'
                    : 'border-gray-200 bg-white'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-gray-900 text-lg">{type}</h3>
                  <span
                    className={`text-base font-extrabold ${
                      highlight ? 'text-green-700' : 'text-gray-800'
                    }`}
                  >
                    {range}
                  </span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
                {highlight && (
                  <span className="inline-block mt-3 text-xs font-semibold text-green-700 bg-green-100 rounded-full px-3 py-1">
                    Most common market
                  </span>
                )}
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-gray-600 max-w-2xl">
            Looking for prices specific to your city?{' '}
            <Link href="/dumpster-rental-near-me" className="text-green-700 font-medium hover:underline">
              Search dumpster rental near me
            </Link>{' '}
            to find local companies and compare quotes in your area.
          </p>
        </section>

        {/* How to Get the Best Price */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">How to Get the Best Price</h2>
          <p className="text-gray-600 mb-6 max-w-2xl">
            A few simple habits can cut your dumpster rental cost by $50–$150 without any sacrifice
            in service quality. Here are the five that make the biggest difference.
          </p>
          <div className="space-y-3">
            {SAVINGS_TIPS.map((tip, i) => (
              <div
                key={i}
                className="flex gap-4 rounded-xl border border-gray-200 bg-white p-4 hover:border-green-200 transition-colors"
              >
                <CheckCircle className="h-5 w-5 text-green-700 shrink-0 mt-0.5" />
                <p className="text-sm text-gray-700 leading-relaxed">{tip}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-gray-600">
            For a deeper dive, see our guides on{' '}
            <Link href="/cheap-dumpster-rental" className="text-green-700 font-medium hover:underline">
              cheap dumpster rental
            </Link>
            ,{' '}
            <Link href="/small-dumpster-rental" className="text-green-700 font-medium hover:underline">
              small dumpster rental
            </Link>
            , and{' '}
            <Link href="/large-dumpster-rental" className="text-green-700 font-medium hover:underline">
              large dumpster rental
            </Link>
            .
          </p>
        </section>

        {/* What Fits Infographic */}
        <section>
          <WhatFitsInfographic />
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-5">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqSchema.mainEntity.map((faq) => (
              <div key={faq.name} className="rounded-xl border border-gray-200 bg-white p-6">
                <h3 className="font-semibold text-gray-900 mb-2 text-base">{faq.name}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-xl border border-green-200 bg-green-50 p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Ready to Find Prices in Your Area?
          </h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            National averages are a starting point, but your actual cost depends on local haulers.
            Compare quotes from companies near you to get an accurate number — most markets have
            same-day or next-day availability.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/dumpster-rental-near-me"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-700 px-7 py-3.5 font-bold text-white hover:bg-green-800 transition"
            >
              Find Local Dumpster Rental <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/dumpster-rental-cost"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-green-300 bg-white px-7 py-3.5 font-bold text-green-700 hover:bg-green-50 transition"
            >
              Full Pricing Guide <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            Not sure what size to order?{' '}
            <Link href="/dumpster-sizes" className="text-green-700 hover:underline font-medium">
              Browse the dumpster size guide
            </Link>{' '}
            to find the right container for your project.
          </p>
        </section>

      </div>
    </>
  )
}
