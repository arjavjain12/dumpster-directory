import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, ArrowRight, CheckCircle, Star, Shield, Clock, DollarSign, Phone, Search, Truck, Package } from 'lucide-react'
import LeadForm from '@/components/LeadForm'
import Breadcrumbs from '@/components/Breadcrumbs'
import { getPopularCities } from '@/lib/supabase'

export const metadata: Metadata = {
  title: 'Dumpster Rental Near Me | Find Local Companies',
  description:
    'Find dumpster rental near you. Compare local companies, get free quotes, and book roll-off dumpster delivery in your area.',
  alternates: { canonical: '/dumpster-rental-near-me' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I find dumpster rental near me?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Search for local dumpster rental companies by entering your city or zip code. Compare prices from at least 3 local providers — rates vary 20–30% between companies in the same area. DumpsterListing lets you browse companies by city and get free quotes.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does local dumpster rental cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Local dumpster rental typically costs $275–$750 depending on size. A 10-yard dumpster averages $275–$450, a 20-yard averages $375–$575, and a 40-yard averages $475–$750. Prices vary by city due to local landfill fees and competition.',
      },
    },
    {
      '@type': 'Question',
      name: 'How quickly can I get a dumpster delivered?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most local dumpster rental companies offer next-day delivery if you book before noon. Same-day delivery is available with some providers for an additional $25–$75 rush fee. Booking 2–3 days ahead guarantees better availability and pricing.',
      },
    },
    {
      '@type': 'Question',
      name: "What's the difference between national and local dumpster companies?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'National chains like Waste Management, Republic Services, and Waste Connections offer consistent pricing and large fleets but may cost more than local operators. Local companies often have lower overhead, more flexible terms, and personalized service — but availability varies by region.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I know if a company is reputable?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Check Google reviews (aim for 4.0+), verify they\'re licensed in your state, and confirm they carry liability insurance. Ask if they handle permits for street placement.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I change my pickup date?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most companies allow extensions for a daily fee ($5–$15/day). Contact them at least 24 hours before your scheduled pickup.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Dumpster Rental Near Me — Find Local Companies',
  description: 'Find dumpster rental companies near you. Compare local prices and get free quotes.',
  datePublished: '2026-02-24',
  dateModified: '2026-02-24',
  author: { '@type': 'Organization', name: 'DumpsterListing', url: 'https://dumpsterlisting.com' },
  publisher: { '@type': 'Organization', name: 'DumpsterListing', url: 'https://dumpsterlisting.com' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://dumpsterlisting.com/dumpster-rental-near-me' },
}

export default async function NearMePage() {
  const cities = await getPopularCities(20)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

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

      {/* How It Works */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">How It Works</h2>
        <p className="text-gray-500 text-sm mb-6">From search to pickup — here&apos;s the full process in four steps.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              icon: <Search className="h-6 w-6 text-green-600" />,
              step: 1,
              title: 'Find local companies',
              body: 'Enter your city or zip code to see dumpster rental companies near you. Compare prices, sizes, and availability.',
            },
            {
              icon: <Package className="h-6 w-6 text-green-600" />,
              step: 2,
              title: 'Choose your size',
              body: 'Select from 10, 20, 30, or 40-yard roll-offs based on your project. Not sure? Use our size estimator.',
            },
            {
              icon: <Truck className="h-6 w-6 text-green-600" />,
              step: 3,
              title: 'Schedule delivery',
              body: 'Most companies deliver within 24–72 hours. Same-day delivery available in many areas.',
            },
            {
              icon: <CheckCircle className="h-6 w-6 text-green-600" />,
              step: 4,
              title: 'Fill & schedule pickup',
              body: 'Fill at your own pace during your rental period (typically 7–14 days), then call or book online for pickup.',
            },
          ].map((card) => (
            <div key={card.step} className="rounded-xl border border-gray-200 bg-white p-5 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-green-600 text-white text-sm font-bold flex items-center justify-center shrink-0">
                  {card.step}
                </div>
                <div className="h-10 w-10 rounded-lg bg-green-50 flex items-center justify-center shrink-0">
                  {card.icon}
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">{card.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{card.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* What Space Do You Need for Delivery? */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">What Space Do You Need for Delivery?</h2>
        <p className="text-gray-500 text-sm mb-5">Before you order, confirm your drop zone meets these basic requirements.</p>
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-6">
          <ul className="space-y-3">
            {[
              { label: 'Flat, paved surface preferred', detail: 'Driveway or parking area works best; gravel is OK with plywood protection under the dumpster.' },
              { label: '3 feet of clearance on each side', detail: 'The truck needs room to maneuver and the driver needs clearance to position the container.' },
              { label: '22 feet of vertical clearance', detail: 'Check for overhead power lines, tree branches, and garage overhangs before scheduling delivery.' },
              { label: '34 feet of unobstructed space in front', detail: 'The roll-off truck needs a straight run to back in and drop the container safely.' },
              { label: 'No parking on steep slopes', detail: 'The dumpster must sit level to load safely and to avoid shifting during transport.' },
            ].map((item) => (
              <li key={item.label} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-gray-900">{item.label}</span>
                  <span className="text-gray-600"> — {item.detail}</span>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm text-gray-600 border-t border-amber-200 pt-4">
            No driveway? Street placement is possible in most cities but requires a permit.{' '}
            <Link href="/dumpster-rental-permit" className="text-green-700 font-medium hover:underline">
              See our dumpster rental permit guide
            </Link>.
          </p>
        </div>
      </div>

      {/* What Size Do You Need? */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">What Size Do You Need?</h2>
        <p className="text-gray-500 text-sm mb-5">Quick reference — match your project to the right container size.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              size: '10-yard',
              emoji: '🏠',
              uses: 'Single room cleanout, small bathroom remodel',
              weight: '1–2 tons of debris',
              popular: false,
            },
            {
              size: '20-yard',
              emoji: '🔨',
              uses: 'Full home renovation, roofing project, garage cleanout',
              weight: 'Most popular',
              popular: true,
            },
            {
              size: '30-yard',
              emoji: '🏗️',
              uses: 'Large construction project, whole-home cleanout, major remodel',
              weight: '3–5 tons of debris',
              popular: false,
            },
            {
              size: '40-yard',
              emoji: '🏢',
              uses: 'Commercial demolition, new construction, large estate cleanout',
              weight: '5–8 tons of debris',
              popular: false,
            },
          ].map((card) => (
            <div
              key={card.size}
              className={`rounded-xl border p-5 flex flex-col gap-2 ${card.popular ? 'border-green-300 bg-green-50' : 'border-gray-200 bg-white'}`}
            >
              <div className="text-2xl">{card.emoji}</div>
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-gray-900">{card.size}</span>
                {card.popular && (
                  <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-semibold text-green-700">Most Popular</span>
                )}
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">{card.uses}</p>
              <p className="text-xs text-gray-500">{card.weight}</p>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <Link href="/roll-off-dumpster-sizes" className="inline-flex items-center gap-1 text-sm font-medium text-green-600 hover:text-green-700">
            See full size guide <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Typical Rental Periods & Costs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Typical Rental Periods &amp; Costs</h2>
        <p className="text-gray-500 text-sm mb-5">What to expect before you get a quote.</p>
        <div className="rounded-xl border border-gray-200 bg-white p-6">
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { term: 'Standard rental period', detail: '7–14 days (most companies)' },
              { term: 'Average cost', detail: '$275–$750 depending on size and location' },
              { term: 'Extensions', detail: '$5–$15/day beyond standard period' },
              { term: 'Same-day delivery', detail: 'Available in most metro areas (may include rush surcharge of $25–$75)' },
            ].map((item) => (
              <div key={item.term} className="flex flex-col gap-1">
                <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500">{item.term}</dt>
                <dd className="text-base font-semibold text-gray-900">{item.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Related guides */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Helpful Resources</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            { label: 'Dumpster Size Guide', href: '/dumpster-sizes' },
            { label: 'How Much Does Dumpster Rental Cost?', href: '/dumpster-rental-cost' },
            { label: 'Weight Limit Calculator', href: '/dumpster-weight-limit-calculator' },
            { label: 'Do You Need a Permit?', href: '/dumpster-rental-permit' },
            { label: 'How Long Can You Keep a Dumpster?', href: '/how-long-can-you-keep-a-rental-dumpster' },
            { label: 'What Can You Put in a Dumpster?', href: '/what-can-you-put-in-a-dumpster' },
          ].map((link) => (
            <Link key={link.href} href={link.href}
              className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-700 hover:text-green-600 hover:border-green-200 transition">
              <ArrowRight className="h-3.5 w-3.5 text-gray-400 shrink-0" />
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* How to Evaluate a Local Dumpster Rental Company */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">How to Evaluate a Local Dumpster Rental Company</h2>
        <p className="text-gray-500 text-sm mb-6">Use these six criteria before you book to avoid surprises on your bill.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            {
              icon: <Star className="h-6 w-6 text-green-600" />,
              title: 'Check Reviews',
              body: 'Look for Google/BBB ratings. National chains like Waste Management and Republic Services have consistent service; local operators often offer better pricing but vary in reliability.',
            },
            {
              icon: <DollarSign className="h-6 w-6 text-green-600" />,
              title: 'Verify Included Weight',
              body: 'Always ask what\'s included in the base price. Standard is 1–2 tons; overages average $75–$120/ton.',
            },
            {
              icon: <Clock className="h-6 w-6 text-green-600" />,
              title: 'Confirm Delivery Windows',
              body: 'Most companies offer morning (7–11am) or afternoon (12–4pm) windows. Ask if same-day is available.',
            },
            {
              icon: <Shield className="h-6 w-6 text-green-600" />,
              title: 'Ask About Prohibited Items',
              body: 'Policies vary. A good company proactively tells you what they won\'t take.',
            },
            {
              icon: <CheckCircle className="h-6 w-6 text-green-600" />,
              title: 'Get the Total Price in Writing',
              body: 'Quotes should include delivery, pickup, weight allowance, rental period, and overage rates.',
            },
            {
              icon: <Phone className="h-6 w-6 text-green-600" />,
              title: 'Check Their Service Area',
              body: 'Local operators may have tighter service radii (15–20 miles). National chains (Waste Connections, Clean Harbors) cover more ground.',
            },
          ].map((card) => (
            <div key={card.title} className="rounded-xl border border-gray-200 bg-white p-5 flex flex-col gap-3">
              <div className="h-10 w-10 rounded-lg bg-green-50 flex items-center justify-center shrink-0">
                {card.icon}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">{card.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{card.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* What to Expect on Delivery Day */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">What to Expect on Delivery Day</h2>
        <p className="text-gray-500 text-sm mb-6">Most deliveries are quick and straightforward — here's how the day typically goes.</p>
        <div className="rounded-xl border border-gray-200 bg-white p-6">
          <ol className="space-y-5">
            {[
              "You'll receive a call 30–60 minutes before delivery.",
              "Driver places dumpster on a flat, accessible surface (driveway preferred — no overhead wires).",
              "Fill at your own pace during your rental period (standard 7–14 days).",
              "Call or schedule online for pickup; most companies retrieve within 24–48 hours.",
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-4">
                <div className="h-8 w-8 rounded-full bg-green-600 text-white text-sm font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {i + 1}
                </div>
                <p className="text-gray-700 leading-relaxed pt-1">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-5">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqSchema.mainEntity.map((faq) => (
            <div key={faq.name} className="rounded-xl border border-gray-200 bg-white p-5">
              <h3 className="font-semibold text-gray-900 mb-2">{faq.name}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{faq.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>
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
