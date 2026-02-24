import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle, AlertTriangle, HardHat, DollarSign, Wrench } from 'lucide-react'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Dumpster Rental for Contractors: Commercial & Bulk Options | DumpsterListing',
  description:
    'Commercial dumpster rental for contractors — bulk pricing, recurring rentals, weight capacity, approved debris types, and how to set up an account with local haulers.',
  alternates: { canonical: '/dumpster-rental-for-contractors' },
  openGraph: {
    title: 'Dumpster Rental for Contractors: Commercial & Bulk Options | DumpsterListing',
    description:
      'Commercial dumpster rental for contractors — bulk pricing, recurring rentals, weight capacity, approved debris types, and how to set up an account with local haulers.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What size dumpster do contractors typically use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The right size depends on the type of work. Roofing contractors typically use 10 to 15-yard dumpsters because shingles are heavy and hit weight limits before filling the volume. Renovation and remodel crews generally use 20 to 30-yard containers. New construction and demolition projects typically require 30 to 40-yard dumpsters, sometimes multiple units running simultaneously. Light commercial remodels usually fall in the 15 to 20-yard range. Always prioritize weight limit over volume for construction debris — density matters more than cubic yards for heavy materials.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I get a contractor discount on dumpster rental?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — most regional and local haulers offer contractor pricing that differs from the rates they quote residential customers. The key is asking specifically for contractor or commercial rates and being willing to set up a formal account. Volume discounts typically kick in at 5 or more rentals per month. Net-30 billing, priority scheduling, and dedicated account reps are common perks of commercial accounts with Waste Management, Republic Services, Waste Connections, and regional operators. The best rates come from building an ongoing relationship with a local hauler rather than booking one-off rentals.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do weight limits work for construction debris?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Construction debris — concrete, drywall, roofing shingles, brick, and masonry — is substantially denser than household junk. A standard residential dumpster rental includes 1 to 2 tons of weight, while construction-grade containers offer 3 to 5 ton allowances. Overage fees of $60 to $100 per ton apply when you exceed the included weight. Concrete alone weighs approximately 4,000 pounds per cubic yard — a small pile can exceed the weight limit of a 10-yard container within a few loads. Always ask your hauler: "What is the weight limit and what is the overage rate?" before loading heavy materials.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I rent multiple dumpsters for a large project?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — running multiple containers simultaneously is standard practice for large construction projects, new builds, and commercial demolition. Some contractors use separate containers for different debris types (concrete in one, mixed C&D debris in another, clean wood in a third) to minimize tipping fees. Most haulers who work with contractors offer bulk scheduling and can coordinate multiple simultaneous deliveries. Discuss your full project scope upfront so the hauler can ensure fleet availability throughout your timeline.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is dumpster rental tax deductible for contractors?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Dumpster rental is a deductible business expense for contractors, generally falling under the equipment or tool rental category on Schedule C or your business tax return. If you bill dumpster rental costs to client projects, document each rental with the project name, dates, and purpose to support accurate job costing and clear expense records. Keep all invoices and receipts. Consult your tax professional for specifics on deductibility in your jurisdiction — rules for pass-through entities, LLCs, and S-corps vary.',
      },
    },
    {
      '@type': 'Question',
      name: "What's the difference between residential and commercial dumpster rental?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Commercial dumpster rental differs from residential in several important ways. Commercial accounts typically involve net-30 billing rather than upfront payment, volume discounts for regular rentals, higher weight allowances for construction-grade debris, priority scheduling (especially important when project timelines are tight), and access to swap-out service for long-duration projects. Commercially-oriented haulers also carry more 30 and 40-yard containers and are better equipped to handle dense C&D debris mixes. Residential rentals are simpler and cheaper per transaction, but lack the account structure and flexibility contractors need at scale.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Dumpster Rental for Contractors & Construction Projects',
  description:
    'Commercial dumpster rental for contractors — bulk pricing, recurring rentals, weight capacity, approved debris types, and how to set up an account with local haulers.',
  datePublished: '2026-02-24',
  dateModified: '2026-02-24',
  author: { '@type': 'Organization', name: 'DumpsterListing', url: 'https://dumpsterlisting.com' },
  publisher: { '@type': 'Organization', name: 'DumpsterListing', url: 'https://dumpsterlisting.com' },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://dumpsterlisting.com/dumpster-rental-for-contractors',
  },
}

