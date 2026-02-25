import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Star, ArrowRight, Truck, CheckCircle, AlertTriangle, Building2 } from 'lucide-react'

import Breadcrumbs from '@/components/Breadcrumbs'
import BusinessCard from '@/components/BusinessCard'
import PricingTable from '@/components/PricingTable'
import LeadForm from '@/components/LeadForm'
import WhatFitsInfographic from '@/components/infographics/WhatFitsInfographic'

import { formatNumber } from '@/lib/utils'
import { getCityBySlug, getBusinessesByCity, getCityPricing, getNearbyCities } from '@/lib/supabase'

// --- Data fetching ---
async function getNYCData() {
  const city = await getCityBySlug('new-york', 'new-york')
  if (!city) return null

  const [businesses, pricing, nearby] = await Promise.all([
    getBusinessesByCity(city.id),
    getCityPricing(city.id),
    getNearbyCities(city.id, city.latitude, city.longitude, 5),
  ])

  return { city, businesses, pricing, nearby }
}

// --- Metadata ---
export const metadata: Metadata = {
  title: 'Dumpster Rental in New York City (February 2026) | All 5 Boroughs',
  description:
    'Find dumpster rental in NYC — Manhattan, Brooklyn, Queens, Bronx, and Staten Island. Compare local prices ($420–$832), permit requirements, and 5-borough coverage.',
  alternates: {
    canonical: '/dumpster-rental/new-york/new-york',
  },
  openGraph: {
    title: 'Dumpster Rental in New York City | All 5 Boroughs',
    description:
      'NYC dumpster rental pricing by borough, DOT permit requirements, and sizing guidance for Manhattan, Brooklyn, Queens, Bronx, and Staten Island.',
    url: '/dumpster-rental/new-york/new-york',
  },
}

// --- Structured data ---
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Dumpster Rental in New York City — Prices, Permits & 5-Borough Guide',
  description:
    'Complete guide to dumpster rental in NYC. Borough-by-borough pricing, DOT permit requirements, sizing guidance, and how to book.',
  datePublished: '2026-02-24',
  dateModified: '2026-02-24',
  author: { '@type': 'Organization', name: 'DumpsterListing', url: 'https://dumpsterlisting.com' },
  publisher: { '@type': 'Organization', name: 'DumpsterListing', url: 'https://dumpsterlisting.com' },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://dumpsterlisting.com/dumpster-rental/new-york/new-york',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do I need a permit for a dumpster in NYC?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "If you place the dumpster on a public street, sidewalk, or other city property, you need a Right-of-Way permit from the NYC Department of Transportation (DOT). Apply at portal.311.nyc.gov. Cost is $135–$385 and the permit is valid for 5 days (renewable). No permit is required if the dumpster sits entirely on private property like a driveway or parking lot. Many rental companies will handle the permit application for you — ask when booking.",
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a dumpster rental cost in Manhattan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Dumpster rental in Manhattan ranges from $469–$768 for a 10-yard container, $600–$900 for a 20-yard, and $800–$1,050 for a 30-yard. NYC prices are 30–60% higher than the national average due to higher landfill fees, permit requirements, and the logistical challenges of delivering in dense urban neighborhoods.",
      },
    },
    {
      '@type': 'Question',
      name: 'What size dumpster fits on a NYC street?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "In most NYC neighborhoods, a 10-yard or 20-yard dumpster is the most practical for street placement. Narrow streets, alternate-side parking rules, and building density make 30-yard and 40-yard containers harder to place on public streets. These larger sizes are available but require more access planning. Always measure your drop zone and confirm clearance before ordering.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can I get a dumpster delivered to Brooklyn or Queens?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. Most NYC-area dumpster rental companies serve all five boroughs including Brooklyn and Queens. Brooklyn is a mix of residential brownstones and commercial areas where 15–20 yard containers are most common. Queens has more suburban-style streets where delivery is often easier and 20–30 yard dumpsters are more feasible. Request a quote and confirm borough-specific availability and pricing with your provider.",
      },
    },
    {
      '@type': 'Question',
      name: 'How much does dumpster rental cost in New York City?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "NYC dumpster rental costs range from $420–$832 depending on borough and container size. Manhattan is the most expensive ($469–$768 for a 10-yard), while Staten Island is the most affordable ($420–$720 for a 10-yard). NYC prices are 30–60% above the national average due to landfill fees, permits, and urban logistics.",
      },
    },
    {
      '@type': 'Question',
      name: 'What size dumpster do I need for a NYC home cleanout?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "For most NYC apartments and brownstones, a 10–20 yard dumpster is sufficient. Due to narrow streets, alternate-side parking, and building density, 10-yard and 20-yard containers are the most practical in most neighborhoods. For a large apartment or multi-unit building cleanout, a 30-yard may be appropriate — but confirm access and street placement before ordering.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a permit for a dumpster in my NYC driveway?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "No permit is required if the dumpster sits entirely on your private property, such as a driveway or parking lot. Only street or sidewalk placement requires a DOT Right-of-Way permit. If you are in an apartment building, check with your building management about placement options — many NYC buildings coordinate with the building superintendent for placement in loading zones or courtyards.",
      },
    },
  ],
}

