import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, CheckCircle, Info } from 'lucide-react'
import Breadcrumbs from '@/components/Breadcrumbs'
import { formatPrice, DEFAULT_PRICING } from '@/lib/utils'
import type { CategoryData } from '@/lib/category-data'
import WeightLimitsInfographic from '@/components/infographics/WeightLimitsInfographic'
import WhatFitsInfographic from '@/components/infographics/WhatFitsInfographic'

const TOP_CITIES = [
  { city: 'Houston', state: 'Texas', stateSlug: 'texas', citySlug: 'houston' },
  { city: 'Chicago', state: 'Illinois', stateSlug: 'illinois', citySlug: 'chicago' },
  { city: 'Phoenix', state: 'Arizona', stateSlug: 'arizona', citySlug: 'phoenix' },
  { city: 'Dallas', state: 'Texas', stateSlug: 'texas', citySlug: 'dallas' },
  { city: 'Los Angeles', state: 'California', stateSlug: 'california', citySlug: 'los-angeles' },
  { city: 'Atlanta', state: 'Georgia', stateSlug: 'georgia', citySlug: 'atlanta' },
  { city: 'Miami', state: 'Florida', stateSlug: 'florida', citySlug: 'miami' },
  { city: 'Denver', state: 'Colorado', stateSlug: 'colorado', citySlug: 'denver' },
  { city: 'Charlotte', state: 'North Carolina', stateSlug: 'north-carolina', citySlug: 'charlotte' },
  { city: 'Nashville', state: 'Tennessee', stateSlug: 'tennessee', citySlug: 'nashville' },
]

