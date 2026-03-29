import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle, AlertTriangle, DollarSign, MapPin } from 'lucide-react'
import Breadcrumbs from '@/components/Breadcrumbs'
import AuthorByline from '@/components/AuthorByline'

export const metadata: Metadata = {
  title: 'Cheapest Dumpster Rental Near Me — Compare Prices (2026)',
  description:
    'Find the cheapest dumpster rental near you. Compare prices from local companies starting at $200. Avoid hidden fees and get the lowest rate on 10–40 yard roll-offs.',
  alternates: { canonical: '/cheapest-dumpster-rental-near-me' },
  openGraph: {
    title: 'Cheapest Dumpster Rental Near Me — Compare Prices (2026)',
    description:
      'Compare prices from local dumpster companies starting at $200. Get the lowest rate on 10–40 yard roll-offs near you.',
  },
}

const PRICE_TABLE = [
  {
    size: '10 yd',
    range: '$200–$320',
    low: 200,
    high: 320,
    weightLimit: '2–4 tons',
    bestFor: 'Bathroom remodel, small garage cleanout, single-room renovation',
    budgetTip: 'The single cheapest option — perfect for small jobs under 2 cubic yards per day.',
  },
  {
    size: '15 yd',
    range: '$240–$400',
    low: 240,
    high: 400,
    weightLimit: '2–5 tons',
    bestFor: 'Kitchen gut, flooring removal, basement junk haul',
    budgetTip: 'Step up from a 10-yard when debris exceeds 50–60 garbage bags.',
  },
  {
    size: '20 yd',
    range: '$285–$480',
    low: 285,
    high: 480,
    weightLimit: '3–6 tons',
    bestFor: 'Whole-home cleanout, roof tear-off, mid-size remodel',
    budgetTip: 'Most popular — best price-per-cubic-yard for mid-size jobs.',
  },
  {
    size: '30 yd',
    range: '$360–$580',
    low: 360,
    high: 580,
    weightLimit: '4–8 tons',
    bestFor: 'Large renovation, estate cleanout, new construction frame-up',
    budgetTip: 'Renting one 30-yard beats two smaller bins on total cost.',
  },
  {
    size: '40 yd',
    range: '$430–$720',
    low: 430,
    high: 720,
    weightLimit: '5–10 tons',
    bestFor: 'Commercial demolition, large commercial construction',
    budgetTip: 'Lowest cost per cubic yard — only rent this if you will genuinely fill it.',
  },
]

const PRICE_DRIVERS = [
  {
    title: 'Your City\'s Landfill Tipping Fees',
    description:
      'The single biggest variable in dumpster pricing is what local landfills charge per ton — known as the tipping fee. In low-cost markets like rural Ohio or Indiana, tipping fees run $30–$50/ton. In dense coastal metros like Miami, San Francisco, or New York, fees exceed $100/ton. A 20-yard dumpster costs $280 in Columbus, OH and $480 in Miami, FL — that gap is almost entirely landfill fees, not profit.',
  },
  {
    title: 'National Chain vs. Local Independent Company',
    description:
      'National dumpster chains have franchise royalties, call-center overhead, and marketing costs baked into their pricing. A locally-owned company with 3–8 trucks has none of that. Local independents consistently price 15–25% below national chains for identical service. When you search "cheapest dumpster rental near me," dig past the paid ads to find locally-owned operators.',
  },
  {
    title: 'Day of Week and Booking Lead Time',
    description:
      'Dumpster companies fill routes Monday and Friday. Mid-week delivery (Tuesday–Thursday) means trucks are easier to schedule and some operators discount to keep vehicles moving. Booking 3–5 days in advance also avoids same-day rush fees of $25–$75. The further out you book, the more leverage you have to ask for a lower rate.',
  },
  {
    title: 'Container Size vs. Your Actual Debris Volume',
    description:
      'Renting too small forces a second pickup — often costing as much as a full new rental. Renting too large means paying for unused capacity. Right-sizing your bin on the first booking is the most reliable way to minimize total cost. A 10-yard bin is cheapest in absolute terms, but a 20-yard bin may be cheapest for your actual job if it avoids a second haul.',
  },
]

