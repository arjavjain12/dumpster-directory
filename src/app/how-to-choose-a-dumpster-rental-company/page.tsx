import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  CheckCircle,
  Shield,
  DollarSign,
  Star,
  Clock,
  Scale,
  FileText,
  Phone,
  AlertTriangle,
} from 'lucide-react'
import Breadcrumbs from '@/components/Breadcrumbs'
import AuthorByline from '@/components/AuthorByline'

export const metadata: Metadata = {
  title: 'How to Choose a Dumpster Rental Company: 8 Things to Check',
  description:
    'Choosing the wrong dumpster company costs you time and money. Here are the 8 things to verify before booking — licensing, insurance, pricing transparency, reviews, and more.',
  alternates: { canonical: '/how-to-choose-a-dumpster-rental-company' },
  openGraph: {
    title: 'How to Choose a Dumpster Rental Company: 8 Things to Check',
    description:
      'Choosing the wrong dumpster company costs you time and money. Here are the 8 things to verify before booking — licensing, insurance, pricing transparency, reviews, and more.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I know if a dumpster rental company is legitimate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A legitimate dumpster rental company will have a valid business license, carry general liability insurance (typically $1M+ coverage), and be willing to provide proof of both on request. Check for a physical business address, a working phone number answered by a real person, and reviews on Google, Yelp, or the BBB. Avoid companies that only accept cash, refuse to give a written quote, or have no verifiable online presence.',
      },
    },
    {
      '@type': 'Question',
      name: 'What hidden fees should I ask about before renting a dumpster?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most common hidden fees are: overage weight charges ($60–$100 per ton over the included allowance), extra rental day fees ($5–$15/day), fuel or environmental surcharges (flat fee or percentage added at checkout), prohibited item removal fees ($50–$150 if banned materials are found), and street permit fees ($20–$100 if the dumpster is placed on public property). Always ask for an all-inclusive quote that lists every potential charge.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many quotes should I get before renting a dumpster?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Get at least 3 quotes from different local companies. Prices for the same container size can vary by 20–30% within the same market. When comparing quotes, make sure each includes the same rental period, weight allowance, and delivery/pickup fees so you are comparing apples to apples. The cheapest quote is not always the best — factor in reviews, responsiveness, and fee transparency.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does the dumpster company need insurance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Any reputable dumpster rental company should carry general liability insurance to cover property damage during delivery and pickup — for example, if the truck damages your driveway, fence, or landscaping. Ask for a certificate of insurance before booking. If a company cannot or will not provide proof of coverage, that is a major red flag.',
      },
    },
  ],
}

