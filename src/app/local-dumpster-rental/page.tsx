import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle, AlertTriangle, MapPin, Star, Phone } from 'lucide-react'
import Breadcrumbs from '@/components/Breadcrumbs'
import AuthorByline from '@/components/AuthorByline'

export const metadata: Metadata = {
  title: 'Local Dumpster Rental — Find Companies Near You (2026)',
  description:
    'Find local dumpster rental companies in your area. Compare prices, read reviews, and get free quotes from nearby roll-off providers. Local companies often beat national chains by 15–25%.',
  alternates: { canonical: '/local-dumpster-rental' },
  openGraph: {
    title: 'Local Dumpster Rental — Find Companies Near You (2026)',
    description:
      'Find local dumpster rental companies in your area. Local providers often beat national chains by 15–25% on price.',
  },
}

const LOCAL_VS_NATIONAL = [
  {
    advantage: 'Lower Prices — 15–25% on Average',
    description:
      'National dumpster chains carry significant overhead: franchise royalties, national advertising spend, centralized call centers, and corporate management layers. A local company with 3–10 trucks has none of that cost structure. That savings flows directly to their prices. In head-to-head quotes for the same 20-yard dumpster in the same city, local independents routinely come in $60–$120 cheaper than national chains.',
    icon: '💰',
  },
  {
    advantage: 'More Scheduling Flexibility',
    description:
      'National chains run rigid routing schedules optimized for fleet efficiency across a wide service area. A local operator who services your neighborhood every week can often accommodate same-day or next-day delivery, work around permit timing, or swap container sizes with far less friction. For remodels, construction projects, or estate cleanouts with shifting timelines, that flexibility is genuinely valuable.',
    icon: '📅',
  },
  {
    advantage: 'Direct Accountability',
    description:
      'When you call a local company, you often speak directly with the owner or a dispatcher who knows the drivers personally. Issues — a late drop, a wrong-size container, a billing question — get resolved in one call. With a national chain, you may be routed through a call center with no authority to solve field-level problems. Local operators depend on neighborhood reputation; their incentive to get it right is higher.',
    icon: '🤝',
  },
  {
    advantage: 'Local Knowledge',
    description:
      'Local companies know your city\'s permit requirements, which streets require extra clearance for roll-off trucks, and which landfills accept which material types. They can advise on whether your driveway needs plywood protection for a 20-ton load, whether your neighborhood HOA allows dumpsters, and how long the city permit process takes. That operational intelligence prevents costly surprises.',
    icon: '🗺️',
  },
]

const EVALUATION_CHECKLIST = [
  {
    criterion: 'Google Reviews (4.0+ stars, 20+ reviews)',
    detail:
      'Look for recent reviews mentioning on-time delivery, honest billing, and responsive service. A company with 4.2 stars and 80 reviews is more trustworthy than one with 5.0 stars and 4 reviews. Watch for patterns in 1-star reviews — frequent billing complaints or late pickups are red flags.',
  },
  {
    criterion: 'Proper Licensing and Insurance',
    detail:
      'Ask if the company is licensed to haul waste in your state and whether they carry commercial liability insurance. Legitimate companies will confirm both without hesitation. If a driver damages your driveway or drops debris on the street, an uninsured operator leaves you with no recourse.',
  },
  {
    criterion: 'Written All-In Quote',
    detail:
      'A reliable local company will provide a written quote that includes the rental period, weight allowance, all fees, and total price. Any company that refuses to put the all-in price in writing — insisting on verbal-only quotes — is a risk. Verbal estimates are not binding.',
  },
  {
    criterion: 'Clear Prohibited Items Policy',
    detail:
      'Ask what they do not accept. Legitimate companies have a clear list: tires, mattresses, appliances, paint, electronics, hazardous waste. A company that says "we take everything" without qualification is either cutting regulatory corners or setting you up for surprise disposal fees later.',
  },
  {
    criterion: 'Years in Business and Local Presence',
    detail:
      'A company that has operated in your metro for 5+ years has survived long enough to have a real track record. Check if they have a physical address (not just a P.O. box), local phone number, and identifiable branding on their trucks. Fly-by-night operators often lack all three.',
  },
]

