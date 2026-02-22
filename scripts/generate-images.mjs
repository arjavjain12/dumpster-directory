#!/usr/bin/env node
/**
 * Generate website images using Replicate google/nano-banana-pro
 */

import fs from 'fs'
import path from 'path'
import https from 'https'
import http from 'http'

const REPLICATE_API_TOKEN = process.env.REPLICATE_API_TOKEN
const MODEL = 'google/nano-banana-pro'
const OUTPUT_DIR = path.resolve(process.cwd(), 'public/images')

const IMAGES = [
  {
    filename: 'hero-dumpster-delivery.jpg',
    aspect_ratio: '16:9',
    prompt:
      'Professional roll-off dumpster truck delivering a large green dumpster to a clean suburban residential driveway, bright sunny day, American neighborhood with green lawn and trees, photorealistic commercial photography, wide angle shot',
  },
  {
    filename: 'hero-dumpster-rental.jpg',
    aspect_ratio: '16:9',
    prompt:
      'Clean new 20-yard roll-off dumpster rental sitting in a residential driveway in an American suburb, bright blue sky, green grass lawn, professional photography, no people, high quality commercial image',
  },
  {
    filename: 'construction-dumpster.jpg',
    aspect_ratio: '16:9',
    prompt:
      'Large 40-yard industrial roll-off dumpster on an active construction site, construction workers and equipment in soft focus background, bright day, American commercial construction, professional photography',
  },
  {
    filename: 'small-dumpster-residential.jpg',
    aspect_ratio: '4:3',
    prompt:
      'Small 10-yard residential roll-off dumpster in front of a house during home renovation, suburban American neighborhood, clean and professional, bright day, photorealistic photography',
  },
  {
    filename: 'roofing-dumpster.jpg',
    aspect_ratio: '16:9',
    prompt:
      'Roll-off dumpster filled with old roofing shingles beside a house being reroofed, American residential neighborhood, sunny day, professional photography showing home renovation project',
  },
  {
    filename: 'yard-waste-dumpster.jpg',
    aspect_ratio: '4:3',
    prompt:
      'Green yard waste and tree branches in a roll-off dumpster in a residential backyard, lush garden and trees, American neighborhood, bright natural light, professional photography',
  },
  {
    filename: 'about-team.jpg',
    aspect_ratio: '16:9',
    prompt:
      'Professional friendly customer service team at a dumpster rental company office, smiling people at computers, modern bright office, American business setting, professional corporate photography',
  },
]

async function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms))
}

async function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest)
    const protocol = url.startsWith('https') ? https : http
    protocol.get(url, (response) => {
      if (response.statusCode === 302 || response.statusCode === 301) {
        file.close()
        downloadFile(response.headers.location, dest).then(resolve).catch(reject)
        return
      }
      response.pipe(file)
      file.on('finish', () => file.close(resolve))
    }).on('error', (err) => {
      fs.unlink(dest, () => {})
      reject(err)
    })
  })
}

async function createPrediction(prompt, aspect_ratio) {
  const body = JSON.stringify({
    version: undefined,
    input: {
      prompt,
      aspect_ratio,
      output_format: 'jpg',
      resolution: '2K',
    },
  })

  const response = await fetch(`https://api.replicate.com/v1/models/${MODEL}/predictions`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${REPLICATE_API_TOKEN}`,
      'Content-Type': 'application/json',
      Prefer: 'wait',
    },
    body,
  })

  if (!response.ok) {
    const err = await response.text()
    throw new Error(`Replicate API error ${response.status}: ${err}`)
  }

  return response.json()
}

async function waitForPrediction(predictionId, maxWait = 120000) {
  const start = Date.now()
  while (Date.now() - start < maxWait) {
    const resp = await fetch(`https://api.replicate.com/v1/predictions/${predictionId}`, {
      headers: { Authorization: `Bearer ${REPLICATE_API_TOKEN}` },
    })
    const prediction = await resp.json()

    if (prediction.status === 'succeeded') return prediction
    if (prediction.status === 'failed' || prediction.status === 'canceled') {
      throw new Error(`Prediction ${predictionId} ${prediction.status}: ${prediction.error}`)
    }

    console.log(`  Status: ${prediction.status}... waiting`)
    await sleep(3000)
  }
  throw new Error('Prediction timed out')
}

async function main() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true })
  }

  console.log(`Generating ${IMAGES.length} images with ${MODEL}\n`)

  for (const img of IMAGES) {
    const destPath = path.join(OUTPUT_DIR, img.filename)
    if (fs.existsSync(destPath)) {
      console.log(`⏭  Skipping ${img.filename} (already exists)`)
      continue
    }

    console.log(`🎨 Generating: ${img.filename}`)
    console.log(`   Prompt: ${img.prompt.slice(0, 80)}...`)

    try {
      // Use Prefer: wait header for synchronous response
      const body = JSON.stringify({
        input: {
          prompt: img.prompt,
          aspect_ratio: img.aspect_ratio,
          output_format: 'jpg',
          resolution: '2K',
        },
      })

      const response = await fetch(`https://api.replicate.com/v1/models/${MODEL}/predictions`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${REPLICATE_API_TOKEN}`,
          'Content-Type': 'application/json',
          Prefer: 'wait=60',
        },
        body,
      })

      if (!response.ok) {
        const err = await response.text()
        console.error(`  ❌ API error ${response.status}: ${err}`)
        continue
      }

      let prediction = await response.json()
      console.log(`  Prediction ID: ${prediction.id}, Status: ${prediction.status}`)

      // If not done yet, poll
      if (prediction.status !== 'succeeded') {
        prediction = await waitForPrediction(prediction.id)
      }

      const outputUrl = Array.isArray(prediction.output) ? prediction.output[0] : prediction.output
      if (!outputUrl) {
        console.error(`  ❌ No output URL in prediction`)
        continue
      }

      console.log(`  Downloading from ${outputUrl}`)
      await downloadFile(outputUrl, destPath)
      console.log(`  ✅ Saved to public/images/${img.filename}\n`)
    } catch (err) {
      console.error(`  ❌ Error: ${err.message}\n`)
    }

    // Small delay between requests
    await sleep(1000)
  }

  console.log('Done!')
}

main()
