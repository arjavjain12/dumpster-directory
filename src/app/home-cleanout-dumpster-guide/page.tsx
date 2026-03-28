import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  CheckCircle,
  Home,
  Truck,
  DollarSign,
  ClipboardList,
  Heart,
  Trash2,
  Package,
} from 'lucide-react'
import Breadcrumbs from '@/components/Breadcrumbs'
import AuthorByline from '@/components/AuthorByline'

export const metadata: Metadata = {
  title: 'Home Cleanout Dumpster Guide: Sizes, Costs & Tips',
  description:
    'Everything you need to rent a dumpster for a home cleanout. Covers garage, basement, estate, and whole-home cleanouts with size recommendations, costs, and a step-by-step process.',
  alternates: { canonical: '/home-cleanout-dumpster-guide' },
  openGraph: {
    title: 'Home Cleanout Dumpster Guide: Sizes, Costs & Tips',
    description:
      'Everything you need to rent a dumpster for a home cleanout. Covers garage, basement, estate, and whole-home cleanouts with size recommendations, costs, and a step-by-step process.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What size dumpster do I need for a home cleanout?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For a single room or garage cleanout, a 10-yard dumpster is usually enough. For a whole-home cleanout or multiple rooms, a 20-yard container is the most popular choice. For estate cleanouts, hoarding situations, or large homes with 4+ bedrooms, a 30-yard dumpster provides the capacity needed to handle everything in one load.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost to rent a dumpster for a home cleanout?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A 10-yard dumpster for a small cleanout costs $275–$450. A 20-yard for a full home cleanout runs $350–$550. A 30-yard for an estate or large cleanout costs $400–$650. Prices include delivery, pickup, a 7–14 day rental period, and a weight allowance of 2–4 tons. Costs vary by region — urban areas tend to be slightly more expensive.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a home cleanout take with a dumpster?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A garage or single-room cleanout can be done in a day. A full home cleanout typically takes 2–4 days with 2–3 people working. Estate cleanouts of heavily furnished homes may take a full week. Most dumpster rentals include 7–14 days, which provides plenty of time for even large projects.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I sort items before renting a dumpster for a cleanout?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. Sort items into keep, donate, sell, and dump piles before the dumpster arrives. This serves two purposes: you avoid throwing away items that have value (many charities offer free pickup for furniture and appliances), and you reduce the volume of waste going into the dumpster — which may let you rent a smaller, cheaper container.',
      },
    },
  ],
}

const CLEANOUT_TYPES = [
  {
    type: 'Garage Cleanout',
    icon: Package,
    size: '10-yard dumpster',
    cost: '$275–$450',
    timeframe: '1 day',
    description: 'A standard 2-car garage full of accumulated tools, boxes, holiday decorations, and miscellaneous storage. A 10-yard dumpster holds the equivalent of about 4 pickup truck loads — enough for most garage cleanouts with room to spare.',
  },
  {
    type: 'Basement Cleanout',
    icon: Home,
    size: '15 or 20-yard dumpster',
    cost: '$325–$525',
    timeframe: '1–2 days',
    description: 'Basements tend to accumulate more than garages — old furniture, exercise equipment, stored boxes, and sometimes water-damaged items. A 15-yard handles a lightly packed basement; go with a 20-yard if the space is full floor to ceiling.',
  },
  {
    type: 'Whole-Home Cleanout',
    icon: Home,
    size: '20-yard dumpster',
    cost: '$350–$550',
    timeframe: '2–4 days',
    description: 'Cleaning out an entire home — typical when moving, downsizing, or preparing a home for sale. A 20-yard container handles 3–4 bedrooms worth of furniture, clothing, kitchenware, and general household items. The most popular size for residential cleanouts.',
  },
  {
    type: 'Estate Cleanout',
    icon: Heart,
    size: '30-yard dumpster',
    cost: '$400–$650',
    timeframe: '3–7 days',
    description: 'Clearing a deceased relative\'s home often involves decades of accumulated belongings across every room, attic, basement, and outbuildings. A 30-yard dumpster provides the volume needed without rushing. Consider scheduling an estate sale first to reduce volume and offset costs.',
  },
  {
    type: 'Hoarding Cleanout',
    icon: Trash2,
    size: '30 or 40-yard dumpster',
    cost: '$450–$750+',
    timeframe: '3–10 days',
    description: 'Hoarding situations may require the largest container available and sometimes multiple loads. A 40-yard dumpster is 22 feet long and 8 feet tall — equivalent to roughly 16 pickup truck loads. For severe cases, ask your hauler about swap-outs: they replace the full container with an empty one.',
  },
]

