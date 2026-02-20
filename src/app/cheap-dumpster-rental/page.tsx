import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle, AlertTriangle, DollarSign } from 'lucide-react'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Cheap Dumpster Rental Near Me — Affordable Prices (2026)',
  description:
    'Find the cheapest dumpster rental near you. Compare affordable options from $200/week for 10-yard bins. See prices by size, 8 money-saving tips, and how to avoid hidden fees.',
  alternates: { canonical: '/cheap-dumpster-rental' },
  openGraph: {
    title: 'Cheap Dumpster Rental Near Me — Affordable Prices (2026)',
    description:
      'Compare affordable dumpster rental prices starting at $200. Real tips to get the cheapest rate near you without sacrificing service.',
  },
}

const PRICE_TABLE = [
  {
    size: '10 yd',
    range: '$200–$350',
    low: 200,
    high: 350,
    weightLimit: '2–4 tons',
    bestFor: 'Bathroom remodel, garage cleanout, small junk removal',
    cheapTip: 'Most affordable option — ideal for a single room or small project.',
  },
  {
    size: '15 yd',
    range: '$250–$425',
    low: 250,
    high: 425,
    weightLimit: '2–5 tons',
    bestFor: 'Kitchen renovation, flooring removal, medium cleanout',
    cheapTip: 'Middle ground — step up from a 10-yard if you have more debris.',
  },
  {
    size: '20 yd',
    range: '$300–$500',
    low: 300,
    high: 500,
    weightLimit: '3–6 tons',
    bestFor: 'Whole-home cleanout, roofing tear-off, larger renovation',
    cheapTip: 'Most popular size — cheapest per cubic yard for mid-size projects.',
  },
  {
    size: '30 yd',
    range: '$375–$600',
    low: 375,
    high: 600,
    weightLimit: '4–8 tons',
    bestFor: 'Large remodel, new construction, estate cleanout',
    cheapTip: 'Renting one 30-yard is cheaper than two 15-yard rentals.',
  },
  {
    size: '40 yd',
    range: '$450–$750',
    low: 450,
    high: 750,
    weightLimit: '5–10 tons',
    bestFor: 'Commercial demolition, large construction projects',
    cheapTip: 'Best value per yard for commercial or large-scale jobs.',
  },
]

const CHEAP_FACTORS = [
  {
    title: 'Right-Sizing Your Container',
    description:
      'The fastest way to overpay is renting the wrong size. Too small and you need a second pickup — often another $200–$350. Too large and you pay for unused space. Estimate your debris volume in cubic yards and match it to the smallest bin that fits comfortably, with about 20% buffer room.',
  },
  {
    title: 'Flexible Scheduling',
    description:
      'Dumpster companies fill their schedules Monday and Friday — demand peaks at the start and end of the work week. If you can schedule delivery Tuesday through Thursday, you may unlock better availability and sometimes lower rates, especially with smaller local operators who are eager to fill gaps.',
  },
  {
    title: 'Skipping Unnecessary Add-Ons',
    description:
      'Same-day delivery ($25–$75 premium), mattress disposal, tire removal, and extended rentals all add cost. Know exactly what you need before you call. Dispose of prohibited items separately at a local transfer station to keep your dumpster load clean and avoid per-item fees.',
  },
  {
    title: 'Local Companies vs. National Chains',
    description:
      'National chains have higher overhead — franchises, call centers, and marketing costs built into their rates. A locally-owned company with 2–5 trucks typically beats national pricing by 15–25% for identical service. They also tend to be more flexible on rate negotiation, especially for multi-day or repeat rentals.',
  },
]

