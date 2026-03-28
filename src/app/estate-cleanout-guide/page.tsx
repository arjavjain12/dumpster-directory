import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  CheckCircle,
  Heart,
  ClipboardList,
  PackageOpen,
  Truck,
  AlertTriangle,
  FileText,
  Clock,
} from 'lucide-react'
import Breadcrumbs from '@/components/Breadcrumbs'
import AuthorByline from '@/components/AuthorByline'

export const metadata: Metadata = {
  title: 'Estate Cleanout Guide: How to Clear a Home',
  description:
    'A compassionate, step-by-step guide to clearing a loved one\'s home after they pass. Covers sorting, dumpster sizes, timelines, and what to do with valuables and hazardous items.',
  alternates: { canonical: '/estate-cleanout-guide' },
  openGraph: {
    title: 'Estate Cleanout Guide: How to Clear a Home',
    description:
      'A compassionate, step-by-step guide to clearing a loved one\'s home after they pass. Covers sorting, dumpster sizes, timelines, and what to do with valuables and hazardous items.',
  },
}

const FAQ_ITEMS = [
  {
    question: 'How long does an estate cleanout typically take?',
    answer:
      'Most estate cleanouts take 1 to 3 weeks when handled by family members working on evenings and weekends. A small apartment may be cleared in a few days, while a large home with decades of accumulated belongings can take a month or more. Hiring a professional estate cleanout service can compress the timeline to 1 to 3 days for most homes.',
  },
  {
    question: 'What size dumpster do I need for an estate cleanout?',
    answer:
      'A 20-yard dumpster is the most common choice for clearing an average-sized home (1,200 to 2,000 square feet). For larger homes, homes with basements or garages full of belongings, or situations where little is being kept, a 30-yard dumpster provides more room and avoids a second haul. A 10-yard container works for small apartments or partial cleanouts.',
  },
  {
    question: 'What should I do with medications found during a cleanout?',
    answer:
      'Never throw prescription medications in the trash or flush them. Most pharmacies and police stations have drug take-back programs that accept unused medications for safe disposal. The DEA also hosts National Prescription Drug Take-Back Days twice a year. For controlled substances, contact your local police department for guidance.',
  },
  {
    question: 'Can I donate furniture and household items from an estate?',
    answer:
      'Yes, and donating is one of the most meaningful ways to handle a loved one\'s belongings. Organizations like Habitat for Humanity ReStore, Goodwill, and The Salvation Army accept furniture, kitchenware, clothing, and appliances in working condition. Many offer free pickup for large donations. Call ahead to confirm what they currently accept, as policies vary by location.',
  },
]

const STEPS = [
  {
    number: '1',
    title: 'Give Yourself Time Before Starting',
    icon: Heart,
    detail:
      'There is no rush. Unless the property has carrying costs that require immediate action — like rent, HOA dues, or an upcoming sale — allow yourself and your family time to grieve before diving into the physical work of clearing a home. Even a week or two of space can make the process feel less overwhelming.',
  },
  {
    number: '2',
    title: 'Secure the Property and Important Documents',
    icon: FileText,
    detail:
      'Before sorting anything, locate the will, financial documents, insurance policies, tax returns, and any legal paperwork. Check desks, filing cabinets, safes, and bedroom drawers. Secure jewelry, cash, and other valuables. If the home will be vacant, ensure the locks work, set lights on timers, and notify the post office to hold or forward mail.',
  },
  {
    number: '3',
    title: 'Sort Everything Into Categories',
    icon: PackageOpen,
    detail:
      'Work room by room and sort belongings into four groups: keep, donate, sell, and trash. Bring boxes, labels, and markers. Items with sentimental value go in the keep pile — but be honest about what you will actually use or display. Functional furniture, clothing, and kitchenware in good condition can be donated. Valuable antiques, collectibles, or jewelry may be worth selling through an estate sale company or online marketplace.',
  },
  {
    number: '4',
    title: 'Handle Hazardous and Special Items',
    icon: AlertTriangle,
    detail:
      'Garages, basements, and utility rooms often contain items that cannot go in a dumpster or regular trash: paint, solvents, propane tanks, car batteries, pesticides, and cleaning chemicals. Contact your local household hazardous waste facility for drop-off schedules. Prescription medications should go to a pharmacy take-back program or DEA collection event — never in the trash or down the drain.',
  },
  {
    number: '5',
    title: 'Rent a Dumpster for the Remaining Debris',
    icon: Truck,
    detail:
      'Once you have separated items to keep, donate, and sell, a dumpster handles everything else — broken furniture, worn clothing, old mattresses, and general household junk. A 20-yard container is right for most homes; go with a 30-yard if the home is large or heavily packed. Schedule delivery for the day you plan to start loading, and place it as close to the home entrance as possible.',
  },
  {
    number: '6',
    title: 'Clean and Prepare the Property',
    icon: ClipboardList,
    detail:
      'After the cleanout, deep clean the home — floors, walls, kitchens, and bathrooms. This is especially important if you are preparing the property for sale or new tenants. Hire professional cleaners if the scope is large. Cancel utilities, notify the post office, and update the insurance policy to reflect the vacant status if the home will sit empty.',
  },
]

