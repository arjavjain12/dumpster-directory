import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'How to Dispose of a Mattress | Free & Paid Options | DumpsterListing',
  description:
    'The cheapest ways to get rid of an old mattress — free pickup programs, retailer take-back, donation, recycling, and when to use a dumpster rental.',
  alternates: { canonical: '/how-to-dispose-of-mattress' },
  openGraph: {
    title: 'How to Dispose of an Old Mattress: Free & Paid Options',
    description: 'Bye Bye Mattress, retailer take-back, donation, junk removal, and dumpster rental — compare every option for getting rid of a mattress.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can I put a mattress in a dumpster?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Usually yes, but always confirm with your dumpster rental company first. Many roll-off dumpster providers allow mattresses with a surcharge of $25–$75 per mattress, because mattresses require special handling at the landfill or recycling facility. Some companies include mattresses at no extra charge if you\'re renting for a whole-house or multi-room cleanout. A few companies decline mattresses entirely due to local landfill restrictions. Always ask before you book, and factor in any mattress fee when comparing your disposal options.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I get rid of a mattress for free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best free options for mattress disposal are: (1) The Bye Bye Mattress program — free drop-off at hundreds of locations in California, Connecticut, Rhode Island, and Oregon; (2) Retailer take-back — if you\'re buying a new mattress from Purple, Casper, Saatva, or Mattress Firm, many will remove your old one for free or a small fee on delivery day; (3) Donation — Habitat for Humanity ReStore and Salvation Army accept mattresses in stain-free, no-tear condition and may offer free pickup; (4) Your city\'s free bulk item pickup — most municipalities offer 1–2 bulk pickups per year at no cost.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Purple/Casper take back old mattresses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, several direct-to-consumer mattress brands offer old mattress removal when delivering a new one. Purple, Casper, and Saatva all have haul-away options, though policies and fees vary. Casper and Purple typically offer removal for a fee (often $50–$100) as an add-on at checkout. Saatva is known for its white-glove delivery service, which includes removing your old mattress as part of their standard delivery — making it one of the easiest options if you\'re already purchasing a Saatva mattress. Always check the current policy at checkout, as these programs change.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Bye Bye Mattress program?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bye Bye Mattress (byebyemattress.com) is a nonprofit program funded by the Mattress Recycling Council and state mattress recycling fees. It operates free mattress drop-off locations in four states: California, Connecticut, Rhode Island, and Oregon. The program was created because these states passed Extended Producer Responsibility (EPR) laws requiring a recycling infrastructure for mattresses. At drop-off locations, mattresses are disassembled and 80%+ of materials are recycled — steel springs, foam, and fabric are all recovered. There is no cost to consumers. To find your nearest drop-off, visit byebyemattress.com and search by zip code.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does mattress disposal cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mattress disposal costs vary widely depending on your method: Free — Bye Bye Mattress program (CA, CT, RI, OR), retailer take-back with new purchase, donation pickup, or city bulk pickup. $20–$50 — Municipal bulk item pickup fees, or mattress recycling center drop-off. $25–$75 — Extra fee if putting a mattress in a rented dumpster (confirm with your provider). $75–$150 per mattress — Junk removal services like 1-800-GOT-JUNK or College Hunks Hauling Junk. The most cost-effective paid option for a whole-room cleanout is dumpster rental, where the mattress fee is a small add-on to the overall rental cost.',
      },
    },
  ],
}

