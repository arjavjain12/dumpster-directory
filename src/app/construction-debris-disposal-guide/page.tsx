import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  HardHat,
  Truck,
  Scale,
  Recycle,
  Info,
} from 'lucide-react'
import Breadcrumbs from '@/components/Breadcrumbs'
import AuthorByline from '@/components/AuthorByline'

export const metadata: Metadata = {
  title: 'Construction Debris Disposal Guide: What Goes Where',
  description:
    'Learn which construction debris goes in a dumpster vs needs special disposal. Covers drywall, lumber, concrete, metal, roofing, and insulation with size and weight tips.',
  alternates: { canonical: '/construction-debris-disposal-guide' },
  openGraph: {
    title: 'Construction Debris Disposal Guide: What Goes Where',
    description:
      'Learn which construction debris goes in a dumpster vs needs special disposal. Covers drywall, lumber, concrete, metal, roofing, and insulation with size and weight tips.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What construction debris can go in a regular dumpster?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most construction debris can go in a standard roll-off dumpster, including drywall, lumber, plywood, vinyl siding, carpet, non-asbestos insulation, and general demolition waste. However, heavy materials like concrete, brick, and dirt often require a dedicated heavy-debris container due to weight, and hazardous materials like asbestos, lead paint, and chemical solvents are always prohibited.',
      },
    },
    {
      '@type': 'Question',
      name: 'What size dumpster do I need for construction debris?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For a single room renovation, a 10-yard dumpster is usually sufficient. A full home remodel typically needs a 20-yard container. For new construction or large demolition projects, a 30 or 40-yard dumpster is recommended. If your debris is mostly heavy material like concrete or roofing shingles, size down and focus on weight limits — a 10-yard loaded with concrete can easily hit 10 tons.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost to dispose of construction debris?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A 10-yard construction dumpster rental averages $300–$500, a 20-yard runs $350–$600, and a 30-yard costs $400–$700. Prices vary by region and debris type. Heavy materials like concrete may cost more due to weight surcharges. Recycling certain materials (metal, clean concrete) can actually reduce your total cost since recycling facilities charge lower tipping fees than landfills.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I mix different types of construction debris in one dumpster?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, most haulers allow mixed construction debris in a single container — lumber, drywall, carpet, vinyl, and general demo waste can all go together. The main exception is heavy inert materials (concrete, brick, dirt, asphalt) which many haulers require to be kept in a separate, dedicated container due to their extreme weight. Always confirm your hauler\'s mixing policy when booking.',
      },
    },
  ],
}

const DEBRIS_TYPES = [
  {
    name: 'Drywall / Sheetrock',
    icon: CheckCircle,
    iconColor: 'text-green-600',
    dumpsterOk: true,
    weight: '~1.7 lbs per sq ft',
    sizeRec: '10-yd for a room, 20-yd for a full home',
    notes: 'Accepted in most standard dumpsters. Unpainted drywall can often be recycled at dedicated facilities for lower disposal costs. Wet or mold-damaged drywall is significantly heavier — account for the extra weight.',
  },
  {
    name: 'Lumber & Plywood',
    icon: CheckCircle,
    iconColor: 'text-green-600',
    dumpsterOk: true,
    weight: '~300–500 lbs per cubic yard',
    sizeRec: '10-yd for framing scraps, 20-yd for full demo',
    notes: 'Untreated wood is accepted everywhere. Pressure-treated lumber is accepted by most haulers but cannot be recycled or burned. Break down long boards to maximize container space and avoid overhang.',
  },
  {
    name: 'Concrete, Brick & Masonry',
    icon: AlertTriangle,
    iconColor: 'text-amber-500',
    dumpsterOk: false,
    weight: '~2,500 lbs per cubic yard (very heavy)',
    sizeRec: '10-yd dedicated heavy-debris container',
    notes: 'Most haulers require a dedicated container for concrete and masonry because it is so dense — a 10-yard dumpster of concrete can weigh 10+ tons. Clean concrete (no rebar, no trash mixed in) can be recycled at concrete crushing facilities, often at lower cost than landfill disposal.',
  },
  {
    name: 'Metal (Studs, Flashing, Ductwork)',
    icon: Recycle,
    iconColor: 'text-blue-500',
    dumpsterOk: true,
    weight: 'Varies widely by type',
    sizeRec: 'Any size — metal is recyclable',
    notes: 'Scrap metal has value. Before tossing it in a dumpster, consider taking it to a scrap yard — steel, copper, and aluminum can earn $0.05–$3.00+ per pound. If recycling is not worth the effort, metal is accepted in most construction dumpsters.',
  },
  {
    name: 'Roofing Shingles',
    icon: AlertTriangle,
    iconColor: 'text-amber-500',
    dumpsterOk: true,
    weight: '~200–250 lbs per roofing square (100 sq ft)',
    sizeRec: '20-yd for most roofs, 30-yd for large homes',
    notes: 'Shingles are accepted in dumpsters but are very heavy — a typical 2,000 sq ft roof generates 3–5 tons of old shingles. Many haulers offer roofing-specific containers with higher weight allowances. Asphalt shingles can be recycled in many areas, which may reduce your disposal cost.',
  },
  {
    name: 'Insulation',
    icon: CheckCircle,
    iconColor: 'text-green-600',
    dumpsterOk: true,
    weight: 'Very light — takes up volume, not weight',
    sizeRec: '20-yd or 30-yd (bulky but lightweight)',
    notes: 'Fiberglass and cellulose insulation are accepted in standard dumpsters. Bag loose-fill insulation before loading to prevent it from blowing around. Exception: asbestos-containing insulation (common in homes built before 1980) must be tested and removed by a licensed abatement contractor.',
  },
]

