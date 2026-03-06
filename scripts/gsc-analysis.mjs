import { google } from 'googleapis'

const KEY_PATH = '/Users/arjav/Downloads/gsc-dumpster-48af5ab27bae.json'
const SITE_URL = 'sc-domain:dumpsterlisting.com'

const auth = new google.auth.GoogleAuth({
  keyFile: KEY_PATH,
  scopes: ['https://www.googleapis.com/auth/webmasters.readonly'],
})

const searchconsole = google.searchconsole({ version: 'v1', auth })

// Helper to format date as YYYY-MM-DD
function dateStr(d) {
  return d.toISOString().slice(0, 10)
}

// Get dates for comparison
const today = new Date('2026-03-06')
const d7ago = new Date(today); d7ago.setDate(d7ago.getDate() - 10) // GSC data has ~3 day lag, so -10 to -3
const d3ago = new Date(today); d3ago.setDate(d3ago.getDate() - 3)
const d14ago = new Date(today); d14ago.setDate(d14ago.getDate() - 17)
const d7agoEnd = new Date(today); d7agoEnd.setDate(d7agoEnd.getDate() - 10)

async function queryGSC(startDate, endDate, dimensions, rowLimit = 25, dimensionFilterGroups) {
  const body = {
    startDate: dateStr(startDate),
    endDate: dateStr(endDate),
    dimensions,
    rowLimit,
  }
  if (dimensionFilterGroups) body.dimensionFilterGroups = dimensionFilterGroups

  const res = await searchconsole.searchanalytics.query({
    siteUrl: SITE_URL,
    requestBody: body,
  })
  return res.data.rows || []
}

async function main() {
  console.log('=== GSC Live Analysis for dumpsterlisting.com ===\n')

  // 1. Overall performance last 7 days vs previous 7 days
  const recent = dateStr(d7ago)
  const recentEnd = dateStr(d3ago)
  const prevStart = new Date(d7ago); prevStart.setDate(prevStart.getDate() - 7)
  const prevEnd = new Date(d7ago); prevEnd.setDate(prevEnd.getDate() - 1)

  console.log(`Recent period: ${dateStr(d7ago)} to ${dateStr(d3ago)}`)
  console.log(`Previous period: ${dateStr(prevStart)} to ${dateStr(prevEnd)}\n`)

  // 2. Top queries recent period
  console.log('--- TOP 25 QUERIES (recent 7 days) ---')
  const topQueries = await queryGSC(d7ago, d3ago, ['query'], 25)
  for (const row of topQueries) {
    console.log(`  ${row.keys[0].padEnd(50)} clicks=${row.clicks} imp=${row.impressions} pos=${row.position.toFixed(1)}`)
  }

  // 3. Top queries previous period for comparison
  console.log('\n--- TOP 25 QUERIES (previous 7 days) ---')
  const prevQueries = await queryGSC(prevStart, prevEnd, ['query'], 25)
  for (const row of prevQueries) {
    console.log(`  ${row.keys[0].padEnd(50)} clicks=${row.clicks} imp=${row.impressions} pos=${row.position.toFixed(1)}`)
  }

  // 4. Top pages
  console.log('\n--- TOP 25 PAGES (recent 7 days) ---')
  const topPages = await queryGSC(d7ago, d3ago, ['page'], 25)
  for (const row of topPages) {
    const url = row.keys[0].replace('https://dumpsterlisting.com', '')
    console.log(`  ${(url || '/').padEnd(70)} clicks=${row.clicks} imp=${row.impressions} pos=${row.position.toFixed(1)}`)
  }

  // 5. Daily trend for last 14 days
  console.log('\n--- DAILY TREND (last 14 available days) ---')
  const dailyTrend = await queryGSC(d14ago, d3ago, ['date'], 50)
  for (const row of dailyTrend) {
    const bar = '|'.repeat(Math.min(Math.round(row.impressions / 50), 80))
    console.log(`  ${row.keys[0]}  clicks=${String(row.clicks).padStart(3)} imp=${String(row.impressions).padStart(5)} pos=${row.position.toFixed(1).padStart(5)}  ${bar}`)
  }

  // 6. Device breakdown
  console.log('\n--- DEVICE BREAKDOWN (recent 7 days) ---')
  const devices = await queryGSC(d7ago, d3ago, ['device'], 10)
  for (const row of devices) {
    console.log(`  ${row.keys[0].padEnd(15)} clicks=${row.clicks} imp=${row.impressions} ctr=${(row.ctr*100).toFixed(1)}% pos=${row.position.toFixed(1)}`)
  }

  // 7. Country breakdown
  console.log('\n--- TOP COUNTRIES (recent 7 days) ---')
  const countries = await queryGSC(d7ago, d3ago, ['country'], 10)
  for (const row of countries) {
    console.log(`  ${row.keys[0].padEnd(10)} clicks=${row.clicks} imp=${row.impressions} pos=${row.position.toFixed(1)}`)
  }

  // 8. Specific keyword tracking
  console.log('\n--- KEY KEYWORD TRACKING (daily, "dumpster rental") ---')
  const kwDaily = await queryGSC(d14ago, d3ago, ['date'], 50, [{
    filters: [{ dimension: 'query', expression: 'dumpster rental', operator: 'contains' }]
  }])
  for (const row of kwDaily) {
    console.log(`  ${row.keys[0]}  clicks=${String(row.clicks).padStart(3)} imp=${String(row.impressions).padStart(5)} pos=${row.position.toFixed(1).padStart(5)}`)
  }
}

main().catch(err => {
  console.error('Error:', err.message)
  if (err.message.includes('403') || err.message.includes('forbidden')) {
    console.error('\nThe service account needs to be added as a user in GSC.')
    console.error('Go to: https://search.google.com/search-console/users')
    console.error('Add: gsc-dumpster@gsc-dumpster.iam.gserviceaccount.com as Full user')
  }
})
