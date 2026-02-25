import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle, AlertTriangle, Clock } from 'lucide-react'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Same-Day Dumpster Rental: How to Get One Fast | DumpsterListing',
  description:
    'Need a dumpster today? Learn how same-day dumpster rental works, which companies offer it, what it costs, and how to book one in hours.',
  alternates: { canonical: '/same-day-dumpster-rental' },
  openGraph: {
    title: 'Same-Day Dumpster Rental: How to Get One Fast | DumpsterListing',
    description:
      'Need a dumpster today? Learn how same-day dumpster rental works, which companies offer it, what it costs, and how to book one in hours.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can I get a dumpster delivered today?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — same-day dumpster delivery is available in most metro areas and many suburban markets. The key is calling early. Most companies accept same-day orders until 9–10am for morning or early-afternoon delivery. In larger cities, some operators take orders until noon for a late-day drop. Call local independent haulers first, as national chains like Waste Management and Republic Services typically require 24–48 hours lead time.',
      },
    },
    {
      '@type': 'Question',
      name: 'What time do I need to call for same-day dumpster rental?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Call before 9am to maximize your chances of same-day delivery. Most haulers lock in their daily delivery routes by mid-morning. Some companies in major metro areas will accommodate orders up until noon for afternoon delivery slots, but availability drops sharply as the day progresses. Don\'t rely on online booking for same-day requests — calling directly and speaking to a dispatcher gives you real-time availability.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does same-day dumpster rental cost more?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Expect to pay a rush surcharge of $25–$75 on top of standard rental rates. Standard rates still apply — a 10-yard dumpster runs $275–$400 and a 20-yard runs $350–$550, depending on your market. There are no same-day discounts; you are paying for the logistics of fitting your delivery into an already-scheduled route. The convenience premium is worth it for time-sensitive situations like storm cleanup or contractor deadlines.',
      },
    },
    {
      '@type': 'Question',
      name: 'What sizes are available for same-day delivery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '10-yard and 15-yard dumpsters are most commonly available on short notice because they make up the largest portion of a typical hauler\'s fleet. 20-yard containers are often available same-day with local operators. 30-yard and 40-yard dumpsters typically require 24–48 hours even with rush requests, as fewer of these units are in rotation on any given day. If your project genuinely requires a 30 or 40-yard, start calling the night before or early the same morning.',
      },
    },
    {
      '@type': 'Question',
      name: "What's the best way to find same-day dumpster rental near me?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Search for local independent haulers in your area rather than national chains. Call multiple companies simultaneously — ask specifically if they have a truck available today and what size they can deliver. Services like Bin There Dump That and Dumpster Market specialize in fast turnaround in select markets. Be flexible on size: take the available container rather than waiting for your preferred size. Monday through Wednesday tend to have more scheduling availability than Thursday and Friday.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I get a same-day dumpster for storm or disaster cleanup?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, and same-day dumpster rental is one of the most practical tools for storm debris, fire damage, and flood cleanup. Local haulers are accustomed to emergency requests after weather events. FEMA may reimburse debris removal costs for federally declared disasters — document everything with photos and receipts. Call multiple companies because demand spikes sharply after major storms. Have your drop zone cleared and ready before the driver arrives to avoid delays.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Same-Day Dumpster Rental: How to Get One Fast',
  description:
    'Need a dumpster today? Learn how same-day dumpster rental works, which companies offer it, what it costs, and how to book one in hours.',
  datePublished: '2026-02-24',
  dateModified: '2026-02-24',
  author: { '@type': 'Organization', name: 'DumpsterListing', url: 'https://dumpsterlisting.com' },
  publisher: { '@type': 'Organization', name: 'DumpsterListing', url: 'https://dumpsterlisting.com' },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://dumpsterlisting.com/same-day-dumpster-rental',
  },
}

