import { google } from 'googleapis'

const KEY_PATH = '/Users/arjav/Downloads/gsc-dumpster-48af5ab27bae.json'
const SITE_URL = 'sc-domain:dumpsterlisting.com'

const auth = new google.auth.GoogleAuth({
  keyFile: KEY_PATH,
  scopes: ['https://www.googleapis.com/auth/webmasters.readonly'],
})

const sc = google.searchconsole({ version: 'v1', auth })

// Last 30 days (GSC has ~3 day lag)
const end = new Date('2026-03-14')
const start = new Date('2026-03-06')

const { data } = await sc.searchanalytics.query({
  siteUrl: SITE_URL,
  requestBody: {
    startDate: start.toISOString().slice(0, 10),
    endDate: end.toISOString().slice(0, 10),
    dimensions: ['date'],
    rowLimit: 50,
  },
})

console.log('Date           | Impressions | Clicks | CTR    | Position')
console.log('---------------|-------------|--------|--------|--------')
for (const row of data.rows || []) {
  const d = row.keys[0]
  const imp = row.impressions
  const cl = row.clicks
  const ctr = (row.ctr * 100).toFixed(1) + '%'
  const pos = row.position.toFixed(1)
  console.log(`${d} | ${String(imp).padStart(11)} | ${String(cl).padStart(6)} | ${ctr.padStart(6)} | ${pos.padStart(6)}`)
}

// Also get top pages that lost impressions
console.log('\n\n--- Top Pages (last 7 days vs prior 7 days) ---')
const recent = await sc.searchanalytics.query({
  siteUrl: SITE_URL,
  requestBody: {
    startDate: '2026-03-04',
    endDate: '2026-03-11',
    dimensions: ['page'],
    rowLimit: 50,
  },
})
const prior = await sc.searchanalytics.query({
  siteUrl: SITE_URL,
  requestBody: {
    startDate: '2026-02-21',
    endDate: '2026-02-28',
    dimensions: ['page'],
    rowLimit: 50,
  },
})

const priorMap = {}
for (const r of prior.data.rows || []) priorMap[r.keys[0]] = r.impressions

const changes = (recent.data.rows || []).map(r => ({
  page: r.keys[0],
  now: r.impressions,
  before: priorMap[r.keys[0]] || 0,
  diff: r.impressions - (priorMap[r.keys[0]] || 0),
})).sort((a, b) => a.diff - b.diff)

console.log('\nBiggest drops:')
for (const c of changes.slice(0, 15)) {
  console.log(`  ${c.diff >= 0 ? '+' : ''}${c.diff} imp | now: ${c.now} | was: ${c.before} | ${c.page.replace('https://dumpsterlisting.com', '')}`)
}
console.log('\nBiggest gains:')
for (const c of changes.slice(-10).reverse()) {
  console.log(`  +${c.diff} imp | now: ${c.now} | was: ${c.before} | ${c.page.replace('https://dumpsterlisting.com', '')}`)
}