export default function EstateCleanoutGuidePage() {
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
              { label: 'Estate Cleanout Guide' },
            ]}
          />
          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900">
            Estate Cleanout Guide: How to Clear a Home After a Loved One Passes
          </h1>
          <p className="mt-3 max-w-3xl text-gray-600 leading-relaxed">
            Clearing a loved one&apos;s home is one of the most emotionally difficult tasks families
            face. This guide walks you through the process step by step — from securing important
            documents to sorting belongings, handling hazardous items, and renting a dumpster for
            the remaining debris. Take it at your own pace. There is no single right way to do this.
          </p>
          <AuthorByline updatedDate="March 2026" readTimeMin={6} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-14">

        {/* Timeline Overview */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            What to Expect: Timeline & Scope
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl">
            Every estate is different. A small, tidy apartment might take a weekend. A large family
            home with a full basement and garage could take several weeks. Here is a general
            framework.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { label: 'Small Apartment', time: '2–4 days', size: '10-yard dumpster', icon: Clock },
              { label: 'Average Home (3BR)', time: '1–2 weeks', size: '20-yard dumpster', icon: Clock },
              { label: 'Large Home / Packed', time: '2–4 weeks', size: '30-yard dumpster', icon: Clock },
            ].map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.label}
                  className="rounded-xl border border-gray-200 bg-white p-5 hover:border-green-200 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-10 w-10 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                      <Icon className="h-5 w-5 text-green-700" />
                    </div>
                    <h3 className="font-bold text-gray-900">{item.label}</h3>
                  </div>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p><strong>Timeline:</strong> {item.time}</p>
                    <p><strong>Dumpster:</strong> {item.size}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Step-by-Step */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Step-by-Step Estate Cleanout Process
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl">
            Follow these steps in order. Each one builds on the previous, and skipping ahead —
            especially to throwing things away — can lead to lost valuables or regret.
          </p>
          <div className="space-y-5">
            {STEPS.map((step) => {
              const Icon = step.icon
              return (
                <div
                  key={step.title}
                  className="rounded-xl border border-gray-200 bg-white p-5 hover:border-green-200 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                      <Icon className="h-5 w-5 text-green-700" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-1">
                        <span className="text-green-700 mr-1">Step {step.number}:</span>
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{step.detail}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* What to Do With Specific Items */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            What to Do With Specific Items
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl">
            Some belongings require special handling. Here is a quick reference for common items
            found during estate cleanouts.
          </p>
          <div className="rounded-xl border border-gray-200 bg-white overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left px-5 py-3 font-semibold text-gray-900">Item</th>
                  <th className="text-left px-5 py-3 font-semibold text-gray-900">What to Do</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr><td className="px-5 py-3 text-gray-700">Legal documents, wills</td><td className="px-5 py-3 text-gray-700">Secure immediately; provide to estate attorney</td></tr>
                <tr><td className="px-5 py-3 text-gray-700">Jewelry, cash, collectibles</td><td className="px-5 py-3 text-gray-700">Appraise before selling or distributing among heirs</td></tr>
                <tr><td className="px-5 py-3 text-gray-700">Prescription medications</td><td className="px-5 py-3 text-gray-700">Pharmacy take-back or DEA collection event</td></tr>
                <tr><td className="px-5 py-3 text-gray-700">Paint, chemicals, solvents</td><td className="px-5 py-3 text-gray-700">Local hazardous waste facility drop-off</td></tr>
                <tr><td className="px-5 py-3 text-gray-700">Working appliances, furniture</td><td className="px-5 py-3 text-gray-700">Donate to Habitat ReStore, Goodwill, or Salvation Army</td></tr>
                <tr><td className="px-5 py-3 text-gray-700">Electronics (TVs, computers)</td><td className="px-5 py-3 text-gray-700">Wipe data; recycle through e-waste programs</td></tr>
                <tr><td className="px-5 py-3 text-gray-700">Photographs, personal letters</td><td className="px-5 py-3 text-gray-700">Distribute to family; digitize if possible</td></tr>
              </tbody>
            </table>
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
              { label: 'Residential Dumpster Rental', href: '/dumpster-rental/residential', desc: 'Find residential haulers in your area' },
              { label: 'Dumpster Size Estimator', href: '/dumpster-size-estimator', desc: 'Calculate the right container for your project' },
              { label: 'How to Dispose of Furniture', href: '/how-to-dispose-of-furniture', desc: 'Options for donating, selling, or trashing furniture' },
              { label: 'How to Dispose of Electronics', href: '/how-to-dispose-of-electronics', desc: 'Safe e-waste recycling and data destruction' },
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
            Need a Dumpster for an Estate Cleanout?
          </h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Compare quotes from local dumpster rental companies experienced with estate and
            residential cleanouts. Most offer flexible rental periods for longer projects.
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