const HOW_TO_FIND = [
  {
    step: 'Search for local companies, not just national names',
    detail:
      'Type "[your city] dumpster rental" into Google and scroll past the top 2–3 sponsored results. Local companies often rank lower but price significantly cheaper. Check Google Maps reviews to verify reputation.',
  },
  {
    step: 'Call at least 3 companies and ask for an all-in total',
    detail:
      'The advertised price rarely includes fuel surcharges, environmental fees, and taxes. Ask each company: "What is the total I will pay, including all fees, for a [size]-yard bin for [X] days?" Compare apples to apples.',
  },
  {
    step: 'Book mid-week to unlock better rates',
    detail:
      'If your schedule is flexible, ask for Tuesday–Thursday delivery. Many local operators will knock $15–$30 off just to fill an open slot in their routing schedule.',
  },
  {
    step: 'Ask about same-week availability',
    detail:
      'Cancellations happen. Call on Monday and ask if they have any open slots this week at a discount. Operators hate sending trucks out less than full — a quick call can save you $40–$80.',
  },
  {
    step: 'Negotiate multi-day rate for extended rentals',
    detail:
      'If you need the dumpster for 3+ weeks, tell companies upfront and ask for a flat extended rate. Per-day overage fees ($5–$15/day) are negotiable before booking — not after you\'ve already signed.',
  },
]

const WHATS_INCLUDED = [
  {
    item: 'Delivery to your address',
    detail:
      'The company drops the container at your driveway, job site, or designated spot. Confirm the delivery window (morning or afternoon) when booking.',
  },
  {
    item: '7–14 day rental period',
    detail:
      'Budget rentals often include only 7 days — not 14. Confirm the exact term. Some very cheap options include only 5 days before daily fees kick in.',
  },
  {
    item: 'Included weight allowance (1–3 tons)',
    detail:
      'A tonnage limit is bundled into the base price. Overages trigger $60–$100/ton charges. Ask exactly how many tons are included — not assumed.',
  },
  {
    item: 'Pickup and haul-away',
    detail:
      'When your project is done (or your period expires), the company retrieves the container and hauls everything to a licensed landfill or transfer station.',
  },
  {
    item: 'Disposal/landfill fees',
    detail:
      'Landfill tipping fees are factored into your quote — you do not pay the landfill separately. This cost component is why prices vary so much from city to city.',
  },
]

const HIDDEN_FEES = [
  {
    fee: 'Weight overages',
    cost: '$60–$100/ton',
    how: 'The single most common source of surprise charges. Know your debris weight, confirm your included tonnage, and never assume heavy materials (concrete, brick, soil) are covered.',
  },
  {
    fee: 'Prohibited items',
    cost: '$25–$100/item',
    how: 'Mattresses, tires, refrigerators, paint, and electronics are often refused or charged per item. Dispose of these separately at a local hazmat drop-off or transfer station.',
  },
  {
    fee: 'Extended rental overage',
    cost: '$5–$15/day',
    how: 'Going past your included rental window racks up daily charges. If you might go long, negotiate a flat extended rate before booking.',
  },
  {
    fee: 'Fuel/environmental surcharge',
    cost: '$10–$45',
    how: 'Some companies add this on top of the quoted price. The only way to know is to ask: "Is your quote all-in, or are there surcharges on top?"',
  },
  {
    fee: 'Street placement permit',
    cost: '$20–$100',
    how: 'If the dumpster goes on a public street rather than your driveway, your city may require a permit. Ask the company to clarify before booking.',
  },
  {
    fee: 'Same-day or rush delivery',
    cost: '$25–$75',
    how: 'Booking less than 24 hours ahead usually triggers a rush premium. Plan 3–5 days out to avoid this entirely.',
  },
]

