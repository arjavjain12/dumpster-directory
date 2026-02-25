import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle, XCircle } from 'lucide-react'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Dumpster Rental vs Junk Removal: Which Should You Choose? (2026)',
  description:
    'Dumpster rental or junk removal — which is cheaper and better for your project? Compare costs, convenience, and use cases to make the right choice.',
  alternates: { canonical: '/dumpster-rental-vs-junk-removal' },
  openGraph: {
    title: 'Dumpster Rental vs Junk Removal: Full Comparison (2026)',
    description: 'Compare costs, pros, cons, and best use cases for dumpster rental vs junk removal. Find out which saves more money for your project.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is dumpster rental cheaper than junk removal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For large projects, dumpster rental is almost always cheaper. According to Angi\'s 2025 cost data, the national average for dumpster rental is $480 for a 10-yard container, while junk removal averages $233 for a minimum load up to $600+ per full truckload. If you have more than one truckload of debris — roughly 3+ cubic yards — a dumpster is almost always the better value.',
      },
    },
    {
      '@type': 'Question',
      name: 'When should I choose junk removal over a dumpster?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Choose junk removal when: you only have a small amount of items, you cannot do any loading yourself, you live in an area where a dumpster cannot be placed (tight driveway, HOA restrictions), or you need same-day or next-day service. Junk removal crews do all the lifting and hauling for you.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the average cost of junk removal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'According to Angi\'s 2025 national cost survey, junk removal averages $233 for a minimum load, $400–$600 for a half-truck, and $500–$800+ for a full truckload. A full junk removal truck holds approximately 10–13 cubic yards. Prices vary by location — metro areas run 20–30% higher than rural markets. Heavy items like concrete or appliances incur weight surcharges.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you put the same things in a dumpster as junk removal hauls away?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mostly yes, with some exceptions. Both services typically accept furniture, appliances, construction debris, and general household junk. Neither accepts hazardous waste (paint, chemicals, propane tanks). Some junk removal companies can take items that dumpsters cannot, like mattresses or electronics, depending on local recycling options.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long can you keep a rental dumpster?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Standard dumpster rentals include 7–14 days. Most companies charge $5–$10 per day for extensions. For long renovation projects, extended rentals of 30+ days are available for a flat monthly fee.',
      },
    },
  ],
}

const COMPARISON = [
  {
    factor: 'Average Cost',
    dumpster: '$275–$575 (7-day rental)',
    junk: '$150–$800+ (per load)',
    winner: 'dumpster' as const,
    note: 'Dumpster wins for large volumes',
  },
  {
    factor: 'Labor Required',
    dumpster: 'You load everything yourself',
    junk: 'Crew loads and hauls for you',
    winner: 'junk' as const,
    note: 'Junk removal if you cannot do lifting',
  },
  {
    factor: 'Speed / Convenience',
    dumpster: '24–48 hr delivery, keep for days',
    junk: 'Same-day or next-day available',
    winner: 'tie' as const,
    note: 'Depends on your timeline',
  },
  {
    factor: 'Volume Flexibility',
    dumpster: 'Fill it at your own pace',
    junk: 'Price rises with each truckload',
    winner: 'dumpster' as const,
    note: 'Dumpster better for ongoing projects',
  },
  {
    factor: 'Space Required',
    dumpster: 'Needs driveway or street space',
    junk: 'No space needed — crew comes in',
    winner: 'junk' as const,
    note: 'Junk removal for tight spaces',
  },
  {
    factor: 'HOA / Permit Restrictions',
    dumpster: 'May need permit; some HOAs restrict',
    junk: 'No placement issues',
    winner: 'junk' as const,
    note: 'Junk removal avoids placement headaches',
  },
  {
    factor: 'Eco / Donation Options',
    dumpster: 'Everything goes to landfill',
    junk: 'Many companies donate/recycle',
    winner: 'junk' as const,
    note: 'Junk removal if sustainability matters',
  },
  {
    factor: 'Best For Large Projects',
    dumpster: 'Full renovations, roofing, construction',
    junk: 'Single-room or small cleanouts',
    winner: 'dumpster' as const,
    note: 'Dumpster scales better',
  },
]

