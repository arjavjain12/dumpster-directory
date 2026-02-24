import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'How to Dispose of Electronics (E-Waste) | DumpsterListing',
  description:
    'Learn how to properly dispose of old electronics, TVs, computers, and phones. Find free e-waste recycling near you — and when a dumpster rental makes sense.',
  alternates: { canonical: '/how-to-dispose-of-electronics' },
  openGraph: {
    title: 'How to Dispose of Old Electronics & E-Waste',
    description: 'Free retailer drop-off programs, manufacturer take-back, municipal e-waste events, and when a dumpster rental makes sense for large cleanouts.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is it illegal to throw electronics in the trash?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — in more than 25 states, it is illegal to dispose of electronics in regular trash or landfills. States with e-waste bans include California, New York, Texas, Illinois, New Jersey, and many others. Penalties vary but can include fines for residents and businesses. Even in states without explicit bans, the EPA strongly discourages landfill disposal of electronics because they contain lead, mercury, cadmium, and lithium — all of which can leach into groundwater.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Best Buy charge for electronics recycling?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Best Buy accepts most consumer electronics for free recycling (up to 3 items per household per day). TVs 32 inches and under are free to recycle. TVs larger than 32 inches cost $29.99 to recycle at Best Buy. Computers, laptops, tablets, phones, and most small devices are accepted for free. Some specialty items like appliances or items requiring special handling may have fees. The Best Buy Haul Away service (for large items with a new delivery) is a separate paid service.',
      },
    },
    {
      '@type': 'Question',
      name: 'What electronics does Best Buy accept?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Best Buy accepts a wide range of electronics including: TVs and monitors, computers and laptops, tablets and e-readers, smartphones and cell phones, digital cameras, printers and scanners, video game consoles and accessories, DVD and Blu-ray players, audio equipment, cables and cords, ink cartridges, and rechargeable batteries. Items must be brought to the store's customer service or dedicated recycling station. Best Buy does not accept appliances like refrigerators or washing machines at the recycling drop-off (those go through their haul-away program with delivery).",
      },
    },
    {
      '@type': 'Question',
      name: 'How do I wipe my data before recycling?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Before recycling any device, always wipe your personal data. For smartphones: perform a factory reset through your settings menu (Settings > General > Reset on iPhone; Settings > System > Reset on Android). For laptops/computers: on Windows, use Settings > Recovery > Reset this PC and choose "Remove everything." On Mac, boot into Recovery Mode and use Disk Utility to erase the drive, then reinstall macOS. For hard drives being disposed of separately, use a tool like DBAN (Darik\'s Boot and Nuke) for a full wipe. If in doubt, remove the storage drive before recycling and destroy it separately.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I put a TV in a dumpster?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In most states, no — it is illegal to put TVs in a dumpster or landfill because they contain hazardous materials like lead (in older CRT screens) and mercury. Even in states without an explicit ban, reputable dumpster rental companies typically refuse TVs and other electronics. The correct options are: Best Buy (free for TVs 32" and under, $29.99 for larger), a municipal e-waste event, an electronics retailer take-back program, or a certified e-waste recycler. For large office or estate cleanouts with dozens of TVs, pair a dumpster for non-electronic debris with a separate e-waste pickup service.',
      },
    },
  ],
}