const QUESTIONS_TO_ASK = [
  {
    question: 'What is the all-in price, including weight, fuel, and taxes?',
    why: 'The advertised price often excludes fuel surcharges, environmental fees, and taxes. The only number that matters is your final invoice total.',
  },
  {
    question: 'How many tons are included in that price?',
    why: 'Weight overages ($60–$100/ton) are the most common surprise on the final bill. Know your included tonnage before loading anything heavy.',
  },
  {
    question: 'How many rental days are included?',
    why: 'Some budget rentals include only 5–7 days. Know your window before you start loading — daily overage fees accumulate fast if your project runs long.',
  },
  {
    question: 'What items do you not accept?',
    why: 'Mattresses, tires, electronics, paint, and hazardous materials are typically prohibited or charged extra. Dispose of these separately to avoid per-item fees.',
  },
  {
    question: 'Do I need a street permit if the dumpster goes on the road?',
    why: 'If your driveway cannot fit the container, the dumpster goes on the street — which may require a city permit costing $20–$100. A good local company will know your city\'s requirements.',
  },
  {
    question: 'Can you do early pickup if I finish sooner?',
    why: 'If your project wraps up early, early pickup saves you from scheduling the next phase around the dumpster. Confirm whether early pickup is free or has a fee.',
  },
]

const PRICE_COMPARISON = [
  {
    category: 'Base Rate (10 yd)',
    local: '$200–$300',
    national: '$260–$380',
    note: 'Local saves $60–$80 on average',
  },
  {
    category: 'Base Rate (20 yd)',
    local: '$285–$440',
    national: '$360–$540',
    note: 'Local saves $75–$100 on average',
  },
  {
    category: 'Base Rate (30 yd)',
    local: '$360–$530',
    national: '$440–$660',
    note: 'Local saves $80–$130 on average',
  },
  {
    category: 'Same-Day Delivery',
    local: 'Often free or $25',
    national: '$50–$100',
    note: 'Local significantly more flexible',
  },
  {
    category: 'Extended Rental',
    local: '$5–$10/day',
    national: '$10–$20/day',
    note: 'Local often negotiable upfront',
  },
  {
    category: 'Weight Overage',
    local: '$55–$80/ton',
    national: '$65–$100/ton',
    note: 'Similar but local rates vary more',
  },
]

