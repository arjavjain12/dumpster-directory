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
  const title = `Dumpster Rental in ${data.stateName} | ${cityCount} Cities`
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
  const faqs = getStateFAQs(stateName, cities.length)

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://dumpsterlisting.com'

  // Sort cities by population (descending) for the "Top Cities" section,
  // and alphabetically for the full A-Z directory below.
  const topCities = [...cities].sort((a, b) => b.population - a.population).slice(0, 20)
  const sortedCities = [...cities].sort((a, b) => a.city_name.localeCompare(b.city_name))

  // Group cities by first letter for the A-Z directory
  const cityGroups: Record<string, typeof cities> = {}
  for (const city of sortedCities) {
    const letter = city.city_name.charAt(0).toUpperCase()
    if (!cityGroups[letter]) cityGroups[letter] = []
    cityGroups[letter].push(city)
  }
  const letters = Object.keys(cityGroups).sort()

  // Only include top cities in ItemList schema to keep it manageable
  const stateSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `Dumpster Rental Companies in ${stateName}`,
    numberOfItems: cities.length,
    itemListElement: topCities.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: `${c.city_name} Dumpster Rental`,
      url: `${siteUrl}/dumpster-rental/${stateSlug}/${c.city_slug}`,
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(stateSchema) }} />

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
        {/* Top cities by population */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Top Cities in {stateName}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {topCities.map((city) => (
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
        </div>

        {/* A-Z letter navigation */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            All {cities.length} {cities.length === 1 ? 'City' : 'Cities'} in {stateName}
          </h2>
          <div className="flex flex-wrap gap-1.5">
            {letters.map((letter) => (
              <a
                key={letter}
                href={`#letter-${letter}`}
                className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-gray-200 bg-white text-sm font-semibold text-gray-700 hover:border-green-400 hover:text-green-700 transition"
              >
                {letter}
              </a>
            ))}
          </div>
        </div>

        {/* Grouped city list */}
        <div className="space-y-8">
          {letters.map((letter) => (
            <div key={letter} id={`letter-${letter}`}>
              <h3 className="text-lg font-bold text-gray-800 mb-3 border-b border-gray-200 pb-2">
                {letter}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-1.5">
                {cityGroups[letter].map((city) => (
                  <Link
                    key={city.id}
                    href={`/dumpster-rental/${stateSlug}/${city.city_slug}`}
                    className="text-sm text-gray-600 hover:text-green-700 transition truncate py-0.5"
                  >
                    {city.city_name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <FAQ items={faqs} cityName={stateName} emitSchema={false} />
        </div>
      </div>
    </>
  )
}