const SIZE_BY_PROJECT = [
  {
    projectType: 'Roofing (any size)',
    recommendedSize: '10–15 yard',
    why: 'Shingles are extremely heavy — weight limits fill before volume does. A 10-yard container holds a full tear-off on most residential roofs. Go 15-yard for commercial or steep-pitch jobs over 3,000 sq ft.',
    weightNote: 'Weight-limited, not volume-limited',
  },
  {
    projectType: 'Light commercial remodel',
    recommendedSize: '15–20 yard',
    why: 'Interior finishes, drywall, flooring, and fixtures. Usually mixed light debris with manageable weight.',
    weightNote: 'Standard weight limits usually adequate',
  },
  {
    projectType: 'Renovation & remodel',
    recommendedSize: '20–30 yard',
    why: 'Multi-room work generating drywall, lumber, cabinetry, and flooring. Volume and weight both factor in.',
    weightNote: 'Watch for weight if tile or concrete is involved',
  },
  {
    projectType: 'New construction',
    recommendedSize: '30–40 yard',
    why: 'Lumber scraps, drywall, packaging, concrete, and mixed C&D debris accumulate quickly on new builds.',
    weightNote: 'Use separate container for concrete/masonry',
  },
  {
    projectType: 'Demolition',
    recommendedSize: '30–40 yard',
    why: 'High volume plus high weight. Full structural demolition often requires multiple containers or swap-out service.',
    weightNote: 'Consider commercial-grade 3–5 ton limit containers',
  },
]

const DEBRIS_CONTAINERS = [
  {
    type: 'Mixed C&D Debris',
    description:
      'Standard construction and demolition debris — drywall, lumber, metal, packaging, flooring, and general site waste. The default container type for most contractor projects.',
    tip: 'Most haulers accept standard C&D without a separate manifest. Confirm prohibited materials (no hazmat, no asbestos, no regulated waste).',
  },
  {
    type: 'Concrete & Masonry Only',
    description:
      'A dedicated container for concrete, brick, block, and masonry. Tipping fees for clean concrete are significantly lower than mixed debris — often $20–$40/ton vs. $60–$100/ton for mixed loads.',
    tip: 'If you have significant concrete volume, separating it into a dedicated container is almost always the cheaper option.',
  },
  {
    type: 'Clean Wood',
    description:
      'Unpainted, untreated lumber and dimensional wood. Many processors accept clean wood for chipping and recycling at low or no tipping fees.',
    tip: 'Keep metal fasteners out where possible. Ask your hauler if they have a clean wood recycler in your market.',
  },
  {
    type: 'Cardboard & Packaging',
    description:
      'On large commercial builds, packaging waste can fill containers fast. Many haulers and recycling centers take cardboard at no charge or very low tipping fees.',
    tip: 'Bale or flatten cardboard to maximize container efficiency if you do not have a dedicated recycling pickup.',
  },
  {
    type: 'Hazardous Materials',
    description:
      'Asbestos-containing materials, lead paint debris, contaminated soil, and other regulated waste cannot go in a standard roll-off. These require a licensed hazmat hauler like Clean Harbors.',
    tip: 'Check with your local EPA office for regulations on C&D waste containing regulated materials. Non-compliance carries significant fines.',
  },
]

