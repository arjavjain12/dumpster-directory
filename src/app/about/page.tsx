import type { Metadata } from 'next'
import { Search, BarChart2, MessageSquare, MapPin, Building2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About DumpsterListing — The Dumpster Rental Directory',
  description:
    'DumpsterListing helps homeowners and contractors find local dumpster rental companies fast. Explore our directory of 4,000+ businesses across 500+ cities.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About DumpsterListing — The Dumpster Rental Directory',
    description:
      'DumpsterListing helps homeowners and contractors find local dumpster rental companies fast. Explore our directory of 4,000+ businesses across 500+ cities.',
  },
}

const STEPS = [
  {
    icon: Search,
    step: '1',
    title: 'Search Your City',
    description:
      'Enter your city or browse our directory of 500+ cities across the United States to find dumpster rental companies near you.',
  },
  {
    icon: BarChart2,
    step: '2',
    title: 'Compare Companies',
    description:
      'View business details, ratings, phone numbers, and websites for every local company — all in one place, no bouncing between tabs.',
  },
  {
    icon: MessageSquare,
    step: '3',
    title: 'Get Quotes',
    description:
      'Submit a quick lead form or call directly. Local companies compete for your business, so you get fair pricing fast.',
  },
]

const STATS = [
  { value: '4,000+', label: 'Businesses Listed' },
  { value: '500+', label: 'Cities Covered' },
  { value: '100%', label: 'Free for Renters' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-green-50 border border-green-200 px-4 py-1.5 text-sm font-medium text-green-700 mb-5">
            <MapPin className="h-4 w-4" />
            About Us
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            The Dumpster Rental Directory<br className="hidden sm:block" /> Built for Real People
          </h1>
          <p className="mt-5 text-lg text-gray-600 leading-relaxed max-w-2xl">
            DumpsterListing helps homeowners and contractors find trusted local dumpster rental companies
            fast — without the runaround. We built the directory we always wished existed.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* Mission */}
        <section>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Finding a dumpster rental company used to mean hours of searching, calling numbers that don't
            work, and getting wildly inconsistent quotes. We wanted to fix that.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our mission is simple: make it easy for anyone — homeowners cleaning out a garage, contractors
            managing a job site, or property managers handling renovations — to find a reliable local dumpster
            rental company in minutes, not hours.
          </p>
        </section>

        {/* Stats */}
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-gray-200 bg-white p-8 text-center shadow-sm"
              >
                <div className="text-4xl font-extrabold text-green-600 mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* What We Do */}
        <section>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-4">What We Do</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            DumpsterListing is a free online directory of dumpster rental companies across the United
            States. We research and index businesses in over 500 cities so that when you need a dumpster,
            you can find every option in your area on a single page.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Each listing includes key details like phone number, website, star rating, and location — giving
            you everything you need to make a confident choice without endless Googling. The service is
            completely free for anyone looking to rent a dumpster.
          </p>
        </section>

        {/* How It Works */}
        <section>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-8">How It Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {STEPS.map((step) => {
              const Icon = step.icon
              return (
                <div key={step.step} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="rounded-lg bg-green-100 p-2">
                      <Icon className="h-5 w-5 text-green-600" />
                    </div>
                    <span className="text-xs font-bold text-green-700 uppercase tracking-widest">
                      Step {step.step}
                    </span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              )
            })}
          </div>
        </section>

        {/* Why We Built It */}
        <section>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Why We Built DumpsterListing</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We noticed that searching for "dumpster rental near me" returns a chaotic mix of ads, generic
            directories, and outdated listings. Local service discovery in the dumpster rental space was
            broken — and small, legitimate businesses were hard to find because they couldn't compete with
            large national chains on ad spend.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We set out to build a clean, focused, trustworthy directory specifically for this industry.
            One place where a homeowner in any city can quickly see their real options, compare companies,
            and reach out — and where local businesses get a fair shot at being discovered.
          </p>
        </section>

        {/* Team */}
        <section>
          <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-4">The Team</h2>
            <p className="text-gray-600 leading-relaxed">
              DumpsterListing is built by a small team passionate about making local service discovery easier.
              We believe that finding a reliable local business should be simple, transparent, and fast —
              and we're committed to continuously improving the directory to deliver exactly that.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-2xl bg-gradient-to-r from-green-600 to-green-700 px-8 py-12 text-center text-white shadow-lg">
          <h2 className="text-2xl font-extrabold mb-3">Ready to Find a Dumpster?</h2>
          <p className="text-green-100 mb-8 max-w-xl mx-auto">
            Browse our directory and get connected with local dumpster rental companies in your city today.
            It's completely free.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/dumpster-rental"
              className="rounded-xl bg-white px-8 py-3.5 text-base font-bold text-green-700 hover:bg-green-50 transition shadow"
            >
              Find Your City
            </a>
            <a
              href="/list-your-business"
              className="inline-flex items-center gap-2 rounded-xl border border-green-400 px-8 py-3.5 text-base font-semibold text-white hover:bg-green-500 transition"
            >
              <Building2 className="h-4 w-4" />
              List Your Business
            </a>
          </div>
        </section>

      </div>
    </>
  )
}
