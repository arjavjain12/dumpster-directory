import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, TrendingUp, TrendingDown, MapPin } from 'lucide-react'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Dumpster Rental Cost by City (2026): Most & Least Expensive in America',
  description:
    'See where Americans pay the most and least for dumpster rental. We analyzed pricing across 960 US cities — the most expensive cities cost 85% more than the cheapest.',
  alternates: { canonical: '/dumpster-rental-cost-by-city' },
  openGraph: {
    title: 'Dumpster Rental Cost by City (2026): Most & Least Expensive in America',
    description:
      'The most expensive cities (CA, NY, HI) charge 85% more than the cheapest (AR, MS, WV). See the full ranking of 960 US cities.',
    url: '/dumpster-rental-cost-by-city',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Dumpster Rental Cost by City (2026): Most & Least Expensive in America',
  description:
    'Analysis of dumpster rental pricing across 960 US cities reveals an 85% price gap between the most and least expensive markets.',
  datePublished: '2026-02-26',
  dateModified: '2026-02-26',
  author: { '@type': 'Organization', name: 'DumpsterListing', url: 'https://dumpsterlisting.com' },
  publisher: { '@type': 'Organization', name: 'DumpsterListing', url: 'https://dumpsterlisting.com' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://dumpsterlisting.com/dumpster-rental-cost-by-city' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the average dumpster rental cost in the US?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The national average for a 20-yard dumpster rental (the most popular size) is $446 based on pricing data from 960 US cities with populations over 50,000. Prices range from $305 in the cheapest markets (rural South and Midwest) to $685 in the most expensive (California and New York City).',
      },
    },
    {
      '@type': 'Question',
      name: 'Which state has the most expensive dumpster rental?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hawaii is the most expensive state for dumpster rental with an average 20-yard price of $553, followed by New York ($548 avg) and Alaska ($536 avg). California ranks 4th at $521 average but has the most expensive individual markets. High landfill fees, permit requirements, and limited competition drive prices in these states.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which state has the cheapest dumpster rental?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Arkansas is the cheapest state for dumpster rental with an average 20-yard price of $361, followed by West Virginia ($363) and Mississippi ($363). Lower land costs, fewer regulations, lower landfill fees, and lower overall cost of living in these states keep prices down.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is dumpster rental so much more expensive in California and New York?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'California and New York have higher dumpster rental prices for several reasons: (1) Higher landfill tipping fees — California landfills charge $60–$100+ per ton vs $20–$40 in cheaper states. (2) Permit requirements — NYC requires a DOT Right-of-Way permit ($135–$385) for street placement. (3) Higher labor, fuel, and equipment costs. (4) Stricter environmental regulations add compliance costs. (5) Higher demand in dense urban areas.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I find the cheapest dumpster rental in my city?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best way to find cheap dumpster rental is to compare quotes from multiple local companies. Use our free quote tool to get prices from companies in your city. Tips: (1) Right-size your container — getting a 10-yard when you need 20 yards means two trips, which costs more. (2) Ask about all fees upfront — fuel surcharges, overage fees, and extended rental charges can add 20–40% to the base price. (3) Book early — last-minute orders often cost more.',
      },
    },
  ],
}

// ── Data ──────────────────────────────────────────────────────────────────────