export default function CategoryPageLayout({ data }: { data: CategoryData }) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: data.primaryKeyword.replace(/\b\w/g, (c) => c.toUpperCase()),
    serviceType: 'Dumpster Rental',
    description: data.intro.slice(0, 300),
    provider: {
      '@type': 'Organization',
      name: 'DumpsterListing',
      url: 'https://dumpsterlisting.com',
    },
    areaServed: { '@type': 'Country', name: 'United States' },
    url: `https://dumpsterlisting.com/dumpster-rental/${data.slug}`,
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      {/* Hero */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs crumbs={[
            { label: 'Home', href: '/' },
            { label: 'Dumpster Rental', href: '/dumpster-rental' },
            { label: data.h1.split('—')[0].trim() },
          ]} />

          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900">
            {data.h1}
          </h1>

          {/* Stats strip */}
          <div className="mt-5 flex flex-wrap gap-3">
            {data.stats.map((stat) => (
              <div key={stat.label} className="rounded-lg bg-gray-50 border border-gray-200 px-4 py-2.5 text-sm">
                <span className="text-gray-500">{stat.label}: </span>
                <span className="font-semibold text-gray-900">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">

          {/* Main content */}
          <div className="xl:col-span-2 space-y-10">

            {/* Intro */}
            <section>
              <p className="text-lg text-gray-700 leading-relaxed">{data.intro}</p>
              {data.image && (
                <div className="mt-6 relative overflow-hidden rounded-xl shadow-md">
                  <Image
                    src={data.image}
                    alt={data.imageAlt ?? ''}
                    width={900}
                    height={500}
                    className="w-full h-64 sm:h-80 object-cover"
                  />
                </div>
              )}
            </section>

            {/* Why section */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-5">
                Why Rent a Dumpster for This Project?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {data.why.map((item) => (
                  <div key={item.title} className="rounded-xl border border-gray-200 bg-white p-4">
                    <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Recommended sizes */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-5">
                Recommended Dumpster Sizes
              </h2>
              <div className="space-y-3">
                {data.sizes.map((s) => {
                  const p = DEFAULT_PRICING[s.yards]
                  return (
                    <Link
                      key={s.yards}
                      href={`/dumpster-sizes/${s.yards}-yard`}
                      className="group flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-4 hover:border-green-300 hover:shadow-sm transition-all"
                    >
                      <div className="shrink-0 h-14 w-14 rounded-full bg-green-50 flex flex-col items-center justify-center">
                        <span className="text-xl font-extrabold text-green-700">{s.yards}</span>
                        <span className="text-xs text-green-600 font-medium">yard</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-gray-900">{s.yards} Yard Dumpster</p>
                        <p className="text-sm text-gray-600 mt-0.5">{s.reason}</p>
                      </div>
                      <div className="shrink-0 text-right">
                        <p className="text-sm font-semibold text-gray-900">{formatPrice(p.low)}–{formatPrice(p.high)}</p>
                        <p className="text-xs text-gray-400">avg. price</p>
                      </div>
                      <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-green-600 shrink-0 transition" />
                    </Link>
                  )
                })}
              </div>
            </section>

            {/* Tips */}
            <section className="rounded-xl border border-green-200 bg-green-50 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Pro Tips for This Type of Rental
              </h2>
              <ul className="space-y-3">
                {data.tips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{tip}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Contextual infographics */}
            {(data.slug === 'roofing' || data.slug === 'construction' || data.slug === 'concrete') && (
              <section>
                <WeightLimitsInfographic />
              </section>
            )}
            {(data.slug === 'residential' || data.slug === 'yard-waste' || data.slug === 'roll-off') && (
              <section>
                <WhatFitsInfographic />
              </section>
            )}

            {/* FAQ */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-5">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {data.faqs.map((faq) => (
                  <div key={faq.q} className="rounded-xl border border-gray-200 bg-white p-5">
                    <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* City links */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Find Local Companies by City
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                {TOP_CITIES.map((c) => (
                  <Link
                    key={c.citySlug}
                    href={`/dumpster-rental/${c.stateSlug}/${c.citySlug}`}
                    className="flex items-center gap-1.5 text-sm text-gray-700 hover:text-green-600 transition rounded-lg border border-gray-100 bg-white px-3 py-2"
                  >
                    <ArrowRight className="h-3 w-3 text-gray-400 shrink-0" />
                    {c.city}
                  </Link>
                ))}
                <Link
                  href="/dumpster-rental"
                  className="flex items-center gap-1.5 text-sm font-medium text-green-600 hover:text-green-700 transition rounded-lg border border-green-100 bg-green-50 px-3 py-2"
                >
                  <ArrowRight className="h-3 w-3 shrink-0" />
                  All cities →
                </Link>
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <aside className="space-y-5">

            {/* CTA */}
            <div className="rounded-xl border border-green-200 bg-green-50 p-6">
              <h3 className="font-bold text-gray-900 text-lg mb-1">Get Free Quotes</h3>
              <p className="text-sm text-gray-600 mb-4">
                Find local dumpster rental companies. Compare prices and book in minutes.
              </p>
              <Link
                href="/dumpster-rental"
                className="block w-full rounded-lg bg-green-600 py-3 text-center font-bold text-white hover:bg-green-700 transition"
              >
                Find Local Companies
              </Link>
            </div>

            {/* All sizes */}
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <h3 className="font-bold text-gray-900 mb-3">Browse by Size</h3>
              <div className="space-y-2">
                {[10, 15, 20, 30, 40].map((size) => {
                  const p = DEFAULT_PRICING[size]
                  return (
                    <Link
                      key={size}
                      href={`/dumpster-sizes/${size}-yard`}
                      className="flex items-center justify-between text-sm text-gray-700 hover:text-green-600 transition group"
                    >
                      <span>{size} Yard — {formatPrice(p.low)}–{formatPrice(p.high)}</span>
                      <ArrowRight className="h-3.5 w-3.5 text-gray-400 group-hover:text-green-600 transition" />
                    </Link>
                  )
                })}
              </div>
            </div>

            {/* Info box */}
            <div className="rounded-xl border border-amber-100 bg-amber-50 p-5 flex gap-3">
              <Info className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="text-sm text-amber-800">
                <p className="font-semibold mb-1">Pricing varies by city</p>
                <p>Dumpster costs depend heavily on local landfill fees. Search your city for accurate local pricing.</p>
              </div>
            </div>

            {/* Helpful resources */}
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <h3 className="font-bold text-gray-900 mb-3">Helpful Resources</h3>
              <div className="space-y-2">
                {[
                  { label: 'Dumpster Size Estimator', href: '/dumpster-size-estimator' },
                  { label: 'Weight Limit Calculator', href: '/dumpster-weight-limit-calculator' },
                  { label: 'What Can You Put in a Dumpster?', href: '/what-can-you-put-in-a-dumpster' },
                  { label: 'Do You Need a Permit?', href: '/dumpster-rental-permit' },
                  { label: 'How Long Can You Keep a Dumpster?', href: '/how-long-can-you-keep-a-rental-dumpster' },
                  ...(data.slug === 'concrete'
                    ? [{ label: 'How to Dispose of Concrete', href: '/how-to-dispose-of-concrete' }]
                    : []),
                  ...(data.slug === 'yard-waste'
                    ? [{ label: 'How to Dispose of Yard Waste', href: '/how-to-dispose-of-yard-waste' }]
                    : []),
                  ...(data.slug === 'residential'
                    ? [{ label: 'Dumpster vs Junk Removal', href: '/dumpster-rental-vs-junk-removal' }]
                    : []),
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center justify-between text-sm text-gray-700 hover:text-green-600 transition group"
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="h-3.5 w-3.5 text-gray-400 group-hover:text-green-600 transition shrink-0" />
                  </Link>
                ))}
              </div>
            </div>

          </aside>

        </div>
      </div>
    </>
  )
}
