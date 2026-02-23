import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'How to Dispose of Furniture: 6 Options (Free & Paid) (2026)',
  description:
    'Learn the best ways to get rid of old furniture — from free donation pickup to dumpster rental. Compare costs, effort, and timelines for each option.',
  alternates: { canonical: '/how-to-dispose-of-furniture' },
  openGraph: {
    title: 'How to Dispose of Old Furniture: 6 Options Compared',
    description: 'Free donation pickup, selling, junk removal, dumpster rental — compare all furniture disposal options by cost, effort, and speed.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do you get rid of a sofa for free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can get rid of a sofa for free by donating it to organizations like Habitat for Humanity ReStore, Salvation Army, or Goodwill — many offer free pickup. You can also list it on Facebook Marketplace or Craigslist as "free" and people will often haul it themselves. Some municipalities offer free bulk item pickup a few times per year.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you put furniture in a dumpster?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, most furniture is accepted in roll-off dumpsters — sofas, mattresses (sometimes with a fee), bed frames, dressers, dining sets, and more. A 10-yard dumpster can typically handle a few rooms of furniture. This is the best option when you have a large amount of furniture to dispose of at once.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does furniture removal cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Junk removal companies typically charge $75–$150 per item for single-item pickup, or $200–$600 for a half-truckload. Renting a dumpster costs $275–$450 for a 10-yard container, which makes more sense when you have multiple pieces. Donation pickup is usually free for qualifying items.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Habitat for Humanity pick up furniture?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Habitat for Humanity ReStore offers free furniture pickup in many areas. They accept gently used furniture in good condition — no rips, stains, or structural damage. Schedule a pickup online at habitat.org. Items are resold to fund affordable housing projects.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I leave furniture on the curb?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Curb disposal rules vary by city. Many municipalities have a bulk item pickup program where residents schedule large-item pickups a few times per year. Some allow furniture curbside on trash day. Others prohibit it and may fine you. Always check your city\'s waste management rules first.',
      },
    },
  ],
}

const OPTIONS = [
  {
    rank: 1,
    title: 'Donate to Charity (Free)',
    effort: 'Low',
    cost: 'Free',
    speed: '1–5 days',
    bestFor: 'Furniture in good condition',
    description: 'Organizations like Habitat for Humanity ReStore, Salvation Army, and Goodwill accept gently used furniture and often offer free scheduled pickup. Your furniture gets a second life and you may qualify for a tax deduction.',
    pros: ['Completely free', 'Tax deduction possible', 'Furniture gets reused', 'Free pickup at many locations'],
    cons: ['Only takes clean, undamaged items', 'Scheduling required', 'May have waiting list'],
    orgs: ['Habitat for Humanity ReStore', 'Salvation Army', 'Goodwill', 'Local shelters & churches'],
    color: 'green',
  },
  {
    rank: 2,
    title: 'Sell It Online',
    effort: 'Medium',
    cost: 'Free (or earn money)',
    speed: '1–14 days',
    bestFor: 'Quality furniture with resale value',
    description: 'List on Facebook Marketplace, Craigslist, or OfferUp. Nice furniture can sell for $50–$500+. For high-end pieces, consider Chairish or 1stDibs. If you want fast removal without cash, list it as "free" — people will typically haul it themselves within hours.',
    pros: ['Can earn money', 'Free to list', 'Buyer handles removal', '"Free" listings move quickly'],
    cons: ['Time to photograph and list', 'No-shows and flaky buyers', 'May take days or weeks', 'Only for sellable condition items'],
    orgs: ['Facebook Marketplace', 'Craigslist', 'OfferUp', 'Chairish (high-end)'],
    color: 'blue',
  },
  {
    rank: 3,
    title: 'Curbside / Bulk Pickup',
    effort: 'Very Low',
    cost: 'Free or low cost',
    speed: '1–30 days',
    bestFor: 'Residents with scheduled bulk pickup service',
    description: 'Many municipalities offer bulk item pickup — usually a few times per year or on request. Check with your city\'s waste management department. Some cities charge a small fee per item. Simply place furniture at the curb on the scheduled day.',
    pros: ['Little to no cost', 'No hauling required', 'Eco-friendly'],
    cons: ['Infrequent schedules', 'Not all cities offer it', 'Items sit outside until pickup'],
    orgs: ['Your city waste management website', '311 call center'],
    color: 'green',
  },
  {
    rank: 4,
    title: 'Junk Removal Service',
    effort: 'None',
    cost: '$75–$600+',
    speed: 'Same or next day',
    bestFor: 'Heavy items or when you cannot move furniture yourself',
    description: 'Companies like 1-800-GOT-JUNK, LoadUp, or local providers send a crew to load and haul your furniture. Ideal for heavy pieces (pianos, sectionals) or when you\'re not able to do any lifting. Most offer same-day or next-day service.',
    pros: ['Zero effort — crew does everything', 'Same-day available', 'Can handle any condition furniture', 'No space or equipment needed'],
    cons: ['Most expensive per-item option', 'Price jumps with volume', 'Must be home for appointment'],
    orgs: ['1-800-GOT-JUNK', 'LoadUp', 'College HUNKS', 'Local junk removal companies'],
    color: 'orange',
  },
  {
    rank: 5,
    title: 'Rent a Dumpster',
    effort: 'Medium',
    cost: '$275–$450 (10-yd)',
    speed: '24–48 hr delivery',
    bestFor: 'Multiple pieces or combined with other debris',
    description: 'When clearing out multiple rooms of furniture — or doing a renovation at the same time — a roll-off dumpster is the most cost-effective option. A 10-yard dumpster holds 3–5 sofas, multiple mattresses, and several rooms of household junk.',
    pros: ['Best value for large volumes', 'Work at your own pace', 'Combine with other debris', 'Keep for 7–14 days'],
    cons: ['You do the loading', 'Needs driveway space', 'Minimum cost even for light loads'],
    orgs: [],
    color: 'purple',
  },
  {
    rank: 6,
    title: 'Furniture Retailer Haul-Away',
    effort: 'None',
    cost: 'Free–$30 per item',
    speed: 'On delivery day',
    bestFor: 'Replacing furniture with a new purchase',
    description: 'Many furniture retailers (IKEA, Ashley, Wayfair, local stores) offer haul-away of your old furniture when they deliver new pieces. This is the easiest option when you\'re already buying replacement furniture. Fees typically range from free to $30 per item.',
    pros: ['Convenient — happens at delivery', 'Often free or very cheap', 'No scheduling required'],
    cons: ['Only available when buying new furniture', 'Not all retailers offer it', 'Limited to items being replaced'],
    orgs: ['IKEA', 'Ashley Furniture', 'Wayfair', 'Local furniture stores'],
    color: 'blue',
  },
]