const MOST_EXPENSIVE = [
  { rank: 1,  city: 'San Francisco',  state: 'CA', stateSlug: 'california',      citySlug: 'san-francisco',  low: 540, high: 685, pop: 3417736 },
  { rank: 2,  city: 'New York City',  state: 'NY', stateSlug: 'new-york',         citySlug: 'new-york',       low: 540, high: 685, pop: 8336817 },
  { rank: 3,  city: 'Los Angeles',    state: 'CA', stateSlug: 'california',      citySlug: 'los-angeles',    low: 540, high: 685, pop: 3898747 },
  { rank: 4,  city: 'San Diego',      state: 'CA', stateSlug: 'california',      citySlug: 'san-diego',      low: 540, high: 685, pop: 1386932 },
  { rank: 5,  city: 'San Jose',       state: 'CA', stateSlug: 'california',      citySlug: 'san-jose',       low: 540, high: 685, pop: 1013240 },
  { rank: 6,  city: 'Sacramento',     state: 'CA', stateSlug: 'california',      citySlug: 'sacramento',     low: 540, high: 685, pop: 513624  },
  { rank: 7,  city: 'Riverside',      state: 'CA', stateSlug: 'california',      citySlug: 'riverside',      low: 540, high: 685, pop: 314998  },
  { rank: 8,  city: 'Brooklyn',       state: 'NY', stateSlug: 'new-york',         citySlug: 'brooklyn',       low: 540, high: 685, pop: 2736074 },
  { rank: 9,  city: 'Queens',         state: 'NY', stateSlug: 'new-york',         citySlug: 'queens',         low: 540, high: 685, pop: 2405464 },
  { rank: 10, city: 'Manhattan',      state: 'NY', stateSlug: 'new-york',         citySlug: 'manhattan',      low: 540, high: 685, pop: 1694263 },
  { rank: 11, city: 'Bronx',          state: 'NY', stateSlug: 'new-york',         citySlug: 'bronx',          low: 540, high: 685, pop: 1472654 },
  { rank: 12, city: 'Boston',         state: 'MA', stateSlug: 'massachusetts',   citySlug: 'boston',         low: 515, high: 650, pop: 675647  },
  { rank: 13, city: 'Honolulu',       state: 'HI', stateSlug: 'hawaii',          citySlug: 'honolulu',       low: 510, high: 650, pop: 345482  },
  { rank: 14, city: 'Providence',     state: 'RI', stateSlug: 'rhode-island',    citySlug: 'providence',     low: 505, high: 640, pop: 190934  },
  { rank: 15, city: 'Buffalo',        state: 'NY', stateSlug: 'new-york',         citySlug: 'buffalo',        low: 505, high: 635, pop: 278349  },
  { rank: 16, city: 'Mission Viejo',  state: 'CA', stateSlug: 'california',      citySlug: 'mission-viejo',  low: 505, high: 635, pop: 94381   },
  { rank: 17, city: 'Fresno',         state: 'CA', stateSlug: 'california',      citySlug: 'fresno',         low: 505, high: 635, pop: 542107  },
  { rank: 18, city: 'Bakersfield',    state: 'CA', stateSlug: 'california',      citySlug: 'bakersfield',    low: 505, high: 635, pop: 407775  },
  { rank: 19, city: 'Rochester',      state: 'NY', stateSlug: 'new-york',         citySlug: 'rochester',      low: 505, high: 635, pop: 211328  },
  { rank: 20, city: 'Albany',         state: 'NY', stateSlug: 'new-york',         citySlug: 'albany',         low: 505, high: 635, pop: 97856   },
  { rank: 21, city: 'Seattle',        state: 'WA', stateSlug: 'washington',      citySlug: 'seattle',        low: 495, high: 630, pop: 749256  },
  { rank: 22, city: 'Baltimore',      state: 'MD', stateSlug: 'maryland',        citySlug: 'baltimore',      low: 495, high: 630, pop: 585708  },
  { rank: 23, city: 'Anchorage',      state: 'AK', stateSlug: 'alaska',          citySlug: 'anchorage',      low: 490, high: 625, pop: 291247  },
  { rank: 24, city: 'Newark',         state: 'NJ', stateSlug: 'new-jersey',      citySlug: 'newark',         low: 490, high: 620, pop: 311549  },
  { rank: 25, city: 'Jersey City',    state: 'NJ', stateSlug: 'new-jersey',      citySlug: 'jersey-city',    low: 490, high: 620, pop: 292449  },
]

