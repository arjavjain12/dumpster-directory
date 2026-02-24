import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  CheckCircle,
  Home,
  Wrench,
  Leaf,
  Trash2,
  HardHat,
  Package,
} from 'lucide-react'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Small Dumpster Rental — 10 & 15 Yard Options Near You (2026)',
  description:
    'Rent a small dumpster for home cleanouts, bathroom remodels, and small roofing jobs. Compare 10-yard and 15-yard roll-off options, pricing ($200–$425), dimensions, and find small dumpster rental near you.',
  alternates: { canonical: '/small-dumpster-rental' },
  openGraph: {
    title: 'Small Dumpster Rental — 10 & 15 Yard Options Near You (2026)',
    description:
      'Compare 10-yard and 15-yard small dumpster rentals. Pricing, dimensions, use cases, and how to find one near you.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "What's the smallest dumpster I can rent?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The smallest standard roll-off dumpster available from most rental companies is a 10-yard container. It measures approximately 12 ft long × 7.5 ft wide × 3.5 ft tall and holds the equivalent of 3–4 pickup truck loads of debris. Some companies in dense urban markets offer mini dumpsters (2–6 yards), but the 10-yard is the most widely available small option across the country.",
      },
    },
    {
      '@type': 'Question',
      name: 'Will a small dumpster fit in my driveway?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "A 10-yard dumpster (12 ft long × 7.5 ft wide) fits in most standard residential driveways. You'll need roughly 60 ft of clearance from the street — 12 ft for the container itself plus safe delivery room for the truck. Also check for low-hanging tree branches or utility lines (need at least 18 ft of vertical clearance) and avoid soft ground that may sink under the weight. A 15-yard dumpster at 14 ft long has the same width and needs only slightly more length.",
      },
    },
    {
      '@type': 'Question',
      name: 'How long can I keep a small dumpster?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Standard small dumpster rentals include a 7 to 14-day rental period, depending on the company. Most home projects — bathroom remodels, garage cleanouts, single-room renovations — wrap up within a week. If you need more time, companies typically charge $5–$15 per additional day. Ask about the extension policy before booking, especially if your project timeline is uncertain.",
      },
    },
    {
      '@type': 'Question',
      name: "What can't I put in a small dumpster?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Items prohibited in virtually all roll-off dumpsters include: hazardous materials (paint, solvents, pesticides, motor oil), batteries, tires, appliances containing refrigerants (refrigerators, AC units), electronics (TVs, computers), medical waste, and flammable liquids. Concrete, asphalt, and dirt are technically allowed in small dumpsters but are very heavy — they can exceed weight limits even when the container is only half-full. Always confirm what's included in your weight allowance before loading heavy materials.",
      },
    },
  ],
}

const USE_CASES = [
  {
    icon: Home,
    title: 'Single Room Cleanout',
    detail:
      'Clearing out a bedroom, basement section, or living room full of old furniture and clutter fits easily in a 10-yard container.',
  },
  {
    icon: Package,
    title: 'Garage Cleanout',
    detail:
      'Years of accumulated tools, boxes, sporting equipment, and broken appliances. A 10-yard handles most standard two-car garage cleanouts.',
  },
  {
    icon: Wrench,
    title: 'Small Bathroom or Kitchen Remodel',
    detail:
      'Demo debris from a bathroom — tile, drywall, a vanity, toilet, and fixtures — fits in a 10-yard. A kitchen remodel with cabinets and counters typically needs a 15-yard.',
  },
  {
    icon: HardHat,
    title: 'Roofing Shingles (Small Area)',
    detail:
      'A detached garage or small shed roof (under 1,000 sq ft) generates enough shingle weight for a 10 or 15-yard. Shingles are dense — confirm weight limits first.',
  },
  {
    icon: Leaf,
    title: 'Yard Debris & Landscaping',
    detail:
      'Brush, branches, sod, and landscape materials are bulky but light. A 10-yard dumpster can hold a significant amount of yard waste from a seasonal cleanout.',
  },
  {
    icon: Trash2,
    title: 'Estate Cleanout',
    detail:
      'Clearing a loved one\'s home of furniture, clothing, and household items often fits in one or two small dumpsters, making a 15-yard the practical choice.',
  },
]

