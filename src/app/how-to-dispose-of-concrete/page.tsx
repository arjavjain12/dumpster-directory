import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'How to Dispose of Concrete: Recycling, Dumpster & Haul-Away (2026)',
  description:
    'Learn the best ways to dispose of concrete, including concrete recycling centers, dumpster rental, and junk removal. Compare costs and avoid weight limit surcharges.',
  alternates: { canonical: '/how-to-dispose-of-concrete' },
  openGraph: {
    title: 'How to Dispose of Old Concrete: All Options Compared',
    description: 'Concrete is too heavy to casually toss. Learn how recycling centers, concrete dumpsters, and haulers handle disposal — and which saves the most money.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do you dispose of concrete?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can dispose of concrete by taking it to a concrete recycling or C&D (construction and demolition) facility, renting a dumpster, hiring a junk removal service, or listing it free on Craigslist/Facebook Marketplace. According to the Portland Cement Association, standard concrete weighs approximately 4,050 lbs per cubic yard (150 lbs per cubic foot) — making it one of the heaviest materials in construction. Weight surcharges are a major cost factor when using dumpsters.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost to dispose of concrete?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Concrete disposal costs vary: recycling centers charge $5–$25 per ton (very cheap), dumpster rental for concrete runs $275–$500 plus potential weight overage fees, and junk removal services charge $100–$400+ per truckload. The recycling center is almost always the cheapest option if you can transport the concrete yourself.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can concrete be recycled?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, concrete is one of the most recycled construction materials in the world. It is crushed into aggregate (recycled concrete aggregate or RCA) and used as road base, fill material, and drainage. Most metro areas have concrete recycling centers or C&D processing facilities that accept concrete for a small fee — often $5–$20 per ton.',
      },
    },
    {
      '@type': 'Question',
      name: 'What dumpster size do I need for concrete?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For concrete disposal, use the smallest dumpster available — typically a 10-yard — and only fill it partway. A 10-yard dumpster fully loaded with concrete could exceed 40,000 lbs, far above any weight limit. Most companies set limits of 2–4 tons for concrete dumpsters. Fill to 1/4 to 1/3 capacity and watch your weight.',
      },
    },
    {
      '@type': 'Question',
      name: 'How heavy is concrete?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'According to ASTM C138 (Standard Test Method for Density of Concrete), standard concrete weighs approximately 4,050 lbs (about 2 tons) per cubic yard, or 150 lbs per cubic foot. A typical 10×10 foot concrete patio at 4 inches deep is about 1.23 cubic yards — roughly 5,000 lbs. For comparison, the same volume of drywall weighs only about 570 lbs, making concrete roughly 9x heavier by volume.',
      },
    },
  ],
}

const OPTIONS = [
  {
    title: 'Concrete Recycling Center',
    icon: '♻️',
    cost: '$5–$25 per ton',
    effort: 'Medium (transport yourself)',
    best: 'Cheapest option if you can haul it',
    description: 'Most metro areas have C&D (Construction & Demolition) recycling facilities or concrete-specific recyclers that accept broken concrete. They crush it into recycled aggregate used for road base. This is by far the cheapest disposal method.',
    howTo: [
      'Break concrete into manageable chunks (under 2 ft pieces preferred)',
      'Load into a truck, trailer, or rental vehicle',
      'Find a local C&D recycler or concrete recycler (search "[your city] concrete recycling")',
      'Weigh in at the facility and pay per-ton rate',
    ],
    color: 'green',
  },
  {
    title: 'Concrete-Only Dumpster',
    icon: '🗑️',
    cost: '$275–$500 + weight fees',
    effort: 'Low–Medium (you load)',
    best: 'Large amounts at the job site',
    description: 'Many dumpster rental companies offer concrete-specific roll-offs (also called "heavy material" dumpsters) at lower rates since the material is recyclable. These have strict weight limits — typically 2–4 tons. Do NOT fill them to the brim.',
    howTo: [
      'Request a "concrete-only" or "heavy material" dumpster',
      'Load concrete in layers — don\'t pile high',
      'Stop at 1/4 to 1/3 capacity by volume',
      'Ask about weight limits and overage rates upfront',
    ],
    color: 'blue',
  },
  {
    title: 'Mixed Debris Dumpster',
    icon: '🏗️',
    cost: '$300–$600 + weight overages',
    effort: 'Low (you load)',
    best: 'Concrete mixed with other renovation debris',
    description: 'If you\'re doing a full renovation and have concrete along with other debris (drywall, framing, etc.), a standard roll-off dumpster works. Keep concrete to a small portion — heavier than ~2 tons incurs overage fees of $50–$100+ per ton.',
    howTo: [
      'Rent a 10-yard or 20-yard roll-off',
      'Place concrete on the bottom in small amounts',
      'Fill the rest with lighter debris (drywall, wood, etc.)',
      'Ask your provider about their concrete and weight policies',
    ],
    color: 'blue',
  },
  {
    title: 'Junk Removal Service',
    icon: '🚛',
    cost: '$100–$600+',
    effort: 'None (crew loads)',
    best: 'Small amount, no ability to load yourself',
    description: 'Junk removal companies will haul concrete, but they typically charge a premium because of the weight. Pricing is usually by volume (truckload), but they factor in the weight surcharge. Good for small patios or if you can\'t do any loading.',
    howTo: [
      'Call junk removal companies and specify it\'s concrete',
      'Get a quote that includes heavy material rates',
      'Have concrete accessible and ready to load',
      'Crew loads and hauls away',
    ],
    color: 'orange',
  },
  {
    title: 'Give It Away (Free)',
    icon: '🤝',
    cost: 'Free',
    effort: 'Low (post and wait)',
    best: 'Whole slabs in reusable condition',
    description: 'Landscapers, gardeners, and property owners sometimes want broken concrete for landscaping, fill, or retaining wall projects. List clean, broken concrete for free on Craigslist, Facebook Marketplace, or Freecycle. People often haul it themselves.',
    howTo: [
      'Break large slabs into smaller pieces if possible',
      'Post on Craigslist and Facebook Marketplace as "free concrete"',
      'Include photos and quantity in cubic yards or pounds',
      'Let the taker haul it — coordinate pickup timing',
    ],
    color: 'green',
  },
]

