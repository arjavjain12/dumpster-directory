import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Scale,
  Home,
  DollarSign,
  Layers,
  HardHat,
} from 'lucide-react'
import Breadcrumbs from '@/components/Breadcrumbs'
import AuthorByline from '@/components/AuthorByline'

export const metadata: Metadata = {
  title: 'Dumpster Rental for Roofing Projects: Sizes & Costs',
  description:
    'Learn which dumpster size to rent for roofing projects, how much shingles weigh, average costs ($300-$500), weight limits, and tips to avoid overage fees.',
  alternates: { canonical: '/dumpster-rental-for-roofing' },
  openGraph: {
    title: 'Dumpster Rental for Roofing Projects: Sizes & Costs',
    description:
      'Learn which dumpster size to rent for roofing projects, how much shingles weigh, average costs ($300-$500), weight limits, and tips to avoid overage fees.',
  },
}

const FAQ_ITEMS = [
  {
    question: 'What size dumpster do I need for a roofing project?',
    answer:
      'A 10-yard dumpster handles most single-layer residential roof tear-offs up to about 1,500 square feet. For larger homes, multi-layer roofs, or roofs with heavy materials like slate or tile, a 20-yard dumpster is the safer choice. Your roofer can usually estimate the volume based on the number of shingle squares being removed.',
  },
  {
    question: 'How much do roofing shingles weigh in a dumpster?',
    answer:
      'A typical 2,000 square-foot asphalt shingle roof with one layer weighs between 2 and 3 tons when removed. A second layer adds another 1.5 to 2.5 tons. This matters because most dumpster rentals have a weight allowance of 2 to 4 tons, and overage fees of $40 to $75 per additional ton add up fast.',
  },
  {
    question: 'Can I mix roofing debris with other construction waste?',
    answer:
      'You can, but it is usually more expensive. Many haulers offer a discounted roofing-only rate because shingles are recycled separately. Mixing in household junk, drywall, or lumber typically moves you to a higher mixed-debris disposal rate. If you have other waste to toss, it is often cheaper to keep roofing debris in its own container.',
  },
]

const SIZE_RECOMMENDATIONS = [
  {
    size: '10-Yard Dumpster',
    icon: Home,
    bestFor: 'Single-layer roof, up to 1,500 sq ft',
    weight: '2–3 ton allowance',
    cost: '$300–$400',
    note: 'Most popular for standard residential re-roofs',
  },
  {
    size: '20-Yard Dumpster',
    icon: Layers,
    bestFor: 'Multi-layer roof, 1,500–3,000 sq ft, or heavy materials',
    weight: '3–4 ton allowance',
    cost: '$400–$500',
    note: 'Recommended if you are unsure — avoids a second haul',
  },
]

const TIPS = [
  {
    title: 'Ask for a Roofing-Specific Rate',
    detail:
      'Many haulers offer a lower per-ton disposal rate for shingle-only loads because asphalt shingles can be recycled into road base material. Ask specifically whether they have a roofing rate — it can save $50–$100 compared to mixed-debris pricing.',
  },
  {
    title: 'Do Not Mix Roofing With Other Debris',
    detail:
      'Keeping the dumpster shingle-only qualifies you for recycling rates and avoids contamination surcharges. If you have other construction waste, rent a separate small container or save it for a later haul.',
  },
  {
    title: 'Know Your Weight Limit Before You Load',
    detail:
      'Confirm the included weight allowance in your rental agreement. A single layer of shingles from a 2,000 sq ft roof weighs about 2–3 tons. If your roof has two or three layers, you may need to negotiate a higher weight allowance upfront rather than paying overage fees after the fact.',
  },
  {
    title: 'Place the Dumpster Close to the Roof Edge',
    detail:
      'Position the container where roofers can toss debris directly into it from the roof. This saves hours of labor compared to carrying bundles down a ladder. Just make sure the placement area is clear and the dumpster is accessible for pickup.',
  },
  {
    title: 'Schedule Delivery for the Morning of Tear-Off',
    detail:
      'Roofing dumpsters fill fast — most residential jobs fill a 10-yard container in a single day. Having the dumpster arrive the morning work begins avoids piling shingles on your lawn and double-handling the debris.',
  },
]

