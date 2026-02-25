import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'How to Dispose of Old Paint | Latex & Oil-Based | DumpsterListing',
  description:
    'Proper paint disposal for latex and oil-based paint — free drop-off programs, drying out latex paint, and when you need a hazmat contractor.',
  alternates: { canonical: '/how-to-dispose-of-paint' },
  openGraph: {
    title: 'How to Dispose of Old Paint (Latex & Oil-Based)',
    description: 'PaintCare drop-off locations, drying out latex paint for trash disposal, HHW facilities, and donation options — all paint disposal methods compared.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can you put paint in a dumpster?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dry or completely empty paint cans can go in a dumpster — but liquid paint of any kind (latex or oil-based) is not accepted in roll-off dumpsters. Liquid paint is considered a prohibited material by virtually all dumpster rental companies. For a renovation project, make sure all paint cans are completely empty and fully dried before tossing them in a roll-off. Leave lids off so haulers can verify they are empty. Never put cans with liquid paint in a dumpster, as this can void your rental agreement and result in additional fees.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I dispose of latex paint for free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There are two free options for latex paint: (1) The PaintCare program — free drop-off at 5,000+ locations nationwide (Home Depot, Sherwin-Williams, ACE Hardware, and independent paint stores) in 42 participating states. Visit paintcare.org to find the nearest location. (2) Dry it out and trash it — spread latex paint in a thin layer in an open cardboard box or old bucket and let it dry completely in the sun. Once fully hardened, dried latex paint is accepted in regular trash in most states. Never pour liquid paint down a drain or in the trash — only dried latex is generally safe for landfill.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is PaintCare and where are drop-off locations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PaintCare is a nonprofit stewardship program operated by the American Coatings Association that provides free paint drop-off for consumers and businesses. It operates in 42 states plus the District of Columbia, with over 5,000 drop-off locations at retail paint and hardware stores — including Home Depot, Sherwin-Williams, ACE Hardware, True Value, and independent paint stores. PaintCare accepts latex paint, oil-based paint, stains, varnishes, and shellacs. It does not accept aerosols, caulk, or non-paint products. To find your nearest drop-off, visit paintcare.org and enter your zip code.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is dried latex paint safe for the trash?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — in most states, fully dried and hardened latex paint is accepted in regular household trash. Latex paint is water-based and does not contain the same hazardous solvents as oil-based paint. The key requirement is that it must be completely dry and solid — not just skinned over on top. To speed drying, pour paint in a thin layer (1–2 inches) into a cardboard box lined with plastic, or spread across multiple old containers. Add kitty litter or a commercial paint hardener product to accelerate the process. Check your state and local regulations, as a few states have specific rules even for dried latex.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I dispose of oil-based paint?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oil-based paint is classified as hazardous waste and must never be poured down drains, put in regular trash as a liquid, or placed in a dumpster. Your options are: (1) PaintCare drop-off (paintcare.org) — free, accepts oil-based paint at 5,000+ locations; (2) Your county Household Hazardous Waste (HHW) facility — always free for residents, accepts any quantity; (3) Paint hardener products — products like Waste Paint Hardener can solidify oil-based paint so it can be disposed of more easily (follow product and local regulations). A paint hardener does not make oil-based paint "regular trash" in most jurisdictions — always confirm local rules before using this method.',
      },
    },
  ],
}