const PROCESS_STEPS = [
  {
    step: 1,
    title: 'Sort Everything Into Categories',
    icon: ClipboardList,
    detail: 'Before renting a dumpster, walk through the space and separate items into four piles: keep, donate, sell, and dump. Be realistic — if you have not used something in two years, it is unlikely you will. This step alone can reduce your dumpster needs by 20–40%.',
  },
  {
    step: 2,
    title: 'Donate and Sell First',
    icon: Heart,
    detail: 'Schedule donation pickups (Salvation Army, Habitat for Humanity ReStore, and local charities often offer free pickup for furniture and appliances). List valuable items on Facebook Marketplace or Craigslist. Give yourself 1–2 weeks for this step before the dumpster arrives.',
  },
  {
    step: 3,
    title: 'Book the Right Dumpster Size',
    icon: Truck,
    detail: 'Based on what remains after sorting and donating, choose your dumpster size using the guide above. When in doubt, size up — the incremental cost of a 20-yard over a 10-yard is typically only $50–$100, but renting a second container costs $300+.',
  },
  {
    step: 4,
    title: 'Load Strategically',
    icon: Package,
    detail: 'Start with large, bulky items (furniture frames, mattresses, appliances) on the bottom. Break down boxes flat. Fill gaps with smaller items and bags. Load heavy items low and distribute weight evenly. Do not exceed the fill line — the hauler cannot legally transport an overfilled container.',
  },
  {
    step: 5,
    title: 'Schedule Pickup and Final Sweep',
    icon: CheckCircle,
    detail: 'Once everything is loaded, call your hauler to schedule pickup (most offer next-day service). Do a final walk-through of the property to catch anything you missed. Take photos of your driveway before the hauler removes the container.',
  },
]

export default function HomeCleanoutDumpsterGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs
            crumbs={[
              { label: 'Home', href: '/' },
              { label: 'Residential Dumpster Rental', href: '/dumpster-rental/residential' },
              { label: 'Home Cleanout Dumpster Guide' },
            ]}
          />
          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900">
            Complete Guide to Renting a Dumpster for a Home Cleanout
          </h1>
          <p className="mt-3 max-w-3xl text-gray-600 leading-relaxed">
            Whether you are clearing out a garage, downsizing a whole home, or handling an estate
            cleanout, a dumpster rental is the fastest and most cost-effective way to deal with large
            volumes of stuff. This guide covers which size to get, what it costs, and the
            step-by-step process that keeps things organized and stress-free.
          </p>
          <AuthorByline updatedDate="March 2026" readTimeMin={5} showMethodology />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-14">

        {/* Cleanout Types & Sizes */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Which Dumpster Size for Your Cleanout?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl">
            The right container depends on the type and scope of your cleanout. Here is what we
            recommend based on real-world project data from thousands of rentals.
          </p>
          <div className="space-y-5">
            {CLEANOUT_TYPES.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.type}
                  className="rounded-xl border border-gray-200 bg-white p-5 hover:border-green-200 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                      <Icon className="h-5 w-5 text-green-700" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-1">{item.type}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed mb-3">{item.description}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div className="flex items-center gap-2 rounded-lg bg-green-50 border border-green-100 p-2.5">
                          <Truck className="h-4 w-4 text-green-600 shrink-0" />
                          <div>
                            <div className="text-xs text-gray-500">Recommended Size</div>
                            <div className="text-sm text-green-800 font-medium">{item.size}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 rounded-lg bg-green-50 border border-green-100 p-2.5">
                          <DollarSign className="h-4 w-4 text-green-600 shrink-0" />
                          <div>
                            <div className="text-xs text-gray-500">Average Cost</div>
                            <div className="text-sm text-green-800 font-medium">{item.cost}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 rounded-lg bg-green-50 border border-green-100 p-2.5">
                          <ClipboardList className="h-4 w-4 text-green-600 shrink-0" />
                          <div>
                            <div className="text-xs text-gray-500">Typical Timeframe</div>
                            <div className="text-sm text-green-800 font-medium">{item.timeframe}</div>
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

        {/* Step-by-Step Process */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Step-by-Step Home Cleanout Process
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl">
            Follow this process to minimize waste, maximize donations, and keep your cleanout
            organized from start to finish.
          </p>
          <div className="space-y-4">
            {PROCESS_STEPS.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.step}
                  className="flex gap-4 rounded-xl border border-gray-200 bg-white p-5 hover:border-green-200 transition-colors"
                >
                  <div className="h-10 w-10 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                    <Icon className="h-5 w-5 text-green-700" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded-full">
                        Step {item.step}
                      </span>
                      <h3 className="font-bold text-gray-900">{item.title}</h3>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Cost Summary */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Average Costs by Cleanout Type</h2>
          <p className="text-gray-600 mb-6 max-w-2xl">
            These prices reflect national averages for dumpster-only costs. They include delivery,
            pickup, a standard rental period, and a weight allowance.
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-5 py-3 font-semibold text-gray-900">Cleanout Type</th>
                  <th className="text-left px-5 py-3 font-semibold text-gray-900">Dumpster Size</th>
                  <th className="text-left px-5 py-3 font-semibold text-gray-900">Average Cost</th>
                  <th className="text-left px-5 py-3 font-semibold text-gray-900">Timeframe</th>
                </tr>
              </thead>
              <tbody>
                {CLEANOUT_TYPES.map((item) => (
                  <tr key={item.type} className="border-b border-gray-100 last:border-0">
                    <td className="px-5 py-3 font-medium text-gray-900">{item.type}</td>
                    <td className="px-5 py-3 text-gray-600">{item.size}</td>
                    <td className="px-5 py-3 text-gray-600">{item.cost}</td>
                    <td className="px-5 py-3 text-gray-600">{item.timeframe}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Money-Saving Tips */}
        <section className="rounded-xl border border-green-200 bg-green-50 p-7">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Tips to Save Money on Your Cleanout</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                title: 'Donate before you dump',
                detail: 'Charities like Habitat ReStore pick up furniture for free. Less volume in the dumpster means you can rent a smaller size.',
              },
              {
                title: 'Size up, not twice',
                detail: 'A 20-yard is only $50–$100 more than a 10-yard, but a second 10-yard rental is $300+. When in doubt, go bigger.',
              },
              {
                title: 'Sell valuable items first',
                detail: 'Furniture, tools, and electronics in working condition can sell quickly on Facebook Marketplace. Use the proceeds to offset your dumpster cost.',
              },
              {
                title: 'Avoid overage fees',
                detail: 'Stay under the weight limit and fill line. Set a phone reminder 2 days before your rental period ends to schedule pickup.',
              },
            ].map((tip) => (
              <div key={tip.title} className="flex items-start gap-3 rounded-lg bg-white border border-green-100 p-4">
                <DollarSign className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-gray-900">{tip.title}</div>
                  <div className="text-xs text-gray-600 leading-relaxed">{tip.detail}</div>
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

        {/* Internal Links */}
        <section className="rounded-xl border border-gray-100 bg-gray-50 p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Related Guides & Tools</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: 'Residential Dumpster Rental', href: '/dumpster-rental/residential', desc: 'Find residential dumpster companies near you' },
              { label: 'Dumpster Size Estimator', href: '/dumpster-size-estimator', desc: 'Answer a few questions to get a size recommendation' },
              { label: 'Dumpster Rental Checklist', href: '/dumpster-rental-checklist', desc: 'Everything to do before, during, and after your rental' },
              { label: 'How to Dispose of Furniture', href: '/how-to-dispose-of-furniture', desc: 'All your options for getting rid of old furniture' },
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
            Ready to Start Your Cleanout?
          </h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Compare quotes from residential dumpster rental companies in your area. Most offer
            next-day delivery and 7–14 day rental periods.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/dumpster-rental/residential"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-700 px-7 py-3.5 font-bold text-white hover:bg-green-800 transition"
            >
              Find Residential Haulers <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/dumpster-size-estimator"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-green-300 bg-white px-7 py-3.5 font-bold text-green-700 hover:bg-green-50 transition"
            >
              Estimate Your Dumpster Size <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </section>

      </div>
    </>
  )
}
