import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Phone, Globe, Star, ArrowLeft, ArrowRight, Award, CheckCircle2, Truck } from 'lucide-react'

import Breadcrumbs from '@/components/Breadcrumbs'
import LeadForm from '@/components/LeadForm'

import { titleCase, STATE_NAMES } from '@/lib/utils'
import { getBusinessByPath, getBusinessesByCity, getCityBySlug, getAllBusinessSlugs } from '@/lib/supabase'

// ─── Static params ─────────────────────────────────────────────────────────────
export async function generateStaticParams() {
  const businesses = await getAllBusinessSlugs()
  return businesses.map((b) => ({
    state:    b.city.state_slug,
    city:     b.city.city_slug,
    business: b.slug,
  }))
}

// ─── Metadata ──────────────────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ state: string; city: string; business: string }>
}): Promise<Metadata> {
  const { state, city, business } = await params
  const biz = await getBusinessByPath(state, city, business)
  if (!biz) return { title: 'Not Found' }

  const cityName  = biz.city?.city_name ?? titleCase(city)
  const stateName = STATE_NAMES[state] ?? titleCase(state)
  const title       = `${biz.name} — Dumpster Rental in ${cityName}, ${stateName}`
  const description = `${biz.name} offers dumpster rental services in ${cityName}, ${stateName}.${biz.rating ? ` Rated ${biz.rating}/5 from ${biz.review_count} reviews.` : ''} Get a free quote today.`

  return {
    title,
    description,
    alternates: { canonical: `/dumpster-rental/${state}/${city}/${business}` },
    openGraph: {
      title,
      description,
      url: `/dumpster-rental/${state}/${city}/${business}`,
      images: [{
        url: `/api/og?title=${encodeURIComponent(biz.name)}&subtitle=${encodeURIComponent(`Dumpster Rental · ${cityName}, ${stateName}${biz.rating ? ` · ${biz.rating}★ rating` : ''}`)}`,
        width: 1200,
        height: 630,
        alt: biz.name,
      }],
    },
    twitter: {
      card: 'summary_large_image',
      images: [`/api/og?title=${encodeURIComponent(biz.name)}&subtitle=${encodeURIComponent(`Dumpster Rental · ${cityName}, ${stateName}`)}`],
    },
  }
}

