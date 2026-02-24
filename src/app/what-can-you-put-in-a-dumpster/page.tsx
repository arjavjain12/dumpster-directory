import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle, XCircle, AlertTriangle } from 'lucide-react'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'What Can You Put in a Dumpster? Allowed & Prohibited Items (2026)',
  description:
    'Complete list of what you can and cannot put in a rental dumpster — furniture, appliances, construction debris, yard waste, and hazardous materials.',
  alternates: { canonical: '/what-can-you-put-in-a-dumpster' },
  openGraph: {
    title: 'What Can You Put in a Dumpster? Full Allowed Items List',
    description: 'See what is and is not allowed in a rental dumpster. Avoid fees and rejected loads with this complete guide to dumpster-accepted items.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can you put a mattress in a dumpster?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most dumpster rental companies accept mattresses, but some charge an additional $25–$75 fee per mattress due to recycling regulations. Always confirm with your provider before throwing mattresses in the dumpster.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you put concrete in a dumpster?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, concrete is accepted in most roll-off dumpsters, but weight limits apply. Concrete is extremely heavy — a 10-yard dumpster filled with concrete can easily exceed the weight limit. Many companies offer concrete-only dumpsters at lower rates since concrete can be recycled.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you put paint in a dumpster?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Liquid paint is prohibited in most dumpsters — it is considered hazardous waste. Dried, solidified latex paint is generally accepted. To dispose of liquid paint, take it to a household hazardous waste facility or let it dry completely before placing it in the dumpster.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you put electronics in a dumpster?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Many areas restrict electronic waste (e-waste) from landfills. TVs, computers, and monitors are commonly prohibited. Check with your hauler — some accept electronics for a small fee, while others require you to use an e-waste recycling facility.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if you put prohibited items in a dumpster?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If prohibited items are found, the hauler may refuse to pick up the dumpster, charge a contamination fee ($50–$250+), or bill you for special disposal. In serious cases involving hazardous materials, you could face fines from local authorities.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you put a refrigerator in a dumpster?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Refrigerators, air conditioners, and freezers contain refrigerants (Freon) that must be professionally evacuated before disposal. Many haulers accept them after freon removal, but will not take them otherwise. Some charge an additional appliance fee of $25–$50.',
      },
    },
  ],
}

const ALLOWED_ITEMS = [
  {
    category: 'Furniture',
    icon: '🛋️',
    items: ['Sofas and sectionals', 'Mattresses (fees may apply)', 'Bed frames and headboards', 'Dressers and wardrobes', 'Dining tables and chairs', 'Desks and office furniture', 'Bookcases and shelving'],
  },
  {
    category: 'Appliances',
    icon: '🏠',
    items: ['Washers and dryers', 'Stoves and ranges', 'Dishwashers', 'Microwaves', 'Refrigerators (freon removed)', 'Window AC units (freon removed)', 'Water heaters'],
  },
  {
    category: 'Construction Debris',
    icon: '🔨',
    items: ['Drywall and plaster', 'Lumber and wood scraps', 'Roofing shingles', 'Flooring (tile, hardwood, carpet)', 'Concrete and brick (weight limits apply)', 'Insulation (non-asbestos)', 'Windows and doors'],
  },
  {
    category: 'Yard & Outdoor',
    icon: '🌿',
    items: ['Branches and tree limbs', 'Grass clippings and leaves', 'Soil and dirt (weight limits)', 'Sod', 'Fencing (wood and metal)', 'Outdoor furniture', 'Garden equipment'],
  },
  {
    category: 'General Household',
    icon: '📦',
    items: ['Cardboard and paper', 'Clothing and textiles', 'Books and magazines', 'Toys and sporting goods', 'Bicycles', 'Small electronics (varies by area)', 'General household junk'],
  },
]

