import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, ArrowRight } from 'lucide-react'
import LeadForm from '@/components/LeadForm'
import Breadcrumbs from '@/components/Breadcrumbs'
import { getPopularCities } from '@/lib/supabase'

export const metadata: Metadata = {
  title: 'Dumpster Rental Near Me | Find Local Companies',
  description:
    'Find dumpster rental near you. Compare local companies, get free quotes, and book roll-off dumpster delivery in your area.',
  alternates: { canonical: '/dumpster-rental-near-me' },
}

export default async function NearMePage() {
  const cities = await getPopularCities(20)

  return (
    <>
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs crumbs={[
            { label: 'Home', href: '/' },
            { label: 'Dumpster Rental Near Me' },
          ]} />
          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900">
            Dumpster Rental Near Me
          </h1>
          <p className="mt-3 max-w-2xl text-gray-600">
            Fill out the form below to get free quotes from dumpster rental companies near your location.
            Or browse by city using the links below.
          </p>
        </div>
      </div>

      {/* Lead form — uses city_id 1 as placeholder until we detect location */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <LeadForm cityId={1} cityName="your area" stateAbbr="US" />
      </div>

      {/* Popular cities */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Browse Popular Cities</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {cities.map((city) => (
            <Link
              key={city.id}
              href={`/dumpster-rental/${city.state_slug}/${city.city_slug}`}
              className="group flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm hover:border-green-400 hover:bg-green-50 transition"
            >
              <MapPin className="h-3.5 w-3.5 text-gray-400 group-hover:text-green-500 shrink-0" />
              <div>
                <div className="font-medium text-gray-800 group-hover:text-green-700">{city.city_name}</div>
                <div className="text-xs text-gray-400">{city.state}</div>
              </div>
              <ArrowRight className="ml-auto h-3.5 w-3.5 text-gray-300 group-hover:text-green-500" />
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