const TIPS = [
  {
    tip: 'Book Tuesday through Thursday',
    detail:
      'Monday and Friday are the busiest days. Scheduling mid-week gives companies more flexibility, and some will offer a small discount just to keep trucks rolling.',
  },
  {
    tip: 'Get at least 3 quotes before committing',
    detail:
      'Prices for identical 20-yard rentals in the same city routinely vary by $80–$150. A 10-minute comparison call can save you more than any coupon code.',
  },
  {
    tip: 'Go local, not national',
    detail:
      'Local independent companies typically price 15–25% lower than national chains. Search "[your city] dumpster rental" specifically — not just the sponsored results at the top.',
  },
  {
    tip: 'Ask about same-week fill-in deals',
    detail:
      'If a company has an opening in their schedule for the week, they may offer it at a reduced rate rather than letting a truck sit idle. Calling directly and asking pays off.',
  },
  {
    tip: 'Negotiate extended rental discounts',
    detail:
      'Standard rentals include 7–14 days. If you need the dumpster for 3+ weeks, ask for a flat extended rate upfront instead of day-by-day overage charges ($5–$15/day).',
  },
  {
    tip: 'Avoid heavy materials in standard bins',
    detail:
      'Concrete, brick, asphalt, and soil trigger weight overage fees of $60–$100 per extra ton. Keep these out of a standard bin or book a specialty container with higher weight allowances.',
  },
  {
    tip: 'Ask for an all-in price — not a base rate',
    detail:
      'The advertised price often excludes fuel surcharges, environmental fees, and taxes. Always ask: "What is the total I will pay, including everything?" Get it in writing.',
  },
  {
    tip: 'Right-size the bin on your first booking',
    detail:
      'When in doubt, size up once — not down. A second delivery and pickup because the bin filled early costs as much as a size upgrade would have. The cheapest dumpster rental is the one that solves your problem in one trip.',
  },
]

const WHATS_INCLUDED = [
  {
    item: 'Delivery to your address',
    detail:
      'The company drops the dumpster at your driveway or designated spot. Standard delivery windows are usually morning or afternoon of the scheduled date.',
  },
  {
    item: 'Rental period (7–14 days)',
    detail:
      'Most flat-rate rentals include 7 to 14 days. Confirm the exact period when booking — some budget companies include only 5–7 days before charging daily fees.',
  },
  {
    item: 'Weight allowance (1–3 tons)',
    detail:
      'A tonnage limit is bundled into the base price. Exceeding it triggers per-ton overage charges. Ask exactly how many tons are included before you book.',
  },
  {
    item: 'Pickup and haul-away',
    detail:
      'When your rental period ends (or you call for early pickup), the company retrieves the container and hauls debris to a local landfill or transfer station.',
  },
  {
    item: 'Disposal fees',
    detail:
      'The landfill tipping fee is factored into your quote — you do not pay the landfill directly. This is why prices vary so much by city: local tipping fees range from $30–$100+/ton.',
  },
]

const HIDDEN_FEES = [
  {
    fee: 'Weight overages',
    cost: '$60–$100/ton',
    how: 'Exceeding the included tonnage is the most common surprise charge. Confirm the included tons and know your debris weight before loading.',
  },
  {
    fee: 'Prohibited item disposal',
    cost: '$25–$75 per item',
    how: 'Mattresses, tires, appliances, electronics, and paint are often refused or charged separately. Dispose of these at a local transfer station or hazmat drop-off.',
  },
  {
    fee: 'Extended rental days',
    cost: '$5–$15/day',
    how: "Going past your included rental window racks up daily charges fast. If you know you'll need more time, negotiate a longer term upfront.",
  },
  {
    fee: 'Fuel/environmental surcharge',
    cost: '$10–$40',
    how: 'Some companies add this on top of the quoted price. Always confirm whether the quote is all-inclusive.',
  },
  {
    fee: 'Street permit',
    cost: '$20–$100',
    how: "If the dumpster sits on a public street instead of your driveway, your city may require a permit. The company can often arrange this — ask what it costs before you book.",
  },
  {
    fee: 'Same-day or rush delivery',
    cost: '$25–$75',
    how: 'Booking less than 24 hours out often carries a premium. Plan at least 2–3 days ahead to avoid the rush fee.',
  },
]

const POPULAR_CITIES = [
  { name: 'Houston, TX', state: 'tx', city: 'houston' },
  { name: 'Phoenix, AZ', state: 'az', city: 'phoenix' },
  { name: 'Chicago, IL', state: 'il', city: 'chicago' },
  { name: 'Dallas, TX', state: 'tx', city: 'dallas' },
  { name: 'Atlanta, GA', state: 'ga', city: 'atlanta' },
  { name: 'Miami, FL', state: 'fl', city: 'miami' },
  { name: 'Denver, CO', state: 'co', city: 'denver' },
  { name: 'Charlotte, NC', state: 'nc', city: 'charlotte' },
  { name: 'Columbus, OH', state: 'oh', city: 'columbus' },
  { name: 'Las Vegas, NV', state: 'nv', city: 'las-vegas' },
  { name: 'Nashville, TN', state: 'tn', city: 'nashville' },
  { name: 'Sacramento, CA', state: 'ca', city: 'sacramento' },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the cheapest dumpster rental available?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The cheapest dumpster rentals are typically 10-yard bins from local independent companies, starting at $200–$250 for a 7-day rental in lower-cost markets. In competitive metro areas, budget 10-yard rentals run $250–$350. To get the lowest price, compare at least 3 local quotes, book mid-week, and avoid premium add-ons.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I find affordable dumpster rental near me?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Search for locally-owned dumpster companies in your area — not just national chains. Call at least 3 companies and ask for their all-in price (including weight, fuel, taxes). Mid-week bookings (Tuesday–Thursday) often have better rates. Ask if they have any same-week openings at a discount.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is typically included in a cheap dumpster rental?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Even budget dumpster rentals include delivery, a rental period of 7–14 days, a weight allowance (usually 1–3 tons), pickup, and haul-away to a local landfill. The price varies mainly by location because local landfill tipping fees differ significantly by city. Watch out for fuel surcharges and weight overage fees that may not be in the base quote.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is a cheap dumpster rental worth it, or will I get hidden fees?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "A low advertised price can be genuine or a bait for hidden fees. Always ask for an all-in quote that includes weight allowance, fuel surcharge, environmental fees, and taxes. Get the total in writing before booking. Reputable local companies that give you a flat all-inclusive price are typically both affordable and transparent — it's the ones advertising unusually low base rates without disclosing tonnage limits to watch out for.",
      },
    },
  ],
}