const DUMPSTER_PROS = [
  'Lower cost per cubic yard for large volumes',
  'Keep it for 7–14 days — work at your pace',
  'Best for construction, roofing, and major renovations',
  'No crew scheduling or coordination needed',
  'Wide range of sizes (10–40 yards)',
]

const DUMPSTER_CONS = [
  'You do all the loading yourself',
  'Requires driveway space or street permit',
  'Not ideal for very small amounts of junk',
  'Some HOAs or cities restrict placement',
  'Heavy materials have weight limits',
]

const JUNK_PROS = [
  'Crew does all lifting and loading for you',
  'No space required for container placement',
  'Often recycle or donate usable items',
  'Same-day service often available',
  'Better for apartments and tight spaces',
]

const JUNK_CONS = [
  'More expensive per cubic yard for large volumes',
  'Price jumps with each additional truckload',
  'You must be home when crew arrives',
  'Less scheduling flexibility for ongoing projects',
  'Harder to estimate cost upfront',
]

const USE_CASES = [
  {
    scenario: 'Full home renovation',
    recommendation: 'Dumpster Rental',
    reason: 'Multiple rooms of debris over several weeks — dumpster wins on cost and flexibility.',
    color: 'green',
  },
  {
    scenario: 'Roofing project',
    recommendation: 'Dumpster Rental',
    reason: 'Shingles are heavy and bulky. A roll-off dumpster is the standard method.',
    color: 'green',
  },
  {
    scenario: 'Clearing out a garage',
    recommendation: 'Either — compare quotes',
    reason: 'Small load might be junk removal; large load shifts to dumpster value.',
    color: 'yellow',
  },
  {
    scenario: 'Apartment cleanout',
    recommendation: 'Junk Removal',
    reason: 'No driveway for a dumpster, and crew can navigate stairs and tight hallways.',
    color: 'blue',
  },
  {
    scenario: 'Estate cleanout',
    recommendation: 'Junk Removal',
    reason: 'Crews can sort, donate, and haul in one visit — saves time and preserves items.',
    color: 'blue',
  },
  {
    scenario: 'New construction',
    recommendation: 'Dumpster Rental',
    reason: '20–40 yard roll-offs are standard on job sites. Volume makes dumpster the clear winner.',
    color: 'green',
  },
  {
    scenario: 'Removing 1–2 large items',
    recommendation: 'Junk Removal',
    reason: 'Renting a dumpster for a sofa and a mattress rarely makes financial sense.',
    color: 'blue',
  },
  {
    scenario: 'Yard waste / landscaping',
    recommendation: 'Either — check local rules',
    reason: 'Some areas have free green waste pickup. Otherwise compare dumpster vs junk removal pricing.',
    color: 'yellow',
  },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Dumpster Rental vs Junk Removal: Which Should You Choose?',
  description: 'A complete comparison of dumpster rental and junk removal — costs, pros, cons, and best use cases for each.',
  datePublished: '2026-02-23',
  dateModified: '2026-02-23',
  author: { '@type': 'Organization', name: 'DumpsterListing', url: 'https://dumpsterlisting.com' },
  publisher: { '@type': 'Organization', name: 'DumpsterListing', url: 'https://dumpsterlisting.com' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://dumpsterlisting.com/dumpster-rental-vs-junk-removal' },
}

export default function DumpsterVsJunkRemovalPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs crumbs={[
            { label: 'Home', href: '/' },
            { label: 'Dumpster Rental vs Junk Removal' },
          ]} />
          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900">
            Dumpster Rental vs Junk Removal: Which Is Right for You?
          </h1>
          <p className="mt-3 max-w-3xl text-gray-600 leading-relaxed">
            Both options remove your junk — but the right choice depends on your project size, budget,
            and how much work you want to do yourself. Here's an honest, side-by-side comparison to
            help you decide.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-14">

        {/* Quick summary cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border-2 border-green-200 bg-green-50 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-full bg-green-700 flex items-center justify-center text-white text-xl">🗑️</div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">Dumpster Rental</h2>
                <p className="text-sm text-green-700 font-medium">Best for large, ongoing projects</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              A roll-off dumpster is delivered to your property. You load it yourself over 7–14 days,
              then the company picks it up and disposes of everything.
            </p>
            <div className="text-sm font-semibold text-gray-900">Typical cost: <span className="text-green-700">$275–$575</span></div>
          </div>

          <div className="rounded-2xl border-2 border-blue-200 bg-blue-50 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white text-xl">🚛</div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">Junk Removal</h2>
                <p className="text-sm text-blue-700 font-medium">Best for small loads, no lifting</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              A two-person crew comes to your home, loads everything into their truck, and hauls it away.
              You don't lift a finger — but you pay for that convenience.
            </p>
            <div className="text-sm font-semibold text-gray-900">Typical cost: <span className="text-blue-700">$150–$800+</span></div>
          </div>
        </div>

        {/* Comparison table */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-5">Side-by-Side Comparison</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">Factor</th>
                  <th className="text-left px-4 py-3 font-semibold text-green-700">🗑️ Dumpster Rental</th>
                  <th className="text-left px-4 py-3 font-semibold text-blue-700">🚛 Junk Removal</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">Note</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {COMPARISON.map((row) => (
                  <tr key={row.factor} className="hover:bg-gray-50 transition">
                    <td className="px-4 py-3 font-semibold text-gray-800">{row.factor}</td>
                    <td className={`px-4 py-3 text-gray-700 ${row.winner === 'dumpster' ? 'font-semibold text-green-700' : ''}`}>
                      {row.winner === 'dumpster' && <span className="mr-1">✓</span>}
                      {row.dumpster}
                    </td>
                    <td className={`px-4 py-3 text-gray-700 ${row.winner === 'junk' ? 'font-semibold text-blue-700' : ''}`}>
                      {row.winner === 'junk' && <span className="mr-1">✓</span>}
                      {row.junk}
                    </td>
                    <td className="px-4 py-3 text-gray-500 text-xs hidden md:table-cell">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Pros and cons */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Pros & Cons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">🗑️</span> Dumpster Rental
              </h3>
              <div className="space-y-2 mb-5">
                {DUMPSTER_PROS.map((p) => (
                  <div key={p} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                    {p}
                  </div>
                ))}
              </div>
              <div className="space-y-2">
                {DUMPSTER_CONS.map((c) => (
                  <div key={c} className="flex items-start gap-2 text-sm text-gray-500">
                    <XCircle className="h-4 w-4 text-red-400 shrink-0 mt-0.5" />
                    {c}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">🚛</span> Junk Removal
              </h3>
              <div className="space-y-2 mb-5">
                {JUNK_PROS.map((p) => (
                  <div key={p} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                    {p}
                  </div>
                ))}
              </div>
              <div className="space-y-2">
                {JUNK_CONS.map((c) => (
                  <div key={c} className="flex items-start gap-2 text-sm text-gray-500">
                    <XCircle className="h-4 w-4 text-red-400 shrink-0 mt-0.5" />
                    {c}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Use case guide */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Which Should You Choose? (By Scenario)</h2>
          <p className="text-gray-500 text-sm mb-6">Use this quick-reference guide to find the right option for your specific situation.</p>
          <div className="space-y-3">
            {USE_CASES.map((uc) => (
              <div key={uc.scenario} className="rounded-xl border border-gray-200 bg-white p-4 flex flex-col sm:flex-row sm:items-center gap-3">
                <div className="sm:w-56 shrink-0">
                  <span className="text-sm font-semibold text-gray-900">{uc.scenario}</span>
                </div>
                <div className={`shrink-0 px-3 py-1 rounded-full text-xs font-bold ${
                  uc.color === 'green' ? 'bg-green-100 text-green-700' :
                  uc.color === 'blue' ? 'bg-blue-100 text-blue-700' :
                  'bg-amber-100 text-amber-700'
                }`}>
                  {uc.recommendation}
                </div>
                <p className="text-sm text-gray-500 flex-1">{uc.reason}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Cost breakdown */}
        <section className="rounded-2xl border border-gray-200 bg-white p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Cost Comparison: Real Numbers</h2>
          <p className="text-gray-500 text-sm mb-6">Estimated costs for common project types, so you can compare apples to apples.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left pb-3 font-semibold text-gray-700">Project</th>
                  <th className="text-left pb-3 font-semibold text-green-700">Dumpster Rental</th>
                  <th className="text-left pb-3 font-semibold text-blue-700">Junk Removal</th>
                  <th className="text-left pb-3 font-semibold text-gray-500 hidden sm:table-cell">Best Value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { project: 'Single room cleanout', dumpster: '$275–$350 (10-yd)', junk: '$150–$350', best: 'Tie' },
                  { project: 'Garage cleanout', dumpster: '$275–$400 (10-yd)', junk: '$300–$600', best: 'Dumpster' },
                  { project: 'Full home cleanout', dumpster: '$375–$500 (20-yd)', junk: '$600–$1,500+', best: 'Dumpster' },
                  { project: 'Kitchen renovation', dumpster: '$325–$450 (15-yd)', junk: '$400–$900', best: 'Dumpster' },
                  { project: '1–2 large items', dumpster: '$275+ (minimum rental)', junk: '$100–$250', best: 'Junk Removal' },
                  { project: 'Roof tearoff (1,500 sq ft)', dumpster: '$275–$400 (10-yd)', junk: '$500–$900', best: 'Dumpster' },
                ].map((row) => (
                  <tr key={row.project} className="hover:bg-gray-50">
                    <td className="py-3 font-medium text-gray-800">{row.project}</td>
                    <td className="py-3 text-gray-600">{row.dumpster}</td>
                    <td className="py-3 text-gray-600">{row.junk}</td>
                    <td className={`py-3 font-semibold text-xs hidden sm:table-cell ${
                      row.best === 'Dumpster' ? 'text-green-700' :
                      row.best === 'Junk Removal' ? 'text-blue-700' : 'text-gray-500'
                    }`}>{row.best}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Internal links */}
        <section className="rounded-xl border border-gray-100 bg-gray-50 p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Helpful Calculators & Guides</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: 'Dumpster Size Estimator', href: '/dumpster-size-estimator', desc: 'Find the right size for your project' },
              { label: 'Cubic Yard Calculator', href: '/cubic-yard-calculator', desc: 'Calculate how much debris you have' },
              { label: 'How Much Does Dumpster Rental Cost?', href: '/how-much-does-dumpster-rental-cost', desc: 'Full pricing breakdown by size and region' },
              { label: 'What Can You Put in a Dumpster?', href: '/what-can-you-put-in-a-dumpster', desc: 'Allowed and prohibited items list' },
            ].map((link) => (
              <Link key={link.href} href={link.href}
                className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-3 hover:border-green-300 transition group">
                <ArrowRight className="h-4 w-4 text-green-500 shrink-0 mt-0.5 group-hover:translate-x-0.5 transition-transform" />
                <div>
                  <div className="text-sm font-semibold text-gray-900">{link.label}</div>
                  <div className="text-xs text-gray-500">{link.desc}</div>
                </div>
              </Link>
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

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Related Guides & Calculators</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: 'Dumpster Size Guide', href: '/dumpster-sizes' },
              { label: 'Dumpster Rental Cost Guide', href: '/dumpster-rental-cost' },
              { label: 'Weight Limit Calculator', href: '/dumpster-weight-limit-calculator' },
              { label: 'What Can You Put in a Dumpster?', href: '/what-can-you-put-in-a-dumpster' },
              { label: 'Do You Need a Permit?', href: '/dumpster-rental-permit' },
              { label: 'How Long Can You Keep a Dumpster?', href: '/how-long-can-you-keep-a-rental-dumpster' },
            ].map((link) => (
              <Link key={link.href} href={link.href}
                className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-700 hover:text-green-700 hover:border-green-200 transition">
                <ArrowRight className="h-3.5 w-3.5 text-gray-400 shrink-0" />
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        <section className="rounded-2xl bg-gradient-to-r from-green-700 to-green-700 p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Ready to Rent a Dumpster?</h2>
          <p className="text-green-100 mb-6 max-w-xl mx-auto">Compare local dumpster rental companies and get free quotes in minutes.</p>
          <Link href="/dumpster-rental"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 font-bold text-green-700 hover:bg-green-50 transition">
            Find Local Companies <ArrowRight className="h-5 w-5" />
          </Link>
        </section>
      </div>
    </>
  )
}