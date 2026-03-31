import { NextResponse } from 'next/server'

const SITE_URL = 'https://dumpsterlisting.com'

const ARTICLES = [
  // Use-case guides
  { title: 'Construction Dumpster Rental Guide (2025)', url: '/dumpster-rental/construction', date: '2026-01-15', desc: 'Everything you need to know about renting a dumpster for construction and demolition projects.' },
  { title: 'Residential Dumpster Rental Guide (2025)', url: '/dumpster-rental/residential', date: '2026-01-15', desc: 'How to rent a dumpster for home cleanouts, renovations, and residential projects.' },
  { title: 'Roll-Off Dumpster Rental Guide (2025)', url: '/dumpster-rental/roll-off', date: '2026-01-15', desc: 'Complete guide to roll-off dumpster rentals — sizes, pricing, and how to book.' },
  { title: 'Commercial Dumpster Rental Guide (2025)', url: '/dumpster-rental/commercial', date: '2026-01-20', desc: 'Dumpster rental for commercial projects, businesses, and large-scale debris removal.' },
  { title: 'Concrete Dumpster Rental Guide (2025)', url: '/dumpster-rental/concrete', date: '2026-01-20', desc: 'How to rent a dumpster for concrete removal — weight limits, sizing, and local pricing.' },
  { title: 'Roofing Dumpster Rental Guide (2025)', url: '/dumpster-rental/roofing', date: '2026-01-20', desc: 'Rent a dumpster for roofing tear-offs and shingle disposal. Sizing and pricing guide.' },
  { title: 'Yard Waste Dumpster Rental Guide (2025)', url: '/dumpster-rental/yard-waste', date: '2026-01-20', desc: 'Dumpster rental for landscaping debris, yard waste, and organic material disposal.' },
  // Cost & pricing
  { title: 'How Much Does Dumpster Rental Cost? (2025)', url: '/dumpster-rental-cost', date: '2026-02-01', desc: 'Average dumpster rental costs by size — 10, 20, 30, and 40-yard containers.' },
  { title: 'How Much Does Dumpster Rental Cost Near You?', url: '/how-much-does-dumpster-rental-cost', date: '2026-02-01', desc: 'Full pricing breakdown including delivery fees, weight limits, and overage charges.' },
  { title: 'Dumpster Rental Cost by City', url: '/dumpster-rental-cost-by-city', date: '2026-02-05', desc: 'Compare dumpster rental prices across US cities — see the most and least expensive markets.' },
  // Guides & how-tos
  { title: 'Do You Need a Permit for a Dumpster? (2025 Guide)', url: '/dumpster-rental-permit', date: '2026-02-24', desc: 'When you need a permit, how to get one, and what it costs in your city.' },
  { title: 'Dumpster Rental Industry Statistics (2026)', url: '/dumpster-rental-statistics', date: '2026-03-01', desc: 'Key market size, pricing, and demand statistics for the U.S. dumpster rental industry.' },
  { title: 'Dumpster Rental for Contractors & Construction Projects', url: '/dumpster-rental-for-contractors', date: '2026-03-01', desc: 'How contractors can set up commercial accounts, negotiate rates, and manage job site waste.' },
  { title: 'What Can You Put in a Dumpster?', url: '/what-can-you-put-in-a-dumpster', date: '2026-02-10', desc: 'Allowed and prohibited items in roll-off dumpsters — a complete reference guide.' },
  { title: 'Dumpster Rental vs Junk Removal — Which Is Cheaper?', url: '/dumpster-rental-vs-junk-removal', date: '2026-02-10', desc: 'Side-by-side cost and use-case comparison of dumpster rental vs junk removal services.' },
  { title: 'How Long Can You Keep a Rental Dumpster?', url: '/how-long-can-you-keep-a-rental-dumpster', date: '2026-02-12', desc: 'Standard rental periods, extension fees, and how to avoid overage charges.' },
  { title: 'How to Choose a Dumpster Rental Company', url: '/how-to-choose-a-dumpster-rental-company', date: '2026-02-15', desc: '8 things to check before booking a dumpster rental company.' },
  { title: 'Dumpster Rental Checklist', url: '/dumpster-rental-checklist', date: '2026-02-15', desc: 'Everything you need to do before, during, and after your dumpster rental.' },
  { title: 'Is Dumpster Diving Legal?', url: '/is-dumpster-diving-legal', date: '2026-02-18', desc: 'State-by-state guide to dumpster diving laws in the United States.' },
  // Disposal guides
  { title: 'How to Dispose of Concrete', url: '/how-to-dispose-of-concrete', date: '2026-02-20', desc: 'Concrete disposal options — dumpster, recycling centers, and hauler services.' },
  { title: 'How to Dispose of Yard Waste', url: '/how-to-dispose-of-yard-waste', date: '2026-02-20', desc: 'How to properly dispose of grass clippings, branches, and organic debris.' },
  { title: 'How to Dispose of Furniture', url: '/how-to-dispose-of-furniture', date: '2026-02-20', desc: 'Options for furniture disposal — donation, junk removal, dumpster rental, and more.' },
  { title: 'How to Dispose of Electronics', url: '/how-to-dispose-of-electronics', date: '2026-02-22', desc: 'E-waste disposal options and what electronics are banned from dumpsters.' },
  { title: 'How to Dispose of Paint', url: '/how-to-dispose-of-paint', date: '2026-02-22', desc: 'Safe and legal paint disposal — what to do with leftover latex and oil-based paint.' },
  { title: 'How to Dispose of a Mattress', url: '/how-to-dispose-of-mattress', date: '2026-02-22', desc: 'Mattress disposal options including recycling, donation, and dumpster rental.' },
  // Tools
  { title: 'Dumpster Size Estimator', url: '/dumpster-size-estimator', date: '2026-01-10', desc: 'Free tool to find the right dumpster size for your project.' },
  { title: 'Concrete Weight Calculator', url: '/concrete-weight-calculator', date: '2026-01-10', desc: 'Calculate concrete weight by dimensions to find the right dumpster size.' },
  { title: 'Cubic Yard Calculator', url: '/cubic-yard-calculator', date: '2026-01-10', desc: 'Convert dimensions to cubic yards and get a dumpster size recommendation.' },
  { title: 'Drywall Weight Calculator', url: '/drywall-weight-calculator', date: '2026-01-10', desc: 'Estimate drywall removal weight by room dimensions.' },
  { title: 'Dumpster Weight Limit Calculator', url: '/dumpster-weight-limit-calculator', date: '2026-02-24', desc: 'Check if your debris load will exceed your dumpster weight limit.' },
]

function escapeXml(str: string) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

export async function GET() {
  const items = ARTICLES.map(({ title, url, date, desc }) => `
    <item>
      <title>${escapeXml(title)}</title>
      <link>${SITE_URL}${url}</link>
      <guid isPermaLink="true">${SITE_URL}${url}</guid>
      <description>${escapeXml(desc)}</description>
      <pubDate>${new Date(date).toUTCString()}</pubDate>
    </item>`).join('')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>DumpsterListing — Dumpster Rental Guides &amp; Resources</title>
    <link>${SITE_URL}</link>
    <description>Guides, pricing data, and tools for dumpster rental in the United States.</description>
    <language>en-us</language>
    <copyright>© ${new Date().getFullYear()} DumpsterListing</copyright>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />
    <image>
      <url>${SITE_URL}/icon.png</url>
      <title>DumpsterListing</title>
      <link>${SITE_URL}</link>
    </image>${items}
  </channel>
</rss>`

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
