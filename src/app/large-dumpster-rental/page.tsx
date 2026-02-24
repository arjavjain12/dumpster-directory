import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  CheckCircle,
  Home,
  Wrench,
  Trash2,
  HardHat,
  Building2,
  Truck,
} from 'lucide-react'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Large Dumpster Rental — 20, 30 & 40 Yard Roll-Off Options (2026)',
  description:
    'Rent a large dumpster for whole-home renovations, new construction, commercial cleanouts, and large roofing jobs. Compare 20-yard, 30-yard, and 40-yard roll-off options, pricing ($375–$750), dimensions, and find large dumpster rental near you.',
  alternates: { canonical: '/large-dumpster-rental' },
  openGraph: {
    title: 'Large Dumpster Rental — 20, 30 & 40 Yard Roll-Off Options (2026)',
    description:
      'Compare 20-yard, 30-yard, and 40-yard large dumpster rentals. Pricing, dimensions, use cases, and how to find one near you.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What size dumpster do I need for a whole-house cleanout?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "For most whole-house cleanouts, a 20 to 30-yard dumpster is the right call. A 20-yard container (approximately 22 ft long × 7.5 ft wide × 4.5 ft tall) handles the contents of a typical 3-bedroom home — furniture, appliances, general household junk, and some construction debris. If you're also dealing with flooring, drywall, or structural materials, step up to a 30-yard. Homes larger than 2,500 sq ft or those requiring heavy demolition often benefit from a 30-yard or two separate hauls with a 20-yard.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can a 30-yard dumpster fit in a standard driveway?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "A 30-yard dumpster (typically 22 ft long × 7.5 ft wide × 6 ft tall) can fit in many residential driveways, but it is tight. You'll need approximately 70 ft of clearance from the street to accommodate the container and the delivery truck's swing room. Vertical clearance requirements of at least 18 ft apply for tree branches, garage door headers, and utility lines — the 6-ft height of a 30-yard container is not the concern, but the delivery truck arm can reach 20+ ft during placement. A 40-yard dumpster at 22 ft long and 8 ft tall generally requires a large driveway or an on-street permit.",
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a large dumpster rental cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Large dumpster rental costs range from $375 to $750 depending on the container size and your local market. A 20-yard dumpster averages $375–$500 nationally. A 30-yard runs $450–$600, and a 40-yard typically costs $550–$750. Urban markets with higher landfill tipping fees — like New York, San Francisco, or Boston — can push prices 30–50% above those averages. Prices generally include delivery, pickup, and a base weight allowance of 2–4 tons. Overage fees of $60–$100 per ton apply when you exceed the included weight.",
      },
    },
    {
      '@type': 'Question',
      name: "What's the difference between a 20 and 30-yard dumpster?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The main difference is capacity and height. A 20-yard dumpster holds approximately 6–8 pickup truck loads of debris and stands about 4.5 ft tall — making it easy to toss debris over the side. It's the standard choice for whole-home remodels, large cleanouts, and mid-size roofing jobs under 3,000 sq ft. A 30-yard dumpster holds 9–12 pickup truck loads and stands 6 ft tall, which is better for new construction, large roofing jobs over 3,000 sq ft, and commercial cleanouts that generate significant volume. The 30-yard typically costs $75–$150 more than a 20-yard but eliminates the need for a second haul on bigger projects.",
      },
    },
  ],
}