const SIZE_GUIDE = [
  {
    size: '10-yard',
    cubicYards: 10,
    range: '$200–$300',
    fits: 'Approx. 50–60 garbage bags of debris',
    bestFor: 'Small remodel, garage cleanout, single-room renovation',
    href: '/dumpster-sizes/10-yard',
  },
  {
    size: '15-yard',
    cubicYards: 15,
    range: '$240–$400',
    fits: 'Approx. 75–90 garbage bags',
    bestFor: 'Kitchen renovation, flooring removal, medium cleanout',
    href: '/dumpster-sizes/15-yard',
  },
  {
    size: '20-yard',
    cubicYards: 20,
    range: '$285–$480',
    fits: 'Approx. 100–120 garbage bags',
    bestFor: 'Whole-home cleanout, roof tear-off, large remodel',
    href: '/dumpster-sizes/20-yard',
  },
  {
    size: '30-yard',
    cubicYards: 30,
    range: '$360–$580',
    fits: 'Approx. 150–180 garbage bags',
    bestFor: 'New construction, estate cleanout, large renovation',
    href: '/dumpster-sizes/30-yard',
  },
  {
    size: '40-yard',
    cubicYards: 40,
    range: '$430–$720',
    fits: 'Approx. 200–240 garbage bags',
    bestFor: 'Commercial demolition, large commercial jobs',
    href: '/dumpster-sizes/40-yard',
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
      name: 'Why are local dumpster companies cheaper than national chains?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Local dumpster companies operate with far lower overhead than national chains. They have no franchise royalties, no national marketing budgets, and no centralized call centers — costs that national chains build into every quote. A locally-owned operator with 3–10 trucks passes those savings to customers, typically pricing 15–25% below national chains for identical service. They also tend to be more willing to negotiate on pricing, especially for mid-week bookings or extended rentals.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I find a local dumpster rental company?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Search "[your city] dumpster rental" on Google and look past the top 2–3 sponsored results — local independents often rank just below the ads. Google Maps is particularly useful: filter by distance and read recent reviews. Look for companies with a physical address, local phone number, and identifiable branding on their trucks. Avoid companies with no street address or only a toll-free number — these are often brokers who subcontract locally at a markup.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are local dumpster companies reliable?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — local dumpster companies are generally highly reliable, often more so than national chains because their reputation depends entirely on serving their local community well. Look for companies with 4.0+ stars on Google with at least 20 reviews. Check that recent reviews mention on-time delivery and fair billing. Verify that the company is licensed to haul waste in your state and carries commercial liability insurance. A local company that has been in business for 5+ years in your area has a proven track record.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I ask a local dumpster rental company?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ask for an all-in price including weight allowance, fuel surcharge, and taxes. Confirm exactly how many tons are included and how many rental days are in the base price. Ask what items they do not accept (mattresses, tires, electronics, paint). If the dumpster will go on the street, ask whether a city permit is required and what it costs. Finally, ask whether early pickup is free if you finish the project ahead of schedule.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does local dumpster rental cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Local dumpster rental costs $200–$300 for a 10-yard bin, $285–$480 for a 20-yard bin, and $360–$720 for larger 30–40 yard containers, based on prices from local independent companies in mid-cost U.S. markets. Dense coastal cities (Miami, San Francisco, New York) run 20–35% higher due to landfill tipping fees. Rural and Midwest markets run 10–20% lower. Always ask for an all-in quote — the base price often excludes fuel surcharges and taxes.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Local Dumpster Rental — Find Companies Near You (2026)',
  description:
    'Find local dumpster rental companies in your area. Compare prices, read reviews, and get free quotes from nearby roll-off providers.',
  datePublished: '2026-03-29',
  dateModified: '2026-03-29',
  author: { '@type': 'Organization', name: 'DumpsterListing', url: 'https://dumpsterlisting.com' },
  publisher: { '@type': 'Organization', name: 'DumpsterListing', url: 'https://dumpsterlisting.com' },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://dumpsterlisting.com/local-dumpster-rental',
  },
}

