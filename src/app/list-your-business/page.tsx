import type { Metadata } from 'next'
import { Building2, CheckCircle, Star, Phone, Globe, Shield, TrendingUp, Users } from 'lucide-react'
import ListingForm from './ListingForm'

export const metadata: Metadata = {
  title: 'List Your Business | DumpsterListing',
  description:
    'Get your dumpster rental company listed on DumpsterListing and reach customers actively searching for dumpster rental in your city. Free listing available.',
  alternates: { canonical: '/list-your-business' },
  openGraph: {
    title: 'List Your Dumpster Business on DumpsterListing',
    description:
      'Reach customers searching for dumpster rental in your area. Free listing with options to upgrade for more visibility.',
  },
}

const PLANS = [
  {
    name: 'Free Listing',
    price: '$0',
    period: '/mo',
    badge: null,
    badgeColor: null,
    borderClass: 'border-gray-200',
    headerClass: 'bg-gray-50',
    features: [
      'Business name & address',
      'Phone number displayed',
      'Website link',
      'Star rating & reviews',
      'Listed in city directory',
    ],
    cta: 'Get Free Listing',
    ctaClass: 'border border-green-600 text-green-600 hover:bg-green-50',
    featured: false,
  },
  {
    name: 'Basic / Verified',
    price: '$29',
    period: '/mo',
    badge: 'Verified',
    badgeColor: 'bg-blue-100 text-blue-700',
    borderClass: 'border-blue-200',
    headerClass: 'bg-blue-50',
    features: [
      'Everything in Free',
      'Verified badge on listing',
      'Priority placement in city listings',
      'Clickable link to your website',
      'Higher customer trust signals',
    ],
    cta: 'Get Verified',
    ctaClass: 'bg-blue-600 text-white hover:bg-blue-700',
    featured: false,
  },
  {
    name: 'Premium / Featured',
    price: '$79',
    period: '/mo',
    badge: 'Featured',
    badgeColor: 'bg-green-100 text-green-700',
    borderClass: 'border-green-400',
    headerClass: 'bg-green-50',
    features: [
      'Everything in Verified',
      'Featured badge on listing',
      'Top of city listings (above all others)',
      'Green border highlight for visibility',
      'Phone call-to-action button',
      'Maximum leads & exposure',
    ],
    cta: 'Go Premium',
    ctaClass: 'bg-green-600 text-white hover:bg-green-700',
    featured: true,
  },
]

const BENEFITS = [
  {
    icon: Users,
    title: 'Customers Already Searching',
    description:
      'DumpsterListing attracts people actively looking to rent a dumpster — high-intent visitors ready to book. You skip the cold outreach entirely.',
  },
  {
    icon: TrendingUp,
    title: 'Free to Start, Easy to Upgrade',
    description:
      'Get a no-cost basic listing with zero risk. Upgrade to Verified or Featured only when you want more leads and visibility.',
  },
  {
    icon: Shield,
    title: 'Verified Badge Builds Trust',
    description:
      'A Verified badge signals legitimacy to potential customers and sets you apart from unverified competitors in the same city.',
  },
  {
    icon: Star,
    title: 'Ratings & Reviews Displayed',
    description:
      'Your star rating and review count are shown right on your listing, helping customers choose you over businesses with no social proof.',
  },
  {
    icon: Globe,
    title: 'Direct Link to Your Website',
    description:
      'Basic and Premium listings include a clickable link to your site so customers can learn more about your services before calling.',
  },
]

const FAQS = [
  {
    q: 'How long does it take to get my business listed?',
    a: 'After you submit the form, our team reviews your information and typically gets your listing live within 1–2 business days. Premium listings are prioritized and often go live within 24 hours.',
  },
  {
    q: 'Is there a contract or long-term commitment?',
    a: 'No. Free listings are permanent at no cost. Basic and Premium plans are billed monthly and can be cancelled at any time — no long-term contracts, no cancellation fees.',
  },
  {
    q: 'What information do I need to provide for my listing?',
    a: 'For a free listing you need your business name, address, phone number, and website. Verified and Premium upgrades may require us to confirm your business details for the badge.',
  },
  {
    q: 'Can I upgrade or downgrade my plan later?',
    a: 'Absolutely. You can upgrade from Free to Basic or Premium at any time, and downgrade back to Free whenever you like. Changes take effect at the start of your next billing cycle.',
  },
]