export default function CheapDumpsterRentalPage() {
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
              { label: 'Dumpster Rental', href: '/dumpster-rental-near-me' },
              { label: 'Cheap Dumpster Rental' },
            ]}
          />
          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900">
            Cheap Dumpster Rental Near You — Affordable Options for Every Budget
          </h1>
          <p className="mt-3 max-w-3xl text-gray-600 leading-relaxed">
            Affordable dumpster rental starts at <strong>$200–$250/week</strong> for a 10-yard bin from a
            local company. Prices run up to $750 for large 40-yard containers. This guide shows you exactly
            what drives cost down, real prices by size, and eight proven tactics to lock in the cheapest rate
            near you — without getting blindsided by hidden fees.
          </p>
          <div className="mt-6">
            <Link
              href="/dumpster-rental-near-me"
              className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-6 py-3 font-bold text-white hover:bg-green-700 transition"
            >
              Find Cheap Dumpsters Near Me
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
          <div className="xl:col-span-2 space-y-12">

            {/* Section 1: What Makes a Dumpster Rental Cheap */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                What Makes a Dumpster Rental Cheap?
              </h2>
              <p className="text-gray-600 mb-5 leading-relaxed">
                The advertised price is only part of the story. Four factors separate a genuinely cheap
                dumpster rental from one that looks cheap but ends up costing more than expected.
              </p>
              <div className="space-y-4">
                {CHEAP_FACTORS.map((factor, i) => (
                  <div
                    key={factor.title}
                    className="flex gap-4 rounded-xl border border-gray-200 bg-white p-5"
                  >
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-100 text-green-700 font-bold text-sm flex items-center justify-center">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{factor.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{factor.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 2: Price Table */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Cheap Dumpster Rental Prices by Size (2026)
              </h2>
              <p className="text-gray-600 mb-5 leading-relaxed">
                These are realistic budget-range prices from local independent companies in mid-cost markets.
                Dense metros (Los Angeles, New York, Miami) run 20–35% higher due to landfill fees. Rural
                markets can run 10–20% lower. Prices include delivery, standard weight, and pickup.
              </p>
              <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="text-left px-4 py-3 font-semibold text-gray-700">Size</th>
                      <th className="text-left px-4 py-3 font-semibold text-gray-700">Cheap Price Range</th>
                      <th className="text-left px-4 py-3 font-semibold text-gray-700">Weight Limit</th>
                      <th className="text-left px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">Best For</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {PRICE_TABLE.map((row) => (
                      <tr key={row.size} className="hover:bg-gray-50 transition-colors">
                        <td className="px-4 py-3">
                          <Link
                            href={`/dumpster-sizes/${row.size.replace(' yd', '-yard')}`}
                            className="font-bold text-green-600 hover:underline"
                          >
                            {row.size}
                          </Link>
                        </td>
                        <td className="px-4 py-3 font-semibold text-gray-900">{row.range}</td>
                        <td className="px-4 py-3 text-gray-600">{row.weightLimit}</td>
                        <td className="px-4 py-3 text-gray-600 hidden md:table-cell">{row.bestFor}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-2 text-xs text-gray-400">
                * Budget-range estimates from local companies. Includes delivery, 7–14 day rental, and standard weight allowance.
                Prices vary by city. Get local quotes for accurate numbers.{' '}
                <Link href="/dumpster-rental-cost" className="text-green-600 hover:underline">
                  See full pricing guide.
                </Link>
              </p>

              {/* Size detail cards */}
              <div className="mt-6 space-y-3">
                {PRICE_TABLE.map((row) => (
                  <div
                    key={row.size}
                    className="rounded-xl border border-gray-200 bg-white overflow-hidden"
                  >
                    <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100 bg-gray-50">
                      <h3 className="font-bold text-gray-900">
                        {row.size} Dumpster — Budget Pick
                      </h3>
                      <span className="text-base font-extrabold text-green-700">{row.range}</span>
                    </div>
                    <div className="px-5 py-3 text-sm text-gray-600">
                      <p className="mb-1">
                        <span className="font-medium text-gray-800">Best for:</span> {row.bestFor}
                      </p>
                      <p>
                        <span className="font-medium text-gray-800">Money tip:</span> {row.cheapTip}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3: 8 Tips */}
            <section className="rounded-xl border border-green-200 bg-green-50 p-6">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="h-5 w-5 text-green-600" />
                <h2 className="text-2xl font-bold text-gray-900">
                  8 Tips to Get the Cheapest Dumpster Rental
                </h2>
              </div>
              <p className="text-gray-600 mb-5 text-sm leading-relaxed">
                These are not generic "save money" platitudes — they are specific tactics that actually move
                the needle on your final bill.
              </p>
              <ol className="space-y-4">
                {TIPS.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <div className="flex-shrink-0 h-7 w-7 rounded-full bg-green-600 text-white font-bold text-xs flex items-center justify-center">
                      {i + 1}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{item.tip}</p>
                      <p className="text-sm text-gray-600 mt-0.5 leading-relaxed">{item.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            {/* Section 4: What's Included */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                What&apos;s Included in a Cheap Dumpster Rental?
              </h2>
              <p className="text-gray-600 mb-5 leading-relaxed">
                Even budget rentals from local companies include the essential services. Here is what you
                should always get, regardless of price — and what to confirm before you sign.
              </p>
              <div className="space-y-3">
                {WHATS_INCLUDED.map((inc) => (
                  <div
                    key={inc.item}
                    className="flex gap-3 rounded-xl border border-gray-200 bg-white p-4"
                  >
                    <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm">{inc.item}</h3>
                      <p className="text-sm text-gray-600 mt-0.5 leading-relaxed">{inc.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-gray-600 bg-gray-50 rounded-lg p-4 border border-gray-200">
                <strong>Note:</strong> Some budget rentals advertise very low base prices but have short
                rental windows (5 days) or minimal weight allowances (1 ton). Always confirm exactly what
                your rental period and weight limit are before booking. See the{' '}
                <Link href="/dumpster-rental-cost" className="text-green-600 hover:underline font-medium">
                  full dumpster rental cost guide
                </Link>{' '}
                for a breakdown of what each line item means.
              </p>
            </section>

            {/* Section 5: Avoid Hidden Fees */}
            <section className="rounded-xl border border-amber-200 bg-amber-50 p-6">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="h-5 w-5 text-amber-600" />
                <h2 className="text-xl font-bold text-gray-900">
                  Avoid These Hidden Fees on Cheap Rentals
                </h2>
              </div>
              <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                A $199 advertised rate can easily balloon past $400 once these charges appear on your
                invoice. Know what to ask about before you book.
              </p>
              <div className="space-y-4">
                {HIDDEN_FEES.map((fee) => (
                  <div key={fee.fee} className="flex gap-3">
                    <span className="text-amber-600 font-bold shrink-0 text-lg leading-tight">!</span>
                    <div>
                      <div className="flex flex-wrap items-baseline gap-2 mb-0.5">
                        <h3 className="font-semibold text-gray-900 text-sm">{fee.fee}</h3>
                        <span className="text-xs font-bold bg-amber-200 text-amber-800 px-2 py-0.5 rounded-full">
                          {fee.cost}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">{fee.how}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-5 pt-4 border-t border-amber-200">
                <p className="text-sm font-semibold text-gray-800">
                  The one question that protects you:{' '}
                  <span className="font-normal text-gray-600">
                    "What is the total I will pay, including weight, fuel, environmental fees, and taxes —
                    assuming I stay within [X] tons and return the dumpster in [X] days?"
                  </span>
                </p>
              </div>
            </section>

            {/* Section 6: FAQ */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-5">
                Cheap Dumpster Rental FAQs
              </h2>
              <div className="space-y-4">
                {faqSchema.mainEntity.map((faq) => (
                  <div
                    key={faq.name}
                    className="rounded-xl border border-gray-200 bg-white p-5"
                  >
                    <h3 className="font-semibold text-gray-900 mb-2">{faq.name}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{faq.acceptedAnswer.text}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 7: CTA — Find Local Options */}
            <section className="rounded-xl border border-green-200 bg-green-50 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                Find Cheap Dumpster Rental In Your City
              </h2>
              <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                Prices vary significantly by location. The cheapest option near you depends on local
                competition, landfill fees, and which independent operators serve your area. Browse by city
                or get free quotes directly.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-5">
                {POPULAR_CITIES.map((city) => (
                  <Link
                    key={city.city}
                    href={`/dumpster-rental/${city.state}/${city.city}`}
                    className="group flex items-center justify-between rounded-lg border border-green-200 bg-white px-3 py-2.5 text-sm hover:border-green-400 hover:bg-green-100 transition"
                  >
                    <span className="font-medium text-gray-800 group-hover:text-green-700">
                      {city.name}
                    </span>
                    <ArrowRight className="h-3.5 w-3.5 text-gray-300 group-hover:text-green-500 shrink-0" />
                  </Link>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/dumpster-rental-near-me"
                  className="flex-1 rounded-lg bg-green-600 px-5 py-3 text-center font-bold text-white hover:bg-green-700 transition"
                >
                  Get Free Quotes Near Me
                </Link>
                <Link
                  href="/dumpster-sizes"
                  className="flex-1 rounded-lg border border-green-600 px-5 py-3 text-center font-semibold text-green-700 hover:bg-green-50 transition"
                >
                  Compare Dumpster Sizes
                </Link>
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <aside className="space-y-5">

            {/* Quick CTA */}
            <div className="rounded-xl border border-green-200 bg-green-50 p-6">
              <h3 className="font-bold text-gray-900 text-lg mb-1">Find Cheap Local Prices</h3>
              <p className="text-sm text-gray-600 mb-4">
                National averages are a starting point. Compare real quotes from companies serving your zip
                code to find the lowest rate.
              </p>
              <Link
                href="/dumpster-rental-near-me"
                className="block w-full rounded-lg bg-green-600 py-3 text-center font-bold text-white hover:bg-green-700 transition"
              >
                Get Free Quotes
              </Link>
            </div>

            {/* Cheap price quick-reference */}
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <h3 className="font-bold text-gray-900 mb-3">Budget Prices by Size</h3>
              <div className="space-y-2">
                {PRICE_TABLE.map((row) => (
                  <div key={row.size} className="flex items-center justify-between text-sm">
                    <Link
                      href={`/dumpster-sizes/${row.size.replace(' yd', '-yard')}`}
                      className="text-gray-700 hover:text-green-600 transition"
                    >
                      {row.size} dumpster
                    </Link>
                    <span className="font-semibold text-gray-900">{row.range}</span>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-xs text-gray-400">Budget range, local companies.</p>
            </div>

            {/* Money checklist */}
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <h3 className="font-bold text-gray-900 mb-3">Before You Book — Checklist</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {[
                  'Got quotes from 3+ local companies',
                  'Asked for all-in price (no hidden fees)',
                  'Confirmed tonnage allowance',
                  'Confirmed rental period length',
                  'Asked about mid-week availability discount',
                  'Checked if a street permit is needed',
                  'Confirmed prohibited items list',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-0.5 h-4 w-4 rounded border border-gray-300 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Related links */}
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <h3 className="font-bold text-gray-900 mb-3">Related Guides</h3>
              <div className="space-y-2 text-sm">
                <Link
                  href="/dumpster-rental-cost"
                  className="flex items-center gap-2 text-gray-700 hover:text-green-600 transition group"
                >
                  <ArrowRight className="h-3.5 w-3.5 text-gray-400 group-hover:text-green-500" />
                  Full Dumpster Rental Cost Guide
                </Link>
                <Link
                  href="/dumpster-rental-near-me"
                  className="flex items-center gap-2 text-gray-700 hover:text-green-600 transition group"
                >
                  <ArrowRight className="h-3.5 w-3.5 text-gray-400 group-hover:text-green-500" />
                  Dumpster Rental Near Me
                </Link>
                <Link
                  href="/dumpster-sizes"
                  className="flex items-center gap-2 text-gray-700 hover:text-green-600 transition group"
                >
                  <ArrowRight className="h-3.5 w-3.5 text-gray-400 group-hover:text-green-500" />
                  Compare Dumpster Sizes
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </>
  )
}
