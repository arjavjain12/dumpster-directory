import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'How to Dispose of Yard Waste: 6 Options Compared (2026)',
  description:
    'Grass clippings, tree branches, brush, and sod — here are the best ways to dispose of yard waste, including free options, dumpster rental, and curbside pickup.',
  alternates: { canonical: '/how-to-dispose-of-yard-waste' },
  openGraph: {
    title: 'How to Dispose of Yard Waste: Free & Paid Options',
    description: 'Compare curbside pickup, composting, green waste facilities, and dumpster rental for yard waste disposal. Find the cheapest and most convenient option.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can you put yard waste in a dumpster?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, most roll-off dumpsters accept yard waste including branches, grass clippings, leaves, and sod. However, some municipalities require separate green waste disposal, and some haulers charge extra for yard waste or only accept it in designated green waste containers. Always confirm with your rental company.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you dispose of large amounts of yard waste?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For large amounts of yard waste, your best options are: renting a roll-off dumpster (most practical for tree removals or major landscaping), hauling to a green waste facility yourself, scheduling a green waste bulk pickup through your municipality, or hiring a landscaping crew or junk removal service that handles yard debris.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you get rid of tree branches and brush?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For tree branches and brush, you can: use a wood chipper (rent for $150–$300/day) to reduce volume for composting or mulch use, cut into small pieces for curbside yard waste bags, haul to a green waste facility, or rent a dumpster for large volumes. Tree removal companies typically haul away their own debris.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you dispose of sod?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sod is heavy — about 1,500 lbs per cubic yard — so weight limits apply if using a dumpster. Options: haul to a green waste facility ($20–$50 per ton), list free on Facebook Marketplace (people take it for fill or new lawns), place in a dumpster (check weight limits), or hire a landscaping company that includes disposal.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you compost all yard waste?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most yard waste is compostable — grass clippings, leaves, small branches, and plant trimmings. However, diseased plants, invasive species seeds, and certain weeds should not be composted as they may spread. Large woody branches take a long time to break down and are better chipped first.',
      },
    },
  ],
}

const OPTIONS = [
  {
    title: 'Municipal Curbside Pickup',
    icon: '🚌',
    cost: 'Free (included in taxes) or low fee',
    effort: 'Very Low',
    speed: 'Weekly or scheduled',
    bestFor: 'Regular lawn care and small amounts',
    description: 'Most municipalities offer yard waste pickup as part of regular waste service. This is typically the easiest and cheapest option for ongoing yard maintenance — grass clippings, leaves, and small branches.',
    tips: [
      'Check your city\'s yard waste schedule (often seasonal)',
      'Use designated yard waste bags or carts — loose piles may not be collected',
      'Bundle branches with twine under 4 feet long',
      'Some cities charge per bag or have bag limits',
    ],
  },
  {
    title: 'Compost It',
    icon: '🌱',
    cost: 'Free (initial bin setup $0–$150)',
    effort: 'Low (ongoing)',
    speed: '2–12 months',
    bestFor: 'Grass clippings, leaves, plant trimmings',
    description: 'Composting converts yard waste into rich soil amendment. Start a backyard compost pile or use a bin. Grass clippings break down in weeks; leaves take months. Many cities also offer free compost drop-off at municipal facilities.',
    tips: [
      'Layer green (grass, fresh clippings) with brown (dry leaves, branches)',
      'Turn the pile monthly for faster decomposition',
      'Keep pile moist but not soggy',
      'Avoid diseased plants and invasive species seeds',
    ],
  },
  {
    title: 'Green Waste / C&D Facility',
    icon: '🏭',
    cost: '$20–$50 per ton',
    effort: 'Medium (transport yourself)',
    speed: 'Same day',
    bestFor: 'Large volumes you can haul yourself',
    description: 'Most areas have green waste recycling facilities that accept yard debris for a small fee. Materials are chipped, composted, or turned into mulch. Search "[your city] green waste facility" or "[your city] yard waste drop-off."',
    tips: [
      'Call ahead to confirm accepted materials and hours',
      'Separate wood from green waste (different processing)',
      'Rent a truck or trailer if needed',
      'No plastic bags — use paper yard waste bags or dump loose',
    ],
  },
  {
    title: 'Rent a Dumpster',
    icon: '🗑️',
    cost: '$275–$450 (10-yd)',
    effort: 'Low (you load)',
    speed: '24–48 hr delivery',
    bestFor: 'Tree removal, major landscaping, full yard cleanups',
    description: 'For large landscaping projects — tree removal, sod tearout, overgrown yards — a 10-yard roll-off dumpster is often the most practical option. You can work at your own pace over 7–14 days and combine yard waste with other debris.',
    tips: [
      'Confirm your hauler accepts yard waste (most do)',
      'A 10-yard handles most residential landscaping jobs',
      'Sod is heavy — don\'t overload with sod alone',
      'Mixing yard waste with general debris is fine with most haulers',
    ],
  },
  {
    title: 'Rent a Wood Chipper',
    icon: '🪚',
    cost: '$150–$300 per day',
    effort: 'High',
    speed: 'Same day',
    bestFor: 'Tree branches, brush, shrubs you want to reuse as mulch',
    description: 'Renting a chipper reduces large volumes of branches and brush by up to 90% in volume. The resulting wood chips can be used as mulch, path material, or compost. Home Depot and Sunbelt Equipment rent chippers. Best for tree trimmings and large shrub removals.',
    tips: [
      'Rent from Home Depot, Sunbelt, or local equipment rental',
      'Feed branches in small diameter first',
      'Use protective gear — eye and ear protection required',
      'Plan for chip disposal if not using on-site',
    ],
  },
  {
    title: 'Junk Removal Service',
    icon: '🚛',
    cost: '$150–$500+',
    effort: 'None',
    speed: 'Same or next day',
    bestFor: 'When you can\'t do any loading or hauling',
    description: 'Yard waste junk removal is available through companies like 1-800-GOT-JUNK and local landscaping haulers. They load, haul, and dispose of everything. Useful for elderly homeowners, post-storm cleanups, or when you\'re too busy to manage it yourself.',
    tips: [
      'Get multiple quotes — prices vary significantly',
      'Some landscapers include haul-away in their service price',
      'Ask if they compost or recycle yard waste',
      'Price increases with volume and access difficulty',
    ],
  },
]