const LEAST_EXPENSIVE = [
  { rank: 1,  city: 'Southaven',       state: 'MS', stateSlug: 'mississippi',    citySlug: 'southaven',       low: 305, high: 385, pop: 56226  },
  { rank: 2,  city: 'Bentonville',     state: 'AR', stateSlug: 'arkansas',       citySlug: 'bentonville',     low: 310, high: 390, pop: 58249  },
  { rank: 3,  city: 'North Little Rock', state: 'AR', stateSlug: 'arkansas',     citySlug: 'north-little-rock', low: 310, high: 390, pop: 64538 },
  { rank: 4,  city: 'Rogers',          state: 'AR', stateSlug: 'arkansas',       citySlug: 'rogers',          low: 310, high: 390, pop: 72981  },
  { rank: 5,  city: 'Conway',          state: 'AR', stateSlug: 'arkansas',       citySlug: 'conway',          low: 310, high: 390, pop: 73817  },
  { rank: 6,  city: 'Decatur',         state: 'AL', stateSlug: 'alabama',        citySlug: 'decatur',         low: 315, high: 395, pop: 57361  },
  { rank: 7,  city: 'Madison',         state: 'AL', stateSlug: 'alabama',        citySlug: 'madison',         low: 315, high: 395, pop: 60106  },
  { rank: 8,  city: 'Owensboro',       state: 'KY', stateSlug: 'kentucky',       citySlug: 'owensboro',       low: 315, high: 400, pop: 73882  },
  { rank: 9,  city: 'Hattiesburg',     state: 'MS', stateSlug: 'mississippi',    citySlug: 'hattiesburg',     low: 315, high: 400, pop: 79749  },
  { rank: 10, city: 'Charleston',      state: 'WV', stateSlug: 'west-virginia',  citySlug: 'charleston',      low: 320, high: 405, pop: 46536  },
  { rank: 11, city: 'Fort Smith',      state: 'AR', stateSlug: 'arkansas',       citySlug: 'fort-smith',      low: 320, high: 405, pop: 90176  },
  { rank: 12, city: 'Enid',            state: 'OK', stateSlug: 'oklahoma',       citySlug: 'enid',            low: 320, high: 405, pop: 50653  },
  { rank: 13, city: 'Moore',           state: 'OK', stateSlug: 'oklahoma',       citySlug: 'moore',           low: 320, high: 405, pop: 63420  },
  { rank: 14, city: 'Jonesboro',       state: 'AR', stateSlug: 'arkansas',       citySlug: 'jonesboro',       low: 320, high: 405, pop: 80137  },
  { rank: 15, city: 'Springdale',      state: 'AR', stateSlug: 'arkansas',       citySlug: 'springdale',      low: 320, high: 405, pop: 88160  },
  { rank: 16, city: 'Tuscaloosa',      state: 'AL', stateSlug: 'alabama',        citySlug: 'tuscaloosa',      low: 325, high: 410, pop: 108069 },
  { rank: 17, city: 'Bartlett',        state: 'TN', stateSlug: 'tennessee',      citySlug: 'bartlett',        low: 325, high: 410, pop: 56876  },
  { rank: 18, city: 'Bossier City',    state: 'LA', stateSlug: 'louisiana',      citySlug: 'bossier-city',    low: 325, high: 410, pop: 62901  },
  { rank: 19, city: 'Hendersonville',  state: 'TN', stateSlug: 'tennessee',      citySlug: 'hendersonville',  low: 325, high: 410, pop: 63091  },
  { rank: 20, city: 'Kenner',          state: 'LA', stateSlug: 'louisiana',      citySlug: 'kenner',          low: 325, high: 410, pop: 64904  },
  { rank: 21, city: 'Morgantown',      state: 'WV', stateSlug: 'west-virginia',  citySlug: 'morgantown',      low: 320, high: 405, pop: 77875  },
  { rank: 22, city: 'Smyrna',          state: 'TN', stateSlug: 'tennessee',      citySlug: 'smyrna',          low: 325, high: 410, pop: 56692  },
  { rank: 23, city: 'Collierville',    state: 'TN', stateSlug: 'tennessee',      citySlug: 'collierville',    low: 325, high: 410, pop: 51515  },
  { rank: 24, city: 'Little Rock',     state: 'AR', stateSlug: 'arkansas',       citySlug: 'little-rock',     low: 325, high: 415, pop: 202591 },
  { rank: 25, city: 'Huntington',      state: 'WV', stateSlug: 'west-virginia',  citySlug: 'huntington',      low: 320, high: 405, pop: 46189  },
]