const ACCOUNT_BENEFITS = [
  {
    benefit: 'Net-30 billing',
    detail:
      'Pay invoices monthly rather than per delivery. Simplifies job-cost accounting and cash flow management on multi-project schedules.',
  },
  {
    benefit: 'Volume discounts',
    detail:
      'Most haulers offer tiered pricing — the more rentals per month, the lower the per-unit rate. Ask what the threshold is for tier upgrades (often 5–10 rentals/month).',
  },
  {
    benefit: 'Priority scheduling',
    detail:
      'Commercial accounts typically get first access to fleet availability. On busy weeks, this can mean the difference between a container delivered Monday and one delivered Friday.',
  },
  {
    benefit: 'Dedicated account rep',
    detail:
      'One point of contact who knows your projects and can coordinate multiple simultaneous deliveries. Worth more than it sounds on complex job sites.',
  },
  {
    benefit: 'Swap-out service',
    detail:
      'For long-duration projects, the hauler empties and returns your container without ending the rental. Critical for 60+ day builds where you cannot afford downtime waiting for a new container.',
  },
  {
    benefit: 'Higher weight allowances',
    detail:
      'Commercial accounts often unlock 3–5 ton limit containers versus the 1–2 ton standard in residential quotes. Essential for concrete, roofing, and structural demolition debris.',
  },
]

const OSHA_TIPS = [
  'Position dumpsters so they do not block emergency vehicle access routes or fire lanes',
  'Maintain clear sight lines for equipment operators — dumpsters should not create blind spots near moving machinery',
  'Do not place containers under overhead power lines (minimum 10 ft clearance required)',
  'Ensure the container rests on a stable, level surface — avoid placement on soft ground that could shift under load',
  'Mark the container perimeter with warning tape or cones when adjacent to active work zones',
  'Do not overfill above the top of the container walls — debris must not protrude beyond the container opening during transport',
]

const HAULER_TIPS = [
  {
    tip: 'Ask for contractor rates specifically',
    detail:
      'Never accept the first quote without asking: "Do you have contractor or commercial pricing?" Many companies have a separate rate sheet they don\'t volunteer upfront.',
  },
  {
    tip: 'Get quotes from 2–3 local operators',
    detail:
      'Local haulers consistently beat national chain prices for contractors, often by 15–25%. Angi and HomeAdvisor can surface local options, but also search directly by city and service type.',
  },
  {
    tip: 'Build a relationship before you need it urgently',
    detail:
      'A reliable hauler on speed dial — one who knows your job sites and billing preferences — is worth more than saving $20 per rental. Loyalty is often rewarded with better service when schedules get tight.',
  },
  {
    tip: 'Discuss your full project pipeline upfront',
    detail:
      'Tell the hauler about all active and upcoming projects. They can block fleet capacity, set up a billing structure, and ensure you are never scrambling for a container at the start of a job.',
  },
  {
    tip: 'Clarify what counts as mixed C&D vs. regulated waste',
    detail:
      'Rules vary by market and hauler. Confirm exactly what debris types are accepted in your standard commercial container to avoid refusals at the landfill — which result in the load being returned to your job site.',
  },
]

const RELATED_GUIDES = [
  { label: 'How Much Does Dumpster Rental Cost?', href: '/dumpster-rental-cost' },
  { label: 'Roll-Off Dumpster Sizes Guide', href: '/roll-off-dumpster-sizes' },
  { label: 'Dumpster Weight Limit Calculator', href: '/dumpster-weight-limit-calculator' },
  { label: 'What Can You Put in a Dumpster?', href: '/what-can-you-put-in-a-dumpster' },
  { label: 'Do You Need a Permit?', href: '/dumpster-rental-permit' },
  { label: 'Find Dumpsters Near Me', href: '/dumpster-rental-near-me' },
]