export default function DumpsterRentalForRoofingPage() {
  return (
    <>
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: FAQ_ITEMS.map((item) => ({
              '@type': 'Question',
              name: item.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer,
              },
            })),
          }),
        }}
      />

      {/* Hero */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs
            crumbs={[
              { label: 'Home', href: '/' },
              { label: 'Dumpster Rental for Roofing Projects' },
            ]}
          />
          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900">
            Dumpster Rental for Roofing Projects: Sizes, Costs & Tips
          </h1>
          <p className="mt-3 max-w-3xl text-gray-600 leading-relaxed">
            Roofing debris is one of the heaviest materials you can put in a dumpster.
            A single-layer asphalt shingle roof generates{' '}
            <strong className="text-gray-900">2–3 tons of waste</strong> — enough to blow past a
            standard weight allowance and trigger overage fees. This guide covers the right dumpster
            size, realistic costs, and practical tips to keep your roofing project on budget.
          </p>
          <AuthorByline updatedDate="March 2026" readTimeMin={5} showMethodology />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-14">

        {/* Why Roofing Needs Special Consideration */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Why Roofing Debris Is Different
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl">
            Most dumpster rentals are priced around volume — how much space you fill. But roofing
            projects flip that equation. Shingles, underlayment, and flashing are dense and heavy,
            so you will usually hit the weight limit long before the container is full.
          </p>
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-5 flex items-start gap-4">
            <AlertTriangle className="h-6 w-6 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-gray-900 mb-1">Weight Is the Real Constraint</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                A 10-yard dumpster holds roughly 2–3 tons of roofing shingles — but it is only half
                full by volume at that point. If you overload it, expect overage fees of{' '}
                <strong>$40–$75 per extra ton</strong>. Always confirm the weight allowance before
                loading and track your shingle count as you go.
              </p>
            </div>
          </div>
        </section>

        {/* Size Recommendations */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Recommended Dumpster Sizes for Roofing
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl">
            For most residential re-roofing jobs, you need a 10-yard or 20-yard container. Here is
            how they compare.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {SIZE_RECOMMENDATIONS.map((rec) => {
              const Icon = rec.icon
              return (
                <div
                  key={rec.size}
                  className="rounded-xl border border-gray-200 bg-white p-5 hover:border-green-200 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-10 w-10 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                      <Icon className="h-5 w-5 text-green-700" />
                    </div>
                    <h3 className="font-bold text-gray-900">{rec.size}</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 shrink-0" />
                      <span className="text-gray-700"><strong>Best for:</strong> {rec.bestFor}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Scale className="h-4 w-4 text-green-600 shrink-0" />
                      <span className="text-gray-700"><strong>Weight:</strong> {rec.weight}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-green-600 shrink-0" />
                      <span className="text-gray-700"><strong>Cost:</strong> {rec.cost}</span>
                    </div>
                  </div>
                  <p className="mt-3 text-xs text-gray-500 italic">{rec.note}</p>
                </div>
              )
            })}
          </div>
        </section>

        {/* Cost Breakdown */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Roofing Dumpster Costs: What to Expect
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl">
            Most homeowners pay <strong className="text-gray-900">$300–$500</strong> for a roofing
            dumpster rental, depending on container size, weight allowance, and local disposal rates.
          </p>
          <div className="rounded-xl border border-gray-200 bg-white overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left px-5 py-3 font-semibold text-gray-900">Cost Component</th>
                  <th className="text-left px-5 py-3 font-semibold text-gray-900">Typical Range</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr><td className="px-5 py-3 text-gray-700">10-yard rental (7 days, 2-ton allowance)</td><td className="px-5 py-3 text-gray-700">$300–$400</td></tr>
                <tr><td className="px-5 py-3 text-gray-700">20-yard rental (7 days, 3-ton allowance)</td><td className="px-5 py-3 text-gray-700">$400–$500</td></tr>
                <tr><td className="px-5 py-3 text-gray-700">Overage weight fee (per additional ton)</td><td className="px-5 py-3 text-gray-700">$40–$75</td></tr>
                <tr><td className="px-5 py-3 text-gray-700">Extra rental days</td><td className="px-5 py-3 text-gray-700">$5–$15/day</td></tr>
                <tr><td className="px-5 py-3 text-gray-700">Permit (if placed on street)</td><td className="px-5 py-3 text-gray-700">$20–$100</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Tips */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            5 Tips to Save Money on Roofing Dumpsters
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl">
            The biggest cost risks with roofing dumpsters are weight overages and mixed-debris
            surcharges. These tips help you avoid both.
          </p>
          <div className="space-y-3">
            {TIPS.map((tip) => (
              <div
                key={tip.title}
                className="flex gap-4 rounded-xl border border-gray-200 bg-white p-4 hover:border-green-200 transition-colors"
              >
                <HardHat className="h-5 w-5 text-green-700 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">{tip.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{tip.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {FAQ_ITEMS.map((faq) => (
              <div
                key={faq.question}
                className="rounded-xl border border-gray-200 bg-white p-5 hover:border-green-200 transition-colors"
              >
                <h3 className="font-bold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Internal Links */}
        <section className="rounded-xl border border-gray-100 bg-gray-50 p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Related Guides & Tools</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: 'Roofing Dumpster Rental', href: '/dumpster-rental/roofing', desc: 'Find roofing dumpster providers near you' },
              { label: '10-Yard Dumpster Guide', href: '/dumpster-sizes/10-yard', desc: 'Dimensions, capacity, and pricing details' },
              { label: 'Weight Limit Calculator', href: '/dumpster-weight-limit-calculator', desc: 'Estimate debris weight before booking' },
              { label: 'Dumpster Rental Checklist', href: '/dumpster-rental-checklist', desc: 'Everything to do before, during, and after your rental' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-3 hover:border-green-300 transition group"
              >
                <ArrowRight className="h-4 w-4 text-green-500 shrink-0 mt-0.5 group-hover:translate-x-0.5 transition-transform" />
                <div>
                  <div className="text-sm font-semibold text-gray-900">{link.label}</div>
                  <div className="text-xs text-gray-500">{link.desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-xl border border-green-200 bg-green-50 p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Ready to Rent a Roofing Dumpster?
          </h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Compare quotes from local haulers who specialize in roofing debris. Most offer next-day
            delivery and shingle-only pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/dumpster-rental-near-me"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-700 px-7 py-3.5 font-bold text-white hover:bg-green-800 transition"
            >
              Find Local Companies <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/dumpster-rental-cost"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-green-300 bg-white px-7 py-3.5 font-bold text-green-700 hover:bg-green-50 transition"
            >
              See Pricing Guide <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </section>

      </div>
    </>
  )
}