const HOW_IT_WORKS = [
  {
    title: 'Cutoff times are real — call before 9am',
    description:
      'Most haulers finalize their day\'s delivery routes by 9–10am. After that, fitting an unscheduled delivery requires pulling a truck off another job. Calling at 7 or 8am gives you the best chance of landing a morning or early-afternoon window.',
  },
  {
    title: 'Call directly — don\'t rely on online booking',
    description:
      'Online booking systems often don\'t reflect real-time same-day availability. A dispatcher can tell you in 60 seconds whether a truck is available and what sizes are on the lot. Speaking with a human closes the deal; a booking widget frequently cannot.',
  },
  {
    title: 'Confirm availability in your specific zip code',
    description:
      'A company may service your city broadly but only have trucks in certain quadrants on any given day. Confirming your exact address and zip code up front avoids a situation where you\'re told a delivery is coming and it never arrives.',
  },
  {
    title: 'Afternoon slots exist in many markets',
    description:
      'Some markets — particularly large metros — have haulers who run a second afternoon route. If you miss the morning window, ask specifically: "Do you have any afternoon delivery availability?" You may still get a dumpster by 3–4pm.',
  },
]

const COMPANY_TYPES = [
  {
    type: 'Local Independent Haulers',
    availability: 'Best',
    leadTime: 'Same day, often by 9am call',
    notes:
      'Your best bet. They manage their own fleet, make their own dispatch decisions, and have more flexibility than franchise operations. Search "[your city] dumpster rental" — not just sponsored results.',
  },
  {
    type: 'Bin There Dump That',
    availability: 'Good',
    leadTime: 'Same day in select markets',
    notes:
      'A franchise network that specializes in residential-friendly delivery. Many franchisees offer rapid turnaround. Coverage varies by market — check their site for your area.',
  },
  {
    type: 'Dumpster Market',
    availability: 'Good',
    leadTime: 'Same day in major metros',
    notes:
      'On-demand dumpster platforms operating in select large markets. Designed for fast booking. Check if they serve your zip code before relying on them.',
  },
  {
    type: 'Waste Management (WM)',
    availability: 'Limited',
    leadTime: '24–48 hours typically',
    notes:
      'Large national infrastructure means less scheduling flexibility. A same-day request is possible but not their standard model. Better for planned projects than urgent needs.',
  },
  {
    type: 'Republic Services',
    availability: 'Limited',
    leadTime: '24–48 hours typically',
    notes:
      'Similar to WM — excellent for commercial accounts and ongoing projects, but not built for same-day residential requests.',
  },
  {
    type: 'Waste Connections',
    availability: 'Limited',
    leadTime: '24–48 hours typically',
    notes:
      'Primarily serves smaller markets that national chains underserve, but scheduling flexibility still varies by region. Call your local branch directly.',
  },
]

const SIZE_AVAILABILITY = [
  {
    size: '10 yard',
    availability: 'High',
    price: '$275–$400',
    notes: 'Most common same-day size. Ideal for storm cleanup, garage cleanout, small estate work.',
  },
  {
    size: '15 yard',
    availability: 'High',
    price: '$325–$450',
    notes: 'Second most available. Good middle ground for larger storm debris or urgent renovation cleanup.',
  },
  {
    size: '20 yard',
    availability: 'Moderate',
    price: '$350–$550',
    notes: 'Often available with local operators. Best for whole-room renovation or medium storm debris.',
  },
  {
    size: '30 yard',
    availability: 'Low',
    price: '$450–$650',
    notes: 'Usually requires 24 hours even with rush. Call the night before if possible.',
  },
  {
    size: '40 yard',
    availability: 'Very Low',
    price: '$550–$750',
    notes: 'Plan 24–48 hours ahead. Same-day is rarely possible without a pre-existing relationship.',
  },
]