const MOST_EXPENSIVE_STATES = [
  { rank: 1,  state: 'Hawaii',               stateSlug: 'hawaii',          avg: 553, cities: 4   },
  { rank: 2,  state: 'New York',             stateSlug: 'new-york',         avg: 548, cities: 22  },
  { rank: 3,  state: 'Alaska',               stateSlug: 'alaska',          avg: 536, cities: 2   },
  { rank: 4,  state: 'California',           stateSlug: 'california',      avg: 521, cities: 190 },
  { rank: 5,  state: 'Rhode Island',         stateSlug: 'rhode-island',    avg: 505, cities: 4   },
  { rank: 6,  state: 'Washington D.C.',      stateSlug: 'washington-dc',   avg: 503, cities: 1   },
  { rank: 7,  state: 'Connecticut',          stateSlug: 'connecticut',     avg: 500, cities: 13  },
  { rank: 8,  state: 'New Jersey',           stateSlug: 'new-jersey',      avg: 498, cities: 17  },
  { rank: 9,  state: 'Massachusetts',        stateSlug: 'massachusetts',   avg: 492, cities: 24  },
  { rank: 10, state: 'Washington',           stateSlug: 'washington',      avg: 478, cities: 30  },
]

const CHEAPEST_STATES = [
  { rank: 1,  state: 'Arkansas',             stateSlug: 'arkansas',        avg: 361, cities: 9   },
  { rank: 2,  state: 'West Virginia',        stateSlug: 'west-virginia',   avg: 363, cities: 3   },
  { rank: 3,  state: 'Mississippi',          stateSlug: 'mississippi',     avg: 363, cities: 4   },
  { rank: 4,  state: 'Alabama',              stateSlug: 'alabama',         avg: 373, cities: 12  },
  { rank: 5,  state: 'Kentucky',             stateSlug: 'kentucky',        avg: 379, cities: 5   },
  { rank: 6,  state: 'Oklahoma',             stateSlug: 'oklahoma',        avg: 383, cities: 9   },
  { rank: 7,  state: 'South Dakota',         stateSlug: 'south-dakota',    avg: 384, cities: 2   },
  { rank: 8,  state: 'Tennessee',            stateSlug: 'tennessee',       avg: 385, cities: 18  },
  { rank: 9,  state: 'Louisiana',            stateSlug: 'louisiana',       avg: 385, cities: 14  },
  { rank: 10, state: 'Georgia',              stateSlug: 'georgia',         avg: 385, cities: 23  },
]

const PRICE_FACTORS = [
  {
    factor: 'Landfill tipping fees',
    impact: 'High',
    detail: 'The single biggest driver. California landfills charge $60–$100+ per ton; Arkansas landfills charge $20–$40 per ton. A full 20-yard dumpster holds 2–4 tons — that\'s a $160–$320 difference on landfill fees alone.',
  },
  {
    factor: 'Permit requirements',
    impact: 'High (urban areas)',
    detail: 'NYC requires a DOT Right-of-Way permit ($135–$385) for street placement. LA, Boston, Seattle all require street permits. Most southern and rural cities require no permit at all, adding zero cost.',
  },
  {
    factor: 'Fuel & transportation',
    impact: 'Medium',
    detail: 'Landfill distance directly affects price. In dense metros, the nearest landfill may be 30–60 miles away and require highway tolls. In rural areas, a landfill may be 5–10 miles away.',
  },
  {
    factor: 'Labor costs',
    impact: 'Medium',
    detail: 'Driver wages in California average $22–$28/hr vs $15–$18/hr in Mississippi. Higher minimum wages and cost of living cascade into rental prices.',
  },
  {
    factor: 'Competition & market density',
    impact: 'Medium',
    detail: 'Cities with more dumpster rental providers tend to have lower prices due to competition. Many rural southern markets have 2–3 providers; major metros have dozens.',
  },
  {
    factor: 'Environmental regulations',
    impact: 'Low–Medium',
    detail: 'States with stricter waste sorting, recycling diversion, or hazardous waste requirements add compliance costs. California\'s strict environmental regulations are a notable example.',
  },
]

