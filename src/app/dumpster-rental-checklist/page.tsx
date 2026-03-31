import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  CheckCircle,
  Ruler,
  FileCheck,
  Trash2,
  Phone,
  Truck,
  ClipboardList,
} from 'lucide-react'
import Breadcrumbs from '@/components/Breadcrumbs'
import AuthorByline from '@/components/AuthorByline'

export const metadata: Metadata = {
  title: 'Dumpster Rental Checklist: Everything You Need Before You Book',
  description:
    'A step-by-step dumpster rental checklist covering what to do before booking, during your rental period, and when scheduling pickup. Avoid common mistakes and hidden fees.',
  alternates: { canonical: '/dumpster-rental-checklist' },
  openGraph: {
    title: 'Dumpster Rental Checklist: Everything You Need Before You Book',
    description:
      'A step-by-step dumpster rental checklist covering what to do before booking, during your rental period, and when scheduling pickup. Avoid common mistakes and hidden fees.',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Dumpster Rental Checklist: Everything You Need Before You Book',
  description: 'A step-by-step dumpster rental checklist covering what to do before booking, during your rental period, and when scheduling pickup.',
  datePublished: '2026-02-15',
  dateModified: '2026-03-01',
  author: { '@type': 'Organization', name: 'DumpsterListing', url: 'https://dumpsterlisting.com' },
  publisher: { '@type': 'Organization', name: 'DumpsterListing', url: 'https://dumpsterlisting.com' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://dumpsterlisting.com/dumpster-rental-checklist' },
}

const PRE_RENTAL_ITEMS = [
  {
    title: 'Measure Your Placement Area',
    icon: Ruler,
    detail:
      'A standard 20-yard dumpster is roughly 22 feet long, 8 feet wide, and 4.5 feet tall. Measure your driveway or intended placement spot to confirm the container will fit with at least 2 feet of clearance on each side. Check overhead clearance too — the delivery truck needs about 23 feet of vertical space for the roll-off arm.',
    action: 'Measure length, width, and overhead clearance of your placement spot',
  },
  {
    title: 'Check If You Need a Permit',
    icon: FileCheck,
    detail:
      'If the dumpster will sit on a public street, sidewalk, or right-of-way, most cities require a placement permit. Permits typically cost $20–$100 and take 1–5 business days to process. If you can place the dumpster entirely on your private driveway or property, you usually do not need one — but check your HOA rules if applicable.',
    action: 'Call your city public works department or check their website for permit requirements',
  },
  {
    title: 'Know Your Debris Type',
    icon: Trash2,
    detail:
      'Different materials have different weight profiles and disposal rules. General household junk and construction debris are accepted by virtually all haulers. Heavy materials like concrete, brick, and dirt may require a dedicated heavy-debris container or incur weight surcharges. Hazardous materials (paint, chemicals, asbestos, propane tanks) are prohibited in all roll-off dumpsters.',
    action: 'List everything you plan to throw away and confirm the hauler accepts all of it',
  },
  {
    title: 'Compare at Least 3 Quotes',
    icon: Phone,
    detail:
      'Prices for the same dumpster size can vary 20–30% between companies in the same market. When comparing quotes, ensure each includes the same rental period, weight allowance, and delivery/pickup fees. The cheapest option is not always the best — also weigh reviews, responsiveness, and fee transparency.',
    action: 'Call or request online quotes from 3+ local haulers before committing',
  },
  {
    title: 'Choose the Right Size',
    icon: Truck,
    detail:
      'The most common mistake renters make is ordering a container that is too small, then paying for a second rental trip. A 10-yard dumpster handles a single-room cleanout. A 20-yard covers most home renovations and large cleanouts. A 30-yard or 40-yard is for construction, roofing, or commercial projects. When in doubt, size up — the incremental cost of a larger container is almost always less than renting twice.',
    action: 'Use a size estimator tool or ask the hauler to recommend a size based on your project',
  },
  {
    title: 'Confirm All Costs in Writing',
    icon: ClipboardList,
    detail:
      'Before booking, get a written quote that includes: base rental price, included rental period (days), weight allowance (tons), delivery and pickup fees, disposal fees, and any surcharges. Ask specifically about overage weight charges, extra-day fees, and prohibited item fees. A reputable company will have no problem putting everything on paper.',
    action: 'Request an itemized written quote via email or text',
  },
]

const DURING_RENTAL_ITEMS = [
  {
    title: 'Load Efficiently — Fill It Evenly',
    detail:
      'Distribute weight evenly across the container. Break down large items (furniture frames, cabinets, pallets) to maximize space. Load heavy items on the bottom and lighter materials on top. An evenly loaded dumpster holds more and is safer for the hauler to transport.',
  },
  {
    title: 'Do Not Exceed the Fill Line',
    detail:
      'Every dumpster has a fill line — typically the top edge of the container walls. Nothing should stick above this line. Overfilled containers cannot be legally transported on public roads, and haulers will charge an additional fee to remove excess material or require a second trip.',
  },
  {
    title: 'Keep Prohibited Items Out',
    detail:
      'Hazardous waste (paint, chemicals, solvents, propane, batteries, asbestos), tires, and appliances containing Freon are banned from roll-off dumpsters. Contamination charges range from $50 to $150+. If you are unsure about a specific item, call your hauler before putting it in the bin.',
  },
  {
    title: 'Protect Your Driveway',
    detail:
      'A loaded dumpster can weigh several tons. Place plywood boards under the container to distribute weight and prevent cracking or scuffing on asphalt and concrete driveways. This is especially important for newer driveways or during hot summer months when asphalt softens.',
  },
  {
    title: 'Track Your Rental Period',
    detail:
      'Most rentals include 7–14 days. Set a reminder for 2 days before your rental period ends. If you need more time, call the hauler to extend — daily overage fees of $5–$15 add up quickly if you forget. Most companies will extend for a flat daily rate if you request it in advance.',
  },
]

const PICKUP_ITEMS = [
  {
    title: 'Schedule Pickup in Advance',
    detail:
      'Call your hauler 1–2 days before you want the dumpster removed. Most companies offer next-business-day pickup, but during peak season (May–September) it may take 48 hours. Do not wait until the last day of your rental to call.',
  },
  {
    title: 'Clear the Area Around the Dumpster',
    detail:
      'The roll-off truck needs clear access to hook and load the container. Remove any vehicles, equipment, hoses, or other obstacles within 10 feet of the dumpster. Trim any low-hanging branches that could interfere with the truck arm.',
  },
  {
    title: 'Do a Final Walk-Around',
    detail:
      'Before the hauler arrives, check that nothing is sticking above the fill line, no prohibited items were accidentally tossed in, and the load is distributed reasonably evenly. This prevents last-minute surcharges or pickup refusals.',
  },
  {
    title: 'Document the Driveway Condition',
    detail:
      'Take a quick photo of your driveway or placement area before and after the dumpster is removed. If there is any damage from the container or delivery truck, having photo documentation makes resolving the issue with the hauler straightforward.',
  },
]

export default function DumpsterRentalChecklistPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {/* Hero */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs
            crumbs={[
              { label: 'Home', href: '/' },
              { label: 'Dumpster Rental Checklist' },
            ]}
          />
          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900">
            Dumpster Rental Checklist: Everything You Need Before You Book
          </h1>
          <p className="mt-3 max-w-3xl text-gray-600 leading-relaxed">
            Renting a dumpster is straightforward — but skipping a few key steps can cost you{' '}
            <strong className="text-gray-900">$50–$300 in avoidable fees</strong> or leave you with
            the wrong size container for your project. This checklist covers everything to do before
            booking, during your rental, and when scheduling pickup so nothing falls through the
            cracks.
          </p>
          <AuthorByline updatedDate="March 2026" readTimeMin={5} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-14">

        {/* Pre-Rental Checklist */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Before You Book: Pre-Rental Checklist
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl">
            Complete these six steps before you pick up the phone or submit an online booking. They
            will help you get accurate quotes, avoid surprises, and choose the right company.
          </p>
          <div className="space-y-6">
            {PRE_RENTAL_ITEMS.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="rounded-xl border border-gray-200 bg-white p-5 hover:border-green-200 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                      <Icon className="h-5 w-5 text-green-700" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed mb-3">{item.detail}</p>
                      <div className="flex items-start gap-2 rounded-lg bg-green-50 border border-green-100 p-3">
                        <CheckCircle className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                        <p className="text-sm text-green-800 font-medium">{item.action}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* During Rental */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            During Your Rental: Tips to Avoid Problems
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl">
            Once the dumpster arrives, follow these guidelines to maximize your space, stay within
            weight limits, and avoid extra charges.
          </p>
          <div className="space-y-3">
            {DURING_RENTAL_ITEMS.map((item) => (
              <div
                key={item.title}
                className="flex gap-4 rounded-xl border border-gray-200 bg-white p-4 hover:border-green-200 transition-colors"
              >
                <CheckCircle className="h-5 w-5 text-green-700 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pickup Checklist */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Pickup Day: Return & Removal Checklist
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl">
            A smooth pickup means no extra charges and no damage to your property. Complete these
            steps before the truck arrives.
          </p>
          <div className="space-y-3">
            {PICKUP_ITEMS.map((item) => (
              <div
                key={item.title}
                className="flex gap-4 rounded-xl border border-gray-200 bg-white p-4 hover:border-green-200 transition-colors"
              >
                <CheckCircle className="h-5 w-5 text-green-700 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Printable Summary */}
        <section className="rounded-xl border border-green-200 bg-green-50 p-7">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Quick-Reference Summary</h2>
          <p className="text-sm text-gray-600 mb-5">
            Bookmark this page or save the checklist below for quick reference when booking your
            next dumpster rental.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div>
              <h3 className="font-bold text-gray-900 text-sm mb-2">Before Booking</h3>
              <div className="space-y-1.5">
                {PRE_RENTAL_ITEMS.map((item) => (
                  <div key={item.title} className="flex items-center gap-2">
                    <CheckCircle className="h-3.5 w-3.5 text-green-600 shrink-0" />
                    <span className="text-xs text-gray-700">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-sm mb-2">During Rental</h3>
              <div className="space-y-1.5">
                {DURING_RENTAL_ITEMS.map((item) => (
                  <div key={item.title} className="flex items-center gap-2">
                    <CheckCircle className="h-3.5 w-3.5 text-green-600 shrink-0" />
                    <span className="text-xs text-gray-700">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-sm mb-2">Pickup Day</h3>
              <div className="space-y-1.5">
                {PICKUP_ITEMS.map((item) => (
                  <div key={item.title} className="flex items-center gap-2">
                    <CheckCircle className="h-3.5 w-3.5 text-green-600 shrink-0" />
                    <span className="text-xs text-gray-700">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="rounded-xl border border-gray-100 bg-gray-50 p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Related Guides & Tools</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: 'Dumpster Size Estimator', href: '/dumpster-size-estimator', desc: 'Find the right container size for your project' },
              { label: 'How Much Does Dumpster Rental Cost?', href: '/how-much-does-dumpster-rental-cost', desc: 'National pricing by size and region' },
              { label: 'How to Choose a Dumpster Company', href: '/how-to-choose-a-dumpster-rental-company', desc: '8 things to check before booking' },
              { label: 'What Can You Put in a Dumpster?', href: '/what-can-you-put-in-a-dumpster', desc: 'Complete list of allowed and banned items' },
              { label: 'Dumpster Rental Permit Guide', href: '/dumpster-rental-permit', desc: 'Find out if your city requires a permit' },
              { label: 'Weight Limit Calculator', href: '/dumpster-weight-limit-calculator', desc: 'Estimate debris weight before booking' },
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

        {/* CTA */}
        <section className="rounded-xl border border-green-200 bg-green-50 p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Checklist Complete? Find Local Dumpster Rental
          </h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Now that you know exactly what to look for, compare quotes from dumpster rental companies
            in your area. Most haulers offer next-day delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/dumpster-rental-near-me"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-700 px-7 py-3.5 font-bold text-white hover:bg-green-800 transition"
            >
              Find Local Companies <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/dumpster-rental-cost"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-green-300 bg-white px-7 py-3.5 font-bold text-green-700 hover:bg-green-50 transition"
            >
              See Pricing Guide <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </section>

      </div>
    </>
  )
}