const colorMap: Record<string, string> = {
  green: 'border-green-200 bg-green-50',
  blue: 'border-blue-200 bg-blue-50',
  orange: 'border-orange-200 bg-orange-50',
}

const badgeMap: Record<string, string> = {
  green: 'bg-green-100 text-green-700',
  blue: 'bg-blue-100 text-blue-700',
  orange: 'bg-orange-100 text-orange-700',
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Dispose of Concrete',
  description: 'Step-by-step guide to disposing of broken concrete from patios, driveways, and demolition projects.',
  totalTime: 'P1D',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Calculate the weight',
      text: 'Estimate how much concrete you have. Standard concrete weighs approximately 4,050 lbs per cubic yard (150 lbs per cubic foot). A 10×10 ft patio at 4 inches deep weighs roughly 5,000 lbs.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Break concrete into manageable chunks',
      text: 'Use a sledgehammer or jackhammer to break concrete into pieces under 2 feet. Smaller chunks are easier to haul and pack more efficiently into disposal containers.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Choose your disposal method',
      text: 'For the cheapest option, haul to a concrete recycling or C&D facility ($5–$25 per ton). For job-site convenience, rent a concrete-only dumpster ($275–$500). For small amounts without hauling, hire a junk removal service ($100–$600).',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Watch weight limits if using a dumpster',
      text: 'Never fill a concrete dumpster more than 1/3 full by volume. Most dumpsters have 2–4 ton weight limits. Exceeding limits results in overage fees of $50–$100+ per ton.',
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Dispose of Concrete: Recycling, Dumpster & Haul-Away',
  description: 'Complete guide to concrete disposal — recycling centers, dumpster rental with weight limits, junk removal, and free giveaway options.',
  datePublished: '2026-02-23',
  dateModified: '2026-02-23',
  author: { '@type': 'Organization', name: 'DumpsterListing', url: 'https://dumpsterlisting.com' },
  publisher: { '@type': 'Organization', name: 'DumpsterListing', url: 'https://dumpsterlisting.com' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://dumpsterlisting.com/how-to-dispose-of-concrete' },
}

export default function HowToDisposeOfConcretePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs crumbs={[
            { label: 'Home', href: '/' },
            { label: 'How to Dispose of Concrete' },
          ]} />
          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900">
            How to Dispose of Concrete: All Options Compared
          </h1>
          <p className="mt-3 max-w-3xl text-gray-600 leading-relaxed">
            Concrete is one of the heaviest materials you'll ever deal with — a single cubic yard
            weighs about 4,000 lbs. Getting disposal wrong means expensive weight overages. Here's
            everything you need to know.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-14">

        {/* Weight warning */}
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
            <span className="text-2xl">⚠️</span> The Weight Problem with Concrete
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            Concrete weighs approximately <strong>4,050 lbs per cubic yard</strong> (about 150 lbs per cubic foot).
            A standard 10-yard dumpster can only legally carry 2–4 tons total. That means a 10-yard dumpster
            fully loaded with concrete could exceed 40,000 lbs — 10x the legal limit. Always plan for weight limits.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            {[
              { label: '10×10 patio (4" deep)', weight: '~5,000 lbs' },
              { label: '20×20 patio (4" deep)', weight: '~20,000 lbs' },
              { label: 'Driveway (2-car, 4")', weight: '~40,000 lbs' },
              { label: 'Typical weight limit', weight: '4,000–8,000 lbs' },
            ].map((s) => (
              <div key={s.label} className="rounded-lg bg-white border border-amber-200 p-3">
                <div className="text-sm font-bold text-amber-700">{s.weight}</div>
                <div className="text-xs text-gray-600 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Options */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">5 Ways to Dispose of Concrete</h2>
          {OPTIONS.map((opt, i) => (
            <div key={opt.title} className={`rounded-2xl border p-6 ${colorMap[opt.color]}`}>
              <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {i + 1}. {opt.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-0.5">{opt.best}</p>
                </div>
                <div className="flex gap-2 flex-wrap">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${badgeMap[opt.color]}`}>{opt.cost}</span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-gray-100 text-gray-600">{opt.effort}</span>
                </div>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">{opt.description}</p>
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">How to do it:</p>
                <ol className="space-y-1.5">
                  {opt.howTo.map((step, idx) => (
                    <li key={step} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="h-5 w-5 rounded-full bg-white border border-gray-200 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">{idx + 1}</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          ))}
        </section>

        {/* Cost comparison table */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-5">Cost Comparison by Project Size</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">Project</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">Est. Weight</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">Recycling Center</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">Dumpster Rental</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 hidden lg:table-cell">Junk Removal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { project: '10×10 patio (4" deep)', weight: '~2.5 tons', recycling: '$25–$60', dumpster: '$300–$400', junk: '$150–$350' },
                  { project: '20×20 patio (4" deep)', weight: '~10 tons', recycling: '$100–$250', dumpster: '$400–$700+', junk: '$400–$800' },
                  { project: 'Sidewalk (50 linear ft)', weight: '~3 tons', recycling: '$30–$75', dumpster: '$300–$450', junk: '$200–$450' },
                  { project: 'Foundation demo', weight: '20–100+ tons', recycling: '$200–$2,000', dumpster: 'Multiple loads required', junk: 'Not practical' },
                ].map((row) => (
                  <tr key={row.project} className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-800">{row.project}</td>
                    <td className="px-4 py-3 text-gray-600">{row.weight}</td>
                    <td className="px-4 py-3 text-green-700 font-semibold">{row.recycling}</td>
                    <td className="px-4 py-3 text-gray-600 hidden md:table-cell">{row.dumpster}</td>
                    <td className="px-4 py-3 text-gray-600 hidden lg:table-cell">{row.junk}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-2">* Recycling center prices assume you self-haul. Add hauling costs if renting a truck.</p>
        </section>

        {/* Dumpster tips */}
        <section className="rounded-2xl border border-gray-200 bg-white p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Using a Dumpster for Concrete: Key Rules</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { rule: 'Use the smallest dumpster', detail: 'A 10-yard is usually the right choice for concrete — you\'ll fill it by weight, not volume.' },
              { rule: 'Ask about concrete-only rates', detail: 'Some haulers offer discounted concrete-only dumpsters since the material is recyclable.' },
              { rule: 'Know the weight limit', detail: 'Most residential dumpsters have 2–4 ton limits for heavy materials. Get this in writing.' },
              { rule: 'Never fill to the brim', detail: 'A partially-full dumpster of concrete can already be at the weight limit. Stop at 1/3 full.' },
              { rule: 'Separate from other debris', detail: 'Mixing concrete with general trash usually means paying general waste rates — more expensive.' },
              { rule: 'Break into small chunks', detail: 'Smaller pieces pack more efficiently and are easier to load. Use a sledgehammer for slabs.' },
            ].map((t) => (
              <div key={t.rule} className="flex gap-3">
                <div className="h-6 w-6 rounded-full bg-green-100 text-green-700 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">✓</div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">{t.rule}</div>
                  <div className="text-xs text-gray-600 mt-0.5">{t.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Related tools */}
        <section className="rounded-xl border border-gray-100 bg-gray-50 p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Related Calculators & Guides</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: 'Concrete Weight Calculator', href: '/concrete-weight-calculator', desc: 'Calculate the weight of your concrete project' },
              { label: 'Dumpster Size Estimator', href: '/dumpster-size-estimator', desc: 'Find the right size dumpster for your project' },
              { label: 'What Can You Put in a Dumpster?', href: '/what-can-you-put-in-a-dumpster', desc: 'Allowed and prohibited items list' },
              { label: 'How Much Does Dumpster Rental Cost?', href: '/how-much-does-dumpster-rental-cost', desc: 'Pricing guide with weight overage info' },
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
          <h2 className="text-2xl font-bold mb-2">Need a Concrete Dumpster?</h2>
          <p className="text-green-100 mb-6 max-w-xl mx-auto">Find local companies that specialize in heavy material and concrete disposal.</p>
          <Link href="/dumpster-rental"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 font-bold text-green-700 hover:bg-green-50 transition">
            Find Local Companies <ArrowRight className="h-5 w-5" />
          </Link>
        </section>
      </div>
    </>
  )
}
