import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Star, ArrowRight, Truck } from 'lucide-react'

import Breadcrumbs from '@/components/Breadcrumbs'
import BusinessCard from '@/components/BusinessCard'
import PricingTable from '@/components/PricingTable'
import LeadForm from '@/components/LeadForm'
import FAQ from '@/components/FAQ'

import { titleCase, formatNumber, STATE_NAMES } from '@/lib/utils'
import { getCityFAQs } from '@/lib/faq'
import { getCityBySlug, getBusinessesByCity, getCityPricing, getNearbyCities } from '@/lib/supabase'
import { getAllCitySlugs } from '@/lib/supabase'
import WhatFitsInfographic from '@/components/infographics/WhatFitsInfographic'

// --- Data fetching (live Supabase) ---
async function getCityData(stateSlug: string, citySlug: string) {
  const city = await getCityBySlug(stateSlug, citySlug)
  if (!city) return null

  const [businesses, pricing, nearby] = await Promise.all([
    getBusinessesByCity(city.id),
    getCityPricing(city.id),
    getNearbyCities(city.id, city.latitude, city.longitude, 5),
  ])

  return { city, businesses, pricing, nearby }
}

// --- Metadata ---
export async function generateMetadata({
  params,
}: {
  params: Promise<{ state: string; city: string }>
}): Promise<Metadata> {
  const { state, city } = await params
  const data = await getCityData(state, city)

  if (!data) return { title: 'Not Found' }

  const { city: c, businesses } = data
  const stateName = STATE_NAMES[state] ?? titleCase(state)
  const title = `Dumpster Rental in ${c.city_name}, ${c.state} (February 2026) | Compare Local Companies`
  const description = `Find and compare dumpster rental companies in ${c.city_name}, ${stateName}. Get free quotes on 10–40 yard roll-off dumpsters. Serving ${c.county}.`

  return {
    title,
    description,
    alternates: {
      canonical: `/dumpster-rental/${state}/${city}`,
    },
    openGraph: {
      title,
      description,
      url: `/dumpster-rental/${state}/${city}`,
      images: [{
        url: `/api/og?title=${encodeURIComponent(`Dumpster Rental in ${c.city_name}, ${c.state}`)}&subtitle=${encodeURIComponent(`Compare ${businesses.length} local companies · Free quotes`)}`,
        width: 1200,
        height: 630,
        alt: `Dumpster Rental in ${c.city_name}, ${c.state}`,
      }],
    },
    twitter: {
      card: 'summary_large_image',
      images: [`/api/og?title=${encodeURIComponent(`Dumpster Rental in ${c.city_name}, ${c.state}`)}&subtitle=${encodeURIComponent(`Compare ${businesses.length} local companies · Free quotes`)}`],
    },
  }
}

// --- Static params (all cities from Supabase) ---
export async function generateStaticParams() {
  const slugs = await getAllCitySlugs()
  return slugs.map((c: { state_slug: string; city_slug: string }) => ({
    state: c.state_slug,
    city: c.city_slug,
  }))
}