const OPTIONS = [
  {
    rank: 1,
    title: 'Free Retailer Drop-Off Programs',
    effort: 'Low',
    cost: 'Free (some TV fees)',
    speed: 'Immediate',
    bestFor: 'Households with 1–5 devices',
    description:
      'Major electronics retailers operate free e-waste recycling programs that are accessible, convenient, and require no appointment. Best Buy is the largest program — accepting up to 3 items per household per day at every store location nationwide. Staples accepts computers, monitors, and small devices. Apple Stores accept all Apple products and offer trade-in credit for devices with remaining value.',
    pros: [
      'Free for most devices',
      'No appointment needed',
      'Available nationwide',
      'Data destruction available on-site at some locations',
    ],
    cons: [
      '3-item daily limit at Best Buy',
      'TV size restrictions (Best Buy charges for >32")',
      'Must transport devices yourself',
      'Limited device categories at some retailers',
    ],
    orgs: ['Best Buy (all stores)', 'Staples', 'Apple Store', 'Office Depot / OfficeMax'],
    color: 'green',
  },
  {
    rank: 2,
    title: 'Manufacturer Take-Back Programs',
    effort: 'Low',
    cost: 'Free (often with mail-in label)',
    speed: '1–2 weeks (mail)',
    bestFor: 'Brand-specific devices, especially with residual value',
    description:
      'Major manufacturers run their own recycling and trade-in programs. Dell Reconnect (partnered with Goodwill) accepts any brand of computer equipment at Goodwill locations. HP Planet Partners offers free mail-in recycling for HP products. Samsung provides a recycling and trade-in program for Galaxy devices and TVs. Apple Trade In can give you credit toward a new device — even if your device has no value, Apple recycles it free.',
    pros: [
      'Free mail-in options',
      'Trade-in credit for devices with value',
      'Covers older devices of any age',
      'Certified responsible recycling',
    ],
    cons: [
      'Dell Reconnect only at Goodwill locations',
      'Mail-in takes time',
      'Trade-in values fluctuate',
      'Brand-specific programs have narrow scope',
    ],
    orgs: ['Dell Reconnect', 'HP Planet Partners', 'Samsung Recycling', 'Apple Trade In'],
    color: 'blue',
  },
  {
    rank: 3,
    title: 'Municipal E-Waste Events & HHW Facilities',
    effort: 'Low–Medium',
    cost: 'Free for residents',
    speed: 'Next scheduled event',
    bestFor: 'Large or unusual devices, batteries, CRT monitors',
    description:
      'Most counties and cities host e-waste collection events at least once or twice per year, and many have permanent Household Hazardous Waste (HHW) facilities with regular drop-off hours. These accept virtually anything — old CRT TVs, VCRs, large monitors, industrial equipment, and items retailers won\'t take. Use Earth911.com to find the nearest permanent facility or upcoming event. Search by zip code and device type.',
    pros: [
      'Free for residents',
      'Accepts items retailers refuse',
      'No quantity limits at most events',
      'Properly handles hazardous materials',
    ],
    cons: [
      'Events are infrequent (often 1–2x/year)',
      'HHW facilities may have limited hours',
      'May have long wait times at events',
      'Need to transport everything yourself',
    ],
    orgs: ['Earth911.com', 'Your county HHW facility', 'Call2Recycle (batteries)', 'EPA e-Stewards network'],
    color: 'green',
  },
  {
    rank: 4,
    title: 'Certified E-Waste Recyclers (R2 / e-Stewards)',
    effort: 'Medium',
    cost: 'Free–$30+ depending on device',
    speed: 'Same day (drop-off)',
    bestFor: 'Businesses, large quantities, data-sensitive devices',
    description:
      'For businesses or anyone handling large quantities of electronics, use a certified recycler carrying R2 (Responsible Recycling) or e-Stewards certification. These certifications verify the recycler meets EPA standards for responsible processing — no illegal export to developing countries, proper data destruction, and documented chain of custody. For businesses disposing of IT assets, many offer Certificate of Destruction for data compliance purposes.',
    pros: [
      'Certified responsible handling',
      'Certificate of Destruction for compliance',
      'Handles large volumes',
      'Business pickup available',
    ],
    cons: [
      'May charge fees for some devices',
      'Less convenient than retailer drop-off',
      'Fewer locations than major retailers',
      'Research required to find certified providers',
    ],
    orgs: ['R2-certified recyclers', 'e-Stewards certified recyclers', 'Earth911.com directory', 'EPA eCycler database'],
    color: 'blue',
  },
  {
    rank: 5,
    title: 'Dumpster Rental (Large Cleanouts Only)',
    effort: 'Medium',
    cost: '$275–$500 (roll-off) + separate e-waste disposal',
    speed: '24–48 hr delivery',
    bestFor: 'Office cleanouts or estate sales with 20+ mixed items',
    description:
      'For large office cleanouts, estate sales, or situations involving dozens of devices mixed with furniture, filing cabinets, and general debris, a dumpster rental handles the non-electronic waste efficiently. Electronics must still be separated and disposed of through proper e-waste channels — but pairing a 10 or 20-yard dumpster for the bulk debris with a scheduled e-waste pickup service for the electronics is the most cost-effective approach at scale. Never put electronics in the dumpster itself.',
    pros: [
      'Best for large mixed-debris cleanouts',
      'Work at your own pace over 7–14 days',
      'Handles all non-electronic debris in one container',
      'Most cost-effective for high-volume projects',
    ],
    cons: [
      'Electronics must still be separated for proper recycling',
      'Requires additional coordination for e-waste pickup',
      'Not cost-effective for electronics-only disposal',
      'Needs driveway space for container',
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
  name: 'How to Dispose of Old Electronics & E-Waste',
  description: 'Step-by-step guide to disposing of old electronics responsibly — from wiping your data to finding the right free recycling program.',
  totalTime: 'PT2H',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Wipe your data',
      text: 'Before recycling any device, perform a factory reset on smartphones and tablets, use Settings > Reset to wipe PCs, or use Disk Utility in macOS Recovery to erase Mac drives. Remove external storage and SIM cards.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Check for trade-in or resale value',
      text: 'Use Apple Trade In, Samsung trade-in, or Gazelle to get a quote. Even a $10–$50 credit offsets your next purchase. Devices with cracked screens or dead batteries may still have value.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Find the right free recycling option',
      text: 'For most households: bring up to 3 items to any Best Buy for free recycling. For Apple devices, use an Apple Store or Apple Trade In. For batteries, use Call2Recycle drop-off locations. Search Earth911.com for anything else.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Use a certified recycler for large volumes',
      text: 'Businesses or anyone with 20+ devices should use an R2 or e-Stewards certified recycler. These provide Certificate of Destruction for data compliance and can handle business IT asset decommissioning.',
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Dispose of Old Electronics & E-Waste',
  description: 'Complete guide to e-waste disposal — free retailer programs, manufacturer take-back, municipal events, certified recyclers, and when a dumpster makes sense.',
  datePublished: '2026-02-24',
  dateModified: '2026-02-24',
  author: { '@type': 'Organization', name: 'DumpsterListing', url: 'https://dumpsterlisting.com' },
  publisher: { '@type': 'Organization', name: 'DumpsterListing', url: 'https://dumpsterlisting.com' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://dumpsterlisting.com/how-to-dispose-of-electronics' },
}

export default function HowToDisposeOfElectronicsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs crumbs={[
            { label: 'Home', href: '/' },
            { label: 'How to Dispose of Electronics' },
          ]} />
          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900">
            How to Dispose of Old Electronics &amp; E-Waste
          </h1>
          <p className="mt-3 max-w-3xl text-gray-600 leading-relaxed">
            Electronics contain lead, mercury, cadmium, and lithium — which is why throwing them in
            the trash is illegal in 25+ states and harmful everywhere. Here's how to recycle them
            for free, get trade-in credit, and handle large-volume cleanouts the right way.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-14">

        {/* Hazard warning */}
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
            <span className="text-2xl">&#9888;&#65039;</span> Why Electronics Can't Go in the Trash
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            Consumer electronics contain a cocktail of hazardous substances regulated by the EPA: <strong>lead</strong> (used in older CRT displays), <strong>mercury</strong> (in fluorescent backlights), <strong>cadmium</strong> (in rechargeable batteries), and <strong>lithium</strong> (in modern batteries). When these materials reach a landfill, they can leach into soil and groundwater. More than <strong>25 states have passed e-waste disposal laws</strong> making it illegal to place electronics in regular trash or landfills.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            {[
              { label: 'States with e-waste bans', stat: '25+' },
              { label: 'E-waste recycled in the US (EPA)', stat: '~17%' },
              { label: 'Best Buy drop-off limit/day', stat: '3 items' },
              { label: 'Best Buy store locations', stat: '1,000+' },
            ].map((s) => (
              <div key={s.label} className="rounded-lg bg-white border border-amber-200 p-3">
                <div className="text-lg font-bold text-amber-700">{s.stat}</div>
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
                  <td className={`px-4 py-3 font-bold ${opt.cost.startsWith('Free') ? 'text-green-700' : 'text-gray-700'}`}>{opt.cost}</td>
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
          <h2 className="text-2xl font-bold text-gray-900">All 5 Options In Detail</h2>
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

        {/* Retailer comparison table */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-5">Best Buy vs. Staples vs. Apple: Program Comparison</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">Retailer</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">Accepts</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 hidden sm:table-cell">Limit</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">TV Policy</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 hidden lg:table-cell">Trade-In?</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  {
                    retailer: 'Best Buy',
                    accepts: 'Most consumer electronics',
                    limit: '3 items/household/day',
                    tv: 'Free ≤32"; $29.99 for larger',
                    tradeIn: 'Yes (Best Buy Trade-In)',
                  },
                  {
                    retailer: 'Staples',
                    accepts: 'Computers, monitors, small devices',
                    limit: 'Up to 7 items/day',
                    tv: 'Not accepted',
                    tradeIn: 'No',
                  },
                  {
                    retailer: 'Apple Store',
                    accepts: 'Apple products only',
                    limit: 'No stated limit',
                    tv: 'N/A (no Apple TVs recycled in-store)',
                    tradeIn: 'Yes (Apple Trade In)',
                  },
                  {
                    retailer: 'Office Depot',
                    accepts: 'Ink cartridges, small electronics',
                    limit: 'Varies by item',
                    tv: 'Not accepted',
                    tradeIn: 'No',
                  },
                ].map((row) => (
                  <tr key={row.retailer} className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-semibold text-green-700">{row.retailer}</td>
                    <td className="px-4 py-3 text-gray-700">{row.accepts}</td>
                    <td className="px-4 py-3 text-gray-600 hidden sm:table-cell">{row.limit}</td>
                    <td className="px-4 py-3 text-gray-600 hidden md:table-cell">{row.tv}</td>
                    <td className="px-4 py-3 text-gray-600 hidden lg:table-cell">{row.tradeIn}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* What NOT to do */}
        <section className="rounded-2xl border border-red-100 bg-red-50 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">What NOT to Do with Old Electronics</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                rule: 'Don\'t put electronics in the trash',
                detail: 'Illegal in 25+ states. Hazardous materials (lead, mercury, lithium) can leach into groundwater.',
              },
              {
                rule: 'Don\'t put electronics in a dumpster',
                detail: 'Most rental companies prohibit e-waste. Illegal in many states. Can void your rental agreement and result in surcharge fees.',
              },
              {
                rule: 'Don\'t abandon electronics curbside',
                detail: 'Unless your city\'s bulk pickup program explicitly accepts e-waste, this is illegal dumping and can result in fines.',
              },
              {
                rule: 'Don\'t recycle batteries loose in bins',
                detail: 'Lithium batteries can cause fires. Use Call2Recycle drop-off locations or tape the terminals before disposal.',
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

        {/* Device-by-device guide */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-5">Best Disposal Option by Device Type</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">Device</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">Best Free Option</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 hidden sm:table-cell">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { device: 'Smartphone / iPhone', best: 'Apple Trade In or Best Buy', note: 'Usually has resale value — get a quote before recycling' },
                  { device: 'Laptop / MacBook', best: 'Best Buy or Dell Reconnect', note: 'Wipe drive first; may have trade-in value' },
                  { device: 'Desktop computer', best: 'Best Buy or Dell Reconnect', note: 'Dell Reconnect at Goodwill accepts any brand' },
                  { device: 'TV (≤32")', best: 'Best Buy (free)', note: 'Call ahead to confirm stock/space; no appointment needed' },
                  { device: 'TV (>32")', best: 'Best Buy ($29.99) or HHW event', note: 'Large CRT TVs may need special handling at HHW facility' },
                  { device: 'Printer / Scanner', best: 'Best Buy or Staples', note: 'Remove ink cartridges first; Office Depot takes cartridges' },
                  { device: 'Game console', best: 'Best Buy or GameStop trade-in', note: 'GameStop trade-in may offer store credit' },
                  { device: 'Rechargeable batteries', best: 'Call2Recycle drop-off', note: 'Tape terminals of lithium batteries before transport' },
                ].map((row) => (
                  <tr key={row.device} className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-800">{row.device}</td>
                    <td className="px-4 py-3 text-green-700 font-semibold">{row.best}</td>
                    <td className="px-4 py-3 text-gray-500 text-xs hidden sm:table-cell">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Data wiping section */}
        <section className="rounded-2xl border border-gray-200 bg-white p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-5">How to Wipe Your Data Before Recycling</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                device: 'iPhone / iPad',
                steps: 'Settings > General > Transfer or Reset iPhone > Erase All Content and Settings. Sign out of Apple ID first.',
              },
              {
                device: 'Android Phone / Tablet',
                steps: 'Settings > General Management (or System) > Reset > Factory Data Reset. Remove SIM card and SD card first.',
              },
              {
                device: 'Windows PC / Laptop',
                steps: 'Settings > System > Recovery > Reset this PC > Remove everything. Choose "Remove files and clean the drive" for full wipe.',
              },
              {
                device: 'Mac / MacBook',
                steps: 'Apple menu > System Settings > General > Transfer or Reset > Erase All Content and Settings (macOS Monterey+). Older Macs: boot to Recovery Mode, use Disk Utility.',
              },
              {
                device: 'External Hard Drive',
                steps: 'Use DBAN (Darik\'s Boot and Nuke) for a verified DoD-standard wipe. Or physically destroy the drive if data is sensitive.',
              },
              {
                device: 'Smart TV / Streaming Device',
                steps: 'Settings > System > Reset or Factory Reset. Disconnect from Wi-Fi and remove linked accounts (Netflix, Amazon, etc.) first.',
              },
            ].map((t) => (
              <div key={t.device} className="flex gap-3">
                <div className="h-6 w-6 rounded-full bg-green-100 text-green-700 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">&#10003;</div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">{t.device}</div>
                  <div className="text-xs text-gray-600 mt-0.5">{t.steps}</div>
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
              { label: 'How to Dispose of Concrete', href: '/how-to-dispose-of-concrete', desc: 'Recycling centers vs. dumpster rental' },
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
          <h2 className="text-2xl font-bold mb-2">Need a Dumpster for a Large Office or Estate Cleanout?</h2>
          <p className="text-green-100 mb-6 max-w-xl mx-auto">Find local dumpster rental companies for your mixed-debris cleanout. Handle the electronics separately — we'll help with everything else.</p>
          <Link href="/dumpster-rental-near-me"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 font-bold text-green-700 hover:bg-green-50 transition">
            Find Local Companies <ArrowRight className="h-5 w-5" />
          </Link>
        </section>
      </div>
    </>
  )
}