const OPTIONS = [
  {
    rank: 1,
    title: 'Bye Bye Mattress Program (Free)',
    effort: 'Low',
    cost: 'Free',
    speed: 'Immediate (drop-off)',
    bestFor: 'Residents of CA, CT, RI, or OR',
    description:
      'The Bye Bye Mattress program, run by the Mattress Recycling Council, provides free mattress drop-off locations in California, Connecticut, Rhode Island, and Oregon. These states fund the program through a small recycling fee collected at point of sale on new mattress purchases. Drop-off sites are widespread — retail stores, recycling centers, and transfer stations participate. Visit byebyemattress.com to find the nearest location by zip code. Box springs are also accepted.',
    pros: [
      'Completely free for consumers',
      '80%+ of materials recycled (steel, foam, fabric)',
      'Hundreds of drop-off locations',
      'Box springs accepted too',
    ],
    cons: [
      'Only available in 4 states (CA, CT, RI, OR)',
      'Must transport mattress yourself',
      'Limited to 2 mattresses per visit at some locations',
      'Not available to businesses (residential only at most sites)',
    ],
    orgs: ['Bye Bye Mattress (byebyemattress.com)', 'Mattress Recycling Council'],
    color: 'green',
  },
  {
    rank: 2,
    title: 'Retailer Take-Back (Free or Low Fee)',
    effort: 'None',
    cost: 'Free–$100',
    speed: 'On delivery day',
    bestFor: 'Buying a replacement mattress',
    description:
      "When you buy a new mattress and have it delivered, many brands and retailers will remove your old one the same day. Saatva's white-glove service includes old mattress removal as standard. Casper and Purple offer haul-away as a paid add-on at checkout. Mattress Firm often removes the old mattress with delivery — policies vary by location, so confirm at purchase. This is the easiest option when you're already spending money on a new mattress, since the logistics are handled for you.",
    pros: [
      'Zero effort — happens on delivery day',
      'No need to transport anything',
      'Often free or bundled with delivery cost',
      'Mattress goes directly to recycling in most cases',
    ],
    cons: [
      'Only available when purchasing a new mattress',
      'Haul-away is an add-on fee at some retailers',
      'Policies vary widely — confirm before purchasing',
      'Must have new mattress delivered (not picked up)',
    ],
    orgs: ['Saatva', 'Purple', 'Casper', 'Mattress Firm'],
    color: 'green',
  },
  {
    rank: 3,
    title: 'Donate to Charity',
    effort: 'Low',
    cost: 'Free',
    speed: '1–7 days',
    bestFor: 'Mattresses in clean, stain-free condition',
    description:
      "Charities accept mattresses that are genuinely in good condition — stain-free, no tears, no structural damage, and from a smoke-free home. Habitat for Humanity ReStore and Salvation Army are the most widely available options and both offer scheduled pickup in many areas. Local shelters, transitional housing programs, and churches may also accept donations. The Sleep Foundation estimates that a mattress can last 7–10 years, so if yours is under that threshold and in excellent shape, donation is worth pursuing before disposal.",
    pros: [
      'Free pickup at many charity locations',
      'Mattress gets reused instead of landfilled',
      'Tax deduction possible',
      'Supports your community',
    ],
    cons: [
      'Strict condition requirements (no stains, tears)',
      'Many charities decline mattresses entirely',
      'Scheduling and waiting required',
      'Not an option for old, worn, or damaged mattresses',
    ],
    orgs: ['Habitat for Humanity ReStore', 'Salvation Army', 'Local shelters', 'Churches and community organizations'],
    color: 'blue',
  },
  {
    rank: 4,
    title: 'Municipal Bulk Pickup',
    effort: 'Very Low',
    cost: 'Free or $20–$50',
    speed: 'Next scheduled pickup',
    bestFor: 'Residents whose city offers bulk item pickup',
    description:
      "Most cities and counties offer a bulk item pickup program — either on a scheduled annual or semi-annual basis, or on-demand with a fee. Place the mattress at the curb on the designated day and the waste hauler takes it. Check your city's waste management website or call 311 to find out your local program's schedule and cost. Some cities include mattresses for free; others charge $20–$50 per item. This option requires the least effort — you simply put the mattress outside.",
    pros: [
      'Minimal effort',
      'Free or low cost',
      'No transportation required',
      'Works for any mattress condition',
    ],
    cons: [
      'Schedules are infrequent in some cities',
      'May have a fee per item',
      'Mattress sits outside until pickup day',
      'Not all cities accept mattresses in bulk pickup',
    ],
    orgs: ['Your city waste management website', '311 service line'],
    color: 'blue',
  },
  {
    rank: 5,
    title: 'Junk Removal Service',
    effort: 'None',
    cost: '$75–$150 per mattress',
    speed: 'Same or next day',
    bestFor: 'No vehicle, can\'t move mattress yourself',
    description:
      '1-800-GOT-JUNK and College Hunks Hauling Junk both offer mattress pickup with a crew that loads and hauls. Expect to pay $75–$150 per mattress as a single-item pickup, or slightly less per unit if they\'re picking up multiple items in the same visit. These services are convenient — the crew comes to you, removes the mattress from any floor or room, and hauls it. Ideal when you have no vehicle or are unable to do any lifting. Many junk removal companies take mattresses to recycling facilities rather than landfills.',
    pros: [
      'Zero effort — crew removes from any room',
      'Same-day or next-day availability',
      'Works for any condition mattress',
      'No vehicle or transportation needed',
    ],
    cons: [
      'Most expensive per-mattress option',
      'Must be home for the appointment',
      'Price increases with multiple items',
      'Scheduling windows can be wide',
    ],
    orgs: ['1-800-GOT-JUNK', 'College Hunks Hauling Junk', 'LoadUp', 'Local junk removal companies'],
    color: 'orange',
  },
  {
    rank: 6,
    title: 'Dumpster Rental (Cleanouts & Multiple Items)',
    effort: 'Medium',
    cost: '$275–$500 (+ $25–$75 mattress fee)',
    speed: '24–48 hr delivery',
    bestFor: 'Whole-room or whole-house cleanouts with mattress + other debris',
    description:
      "If you're clearing out a bedroom, staging a home, or doing a full estate cleanout, a dumpster rental is the most cost-effective option when a mattress is just one of many items going. Many rental companies allow mattresses in their roll-off containers — sometimes for free, sometimes for a $25–$75 surcharge per mattress. Always ask before booking. A 10-yard dumpster handles a mattress, bed frame, dresser, and other bedroom items together, making it far cheaper per item than individual junk removal trips.",
    pros: [
      'Best value when disposing of multiple items',
      'Work at your own pace over 7–14 days',
      'One cost covers mattress + all other debris',
      'Most cost-effective for large cleanouts',
    ],
    cons: [
      'Extra fee for mattress in some cases ($25–$75)',
      'You do the loading',
      'Needs driveway or street space for container',
      'Not cost-effective for mattress-only disposal',
    ],
    orgs: [],
    color: 'purple',
  },
]