const YARD_WASTE_TYPES = [
  { type: 'Grass clippings', bestOption: 'Compost or curbside', note: 'Excellent compost material; breaks down in 2–4 weeks' },
  { type: 'Dry leaves', bestOption: 'Compost or curbside', note: 'Bag for curbside or use as "brown" layer in compost' },
  { type: 'Small branches (< 4")', bestOption: 'Curbside or green waste facility', note: 'Bundle with twine for curbside collection' },
  { type: 'Large tree branches', bestOption: 'Chipper or dumpster', note: 'Need chipping first for composting; dumpster for disposal' },
  { type: 'Tree stumps', bestOption: 'Stump grinder + dumpster', note: 'Stumps too dense for regular disposal; grind first' },
  { type: 'Sod', bestOption: 'Green waste facility or free giveaway', note: 'Heavy — watch weight limits; people take free sod for lawns' },
  { type: 'Shrubs and bushes', bestOption: 'Dumpster or chipper', note: 'Large volumes best handled with dumpster' },
  { type: 'Full yard cleanout', bestOption: 'Dumpster rental', note: 'Most cost-effective for large mixed yard debris' },
]

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Dispose of Yard Waste',
  description: 'Step-by-step guide to getting rid of grass clippings, branches, sod, and other yard debris.',
  totalTime: 'P1D',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Check free options in your area',
      text: 'Most municipalities offer free curbside yard waste pickup — check your city waste management schedule. Many areas also have free green waste drop-off at composting facilities.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Compost what you can',
      text: 'Grass clippings, leaves, and small plant trimmings are excellent compost materials. Start a backyard compost pile or use a bin. Grass clippings break down in 2–4 weeks.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Chip or shred large branches',
      text: 'Rent a wood chipper ($150–$300/day) to reduce branches and brush by up to 90% in volume. Use chips as mulch or compost material on site.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Rent a dumpster for large cleanouts',
      text: 'For major landscaping — tree removal, sod tearout, full yard cleanups — rent a 10-yard roll-off dumpster ($275–$450). Confirm your hauler accepts yard waste and watch weight limits for heavy sod.',
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Dispose of Yard Waste: 6 Options Compared',
  description: 'Compare curbside pickup, composting, green waste facilities, wood chippers, and dumpster rental for yard waste disposal.',
  datePublished: '2026-02-23',
  dateModified: '2026-02-23',
  author: { '@type': 'Organization', name: 'DumpsterListing', url: 'https://dumpsterlisting.com' },
  publisher: { '@type': 'Organization', name: 'DumpsterListing', url: 'https://dumpsterlisting.com' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://dumpsterlisting.com/how-to-dispose-of-yard-waste' },
}

export default function HowToDisposeOfYardWastePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs crumbs={[
            { label: 'Home', href: '/' },
            { label: 'How to Dispose of Yard Waste' },
          ]} />
          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900">
            How to Dispose of Yard Waste: 6 Options Compared
          </h1>
          <p className="mt-3 max-w-3xl text-gray-600 leading-relaxed">
            From weekly grass clippings to full tree removals — every yard waste situation has a
            best solution. Here's how to choose the right method based on your volume, budget,
            and timeline.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-14">

        {/* Quick comparison table */}
        <div className="overflow-x-auto rounded-xl border border-gray-200">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left px-4 py-3 font-semibold text-gray-700">Option</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-700">Cost</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-700 hidden sm:table-cell">Effort</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">Best For</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {OPTIONS.map((opt) => (
                <tr key={opt.title} className="hover:bg-gray-50 transition">
                  <td className="px-4 py-3 font-semibold text-gray-900 flex items-center gap-2">
                    <span>{opt.icon}</span> {opt.title}
                  </td>
                  <td className={`px-4 py-3 font-bold ${opt.cost.startsWith('Free') ? 'text-green-700' : 'text-gray-700'}`}>{opt.cost}</td>
                  <td className="px-4 py-3 text-gray-600 hidden sm:table-cell">{opt.effort}</td>
                  <td className="px-4 py-3 text-gray-500 text-xs hidden md:table-cell">{opt.bestFor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Detailed options */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">All 6 Options In Detail</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {OPTIONS.map((opt) => (
              <div key={opt.title} className="rounded-xl border border-gray-200 bg-white p-6">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="font-bold text-gray-900 flex items-center gap-2">
                      <span className="text-xl">{opt.icon}</span> {opt.title}
                    </h3>
                    <p className="text-xs text-gray-500 mt-0.5">{opt.bestFor}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-bold whitespace-nowrap ${opt.cost.startsWith('Free') ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
                    {opt.cost}
                  </span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{opt.description}</p>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Tips:</p>
                  <ul className="space-y-1">
                    {opt.tips.map((tip) => (
                      <li key={tip} className="text-xs text-gray-600 flex items-start gap-1.5">
                        <span className="text-green-500 font-bold mt-0.5">·</span> {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* By type guide */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-5">Best Disposal Method by Yard Waste Type</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">Type of Yard Waste</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">Best Option</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 hidden sm:table-cell">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {YARD_WASTE_TYPES.map((row) => (
                  <tr key={row.type} className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-800">{row.type}</td>
                    <td className="px-4 py-3 text-green-700 font-semibold">{row.bestOption}</td>
                    <td className="px-4 py-3 text-gray-500 text-xs hidden sm:table-cell">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Related links */}
        <section className="rounded-xl border border-gray-100 bg-gray-50 p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Related Guides & Calculators</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: 'Dumpster Size Estimator', href: '/dumpster-size-estimator', desc: 'Find the right size for your landscaping project' },
              { label: 'What Can You Put in a Dumpster?', href: '/what-can-you-put-in-a-dumpster', desc: 'Full list of allowed and prohibited items' },
              { label: 'Dumpster Rental vs Junk Removal', href: '/dumpster-rental-vs-junk-removal', desc: 'Compare costs and convenience' },
              { label: 'Landscaping Dumpster Rental', href: '/dumpster-rental/landscaping', desc: 'Find local landscaping dumpster providers' },
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

        <section className="rounded-2xl bg-gradient-to-r from-green-600 to-green-700 p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Need a Dumpster for Your Yard Cleanup?</h2>
          <p className="text-green-100 mb-6 max-w-xl mx-auto">Find local dumpster rental companies and get free quotes in minutes.</p>
          <Link href="/dumpster-rental"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 font-bold text-green-700 hover:bg-green-50 transition">
            Find Local Companies <ArrowRight className="h-5 w-5" />
          </Link>
        </section>
      </div>
    </>
  )
}