export default function DumpsterRentalForContractorsPage() {
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
              { label: 'Dumpster Rental for Contractors' },
            ]}
          />
          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900">
            Dumpster Rental for Contractors &amp; Construction Projects
          </h1>
          <p className="mt-3 max-w-3xl text-gray-600 leading-relaxed">
            Contractor dumpster rental is not the same as calling for a residential cleanout bin. Commercial
            work involves heavier debris, longer or recurring rental periods, multiple simultaneous containers,
            and the kind of account structure that makes job-cost accounting and cash flow manageable. This
            guide covers everything a contractor needs — right-sizing by project type, weight limits, commercial
            account setup, debris separation strategies, and how to find the haulers who serve your market well.
          </p>
          <div className="mt-6">
            <Link
              href="/dumpster-rental-near-me"
              className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-6 py-3 font-bold text-white hover:bg-green-700 transition"
            >
              Find Contractor Dumpster Rental Near You
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
          <div className="xl:col-span-2 space-y-12">

            {/* Section 1: Why Contractor Rental Is Different */}
            <section>
              <div className="flex items-center gap-2 mb-2">
                <HardHat className="h-5 w-5 text-green-600" />
                <h2 className="text-2xl font-bold text-gray-900">
                  Why Contractor Dumpster Rental Is Different
                </h2>
              </div>
              <div className="text-gray-600 space-y-3 leading-relaxed">
                <p>
                  Residential dumpster rental is transactional — you book a bin, fill it, and the hauler
                  picks it up. Contractor rental is a working relationship. The differences in scope are
                  significant:
                </p>
                <ul className="space-y-2.5 mt-3">
                  {[
                    {
                      point: 'Heavier debris',
                      detail:
                        'Concrete, drywall, roofing shingles, masonry, and structural materials are far denser than household junk. Weight limits — not cubic yards — are often the binding constraint on contractor jobs.',
                    },
                    {
                      point: 'Longer or recurring rental periods',
                      detail:
                        'A new construction project might run 6–18 months. An active remodeler may need a fresh container on a new job site every week. Standard 7-day residential rentals do not fit this cadence.',
                    },
                    {
                      point: 'Multiple simultaneous containers',
                      detail:
                        'Large projects separate debris by type — concrete, clean wood, mixed C&D — to minimize tipping fees. Running multiple containers at once requires a hauler with fleet depth and reliable scheduling.',
                    },
                    {
                      point: 'Bulk pricing matters at scale',
                      detail:
                        'A contractor renting 20 dumpsters per month has real pricing leverage that a homeowner booking one never has. Commercial accounts unlock net-30 billing, volume discounts, and priority scheduling.',
                    },
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <div className="text-sm">
                        <strong className="text-gray-900">{item.point}: </strong>
                        <span className="text-gray-600">{item.detail}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Section 2: Right Size by Project */}
            <section>
              <div className="flex items-center gap-2 mb-2">
                <Wrench className="h-5 w-5 text-green-600" />
                <h2 className="text-2xl font-bold text-gray-900">
                  Best Dumpster Sizes by Project Type
                </h2>
              </div>
              <p className="text-gray-600 mb-5 leading-relaxed">
                The right container is determined by both volume and weight. Construction debris is often
                weight-limited before it is volume-limited. The table below reflects contractor-grade
                recommendations — not the upsell-prone guidance on national chain booking pages.
              </p>
              <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="text-left px-4 py-3 font-semibold text-gray-700">Project Type</th>
                      <th className="text-left px-4 py-3 font-semibold text-gray-700">Recommended Size</th>
                      <th className="text-left px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">Weight Note</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {SIZE_BY_PROJECT.map((row) => (
                      <tr key={row.projectType} className="hover:bg-gray-50 transition-colors align-top">
                        <td className="px-4 py-3 font-semibold text-gray-900">{row.projectType}</td>
                        <td className="px-4 py-3 font-bold text-green-700">{row.recommendedSize}</td>
                        <td className="px-4 py-3 text-gray-600 hidden md:table-cell">{row.weightNote}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-5 space-y-3">
                {SIZE_BY_PROJECT.map((row) => (
                  <div
                    key={row.projectType}
                    className="rounded-xl border border-gray-200 bg-white overflow-hidden"
                  >
                    <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100 bg-gray-50">
                      <h3 className="font-bold text-gray-900">{row.projectType}</h3>
                      <span className="text-sm font-extrabold text-green-700">{row.recommendedSize}</span>
                    </div>
                    <div className="px-5 py-3 text-sm text-gray-600">
                      <p className="mb-1 leading-relaxed">{row.why}</p>
                      <p>
                        <span className="font-medium text-gray-800">Weight note:</span> {row.weightNote}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-gray-600 bg-gray-50 rounded-lg p-4 border border-gray-200">
                <strong>Key rule for contractors:</strong> Always ask your hauler for the weight limit in tons,
                not just the container size in cubic yards. For heavy materials, a smaller container with a higher
                weight allowance beats a larger container that charges overage fees on every load.
              </p>
            </section>

            {/* Section 3: Weight Limits */}
            <section className="rounded-xl border border-green-200 bg-green-50 p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Weight Limits Matter More for Contractors
              </h2>
              <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                This is the single most important thing contractors need to understand about dumpster rental
                that residential customers rarely encounter. Construction debris is dense. Standard quotes
                are calibrated for household junk — they will not survive a roofing job or concrete pour.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                <div className="rounded-xl border border-green-200 bg-white p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">Standard Residential Container</h3>
                  <p className="text-2xl font-extrabold text-green-700 mb-1">1–2 tons</p>
                  <p className="text-sm text-gray-600">
                    Default weight allowance on a 10–20 yard residential rental. Perfectly adequate for
                    furniture, drywall scraps, and household junk. Will be exceeded quickly by concrete,
                    roofing, or masonry.
                  </p>
                </div>
                <div className="rounded-xl border border-green-200 bg-white p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">Commercial/Construction Container</h3>
                  <p className="text-2xl font-extrabold text-green-700 mb-1">3–5 tons</p>
                  <p className="text-sm text-gray-600">
                    Available from many regional haulers on contractor accounts. Essential for roofing,
                    concrete, masonry, and structural demolition debris. Ask specifically for a
                    &ldquo;construction-grade&rdquo; or &ldquo;heavy debris&rdquo; container.
                  </p>
                </div>
              </div>
              <div className="rounded-lg border border-green-200 bg-white p-4">
                <h3 className="font-semibold text-gray-900 mb-2 text-sm">Weight Reference for Common Materials</h3>
                <div className="space-y-1.5">
                  {[
                    { material: 'Concrete', weight: '~4,000 lb/cubic yard' },
                    { material: 'Asphalt shingles', weight: '~750–1,000 lb/square (100 sq ft)' },
                    { material: 'Drywall (5/8 in)', weight: '~2.5 lb/sq ft' },
                    { material: 'Mixed C&D debris', weight: '~400–800 lb/cubic yard' },
                    { material: 'Household furniture/junk', weight: '~200–300 lb/cubic yard' },
                  ].map((item) => (
                    <div key={item.material} className="flex items-center justify-between text-sm">
                      <span className="text-gray-700">{item.material}</span>
                      <span className="font-semibold text-gray-900">{item.weight}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-3 text-xs text-gray-400">
                  Overage fees of $60–$100 per ton apply when you exceed the included weight limit.
                  On a concrete-heavy job, this adds up fast.{' '}
                  <Link href="/dumpster-weight-limit-calculator" className="text-green-600 hover:underline">
                    Use the weight limit calculator.
                  </Link>
                </p>
              </div>
            </section>

            {/* Section 4: Commercial Account Setup */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                How to Set Up a Commercial Dumpster Account
              </h2>
              <p className="text-gray-600 mb-5 leading-relaxed">
                If you are renting more than 3–4 dumpsters per month, you should be on a commercial account
                — not booking one-off residential rentals. Most regional haulers and all major national
                operators (Waste Management, Republic Services, Waste Connections) have structured commercial
                programs. Here is what to ask for and what to expect.
              </p>
              <div className="space-y-3">
                {ACCOUNT_BENEFITS.map((item) => (
                  <div
                    key={item.benefit}
                    className="flex gap-3 rounded-xl border border-gray-200 bg-white p-4"
                  >
                    <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm">{item.benefit}</h3>
                      <p className="text-sm text-gray-600 mt-0.5 leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-lg border border-gray-200 bg-gray-50 p-4">
                <p className="text-sm text-gray-700 leading-relaxed">
                  <strong>When you call to set up an account, ask specifically:</strong> What is the monthly
                  spend threshold for volume discounts? Do you offer net-30 billing? What weight limits are
                  available on commercial containers? Can you accommodate swap-out service on multi-month
                  projects? What is the overage fee per ton?
                </p>
              </div>
            </section>

            {/* Section 5: Debris Types */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Debris Types &amp; When to Use Separate Containers
              </h2>
              <p className="text-gray-600 mb-5 leading-relaxed">
                Mixing debris types is convenient but expensive. Tipping fees for mixed C&D debris at
                landfills are significantly higher than for source-separated clean materials. Contractors
                who manage separate containers for concrete, clean wood, and mixed debris typically reduce
                disposal costs by 20–40% on large projects.
              </p>
              <div className="space-y-4">
                {DEBRIS_CONTAINERS.map((item) => (
                  <div
                    key={item.type}
                    className={`rounded-xl border p-5 ${
                      item.type === 'Hazardous Materials'
                        ? 'border-red-200 bg-red-50'
                        : 'border-gray-200 bg-white'
                    }`}
                  >
                    <h3 className="font-semibold text-gray-900 mb-1">{item.type}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-2">{item.description}</p>
                    <div className="flex items-start gap-2">
                      <span className="text-green-600 font-bold text-xs mt-0.5">TIP</span>
                      <p className="text-xs text-gray-500 leading-relaxed">{item.tip}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-gray-600 bg-gray-50 rounded-lg p-4 border border-gray-200">
                <strong>EPA note:</strong> Regulated C&D waste — including asbestos-containing materials,
                lead paint debris, and contaminated soil — is subject to strict EPA regulations and cannot
                be disposed of in standard roll-off containers. Violations carry significant civil and
                criminal penalties. Licensed hazmat haulers like Clean Harbors handle regulated materials.
                When in doubt, test before you demo.
              </p>
            </section>

            {/* Section 6: Tax */}
            <section className="rounded-xl border border-green-200 bg-green-50 p-6">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="h-5 w-5 text-green-600" />
                <h2 className="text-xl font-bold text-gray-900">
                  Tax Deductibility for Contractors
                </h2>
              </div>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                Dumpster rental is a deductible business expense. Here is what to do to capture it correctly:
              </p>
              <ul className="space-y-3">
                {[
                  {
                    point: 'Category: Equipment or tool rental',
                    detail:
                      'Report dumpster rental under equipment rental on Schedule C or your business return. Some accountants categorize it under "Other expenses" — either is defensible.',
                  },
                  {
                    point: 'Per-project documentation',
                    detail:
                      'If you bill dumpster costs to client projects, document each rental with the project name, dates of service, and job address. This supports accurate job costing and clean client billing.',
                  },
                  {
                    point: 'Keep all invoices',
                    detail:
                      'A commercial account with net-30 billing makes this easier — you receive itemized monthly invoices that are audit-ready. One-off residential receipts require more manual record-keeping.',
                  },
                  {
                    point: 'Consult your tax professional',
                    detail:
                      'Deductibility rules vary by entity type (LLC, S-corp, sole proprietor). State and local rules also vary. The above is general guidance — confirm specifics with your CPA.',
                  },
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{item.point}</p>
                      <p className="text-sm text-gray-600 mt-0.5 leading-relaxed">{item.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            {/* Section 7: OSHA */}
            <section className="rounded-xl border border-amber-200 bg-amber-50 p-6">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="h-5 w-5 text-amber-600" />
                <h2 className="text-xl font-bold text-gray-900">
                  OSHA &amp; Job Site Safety for Dumpster Placement
                </h2>
              </div>
              <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                Dumpster placement on construction sites is a safety issue, not just a logistics one. OSHA
                general industry and construction standards apply to how and where containers are placed.
                Violations can result in citations during site inspections.
              </p>
              <ul className="space-y-2.5">
                {OSHA_TIPS.map((tip, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-amber-600 font-bold shrink-0 mt-0.5">&#9654;</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </section>

            {/* Section 8: Recurring Rental */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Recurring &amp; Long-Duration Rentals: Swap-Out Service
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                For projects running 60 days or longer — commercial builds, multi-unit renovations,
                large new construction — swap-out service is the standard solution. Rather than formally
                ending the rental and booking a new container (with new delivery fees each time), your hauler
                empties the container and returns it to the same location.
              </p>
              <div className="space-y-3">
                {[
                  {
                    title: 'How swap-out pricing works',
                    detail:
                      'You pay a per-pull fee each time the container is emptied and returned — typically $150–$350 per pull depending on weight and market. This is lower than ending and restarting a rental, which incurs full delivery and pickup fees.',
                  },
                  {
                    title: 'When to request swap-out service',
                    detail:
                      'Discuss this at account setup, not mid-project. Haulers need to factor it into route planning. Ask: "Do you offer swap-out service for projects over 60 days, and what is the pull fee?"',
                  },
                  {
                    title: 'Scheduling pull requests',
                    detail:
                      'Most contractors track container fill level and schedule a pull 1–2 days before the container is full. Calling with a full container and demanding same-day pickup is possible but may carry a rush fee.',
                  },
                  {
                    title: 'Multi-site project management',
                    detail:
                      'If you run multiple active job sites simultaneously, a hauler with a dedicated account rep can coordinate schedules across sites. This is significantly harder to manage with one-off rentals from multiple companies.',
                  },
                ].map((item, i) => (
                  <div key={i} className="rounded-xl border border-gray-200 bg-white p-4">
                    <h3 className="font-semibold text-gray-900 text-sm mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 9: Finding the Right Hauler */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                How to Find the Right Hauler for Contractor Work
              </h2>
              <p className="text-gray-600 mb-5 leading-relaxed">
                The hauler relationship is one of the most underrated logistics assets a contractor can have.
                A reliable company on speed dial — one that can deliver next morning, accommodate urgent pulls,
                and handle your billing properly — is worth far more than the cheapest one-off quote.
              </p>
              <div className="space-y-4">
                {HAULER_TIPS.map((item, i) => (
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
                Contractor Dumpster Rental FAQs
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
              <h2 className="text-xl font-bold text-gray-900 mb-4">Related Guides &amp; Calculators</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {RELATED_GUIDES.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-700 hover:text-green-600 hover:border-green-200 transition"
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
                Find Contractor Dumpster Rental Near You
              </h2>
              <p className="text-gray-600 mb-6 max-w-xl mx-auto">
                Compare local and regional haulers who offer commercial accounts, bulk pricing, and
                construction-grade weight limits. Get connected with operators who understand contractor needs.
              </p>
              <Link
                href="/dumpster-rental-near-me"
                className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-8 py-3.5 font-bold text-white hover:bg-green-700 transition"
              >
                Find Local Commercial Options <ArrowRight className="h-5 w-5" />
              </Link>
            </section>

          </div>

          {/* Sidebar */}
          <aside className="space-y-5">

            {/* Quick CTA */}
            <div className="rounded-xl border border-green-200 bg-green-50 p-6">
              <h3 className="font-bold text-gray-900 text-lg mb-1">Get Contractor Pricing</h3>
              <p className="text-sm text-gray-600 mb-4">
                Commercial accounts unlock volume discounts, priority scheduling, and net-30 billing.
                Find haulers who serve contractors in your area.
              </p>
              <Link
                href="/dumpster-rental-near-me"
                className="block w-full rounded-lg bg-green-600 py-3 text-center font-bold text-white hover:bg-green-700 transition"
              >
                Find Commercial Haulers
              </Link>
            </div>

            {/* Size quick reference */}
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <h3 className="font-bold text-gray-900 mb-3">Quick Size Reference</h3>
              <div className="space-y-2">
                {SIZE_BY_PROJECT.map((row) => (
                  <div key={row.projectType} className="flex items-start justify-between text-sm gap-2">
                    <span className="text-gray-700">{row.projectType}</span>
                    <span className="font-semibold text-green-700 shrink-0">{row.recommendedSize}</span>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-xs text-gray-400">
                Weight limit is often the binding constraint — not volume.
              </p>
            </div>

            {/* Account setup checklist */}
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <h3 className="font-bold text-gray-900 mb-3">Commercial Account Checklist</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {[
                  'Asked for contractor/commercial rate',
                  'Confirmed net-30 billing availability',
                  'Asked about volume discount thresholds',
                  'Confirmed weight limits (3–5 ton options)',
                  'Discussed swap-out service for long jobs',
                  'Clarified accepted debris types',
                  'Got quotes from 2–3 haulers',
                  'Established a dedicated account rep',
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
                {RELATED_GUIDES.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center gap-2 text-gray-700 hover:text-green-600 transition group"
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