export default function LocalDumpsterRentalPage() {
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
              { label: 'Local Dumpster Rental' },
            ]}
          />
          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900">
            Local Dumpster Rental Companies Near You
          </h1>
          <p className="mt-3 max-w-3xl text-gray-600 leading-relaxed">
            Local dumpster rental companies typically beat national chains by <strong>15–25% on price</strong>,
            offer more scheduling flexibility, and are far easier to work with when something needs to
            change. This guide shows you how to find and evaluate reliable local operators in your area,
            what to ask before booking, and what real prices look like from local providers.
          </p>
          <AuthorByline updatedDate="March 2026" readTimeMin={9} />
          <div className="mt-6">
            <Link
              href="/dumpster-rental"
              className="inline-flex items-center gap-2 rounded-lg bg-green-700 px-6 py-3 font-bold text-white hover:bg-green-800 transition"
            >
              Find Local Companies Near Me
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
          <div className="xl:col-span-2 space-y-12">

            {/* Section 1: Why Choose Local Over National */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Why Choose a Local Dumpster Company Over a National Chain?
              </h2>
              <p className="text-gray-600 mb-5 leading-relaxed">
                National dumpster brands dominate search results and paid advertising, but that visibility
                does not translate to better service or better value. Here is why local beats national on
                four dimensions that actually matter.
              </p>
              <div className="space-y-4">
                {LOCAL_VS_NATIONAL.map((item, i) => (
                  <div
                    key={item.advantage}
                    className="flex gap-4 rounded-xl border border-gray-200 bg-white p-5"
                  >
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-100 text-green-700 font-bold text-sm flex items-center justify-center">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{item.advantage}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 2: How to Evaluate a Local Company */}
            <section>
              <div className="flex items-center gap-2 mb-2">
                <Star className="h-5 w-5 text-green-700" />
                <h2 className="text-2xl font-bold text-gray-900">
                  How to Evaluate a Local Dumpster Company
                </h2>
              </div>
              <p className="text-gray-600 mb-5 leading-relaxed">
                Not every local operator is equally reliable. Use these five criteria to separate the
                well-run local companies from the ones that will give you problems.
              </p>
              <div className="space-y-4">
                {EVALUATION_CHECKLIST.map((item, i) => (
                  <div
                    key={item.criterion}
                    className="flex gap-3 rounded-xl border border-gray-200 bg-white p-4"
                  >
                    <CheckCircle className="h-5 w-5 text-green-700 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm">{item.criterion}</h3>
                      <p className="text-sm text-gray-600 mt-0.5 leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3: What to Ask Before Booking */}
            <section className="rounded-xl border border-green-200 bg-green-50 p-6">
              <div className="flex items-center gap-2 mb-2">
                <Phone className="h-5 w-5 text-green-700" />
                <h2 className="text-2xl font-bold text-gray-900">
                  What to Ask a Local Company Before Booking
                </h2>
              </div>
              <p className="text-gray-600 mb-5 text-sm leading-relaxed">
                A 5-minute call covering these six questions will tell you everything you need to know —
                and protect you from every common source of billing surprises.
              </p>
              <div className="space-y-5">
                {QUESTIONS_TO_ASK.map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="flex-shrink-0 h-7 w-7 rounded-full bg-green-700 text-white font-bold text-xs flex items-center justify-center">
                      {i + 1}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{item.question}</p>
                      <p className="text-sm text-gray-600 mt-0.5 leading-relaxed">
                        <span className="font-medium text-gray-700">Why it matters:</span> {item.why}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 4: Price Comparison Local vs National */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Local vs. National Dumpster Rental Price Comparison
              </h2>
              <p className="text-gray-600 mb-5 leading-relaxed">
                Here is what the price difference looks like in practice, based on typical rates in
                mid-cost U.S. markets. Dense coastal markets run higher for both categories; the
                percentage gap between local and national tends to hold regardless of location.
              </p>
              <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="text-left px-4 py-3 font-semibold text-gray-700">Category</th>
                      <th className="text-left px-4 py-3 font-semibold text-green-700">Local Company</th>
                      <th className="text-left px-4 py-3 font-semibold text-gray-700">National Chain</th>
                      <th className="text-left px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">
                        Notes
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {PRICE_COMPARISON.map((row) => (
                      <tr key={row.category} className="hover:bg-gray-50 transition-colors">
                        <td className="px-4 py-3 font-medium text-gray-900">{row.category}</td>
                        <td className="px-4 py-3 font-semibold text-green-700">{row.local}</td>
                        <td className="px-4 py-3 text-gray-600">{row.national}</td>
                        <td className="px-4 py-3 text-gray-500 text-xs hidden md:table-cell">{row.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-2 text-xs text-gray-400">
                * Representative ranges from mid-cost U.S. markets. Prices vary by city.{' '}
                <Link href="/dumpster-rental-cost" className="text-green-700 hover:underline">
                  See full pricing guide.
                </Link>
              </p>

              <div className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-4">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700">
                    <strong>Watch for broker sites:</strong> Some websites that appear to be local dumpster
                    companies are actually lead brokers. They take your booking, subcontract to a local
                    company, and add a $50–$150 markup. Look for a company with a local phone number, a
                    physical address, and identifiable trucks — not just a web form.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 5: Size Guide */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Local Dumpster Size Guide — Which Size Do You Need?
              </h2>
              <p className="text-gray-600 mb-5 leading-relaxed">
                Choosing the right size on your first booking avoids the most common cause of unexpected
                costs — a second pickup. Local companies offer the same size range as national chains,
                typically at lower rates.
              </p>
              <div className="space-y-3">
                {SIZE_GUIDE.map((item) => (
                  <div
                    key={item.size}
                    className="rounded-xl border border-gray-200 bg-white overflow-hidden"
                  >
                    <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100 bg-gray-50">
                      <Link href={item.href} className="font-bold text-green-700 hover:underline">
                        {item.size} Dumpster
                      </Link>
                      <span className="text-base font-extrabold text-gray-900">{item.range}</span>
                    </div>
                    <div className="px-5 py-3 text-sm text-gray-600">
                      <p className="mb-1">
                        <span className="font-medium text-gray-800">Capacity:</span> {item.fits}
                      </p>
                      <p>
                        <span className="font-medium text-gray-800">Best for:</span> {item.bestFor}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-sm text-gray-600">
                Not sure what size you need?{' '}
                <Link href="/dumpster-sizes" className="text-green-700 hover:underline font-medium">
                  Browse the full dumpster size guide
                </Link>{' '}
                with visual comparisons and project-specific recommendations.
              </p>
            </section>

            {/* Section 6: Popular Cities */}
            <section className="rounded-xl border border-green-200 bg-green-50 p-6">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="h-5 w-5 text-green-700" />
                <h2 className="text-xl font-bold text-gray-900">
                  Find Local Dumpster Companies by City
                </h2>
              </div>
              <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                Local pricing, available operators, and permit requirements all vary by city. Browse your
                market for local company listings, area-specific prices, and verified provider information.
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
                  Find Local Companies Near Me
                </Link>
                <Link
                  href="/dumpster-rental-near-me"
                  className="flex-1 rounded-lg border border-green-600 px-5 py-3 text-center font-semibold text-green-700 hover:bg-green-50 transition"
                >
                  Dumpster Rental Near Me
                </Link>
              </div>
            </section>

            {/* Section 7: FAQ */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-5">
                Local Dumpster Rental FAQs
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
              <h3 className="font-bold text-gray-900 text-lg mb-1">Find Local Companies Near You</h3>
              <p className="text-sm text-gray-600 mb-4">
                Browse local dumpster rental operators in your area. Compare prices, read reviews, and get
                free quotes from nearby providers.
              </p>
              <Link
                href="/dumpster-rental"
                className="block w-full rounded-lg bg-green-700 py-3 text-center font-bold text-white hover:bg-green-800 transition"
              >
                Browse Local Companies
              </Link>
            </div>

            {/* Browse by size */}
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <h3 className="font-bold text-gray-900 mb-3">Browse by Dumpster Size</h3>
              <div className="space-y-2 text-sm">
                {SIZE_GUIDE.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center justify-between text-gray-700 hover:text-green-700 transition group"
                  >
                    <span className="flex items-center gap-2">
                      <ArrowRight className="h-3.5 w-3.5 text-gray-400 group-hover:text-green-500" />
                      {item.size} dumpster
                    </span>
                    <span className="font-semibold text-gray-900">{item.range}</span>
                  </Link>
                ))}
              </div>
              <p className="mt-3 text-xs text-gray-400">Local company price ranges.</p>
            </div>

            {/* Related links */}
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <h3 className="font-bold text-gray-900 mb-3">Related Guides</h3>
              <div className="space-y-2 text-sm">
                {[
                  { label: 'Cheapest Dumpster Rental Near Me', href: '/cheapest-dumpster-rental-near-me' },
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
