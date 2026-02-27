import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, ArrowRight, Users } from 'lucide-react'

import Breadcrumbs from '@/components/Breadcrumbs'
import FAQ from '@/components/FAQ'
import { titleCase, formatNumber, STATE_NAMES } from '@/lib/utils'
import { getStateFAQs } from '@/lib/faq'
import { getCitiesByState, getAllStates } from '@/lib/supabase'

async function getStateData(stateSlug: string) {
  const cities = await getCitiesByState(stateSlug)
  if (!cities.length) return null
  const stateName = STATE_NAMES[stateSlug] ?? titleCase(stateSlug)
  return { cities, stateName }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ state: string }>
}): Promise<Metadata> {
  const { state } = await params
  const data = await getStateData(state)
  if (!data) return { title: 'Not Found' }
  const cityCount = data.cities.length
  const title = `Dumpster Rental in ${data.stateName} | ${cityCount} Cities — Compare Local Companies`
  const description = `Find dumpster rental companies in ${data.stateName}. Compare prices across ${cityCount} cities. Free quotes on 10–40 yard roll-off dumpsters from local providers.`
  return {
    title, description,
    alternates: { canonical: `/dumpster-rental/${state}` },
    openGraph: {
      title,
      description,
      url: `/dumpster-rental/${state}`,
      images: [{
        url: `/api/og?title=${encodeURIComponent(`Dumpster Rental in ${data.stateName}`)}&subtitle=${encodeURIComponent(`${cityCount} cities · Compare local companies · Free quotes`)}`,
        width: 1200,
        height: 630,
        alt: `Dumpster Rental in ${data.stateName}`,
      }],
    },
    twitter: {
      card: 'summary_large_image',
      images: [`/api/og?title=${encodeURIComponent(`Dumpster Rental in ${data.stateName}`)}&subtitle=${encodeURIComponent(`${cityCount} cities · Compare local companies · Free quotes`)}`],
    },
  }
}

export async function generateStaticParams() {
  const states = await getAllStates()
  return states.map((s: { state_slug: string }) => ({ state: s.state_slug }))
}

export default async function StatePage({
  params,
}: {
  params: Promise<{ state: string }>
}) {
  const { state: stateSlug } = await params
  const data = await getStateData(stateSlug)
  if (!data) notFound()

  const { cities, stateName } = data
  const faqs = getStateFAQs(stateName)

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://dumpsterlisting.com'

  const stateSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `Dumpster Rental Companies in ${stateName}`,
    numberOfItems: cities.length,
    itemListElement: cities.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: `${c.city_name} Dumpster Rental`,
      url: `${siteUrl}/dumpster-rental/${stateSlug}/${c.city_slug}`,
    })),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Dumpster Rental', item: `${siteUrl}/dumpster-rental` },
      { '@type': 'ListItem', position: 3, name: `Dumpster Rental in ${stateName}`, item: `${siteUrl}/dumpster-rental/${stateSlug}` },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(stateSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs crumbs={[
            { label: 'Home', href: '/' },
            { label: 'Dumpster Rental', href: '/dumpster-rental' },
            { label: stateName },
          ]} />

          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900">
            Dumpster Rental in {stateName}
          </h1>
          <p className="mt-3 max-w-2xl text-gray-600">
            Browse dumpster rental companies across {stateName}. Select your city to compare local
            providers, view pricing, and get free quotes.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">
            {cities.length} {cities.length === 1 ? 'City' : 'Cities'} in {stateName}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {cities
            .sort((a, b) => b.population - a.population)
            .map((city) => (
              <Link
                key={city.id}
                href={`/dumpster-rental/${stateSlug}/${city.city_slug}`}
                className="group flex items-start justify-between rounded-xl border border-gray-200 bg-white p-4 hover:border-green-400 hover:shadow-sm transition"
              >
                <div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="h-4 w-4 text-gray-400 group-hover:text-green-500 transition" />
                    <span className="font-semibold text-gray-900 group-hover:text-green-700 transition">
                      {city.city_name}
                    </span>
                  </div>
                  {city.population > 0 && (
                    <div className="mt-1 flex items-center gap-1 text-xs text-gray-400">
                      <Users className="h-3 w-3" />
                      {formatNumber(city.population)}
                    </div>
                  )}
                  {city.county && (
                    <p className="mt-0.5 text-xs text-gray-400">{city.county}</p>
                  )}
                </div>
                <ArrowRight className="h-4 w-4 text-gray-300 group-hover:text-green-500 transition shrink-0 mt-0.5" />
              </Link>
            ))}
        </div>

        <div className="mt-12">
          <FAQ items={faqs} cityName={stateName} />
        </div>
      </div>
    </>
  )
}