const POPULAR_CITIES = [
  { name: 'Houston, TX', state: 'texas', city: 'houston' },
  { name: 'Phoenix, AZ', state: 'arizona', city: 'phoenix' },
  { name: 'Chicago, IL', state: 'illinois', city: 'chicago' },
  { name: 'Dallas, TX', state: 'texas', city: 'dallas' },
  { name: 'Atlanta, GA', state: 'georgia', city: 'atlanta' },
  { name: 'Miami, FL', state: 'florida', city: 'miami' },
  { name: 'Denver, CO', state: 'colorado', city: 'denver' },
  { name: 'Charlotte, NC', state: 'north-carolina', city: 'charlotte' },
  { name: 'Columbus, OH', state: 'ohio', city: 'columbus' },
  { name: 'Nashville, TN', state: 'tennessee', city: 'nashville' },
  { name: 'Philadelphia, PA', state: 'pennsylvania', city: 'philadelphia' },
  { name: 'Tampa, FL', state: 'florida', city: 'tampa' },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the cheapest dumpster rental near me?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The cheapest dumpster rental near you is typically a 10-yard bin from a locally-owned company, starting at $200–$250 in lower-cost markets. In high-cost metro areas like Miami or San Francisco, budget 10-yard rentals run $300–$400. To find the cheapest option in your area, search for local independent companies (not just national chains), get at least 3 all-in quotes, and book mid-week if your schedule is flexible.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I find cheap dumpster rental in my area?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Search "[your city] dumpster rental" and look past the top sponsored results — local companies often rank below ads but price 15–25% lower than national chains. Call at least 3 companies and ask for an all-in total price, including weight allowance, fuel surcharge, and taxes. Booking Tuesday–Thursday instead of Monday or Friday sometimes unlocks better availability and negotiating room.',
      },
    },
    {
      '@type': 'Question',
      name: 'What size is the cheapest dumpster rental?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A 10-yard dumpster is the cheapest in absolute terms, starting around $200 from local companies. However, the cheapest option for your specific job depends on how much debris you have. Renting a bin that\'s too small forces a second pickup — often costing $200–$300 more. A 20-yard bin is the cheapest per cubic yard for most mid-size projects and avoids double-trip costs.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why do dumpster rental prices vary so much by city?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The biggest driver is local landfill tipping fees — what the landfill charges per ton of waste. These fees vary dramatically: $30–$50/ton in rural markets and $80–$120/ton in dense coastal cities. Fuel costs, local competition, and whether national chains dominate the market also affect pricing. That\'s why a 20-yard dumpster costs $280 in Columbus, OH but $480 in Miami, FL.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are cheap dumpster rentals reliable?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — a low price from a local independent company does not mean poor service. Local operators often beat national chain pricing by 15–25% simply because they have lower overhead, not because they cut corners. Before booking any budget rental, check Google reviews (aim for 4.0+ stars with at least 20 reviews), confirm they are licensed and insured, and ask for a written all-in quote to avoid hidden fees.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Cheapest Dumpster Rental Near Me — Compare Prices (2026)',
  description:
    'Find the cheapest dumpster rental near you. Compare prices from local companies starting at $200. Avoid hidden fees and get the lowest rate.',
  datePublished: '2026-03-29',
  dateModified: '2026-03-29',
  author: { '@type': 'Organization', name: 'DumpsterListing', url: 'https://dumpsterlisting.com' },
  publisher: { '@type': 'Organization', name: 'DumpsterListing', url: 'https://dumpsterlisting.com' },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://dumpsterlisting.com/cheapest-dumpster-rental-near-me',
  },
}

export default function CheapestDumpsterRentalNearMePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs
            crumbs={[
              { label: 'Home', href: '/' },
              { label: 'Dumpster Rental', href: '/dumpster-rental' },
              { label: 'Cheapest Dumpster Rental Near Me' },
            ]}
          />
          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900">
            Cheapest Dumpster Rental Near Me
          </h1>
          <p className="mt-3 max-w-3xl text-gray-600 leading-relaxed">
            The cheapest dumpster rental near you starts at <strong>$200</strong> for a 10-yard bin from a
            locally-owned company. Prices range up to $720 for a 40-yard container. This guide shows you
            what actually determines price in your area, real budget figures by size, and exactly how to
            find the lowest rate — without getting burned by hidden fees.
          </p>
          <AuthorByline updatedDate="March 2026" readTimeMin={9} />
          <div className="mt-6">
            <Link
              href="/dumpster-rental"
              className="inline-flex items-center gap-2 rounded-lg bg-green-700 px-6 py-3 font-bold text-white hover:bg-green-800 transition"
            >
              Find Cheapest Dumpsters Near Me
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
          <div className="xl:col-span-2 space-y-12">

            {/* Section 1: What Determines Cheapest Price */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                What Determines the Cheapest Dumpster Price Near You?
              </h2>
              <p className="text-gray-600 mb-5 leading-relaxed">
                The price you pay is not random. Four factors control what the cheapest rental in your city
                actually costs — and understanding them helps you get the lowest number possible.
              </p>
              <div className="space-y-4">
                {PRICE_DRIVERS.map((driver, i) => (
                  <div
                    key={driver.title}
                    className="flex gap-4 rounded-xl border border-gray-200 bg-white p-5"
                  >
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-100 text-green-700 font-bold text-sm flex items-center justify-center">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{driver.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{driver.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 2: Price Comparison Table */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Cheapest Dumpster Rental Prices by Size (2026)
              </h2>
              <p className="text-gray-600 mb-5 leading-relaxed">
                These budget-range prices reflect what locally-owned companies charge in mid-cost U.S.
                markets. Dense coastal metros run 20–35% higher; rural and Midwest markets run 10–20%
                lower. All prices include delivery, a standard 7–14 day rental, and pickup.
              </p>
              <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="text-left px-4 py-3 font-semibold text-gray-700">Size</th>
                      <th className="text-left px-4 py-3 font-semibold text-gray-700">Budget Price Range</th>
                      <th className="text-left px-4 py-3 font-semibold text-gray-700">Weight Limit</th>
                      <th className="text-left px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">
                        Best For
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {PRICE_TABLE.map((row) => (
                      <tr key={row.size} className="hover:bg-gray-50 transition-colors">
                        <td className="px-4 py-3">
                          <Link
                            href={`/dumpster-sizes/${row.size.replace(' yd', '-yard')}`}
                            className="font-bold text-green-700 hover:underline"
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
                * Budget-range estimates from local independent companies. Includes delivery, 7–14 day
                rental, and standard weight allowance. Prices vary by city.{' '}
                <Link href="/dumpster-rental-cost" className="text-green-700 hover:underline">
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
                      <h3 className="font-bold text-gray-900">{row.size} Dumpster — Budget Pick</h3>
                      <span className="text-base font-extrabold text-green-700">{row.range}</span>
                    </div>
                    <div className="px-5 py-3 text-sm text-gray-600">
                      <p className="mb-1">
                        <span className="font-medium text-gray-800">Best for:</span> {row.bestFor}
                      </p>
                      <p>
                        <span className="font-medium text-gray-800">Budget tip:</span> {row.budgetTip}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3: How to Find the Cheapest Company Near You */}
            <section className="rounded-xl border border-green-200 bg-green-50 p-6">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="h-5 w-5 text-green-700" />
                <h2 className="text-2xl font-bold text-gray-900">
                  How to Find the Cheapest Company Near You
                </h2>
              </div>
              <p className="text-gray-600 mb-5 text-sm leading-relaxed">
                These five steps consistently produce the lowest price — and they take less than 30 minutes
                to execute before you book.
              </p>
              <ol className="space-y-5">
                {HOW_TO_FIND.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <div className="flex-shrink-0 h-7 w-7 rounded-full bg-green-700 text-white font-bold text-xs flex items-center justify-center">
                      {i + 1}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{item.step}</p>
                      <p className="text-sm text-gray-600 mt-0.5 leading-relaxed">{item.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            {/* Section 4: What's Included Even in Cheap Rentals */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                What&apos;s Included Even in the Cheapest Dumpster Rentals
              </h2>
              <p className="text-gray-600 mb-5 leading-relaxed">
                A low price does not mean a stripped-down service. Legitimate budget rentals from local
                companies still include every essential. Here is what you should always receive — and what
                to verify before booking.
              </p>
              <div className="space-y-3">
                {WHATS_INCLUDED.map((inc) => (
                  <div
                    key={inc.item}
                    className="flex gap-3 rounded-xl border border-gray-200 bg-white p-4"
                  >
                    <CheckCircle className="h-5 w-5 text-green-700 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm">{inc.item}</h3>
                      <p className="text-sm text-gray-600 mt-0.5 leading-relaxed">{inc.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-gray-600 bg-gray-50 rounded-lg p-4 border border-gray-200">
                <strong>Watch out for:</strong> Some unusually cheap rentals include only a 5-day window
                or a 1-ton weight allowance. These can appear cheap and then generate large overage bills.
                Always confirm the rental period and included tonnage upfront. Read the{' '}
                <Link href="/dumpster-rental-cost" className="text-green-700 hover:underline font-medium">
                  full dumpster cost guide
                </Link>{' '}
                to understand exactly what each line item covers.
              </p>
            </section>

            {/* Section 5: Hidden Fees to Avoid */}
            <section className="rounded-xl border border-amber-200 bg-amber-50 p-6">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="h-5 w-5 text-amber-600" />
                <h2 className="text-xl font-bold text-gray-900">
                  Hidden Fees That Wipe Out Your Savings
                </h2>
              </div>
              <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                A $200 advertised price can balloon to $380+ once these charges appear on your invoice.
                Know what to ask about before you book — not after.
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
                  The one question that eliminates surprises:{' '}
                  <span className="font-normal text-gray-600">
                    "What is the total I will pay — including weight allowance, fuel, environmental fees,
                    and taxes — if I stay under [X] tons and return the dumpster within [X] days?"
                  </span>
                </p>
              </div>
            </section>

            {/* Section 6: Popular Cities */}
            <section className="rounded-xl border border-green-200 bg-green-50 p-6">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="h-5 w-5 text-green-700" />
                <h2 className="text-xl font-bold text-gray-900">
                  Find the Cheapest Dumpster Rental In Your City
                </h2>
              </div>
              <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                Prices and available budget options vary widely by location. Browse your city for local
                company listings, price comparisons, and area-specific cost data.
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
                  href="/dumpster-rental"
                  className="flex-1 rounded-lg bg-green-700 px-5 py-3 text-center font-bold text-white hover:bg-green-800 transition"
                >
                  Find Cheapest Prices Near Me
                </Link>
                <Link
                  href="/dumpster-sizes"
                  className="flex-1 rounded-lg border border-green-600 px-5 py-3 text-center font-semibold text-green-700 hover:bg-green-50 transition"
                >
                  Compare Dumpster Sizes
                </Link>
              </div>
            </section>

            {/* Section 7: FAQ */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-5">
                Cheapest Dumpster Rental Near Me — FAQs
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

          </div>

          {/* Sidebar */}
          <aside className="space-y-5">

            {/* Quick CTA */}
            <div className="rounded-xl border border-green-200 bg-green-50 p-6">
              <h3 className="font-bold text-gray-900 text-lg mb-1">Compare Local Prices Now</h3>
              <p className="text-sm text-gray-600 mb-4">
                National averages don&apos;t tell you what local companies in your zip code actually charge.
                Get real quotes from nearby operators to find the true cheapest option.
              </p>
              <Link
                href="/dumpster-rental"
                className="block w-full rounded-lg bg-green-700 py-3 text-center font-bold text-white hover:bg-green-800 transition"
              >
                Find Cheapest Prices
              </Link>
            </div>

            {/* Budget prices quick-reference */}
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <h3 className="font-bold text-gray-900 mb-3">Budget Prices by Size</h3>
              <div className="space-y-2">
                {PRICE_TABLE.map((row) => (
                  <div key={row.size} className="flex items-center justify-between text-sm">
                    <Link
                      href={`/dumpster-sizes/${row.size.replace(' yd', '-yard')}`}
                      className="text-gray-700 hover:text-green-700 transition"
                    >
                      {row.size} dumpster
                    </Link>
                    <span className="font-semibold text-gray-900">{row.range}</span>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-xs text-gray-400">Budget range, local companies, mid-cost markets.</p>
            </div>

            {/* Related links */}
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <h3 className="font-bold text-gray-900 mb-3">Related Guides</h3>
              <div className="space-y-2 text-sm">
                {[
                  { label: 'Cheap Dumpster Rental', href: '/cheap-dumpster-rental' },
                  { label: 'Full Dumpster Rental Cost Guide', href: '/dumpster-rental-cost' },
                  { label: 'Compare Dumpster Sizes', href: '/dumpster-sizes' },
                  { label: 'Dumpster Rental Near Me', href: '/dumpster-rental-near-me' },
                  { label: 'Weight Limit Calculator', href: '/dumpster-weight-limit-calculator' },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center gap-2 text-gray-700 hover:text-green-700 transition group"
                  >
                    <ArrowRight className="h-3.5 w-3.5 text-gray-400 group-hover:text-green-500" />
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

          </aside>
        </div>
      </div>
    </>
  )
}