const CHECKLIST_ITEMS = [
  {
    number: 1,
    title: 'Verify Licensing & Registration',
    icon: FileText,
    description:
      'Every dumpster rental company should hold a valid business license and any waste-hauling permits required by your state or municipality. In many states, haulers need a specific waste transporter registration to legally move debris to landfills.',
    tips: [
      'Ask for their business license number and verify it with your city or county clerk',
      'Check if your state requires a waste transporter permit (most do)',
      'Search the Better Business Bureau for complaints or unresolved issues',
    ],
  },
  {
    number: 2,
    title: 'Confirm Insurance Coverage',
    icon: Shield,
    description:
      'A reputable hauler carries general liability insurance — typically $1 million or more in coverage. This protects you if the delivery truck damages your driveway, fence, landscaping, or underground utilities during drop-off or pickup.',
    tips: [
      'Request a certificate of insurance (COI) before booking',
      'Verify coverage is current and not expired',
      'If placing the dumpster on your property, confirm their policy covers property damage',
    ],
  },
  {
    number: 3,
    title: 'Demand Transparent, All-In Pricing',
    icon: DollarSign,
    description:
      'The best companies give you a single, all-inclusive price that covers delivery, pickup, the rental period, a stated weight allowance, and disposal fees. Be wary of companies that quote an unusually low base price — they often make up the difference with add-on fees at checkout.',
    tips: [
      'Get the quote in writing — email or text, not just verbal',
      'Confirm what happens if you go over the weight limit (cost per ton)',
      'Ask about fuel surcharges, environmental fees, and permit costs',
      'Clarify the daily rate if you keep the dumpster past the rental period',
    ],
  },
  {
    number: 4,
    title: 'Read Reviews and Check Reputation',
    icon: Star,
    description:
      'Online reviews are the fastest way to identify reliable haulers and avoid bad ones. Look for patterns — one negative review is normal, but repeated complaints about hidden fees, late pickups, or poor communication are deal-breakers.',
    tips: [
      'Check Google Reviews, Yelp, and BBB — aim for 4+ stars with 20+ reviews',
      'Pay attention to how the company responds to negative reviews',
      'Ask neighbors or contractors for referrals — word of mouth is still the best filter',
    ],
  },
  {
    number: 5,
    title: 'Ask About Hidden Fees Upfront',
    icon: AlertTriangle,
    description:
      'Hidden fees are the number one source of complaints in the dumpster rental industry. Overage weight charges, extra-day fees, prohibited item surcharges, and fuel add-ons can increase your final bill by 30–50% beyond the quoted price if you are not prepared.',
    tips: [
      'Specifically ask: "Is this the total price, or are there additional fees?"',
      'Get a list of prohibited items so you avoid contamination charges',
      'Confirm whether the quoted weight allowance is realistic for your project type',
    ],
  },
  {
    number: 6,
    title: 'Confirm Delivery & Pickup Timelines',
    icon: Clock,
    description:
      'Delivery speed and pickup reliability vary widely between companies. The best haulers offer next-day delivery and pick up within 24 hours of your call. Delays cost you time and can trigger extra-day rental fees.',
    tips: [
      'Ask: "When is the earliest you can deliver?" — next-day is standard in most markets',
      'Confirm how pickup works: do you call when ready, or is it auto-scheduled?',
      'Check if the company offers same-day service for urgent projects',
    ],
  },
  {
    number: 7,
    title: 'Understand Weight Limits & Overage Charges',
    icon: Scale,
    description:
      'Every dumpster rental includes a base weight allowance — typically 1–2 tons for smaller containers and 2–4 tons for larger ones. Going over that limit triggers per-ton overage charges that range from $60 to $100+ per ton, which can significantly inflate your bill.',
    tips: [
      'Ask the hauler what weight allowance is included with your container size',
      'Estimate your debris weight using our weight calculator — heavy materials like concrete, dirt, and roofing shingles add up fast',
      'If your project involves heavy materials, ask about a flat-rate heavy debris container',
    ],
  },
  {
    number: 8,
    title: 'Evaluate Customer Service & Communication',
    icon: Phone,
    description:
      'How a company treats you before the sale is a strong indicator of how they will handle problems after. Test their responsiveness by calling during business hours and noting how quickly and helpfully they respond.',
    tips: [
      'Call the company — a real person should answer or call back within an hour',
      'Ask a specific question about your project and see if they give a helpful, honest answer',
      'Avoid companies that pressure you to book immediately or refuse to answer fee questions',
    ],
  },
]

export default function HowToChooseDumpsterCompanyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs
            crumbs={[
              { label: 'Home', href: '/' },
              { label: 'How to Choose a Dumpster Rental Company' },
            ]}
          />
          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900">
            How to Choose a Dumpster Rental Company: 8 Things to Check
          </h1>
          <p className="mt-3 max-w-3xl text-gray-600 leading-relaxed">
            Not all dumpster rental companies are created equal. The difference between a good hauler
            and a bad one can mean{' '}
            <strong className="text-gray-900">$100–$300 in surprise fees</strong>, a dumpster that
            shows up late, or a company that stops answering the phone after they have your money.
            Use this 8-point checklist to vet any company before you book.
          </p>
          <AuthorByline updatedDate="March 2026" readTimeMin={6} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-14">

        {/* Quick Checklist Summary */}
        <section className="rounded-xl border border-green-200 bg-green-50 p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-3">Quick Checklist</h2>
          <p className="text-sm text-gray-600 mb-4">
            Before booking with any dumpster rental company, verify all eight of these items:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {CHECKLIST_ITEMS.map((item) => (
              <div key={item.number} className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 shrink-0" />
                <span className="text-sm text-gray-700">{item.title}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Detailed Checklist Items */}
        {CHECKLIST_ITEMS.map((item) => {
          const Icon = item.icon
          return (
            <section key={item.number}>
              <div className="flex items-start gap-4 mb-4">
                <div className="h-10 w-10 rounded-full bg-green-700 flex items-center justify-center shrink-0">
                  <span className="text-white font-bold text-sm">{item.number}</span>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                    <Icon className="h-5 w-5 text-green-700" />
                    {item.title}
                  </h2>
                  <p className="mt-2 text-gray-600 leading-relaxed max-w-2xl">
                    {item.description}
                  </p>
                </div>
              </div>
              <div className="ml-14 space-y-2">
                {item.tips.map((tip) => (
                  <div
                    key={tip}
                    className="flex gap-3 rounded-lg border border-gray-200 bg-white p-3 hover:border-green-200 transition-colors"
                  >
                    <CheckCircle className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-700 leading-relaxed">{tip}</p>
                  </div>
                ))}
              </div>
            </section>
          )
        })}

        {/* Red Flags */}
        <section className="rounded-xl border border-red-200 bg-red-50 p-7">
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="h-6 w-6 text-red-500 shrink-0" />
            <h2 className="text-2xl font-bold text-gray-900">Red Flags to Avoid</h2>
          </div>
          <p className="text-gray-600 mb-5 max-w-2xl">
            If you encounter any of these warning signs, move on to the next company on your list.
          </p>
          <div className="space-y-2">
            {[
              'No physical business address or verifiable phone number',
              'Refuses to provide a written quote or certificate of insurance',
              'Unusually low price with vague terms — hidden fees almost certainly follow',
              'Demands full payment upfront with no refund policy',
              'No online reviews, or a pattern of complaints about surprise charges',
              'Pressures you to book immediately without answering your questions',
            ].map((flag) => (
              <div key={flag} className="flex gap-3 items-start">
                <div className="h-2 w-2 rounded-full bg-red-400 shrink-0 mt-2" />
                <p className="text-sm text-gray-700">{flag}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Internal Links */}
        <section className="rounded-xl border border-gray-100 bg-gray-50 p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Related Guides & Tools</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: 'How Much Does Dumpster Rental Cost?', href: '/how-much-does-dumpster-rental-cost', desc: 'National pricing data by size and region' },
              { label: 'Dumpster Rental Checklist', href: '/dumpster-rental-checklist', desc: 'Pre-rental, during, and pickup checklist' },
              { label: 'Cheap Dumpster Rental Guide', href: '/cheap-dumpster-rental', desc: 'Strategies to get the lowest price' },
              { label: 'Dumpster Rental Permit Guide', href: '/dumpster-rental-permit', desc: 'Find out if your city requires a permit' },
              { label: 'Find Local Companies', href: '/dumpster-rental-near-me', desc: 'Compare haulers in your area' },
              { label: 'Dumpster Rental Industry Statistics', href: '/dumpster-rental-statistics', desc: 'Market size, trends, and key data' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-3 hover:border-green-300 transition group"
              >
                <ArrowRight className="h-4 w-4 text-green-500 shrink-0 mt-0.5 group-hover:translate-x-0.5 transition-transform" />
                <div>
                  <div className="text-sm font-semibold text-gray-900">{link.label}</div>
                  <div className="text-xs text-gray-500">{link.desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-5">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqSchema.mainEntity.map((faq) => (
              <div key={faq.name} className="rounded-xl border border-gray-200 bg-white p-6">
                <h3 className="font-semibold text-gray-900 mb-2 text-base">{faq.name}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-xl border border-green-200 bg-green-50 p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Ready to Find a Reliable Dumpster Company?
          </h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Browse verified dumpster rental companies near you. Compare reviews, pricing, and
            availability — then book with confidence.
          </p>
          <Link
            href="/dumpster-rental-near-me"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-700 px-7 py-3.5 font-bold text-white hover:bg-green-800 transition"
          >
            Find Local Companies <ArrowRight className="h-5 w-5" />
          </Link>
        </section>

      </div>
    </>
  )
}
