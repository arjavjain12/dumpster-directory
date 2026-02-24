import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, ArrowRight, CheckCircle, Star, Shield, Clock, DollarSign, Phone } from 'lucide-react'
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