const BOOKING_STEPS = [
  {
    step: 'Search for local companies (not national chains)',
    detail:
      'Open a browser and search your city name plus "dumpster rental." Look past the sponsored results for locally-owned operations — they have the most same-day flexibility.',
  },
  {
    step: 'Call before 9am — explain you need same-day',
    detail:
      'State clearly that you need delivery today. Ask: "Do you have a truck available for same-day delivery to [your address]?" Ambiguity wastes time.',
  },
  {
    step: 'Have your address, size, and payment ready',
    detail:
      'Know what size you need (or ask for a recommendation based on your project). Have a credit card on hand. Same-day deliveries almost always require payment upfront.',
  },
  {
    step: 'Confirm your delivery window',
    detail:
      'Ask specifically: morning or afternoon? Get a time window, not just "today." A 4-hour window (8am–noon) is standard. Narrow it as much as possible so you can be on-site.',
  },
  {
    step: 'Clear the drop zone before the driver arrives',
    detail:
      'Remove vehicles, mark any underground utilities you know of (call 811 if uncertain), and ensure overhead clearance of at least 18 feet for the delivery truck arm. Delays on-site may bump you to the next available slot.',
  },
]

const TIPS = [
  {
    tip: 'Call multiple companies simultaneously',
    detail:
      'Don\'t call one, wait for an answer, and move on. Call 3–4 companies back-to-back in the same 15 minutes. First one to confirm gets the booking.',
  },
  {
    tip: 'Be flexible on dumpster size',
    detail:
      'Same-day is about getting a container delivered — not the exact size you planned. If a 15-yard is available and a 10-yard is not, take the 15-yard. The extra $50–$75 is trivial compared to a missed workday.',
  },
  {
    tip: 'Ask about afternoon slots if morning is full',
    detail:
      'Many people assume same-day means morning. Ask about afternoon availability — some markets run 2pm–5pm routes that have open slots even when morning routes are full.',
  },
  {
    tip: 'Monday through Wednesday have more availability',
    detail:
      'Contractors book heavily for Thursday and Friday deliveries. If you have any flexibility, target earlier in the week. Mondays and Tuesdays often have the most open same-day slots.',
  },
  {
    tip: 'Have a backup site for the dumpster',
    detail:
      'If your primary drop zone turns out to have an obstruction (low wires, soft ground, parked cars), have a Plan B location ready. Drivers cannot spend 20 minutes problem-solving on site.',
  },
]

const WHAT_TO_HAVE_READY = [
  'Clear drop zone — free of vehicles, equipment, and debris',
  'Level surface — driveway or flat gravel pad preferred',
  'Overhead clearance — minimum 18 ft for delivery truck arm',
  'No soft ground — avoid recently watered lawns or muddy areas',
  'Credit card or payment method ready for upfront payment',
  'Project type description — helps dispatcher confirm the right size',
  'Your exact address and zip code confirmed',
]

const RELATED_GUIDES = [
  { label: 'How Much Does Dumpster Rental Cost?', href: '/dumpster-rental-cost' },
  { label: 'Roll-Off Dumpster Sizes Guide', href: '/roll-off-dumpster-sizes' },
  { label: 'Do You Need a Permit?', href: '/dumpster-rental-permit' },
  { label: 'How Long Can You Keep a Dumpster?', href: '/how-long-can-you-keep-a-rental-dumpster' },
  { label: 'Cheap Dumpster Rental Tips', href: '/cheap-dumpster-rental' },
  { label: 'Find Dumpsters Near Me', href: '/dumpster-rental-near-me' },
]

