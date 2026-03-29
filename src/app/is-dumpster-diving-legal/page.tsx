import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, XCircle, AlertTriangle, ArrowRight } from 'lucide-react'
import Breadcrumbs from '@/components/Breadcrumbs'
import AuthorByline from '@/components/AuthorByline'

export const metadata: Metadata = {
  title: 'Is Dumpster Diving Legal? State Laws Explained (2026)',
  description:
    'Is dumpster diving legal? Federal law says yes — but state and local laws vary. Learn what the 1988 Supreme Court ruling means, which states restrict it, and how to stay legal.',
  alternates: { canonical: '/is-dumpster-diving-legal' },
  openGraph: {
    title: 'Is Dumpster Diving Legal? State Laws Explained (2026)',
    description:
      'Dumpster diving is legal at the federal level, but local laws vary. Learn when it is illegal, which states restrict it, and how to avoid getting in trouble.',
  },
}

const STATE_LAWS = [
  {
    state: 'Texas',
    status: 'Generally Legal',
    legal: true,
    detail:
      'Dumpster diving is generally legal in Texas under state law. However, several cities — including Houston and Dallas — have local ordinances that restrict or prohibit it. Always check your specific city\'s municipal code and stay off private property.',
  },
  {
    state: 'California',
    status: 'Legal in Most Cities',
    legal: true,
    detail:
      'California follows the California v. Greenwood precedent closely, and diving is legal in most jurisdictions. Los Angeles and San Francisco have generally permissive policies, though going through dumpsters on private property without permission is considered trespassing.',
  },
  {
    state: 'Florida',
    status: 'Varies by City',
    legal: null,
    detail:
      'Florida has no statewide law banning dumpster diving, but enforcement is inconsistent. Miami, Orlando, and Tampa each have their own local ordinances. Some counties treat it as littering or scavenging if debris is left behind. Confirm your city\'s rules before diving.',
  },
  {
    state: 'New York',
    status: 'Legal Unless Trespassing',
    legal: true,
    detail:
      'New York state law does not prohibit dumpster diving on its own. New York City specifically allows it in some contexts, though diving behind locked dumpsters or in fenced areas constitutes trespassing. Keep to publicly accessible areas to stay clear of legal issues.',
  },
  {
    state: 'Ohio',
    status: 'Generally Legal',
    legal: true,
    detail:
      'Ohio does not have a statewide ban. Most municipalities treat trash set out for collection as abandoned property under the Greenwood precedent. Private property remains the main legal concern — diving behind a business in a private lot can trigger a trespassing charge.',
  },
  {
    state: 'Illinois',
    status: 'Generally Legal',
    legal: true,
    detail:
      'Illinois follows federal precedent and does not specifically criminalize dumpster diving. Chicago has historically tolerated it, though officers retain discretion to issue citations under disorderly conduct statutes. Avoid diving in areas with posted No Trespassing signs.',
  },
  {
    state: 'New Jersey',
    status: 'Illegal Statewide',
    legal: false,
    detail:
      'New Jersey is one of the few states with laws that effectively make dumpster diving illegal statewide. Scavenging ordinances and solid waste regulations prohibit removing items from trash containers, with fines ranging from $100 to $1,000 depending on the municipality.',
  },
  {
    state: 'Alabama',
    status: 'Restricted / Illegal in Many Cities',
    legal: false,
    detail:
      'Alabama has several cities and counties that explicitly ban dumpster diving through local ordinances. Violations are typically misdemeanor-level offenses. State-level theft statutes have also been applied to dumpster diving in some cases, particularly involving retail dumpsters.',
  },
]