// ─── Page ──────────────────────────────────────────────────────────────────────
export default async function BusinessPage({
  params,
}: {
  params: Promise<{ state: string; city: string; business: string }>
}) {
  const { state: stateSlug, city: citySlug, business: businessSlug } = await params

  const biz = await getBusinessByPath(stateSlug, citySlug, businessSlug)
  if (!biz) notFound()

  const cityName  = biz.city?.city_name ?? titleCase(citySlug)
  const stateName = STATE_NAMES[stateSlug] ?? titleCase(stateSlug)
  const stateAbbr = Object.entries(STATE_NAMES).find(([, v]) => v === stateName)?.[0]?.toUpperCase() ?? ''

  // Other listings in same city (exclude this one)
  const cityData   = await getCityBySlug(stateSlug, citySlug)
  const allBiz     = cityData ? await getBusinessesByCity(cityData.id) : []
  const otherBiz   = allBiz.filter((b) => b.slug !== businessSlug).slice(0, 5)

  const isPremium = biz.tier === 'premium'
  const isBasic   = biz.tier === 'basic'

  // LocalBusiness schema
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: biz.name,
    description: biz.description ?? `${biz.name} provides dumpster rental services in ${cityName}, ${stateName}.`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: biz.address,
      addressLocality: cityName,
      addressRegion: stateAbbr,
      addressCountry: 'US',
    },
    ...(biz.phone   && { telephone: biz.phone }),
    ...(biz.website && { url: biz.website }),
    ...(biz.rating  && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: biz.rating,
        reviewCount: biz.review_count,
        bestRating: 5,
      },
    }),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs crumbs={[
            { label: 'Home',             href: '/' },
            { label: 'Dumpster Rental',  href: '/dumpster-rental' },
            { label: stateName,          href: `/dumpster-rental/${stateSlug}` },
            { label: cityName,           href: `/dumpster-rental/${stateSlug}/${citySlug}` },
            { label: biz.name },
          ]} />

          <div className="mt-5 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 flex-wrap">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">{biz.name}</h1>
                {isPremium && (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                    <Award className="h-4 w-4" /> Featured
                  </span>
                )}
                {isBasic && (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-600">
                    <CheckCircle2 className="h-4 w-4" /> Verified
                  </span>
                )}
              </div>

              {/* Rating */}
              {biz.rating !== null && (
                <div className="mt-3 flex items-center gap-2">
                  <div className="flex items-center">
                    {[1,2,3,4,5].map((s) => (
                      <svg key={s} className={`h-5 w-5 ${s <= Math.round(biz.rating!) ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-200 text-gray-200'}`} viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                  <span className="text-lg font-bold text-gray-800">{biz.rating.toFixed(1)}</span>
                  <span className="text-gray-500">({biz.review_count.toLocaleString()} Google reviews)</span>
                </div>
              )}

              {/* Address */}
              {biz.address && (
                <div className="mt-3 flex items-start gap-2 text-gray-600">
                  <MapPin className="h-5 w-5 mt-0.5 shrink-0 text-gray-400" />
                  <span>{biz.address}</span>
                </div>
              )}
            </div>

            {/* CTA box */}
            <div className="shrink-0 rounded-xl border border-green-200 bg-green-50 p-6 w-full lg:w-72">
              <p className="text-sm font-medium text-gray-700 mb-4">Get a free quote from {biz.name}</p>
              {biz.phone && (
                <a href={`tel:${biz.phone}`}
                  className="flex items-center justify-center gap-2 w-full rounded-lg bg-green-600 hover:bg-green-700 text-white font-bold py-3 mb-3 transition-colors">
                  <Phone className="h-5 w-5" /> {biz.phone}
                </a>
              )}
              <Link href={`/dumpster-rental/${stateSlug}/${citySlug}#quote`}
                className="flex items-center justify-center gap-2 w-full rounded-lg bg-gray-900 hover:bg-gray-800 text-white font-bold py-3 transition-colors">
                <Truck className="h-5 w-5" /> Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">

          {/* Left: details */}
          <div className="xl:col-span-2 space-y-8">

            {/* About */}
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3">About {biz.name}</h2>
              <p className="text-gray-600 leading-relaxed">
                {biz.description
                  ? biz.description
                  : `${biz.name} is a dumpster rental company serving ${cityName}, ${stateName} and surrounding areas. They offer roll-off dumpster rentals for residential cleanouts, renovations, roofing, and construction projects. Contact them for pricing and availability.`
                }
              </p>
            </div>

            {/* Contact details */}
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <div className="space-y-4">
                {biz.address && (
                  <div className="flex items-start gap-3">
                    <div className="rounded-lg bg-gray-100 p-2 shrink-0">
                      <MapPin className="h-5 w-5 text-gray-600" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-0.5">Address</p>
                      <p className="text-gray-700">{biz.address}</p>
                    </div>
                  </div>
                )}
                {biz.phone && (
                  <div className="flex items-start gap-3">
                    <div className="rounded-lg bg-green-50 p-2 shrink-0">
                      <Phone className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-0.5">Phone</p>
                      <a href={`tel:${biz.phone}`} className="text-green-600 hover:text-green-700 font-semibold text-lg">
                        {biz.phone}
                      </a>
                    </div>
                  </div>
                )}
                {biz.website && (
                  <div className="flex items-start gap-3">
                    <div className="rounded-lg bg-blue-50 p-2 shrink-0">
                      <Globe className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-0.5">Website</p>
                      <a href={biz.website.startsWith('http') ? biz.website : `https://${biz.website}`}
                        target="_blank" rel="noopener noreferrer"
                        className="text-blue-600 hover:underline break-all">
                        {biz.website.replace(/^https?:\/\/(www\.)?/, '').split('?')[0]}
                      </a>
                    </div>
                  </div>
                )}
                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-gray-100 p-2 shrink-0">
                    <MapPin className="h-5 w-5 text-gray-600" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-0.5">Service Area</p>
                    <p className="text-gray-700">{cityName} and within {biz.service_area_miles} miles</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sizes */}
            {biz.sizes_available && biz.sizes_available.length > 0 && (
              <div className="rounded-xl border border-gray-200 bg-white p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Available Dumpster Sizes</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {biz.sizes_available.map((size: string) => (
                    <Link key={size} href={`/dumpster-sizes/${size}-yard`}
                      className="rounded-lg border border-gray-200 p-4 text-center hover:border-green-300 hover:bg-green-50 transition-colors">
                      <p className="text-2xl font-bold text-gray-900">{size}</p>
                      <p className="text-sm text-gray-500">yard dumpster</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Back link */}
            <div>
              <Link href={`/dumpster-rental/${stateSlug}/${citySlug}`}
                className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-green-600 transition-colors">
                <ArrowLeft className="h-4 w-4" />
                Back to all {cityName} dumpster rental companies
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Quick quote CTA */}
            <div className="rounded-xl border border-green-200 bg-green-50 p-6">
              <h3 className="font-bold text-gray-900 text-lg mb-1">Get Free Quotes</h3>
              <p className="text-sm text-gray-600 mb-4">
                Compare {biz.name} with other {cityName} companies. Free, no obligation.
              </p>
              <Link href={`/dumpster-rental/${stateSlug}/${citySlug}#quote`}
                className="block w-full rounded-lg bg-green-600 py-3 text-center font-bold text-white hover:bg-green-700 transition">
                Compare All Companies
              </Link>
            </div>

            {/* Other listings */}
            {otherBiz.length > 0 && (
              <div className="rounded-xl border border-gray-200 bg-white p-6">
                <h3 className="font-bold text-gray-900 mb-3">
                  Other Companies in {cityName}
                </h3>
                <div className="space-y-3">
                  {otherBiz.map((b) => (
                    <Link key={b.id}
                      href={`/dumpster-rental/${stateSlug}/${citySlug}/${b.slug}`}
                      className="flex items-start justify-between gap-2 group">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-800 group-hover:text-green-600 transition-colors truncate">
                          {b.name}
                        </p>
                        {b.rating && (
                          <div className="flex items-center gap-1 mt-0.5">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            <span className="text-xs text-gray-500">{b.rating.toFixed(1)}</span>
                          </div>
                        )}
                      </div>
                      <ArrowRight className="h-4 w-4 text-gray-300 group-hover:text-green-500 shrink-0 mt-0.5 transition-colors" />
                    </Link>
                  ))}
                </div>
                <Link href={`/dumpster-rental/${stateSlug}/${citySlug}`}
                  className="mt-4 flex items-center gap-1 text-sm font-medium text-green-600 hover:text-green-700">
                  View all {cityName} listings <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            )}

            {/* Size guide */}
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="font-bold text-gray-900 mb-3">Not Sure What Size?</h3>
              <div className="space-y-2">
                {[10, 15, 20, 30, 40].map((size: number) => (
                  <Link key={size} href={`/dumpster-sizes/${size}-yard`}
                    className="flex items-center justify-between text-sm text-gray-700 hover:text-green-600 transition">
                    <span>{size} Yard Dumpster</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Lead form */}
      <div className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LeadForm cityId={biz.city_id} cityName={cityName} stateAbbr={stateAbbr} />
        </div>
      </div>
    </>
  )
}