const colorMap: Record<string, string> = {
  green: 'border-green-200 bg-green-50',
  blue: 'border-blue-200 bg-blue-50',
  orange: 'border-orange-200 bg-orange-50',
  purple: 'border-purple-200 bg-purple-50',
}

const badgeMap: Record<string, string> = {
  green: 'bg-green-100 text-green-700',
  blue: 'bg-blue-100 text-blue-700',
  orange: 'bg-orange-100 text-orange-700',
  purple: 'bg-purple-100 text-purple-700',
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Dispose of an Old Mattress',
  description: 'Step-by-step guide to getting rid of an old mattress — from free programs to dumpster rental for large cleanouts.',
  totalTime: 'P1D',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Check if you qualify for Bye Bye Mattress',
      text: 'If you live in California, Connecticut, Rhode Island, or Oregon, visit byebyemattress.com to find a free drop-off location near you. This is the cheapest option available.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Check your new mattress retailer for haul-away',
      text: 'If you\'re buying a replacement mattress, ask about take-back at purchase. Saatva, Casper, Purple, and Mattress Firm all offer removal options — Saatva includes it as part of white-glove delivery at no extra charge.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Try donation if the mattress is in great condition',
      text: 'Habitat for Humanity ReStore and Salvation Army accept mattresses that are stain-free and structurally sound. Contact them for a free pickup appointment.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Choose a paid option for the remaining cases',
      text: 'For a whole-room cleanout, rent a dumpster ($275–$500 plus a possible $25–$75 mattress fee). For single-mattress pickup without a vehicle, use junk removal ($75–$150). For low effort, schedule a municipal bulk pickup.',
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Dispose of an Old Mattress',
  description: 'Complete guide to mattress disposal — free programs, retailer take-back, donation, junk removal, and dumpster rental for large cleanouts.',
  datePublished: '2026-02-24',
  dateModified: '2026-02-24',
  author: { '@type': 'Organization', name: 'DumpsterListing', url: 'https://dumpsterlisting.com' },
  publisher: { '@type': 'Organization', name: 'DumpsterListing', url: 'https://dumpsterlisting.com' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://dumpsterlisting.com/how-to-dispose-of-mattress' },
}

export default function HowToDisposeOfMattressPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs crumbs={[
            { label: 'Home', href: '/' },
            { label: 'How to Dispose of a Mattress' },
          ]} />
          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900">
            How to Dispose of an Old Mattress
          </h1>
          <p className="mt-3 max-w-3xl text-gray-600 leading-relaxed">
            Mattress disposal is trickier than most bulky items — banned in many landfills, not
            accepted by most charities unless in perfect condition, and too big to just toss out.
            Here's every option ranked by cost and effort, including programs that won't cost you
            a cent.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-14">

        {/* Why it's tricky */}
        <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-2">Why Mattress Disposal Is Complicated</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            According to the Sleep Foundation, Americans dispose of approximately <strong>20 million mattresses per year</strong>. Despite that, <strong>80% of a mattress's materials are recyclable</strong> — steel coils, foam, and fabric can all be recovered and reused. The challenge is logistics: mattresses are bulky, many landfills restrict or ban them, and most charities have strict condition requirements. Knowing your options ahead of time saves money and hassle.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            {[
              { label: 'Mattresses disposed of yearly (US)', stat: '20M+' },
              { label: 'Mattress materials that are recyclable', stat: '~80%' },
              { label: 'States with free Bye Bye Mattress', stat: '4 states' },
              { label: 'Typical junk removal cost', stat: '$75–$150' },
            ].map((s) => (
              <div key={s.label} className="rounded-lg bg-white border border-blue-200 p-3">
                <div className="text-lg font-bold text-blue-700">{s.stat}</div>
                <div className="text-xs text-gray-600 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick comparison table */}
        <div className="overflow-x-auto rounded-xl border border-gray-200">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left px-4 py-3 font-semibold text-gray-700">Option</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-700">Cost</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-700 hidden sm:table-cell">Effort</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">Speed</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-700 hidden lg:table-cell">Best For</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {OPTIONS.map((opt) => (
                <tr key={opt.title} className="hover:bg-gray-50 transition">
                  <td className="px-4 py-3 font-semibold text-gray-900">{opt.title}</td>
                  <td className={`px-4 py-3 font-bold ${opt.cost === 'Free' ? 'text-green-700' : 'text-gray-700'}`}>{opt.cost}</td>
                  <td className="px-4 py-3 text-gray-600 hidden sm:table-cell">{opt.effort}</td>
                  <td className="px-4 py-3 text-gray-600 hidden md:table-cell">{opt.speed}</td>
                  <td className="px-4 py-3 text-gray-500 text-xs hidden lg:table-cell">{opt.bestFor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Detailed option cards */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">All 6 Options In Detail</h2>
          {OPTIONS.map((opt) => (
            <div key={opt.title} className={`rounded-2xl border p-6 ${colorMap[opt.color]}`}>
              <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {opt.rank}. {opt.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-0.5">Best for: {opt.bestFor}</p>
                </div>
                <div className="flex gap-2 flex-wrap">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${badgeMap[opt.color]}`}>{opt.cost}</span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-gray-100 text-gray-600">{opt.speed}</span>
                </div>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">{opt.description}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5">Pros</p>
                  <ul className="space-y-1">
                    {opt.pros.map((p) => (
                      <li key={p} className="text-xs text-gray-700 flex items-start gap-1.5">
                        <span className="text-green-500 font-bold">+</span> {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5">Cons</p>
                  <ul className="space-y-1">
                    {opt.cons.map((c) => (
                      <li key={c} className="text-xs text-gray-700 flex items-start gap-1.5">
                        <span className="text-red-400 font-bold">&#8722;</span> {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {opt.orgs.length > 0 && (
                <div className="mt-3 pt-3 border-t border-white/50">
                  <p className="text-xs font-semibold text-gray-600">Where to go: {opt.orgs.join(' · ')}</p>
                </div>
              )}
            </div>
          ))}
        </section>

        {/* Dumpster rules for mattresses */}
        <section className="rounded-2xl border border-gray-200 bg-white p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Putting a Mattress in a Dumpster: What to Know</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                rule: 'Always ask before booking',
                detail: 'Call the rental company and confirm mattresses are accepted. Policies vary significantly between providers.',
              },
              {
                rule: 'Expect a surcharge of $25–$75',
                detail: 'Many companies charge a per-mattress fee because landfills and processing facilities charge extra for mattresses.',
              },
              {
                rule: 'Don\'t wrap it in plastic',
                detail: 'If your mattress is going to a recycling facility, plastic wrap makes processing harder and may not be accepted.',
              },
              {
                rule: 'Best for multi-item cleanouts',
                detail: 'The mattress surcharge makes sense when you\'re already renting a dumpster for a bedroom, apartment, or full house cleanout.',
              },
              {
                rule: 'Confirm illegal dumping rules',
                detail: 'Leaving a mattress at the curb without a scheduled pickup is considered illegal dumping in most cities. Fines range from $100 to $1,000+.',
              },
              {
                rule: 'Box springs count separately',
                detail: 'Most companies count a box spring as a separate item, meaning an additional surcharge. Confirm this upfront.',
              },
            ].map((t) => (
              <div key={t.rule} className="flex gap-3">
                <div className="h-6 w-6 rounded-full bg-green-100 text-green-700 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">&#10003;</div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">{t.rule}</div>
                  <div className="text-xs text-gray-600 mt-0.5">{t.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Cost comparison by scenario */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-5">Cost Comparison by Scenario</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">Scenario</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">Best Option</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 hidden sm:table-cell">Est. Cost</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { scenario: 'Buying a new mattress', best: 'Retailer take-back', cost: 'Free–$100', note: 'Saatva includes removal; Casper/Purple charge add-on fee' },
                  { scenario: 'Live in CA, CT, RI, or OR', best: 'Bye Bye Mattress drop-off', cost: 'Free', note: 'Find nearest location at byebyemattress.com' },
                  { scenario: 'Mattress in perfect condition', best: 'Donate', cost: 'Free', note: 'Habitat ReStore or Salvation Army; schedule pickup' },
                  { scenario: 'No vehicle, single mattress', best: 'Junk removal', cost: '$75–$150', note: '1-800-GOT-JUNK or College Hunks; same-day available' },
                  { scenario: 'Whole bedroom cleanout', best: 'Dumpster rental', cost: '$275–$575', note: '$275–$500 rental + $25–$75 mattress surcharge' },
                  { scenario: 'City offers bulk pickup', best: 'Municipal bulk pickup', cost: 'Free–$50', note: 'Check city website or call 311 for schedule' },
                ].map((row) => (
                  <tr key={row.scenario} className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-800">{row.scenario}</td>
                    <td className="px-4 py-3 text-green-700 font-semibold">{row.best}</td>
                    <td className="px-4 py-3 text-gray-700 font-semibold hidden sm:table-cell">{row.cost}</td>
                    <td className="px-4 py-3 text-gray-500 text-xs hidden md:table-cell">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* What NOT to do */}
        <section className="rounded-2xl border border-red-100 bg-red-50 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">What NOT to Do with a Mattress</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                rule: 'Don\'t illegally dump it',
                detail: 'Abandoning a mattress in a parking lot, alley, or on the street without a scheduled pickup is illegal dumping. Fines range from $100 to $1,000+ depending on your city.',
              },
              {
                rule: 'Don\'t leave it curbside without scheduling',
                detail: 'Even if it "looks like" bulk day, placing a mattress at the curb without a confirmed pickup can result in a citation. Always schedule through your city\'s waste management program.',
              },
              {
                rule: 'Don\'t wrap in plastic if donating or recycling',
                detail: 'Recycling facilities need to process mattresses without plastic wrap. Charities also need to inspect for stains. Skip the wrapping.',
              },
              {
                rule: 'Don\'t put in a dumpster without confirming first',
                detail: 'Some rental companies prohibit mattresses entirely, or charge surcharges they\'ll add to your bill after pickup. Always ask before booking.',
              },
            ].map((t) => (
              <div key={t.rule} className="flex gap-3">
                <div className="h-6 w-6 rounded-full bg-red-100 text-red-600 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">&#10005;</div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">{t.rule}</div>
                  <div className="text-xs text-gray-600 mt-0.5">{t.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Related guides */}
        <section className="rounded-xl border border-gray-100 bg-gray-50 p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Related Guides</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: 'What Can You Put in a Dumpster?', href: '/what-can-you-put-in-a-dumpster', desc: 'Full allowed and prohibited items list' },
              { label: 'Dumpster Rental Cost Guide', href: '/dumpster-rental-cost', desc: 'Average prices by size and region' },
              { label: 'How to Dispose of Furniture', href: '/how-to-dispose-of-furniture', desc: 'Free pickup, donation, and dumpster options' },
              { label: 'How to Dispose of Electronics', href: '/how-to-dispose-of-electronics', desc: 'E-waste recycling and retailer programs' },
              { label: 'Roll-Off Dumpster Sizes', href: '/roll-off-dumpster-sizes', desc: 'Which size is right for your cleanout?' },
              { label: 'Dumpster Rental Near Me', href: '/dumpster-rental-near-me', desc: 'Find local companies and get free quotes' },
            ].map((link) => (
              <Link key={link.href} href={link.href}
                className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-3 hover:border-green-300 transition group">
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
              <div key={faq.name} className="rounded-xl border border-gray-200 bg-white p-5">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.name}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl bg-gradient-to-r from-green-600 to-green-700 p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Clearing Out a Bedroom or Full House?</h2>
          <p className="text-green-100 mb-6 max-w-xl mx-auto">A dumpster rental is the most cost-effective option when you have a mattress plus furniture and other debris. Find local companies and get free quotes.</p>
          <Link href="/dumpster-rental-near-me"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 font-bold text-green-700 hover:bg-green-50 transition">
            Find Local Companies <ArrowRight className="h-5 w-5" />
          </Link>
        </section>
      </div>
    </>
  )
}