// --- Borough data ---
const BOROUGHS = [
  {
    name: 'Manhattan',
    description:
      'High-density residential and commercial projects. 10–20 yard containers are most practical due to space constraints. Street permits are almost always required since driveways are rare.',
    tenYard: '$469–$768',
    twentyYard: '$600–$900',
    thirtyYard: '$800–$1,050',
    notes: 'Street permits nearly always required',
  },
  {
    name: 'Brooklyn',
    description:
      'Mix of residential brownstones and commercial blocks. 15–20 yard most common. Many neighborhoods have alternate-side parking rules that affect placement timing.',
    tenYard: '$453–$772',
    twentyYard: '$580–$875',
    thirtyYard: '$780–$1,020',
    notes: 'Check alternate-side parking schedule',
  },
  {
    name: 'Queens',
    description:
      'More suburban character with driveways more common. Wider streets make delivery easier. 20–30 yard containers are more feasible here than in Manhattan or Brooklyn.',
    tenYard: '$438–$832',
    twentyYard: '$560–$860',
    thirtyYard: '$760–$990',
    notes: 'Driveways more common; easier access',
  },
  {
    name: 'Bronx',
    description:
      'Urban density similar to Manhattan. 10–20 yard most practical. For apartment buildings, coordination with the building superintendent is often required.',
    tenYard: '$440–$780',
    twentyYard: '$570–$850',
    thirtyYard: '$750–$980',
    notes: 'Coordinate with building super for apartments',
  },
  {
    name: 'Staten Island',
    description:
      'Most suburban of the five boroughs. Easiest delivery access, most likely to have driveway space. 20–30 yard containers are common for residential projects.',
    tenYard: '$420–$720',
    twentyYard: '$550–$820',
    thirtyYard: '$720–$950',
    notes: 'Best access; driveways common',
  },
]

