#!/usr/bin/env node
/**
 * IndexNow URL Submission Script
 *
 * Submits all site URLs to Bing (and other IndexNow-compatible engines) for
 * fast indexing. Run this after deploying new pages or content updates.
 *
 * Usage:
 *   node scripts/submit-indexnow.js
 *
 * IndexNow key file must be accessible at:
 *   https://dumpsterlisting.com/2f226999bbca4982b1bb7ceb6340cc74.txt
 */

const SITE_URL = 'https://dumpsterlisting.com'
const INDEX_NOW_KEY = '2f226999bbca4982b1bb7ceb6340cc74'
const INDEX_NOW_ENDPOINT = 'https://api.indexnow.org/IndexNow'

// All URLs to submit — update this list when new pages are added
const URLS = [
  // Core pages
  `${SITE_URL}/`,
  `${SITE_URL}/dumpster-rental`,
  `${SITE_URL}/dumpster-sizes`,
  `${SITE_URL}/dumpster-rental-cost`,
  `${SITE_URL}/how-much-does-dumpster-rental-cost`,
  `${SITE_URL}/dumpster-rental-near-me`,
  `${SITE_URL}/small-dumpster-rental`,
  `${SITE_URL}/large-dumpster-rental`,
  `${SITE_URL}/cheap-dumpster-rental`,
  `${SITE_URL}/list-your-business`,

  // Size pages
  `${SITE_URL}/dumpster-sizes/10-yard`,
  `${SITE_URL}/dumpster-sizes/15-yard`,
  `${SITE_URL}/dumpster-sizes/20-yard`,
  `${SITE_URL}/dumpster-sizes/30-yard`,
  `${SITE_URL}/dumpster-sizes/40-yard`,

  // Category pages
  `${SITE_URL}/dumpster-rental/construction`,
  `${SITE_URL}/dumpster-rental/roll-off`,
  `${SITE_URL}/dumpster-rental/residential`,
  `${SITE_URL}/dumpster-rental/commercial`,
  `${SITE_URL}/dumpster-rental/concrete`,
  `${SITE_URL}/dumpster-rental/yard-waste`,
  `${SITE_URL}/dumpster-rental/roofing`,

  // Calculators
  `${SITE_URL}/dumpster-size-estimator`,
  `${SITE_URL}/cubic-yard-calculator`,
  `${SITE_URL}/concrete-weight-calculator`,
  `${SITE_URL}/drywall-weight-calculator`,
  `${SITE_URL}/dumpster-weight-limit-calculator`,

  // Guides & comparisons
  `${SITE_URL}/dumpster-rental-vs-junk-removal`,
  `${SITE_URL}/what-can-you-put-in-a-dumpster`,
  `${SITE_URL}/how-to-dispose-of-furniture`,
  `${SITE_URL}/how-to-dispose-of-concrete`,
  `${SITE_URL}/how-to-dispose-of-yard-waste`,
  `${SITE_URL}/20-yard-dumpster-vs-30-yard-dumpster`,
  `${SITE_URL}/roll-off-dumpster-sizes`,
  `${SITE_URL}/dumpster-rental-permit`,
  `${SITE_URL}/how-long-can-you-keep-a-rental-dumpster`,
]

async function submitToIndexNow(urls) {
  const body = {
    host: 'dumpsterlisting.com',
    key: INDEX_NOW_KEY,
    keyLocation: `${SITE_URL}/${INDEX_NOW_KEY}.txt`,
    urlList: urls,
  }

  console.log(`\nSubmitting ${urls.length} URLs to IndexNow (Bing)...`)

  const response = await fetch(INDEX_NOW_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(body),
  })

  if (response.ok) {
    console.log(`✅ Success! Status: ${response.status}`)
    console.log('Bing will crawl and index these URLs shortly.')
    console.log('Other IndexNow-compatible engines (Yandex, Naver, Seznam) also receive the submission automatically.')
  } else {
    const text = await response.text()
    console.error(`❌ Error: ${response.status} ${response.statusText}`)
    console.error(text)
    process.exit(1)
  }
}

// Submit in batches of 100 (IndexNow limit per request)
async function main() {
  const batchSize = 100
  for (let i = 0; i < URLS.length; i += batchSize) {
    const batch = URLS.slice(i, i + batchSize)
    await submitToIndexNow(batch)
  }
  console.log(`\nDone. ${URLS.length} URLs submitted.`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