const USE_CASES = [
  {
    icon: Home,
    title: 'Whole-Home Renovation',
    detail:
      'A full-house remodel — multiple rooms, flooring removal, drywall, cabinetry, and fixtures — generates far more debris than a small container can handle. A 20 or 30-yard is the standard choice.',
  },
  {
    icon: HardHat,
    title: 'New Construction',
    detail:
      'Construction sites generating lumber cutoffs, drywall scraps, concrete, and packaging need the volume of a 30 or 40-yard container. Most contractors keep one on-site for the duration of the build.',
  },
  {
    icon: Truck,
    title: 'Large Roofing Jobs (3,000+ sq ft)',
    detail:
      'Asphalt shingles are heavy. A full tear-off on a 3,000+ sq ft roof can weigh 5–8 tons. A 20 or 30-yard dumpster with a dedicated weight allowance for roofing keeps the job moving without multiple hauls.',
  },
  {
    icon: Building2,
    title: 'Commercial Cleanouts',
    detail:
      'Office build-outs, retail closures, and warehouse cleanouts produce high volumes of material fast. A 30 or 40-yard dumpster gives commercial crews the capacity to work without stopping.',
  },
  {
    icon: Wrench,
    title: 'Major Landscaping & Demolition',
    detail:
      'Removing a deck, retaining wall, concrete patio, or large tree requires a container that can handle both bulk and weight. Large roll-offs are rated for the heavy mixed loads demolition creates.',
  },
  {
    icon: Trash2,
    title: 'Large Estate & Whole-Home Cleanout',
    detail:
      'Clearing a large property of furniture, appliances, clothing, and household accumulation across multiple rooms almost always requires a 20-yard minimum — and often a 30-yard for homes over 2,500 sq ft.',
  },
]

