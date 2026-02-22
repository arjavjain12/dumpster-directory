#!/usr/bin/env node
/**
 * Generate infographic background images via Replicate google/nano-banana-pro
 * Images are designed to have data/text overlaid as HTML on top.
 */

import fs from 'fs'
import path from 'path'
import https from 'https'
import http from 'http'

const REPLICATE_API_TOKEN = process.env.REPLICATE_API_TOKEN
const MODEL = 'google/nano-banana-pro'
const OUTPUT_DIR = path.resolve(process.cwd(), 'public/images')

const INFOGRAPHICS = [
  {
    filename: 'infographic-sizes-bg.jpg',
    aspect_ratio: '16:9',
    prompt:
      'Five identical roll-off dumpsters lined up side by side on a clean white concrete surface, each progressively taller and larger from left to right, shot from a low straight-on angle, bright even lighting, clean minimal commercial photography, no text, white background, professional studio style, each dumpster clearly distinct in height',
  },
  {
    filename: 'infographic-cost-bg.jpg',
    aspect_ratio: '16:9',
    prompt:
      'Clean flat lay product photography on white background: US dollar bills fanned out, a small yellow roll-off dumpster toy model, a clipboard with quote paper, a calculator, and keys on a white marble surface. Top-down bird\'s eye view, soft shadows, professional commercial photography, no text',
  },
  {
    filename: 'infographic-what-fits-bg.jpg',
    aspect_ratio: '4:3',
    prompt:
      'Overhead bird\'s eye view looking straight down into an open roll-off dumpster filled with clearly visible household items: a sofa, cardboard boxes, black trash bags, an old mattress, garden tools, and wooden boards. Clean organized arrangement, bright lighting, photorealistic commercial photography, no text',
  },
  {
    filename: 'infographic-allowed-bg.jpg',
    aspect_ratio: '16:9',
    prompt:
      'Split flat lay product photography on clean white background: left half with green tint showing allowed items — cardboard boxes, furniture pieces, old wood, yard waste bags, metal scraps arranged neatly; right half with subtle red tint showing items with a red X — paint cans, car tires, a battery, chemical containers. Clean minimal commercial photography, no text, top-down view, soft studio lighting',
  },
  {
    filename: 'infographic-process-bg.jpg',
    aspect_ratio: '16:9',
    prompt:
      'Three panel horizontal composition on light gray background: panel 1 shows a person searching on a smartphone with a map pin icon, panel 2 shows two people comparing documents side by side, panel 3 shows a delivery truck dropping off a green roll-off dumpster at a house. Clean flat illustration style meets photorealism, bright colors, no text, professional marketing photography',
  },
  {
    filename: 'infographic-weight-bg.jpg',
    aspect_ratio: '16:9',
    prompt:
      'Side view of a roll-off dumpster filled with heavy materials: concrete chunks, asphalt shingles, and bricks stacked inside, with a large industrial weighing scale icon concept, dramatic side lighting, clean professional commercial photography on light background, no text, photorealistic',
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

async function main() {
  if (!REPLICATE_API_TOKEN) {
    console.error('Set REPLICATE_API_TOKEN env var')
    process.exit(1)
  }

  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true })
  }

  console.log(`Generating ${INFOGRAPHICS.length} infographic backgrounds with ${MODEL}\n`)

  for (const img of INFOGRAPHICS) {
    const destPath = path.join(OUTPUT_DIR, img.filename)
    if (fs.existsSync(destPath)) {
      console.log(`⏭  Skipping ${img.filename} (already exists)`)
      continue
    }

    console.log(`🎨 Generating: ${img.filename}`)
    console.log(`   Prompt: ${img.prompt.slice(0, 80)}...`)

    try {
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

      // Poll if not done
      if (prediction.status !== 'succeeded') {
        const start = Date.now()
        while (Date.now() - start < 120000) {
          await sleep(3000)
          const pollResp = await fetch(`https://api.replicate.com/v1/predictions/${prediction.id}`, {
            headers: { Authorization: `Bearer ${REPLICATE_API_TOKEN}` },
          })
          prediction = await pollResp.json()
          console.log(`  Status: ${prediction.status}`)
          if (prediction.status === 'succeeded') break
          if (prediction.status === 'failed' || prediction.status === 'canceled') {
            throw new Error(`Prediction failed: ${prediction.error}`)
          }
        }
      }

      const outputUrl = Array.isArray(prediction.output) ? prediction.output[0] : prediction.output
      if (!outputUrl) {
        console.error(`  ❌ No output URL`)
        continue
      }

      await downloadFile(outputUrl, destPath)
      console.log(`  ✅ Saved public/images/${img.filename}\n`)
    } catch (err) {
      console.error(`  ❌ Error: ${err.message}\n`)
    }

    await sleep(1000)
  }

  console.log('Done!')
}

main()