export default function ListYourBusinessPage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-green-50 border border-green-200 px-4 py-1.5 text-sm font-medium text-green-700 mb-5">
            <Building2 className="h-4 w-4" />
            For Dumpster Rental Companies
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            Get Your Dumpster Business Listed<br className="hidden sm:block" /> on DumpsterListing
          </h1>
          <p className="mt-5 mx-auto max-w-2xl text-lg text-gray-600 leading-relaxed">
            Reach customers actively searching for dumpster rental in your city. Start with a free listing
            and upgrade when you want more visibility and leads.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#get-listed"
              className="rounded-xl bg-green-600 px-8 py-3.5 text-base font-bold text-white shadow-md hover:bg-green-700 transition"
            >
              Get Listed Free
            </a>
            <a
              href="#pricing"
              className="rounded-xl border border-gray-300 px-8 py-3.5 text-base font-semibold text-gray-700 hover:border-gray-400 hover:bg-gray-50 transition"
            >
              View Pricing Plans
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-20">

        {/* Pricing Tiers */}
        <section id="pricing">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900">Simple, Transparent Pricing</h2>
            <p className="mt-3 text-gray-600 max-w-xl mx-auto">
              No hidden fees. Start free and upgrade only when you need more leads.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PLANS.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-xl border-2 bg-white overflow-hidden flex flex-col ${plan.borderClass} ${
                  plan.featured ? 'shadow-xl' : 'shadow-sm'
                }`}
              >
                {plan.featured && (
                  <div className="bg-green-600 text-white text-xs font-bold text-center py-1.5 tracking-wide uppercase">
                    Most Popular
                  </div>
                )}
                <div className={`px-6 py-6 border-b border-gray-100 ${plan.headerClass}`}>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-gray-900">{plan.name}</h3>
                    {plan.badge && (
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${plan.badgeColor}`}>
                        {plan.badge}
                      </span>
                    )}
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                    <span className="text-gray-500 text-sm">{plan.period}</span>
                  </div>
                </div>

                <ul className="px-6 py-5 space-y-3 flex-1">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5">
                      <CheckCircle className="h-4.5 w-4.5 text-green-600 shrink-0 mt-0.5 h-5 w-5" />
                      <span className="text-sm text-gray-700">{feat}</span>
                    </li>
                  ))}
                </ul>

                <div className="px-6 pb-6">
                  <a
                    href="#get-listed"
                    className={`block w-full rounded-lg py-3 text-center text-sm font-bold transition ${plan.ctaClass}`}
                  >
                    {plan.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900">Why List on DumpsterListing?</h2>
            <p className="mt-3 text-gray-600 max-w-xl mx-auto">
              We built DumpsterListing specifically for people searching to rent a dumpster — meaning every
              visitor is a potential customer for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {BENEFITS.map((b) => {
              const Icon = b.icon
              return (
                <div key={b.title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="rounded-lg bg-green-100 p-2">
                      <Icon className="h-5 w-5 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900">{b.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{b.description}</p>
                </div>
              )
            })}

            {/* Stats card */}
            <div className="rounded-xl border border-green-200 bg-green-50 p-6 shadow-sm flex flex-col justify-center">
              <div className="space-y-4">
                {[
                  { stat: 'Free', label: 'to get started' },
                  { stat: '1–2 days', label: 'to go live' },
                  { stat: 'No contract', label: 'cancel anytime' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 shrink-0" />
                    <div>
                      <span className="font-bold text-gray-900">{item.stat}</span>{' '}
                      <span className="text-sm text-gray-600">{item.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Listing Form */}
        <section id="get-listed">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900">Submit Your Listing Request</h2>
            <p className="mt-3 text-gray-600 max-w-xl mx-auto">
              Fill out the form below and our team will get your business listed within 1–2 business days.
            </p>
          </div>
          <ListingForm />
        </section>

        {/* FAQ */}
        <section>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900">Frequently Asked Questions</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {FAQS.map((faq) => (
              <div key={faq.q} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA strip */}
        <section className="rounded-2xl bg-gradient-to-r from-green-600 to-green-700 px-8 py-12 text-center text-white shadow-lg">
          <Building2 className="mx-auto mb-4 h-10 w-10 text-green-200" />
          <h2 className="text-3xl font-extrabold mb-3">Ready to Grow Your Business?</h2>
          <p className="mx-auto mb-8 max-w-xl text-green-100 text-lg">
            Join dumpster rental companies already listed on DumpsterListing. It takes less than 2 minutes
            to submit your information.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#get-listed"
              className="rounded-xl bg-white px-8 py-3.5 text-base font-bold text-green-700 hover:bg-green-50 transition shadow"
            >
              Get Listed Free
            </a>
            <a
              href="tel:+18005550000"
              className="inline-flex items-center gap-2 rounded-xl border border-green-400 px-8 py-3.5 text-base font-semibold text-white hover:bg-green-500 transition"
            >
              <Phone className="h-4 w-4" />
              Call Us: 1-800-555-0000
            </a>
          </div>
        </section>

      </div>
    </>
  )
}