const COMPARISON_ROWS = [
  {
    label: 'Size',
    small: '10–15 yards',
    large: '20–40 yards',
  },
  {
    label: 'Capacity',
    small: '3–6 pickup truck loads',
    large: '6–16 pickup truck loads',
  },
  {
    label: 'Avg. Price',
    small: '$200–$425',
    large: '$375–$750',
  },
  {
    label: 'Best For',
    small: 'Single-room remodels, cleanouts, small roofing jobs',
    large: 'Whole-home remodels, new construction, large roofing jobs',
  },
  {
    label: 'Fits in Driveway?',
    small: 'Yes — most standard driveways',
    large: 'Usually, but tight for 30–40 yd',
  },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Small Dumpster Rental — 10 & 15 Yard Options Near You (2026)',
  description: 'Compare 10-yard and 15-yard small dumpster rentals. Pricing, dimensions, use cases, and how to find one near you.',
  datePublished: '2026-02-24',
  dateModified: '2026-02-24',
  author: { '@type': 'Organization', name: 'DumpsterListing', url: 'https://dumpsterlisting.com' },
  publisher: { '@type': 'Organization', name: 'DumpsterListing', url: 'https://dumpsterlisting.com' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://dumpsterlisting.com/small-dumpster-rental' },
}

export default function SmallDumpsterRentalPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Hero */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs
            crumbs={[
              { label: 'Home', href: '/' },
              { label: 'Dumpster Sizes', href: '/dumpster-sizes' },
              { label: 'Small Dumpster Rental' },
            ]}
          />
          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900">
            Small Dumpster Rental — Compact Roll-Off Bins for Home Projects
          </h1>
          <p className="mt-3 max-w-3xl text-gray-600 leading-relaxed">
            Small dumpsters — the{' '}
            <Link href="/dumpster-sizes/10-yard" className="text-green-600 font-medium hover:underline">
              10-yard
            </Link>{' '}
            and{' '}
            <Link href="/dumpster-sizes/15-yard" className="text-green-600 font-medium hover:underline">
              15-yard
            </Link>{' '}
            roll-off containers — are the right choice for the majority of residential projects. They
            fit in most driveways, cost significantly less than large containers, and are available
            from local companies across the country. Whether you&apos;re doing a bathroom remodel, clearing
            out a garage, or hauling yard debris, a compact roll-off can handle the job.
          </p>
          <div className="mt-6">
            <Link
              href="/dumpster-rental-near-me"
              className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-7 py-3.5 font-bold text-white hover:bg-green-700 transition"
            >
              Find a Small Dumpster Near Me <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Hero image */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="relative overflow-hidden rounded-2xl shadow-lg">
          <Image
            src="/images/small-dumpster-residential.jpg"
            alt="Small 10-yard dumpster rental in a residential driveway"
            width={1400}
            height={600}
            className="w-full h-72 sm:h-96 object-cover"
            priority
          />
          <div className="absolute bottom-4 left-4 bg-black/60 text-white text-sm font-medium px-3 py-1.5 rounded-lg backdrop-blur-sm">
            Compact dumpsters that fit in any driveway
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-14">

        {/* What is a Small Dumpster */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What Is a Small Dumpster?</h2>
          <div className="max-w-3xl text-gray-600 leading-relaxed space-y-3">
            <p>
              In the roll-off dumpster industry, &ldquo;small&rdquo; refers to containers in the 10 to 15-yard
              range. A{' '}
              <Link href="/dumpster-sizes/10-yard" className="text-green-600 font-medium hover:underline">
                10-yard dumpster
              </Link>{' '}
              is the most compact option widely available — measuring approximately{' '}
              <strong>12 ft long × 7.5 ft wide × 3.5 ft tall</strong> and holding around 3–4 pickup truck
              loads of material. It supports a weight limit of roughly <strong>2–3 tons</strong>, making it
              ideal for light debris like drywall, wood, furniture, and household junk.
            </p>
            <p>
              A{' '}
              <Link href="/dumpster-sizes/15-yard" className="text-green-600 font-medium hover:underline">
                15-yard dumpster
              </Link>{' '}
              steps up to <strong>14 ft long × 7.5 ft wide × 4 ft tall</strong> and holds 4–6 pickup truck
              loads, with weight limits typically between 2–4 tons. It&apos;s the sweet spot for kitchen
              remodels, flooring removal, and mid-size cleanout projects where a 10-yard might run short.
              Both sizes are narrow enough to fit through standard gates and short enough not to block sightlines
              in most neighborhoods.
            </p>
          </div>
        </section>

        {/* Size Cards */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">10-Yard vs. 15-Yard: Which Small Dumpster Do You Need?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* 10-yard card */}
            <div className="rounded-xl border border-gray-200 bg-white overflow-hidden hover:border-green-300 hover:shadow-md transition-all">
              <div className="bg-gray-50 border-b border-gray-200 px-6 py-4 flex items-center justify-between">
                <div>
                  <span className="text-4xl font-extrabold text-gray-900">10</span>
                  <span className="text-xl font-semibold text-gray-500 ml-1">yard</span>
                </div>
                <span className="text-sm font-bold text-green-700 bg-green-50 rounded-full px-4 py-1.5">
                  $200–$350
                </span>
              </div>
              <div className="px-6 py-5 space-y-4">
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <span className="text-gray-400 text-xs uppercase tracking-wide">Dimensions</span>
                    <p className="font-semibold text-gray-800 mt-0.5">12 × 7.5 × 3.5 ft</p>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs uppercase tracking-wide">Capacity</span>
                    <p className="font-semibold text-gray-800 mt-0.5">3–4 pickup loads</p>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs uppercase tracking-wide">Weight Limit</span>
                    <p className="font-semibold text-gray-800 mt-0.5">~2–3 tons</p>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs uppercase tracking-wide">Rental Period</span>
                    <p className="font-semibold text-gray-800 mt-0.5">7–14 days</p>
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-2">Typical Uses</p>
                  <ul className="space-y-1.5">
                    {[
                      'Single room cleanout or declutter',
                      'Bathroom remodel demo debris',
                      'Garage or attic cleanout',
                      'Minor landscaping and yard waste',
                      'Small estate or moving cleanout',
                    ].map((use) => (
                      <li key={use} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                        {use}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-lg bg-green-50 border border-green-100 px-4 py-3">
                  <p className="text-sm text-gray-700">
                    <strong className="text-gray-900">Best for:</strong> Homeowners doing a focused cleanout
                    or single-room renovation who want the most affordable option that still fits everything.
                  </p>
                </div>

                <Link
                  href="/dumpster-sizes/10-yard"
                  className="flex items-center gap-1.5 text-sm font-semibold text-green-600 hover:text-green-700 hover:gap-2.5 transition-all"
                >
                  Full 10-yard dumpster guide <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* 15-yard card */}
            <div className="rounded-xl border border-gray-200 bg-white overflow-hidden hover:border-green-300 hover:shadow-md transition-all">
              <div className="bg-gray-50 border-b border-gray-200 px-6 py-4 flex items-center justify-between">
                <div>
                  <span className="text-4xl font-extrabold text-gray-900">15</span>
                  <span className="text-xl font-semibold text-gray-500 ml-1">yard</span>
                </div>
                <span className="text-sm font-bold text-green-700 bg-green-50 rounded-full px-4 py-1.5">
                  $250–$425
                </span>
              </div>
              <div className="px-6 py-5 space-y-4">
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <span className="text-gray-400 text-xs uppercase tracking-wide">Dimensions</span>
                    <p className="font-semibold text-gray-800 mt-0.5">14 × 7.5 × 4 ft</p>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs uppercase tracking-wide">Capacity</span>
                    <p className="font-semibold text-gray-800 mt-0.5">4–6 pickup loads</p>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs uppercase tracking-wide">Weight Limit</span>
                    <p className="font-semibold text-gray-800 mt-0.5">~2–4 tons</p>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs uppercase tracking-wide">Rental Period</span>
                    <p className="font-semibold text-gray-800 mt-0.5">7–14 days</p>
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-2">Typical Uses</p>
                  <ul className="space-y-1.5">
                    {[
                      'Kitchen remodel with cabinet removal',
                      'Flooring removal (whole floor)',
                      'Medium-size estate or home cleanout',
                      'Small roofing job (garage or shed)',
                      'Multiple-room renovation debris',
                    ].map((use) => (
                      <li key={use} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                        {use}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-lg bg-green-50 border border-green-100 px-4 py-3">
                  <p className="text-sm text-gray-700">
                    <strong className="text-gray-900">Best for:</strong> Renovation projects that produce more
                    debris than a 10-yard can hold, but don&apos;t warrant the cost of a full 20-yard container.
                  </p>
                </div>

                <Link
                  href="/dumpster-sizes/15-yard"
                  className="flex items-center gap-1.5 text-sm font-semibold text-green-600 hover:text-green-700 hover:gap-2.5 transition-all"
                >
                  Full 15-yard dumpster guide <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

          </div>
        </section>

        {/* Best Uses Grid */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Best Uses for a Small Dumpster Rental</h2>
          <p className="text-gray-600 mb-6 max-w-2xl">
            Small roll-off dumpsters are the right tool for most residential jobs. Here are the six project
            types where they consistently earn their keep.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {USE_CASES.map(({ icon: Icon, title, detail }) => (
              <div
                key={title}
                className="flex flex-col gap-3 rounded-xl border border-gray-200 bg-white p-5 hover:border-green-200 hover:shadow-sm transition-all"
              >
                <div className="h-10 w-10 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                  <Icon className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Small vs Large Comparison Table */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Small vs. Large Dumpster — How to Choose</h2>
          <p className="text-gray-600 mb-5 max-w-2xl">
            Not sure whether you need a small or large container? This comparison covers the key differences
            so you don&apos;t over- or under-order.
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 w-36">Category</th>
                  <th className="text-left px-4 py-3 font-semibold text-green-700">Small (10–15 yd)</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">Large (20–40 yd)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {COMPARISON_ROWS.map((row) => (
                  <tr key={row.label} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3 font-semibold text-gray-700">{row.label}</td>
                    <td className="px-4 py-3 text-gray-700">{row.small}</td>
                    <td className="px-4 py-3 text-gray-600">{row.large}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-gray-400">
            * Prices are national averages. See the full{' '}
            <Link href="/dumpster-rental-cost" className="text-green-600 hover:underline">
              dumpster rental cost guide
            </Link>{' '}
            for city-specific pricing.
          </p>
          <p className="mt-3 text-sm text-gray-600 max-w-2xl">
            As a general rule: if your project is confined to one or two rooms, or you&apos;re doing a single-purpose
            cleanout, a small dumpster is almost always sufficient. Upgrade to a{' '}
            <Link href="/dumpster-sizes" className="text-green-600 font-medium hover:underline">
              larger size
            </Link>{' '}
            only when you&apos;re tackling multiple rooms, heavy structural materials, or a full-house clearout.
          </p>
        </section>

        {/* Cost Section */}
        <section className="rounded-xl border border-gray-200 bg-gray-50 p-7">
          <h2 className="text-2xl font-bold text-gray-900 mb-5">How Much Does a Small Dumpster Rental Cost?</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-7">
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-gray-900 text-lg">10-Yard Dumpster</h3>
                <span className="text-lg font-extrabold text-green-700">$200–$350</span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                The most affordable standard roll-off option. The national average falls around $275,
                with rural markets often coming in under $225 and dense metros like New York or San Francisco
                reaching $400+. Price includes delivery, pickup, and typically 1–2 tons of debris.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-gray-900 text-lg">15-Yard Dumpster</h3>
                <span className="text-lg font-extrabold text-green-700">$250–$425</span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Averages roughly $325–$375 nationally. The price bump over a 10-yard is usually $50–$100,
                making it a smart upgrade when you&apos;re not certain the smaller size will cut it — a second
                rental trip can cost $200 or more.
              </p>
            </div>
          </div>

          <h3 className="font-bold text-gray-900 mb-3">Factors That Affect the Price</h3>
          <ul className="space-y-2.5 mb-7">
            {[
              {
                factor: 'Location',
                detail:
                  'Landfill tipping fees vary dramatically by market. Dense metro areas pay 2–3x more than rural counties.',
              },
              {
                factor: 'Debris weight',
                detail:
                  'Rental prices include a base tonnage (usually 1–2 tons for small containers). Heavy materials like shingles, concrete, or tile generate overage charges of $60–$100/ton.',
              },
              {
                factor: 'Rental duration',
                detail:
                  'Standard rentals cover 7–14 days. Extensions run $5–$15/day. Most small residential projects finish within one week.',
              },
              {
                factor: 'Street permits',
                detail:
                  'If the dumpster must sit on a public street rather than your driveway, expect a city permit fee of $20–$100.',
              },
              {
                factor: 'Seasonal demand',
                detail:
                  'Spring and summer are peak season. Book 3–5 days ahead during warm months. Winter rentals often come with better availability.',
              },
            ].map((item) => (
              <li key={item.factor} className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                <div className="text-sm text-gray-700">
                  <strong className="text-gray-900">{item.factor}: </strong>
                  {item.detail}
                </div>
              </li>
            ))}
          </ul>

          <h3 className="font-bold text-gray-900 mb-3">Money-Saving Tips</h3>
          <ul className="space-y-2.5">
            {[
              'Get quotes from at least 3 local companies — prices for the same container often vary by 20–30%.',
              'Ask for an all-in price that includes fuel surcharges, taxes, and overage policies, not just the base rate.',
              'Use your driveway instead of the street to avoid permit fees.',
              "When unsure between 10 and 15 yards, go with the 15 — the extra $50–$75 beats paying for a second pickup.",
              'Avoid throwing concrete, dirt, or asphalt into a small dumpster without checking weight limits first.',
              'Book mid-week for better rates and delivery flexibility from local haulers.',
            ].map((tip, i) => (
              <li key={i} className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">{tip}</span>
              </li>
            ))}
          </ul>
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

        {/* Related guides */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Related Guides & Calculators</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: 'Dumpster Size Guide (All Sizes)', href: '/dumpster-sizes' },
              { label: '10-Yard Dumpster Guide', href: '/dumpster-sizes/10-yard' },
              { label: '15-Yard Dumpster Guide', href: '/dumpster-sizes/15-yard' },
              { label: 'Weight Limit Calculator', href: '/dumpster-weight-limit-calculator' },
              { label: 'Do You Need a Permit?', href: '/dumpster-rental-permit' },
              { label: 'How Long Can You Keep a Dumpster?', href: '/how-long-can-you-keep-a-rental-dumpster' },
            ].map((link) => (
              <Link key={link.href} href={link.href}
                className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-700 hover:text-green-600 hover:border-green-200 transition">
                <ArrowRight className="h-3.5 w-3.5 text-gray-400 shrink-0" />
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-xl border border-green-200 bg-green-50 p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Find a Small Dumpster Rental Near You
          </h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Compare prices from local companies in your area. Most markets have same-day or next-day
            availability for 10 and 15-yard containers. Get quotes and book in minutes.
          </p>
          <Link
            href="/dumpster-rental-near-me"
            className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-8 py-3.5 font-bold text-white hover:bg-green-700 transition"
          >
            Find Local Companies Near Me <ArrowRight className="h-5 w-5" />
          </Link>
          <p className="mt-4 text-sm text-gray-500">
            Need to understand all size options?{' '}
            <Link href="/dumpster-sizes" className="text-green-600 hover:underline font-medium">
              Browse the full dumpster size guide
            </Link>
            .
          </p>
        </section>

      </div>
    </>
  )
}
