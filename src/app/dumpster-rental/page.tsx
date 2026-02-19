import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, ArrowRight } from 'lucide-react'
import Breadcrumbs from '@/components/Breadcrumbs'
import { STATE_NAMES } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Dumpster Rental by City & State | Find Local Companies',
  description:
    'Find dumpster rental companies in any US city or state. Compare prices, read reviews, and get free quotes from local roll-off dumpster providers.',
  alternates: { canonical: '/dumpster-rental' },
}

const STATE_ENTRIES = Object.entries(STATE_NAMES).map(([abbr, name]) => ({
  abbr,
  name,
  slug: name.toLowerCase().replace(/\s+/g, '-'),
})).sort((a, b) => a.name.localeCompare(b.name))

export default function NationalDirectoryPage() {
  return (
    <>
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs crumbs={[
            { label: 'Home', href: '/' },
            { label: 'Dumpster Rental' },
          ]} />
          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900">
            Dumpster Rental by City & State
          </h1>
          <p className="mt-3 max-w-2xl text-gray-600">
            Browse dumpster rental companies across all 50 states. Select your state to find local
            companies, compare pricing, and get free quotes.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Browse All States</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {STATE_ENTRIES.map(({ name, slug }) => (
            <Link
              key={slug}
              href={`/dumpster-rental/${slug}`}
              className="group flex items-center justify-between rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm hover:border-green-400 hover:bg-green-50 transition"
            >
              <span className="flex items-center gap-2 font-medium text-gray-800 group-hover:text-green-700">
                <MapPin className="h-3.5 w-3.5 text-gray-400 group-hover:text-green-500" />
                {name}
              </span>
              <ArrowRight className="h-3.5 w-3.5 text-gray-300 group-hover:text-green-500" />
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