const PROHIBITED_ITEMS = [
  'Asbestos-containing materials (requires licensed removal)',
  'Lead paint chips or lead-contaminated debris',
  'Chemical solvents, adhesives, and paint thinners',
  'Propane tanks and pressurized cylinders',
  'Mercury-containing items (thermostats, fluorescent tubes)',
  'Contaminated soil',
]

const CONTRACTOR_TIPS = [
  {
    title: 'Separate heavy materials from light',
    detail: 'Use one container for concrete/brick and another for general demo waste. Mixing heavy and light debris in one container usually means hitting your weight limit with space left over — wasting capacity you are paying for.',
  },
  {
    title: 'Recycle metals and clean concrete',
    detail: 'Scrap metal yards pay for copper, aluminum, and steel. Clean concrete can go to crushing facilities at lower tipping fees. On a large job, recycling can save $200–$500 in disposal costs.',
  },
  {
    title: 'Right-size by weight, not just volume',
    detail: 'A 10-yard dumpster holds 10 cubic yards, but if you are loading heavy debris (shingles, concrete), you will max out the weight limit long before filling the container. Calculate estimated weight first using a weight calculator.',
  },
  {
    title: 'Schedule swaps, not new deliveries',
    detail: 'If you need multiple loads over a project, ask your hauler about swap-outs. They pick up the full container and drop off an empty one in the same trip — saving you a delivery fee each time.',
  },
  {
    title: 'Book in advance during peak season',
    detail: 'May through September is peak construction and roofing season. Dumpster availability gets tight. Book at least 3–5 days ahead, especially for 20-yard and 30-yard containers.',
  },
]

export default function ConstructionDebrisDisposalGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs
            crumbs={[
              { label: 'Home', href: '/' },
              { label: 'Construction Dumpster Rental', href: '/dumpster-rental/construction' },
              { label: 'Construction Debris Disposal Guide' },
            ]}
          />
          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900">
            Construction Debris Disposal Guide: What Goes Where
          </h1>
          <p className="mt-3 max-w-3xl text-gray-600 leading-relaxed">
            Not all construction waste is created equal. Some debris goes straight into a standard
            dumpster, some needs a dedicated heavy-debris container, and some requires licensed
            disposal. This guide breaks down every common debris type so you know exactly what goes
            where — and how to save money on disposal.
          </p>
          <AuthorByline updatedDate="March 2026" readTimeMin={5} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-14">

        {/* Debris Types */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Construction Debris Types: Disposal Rules & Size Recommendations
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl">
            Each material has different weight characteristics and disposal requirements. Here is what
            you need to know for the six most common types of construction debris.
          </p>
          <div className="space-y-6">
            {DEBRIS_TYPES.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.name}
                  className="rounded-xl border border-gray-200 bg-white p-5 hover:border-green-200 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-gray-50 flex items-center justify-center shrink-0">
                      <Icon className={`h-5 w-5 ${item.iconColor}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="font-bold text-gray-900">{item.name}</h3>
                        <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                          item.dumpsterOk
                            ? 'bg-green-50 text-green-700'
                            : 'bg-amber-50 text-amber-700'
                        }`}>
                          {item.dumpsterOk ? 'Standard Dumpster OK' : 'Dedicated Container'}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed mb-3">{item.notes}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="flex items-start gap-2 rounded-lg bg-gray-50 border border-gray-100 p-2.5">
                          <Scale className="h-4 w-4 text-gray-400 shrink-0 mt-0.5" />
                          <div>
                            <div className="text-xs text-gray-500">Weight</div>
                            <div className="text-sm text-gray-700 font-medium">{item.weight}</div>
                          </div>
                        </div>
                        <div className="flex items-start gap-2 rounded-lg bg-gray-50 border border-gray-100 p-2.5">
                          <Truck className="h-4 w-4 text-gray-400 shrink-0 mt-0.5" />
                          <div>
                            <div className="text-xs text-gray-500">Recommended Size</div>
                            <div className="text-sm text-gray-700 font-medium">{item.sizeRec}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Prohibited Items */}
        <section className="rounded-xl border border-red-200 bg-red-50 p-7">
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="h-6 w-6 text-red-500" />
            <h2 className="text-xl font-bold text-gray-900">
              Materials That Cannot Go in Any Dumpster
            </h2>
          </div>
          <p className="text-sm text-gray-700 mb-4">
            The following materials are prohibited in all roll-off dumpsters due to environmental and
            safety regulations. Violating these rules can result in fines of $100–$500+ per item.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {PROHIBITED_ITEMS.map((item) => (
              <div key={item} className="flex items-start gap-2">
                <AlertTriangle className="h-4 w-4 text-red-400 shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-start gap-2 rounded-lg bg-white border border-red-100 p-3">
            <Info className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
            <p className="text-sm text-red-800">
              If your project involves a pre-1980 building, have suspect materials tested for asbestos
              and lead before demolition begins. Improper disposal of hazardous materials can result in
              significant EPA fines.
            </p>
          </div>
        </section>

        {/* Contractor Tips */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            5 Tips for Contractors to Save Money on Disposal
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl">
            Disposal is a real line-item on every construction budget. These strategies can cut your
            waste hauling costs by 20–40%.
          </p>
          <div className="space-y-4">
            {CONTRACTOR_TIPS.map((tip, i) => (
              <div
                key={tip.title}
                className="flex gap-4 rounded-xl border border-gray-200 bg-white p-5 hover:border-green-200 transition-colors"
              >
                <div className="h-8 w-8 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                  <span className="text-sm font-bold text-green-700">{i + 1}</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{tip.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{tip.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Size Quick Reference */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Size Quick Reference by Project Type</h2>
          <p className="text-gray-600 mb-6 max-w-2xl">
            Use this table to quickly estimate the right dumpster size for your construction project.
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-5 py-3 font-semibold text-gray-900">Project Type</th>
                  <th className="text-left px-5 py-3 font-semibold text-gray-900">Recommended Size</th>
                  <th className="text-left px-5 py-3 font-semibold text-gray-900">Typical Weight</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { project: 'Single room remodel', size: '10-yard', weight: '1–2 tons' },
                  { project: 'Kitchen or bathroom gut', size: '20-yard', weight: '2–3 tons' },
                  { project: 'Full home renovation', size: '30-yard', weight: '3–5 tons' },
                  { project: 'Roof tear-off (2,000 sq ft)', size: '20-yard', weight: '3–5 tons' },
                  { project: 'Concrete/masonry removal', size: '10-yard (heavy)', weight: '5–10 tons' },
                  { project: 'New construction cleanup', size: '30–40 yard', weight: '3–6 tons' },
                  { project: 'Commercial demolition', size: '40-yard', weight: '5–8 tons' },
                ].map((row) => (
                  <tr key={row.project} className="border-b border-gray-100 last:border-0">
                    <td className="px-5 py-3 font-medium text-gray-900">{row.project}</td>
                    <td className="px-5 py-3 text-gray-600">{row.size}</td>
                    <td className="px-5 py-3 text-gray-600">{row.weight}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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

        {/* Internal Links */}
        <section className="rounded-xl border border-gray-100 bg-gray-50 p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Related Guides & Tools</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: 'Construction Dumpster Rental', href: '/dumpster-rental/construction', desc: 'Find construction dumpster companies near you' },
              { label: 'How to Dispose of Concrete', href: '/how-to-dispose-of-concrete', desc: 'Recycling and disposal options for concrete debris' },
              { label: 'Dumpster Weight Limit Calculator', href: '/dumpster-weight-limit-calculator', desc: 'Estimate your debris weight before booking' },
              { label: 'Dumpster Sizes Guide', href: '/dumpster-sizes', desc: 'Compare all container sizes side by side' },
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
            Need a Construction Dumpster?
          </h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Compare quotes from construction dumpster rental companies in your area. Most offer
            next-day delivery and flexible rental periods for job sites.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/dumpster-rental/construction"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-700 px-7 py-3.5 font-bold text-white hover:bg-green-800 transition"
            >
              Find Construction Haulers <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/dumpster-weight-limit-calculator"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-green-300 bg-white px-7 py-3.5 font-bold text-green-700 hover:bg-green-50 transition"
            >
              Calculate Debris Weight <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </section>

      </div>
    </>
  )
}