const COMPARISON_ROWS = [
  {
    label: 'Size',
    large: '20–40 yards',
    small: '10–15 yards',
  },
  {
    label: 'Capacity',
    large: '6–16 pickup truck loads',
    small: '3–6 pickup truck loads',
  },
  {
    label: 'Avg. Price',
    large: '$375–$750',
    small: '$200–$425',
  },
  {
    label: 'Best For',
    large: 'Whole-home remodels, new construction, large roofing jobs',
    small: 'Single-room remodels, cleanouts, small roofing jobs',
  },
  {
    label: 'Fits in Driveway?',
    large: 'Usually, but tight for 30–40 yd',
    small: 'Yes — most standard driveways',
  },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Large Dumpster Rental — 20, 30 & 40 Yard Options Near You (2026)',
  description: 'Compare 20-yard, 30-yard, and 40-yard large dumpster rentals. Pricing, dimensions, use cases, and how to find one near you.',
  datePublished: '2026-02-24',
  dateModified: '2026-02-24',
  author: { '@type': 'Organization', name: 'DumpsterListing', url: 'https://dumpsterlisting.com' },
  publisher: { '@type': 'Organization', name: 'DumpsterListing', url: 'https://dumpsterlisting.com' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://dumpsterlisting.com/large-dumpster-rental' },
}

export default function LargeDumpsterRentalPage() {
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
              { label: 'Large Dumpster Rental' },
            ]}
          />
          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900">
            Large Dumpster Rental — Roll-Off Containers for Big Projects
          </h1>
          <p className="mt-3 max-w-3xl text-gray-600 leading-relaxed">
            Large dumpsters — the{' '}
            <Link href="/dumpster-sizes/20-yard" className="text-green-600 font-medium hover:underline">
              20-yard
            </Link>
            ,{' '}
            <Link href="/dumpster-sizes/30-yard" className="text-green-600 font-medium hover:underline">
              30-yard
            </Link>
            , and{' '}
            <Link href="/dumpster-sizes/40-yard" className="text-green-600 font-medium hover:underline">
              40-yard
            </Link>{' '}
            roll-off containers — are built for projects that produce serious volume: whole-home renovations,
            new construction, large roofing jobs, commercial cleanouts, and demolition work. If a{' '}
            <Link href="/small-dumpster-rental" className="text-green-600 font-medium hover:underline">
              small dumpster
            </Link>{' '}
            isn&apos;t going to cut it, this guide covers everything you need to choose the right large container,
            understand the cost, and find one near you.
          </p>
          <div className="mt-6">
            <Link
              href="/dumpster-rental-near-me"
              className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-7 py-3.5 font-bold text-white hover:bg-green-700 transition"
            >
              Find a Large Dumpster Near Me <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Hero image */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="relative overflow-hidden rounded-2xl shadow-lg">
          <Image
            src="/images/construction-dumpster.jpg"
            alt="Large 40-yard roll-off dumpster on a construction site"
            width={1400}
            height={600}
            className="w-full h-72 sm:h-96 object-cover"
            priority
          />
          <div className="absolute bottom-4 left-4 bg-black/60 text-white text-sm font-medium px-3 py-1.5 rounded-lg backdrop-blur-sm">
            Large roll-off dumpsters for construction and major projects
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-14">

        {/* What is a Large Dumpster */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What Is a Large Dumpster?</h2>
          <div className="max-w-3xl text-gray-600 leading-relaxed space-y-3">
            <p>
              In the roll-off dumpster industry, &ldquo;large&rdquo; refers to containers in the 20 to 40-yard range.
              A{' '}
              <Link href="/dumpster-sizes/20-yard" className="text-green-600 font-medium hover:underline">
                20-yard dumpster
              </Link>{' '}
              is the most commonly rented large container — measuring approximately{' '}
              <strong>22 ft long × 7.5 ft wide × 4.5 ft tall</strong> and holding 6–8 pickup truck loads of
              debris. It supports weight limits of roughly <strong>4–6 tons</strong>, making it the workhorse
              for whole-home remodels, large cleanouts, and mid-size roofing projects.
            </p>
            <p>
              A{' '}
              <Link href="/dumpster-sizes/30-yard" className="text-green-600 font-medium hover:underline">
                30-yard dumpster
              </Link>{' '}
              steps up to <strong>22 ft long × 7.5 ft wide × 6 ft tall</strong> and holds 9–12 pickup truck
              loads, with weight limits typically between 4–8 tons. It&apos;s the go-to for new construction,
              commercial cleanouts, and large roofing jobs over 3,000 sq ft. The{' '}
              <Link href="/dumpster-sizes/40-yard" className="text-green-600 font-medium hover:underline">
                40-yard dumpster
              </Link>{' '}
              — at <strong>22 ft long × 8 ft wide × 8 ft tall</strong> and 12–16 pickup truck loads of
              capacity — is reserved for the largest commercial and industrial projects where maximum volume
              is the priority.
            </p>
          </div>
        </section>

        {/* Size Cards */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">20-Yard vs. 30-Yard: Which Large Dumpster Do You Need?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* 20-yard card */}
            <div className="rounded-xl border border-gray-200 bg-white overflow-hidden hover:border-green-300 hover:shadow-md transition-all">
              <div className="bg-gray-50 border-b border-gray-200 px-6 py-4 flex items-center justify-between">
                <div>
                  <span className="text-4xl font-extrabold text-gray-900">20</span>
                  <span className="text-xl font-semibold text-gray-500 ml-1">yard</span>
                </div>
                <span className="text-sm font-bold text-green-700 bg-green-50 rounded-full px-4 py-1.5">
                  $375–$500
                </span>
              </div>
              <div className="px-6 py-5 space-y-4">
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <span className="text-gray-400 text-xs uppercase tracking-wide">Dimensions</span>
                    <p className="font-semibold text-gray-800 mt-0.5">22 × 7.5 × 4.5 ft</p>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs uppercase tracking-wide">Capacity</span>
                    <p className="font-semibold text-gray-800 mt-0.5">6–8 pickup loads</p>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs uppercase tracking-wide">Weight Limit</span>
                    <p className="font-semibold text-gray-800 mt-0.5">~4–6 tons</p>
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
                      'Whole-home remodel or renovation',
                      'Large cleanout (3+ bedroom home)',
                      'Roofing job under 3,000 sq ft',
                      'Flooring and drywall removal',
                      'Major garage or basement overhaul',
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
                    <strong className="text-gray-900">Best for:</strong> Homeowners and remodelers tackling
                    multi-room projects who need real capacity without the footprint of a 30-yard container.
                  </p>
                </div>

                <Link
                  href="/dumpster-sizes/20-yard"
                  className="flex items-center gap-1.5 text-sm font-semibold text-green-600 hover:text-green-700 hover:gap-2.5 transition-all"
                >
                  Full 20-yard dumpster guide <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* 30-yard card */}
            <div className="rounded-xl border border-gray-200 bg-white overflow-hidden hover:border-green-300 hover:shadow-md transition-all">
              <div className="bg-gray-50 border-b border-gray-200 px-6 py-4 flex items-center justify-between">
                <div>
                  <span className="text-4xl font-extrabold text-gray-900">30</span>
                  <span className="text-xl font-semibold text-gray-500 ml-1">yard</span>
                </div>
                <span className="text-sm font-bold text-green-700 bg-green-50 rounded-full px-4 py-1.5">
                  $450–$600
                </span>
              </div>
              <div className="px-6 py-5 space-y-4">
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <span className="text-gray-400 text-xs uppercase tracking-wide">Dimensions</span>
                    <p className="font-semibold text-gray-800 mt-0.5">22 × 7.5 × 6 ft</p>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs uppercase tracking-wide">Capacity</span>
                    <p className="font-semibold text-gray-800 mt-0.5">9–12 pickup loads</p>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs uppercase tracking-wide">Weight Limit</span>
                    <p className="font-semibold text-gray-800 mt-0.5">~4–8 tons</p>
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
                      'New construction debris and waste',
                      'Large roofing job (3,000+ sq ft)',
                      'Commercial space cleanout',
                      'Demolition and structural removal',
                      'Large estate or multi-home cleanout',
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
                    <strong className="text-gray-900">Best for:</strong> Contractors, commercial crews, and
                    large residential projects where a 20-yard would require multiple hauls and a 40-yard is
                    more than necessary.
                  </p>
                </div>

                <Link
                  href="/dumpster-sizes/30-yard"
                  className="flex items-center gap-1.5 text-sm font-semibold text-green-600 hover:text-green-700 hover:gap-2.5 transition-all"
                >
                  Full 30-yard dumpster guide <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

          </div>

          {/* 40-yard callout */}
          <div className="mt-5 rounded-xl border border-gray-200 bg-gray-50 px-6 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <p className="font-bold text-gray-900 text-lg">
                Need even more capacity? Consider a{' '}
                <Link href="/dumpster-sizes/40-yard" className="text-green-600 hover:underline">
                  40-yard dumpster
                </Link>{' '}
                ($550–$750)
              </p>
              <p className="text-sm text-gray-600 mt-1 max-w-2xl">
                The 40-yard container — 22 ft long × 8 ft wide × 8 ft tall, holding 12–16 pickup truck loads
                — is the largest standard roll-off available. It&apos;s used for large-scale commercial cleanouts,
                industrial projects, and major new construction where volume and heavy mixed loads are the
                defining constraint. Most residential driveways cannot accommodate a 40-yard; a street permit
                or staging area is typically required.
              </p>
            </div>
            <Link
              href="/dumpster-sizes/40-yard"
              className="shrink-0 inline-flex items-center gap-1.5 text-sm font-semibold text-green-600 hover:text-green-700 hover:gap-2.5 transition-all"
            >
              40-yard guide <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Best Uses Grid */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Best Uses for a Large Dumpster Rental</h2>
          <p className="text-gray-600 mb-6 max-w-2xl">
            Large roll-off dumpsters are the right tool for high-volume and heavy-material projects.
            Here are the six project types where they consistently earn their keep.
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

        {/* Large vs Small Comparison Table */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Large vs. Small Dumpster — How to Choose</h2>
          <p className="text-gray-600 mb-5 max-w-2xl">
            Not sure whether you need a large or small container? This comparison covers the key differences
            so you don&apos;t over- or under-order.
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 w-36">Category</th>
                  <th className="text-left px-4 py-3 font-semibold text-green-700">Large (20–40 yd)</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">Small (10–15 yd)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {COMPARISON_ROWS.map((row) => (
                  <tr key={row.label} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3 font-semibold text-gray-700">{row.label}</td>
                    <td className="px-4 py-3 text-gray-700">{row.large}</td>
                    <td className="px-4 py-3 text-gray-600">{row.small}</td>
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
            As a general rule: if your project spans multiple rooms, involves structural materials, or covers
            a large square footage, a large dumpster is the right call. For focused single-room work or
            smaller cleanouts, a{' '}
            <Link href="/small-dumpster-rental" className="text-green-600 font-medium hover:underline">
              small dumpster
            </Link>{' '}
            will save you money without sacrificing capacity.
          </p>
        </section>

        {/* Cost Section */}
        <section className="rounded-xl border border-gray-200 bg-gray-50 p-7">
          <h2 className="text-2xl font-bold text-gray-900 mb-5">How Much Does a Large Dumpster Rental Cost?</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-7">
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-gray-900 text-lg">20-Yard Dumpster</h3>
                <span className="text-lg font-extrabold text-green-700">$375–$500</span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                The most rented large roll-off. The national average falls around $425–$450, with rural markets
                often coming in under $400 and dense metros like New York or San Francisco reaching $550+.
                Price includes delivery, pickup, and typically 2–4 tons of debris.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-gray-900 text-lg">30-Yard Dumpster</h3>
                <span className="text-lg font-extrabold text-green-700">$450–$600</span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Averages roughly $500–$550 nationally. The price increase over a 20-yard is usually $75–$150,
                which is well worth it on large projects — a second haul with a 20-yard can add $400+ to your
                total cost.
              </p>
            </div>
          </div>

          <h3 className="font-bold text-gray-900 mb-3">Factors That Affect the Price</h3>
          <ul className="space-y-2.5 mb-7">
            {[
              {
                factor: 'Location',
                detail:
                  'Landfill tipping fees vary dramatically by market. Dense metro areas pay 2–3x more than rural counties, and that cost is passed directly to the rental rate.',
              },
              {
                factor: 'Debris weight',
                detail:
                  'Rental prices include a base tonnage (usually 2–4 tons for large containers). Heavy materials like concrete, shingles, soil, and brick generate overage charges of $60–$100/ton when you exceed the included weight.',
              },
              {
                factor: 'Rental duration',
                detail:
                  'Standard rentals cover 7–14 days. Extensions run $5–$15/day. Construction and commercial projects often run longer — confirm extension policies before signing.',
              },
              {
                factor: 'Street permits',
                detail:
                  'Larger containers often cannot fit in driveways and must sit on the street. City permit fees of $20–$150 apply in most municipalities, and some require 48-hour advance applications.',
              },
              {
                factor: 'Seasonal demand',
                detail:
                  'Spring and summer are peak season for construction and renovation. Book 5–7 days ahead during warm months for large containers, which have more limited fleet availability than small sizes.',
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
              'Get quotes from at least 3 local companies — prices for the same container often vary by 20–30% across competitors in the same market.',
              'Ask for an all-in price that includes fuel surcharges, taxes, environmental fees, and overage policies upfront.',
              'Use your driveway when possible to avoid street permit fees — save the permit application effort for when the driveway genuinely cannot accommodate the container.',
              'When choosing between a 20 and 30-yard, estimate high — the extra $75–$150 for the larger size is almost always cheaper than scheduling a second haul.',
              'Separate heavy materials (concrete, dirt, asphalt) into a dedicated small container if you have both light and heavy debris — it avoids expensive overage fees on your large container.',
              'Book mid-week for better scheduling flexibility. Large roll-offs have tighter fleet availability than small containers, so earlier booking wins.',
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
              { label: '20-Yard Dumpster Guide', href: '/dumpster-sizes/20-yard' },
              { label: '30-Yard Dumpster Guide', href: '/dumpster-sizes/30-yard' },
              { label: '20 Yard vs 30 Yard — Full Comparison', href: '/20-yard-dumpster-vs-30-yard-dumpster' },
              { label: 'Weight Limit Calculator', href: '/dumpster-weight-limit-calculator' },
              { label: 'Do You Need a Permit?', href: '/dumpster-rental-permit' },
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
            Find a Large Dumpster Rental Near You
          </h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Compare prices from local companies in your area. Most markets have next-day availability for
            20 and 30-yard containers. Get quotes and book in minutes.
          </p>
          <Link
            href="/dumpster-rental-near-me"
            className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-8 py-3.5 font-bold text-white hover:bg-green-700 transition"
          >
            Find Local Companies Near Me <ArrowRight className="h-5 w-5" />
          </Link>
          <p className="mt-4 text-sm text-gray-500">
            Working on a smaller project?{' '}
            <Link href="/small-dumpster-rental" className="text-green-600 hover:underline font-medium">
              See small dumpster rental options (10 &amp; 15 yard)
            </Link>
            .
          </p>
        </section>

      </div>
    </>
  )
}