export default function SameDayDumpsterRentalPage() {
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
              { label: 'Dumpster Rental', href: '/dumpster-rental-near-me' },
              { label: 'Same-Day Dumpster Rental' },
            ]}
          />
          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900">
            Same-Day Dumpster Rental: How to Get One Fast
          </h1>
          <p className="mt-3 max-w-3xl text-gray-600 leading-relaxed">
            Whether you&apos;re dealing with storm debris, a contractor deadline, or an urgent estate cleanout,
            same-day dumpster delivery is available in most metro areas — but you need to move quickly and
            know which companies to call. This guide covers exactly how same-day rental works, which haulers
            offer it, what it costs, and how to lock in a delivery in hours rather than days.
          </p>
          <div className="mt-6">
            <Link
              href="/dumpster-rental-near-me"
              className="inline-flex items-center gap-2 rounded-lg bg-green-700 px-6 py-3 font-bold text-white hover:bg-green-800 transition"
            >
              Find Same-Day Dumpster Rental Near You
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
          <div className="xl:col-span-2 space-y-12">

            {/* Section 1: How It Works */}
            <section>
              <div className="flex items-center gap-2 mb-2">
                <Clock className="h-5 w-5 text-green-700" />
                <h2 className="text-2xl font-bold text-gray-900">
                  How Same-Day Dumpster Rental Works
                </h2>
              </div>
              <p className="text-gray-600 mb-5 leading-relaxed">
                Same-day delivery is a real service, not a marketing promise — but it operates within real
                logistical constraints. Understanding how haulers structure their schedules is the difference
                between getting a dumpster by noon and being told to call back tomorrow.
              </p>
              <div className="space-y-4">
                {HOW_IT_WORKS.map((item, i) => (
                  <div
                    key={item.title}
                    className="flex gap-4 rounded-xl border border-gray-200 bg-white p-5"
                  >
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-100 text-green-700 font-bold text-sm flex items-center justify-center">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 2: Which Companies Offer It */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Which Companies Offer Same-Day Dumpster Delivery?
              </h2>
              <p className="text-gray-600 mb-5 leading-relaxed">
                Not all dumpster companies are built the same way. Local independent haulers have the most
                flexibility for urgent requests. National chains — Waste Management, Republic Services, and
                Waste Connections — have larger fleets but more rigid scheduling due to centralized dispatch
                and pre-committed commercial routes.
              </p>
              <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="text-left px-4 py-3 font-semibold text-gray-700">Company Type</th>
                      <th className="text-left px-4 py-3 font-semibold text-gray-700">Same-Day Availability</th>
                      <th className="text-left px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">Typical Lead Time</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {COMPANY_TYPES.map((co) => (
                      <tr key={co.type} className="hover:bg-gray-50 transition-colors align-top">
                        <td className="px-4 py-3 font-semibold text-gray-900">{co.type}</td>
                        <td className="px-4 py-3">
                          <span
                            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                              co.availability === 'Best'
                                ? 'bg-green-100 text-green-800'
                                : co.availability === 'Good'
                                ? 'bg-blue-100 text-blue-800'
                                : 'bg-gray-100 text-gray-700'
                            }`}
                          >
                            {co.availability}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-gray-600 hidden md:table-cell">{co.leadTime}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 space-y-3">
                {COMPANY_TYPES.slice(0, 3).map((co) => (
                  <div
                    key={co.type}
                    className="rounded-xl border border-gray-200 bg-white p-4"
                  >
                    <h3 className="font-semibold text-gray-900 text-sm mb-1">{co.type}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{co.notes}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-gray-600 bg-gray-50 rounded-lg p-4 border border-gray-200">
                <strong>Bottom line:</strong> For same-day delivery, start with local independent operators.
                If you can&apos;t find one, try Bin There Dump That or Dumpster Market if they serve your market.
                Call national chains only as a last resort — their same-day success rate is lower.
              </p>
            </section>

            {/* Section 3: Cost */}
            <section className="rounded-xl border border-green-200 bg-green-50 p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                What Does Same-Day Dumpster Rental Cost?
              </h2>
              <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                Same-day delivery does not come at a same-day discount — you pay for the logistics convenience.
                Here is the realistic cost breakdown.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                <div className="rounded-xl border border-green-200 bg-white p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">Rush Surcharge</h3>
                  <p className="text-2xl font-extrabold text-green-700 mb-1">$25–$75</p>
                  <p className="text-sm text-gray-600">Added on top of the standard rental rate for same-day delivery. Some companies fold this into the quote — always ask if the price includes rush delivery.</p>
                </div>
                <div className="rounded-xl border border-green-200 bg-white p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">Standard Rental Rates Still Apply</h3>
                  <p className="text-2xl font-extrabold text-green-700 mb-1">$275–$550</p>
                  <p className="text-sm text-gray-600">For a 10–20 yard dumpster with standard 7–14 day rental period and included weight allowance. Market and size determine the base rate.</p>
                </div>
              </div>
              <div className="rounded-lg border border-green-200 bg-white p-4">
                <p className="text-sm text-gray-700 leading-relaxed">
                  <strong>Total same-day cost example:</strong> A 10-yard dumpster that normally rents for
                  $300 in your market will run approximately <strong>$325–$375</strong> with a same-day
                  surcharge added. A 20-yard at a standard $450 becomes <strong>$475–$525</strong>.
                  The premium is significant but justified for time-sensitive situations.
                </p>
              </div>
            </section>

            {/* Section 4: Size Availability */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                What Sizes Are Available for Same-Day Delivery?
              </h2>
              <p className="text-gray-600 mb-5 leading-relaxed">
                Same-day availability is directly tied to fleet composition. Most haulers carry proportionally
                more 10 and 15-yard containers because they are the most common residential request. The
                larger the container, the fewer units in rotation — and the fewer available on short notice.
              </p>
              <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="text-left px-4 py-3 font-semibold text-gray-700">Size</th>
                      <th className="text-left px-4 py-3 font-semibold text-gray-700">Same-Day Availability</th>
                      <th className="text-left px-4 py-3 font-semibold text-gray-700">Typical Price</th>
                      <th className="text-left px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {SIZE_AVAILABILITY.map((row) => (
                      <tr key={row.size} className="hover:bg-gray-50 transition-colors align-top">
                        <td className="px-4 py-3 font-bold text-green-700">{row.size}</td>
                        <td className="px-4 py-3">
                          <span
                            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                              row.availability === 'High'
                                ? 'bg-green-100 text-green-800'
                                : row.availability === 'Moderate'
                                ? 'bg-yellow-100 text-yellow-800'
                                : row.availability === 'Low'
                                ? 'bg-orange-100 text-orange-800'
                                : 'bg-red-100 text-red-800'
                            }`}
                          >
                            {row.availability}
                          </span>
                        </td>
                        <td className="px-4 py-3 font-semibold text-gray-900">{row.price}</td>
                        <td className="px-4 py-3 text-gray-600 hidden md:table-cell">{row.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-sm text-gray-600 bg-gray-50 rounded-lg p-4 border border-gray-200">
                <strong>The most common same-day use cases</strong> are storm cleanup, fire and flood debris
                removal, and urgent estate cleanouts — all of which typically require a 10 or 15-yard
                dumpster. If you need a 30 or 40-yard for a large construction project, plan 24–48 hours ahead.
              </p>
            </section>

            {/* Section 5: How to Book */}
            <section className="rounded-xl border border-green-200 bg-green-50 p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                How to Book a Same-Day Dumpster: Step by Step
              </h2>
              <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                Speed and preparation are everything. Have your details ready before you dial.
              </p>
              <ol className="space-y-4">
                {BOOKING_STEPS.map((item, i) => (
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

            {/* Section 6: What to Have Ready */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                What to Have Ready Before the Driver Arrives
              </h2>
              <p className="text-gray-600 mb-5 leading-relaxed">
                Same-day deliveries move fast. Drivers cannot spend time troubleshooting site issues — if
                the drop zone isn&apos;t ready, they may need to leave and return later (or not at all that day).
                Have everything sorted before you confirm your delivery window.
              </p>
              <div className="space-y-2.5">
                {WHAT_TO_HAVE_READY.map((item, i) => (
                  <div key={i} className="flex gap-3 rounded-xl border border-gray-200 bg-white p-4">
                    <CheckCircle className="h-5 w-5 text-green-700 shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-700 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 7: Same-Day vs Next-Day Tradeoff */}
            <section className="rounded-xl border border-amber-200 bg-amber-50 p-6">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="h-5 w-5 text-amber-600" />
                <h2 className="text-xl font-bold text-gray-900">
                  Same-Day vs. Next-Day: When Is the Premium Worth It?
                </h2>
              </div>
              <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                If you can wait until tomorrow, you will almost certainly get more options, better size
                selection, and potentially a lower price. Here is how to decide:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-xl border border-amber-200 bg-white p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Same-day is worth it when:</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {[
                      'Storm debris is creating a hazard or blocking access',
                      'A contractor crew is on-site and cannot proceed without a dumpster',
                      'Fire or flood damage requires immediate debris removal',
                      'Estate sale or property closing deadline cannot move',
                      'A tree fell and needs to be removed immediately',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl border border-amber-200 bg-white p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Next-day is smarter when:</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {[
                      'Your project start has some flexibility',
                      'You need a larger container (30 or 40-yard)',
                      'You want to compare quotes from multiple companies',
                      'You\'re in a rural market with limited same-day fleet',
                      'The $25–$75 surcharge matters to your budget',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 8: Tips */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                5 Tips for Getting Same-Day Availability
              </h2>
              <p className="text-gray-600 mb-5 leading-relaxed">
                These are the tactics that make the difference between a confirmed delivery and a frustrating
                afternoon of voicemails.
              </p>
              <div className="space-y-4">
                {TIPS.map((item, i) => (
                  <div key={i} className="flex gap-4 rounded-xl border border-gray-200 bg-white p-5">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-100 text-green-700 font-bold text-sm flex items-center justify-center">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{item.tip}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-5">
                Same-Day Dumpster Rental FAQs
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

            {/* Related Guides */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Related Guides</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {RELATED_GUIDES.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-700 hover:text-green-700 hover:border-green-200 transition"
                  >
                    <ArrowRight className="h-3.5 w-3.5 text-gray-400 shrink-0" />
                    {link.label}
                  </Link>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section className="rounded-xl border border-green-200 bg-green-50 p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Find Same-Day Dumpster Rental Near You
              </h2>
              <p className="text-gray-600 mb-6 max-w-xl mx-auto">
                Compare local haulers who offer same-day delivery in your area. Most markets have options
                available when you call before 9am — get connected now.
              </p>
              <Link
                href="/dumpster-rental-near-me"
                className="inline-flex items-center gap-2 rounded-xl bg-green-700 px-8 py-3.5 font-bold text-white hover:bg-green-800 transition"
              >
                Find Local Same-Day Options <ArrowRight className="h-5 w-5" />
              </Link>
            </section>

          </div>

          {/* Sidebar */}
          <aside className="space-y-5">

            {/* Quick CTA */}
            <div className="rounded-xl border border-green-200 bg-green-50 p-6">
              <h3 className="font-bold text-gray-900 text-lg mb-1">Need a Dumpster Today?</h3>
              <p className="text-sm text-gray-600 mb-4">
                Find local haulers in your area who offer same-day delivery. Call before 9am for the best
                availability.
              </p>
              <Link
                href="/dumpster-rental-near-me"
                className="block w-full rounded-lg bg-green-700 py-3 text-center font-bold text-white hover:bg-green-800 transition"
              >
                Find Same-Day Options
              </Link>
            </div>

            {/* Same-day checklist */}
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <h3 className="font-bold text-gray-900 mb-3">Same-Day Booking Checklist</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {[
                  'Call before 9am',
                  'Have your address ready',
                  'Know your project type',
                  'Credit card ready for upfront payment',
                  'Drop zone cleared and accessible',
                  'Overhead clearance confirmed (18+ ft)',
                  'Called 3+ local companies',
                  'Asked about afternoon slots if morning full',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-0.5 h-4 w-4 rounded border border-gray-300 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price reference */}
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <h3 className="font-bold text-gray-900 mb-3">Same-Day Pricing by Size</h3>
              <div className="space-y-2">
                {SIZE_AVAILABILITY.map((row) => (
                  <div key={row.size} className="flex items-center justify-between text-sm">
                    <span className="text-gray-700">{row.size} dumpster</span>
                    <span className="font-semibold text-gray-900">{row.price}</span>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-xs text-gray-400">
                Includes estimated rush surcharge. Market rates vary.
              </p>
            </div>

            {/* Related links */}
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <h3 className="font-bold text-gray-900 mb-3">Related Guides</h3>
              <div className="space-y-2 text-sm">
                {RELATED_GUIDES.map((link) => (
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
