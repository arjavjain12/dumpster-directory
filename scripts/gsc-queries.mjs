import { google } from 'googleapis'

const auth = new google.auth.GoogleAuth({
  keyFile: '/Users/arjav/Downloads/gsc-dumpster-48af5ab27bae.json',
  scopes: ['https://www.googleapis.com/auth/webmasters.readonly'],
})
const sc = google.searchconsole({ version: 'v1', auth })

const res = await sc.searchanalytics.query({
  siteUrl: 'sc-domain:dumpsterlisting.com',
  requestBody: {
    startDate: '2026-02-24',
    endDate: '2026-03-03',
    dimensions: ['query'],
    rowLimit: 1000,
  },
})

const rows = res.data.rows || []
const generic = rows
  .filter((r) => r.impressions >= 5 && !r.keys[0].includes('"') && !r.keys[0].includes('('))
  .sort((a, b) => b.impressions - a.impressions)

console.log('=== HIGH-IMPRESSION GENERIC QUERIES (5+ imp, 7-day) ===')
console.log('query\tclicks\timp\tpos\tctr')
for (const r of generic.slice(0, 100)) {
  console.log(
    [r.keys[0], r.clicks, r.impressions, r.position.toFixed(1), (r.ctr * 100).toFixed(1) + '%'].join('\t')
  )
}

// Striking distance queries: position 8-20 with decent impressions
console.log('\n=== STRIKING DISTANCE (pos 8-20, 10+ imp) ===')
const striking = generic.filter((r) => r.position >= 8 && r.position <= 20 && r.impressions >= 10)
  .sort((a, b) => b.impressions - a.impressions)
for (const r of striking) {
  console.log(
    [r.keys[0], r.clicks, r.impressions, r.position.toFixed(1), (r.ctr * 100).toFixed(1) + '%'].join('\t')
  )
}

// Low-hanging fruit: position 1-10 but low CTR
console.log('\n=== TOP 10 BUT LOW CTR (pos 1-10, 5+ imp) ===')
const lowCtr = generic.filter((r) => r.position <= 10 && r.impressions >= 5 && r.ctr < 0.05)
  .sort((a, b) => b.impressions - a.impressions)
for (const r of lowCtr) {
  console.log(
    [r.keys[0], r.clicks, r.impressions, r.position.toFixed(1), (r.ctr * 100).toFixed(1) + '%'].join('\t')
  )
}

// City-specific queries with high impressions
console.log('\n=== CITY-SPECIFIC QUERIES (10+ imp) ===')
const cityKw = ['houston', 'phoenix', 'austin', 'dallas', 'san antonio', 'philadelphia', 'san diego',
  'jacksonville', 'seattle', 'denver', 'indianapolis', 'miami', 'detroit', 'new york', 'chicago',
  'los angeles', 'louisville', 'lansing', 'honolulu', 'colorado springs', 'fort lauderdale', 'lakeland']
const cityQueries = generic.filter((r) => {
  const q = r.keys[0]
  return cityKw.some((c) => q.includes(c)) && r.impressions >= 3
}).sort((a, b) => b.impressions - a.impressions)
for (const r of cityQueries.slice(0, 50)) {
  console.log(
    [r.keys[0], r.clicks, r.impressions, r.position.toFixed(1), (r.ctr * 100).toFixed(1) + '%'].join('\t')
  )
}