const ILLEGAL_SCENARIOS = [
  {
    scenario: 'Private property without permission',
    icon: 'x',
    explanation:
      'If a dumpster is located on private property — behind a store, in a gated community, or in a business parking lot — entering that property to access the dumpster is trespassing, regardless of whether the trash itself is "abandoned." Trespassing charges carry real criminal penalties in most states.',
  },
  {
    scenario: 'Locked or secured dumpsters',
    icon: 'x',
    explanation:
      'A locked dumpster signals that the owner has not abandoned the contents and still claims ownership. Breaking or tampering with a lock to access a dumpster can be charged as breaking and entering or even burglary in some jurisdictions. Never force open a locked container.',
  },
  {
    scenario: 'Fenced or gated areas',
    icon: 'x',
    explanation:
      'A fence or gate around a dumpster area is a clear legal boundary. Climbing over or cutting through a fence to reach a dumpster negates any "abandoned property" argument and constitutes trespassing or more serious property crimes depending on the circumstances.',
  },
  {
    scenario: 'Areas with No Trespassing signs',
    icon: 'x',
    explanation:
      'Posted signage removes any ambiguity about access rights. If a property owner has posted No Trespassing signs near or around a dumpster area, accessing that area exposes you to criminal trespassing charges, even if the dumpster is technically unlocked and accessible.',
  },
  {
    scenario: 'Cities with local anti-scavenging ordinances',
    icon: 'x',
    explanation:
      'Hundreds of U.S. cities have enacted local ordinances specifically targeting scavenging and dumpster diving, particularly around recycling collection. These laws often apply even on public property. Cities like New York, Los Angeles, and Chicago have had such ordinances at various times — check your local municipal code.',
  },
  {
    scenario: 'Medical, financial, or personal data waste',
    icon: 'x',
    explanation:
      'Accessing discarded documents containing personal, financial, or medical information can trigger federal privacy laws including HIPAA and FACTA, regardless of whether the diving itself is legal in your location. This applies particularly to dumpsters behind hospitals, banks, or professional offices.',
  },
]

const LEGAL_TIPS = [
  {
    tip: 'Ask for permission first',
    detail:
      'The simplest way to eliminate legal risk is to ask the property owner or business manager for permission before accessing their dumpster. Many businesses are happy to allow it — they get fewer items in the bin and you get no legal exposure. A simple ask takes 30 seconds.',
  },
  {
    tip: 'Stick to public or curbside locations',
    detail:
      'Trash placed at the curb for municipal collection is the clearest-cut legal scenario under California v. Greenwood. Once garbage is placed for collection on a public street, it is generally considered abandoned property. Stay on public sidewalks and roadways rather than entering private lots.',
  },
  {
    tip: 'Never open locked containers',
    detail:
      'A lock is a legal signal that the property owner has not abandoned the contents. Do not attempt to open, force, or bypass any locked dumpster or enclosure. This one rule eliminates most of the serious criminal exposure that dumpster divers face.',
  },
  {
    tip: 'Check your local municipal code before you go',
    detail:
      'Most city and county codes are available online. Search for your city name plus "scavenging ordinance" or "solid waste ordinance" to find relevant regulations. This 10-minute research step can save you from an unexpected citation or arrest.',
  },
  {
    tip: 'Leave the area clean',
    detail:
      'Even where dumpster diving is legal, leaving debris scattered around the dumpster can result in littering citations. Take only what you want, replace the lid, and leave the area in the same condition you found it. This also reduces complaints that lead to stricter local enforcement.',
  },
  {
    tip: 'Go during daylight hours',
    detail:
      'Dumpster diving at night on or near private property dramatically increases your risk of a trespassing charge or police encounter. Daytime activity is more transparent, less suspicious to property owners, and less likely to result in a call to law enforcement.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is dumpster diving legal in the US?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'At the federal level, yes. The 1988 Supreme Court ruling in California v. Greenwood established that trash placed in a publicly accessible location carries no reasonable expectation of privacy. However, this federal precedent does not override state laws, local ordinances, or trespassing statutes. Dumpster diving is illegal in New Jersey and restricted in many cities across the country. Always verify your local laws before diving.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you get arrested for dumpster diving?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. You can be arrested for dumpster diving if you are on private property without permission (trespassing), in a city with a local anti-scavenging ordinance, opening a locked or secured container (breaking and entering), or in a state like New Jersey where it is restricted statewide. Even where diving is legal, police may issue citations under disorderly conduct or littering statutes if you leave a mess.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is dumpster diving behind stores legal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Usually not without permission. Most retail store dumpsters are located in private parking lots or behind the store on private property. Entering that property to access the dumpster constitutes trespassing regardless of whether the trash is technically abandoned. Some stores post explicit No Trespassing signs around their dumpster areas. The safest approach is to ask the store manager for written permission before accessing their dumpsters.',
      },
    },
    {
      '@type': 'Question',
      name: 'What states is dumpster diving illegal in?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'New Jersey is the most notable state with broad restrictions on dumpster diving through statewide scavenging and solid waste ordinances. Alabama has numerous cities and counties that explicitly prohibit it. Many other states do not ban it outright but have local ordinances that restrict it in specific cities or counties. Most states default to the federal California v. Greenwood standard but leave enforcement to municipalities.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it illegal to dumpster dive at night?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The time of day does not change the underlying legal status of dumpster diving in your area. However, nighttime diving near private property significantly increases the practical risk of a trespassing charge or police encounter. Property owners and businesses are more likely to call law enforcement when they spot someone near their dumpster at night. In cities with anti-loitering ordinances, nighttime activity can also draw citations unrelated to the diving itself.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can businesses legally stop you from dumpster diving?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Businesses have several legal tools to prevent dumpster diving on their property. They can post No Trespassing signs, which makes any access criminal trespassing. They can use locked dumpster enclosures, compactors, or locked lids. They can also request trespass warnings from local police, which allows officers to arrest anyone who returns. If a business has taken any of these steps, accessing their dumpster is illegal regardless of the general legal status of dumpster diving in your area.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Is Dumpster Diving Legal? State Laws Explained (2026)',
  description:
    'Is dumpster diving legal? Federal law says yes — but state and local laws vary. Learn what the 1988 Supreme Court ruling means, which states restrict it, and how to stay legal.',
  datePublished: '2026-03-29',
  dateModified: '2026-03-29',
  author: { '@type': 'Organization', name: 'DumpsterListing', url: 'https://dumpsterlisting.com' },
  publisher: { '@type': 'Organization', name: 'DumpsterListing', url: 'https://dumpsterlisting.com' },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://dumpsterlisting.com/is-dumpster-diving-legal',
  },
}

export default function IsDumpsterDivingLegalPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs
            crumbs={[
              { label: 'Home', href: '/' },
              { label: 'Dumpster Guides', href: '/dumpster-rental-near-me' },
              { label: 'Is Dumpster Diving Legal?' },
            ]}
          />
          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900">
            Is Dumpster Diving Legal? What You Need to Know
          </h1>
          <p className="mt-3 max-w-3xl text-gray-600 leading-relaxed">
            Dumpster diving is <strong>legal at the federal level</strong> under a 1988 Supreme Court
            ruling — but that is only part of the story. State laws, city ordinances, and trespassing
            statutes create a patchwork of rules that vary dramatically by location. This guide breaks
            down exactly when dumpster diving is legal, when it is not, and what the law says in the
            most-searched states.
          </p>
          <AuthorByline updatedDate="March 2026" readTimeMin={9} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
          <div className="xl:col-span-2 space-y-12">

            {/* Section 1: Federal Law */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Federal Law on Dumpster Diving
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                The definitive federal precedent on dumpster diving comes from the 1988 U.S. Supreme Court
                case <em>California v. Greenwood</em>. In that case, the Court ruled that a person has no
                reasonable expectation of privacy in trash left for collection in an area accessible to the
                public. Police had searched Greenwood&apos;s trash bags without a warrant and found evidence
                of drug activity. The Court upheld the search, establishing that trash placed in a publicly
                accessible location is fair game — not just for law enforcement, but for anyone.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                The core logic of the ruling is straightforward: when you place something in the trash and
                set it out for collection, you are voluntarily exposing it to the public. You cannot
                simultaneously discard something and retain an ownership interest in it. This principle
                applies to anyone who wants to sift through your discarded items, not just police officers
                with investigative purposes.
              </p>
              <p className="text-gray-600 leading-relaxed">
                It is critical to understand what this ruling does and does not cover. It establishes a
                baseline of federal constitutional law — specifically about the Fourth Amendment&apos;s
                protection against unreasonable searches. It does <strong>not</strong> preempt state laws,
                local ordinances, or trespassing statutes. States and municipalities are free to restrict
                dumpster diving even where the federal baseline would allow it.
              </p>
            </section>

            {/* Section 2: States That Restrict */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                State Laws That Restrict Dumpster Diving
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                While most states do not have explicit statewide bans on dumpster diving, a handful have
                enacted solid waste or scavenging regulations that effectively make it illegal — and many
                more have cities with local ordinances that restrict the practice. The enforcement landscape
                is highly inconsistent: two cities in the same state may have completely different rules.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                <strong>New Jersey</strong> is the clearest example of a state with broad restrictions.
                New Jersey&apos;s solid waste laws and municipal anti-scavenging ordinances make it illegal
                to remove items from trash containers throughout much of the state. Violations can result in
                fines ranging from $100 to $1,000 or more. The law is taken seriously enough that enforcement
                actions are not uncommon.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                <strong>Alabama</strong> has numerous cities and counties with explicit prohibitions.
                In some Alabama jurisdictions, dumpster diving has been prosecuted under theft statutes,
                particularly when the diving involves retail store dumpsters. The argument is that discarded
                merchandise still belongs to the store until it is collected, a position that courts have
                occasionally upheld.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong>Florida</strong> presents a more complicated picture. There is no statewide ban,
                but enforcement varies enormously by city and county. Miami, Tampa, and Orlando each have
                their own local approaches, and some counties have enacted scavenging ordinances tied to
                recycling programs. Leaving debris behind after diving can result in littering citations
                in many Florida jurisdictions.
              </p>
            </section>

            {/* Section 3: When Is It Illegal */}
            <section className="rounded-xl border border-red-100 bg-red-50 p-6">
              <div className="flex items-center gap-2 mb-3">
                <XCircle className="h-5 w-5 text-red-600" />
                <h2 className="text-2xl font-bold text-gray-900">When Is Dumpster Diving Illegal?</h2>
              </div>
              <p className="text-gray-600 mb-5 text-sm leading-relaxed">
                Even in states where dumpster diving is broadly legal, specific circumstances can make a
                given dive illegal. These scenarios apply almost universally regardless of your state.
              </p>
              <div className="space-y-4">
                {ILLEGAL_SCENARIOS.map((item) => (
                  <div key={item.scenario} className="flex gap-3">
                    <XCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm mb-1">{item.scenario}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{item.explanation}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 4: State-by-State */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Is Dumpster Diving Legal in Your State?
              </h2>
              <p className="text-gray-600 mb-5 leading-relaxed">
                Here is a breakdown of the legal status in the states where people search for this
                information most frequently. Keep in mind that city-level ordinances can override the
                state-level status — always verify local rules before diving in any new location.
              </p>
              <div className="space-y-3">
                {STATE_LAWS.map((s) => (
                  <div
                    key={s.state}
                    className="rounded-xl border border-gray-200 bg-white overflow-hidden"
                  >
                    <div
                      className={`flex items-center justify-between px-5 py-3 border-b border-gray-100 ${
                        s.legal === true
                          ? 'bg-green-50'
                          : s.legal === false
                          ? 'bg-red-50'
                          : 'bg-amber-50'
                      }`}
                    >
                      <h3 className="font-bold text-gray-900">{s.state}</h3>
                      <span
                        className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                          s.legal === true
                            ? 'bg-green-100 text-green-700'
                            : s.legal === false
                            ? 'bg-red-100 text-red-700'
                            : 'bg-amber-100 text-amber-700'
                        }`}
                      >
                        {s.status}
                      </span>
                    </div>
                    <div className="px-5 py-3">
                      <p className="text-sm text-gray-600 leading-relaxed">{s.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-gray-400 bg-gray-50 rounded-lg p-3 border border-gray-200">
                Legal status reflects general state law as of 2026. Local city and county ordinances may
                differ. This is not legal advice — consult your local municipal code or an attorney for
                guidance specific to your situation.
              </p>
            </section>

            {/* Section 5: Tips to Stay Legal */}
            <section className="rounded-xl border border-green-200 bg-green-50 p-6">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle className="h-5 w-5 text-green-700" />
                <h2 className="text-2xl font-bold text-gray-900">
                  Tips to Stay Legal While Dumpster Diving
                </h2>
              </div>
              <p className="text-gray-600 mb-5 text-sm leading-relaxed">
                Following these guidelines will not guarantee zero risk — local ordinances vary too widely
                for any universal ruleset — but they eliminate the most common causes of legal trouble for
                dumpster divers.
              </p>
              <ol className="space-y-4">
                {LEGAL_TIPS.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <div className="flex-shrink-0 h-7 w-7 rounded-full bg-green-700 text-white font-bold text-xs flex items-center justify-center">
                      {i + 1}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{item.tip}</p>
                      <p className="text-sm text-gray-600 mt-0.5 leading-relaxed">{item.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            {/* Section 6: FAQ */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-5">
                Dumpster Diving Laws — Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faqSchema.mainEntity.map((faq) => (
                  <div
                    key={faq.name}
                    className="rounded-xl border border-gray-200 bg-white p-5"
                  >
                    <h3 className="font-semibold text-gray-900 mb-2">{faq.name}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{faq.acceptedAnswer.text}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA Section */}
            <section className="rounded-xl border border-green-200 bg-green-50 p-6">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="h-5 w-5 text-green-700" />
                <h2 className="text-xl font-bold text-gray-900">
                  Need a Dumpster? Here&apos;s How to Rent One Legally
                </h2>
              </div>
              <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                If you are looking for a legitimate way to dispose of large volumes of junk or debris, renting
                a dumpster is the hassle-free alternative. A standard 10-yard bin holds the equivalent of
                about 3 pickup truck loads and starts at $200–$350 delivered to your door. No trespassing
                required.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/dumpster-rental-near-me"
                  className="flex-1 rounded-lg bg-green-700 px-5 py-3 text-center font-bold text-white hover:bg-green-800 transition"
                >
                  Find Dumpster Rental Near Me
                </Link>
                <Link
                  href="/dumpster-rental-cost"
                  className="flex-1 rounded-lg border border-green-600 px-5 py-3 text-center font-semibold text-green-700 hover:bg-green-50 transition"
                >
                  See Dumpster Rental Prices
                </Link>
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <aside className="space-y-5">

            {/* Quick answer card */}
            <div className="rounded-xl border border-blue-100 bg-blue-50 p-5">
              <h3 className="font-bold text-gray-900 text-base mb-3">Quick Answer</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    <strong>Federal law:</strong> Legal (California v. Greenwood, 1988)
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <XCircle className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    <strong>Private property:</strong> Illegal (trespassing)
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <XCircle className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    <strong>Locked dumpsters:</strong> Illegal (breaking &amp; entering)
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    <strong>Local ordinances:</strong> Vary widely by city
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <XCircle className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    <strong>New Jersey:</strong> Restricted statewide
                  </span>
                </div>
              </div>
            </div>

            {/* State status quick reference */}
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <h3 className="font-bold text-gray-900 mb-3">State Status at a Glance</h3>
              <div className="space-y-2 text-sm">
                {STATE_LAWS.map((s) => (
                  <div key={s.state} className="flex items-center justify-between">
                    <span className="text-gray-700">{s.state}</span>
                    <span
                      className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                        s.legal === true
                          ? 'bg-green-100 text-green-700'
                          : s.legal === false
                          ? 'bg-red-100 text-red-700'
                          : 'bg-amber-100 text-amber-700'
                      }`}
                    >
                      {s.legal === true ? 'Legal' : s.legal === false ? 'Restricted' : 'Varies'}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Related Guides */}
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <h3 className="font-bold text-gray-900 mb-3">Related Guides</h3>
              <div className="space-y-2 text-sm">
                {[
                  { label: 'Dumpster Rental Near Me', href: '/dumpster-rental-near-me' },
                  { label: 'What Can You Put in a Dumpster?', href: '/what-can-you-put-in-a-dumpster' },
                  { label: 'Dumpster Rental Permit Guide', href: '/dumpster-rental-permit' },
                  { label: 'Dumpster Rental Cost', href: '/dumpster-rental-cost' },
                  { label: 'How to Dispose of Furniture', href: '/how-to-dispose-of-furniture' },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center gap-2 text-gray-700 hover:text-green-700 transition group"
                  >
                    <ArrowRight className="h-3.5 w-3.5 text-gray-400 group-hover:text-green-500" />
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Disclaimer */}
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
              <p className="text-xs text-gray-500 leading-relaxed">
                <strong>Legal Disclaimer:</strong> This page is for informational purposes only and does
                not constitute legal advice. Laws change frequently and vary by jurisdiction. Always verify
                current local regulations and consult an attorney if you have specific legal questions about
                dumpster diving in your area.
              </p>
            </div>

          </aside>
        </div>
      </div>
    </>
  )
}