// --- Page ---
export default async function CityPage({
  params,
}: {
  params: Promise<{ state: string; city: string }>
}) {
  const { state: stateSlug, city: citySlug } = await params
  const data = await getCityData(stateSlug, citySlug)

  if (!data) notFound()

  const { city, businesses, pricing, nearby } = data
  const stateName = STATE_NAMES[stateSlug] ?? titleCase(stateSlug)
  const stateAbbr = Object.entries(STATE_NAMES).find(([, v]) => v === stateName)?.[0]?.toUpperCase() ?? ''
  const faqs = getCityFAQs(city.city_name, stateName)
  const avgRating = businesses.length
    ? (businesses.reduce((acc, b) => acc + (b.rating ?? 0), 0) / businesses.length).toFixed(1)
    : null

  // LocalBusiness schema for the city page
  const citySchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `Dumpster Rental Companies in ${city.city_name}, ${stateName}`,
    description: `Find dumpster rental companies in ${city.city_name}, ${stateName}`,
    numberOfItems: businesses.length,
    itemListElement: businesses.map((b, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'LocalBusiness',
        name: b.name,
        address: {
          '@type': 'PostalAddress',
          streetAddress: b.address,
          addressLocality: city.city_name,
          addressRegion: stateSlug.toUpperCase(),
          addressCountry: 'US',
        },
        telephone: b.phone ?? undefined,
        url: b.website ?? undefined,
        aggregateRating: b.rating
          ? { '@type': 'AggregateRating', ratingValue: b.rating, reviewCount: b.review_count }
          : undefined,
      },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }} />

      {/* Hero */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs crumbs={[
            { label: 'Home', href: '/' },
            { label: 'Dumpster Rental', href: '/dumpster-rental' },
            { label: stateName, href: `/dumpster-rental/${stateSlug}` },
            { label: city.city_name },
          ]} />

          <div className="mt-4 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
                Dumpster Rental in {city.city_name}, {stateName}
              </h1>
              <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {city.county}
                  {city.metro_area ? ` · ${city.metro_area} Metro` : ''}
                </span>
                {city.population > 0 && (
                  <span>Population: {formatNumber(city.population)}</span>
                )}
                {businesses.length > 0 && (
                  <span>{businesses.length} local companies listed</span>
                )}
                {avgRating && (
                  <span className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    {avgRating} avg rating
                  </span>
                )}
              </div>
            </div>
            <Link
              href="#quote"
              className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-green-600 px-6 py-3 font-bold text-white hover:bg-green-700 transition"
            >
              <Truck className="h-5 w-5" /> Get Free Quotes
            </Link>
          </div>

          {/* Intro paragraph — Kimi-generated if available, fallback template */}
          <p className="mt-5 max-w-3xl text-gray-600 leading-relaxed">
            {city.intro
              ? city.intro
              : `Looking for dumpster rental in ${city.city_name}? Whether you're tackling a home cleanout,
                renovation, roofing project, or construction job in ${city.county}, our directory connects
                you with trusted local roll-off dumpster companies. Compare prices, read reviews, and get
                free quotes — all in one place.`}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
          {/* Main content */}
          <div className="xl:col-span-2 space-y-12">

            {/* Pricing Table */}
            <PricingTable cityPricing={pricing} cityName={city.city_name} />

            {/* Business Listings */}
            <div>
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-2xl font-bold text-gray-900">
                  Dumpster Rental Companies in {city.city_name}
                </h2>
                <span className="text-sm text-gray-500">{businesses.length} listed</span>
              </div>

              {businesses.length > 0 ? (
                <div className="space-y-4">
                  {businesses.map((b) => (
                    <BusinessCard
                      key={b.id}
                      business={b}
                      stateSlug={stateSlug}
                      citySlug={citySlug}
                    />
                  ))}
                </div>
              ) : (
                <div className="rounded-xl border border-dashed border-gray-300 p-10 text-center">
                  <Truck className="mx-auto mb-3 h-10 w-10 text-gray-300" />
                  <p className="text-gray-500 font-medium">No listings yet for {city.city_name}</p>
                  <p className="text-sm text-gray-400 mt-1">Fill out the quote form and we&apos;ll find local companies for you.</p>
                </div>
              )}
            </div>

            {/* What fits infographic */}
            <WhatFitsInfographic />

            {/* FAQ */}
            <FAQ items={faqs} cityName={city.city_name} />
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Quick quote sidebar CTA */}
            <div className="rounded-xl border border-green-200 bg-green-50 p-6">
              <h3 className="font-bold text-gray-900 text-lg mb-1">Get Free Quotes</h3>
              <p className="text-sm text-gray-600 mb-4">
                Compare prices from {city.city_name} dumpster rental companies. Fast, free, no obligation.
              </p>
              <Link href="#quote"
                className="block w-full rounded-lg bg-green-600 py-3 text-center font-bold text-white hover:bg-green-700 transition">
                Get Quotes Now
              </Link>
            </div>

            {/* Cost guide link */}
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="font-bold text-gray-900 mb-2">Cost Guide</h3>
              <p className="text-sm text-gray-600 mb-3">
                Learn what affects dumpster rental prices in {city.city_name}.
              </p>
              <Link
                href={`/dumpster-rental/${stateSlug}/${citySlug}/cost`}
                className="flex items-center gap-1 text-sm font-medium text-green-600 hover:text-green-700"
              >
                View {city.city_name} Cost Guide <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Size guide */}
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="font-bold text-gray-900 mb-3">Not Sure What Size?</h3>
              <div className="space-y-2">
                {[10, 15, 20, 30, 40].map((size) => (
                  <Link key={size}
                    href={`/dumpster-sizes/${size}-yard`}
                    className="flex items-center justify-between text-sm text-gray-700 hover:text-green-600 transition">
                    <span>{size} Yard Dumpster</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Nearby cities */}
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="font-bold text-gray-900 mb-3">Nearby Cities</h3>
              <div className="space-y-2">
                {nearby.slice(0, 5).map((c: { id: number; state_slug: string; city_slug: string; city_name: string }) => (
                  <Link key={c.id}
                    href={`/dumpster-rental/${c.state_slug}/${c.city_slug}`}
                    className="flex items-center gap-1.5 text-sm text-gray-700 hover:text-green-600 transition">
                    <MapPin className="h-3.5 w-3.5 text-gray-400" />
                    {c.city_name} Dumpster Rental
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Lead Form */}
      <div className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LeadForm cityId={city.id} cityName={city.city_name} stateAbbr={stateAbbr} />
        </div>
      </div>
    </>
  )
}