const PROHIBITED_ITEMS = [
  {
    category: 'Hazardous Chemicals',
    icon: '⚗️',
    reason: 'Environmental and safety regulations',
    items: ['Paint (liquid)', 'Motor oil and automotive fluids', 'Pesticides and herbicides', 'Pool chemicals', 'Cleaning solvents', 'Gasoline and fuel', 'Antifreeze'],
  },
  {
    category: 'Medical & Biological',
    icon: '🏥',
    reason: 'Biohazard regulations',
    items: ['Needles and sharps', 'Medical waste', 'Blood-contaminated materials', 'Pharmaceuticals'],
  },
  {
    category: 'Explosive & Flammable',
    icon: '💥',
    reason: 'Fire and safety hazards',
    items: ['Propane tanks', 'Gas canisters', 'Ammunition', 'Fireworks', 'Compressed gas cylinders'],
  },
  {
    category: 'Regulated Materials',
    icon: '⚠️',
    reason: 'Special disposal required',
    items: ['Asbestos-containing materials', 'Lead paint chips', 'PCB-containing materials', 'Radioactive materials'],
  },
]

const DEPENDS_ON_LOCATION = [
  { item: 'Mattresses', note: 'Accepted by most, but extra fee common ($25–$75)' },
  { item: 'TVs and monitors', note: 'Prohibited in many states; e-waste facility required' },
  { item: 'Tires', note: 'Prohibited in many areas; tire shops or recyclers required' },
  { item: 'Batteries (lead-acid)', note: 'Recycling required in most states' },
  { item: 'Fluorescent bulbs', note: 'Mercury content makes disposal complex; varies by state' },
  { item: 'Concrete and brick', note: 'Accepted with weight limits; concrete-only dumpsters often available' },
  { item: 'Yard waste', note: 'Some areas require separate green waste disposal' },
  { item: 'Refrigerators / AC units', note: 'Accepted after freon removal; may require certification' },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'What Can You Put in a Dumpster? Allowed & Prohibited Items',
  description: 'Complete list of items accepted and prohibited in rental dumpsters — furniture, appliances, construction debris, hazardous materials.',
  datePublished: '2026-02-23',
  dateModified: '2026-02-23',
  author: { '@type': 'Organization', name: 'DumpsterListing', url: 'https://dumpsterlisting.com' },
  publisher: { '@type': 'Organization', name: 'DumpsterListing', url: 'https://dumpsterlisting.com' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://dumpsterlisting.com/what-can-you-put-in-a-dumpster' },
}

export default function WhatCanYouPutInADumpsterPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs crumbs={[
            { label: 'Home', href: '/' },
            { label: 'What Can You Put in a Dumpster?' },
          ]} />
          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900">
            What Can You Put in a Dumpster?
          </h1>
          <p className="mt-3 max-w-3xl text-gray-600 leading-relaxed">
            Most household and construction debris is perfectly fine — but some items are strictly
            prohibited. Here's a complete list of what's accepted and what to do with items that aren't.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-14">

        {/* Quick stats */}
        <div className="grid grid-cols-3 gap-4 text-center">
          {[
            { icon: '✅', label: 'Generally Accepted', value: 'Furniture, construction debris, yard waste, appliances' },
            { icon: '❌', label: 'Never Allowed', value: 'Hazardous chemicals, medical waste, propane tanks' },
            { icon: '⚠️', label: 'Depends on Location', value: 'Mattresses, tires, e-waste, concrete' },
          ].map((stat) => (
            <div key={stat.label} className="rounded-xl border border-gray-200 bg-white p-4">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-xs font-bold text-gray-700 mb-1">{stat.label}</div>
              <div className="text-xs text-gray-500 leading-relaxed">{stat.value}</div>
            </div>
          ))}
        </div>

        {/* Allowed items */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
            <CheckCircle className="h-6 w-6 text-green-500" /> What You CAN Put in a Dumpster
          </h2>
          <p className="text-gray-500 text-sm mb-6">These items are accepted by most rental companies across the country.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {ALLOWED_ITEMS.map((cat) => (
              <div key={cat.category} className="rounded-xl border border-green-100 bg-green-50 p-5">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="text-xl">{cat.icon}</span> {cat.category}
                </h3>
                <ul className="space-y-1.5">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="h-3.5 w-3.5 text-green-500 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Prohibited items */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
            <XCircle className="h-6 w-6 text-red-500" /> What You CANNOT Put in a Dumpster
          </h2>
          <p className="text-gray-500 text-sm mb-6">These items are prohibited in all roll-off dumpsters due to safety and environmental regulations.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {PROHIBITED_ITEMS.map((cat) => (
              <div key={cat.category} className="rounded-xl border border-red-100 bg-red-50 p-5">
                <h3 className="font-bold text-gray-900 mb-1 flex items-center gap-2">
                  <span className="text-xl">{cat.icon}</span> {cat.category}
                </h3>
                <p className="text-xs text-red-600 font-medium mb-3">{cat.reason}</p>
                <ul className="space-y-1.5">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                      <XCircle className="h-3.5 w-3.5 text-red-400 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Depends on location */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
            <AlertTriangle className="h-6 w-6 text-amber-500" /> Items That Depend on Your Location
          </h2>
          <p className="text-gray-500 text-sm mb-6">Always confirm with your local hauler — rules vary significantly by state and municipality.</p>
          <div className="rounded-xl border border-amber-100 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-amber-50 border-b border-amber-100">
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">Item</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">What to Expect</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-amber-50 bg-white">
                {DEPENDS_ON_LOCATION.map((row) => (
                  <tr key={row.item} className="hover:bg-amber-50/50 transition">
                    <td className="px-4 py-3 font-medium text-gray-800">{row.item}</td>
                    <td className="px-4 py-3 text-gray-600">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Tips */}
        <section className="rounded-2xl border border-blue-100 bg-blue-50 p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Tips for Avoiding Extra Fees</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { tip: 'Call before you throw', detail: 'Always confirm with your hauler if you\'re unsure about an item.' },
              { tip: 'Keep heavy materials separate', detail: 'Concrete, brick, and dirt have weight limits — fill wisely to avoid overage fees.' },
              { tip: 'Don\'t overfill', detail: 'Items must not exceed the fill line. Overloaded dumpsters face extra charges.' },
              { tip: 'Drain all liquids', detail: 'Remove liquid from appliances, containers, and equipment before disposal.' },
              { tip: 'Check local e-waste laws', detail: 'Many states ban TVs and computers from landfills — use recycling programs.' },
              { tip: 'Let paint dry', detail: 'Dried latex paint is usually accepted. Liquid paint is hazardous waste.' },
            ].map((t) => (
              <div key={t.tip} className="flex gap-3">
                <div className="h-6 w-6 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">✓</div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">{t.tip}</div>
                  <div className="text-xs text-gray-600 mt-0.5">{t.detail}</div>
                </div>
              </div>
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
              { label: 'Weight Limit Calculator', href: '/dumpster-weight-limit-calculator' },
              { label: 'How to Dispose of Concrete', href: '/how-to-dispose-of-concrete' },
              { label: 'How to Dispose of Furniture', href: '/how-to-dispose-of-furniture' },
              { label: 'How to Dispose of Yard Waste', href: '/how-to-dispose-of-yard-waste' },
              { label: 'Dumpster Rental vs Junk Removal', href: '/dumpster-rental-vs-junk-removal' },
            ].map((link) => (
              <Link key={link.href} href={link.href}
                className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-700 hover:text-green-600 hover:border-green-200 transition">
                <ArrowRight className="h-3.5 w-3.5 text-gray-400 shrink-0" />
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        <section className="rounded-2xl bg-gradient-to-r from-green-600 to-green-700 p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Find a Dumpster in Your Area</h2>
          <p className="text-green-100 mb-6 max-w-xl mx-auto">Compare local dumpster rental companies and get free quotes — fast.</p>
          <Link href="/dumpster-rental"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 font-bold text-green-700 hover:bg-green-50 transition">
            Find Local Companies <ArrowRight className="h-5 w-5" />
          </Link>
        </section>
      </div>
    </>
  )
}