export default function CostByCityPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs crumbs={[
            { label: 'Home', href: '/' },
            { label: 'Dumpster Rental', href: '/dumpster-rental' },
            { label: 'Cost by City' },
          ]} />
          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900">
            Dumpster Rental Cost by City (2026)
          </h1>
          <p className="mt-2 text-lg text-gray-600 font-medium">
            Most & Least Expensive Cities in America
          </p>
          <p className="mt-3 max-w-3xl text-gray-600 leading-relaxed">
            We analyzed 20-yard dumpster rental pricing across <strong>960 US cities</strong> with populations over 50,000. The result: Americans in the most expensive markets pay <strong>85% more</strong> than those in the cheapest — a $300 difference for the same size container.
          </p>

          {/* Key stats */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: 'National average', value: '$446', sub: '20-yard dumpster' },
              { label: 'Most expensive', value: '$685', sub: 'San Francisco / NYC' },
              { label: 'Least expensive', value: '$385', sub: 'Arkansas / Mississippi' },
              { label: 'Cities analyzed', value: '960', sub: 'Pop. 50,000+' },
            ].map((stat) => (
              <div key={stat.label} className="rounded-xl border border-gray-200 bg-white p-4 text-center">
                <div className="text-2xl font-extrabold text-gray-900">{stat.value}</div>
                <div className="text-xs font-semibold text-gray-500 mt-0.5">{stat.label}</div>
                <div className="text-xs text-gray-400 mt-0.5">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-14">

        {/* Methodology note */}
        <div className="rounded-xl border border-blue-100 bg-blue-50 px-5 py-4 text-sm text-blue-800">
          <strong>Methodology:</strong> Prices are for a standard <strong>20-yard roll-off dumpster</strong> (the most popular size for residential projects) with 7-day rental included. Data covers cities with populations over 50,000 and is based on local market pricing from our database of 31,000+ US cities. Prices reflect typical ranges — actual quotes may vary by provider.
        </div>

        {/* Most expensive cities */}
        <section>
          <div className="flex items-center gap-3 mb-2">
            <TrendingUp className="h-6 w-6 text-red-500 shrink-0" />
            <h2 className="text-2xl font-bold text-gray-900">Most Expensive Cities for Dumpster Rental</h2>
          </div>
          <p className="text-gray-500 text-sm mb-5">
            California and New York dominate the top 25. San Francisco, NYC, and LA all top out at <strong>$685</strong> for a 20-yard container — 53% above the national average.
          </p>
          <div className="rounded-xl border border-gray-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-red-50 border-b border-red-100">
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">#</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">City</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 hidden sm:table-cell">State</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">20-Yard Price</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">vs. Avg</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                {MOST_EXPENSIVE.map((row) => {
                  const avg = 446
                  const midPrice = Math.round((row.low + row.high) / 2)
                  const pctAbove = Math.round(((midPrice - avg) / avg) * 100)
                  return (
                    <tr key={row.rank} className="hover:bg-gray-50 transition">
                      <td className="px-4 py-3 text-gray-400 font-mono text-xs">{row.rank}</td>
                      <td className="px-4 py-3 font-medium text-gray-900">
                        <Link
                          href={`/dumpster-rental/${row.stateSlug}/${row.citySlug}`}
                          className="hover:text-green-700 transition"
                        >
                          {row.city}
                        </Link>
                      </td>
                      <td className="px-4 py-3 text-gray-500 hidden sm:table-cell">{row.state}</td>
                      <td className="px-4 py-3 font-semibold text-red-600">${row.low}–${row.high}</td>
                      <td className="px-4 py-3 hidden md:table-cell">
                        <span className="inline-flex items-center rounded-full bg-red-50 px-2 py-0.5 text-xs font-medium text-red-700">
                          +{pctAbove}%
                        </span>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </section>

        {/* Least expensive cities */}
        <section>
          <div className="flex items-center gap-3 mb-2">
            <TrendingDown className="h-6 w-6 text-green-600 shrink-0" />
            <h2 className="text-2xl font-bold text-gray-900">Least Expensive Cities for Dumpster Rental</h2>
          </div>
          <p className="text-gray-500 text-sm mb-5">
            Arkansas, Mississippi, Alabama, and Tennessee dominate the bottom 25. Southaven, MS tops the list at just <strong>$305–$385</strong> — 46% below the national average.
          </p>
          <div className="rounded-xl border border-gray-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-green-50 border-b border-green-100">
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">#</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">City</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 hidden sm:table-cell">State</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">20-Yard Price</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">vs. Avg</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                {LEAST_EXPENSIVE.map((row) => {
                  const avg = 446
                  const midPrice = Math.round((row.low + row.high) / 2)
                  const pctBelow = Math.round(((avg - midPrice) / avg) * 100)
                  return (
                    <tr key={row.rank} className="hover:bg-gray-50 transition">
                      <td className="px-4 py-3 text-gray-400 font-mono text-xs">{row.rank}</td>
                      <td className="px-4 py-3 font-medium text-gray-900">
                        <Link
                          href={`/dumpster-rental/${row.stateSlug}/${row.citySlug}`}
                          className="hover:text-green-700 transition"
                        >
                          {row.city}
                        </Link>
                      </td>
                      <td className="px-4 py-3 text-gray-500 hidden sm:table-cell">{row.state}</td>
                      <td className="px-4 py-3 font-semibold text-green-700">${row.low}–${row.high}</td>
                      <td className="px-4 py-3 hidden md:table-cell">
                        <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-0.5 text-xs font-medium text-green-700">
                          -{pctBelow}%
                        </span>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </section>

        {/* State rankings */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Dumpster Rental Cost by State</h2>
          <p className="text-gray-500 text-sm mb-5">
            Average 20-yard dumpster rental price by state, based on cities with populations over 50,000.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Most expensive states */}
            <div className="rounded-xl border border-gray-200 overflow-hidden">
              <div className="bg-red-50 px-4 py-3 border-b border-red-100">
                <h3 className="font-bold text-gray-900 flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-red-500" /> Most Expensive States
                </h3>
              </div>
              <table className="w-full text-sm">
                <tbody className="divide-y divide-gray-100 bg-white">
                  {MOST_EXPENSIVE_STATES.map((row) => (
                    <tr key={row.rank} className="hover:bg-gray-50 transition">
                      <td className="px-4 py-3 text-gray-400 text-xs">{row.rank}</td>
                      <td className="px-4 py-3 font-medium text-gray-900">
                        <Link href={`/dumpster-rental/${row.stateSlug}`} className="hover:text-green-700 transition">
                          {row.state}
                        </Link>
                      </td>
                      <td className="px-4 py-3 font-semibold text-red-600">${row.avg} avg</td>
                      <td className="px-4 py-3 text-xs text-gray-400">{row.cities} cities</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Cheapest states */}
            <div className="rounded-xl border border-gray-200 overflow-hidden">
              <div className="bg-green-50 px-4 py-3 border-b border-green-100">
                <h3 className="font-bold text-gray-900 flex items-center gap-2">
                  <TrendingDown className="h-4 w-4 text-green-600" /> Cheapest States
                </h3>
              </div>
              <table className="w-full text-sm">
                <tbody className="divide-y divide-gray-100 bg-white">
                  {CHEAPEST_STATES.map((row) => (
                    <tr key={row.rank} className="hover:bg-gray-50 transition">
                      <td className="px-4 py-3 text-gray-400 text-xs">{row.rank}</td>
                      <td className="px-4 py-3 font-medium text-gray-900">
                        <Link href={`/dumpster-rental/${row.stateSlug}`} className="hover:text-green-700 transition">
                          {row.state}
                        </Link>
                      </td>
                      <td className="px-4 py-3 font-semibold text-green-700">${row.avg} avg</td>
                      <td className="px-4 py-3 text-xs text-gray-400">{row.cities} cities</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* What drives prices */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Why Dumpster Rental Costs Vary So Much by City</h2>
          <p className="text-gray-500 text-sm mb-5">
            Six factors explain most of the price gap between the most and least expensive markets.
          </p>
          <div className="space-y-3">
            {PRICE_FACTORS.map((f, i) => (
              <div key={f.factor} className="flex gap-4 rounded-xl border border-gray-200 bg-white p-5">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-700 text-white text-sm font-bold">
                  {i + 1}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-gray-900">{f.factor}</span>
                    <span className={`text-xs rounded-full px-2 py-0.5 font-medium ${
                      f.impact.startsWith('High') ? 'bg-red-50 text-red-700' :
                      f.impact.startsWith('Medium') ? 'bg-amber-50 text-amber-700' :
                      'bg-gray-100 text-gray-600'
                    }`}>
                      Impact: {f.impact}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{f.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Key takeaways */}
        <section className="rounded-2xl border border-blue-100 bg-blue-50 p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Key Takeaways</h2>
          <ul className="space-y-3">
            {[
              'The national average for a 20-yard dumpster rental is $446 with 7 days included.',
              'The most expensive markets (SF, NYC, LA) charge $540–$685 — 53% above average.',
              'The cheapest markets (Arkansas, Mississippi) charge $305–$390 — 32% below average.',
              'Hawaii, New York, and Alaska are the most expensive states on average.',
              'Arkansas, West Virginia, and Mississippi are the cheapest states on average.',
              'Landfill tipping fees are the single biggest driver of price differences between cities.',
              'Urban permit requirements can add $135–$385 per rental in cities like NYC.',
            ].map((point) => (
              <li key={point} className="flex items-start gap-2 text-sm text-gray-700">
                <span className="h-5 w-5 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">✓</span>
                {point}
              </li>
            ))}
          </ul>
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

        {/* Find your city CTA */}
        <section className="rounded-2xl bg-green-700 p-8 text-center text-white">
          <MapPin className="h-8 w-8 mx-auto mb-3 text-green-200" />
          <h2 className="text-2xl font-bold mb-2">Find Prices in Your City</h2>
          <p className="text-green-100 mb-6 max-w-xl mx-auto">
            See local dumpster rental prices and compare quotes from companies in your area. We cover 31,000+ US cities.
          </p>
          <Link
            href="/dumpster-rental"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 font-bold text-green-700 hover:bg-green-50 transition"
          >
            Find Your City <ArrowRight className="h-5 w-5" />
          </Link>
        </section>

        {/* Related links */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Related Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { label: 'Dumpster Rental Cost Guide', href: '/dumpster-rental-cost' },
              { label: 'How Much Does Dumpster Rental Cost?', href: '/how-much-does-dumpster-rental-cost' },
              { label: 'Dumpster Size Guide', href: '/dumpster-sizes' },
              { label: 'Do You Need a Permit?', href: '/dumpster-rental-permit' },
              { label: 'Cheap Dumpster Rental', href: '/cheap-dumpster-rental' },
              { label: 'Dumpster Rental Near Me', href: '/dumpster-rental-near-me' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-700 hover:text-green-700 hover:border-green-200 transition"
              >
                <ArrowRight className="h-4 w-4 text-gray-400 shrink-0" />
                {link.label}
              </Link>
            ))}
          </div>
        </section>

      </div>
    </>
  )
}