// --- Page ---
export default async function NYCDumpsterRentalPage() {
  const data = await getNYCData()

  // Fallback city object if Supabase doesn't have NYC yet
  const city = data?.city ?? {
    id: 0,
    city_name: 'New York',
    state: 'NY',
    state_slug: 'new-york',
    city_slug: 'new-york',
    population: 8336817,
    latitude: 40.7128,
    longitude: -74.006,
    county: 'New York County',
    metro_area: 'New York-Newark-Jersey City',
    intro: null,
  }
  const businesses = data?.businesses ?? []
  const pricing = data?.pricing ?? []
  const nearby = data?.nearby ?? []

  const avgRating =
    businesses.length
      ? (businesses.reduce((acc: number, b: { rating?: number | null }) => acc + (b.rating ?? 0), 0) / businesses.length).toFixed(1)
      : null

  const citySchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Dumpster Rental Companies in New York City, NY',
    description: 'Find dumpster rental companies in New York City, NY',
    numberOfItems: businesses.length,
    itemListElement: businesses.map((b: {
      name: string
      address: string
      phone?: string | null
      website?: string | null
      rating?: number | null
      review_count: number
    }, i: number) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'LocalBusiness',
        name: b.name,
        address: {
          '@type': 'PostalAddress',
          streetAddress: b.address,
          addressLocality: 'New York',
          addressRegion: 'NY',
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }} />

      {/* Hero */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs crumbs={[
            { label: 'Home', href: '/' },
            { label: 'Dumpster Rental', href: '/dumpster-rental' },
            { label: 'New York', href: '/dumpster-rental/new-york' },
            { label: 'New York City' },
          ]} />

          <div className="mt-4 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
                Dumpster Rental in New York City, NY
              </h1>
              <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  All 5 Boroughs
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
              className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-green-700 px-6 py-3 font-bold text-white hover:bg-green-800 transition"
            >
              <Truck className="h-5 w-5" /> Get Free Quotes
            </Link>
          </div>

          <p className="mt-5 max-w-3xl text-gray-600 leading-relaxed">
            Looking for dumpster rental in New York City? Whether you&apos;re in Manhattan, Brooklyn, Queens, the
            Bronx, or Staten Island, our directory connects you with local roll-off dumpster companies that serve
            all five boroughs. NYC dumpster rental is 30–60% more expensive than the national average due to
            permit requirements, landfill fees, and urban logistics — compare quotes before you book.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
          {/* Main content */}
          <div className="xl:col-span-2 space-y-12">

            {/* Standard pricing table */}
            <PricingTable cityPricing={pricing} cityName="New York City" />

            {/* Borough-by-Borough Pricing */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Dumpster Rental Prices in NYC by Borough
              </h2>
              <p className="text-sm text-gray-500 mb-5">
                Prices vary across the five boroughs based on landfill proximity, permit requirements, and
                access difficulty. Manhattan is consistently the most expensive.
              </p>

              {/* Desktop table */}
              <div className="hidden md:block overflow-hidden rounded-xl border border-gray-200">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="bg-gray-50 text-xs font-semibold uppercase tracking-wide text-gray-500">
                      <th className="px-4 py-3">Borough</th>
                      <th className="px-4 py-3">10-Yard</th>
                      <th className="px-4 py-3">20-Yard</th>
                      <th className="px-4 py-3">30-Yard</th>
                      <th className="px-4 py-3">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {BOROUGHS.map((b) => (
                      <tr key={b.name} className="bg-white hover:bg-gray-50 transition">
                        <td className="px-4 py-3.5 font-semibold text-gray-900">{b.name}</td>
                        <td className="px-4 py-3.5 text-gray-700">{b.tenYard}</td>
                        <td className="px-4 py-3.5 text-gray-700">{b.twentyYard}</td>
                        <td className="px-4 py-3.5 text-gray-700">{b.thirtyYard}</td>
                        <td className="px-4 py-3.5 text-xs text-gray-500">{b.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile cards */}
              <div className="space-y-3 md:hidden">
                {BOROUGHS.map((b) => (
                  <div key={b.name} className="rounded-xl border border-gray-200 bg-white p-4">
                    <div className="font-bold text-gray-900 mb-2">{b.name}</div>
                    <dl className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <dt className="text-gray-500">10-Yard</dt>
                        <dd className="font-medium text-gray-900">{b.tenYard}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-gray-500">20-Yard</dt>
                        <dd className="font-medium text-gray-900">{b.twentyYard}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-gray-500">30-Yard</dt>
                        <dd className="font-medium text-gray-900">{b.thirtyYard}</dd>
                      </div>
                    </dl>
                    <p className="mt-2 text-xs text-gray-500">{b.notes}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-xl border border-blue-100 bg-blue-50 px-5 py-4 text-sm text-blue-800">
                <strong>Why NYC prices are higher:</strong> NYC dumpster rental costs are 30–60% above the
                national average due to higher landfill tipping fees, NYC DOT permit requirements for street
                placement, and the logistical challenges of delivering to dense urban neighborhoods.
              </div>
            </section>

            {/* Permit Section */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Do You Need a Permit for a Dumpster in NYC?
              </h2>
              <p className="text-sm text-gray-500 mb-5">
                Permit requirements depend on where you place the dumpster — on public property or private property.
              </p>
              <div className="rounded-xl border border-gray-200 bg-white divide-y divide-gray-100">
                <div className="p-5 flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-red-50 flex items-center justify-center shrink-0">
                    <AlertTriangle className="h-5 w-5 text-red-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Permit required: Public street, sidewalk, or city property</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      If the dumpster will sit on a public street, sidewalk, or any city-owned property, you must
                      obtain a <strong>Right-of-Way permit</strong> from the NYC Department of Transportation (DOT).
                    </p>
                    <ul className="mt-3 space-y-1.5 text-sm text-gray-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-700 shrink-0 mt-0.5" />
                        Apply online at <Link href="https://portal.311.nyc.gov" target="_blank" rel="noopener noreferrer" className="text-green-700 font-medium hover:underline">portal.311.nyc.gov</Link>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-700 shrink-0 mt-0.5" />
                        Cost: <strong>$135–$385</strong> depending on duration and borough
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-700 shrink-0 mt-0.5" />
                        Valid for <strong>5 days</strong>; can be renewed if your project runs longer
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-700 shrink-0 mt-0.5" />
                        Your rental company can often handle the permit application — ask when booking
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="p-5 flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-green-50 flex items-center justify-center shrink-0">
                    <CheckCircle className="h-5 w-5 text-green-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">No permit required: Private property</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      If the dumpster sits entirely on your own private property — a driveway, parking lot, or
                      building courtyard — no DOT permit is required. In NYC, private driveways are most common
                      in Queens and Staten Island.
                    </p>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-500">
                For general guidance on permits in other cities, see our{' '}
                <Link href="/dumpster-rental-permit" className="text-green-700 font-medium hover:underline">
                  dumpster rental permit guide
                </Link>.
              </p>
            </section>

            {/* 5 Boroughs Section */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">5 Boroughs We Serve</h2>
              <p className="text-sm text-gray-500 mb-5">
                NYC dumpster rental companies typically serve all five boroughs, though pricing and logistics
                vary significantly by area.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {BOROUGHS.map((b) => (
                  <div key={b.name} className="rounded-xl border border-gray-200 bg-white p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <Building2 className="h-5 w-5 text-green-700 shrink-0" />
                      <h3 className="font-bold text-gray-900">{b.name}</h3>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">{b.description}</p>
                    <p className="mt-2 text-xs font-medium text-green-700">
                      10-yd from {b.tenYard.split('–')[0]} · 20-yd from {b.twentyYard.split('–')[0]}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* NYC Sizing Guide */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">NYC-Specific Dumpster Sizing Guide</h2>
              <p className="text-sm text-gray-500 mb-5">
                Choosing the right size in NYC requires more planning than in suburban areas.
              </p>
              <div className="rounded-xl border border-gray-200 bg-white divide-y divide-gray-100">
                {[
                  {
                    size: '10-Yard',
                    desc: 'Best for single-room cleanouts, small apartment renovations, or tight street placements in Manhattan and the Bronx. Easiest to place on NYC streets.',
                    tag: 'Most common in Manhattan & Bronx',
                  },
                  {
                    size: '20-Yard',
                    desc: 'The most versatile size for NYC. Works for full apartment cleanouts, small commercial projects, and brownstone renovations. Fits on most NYC streets with a permit.',
                    tag: 'Most popular across all boroughs',
                  },
                  {
                    size: '30-Yard',
                    desc: 'Best for large renovation projects or new construction. More feasible in Queens and Staten Island where streets are wider. Requires careful access planning in Brooklyn and Manhattan.',
                    tag: 'Practical in Queens & Staten Island',
                  },
                  {
                    size: '40-Yard',
                    desc: 'Commercial demolition and large construction sites. Rarely placed on NYC streets due to space constraints. Typically used in private lots or commercial loading areas.',
                    tag: 'Commercial/private lots only in most areas',
                  },
                ].map((item) => (
                  <div key={item.size} className="p-5">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold text-gray-900">{item.size} Dumpster</h3>
                      <span className="text-xs rounded-full bg-green-100 text-green-700 font-medium px-2.5 py-0.5 shrink-0 ml-3">{item.tag}</span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
                <strong>NYC sizing tip:</strong> Due to narrow streets, alternate-side parking rules, and
                building density, most NYC dumpster rentals are 10–20 yard. 30-yard and 40-yard containers
                are available but require more access planning and may need a separate permit for street
                placement. Always measure your drop zone before ordering.
              </div>
              <div className="mt-3">
                <Link
                  href="/roll-off-dumpster-sizes"
                  className="inline-flex items-center gap-1 text-sm font-medium text-green-700 hover:text-green-700"
                >
                  See full national size guide <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </section>

            {/* Business Listings */}
            <div>
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-2xl font-bold text-gray-900">
                  Dumpster Rental Companies in New York City
                </h2>
                <span className="text-sm text-gray-500">{businesses.length} listed</span>
              </div>

              {businesses.length > 0 ? (
                <div className="space-y-4">
                  {businesses.map((b: Parameters<typeof BusinessCard>[0]['business']) => (
                    <BusinessCard
                      key={b.id}
                      business={b}
                      stateSlug="new-york"
                      citySlug="new-york"
                    />
                  ))}
                </div>
              ) : (
                <div className="rounded-xl border border-dashed border-gray-300 p-10 text-center">
                  <Truck className="mx-auto mb-3 h-10 w-10 text-gray-300" />
                  <p className="text-gray-500 font-medium">No listings yet for New York City</p>
                  <p className="text-sm text-gray-400 mt-1">Fill out the quote form and we&apos;ll find local companies for you.</p>
                </div>
              )}
            </div>

            {/* What fits infographic */}
            <WhatFitsInfographic />

            {/* FAQ */}
            <section className="py-4">
              <h2 className="mb-6 text-2xl font-bold text-gray-900">
                Frequently Asked Questions — Dumpster Rental in NYC
              </h2>
              <div className="divide-y divide-gray-200 rounded-xl border border-gray-200 bg-white">
                {faqSchema.mainEntity.map((item, i) => (
                  <div key={i} className="px-6 py-5">
                    <h3 className="text-base font-semibold text-gray-900 mb-2">{item.name}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.acceptedAnswer.text}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Quick quote CTA */}
            <div className="rounded-xl border border-green-200 bg-green-50 p-6">
              <h3 className="font-bold text-gray-900 text-lg mb-1">Get Free Quotes in NYC</h3>
              <p className="text-sm text-gray-600 mb-4">
                Compare prices from NYC dumpster rental companies across all 5 boroughs. Fast, free, no obligation.
              </p>
              <Link href="#quote"
                className="block w-full rounded-lg bg-green-700 py-3 text-center font-bold text-white hover:bg-green-800 transition">
                Get Quotes Now
              </Link>
            </div>

            {/* NYC permit callout */}
            <div className="rounded-xl border border-amber-200 bg-amber-50 p-6">
              <h3 className="font-bold text-gray-900 mb-2">NYC Permit Info</h3>
              <p className="text-sm text-gray-700 mb-3">
                Street placement requires a NYC DOT Right-of-Way permit ($135–$385, 5-day validity).
              </p>
              <a
                href="https://portal.311.nyc.gov"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm font-medium text-green-700 hover:text-green-800"
              >
                Apply at portal.311.nyc.gov <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            {/* Cost guide link */}
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="font-bold text-gray-900 mb-2">Cost Guide</h3>
              <p className="text-sm text-gray-600 mb-3">
                Learn what affects dumpster rental prices in New York City.
              </p>
              <Link
                href="/dumpster-rental/new-york/new-york/cost"
                className="flex items-center gap-1 text-sm font-medium text-green-700 hover:text-green-700"
              >
                View NYC Cost Guide <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Size guide */}
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="font-bold text-gray-900 mb-3">Not Sure What Size?</h3>
              <div className="space-y-2">
                {[10, 15, 20, 30, 40].map((size) => (
                  <Link key={size}
                    href={`/dumpster-sizes/${size}-yard`}
                    className="flex items-center justify-between text-sm text-gray-700 hover:text-green-700 transition">
                    <span>{size} Yard Dumpster</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Nearby cities */}
            {nearby.length > 0 && (
              <div className="rounded-xl border border-gray-200 bg-white p-6">
                <h3 className="font-bold text-gray-900 mb-3">Nearby Cities</h3>
                <div className="space-y-2">
                  {nearby.slice(0, 5).map((c: { id: number; state_slug: string; city_slug: string; city_name: string }) => (
                    <Link key={c.id}
                      href={`/dumpster-rental/${c.state_slug}/${c.city_slug}`}
                      className="flex items-center gap-1.5 text-sm text-gray-700 hover:text-green-700 transition">
                      <MapPin className="h-3.5 w-3.5 text-gray-400" />
                      {c.city_name} Dumpster Rental
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>

      {/* Lead Form */}
      <div className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LeadForm cityId={city.id} cityName="New York City" stateAbbr="NY" />
        </div>
      </div>
    </>
  )
}
