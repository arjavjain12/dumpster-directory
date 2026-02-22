import Link from 'next/link'
import Image from 'next/image'
import { Search, Star, FileText, Truck, Shield, Clock, MapPin, ArrowRight, CheckCircle } from 'lucide-react'
import { STATE_NAMES } from '@/lib/utils'
import { getPopularCities } from '@/lib/supabase'
import HowItWorksInfographic from '@/components/infographics/HowItWorksInfographic'

export default async function Home() {
  const popularCities = await getPopularCities(10)
  const stateEntries = Object.entries(STATE_NAMES).sort((a, b) =>
    a[1].localeCompare(b[1])
  )

  return (
    <>
      {/* ───────── Hero ───────── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-green-50 to-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(22,163,74,0.12),transparent)]" />

        <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-16 sm:px-6 lg:px-8 lg:pt-24">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            {/* Text */}
            <div>
              <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-green-200 bg-green-50 px-3 py-1 text-sm font-medium text-green-700">
                <Truck className="h-3.5 w-3.5" />
                The #1 dumpster rental directory
              </span>

              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                Find Dumpster Rental Companies{' '}
                <span className="text-green-600">Near You</span>
              </h1>

              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                Compare prices, read reviews, and get free quotes from local
                roll-off dumpster companies in your city.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/dumpster-rental"
                  className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-8 py-3.5 text-base font-semibold text-white shadow-md transition hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                >
                  <Search className="h-5 w-5" />
                  Find My City
                </Link>
                <Link
                  href="/dumpster-sizes"
                  className="inline-flex items-center gap-2 rounded-lg border-2 border-green-600 px-8 py-3.5 text-base font-semibold text-green-700 transition hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                >
                  <FileText className="h-5 w-5" />
                  View Size Guide
                </Link>
              </div>

              {/* Trust bar */}
              <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-gray-500">
                {[
                  '5,000+ cities covered',
                  'Free quotes',
                  'No spam',
                  'Local companies',
                ].map((item) => (
                  <span key={item} className="flex items-center gap-1.5">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Hero image */}
            <div className="relative hidden lg:block">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/images/hero-dumpster-rental.jpg"
                  alt="Roll-off dumpster rental delivered to a residential driveway"
                  width={700}
                  height={467}
                  className="w-full object-cover"
                  priority
                />
                <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-white/90 backdrop-blur-sm p-4 shadow-lg">
                  <p className="text-sm font-semibold text-gray-900">Ready for delivery in your city</p>
                  <p className="text-xs text-gray-500 mt-0.5">10, 15, 20, 30 & 40 yard dumpsters available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── How It Works ───────── */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <HowItWorksInfographic />
        </div>
      </section>

      {/* ───────── Popular Cities ───────── */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Popular Cities
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-gray-500">
            Browse dumpster rental companies in these top metro areas.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {popularCities.map((city) => (
              <Link
                key={city.id}
                href={`/dumpster-rental/${city.state_slug}/${city.city_slug}`}
                className="group flex flex-col items-center rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:border-green-300 hover:shadow-md"
              >
                <MapPin className="h-6 w-6 text-green-600 transition group-hover:scale-110" />
                <span className="mt-3 text-sm font-semibold text-gray-900">
                  {city.city_name}
                </span>
                <span className="mt-0.5 text-xs text-gray-400">
                  {city.state}
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/dumpster-rental"
              className="inline-flex items-center gap-1 text-sm font-semibold text-green-600 transition hover:text-green-700"
            >
              View all cities
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ───────── Browse by State ───────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Browse by State
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-gray-500">
            Find dumpster rental companies in every US state.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {stateEntries.map(([abbr, name]) => {
              const slug = name.toLowerCase().replace(/\s+/g, '-')
              return (
                <Link
                  key={abbr}
                  href={`/dumpster-rental/${slug}`}
                  className="rounded-md px-2 py-1.5 text-sm text-gray-600 transition hover:bg-green-50 hover:text-green-700"
                >
                  {name}
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ───────── Why Use Us ───────── */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Why Use Our Directory
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-gray-500">
            We make it simple to find the right dumpster rental at the right
            price.
          </p>

          <div className="mt-14 grid gap-8 sm:grid-cols-3">
            {[
              {
                icon: Truck,
                title: 'Free Comparison Service',
                desc: 'Compare multiple dumpster rental companies in your area at no cost. No hidden fees, no credit card required.',
              },
              {
                icon: Shield,
                title: 'Verified Local Companies',
                desc: 'Every company in our directory is verified for licensing and insurance so you can book with confidence.',
              },
              {
                icon: Clock,
                title: 'Get Quotes in Minutes',
                desc: 'Submit one request and receive competitive quotes from local haulers, often within minutes.',
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 text-green-600">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-gray-900">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Bottom CTA ───────── */}
      <section className="bg-green-600 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Find a Dumpster Rental Company?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-green-100">
            Search thousands of verified haulers across the US. Free quotes, no
            spam, no hassle.
          </p>
          <Link
            href="/dumpster-rental"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3.5 text-base font-semibold text-green-700 shadow transition hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-600"
          >
            <Search className="h-5 w-5" />
            Find Companies Near Me
          </Link>
        </div>
      </section>
    </>
  )
}