const colorMap: Record<string, string> = {
  green: 'border-green-200 bg-green-50',
  blue: 'border-blue-200 bg-blue-50',
  orange: 'border-orange-200 bg-orange-50',
  purple: 'border-purple-200 bg-purple-50',
}

const badgeMap: Record<string, string> = {
  green: 'bg-green-100 text-green-700',
  blue: 'bg-blue-100 text-blue-700',
  orange: 'bg-orange-100 text-orange-700',
  purple: 'bg-purple-100 text-purple-700',
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Dispose of Old Furniture',
  description: 'Step-by-step guide to getting rid of old furniture — from free donation to dumpster rental.',
  totalTime: 'PT1D',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Assess the condition',
      text: 'Determine if your furniture is in good condition (donate/sell) or damaged (dispose). Clean, undamaged furniture can be donated to Habitat for Humanity ReStore, Salvation Army, or Goodwill for free pickup.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Try free options first',
      text: 'List furniture on Facebook Marketplace or Craigslist as free. Many people will haul it away themselves within hours. Check if your municipality offers free bulk item pickup.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Choose a paid option for remaining items',
      text: 'For items that cannot be donated or sold, choose between junk removal ($75–$600+) for convenience or dumpster rental ($275–$450 for a 10-yard) if you have multiple pieces to dispose of at once.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Schedule pickup or delivery',
      text: 'Book your chosen service. Junk removal typically offers same-day or next-day service. Dumpster rental delivers within 24–48 hours and you keep it for 7–14 days to load at your own pace.',
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Dispose of Old Furniture: 6 Options Compared',
  description: 'Compare all furniture disposal options — free donation pickup, selling online, junk removal, and dumpster rental — by cost, effort, and speed.',
  datePublished: '2026-02-23',
  dateModified: '2026-02-23',
  author: { '@type': 'Organization', name: 'DumpsterListing', url: 'https://dumpsterlisting.com' },
  publisher: { '@type': 'Organization', name: 'DumpsterListing', url: 'https://dumpsterlisting.com' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://dumpsterlisting.com/how-to-dispose-of-furniture' },
}

export default function HowToDisposeOfFurniturePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs crumbs={[
            { label: 'Home', href: '/' },
            { label: 'How to Dispose of Furniture' },
          ]} />
          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900">
            How to Dispose of Old Furniture: 6 Options Compared
          </h1>
          <p className="mt-3 max-w-3xl text-gray-600 leading-relaxed">
            Getting rid of furniture doesn't have to be expensive or complicated. From free donation
            pickup to dumpster rental, here are all your options ranked by cost and effort — so you
            can choose the right one for your situation.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-14">

        {/* Quick comparison */}
        <div className="overflow-x-auto rounded-xl border border-gray-200">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left px-4 py-3 font-semibold text-gray-700">Option</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-700">Cost</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-700 hidden sm:table-cell">Effort</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">Speed</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-700 hidden lg:table-cell">Best For</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {OPTIONS.map((opt) => (
                <tr key={opt.title} className="hover:bg-gray-50 transition">
                  <td className="px-4 py-3 font-semibold text-gray-900">{opt.title}</td>
                  <td className={`px-4 py-3 font-bold ${opt.cost.startsWith('Free') || opt.cost === 'Free (or earn money)' ? 'text-green-700' : 'text-gray-700'}`}>{opt.cost}</td>
                  <td className="px-4 py-3 text-gray-600 hidden sm:table-cell">{opt.effort}</td>
                  <td className="px-4 py-3 text-gray-600 hidden md:table-cell">{opt.speed}</td>
                  <td className="px-4 py-3 text-gray-500 text-xs hidden lg:table-cell">{opt.bestFor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Detailed option cards */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">All 6 Options In Detail</h2>
          {OPTIONS.map((opt) => (
            <div key={opt.title} className={`rounded-2xl border p-6 ${colorMap[opt.color]}`}>
              <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {opt.rank}. {opt.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-0.5">Best for: {opt.bestFor}</p>
                </div>
                <div className="flex gap-2 flex-wrap">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${badgeMap[opt.color]}`}>{opt.cost}</span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-gray-100 text-gray-600">{opt.speed}</span>
                </div>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">{opt.description}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5">Pros</p>
                  <ul className="space-y-1">
                    {opt.pros.map((p) => (
                      <li key={p} className="text-xs text-gray-700 flex items-start gap-1.5">
                        <span className="text-green-500 font-bold">+</span> {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5">Cons</p>
                  <ul className="space-y-1">
                    {opt.cons.map((c) => (
                      <li key={c} className="text-xs text-gray-700 flex items-start gap-1.5">
                        <span className="text-red-400 font-bold">−</span> {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {opt.orgs.length > 0 && (
                <div className="mt-3 pt-3 border-t border-white/50">
                  <p className="text-xs font-semibold text-gray-600">Where to go: {opt.orgs.join(' · ')}</p>
                </div>
              )}
            </div>
          ))}
        </section>

        {/* Furniture type guide */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-5">Best Option by Furniture Type</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">Furniture Type</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">Best Option</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 hidden sm:table-cell">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { type: 'Sofa / Sectional', best: 'Donate or sell', note: 'High demand on Facebook Marketplace; charities often pick up' },
                  { type: 'Mattress', best: 'Junk removal or dumpster', note: 'Donation rare; most charities don\'t accept; $25–$75 dumpster fee common' },
                  { type: 'Bed frame', best: 'Sell or donate', note: 'Metal frames have scrap value; wood frames donate well' },
                  { type: 'Dresser / Wardrobe', best: 'Sell or donate', note: 'Solid wood pieces sell well; pressed wood donates less successfully' },
                  { type: 'Dining table + chairs', best: 'Sell or donate', note: 'Popular on Marketplace; good-condition sets move quickly' },
                  { type: 'Desk', best: 'Sell or dumpster', note: 'Solid wood desks sell; laminate desks go straight to disposal' },
                  { type: 'Multiple pieces at once', best: 'Dumpster rental', note: 'Best value when clearing multiple rooms simultaneously' },
                  { type: 'Piano', best: 'Junk removal', note: 'Extremely heavy — specialized movers or junk removal required' },
                ].map((row) => (
                  <tr key={row.type} className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-800">{row.type}</td>
                    <td className="px-4 py-3 text-green-700 font-semibold">{row.best}</td>
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
              { label: 'Dumpster Size Estimator', href: '/dumpster-size-estimator', desc: 'Find the right size for your cleanout' },
              { label: 'Dumpster Rental vs Junk Removal', href: '/dumpster-rental-vs-junk-removal', desc: 'Compare costs and use cases' },
              { label: 'What Can You Put in a Dumpster?', href: '/what-can-you-put-in-a-dumpster', desc: 'Full allowed and prohibited items list' },
              { label: 'Dumpster Rental Pricing Guide', href: '/how-much-does-dumpster-rental-cost', desc: 'Average costs by size and region' },
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
          <h2 className="text-2xl font-bold mb-2">Need a Dumpster for Your Cleanout?</h2>
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