const OPTIONS = [
  {
    rank: 1,
    title: 'PaintCare Drop-Off (Free)',
    effort: 'Low',
    cost: 'Free',
    speed: 'Immediate',
    bestFor: 'Any household quantity of latex or oil-based paint',
    description:
      'PaintCare (paintcare.org) is the easiest and most widely available free paint disposal option in the US. Operated by the American Coatings Association, it provides free drop-off at 5,000+ retail locations in 42 states — including every Home Depot, Sherwin-Williams, ACE Hardware, and thousands of independent paint stores. PaintCare accepts latex paint, oil-based paint, stains, varnishes, and shellacs in containers up to 5 gallons. Simply bring your paint to the drop-off station inside the store — no appointment needed. Paint is sent to recycling or energy recovery facilities.',
    pros: [
      'Free for consumers',
      '5,000+ locations in 42 states',
      'No appointment needed',
      'Accepts both latex and oil-based paint',
    ],
    cons: [
      'Not yet in all 50 states',
      'Does not accept aerosols or non-paint products',
      'Container size limit (5 gallons)',
      'Large commercial volumes may require special arrangements',
    ],
    orgs: ['PaintCare (paintcare.org)', 'Home Depot', 'Sherwin-Williams', 'ACE Hardware', 'True Value'],
    color: 'green',
  },
  {
    rank: 2,
    title: 'Dry Out Latex Paint (Trash Disposal)',
    effort: 'Low (some prep time)',
    cost: 'Free',
    speed: '1–7 days to dry',
    bestFor: 'Small amounts of latex paint you can dry at home',
    description:
      "Latex paint is water-based and significantly less hazardous than oil-based paint. In most states, fully dried and hardened latex paint is accepted in regular household trash. The process: pour paint into a thin layer (1–2 inches deep) in an open cardboard box, old bucket, or on newspaper. Leave it outdoors in the sun to dry. For faster results, mix in kitty litter or a commercial paint hardener product. Once completely solid with no wet spots, the dried paint and container can go in the trash. Leave the lid off the can so waste haulers can confirm it's empty and dry.",
    pros: [
      'Completely free — no transportation needed',
      'Works for any amount of latex paint',
      'No facility visits or scheduling',
      'Dried paint goes in regular trash bin',
    ],
    cons: [
      'Only works for latex (not oil-based)',
      'Takes 1–7 days depending on paint thickness',
      'Check local regulations — a few states have stricter rules',
      'Not suitable for large volumes (better to use PaintCare)',
    ],
    orgs: [],
    color: 'green',
  },
  {
    rank: 3,
    title: 'Household Hazardous Waste (HHW) Facility',
    effort: 'Low–Medium',
    cost: 'Free for residents',
    speed: 'Next HHW hours / event',
    bestFor: 'Oil-based paint, large volumes, or when other options aren\'t available',
    description:
      'Every county in the US is required to have a Household Hazardous Waste disposal program. Many operate a permanent HHW facility with regular hours (often one or two days per week); others hold periodic collection events. HHW facilities accept both latex and oil-based paint with no quantity limits for residential drop-off. They also accept other hazardous household materials like pesticides, solvents, and automotive fluids — making it useful for a whole-garage cleanout. Search Earth911.com or your county waste management website to find hours and location.',
    pros: [
      'Free for residents (all states)',
      'No quantity limits on residential drop-off',
      'Accepts oil-based paint (unlike some other options)',
      'Also accepts other hazardous materials',
    ],
    cons: [
      'Limited hours (often 1–2 days/week)',
      'May have wait times on busy days',
      'Must transport paint yourself',
      'Businesses often pay a fee or are not eligible for free drop-off',
    ],
    orgs: ['Your county HHW facility', 'Earth911.com', 'EPA waste facility locator'],
    color: 'blue',
  },
  {
    rank: 4,
    title: 'Donate or Swap Usable Paint',
    effort: 'Low',
    cost: 'Free',
    speed: '1–14 days',
    bestFor: 'Usable paint with remaining shelf life (sealed, unmixed)',
    description:
      'If your paint is still in good condition — sealed lid, not separated or foul-smelling, with at least a few years of shelf life — donating is the most environmentally responsible choice. Habitat for Humanity ReStore accepts usable interior and exterior paint at most locations. Local Buy Nothing groups and Nextdoor community boards are excellent for giving away paint quickly — people are often happy to take full cans for touch-ups or projects. Some PaintCare drop-off locations also facilitate paint reuse by accepting usable paint for redistribution. Community swap events, organized by municipalities, let residents exchange paints and materials.',
    pros: [
      'Paint gets used instead of being disposed of',
      'Free and immediate for the giver',
      'Habitat ReStore offers tax receipt in some cases',
      'Buy Nothing groups typically respond quickly',
    ],
    cons: [
      'Only works for paint in good condition',
      'Habitat ReStore does not accept all paint types',
      'Community swaps are infrequent',
      'No guarantee of takers on Buy Nothing',
    ],
    orgs: ['Habitat for Humanity ReStore', 'Buy Nothing groups', 'Nextdoor', 'Community swap events'],
    color: 'blue',
  },
  {
    rank: 5,
    title: 'Paint Hardener + Trash (Oil-Based, Confirm Locally)',
    effort: 'Low (prep required)',
    cost: '$5–$15 for hardener product',
    speed: 'Hours to set',
    bestFor: 'Small amounts of oil-based paint when HHW isn\'t accessible',
    description:
      "Commercial Waste Paint Hardener products (available at hardware stores) are designed to solidify liquid paint quickly. For latex paint, this is a faster alternative to natural air-drying. For oil-based paint, solidifying the paint makes it easier to handle — but check your local regulations before putting solidified oil-based paint in the trash. In many jurisdictions, even solidified oil-based paint must go through HHW or a licensed facility. This is not a universal workaround. Always confirm what your local waste hauler and state regulations allow before using this method for oil-based paint.",
    pros: [
      'Fast — solidifies paint in hours',
      'Works for both latex and oil-based',
      'Low cost ($5–$15 per can)',
      'Available at most hardware stores',
    ],
    cons: [
      'Does not always make oil-based paint trash-legal — verify locally',
      'Additional product cost',
      'Not for large volumes',
      'Latex alternatives (air drying, kitty litter) are free',
    ],
    orgs: ['Home Depot', 'Lowe\'s', 'ACE Hardware (Waste Paint Hardener)'],
    color: 'orange',
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
  name: 'How to Dispose of Old Paint',
  description: 'Step-by-step guide to disposing of latex and oil-based paint — free PaintCare programs, drying latex paint, and HHW facilities.',
  totalTime: 'PT3H',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Identify your paint type',
      text: 'Check the label. "Latex," "acrylic," or "water cleanup" means it\'s latex (less hazardous). "Oil-based," "alkyd," "solvent cleanup," or "flammable" means it\'s oil-based (hazardous). The disposal rules are different for each.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Check if paint is still usable',
      text: 'If the paint is sealed and hasn\'t separated or developed a foul smell, consider donating it to Habitat for Humanity ReStore, a Buy Nothing group, or a community paint swap. Usable paint shouldn\'t be disposed of at all.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'For latex paint: dry it out or use PaintCare',
      text: 'Pour latex paint into a thin layer in an open container and let it dry completely in the sun (1–7 days). Once solid, it goes in regular trash in most states. Alternatively, take it to a free PaintCare drop-off location at paintcare.org.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'For oil-based paint: use PaintCare or HHW facility',
      text: 'Never pour oil-based paint down a drain or put liquid oil-based paint in the trash. Drop it off at a PaintCare location (paintcare.org — free, 5,000+ locations) or your county\'s Household Hazardous Waste facility (always free for residents).',
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Dispose of Old Paint (Latex & Oil-Based)',
  description: 'Complete guide to paint disposal — PaintCare drop-off programs, drying latex paint, HHW facilities, donation options, and what can go in a dumpster.',
  datePublished: '2026-02-24',
  dateModified: '2026-02-24',
  author: { '@type': 'Organization', name: 'DumpsterListing', url: 'https://dumpsterlisting.com' },
  publisher: { '@type': 'Organization', name: 'DumpsterListing', url: 'https://dumpsterlisting.com' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://dumpsterlisting.com/how-to-dispose-of-paint' },
}

export default function HowToDisposeOfPaintPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs crumbs={[
            { label: 'Home', href: '/' },
            { label: 'How to Dispose of Paint' },
          ]} />
          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900">
            How to Dispose of Old Paint (The Right Way)
          </h1>
          <p className="mt-3 max-w-3xl text-gray-600 leading-relaxed">
            Paint disposal depends on one critical factor: is it latex or oil-based? Latex paint can
            often go in the trash once dried. Oil-based paint is hazardous and requires proper
            disposal. Here's what to do with both — including free programs that make it easy.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-14">

        {/* Latex vs Oil-based explainer */}
        <div className="rounded-2xl border border-gray-200 overflow-hidden">
          <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-bold text-gray-900">Latex vs. Oil-Based Paint: Know the Difference First</h2>
            <p className="text-sm text-gray-600 mt-1">The type of paint determines your disposal options. Check your can's label.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="h-3 w-3 rounded-full bg-green-400 inline-block"></span>
                <h3 className="font-bold text-gray-900">Latex / Acrylic Paint</h3>
              </div>
              <p className="text-xs text-gray-500 mb-3">Label says: "Latex," "Acrylic," "Water cleanup," or "Water-based"</p>
              <ul className="space-y-2">
                {[
                  'Water-based — less toxic and less flammable',
                  'Can be dried and placed in regular trash (most states)',
                  'Accepted at PaintCare drop-off locations',
                  'Suitable for donation if still usable',
                  'Does NOT require HHW facility (though still accepted there)',
                ].map((item) => (
                  <li key={item} className="text-xs text-gray-700 flex items-start gap-1.5">
                    <span className="text-green-500 font-bold shrink-0">+</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="h-3 w-3 rounded-full bg-red-400 inline-block"></span>
                <h3 className="font-bold text-gray-900">Oil-Based Paint / Alkyd</h3>
              </div>
              <p className="text-xs text-gray-500 mb-3">Label says: "Oil-based," "Alkyd," "Solvent cleanup," or "Flammable"</p>
              <ul className="space-y-2">
                {[
                  'Solvent-based — classified as hazardous waste by the EPA',
                  'Never goes in trash as a liquid — even when dry, confirm locally',
                  'Must go to PaintCare, HHW facility, or licensed disposal',
                  'Never pour down drains, on soil, or in dumpsters',
                  'Thinners and brush cleaners are equally hazardous',
                ].map((item) => (
                  <li key={item} className="text-xs text-gray-700 flex items-start gap-1.5">
                    <span className="text-red-400 font-bold shrink-0">&#8722;</span> {item}
                  </li>
                ))}
              </ul>
            </div>
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

        {/* Dumpster rules for paint */}
        <section className="rounded-2xl border border-gray-200 bg-white p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Can You Put Paint in a Dumpster?</h2>
          <p className="text-sm text-gray-600 mb-5 leading-relaxed">
            The short answer: <strong>only if it's completely dry and empty cans.</strong> Liquid paint — latex or oil-based — is prohibited in roll-off dumpsters. Here's exactly what is and isn't allowed:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                allowed: true,
                rule: 'Completely empty, dry paint cans',
                detail: 'Cans that are 100% empty with no residual liquid — leave the lid off so haulers can verify.',
              },
              {
                allowed: true,
                rule: 'Dried latex paint in a can',
                detail: 'If latex paint is fully hardened and solid, it can go in a dumpster along with the can.',
              },
              {
                allowed: false,
                rule: 'Any liquid paint (latex or oil-based)',
                detail: 'Even a small amount of liquid paint makes the can a prohibited item. All rental companies ban this.',
              },
              {
                allowed: false,
                rule: 'Oil-based paint in any form',
                detail: 'Oil-based paint is hazardous waste. Even when dry, it should be verified with your local HHW program before going in regular waste stream.',
              },
              {
                allowed: false,
                rule: 'Paint thinners, solvents, or stains',
                detail: 'Flammable liquids are strictly prohibited in roll-off dumpsters. These must go to an HHW facility.',
              },
              {
                allowed: true,
                rule: 'Empty aerosol paint cans (fully depressurized)',
                detail: 'A fully empty aerosol can with the valve depressed may be accepted — confirm with your provider first.',
              },
            ].map((t) => (
              <div key={t.rule} className="flex gap-3">
                <div className={`h-6 w-6 rounded-full text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 ${t.allowed ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-600'}`}>
                  {t.allowed ? '✓' : '✕'}
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">{t.rule}</div>
                  <div className="text-xs text-gray-600 mt-0.5">{t.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quick decision guide */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-5">Quick Decision Guide by Paint Type & Situation</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">Situation</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">Best Option</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 hidden sm:table-cell">Cost</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { situation: 'Latex paint, small amount', best: 'Dry out + trash or PaintCare', cost: 'Free', note: 'Dry in thin layers; add kitty litter to speed up' },
                  { situation: 'Latex paint, large amount', best: 'PaintCare drop-off', cost: 'Free', note: 'Find location at paintcare.org — accepts up to 5-gal containers' },
                  { situation: 'Oil-based paint (any amount)', best: 'PaintCare or HHW facility', cost: 'Free', note: 'Never put liquid oil-based paint in trash or dumpster' },
                  { situation: 'Usable paint (sealed, not separated)', best: 'Donate to Habitat ReStore or Buy Nothing', cost: 'Free', note: 'Best environmental choice — paint gets used' },
                  { situation: 'Paint + renovation debris in dumpster', best: 'Empty/dry cans in dumpster, liquid to PaintCare', cost: 'Free for paint disposal', note: 'Liquid paint must be separated from dumpster load' },
                  { situation: 'Paint thinners and solvents', best: 'HHW facility only', cost: 'Free', note: 'Flammable — never in dumpster, trash, or drains' },
                ].map((row) => (
                  <tr key={row.situation} className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-800">{row.situation}</td>
                    <td className="px-4 py-3 text-green-700 font-semibold">{row.best}</td>
                    <td className="px-4 py-3 text-gray-700 font-semibold hidden sm:table-cell">{row.cost}</td>
                    <td className="px-4 py-3 text-gray-500 text-xs hidden md:table-cell">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* PaintCare states */}
        <section className="rounded-2xl border border-green-100 bg-green-50 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3">PaintCare: Is Your State Covered?</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            PaintCare currently operates in <strong>42 states plus Washington D.C.</strong> It is funded by a small consumer fee (usually $0.35–$1.60) added to each paint can at the point of sale — so if you've bought paint in a participating state, you've already paid into the system. Use the program to your advantage.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            To find your nearest drop-off, visit <strong>paintcare.org</strong> and enter your zip code. The locator shows hours, accepted materials, and distance. Drop-off stations are located inside participating stores at customer service or a dedicated kiosk — you don't need to speak with anyone.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            States not yet in PaintCare should use their county HHW facility. Search Earth911.com or call your county waste management office to find the nearest location and hours.
          </p>
        </section>

        {/* Related guides */}
        <section className="rounded-xl border border-gray-100 bg-gray-50 p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Related Guides</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: 'What Can You Put in a Dumpster?', href: '/what-can-you-put-in-a-dumpster', desc: 'Full allowed and prohibited items list' },
              { label: 'Dumpster Rental Cost Guide', href: '/dumpster-rental-cost', desc: 'Average prices by size and region' },
              { label: 'How to Dispose of Concrete', href: '/how-to-dispose-of-concrete', desc: 'Recycling centers vs. dumpster rental' },
              { label: 'How to Dispose of Electronics', href: '/how-to-dispose-of-electronics', desc: 'E-waste recycling and retailer programs' },
              { label: 'How to Dispose of a Mattress', href: '/how-to-dispose-of-mattress', desc: 'Free programs, retailer take-back, and dumpsters' },
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

        <section className="rounded-2xl bg-gradient-to-r from-green-700 to-green-700 p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Doing a Renovation? Need a Dumpster for the Debris?</h2>
          <p className="text-green-100 mb-6 max-w-xl mx-auto">Drywall, wood, old fixtures, and empty paint cans — a roll-off dumpster handles it all. Find local companies and get free quotes.</p>
          <Link href="/dumpster-rental-near-me"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 font-bold text-green-700 hover:bg-green-50 transition">
            Find Local Companies <ArrowRight className="h-5 w-5" />
          </Link>
        </section>
      </div>
    </>
  )
}
