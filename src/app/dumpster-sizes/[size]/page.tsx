import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle, XCircle, Info } from 'lucide-react'
import Breadcrumbs from '@/components/Breadcrumbs'
import { formatPrice } from '@/lib/utils'

// ─── Size data ────────────────────────────────────────────────────────────────

interface SizeData {
  yards: number
  slug: string
  dimensions: string
  lengthFt: number
  widthFt: number
  heightFt: number
  weightLimit: string
  avgPriceLow: number
  avgPriceHigh: number
  rentalDays: string
  equivalent: string
  intro: string
  whatFits: string[]
  doesNotFit: string[]
  bestFor: string[]
  notGoodFor: string[]
  heavyMaterialNote: string
  faqs: { q: string; a: string }[]
}

const SIZE_DATA: Record<number, SizeData> = {
  2: {
    yards: 2,
    slug: '2-yard',
    dimensions: '3 × 6 × 3.5 ft',
    lengthFt: 6,
    widthFt: 3,
    heightFt: 3.5,
    weightLimit: '0.25–0.5 tons (500–1,000 lbs)',
    avgPriceLow: 75,
    avgPriceHigh: 150,
    rentalDays: 'Weekly service',
    equivalent: '~0.5 pickup truck loads',
    intro: 'The 2-yard dumpster is the smallest commercial container available — you see them behind restaurants, small offices, and retail shops. They are emptied on a scheduled weekly or bi-weekly basis rather than rented for a one-time project. For residential use, a 2-yard is almost always too small; most homeowners need at least a 10-yard roll-off for any meaningful cleanout or renovation project.',
    whatFits: [
      'Daily office waste',
      'Small retail store trash',
      'Restaurant paper and cardboard',
      'Apartment common area trash',
    ],
    doesNotFit: [
      'Renovation debris',
      'Furniture or appliances',
      'Yard waste',
      'Any significant volume of material',
    ],
    bestFor: [
      'Commercial weekly service accounts',
      'Small offices and retail stores',
      'Restaurant and food service businesses',
    ],
    notGoodFor: [
      'Residential projects',
      'One-time cleanouts',
      'Any debris volume over 0.5 cubic yards',
    ],
    heavyMaterialNote: 'The 2-yard is a commercial service container, not designed for heavy debris. It is not suitable for construction waste, concrete, or soil.',
    faqs: [
      {
        q: 'Can I rent a 2-yard dumpster for a residential project?',
        a: 'A 2-yard dumpster holds roughly half a pickup truck load — far too small for most residential projects. For home cleanouts, remodels, or yard work, a 10-yard roll-off dumpster is the minimum practical size. 2-yard containers are designed for ongoing commercial service accounts, not one-time residential rentals.',
      },
      {
        q: 'How much does a 2-yard dumpster cost?',
        a: 'Commercial 2-yard dumpster service typically costs $75–$150 per month for weekly pickup. Some companies charge per-pickup rather than monthly. These containers are priced as ongoing service contracts, not one-time rentals like roll-off dumpsters.',
      },
      {
        q: 'What is a 2-yard dumpster used for?',
        a: 'Primarily for commercial accounts that generate small, consistent volumes of trash — restaurants, small offices, retail stores, and apartment complexes. The container stays on-site permanently and is emptied on a recurring schedule.',
      },
      {
        q: 'How big is a 2-yard dumpster?',
        a: 'A 2-yard dumpster is approximately 3 feet wide, 6 feet long, and 3.5 feet tall. It holds 2 cubic yards of material — about the volume of a standard kitchen trash can multiplied by 8 or 9.',
      },
      {
        q: 'Do I need a 2-yard or a 10-yard dumpster?',
        a: 'For any residential project — cleanout, renovation, roofing, yard work — you need a 10-yard roll-off, not a 2-yard. The 2-yard is for commercial weekly trash service. If you are working on a home project, start with our 10-yard dumpster guide to find the right size.',
      },
    ],
  },
  3: {
    yards: 3,
    slug: '3-yard',
    dimensions: '3.5 × 6 × 4 ft',
    lengthFt: 6,
    widthFt: 3.5,
    heightFt: 4,
    weightLimit: '0.5–1 ton (1,000–2,000 lbs)',
    avgPriceLow: 100,
    avgPriceHigh: 200,
    rentalDays: 'Weekly service or short-term',
    equivalent: '~1 pickup truck load',
    intro: 'The 3-yard dumpster sits between commercial service containers and small roll-off bins. It holds about 1 full pickup truck load of debris and is used primarily for commercial accounts with moderate weekly waste. Some companies offer 3-yard roll-off containers for very small residential projects, but most homeowners find a 10-yard a better fit for any real cleanup job.',
    whatFits: [
      'Small office or retail trash (weekly service)',
      'Very minor cleanout debris (1 car trunk load)',
      'Cardboard and packaging waste',
      'Light yard trimmings (small amount)',
    ],
    doesNotFit: [
      'Renovation or remodel debris',
      'Furniture or large appliances',
      'Roofing materials',
      'Significant volume of any material',
    ],
    bestFor: [
      'Small commercial weekly service',
      'Very minor cleanouts (1 room maximum)',
      'Cardboard recycling for small businesses',
    ],
    notGoodFor: [
      'Home renovation projects',
      'Garage or basement cleanouts',
      'Any project generating more than 1 truck load',
    ],
    heavyMaterialNote: 'The 3-yard has a 1-ton weight limit. Concrete, brick, or soil will hit this limit almost immediately. For any masonry or demo debris, use a specialty mini dumpster.',
    faqs: [
      {
        q: 'How much does a 3-yard dumpster cost?',
        a: 'A 3-yard dumpster costs $100–$200 depending on rental type. As a commercial service account, monthly rates run $100–$175. Short-term rental, where available, costs $150–$200. Prices include pickup and disposal.',
      },
      {
        q: 'Is a 3-yard dumpster big enough for a cleanout?',
        a: 'Only for very minor cleanouts — a single room with minimal furniture or a small batch of boxes. For a full room, garage, or any renovation project, a 10-yard roll-off is the minimum. A 3-yard holds roughly 1 pickup truck load.',
      },
      {
        q: 'What fits in a 3-yard dumpster?',
        a: '3 cubic yards of loose debris — about 1 full pickup truck bed load. Think: 5–10 bags of yard waste, a small pile of boxes and junk from cleaning out a closet, or routine commercial trash from a small office. It is not suitable for furniture, appliances, or construction materials.',
      },
      {
        q: 'How big is a 3-yard dumpster?',
        a: 'Approximately 3.5 feet wide, 6 feet long, and 4 feet tall. Compact enough to fit in a parking space, but too small for most residential projects.',
      },
      {
        q: 'Should I get a 3-yard or 10-yard dumpster?',
        a: 'For any home project, get a 10-yard. A 3-yard is designed for ongoing commercial trash service, not one-time project cleanouts. The 10-yard holds 3x more debris, accommodates furniture and renovation materials, and is readily available as a roll-off rental.',
      },
    ],
  },
  4: {
    yards: 4,
    slug: '4-yard',
    dimensions: '4 × 7 × 4 ft',
    lengthFt: 7,
    widthFt: 4,
    heightFt: 4,
    weightLimit: '0.5–1.5 tons (1,000–3,000 lbs)',
    avgPriceLow: 150,
    avgPriceHigh: 275,
    rentalDays: '3–7 days or weekly service',
    equivalent: '~1–2 pickup truck loads',
    intro: 'The 4-yard dumpster is the smallest size commonly available as a short-term roll-off rental from residential dumpster companies. It fits 1–2 pickup truck loads of debris and works well for very small projects — a single bathroom remodel with minimal materials, a one-car garage cleanout with mostly light junk, or a small landscaping job. Many companies that serve residential customers offer 4-yard containers as their entry-level option.',
    whatFits: [
      'Single bathroom remodel (light demo)',
      'Small garage cleanout (mostly boxes and light junk)',
      'Minor landscaping trimmings',
      'Attic or closet cleanout',
      'Moving-day unwanted items from 1–2 rooms',
    ],
    doesNotFit: [
      'Kitchen remodels (too much debris)',
      'Large furniture (sofa, bed frames)',
      'Full garage cleanouts with heavy items',
      'Any roofing or concrete work',
    ],
    bestFor: [
      'Very small bathroom or closet remodel',
      'Minor junk removal from 1–2 rooms',
      'Small yard waste jobs',
      'Moving cleanout (light items only)',
    ],
    notGoodFor: [
      'Projects spanning more than one room',
      'Heavy debris (concrete, tile, shingles)',
      'Commercial or contractor jobs',
      'Whole-home or estate cleanouts',
    ],
    heavyMaterialNote: 'At 1.5 tons max, a 4-yard will hit its limit quickly with concrete, tile, or roofing shingles. Use a specialty container for heavy materials.',
    faqs: [
      {
        q: 'How much does a 4-yard dumpster cost?',
        a: 'A 4-yard dumpster rental typically costs $150–$275 for a 3–7 day rental, including delivery, pickup, and weight up to 1 ton. Prices vary by city and company. In high-cost markets, budget $200–$300.',
      },
      {
        q: 'Is a 4-yard dumpster big enough for a bathroom remodel?',
        a: 'For a small bathroom remodel — removing tile, a vanity, and some drywall — a 4-yard can work, but it fills up faster than most people expect. If your project involves removing a tub or significant plumbing, step up to a 10-yard to avoid needing a second pickup.',
      },
      {
        q: 'What can I put in a 4-yard dumpster?',
        a: 'Light household junk, small furniture pieces, boxes, yard waste, and minor remodel debris. Avoid concrete, dirt, bricks, roofing shingles, or any material that adds up in weight quickly — a 4-yard hits its weight limit when only partially full of dense materials.',
      },
      {
        q: 'How does a 4-yard dumpster compare to a 10-yard?',
        a: 'A 4-yard holds 1–2 pickup truck loads; a 10-yard holds 3–4. For anything beyond a very minor cleanout, the 10-yard is more practical and only marginally more expensive per cubic yard. Most residential projects need at least a 10-yard.',
      },
      {
        q: 'Do most dumpster companies offer 4-yard rentals?',
        a: 'Not all. Many residential roll-off companies start at 10 yards. If you specifically need a 4-yard, search locally for companies that advertise small dumpster rentals or mini dumpsters. National directories often only show the most common sizes.',
      },
    ],
  },
  6: {
    yards: 6,
    slug: '6-yard',
    dimensions: '5 × 8 × 4.5 ft',
    lengthFt: 8,
    widthFt: 5,
    heightFt: 4.5,
    weightLimit: '1–2 tons (2,000–4,000 lbs)',
    avgPriceLow: 200,
    avgPriceHigh: 325,
    rentalDays: '5–7 days',
    equivalent: '~2 pickup truck loads',
    intro: 'The 6-yard dumpster is a popular size for small residential projects and light commercial applications. It holds 2 pickup truck loads of debris — more than a 4-yard but significantly smaller than a 10-yard. This size is ideal when a 10-yard feels too large for the project but a 4-yard is clearly insufficient. Think single-room renovation, small estate cleanout, or a concentrated landscaping job where a 10-yard would sit mostly empty.',
    whatFits: [
      'Single-room renovation debris (kitchen or bathroom)',
      '2-car garage cleanout (mostly boxes and light furniture)',
      'Medium landscaping project trimmings',
      'Small deck removal (10×12 ft or smaller)',
      'Combined light cleanout from 2–3 rooms',
    ],
    doesNotFit: [
      'Multi-room renovation projects',
      'Large amounts of tile, concrete, or shingles',
      'Estate cleanouts with heavy furniture',
      'Any project generating 3+ pickup truck loads',
    ],
    bestFor: [
      'Single kitchen or bathroom remodel',
      'Small deck or shed demolition',
      'Apartment cleanout',
      'Combined light junk removal from 2–3 rooms',
    ],
    notGoodFor: [
      'Whole-house cleanouts',
      'Roofing projects (shingles are heavy)',
      'Commercial construction jobs',
      'Projects needing more than 2 truck loads',
    ],
    heavyMaterialNote: 'A 6-yard handles up to 2 tons. Concrete and brick can max out the weight limit when the container is still only 30–40% full by volume. For concrete or demolition debris, request a specialty heavy container.',
    faqs: [
      {
        q: 'How much does a 6-yard dumpster cost?',
        a: 'A 6-yard dumpster typically costs $200–$325 for a 5–7 day rental including delivery, pickup, and up to 1 ton of debris. Prices vary significantly by city — markets with high landfill fees (Miami, New York, Los Angeles) run 20–30% higher.',
      },
      {
        q: 'Is a 6-yard dumpster enough for a kitchen remodel?',
        a: 'For a small to mid-size kitchen remodel — removing cabinets, countertops, flooring, and light drywall — a 6-yard can work. If you are also removing appliances or doing significant structural work, step up to a 10-yard to avoid overfilling and extra pickup charges.',
      },
      {
        q: 'What is the difference between a 6-yard and 10-yard dumpster?',
        a: 'A 6-yard holds about 2 pickup truck loads; a 10-yard holds 3–4. The price difference is typically $75–$125. For projects where you are unsure, sizing up to a 10-yard is almost always worth it — a second delivery and pickup costs more than the size upgrade.',
      },
      {
        q: 'How big is a 6-yard dumpster physically?',
        a: 'Approximately 5 feet wide, 8 feet long, and 4.5 feet tall. It fits in most driveways with room to spare, and delivery trucks have easier access than with larger containers.',
      },
      {
        q: 'Can I get a 6-yard dumpster for a one-day rental?',
        a: 'Some companies offer shorter rental windows for smaller containers. Call local companies directly and ask — most have minimum rental periods of 3–5 days, but shorter arrangements may be available depending on their schedule.',
      },
    ],
  },
  10: {
    yards: 10,
    slug: '10-yard',
    dimensions: '12 × 7.5 × 3.5 ft',
    lengthFt: 12,
    widthFt: 7.5,
    heightFt: 3.5,
    weightLimit: '2–4 tons (4,000–8,000 lbs)',
    avgPriceLow: 275,
    avgPriceHigh: 450,
    rentalDays: '7–10 days',
    equivalent: '3–4 pickup truck loads',
    intro: `The 10-yard roll-off dumpster is the smallest standard size available from most rental companies — and for many homeowners, it's the perfect fit. Compact enough to park in most driveways without blocking the garage, yet large enough to handle a bathroom teardown, garage cleanout, or minor renovation. If your project is contained to one or two rooms, the 10-yard is almost always the right call.`,
    whatFits: [
      'Furniture from 1–2 rooms (sofas, mattresses, dressers)',
      'Bathroom remodel debris (tile, vanity, tub)',
      'Attic or basement clutter',
      'Garage cleanout items',
      'Small deck removal (up to 10×10 ft)',
      'Minor landscaping trimmings and small branches',
      'Carpet and flooring from one room',
    ],
    doesNotFit: [
      'Full-house cleanouts or estate sales',
      'Large quantities of concrete or heavy masonry',
      'Whole-roof tear-off (shingles are very heavy)',
      'Multiple rooms of renovation debris',
    ],
    bestFor: [
      'Bathroom or small kitchen remodels',
      'Garage or basement cleanouts',
      'Single-room decluttering projects',
      'Small exterior projects (shed removal, small deck)',
      'Post-move junk removal',
    ],
    notGoodFor: [
      'Whole-home renovation projects',
      'Commercial or construction jobs',
      'Large landscaping overhauls',
    ],
    heavyMaterialNote: 'If you\'re disposing of concrete, dirt, bricks, or asphalt, a 10-yard can hit its weight limit when only half-full. Request a "heavy debris" or "mini dumpster" designed for dense materials.',
    faqs: [
      {
        q: 'How much does a 10-yard dumpster cost?',
        a: 'Nationally, a 10-yard dumpster rental runs $275–$450 including delivery, pickup, and 1–2 tons of debris. Price varies by city, company, and rental duration.',
      },
      {
        q: 'Is a 10-yard dumpster big enough for a bathroom remodel?',
        a: 'Yes — for most bathroom remodels, a 10-yard is the right size. It handles tile, drywall, a bathtub or shower surround, vanity, toilet, and general debris without filling up.',
      },
      {
        q: 'How long can I keep a 10-yard dumpster?',
        a: 'Most companies include 7–10 days in the rental price. Extensions typically cost $5–$15 per extra day. Ask before booking if you need longer.',
      },
      {
        q: 'Will a 10-yard dumpster fit in my driveway?',
        a: 'Yes — at 12 feet long, most standard driveways accommodate a 10-yard roll-off. Make sure there are no overhead obstructions (wires, branches) and at least 60 feet of clear approach for the truck.',
      },
      {
        q: 'What happens if I exceed the weight limit?',
        a: 'Most 10-yard dumpsters include 2 tons of debris. Additional weight is billed at $60–$100 per ton. Avoid overfilling and ask about weight limits when booking.',
      },
    ],
  },
  12: {
    yards: 12,
    slug: '12-yard',
    dimensions: '14 × 7.5 × 3.5 ft',
    lengthFt: 14,
    widthFt: 7.5,
    heightFt: 3.5,
    weightLimit: '2–4 tons (4,000–8,000 lbs)',
    avgPriceLow: 300,
    avgPriceHigh: 475,
    rentalDays: '7–10 days',
    equivalent: '~3–4 pickup truck loads',
    intro: 'The 12-yard dumpster is less common than the standard 10-yard but serves a useful niche: it holds more than a 10-yard while remaining compact enough for tight driveways. Some companies offer it as a "large 10-yard" variant or as a specialty option for projects that consistently overflow a 10-yard but do not need a full 15-yard. It is particularly useful for concrete and heavy debris because the shallow profile (low sides) makes loading dense material easier without exceeding weight limits as quickly.',
    whatFits: [
      'Bathroom plus small bedroom renovation combined',
      'Large garage cleanout with heavy items',
      'Small roofing job (up to 1,200 sq ft single layer)',
      'Moderate landscaping and yard waste',
      'Combined renovation and junk removal project',
    ],
    doesNotFit: [
      'Full kitchen gut renovation with structural work',
      'Multi-room home renovation',
      'Large roofing projects or multiple shingle layers',
      'Commercial demolition or construction',
    ],
    bestFor: [
      'Projects that overflow a 10-yard but do not need a 15',
      'Concrete and heavy debris (low profile helps)',
      'Combined bathroom + bedroom remodel',
      'Garage cleanout with mixed heavy and light debris',
    ],
    notGoodFor: [
      'Large residential renovation projects (use a 15 or 20-yard)',
      'New construction job sites',
      'Commercial projects',
    ],
    heavyMaterialNote: 'The 12-yard is popular for concrete because its low sides allow easy hand-loading of heavy blocks without overstacking. Still confirm weight allowance — 2 tons of concrete is only about 1.3 cubic yards, far below the 12-yard volume capacity.',
    faqs: [
      {
        q: 'How much does a 12-yard dumpster cost?',
        a: 'A 12-yard dumpster costs $300–$475 on average, depending on location and company. It is priced between a 10-yard ($275–$450) and a 15-yard ($325–$500). Some companies do not offer this size — check local availability before planning around it.',
      },
      {
        q: 'Is a 12-yard dumpster common?',
        a: 'Less common than 10-yard and 15-yard containers. Not all rental companies stock 12-yard bins. If you specifically need one, call local companies directly rather than relying on online booking tools, which often only list standard sizes.',
      },
      {
        q: 'When should I choose a 12-yard over a 10-yard?',
        a: 'When your project consistently fills a 10-yard with room to spare. Common scenarios: a two-room renovation, a heavy cleanout with large furniture, or a concrete removal job where you need more capacity without jumping to the larger 15-yard price tier.',
      },
      {
        q: 'What is the difference between a 10-yard and 12-yard dumpster?',
        a: 'The 12-yard holds roughly 20–30% more than a 10-yard. Physically, it is usually the same width but slightly longer or taller. The price premium over a 10-yard is typically $25–$75, making it a good value when the 10-yard is borderline.',
      },
      {
        q: 'Can a 12-yard dumpster fit in a standard driveway?',
        a: 'Yes — at 14 feet long, most standard driveways accommodate a 12-yard roll-off. Ensure there are no overhead obstructions (power lines, tree branches) and at least 60 feet of clear truck approach for delivery.',
      },
    ],
  },
  15: {
    yards: 15,
    slug: '15-yard',
    dimensions: '14 × 7.5 × 4 ft',
    lengthFt: 14,
    widthFt: 7.5,
    heightFt: 4,
    weightLimit: '2–5 tons (4,000–10,000 lbs)',
    avgPriceLow: 325,
    avgPriceHigh: 500,
    rentalDays: '7–10 days',
    equivalent: '4–6 pickup truck loads',
    intro: `The 15-yard dumpster is a great middle-ground option — larger than the 10-yard but more affordable than a 20. It's popular for kitchen and bathroom remodels, flooring replacements across multiple rooms, and medium-sized cleanouts where a 10-yard would likely need two trips. Most homeowners find it handles renovation projects involving 2–3 rooms comfortably.`,
    whatFits: [
      'Kitchen remodel debris (cabinets, countertops, appliances)',
      'Flooring removal across 2–3 rooms',
      'Medium-sized garage or basement cleanouts',
      'Small roofing jobs (up to 1,000 sq ft)',
      'Deck or patio removal (medium-sized)',
      'Combined bathroom and hallway renovation debris',
      'Light landscaping debris and yard waste',
    ],
    doesNotFit: [
      'Whole-house cleanouts with heavy furniture',
      'Large roofing jobs (1,500+ sq ft of shingles)',
      'Major construction framing debris',
      'Full commercial kitchen demolitions',
    ],
    bestFor: [
      'Kitchen remodels and gut renovations',
      'Multi-room flooring replacement',
      'Medium basement or attic cleanouts',
      'Small-to-medium roofing jobs',
      'Combined renovation + cleanout projects',
    ],
    notGoodFor: [
      'Large-scale home additions',
      'Whole-house estate cleanouts',
      'Commercial or industrial projects',
    ],
    heavyMaterialNote: 'For concrete, dirt, or masonry, you may hit the 15-yard weight limit when the container is only 50–60% full. Check with your rental company about weight allowances before loading heavy material.',
    faqs: [
      {
        q: 'How much does a 15-yard dumpster cost?',
        a: 'A 15-yard dumpster typically costs $325–$500 nationally, including delivery, pickup, and standard debris weight. Prices vary by city and company.',
      },
      {
        q: 'What\'s the difference between a 10 and 15 yard dumpster?',
        a: 'A 15-yard is about 2 feet longer and 6 inches taller than a 10-yard, giving you roughly 50% more volume. For projects beyond a single room, the 15-yard often prevents you from needing a second haul.',
      },
      {
        q: 'Is a 15-yard dumpster good for a kitchen remodel?',
        a: 'Yes — a 15-yard is the most commonly recommended size for kitchen remodels. It handles old cabinets, countertops, tile, appliances, and general debris with room to spare.',
      },
      {
        q: 'Can I fit roofing shingles in a 15-yard dumpster?',
        a: 'Yes, but shingles are heavy. A 15-yard can handle roofs up to about 1,000–1,200 sq ft before hitting weight limits. For larger roofs, consider a 20-yard with confirmed weight allowance.',
      },
      {
        q: 'How long is the rental period for a 15-yard dumpster?',
        a: 'Standard rental periods are 7–10 days. Most projects finish within this window, but extensions are available for $5–$15/day.',
      },
    ],
  },
  20: {
    yards: 20,
    slug: '20-yard',
    dimensions: '16 × 7.5 × 4.5 ft',
    lengthFt: 16,
    widthFt: 7.5,
    heightFt: 4.5,
    weightLimit: '3–6 tons (6,000–12,000 lbs)',
    avgPriceLow: 375,
    avgPriceHigh: 575,
    rentalDays: '7–14 days',
    equivalent: '6–8 pickup truck loads',
    intro: `The 20-yard dumpster is the most popular size in the US — and for good reason. It hits the sweet spot for whole-home cleanouts, medium roofing replacements, large renovation projects, and multi-room remodels. Most rental companies stock more 20-yard containers than any other size because they're versatile enough for both large residential and small commercial jobs. If you're not sure what size you need, the 20-yard is usually the safe choice.`,
    whatFits: [
      'Whole-house cleanouts (furniture, appliances, miscellaneous)',
      'Roofing tear-off on homes up to 2,000 sq ft',
      'Large kitchen + bathroom combined renovation',
      'Siding or window replacement debris',
      'Large deck or patio demolition',
      'Basement finishing or full renovation',
      'Multi-room flooring replacement (hardwood, tile)',
      'Light demolition from small additions',
    ],
    doesNotFit: [
      'Very large construction projects (new builds, major additions)',
      'Commercial demolition debris',
      'Multiple roofing layers on large homes',
      'Full concrete driveway removal (too heavy)',
    ],
    bestFor: [
      'Whole-home cleanouts and estate sales',
      'Roofing replacements on average-sized homes',
      'Large remodeling projects spanning multiple rooms',
      'Siding or exterior renovation debris',
      'Large landscaping and yard overhauls',
    ],
    notGoodFor: [
      'Large commercial or industrial jobs',
      'Major new construction framing',
      'Projects needing more than 12 pickup truck loads',
    ],
    heavyMaterialNote: 'The 20-yard is often used for roofing, but shingles are dense. Multiple layers of old shingles on a large roof can exceed weight limits. Confirm tonnage allowances with your provider before booking.',
    faqs: [
      {
        q: 'How much does a 20-yard dumpster cost?',
        a: 'A 20-yard dumpster costs $375–$575 on average nationally. It\'s the most commonly rented size and prices are competitive. Exact pricing depends on your city, landfill fees, and rental duration.',
      },
      {
        q: 'What can I put in a 20-yard dumpster?',
        a: 'Most household debris is accepted: furniture, appliances, drywall, lumber, carpet, roofing shingles, and general construction waste. Hazardous materials (paint, batteries, propane tanks) are never accepted.',
      },
      {
        q: 'Is a 20-yard dumpster big enough for a whole-house cleanout?',
        a: 'For most average-sized homes (1,500–2,500 sq ft), yes — a 20-yard handles typical cleanout volume. Very large homes or those with excessive accumulation may need a 30-yard.',
      },
      {
        q: 'How large of a roof can a 20-yard dumpster handle?',
        a: 'A single layer of asphalt shingles from a 1,500–2,000 sq ft roof typically fits within a 20-yard\'s weight limit. Multiple layers or heavier materials may require a larger container.',
      },
      {
        q: 'How long can I rent a 20-yard dumpster?',
        a: 'Most rentals include 7–14 days. For larger projects, ask for a 2-week rental upfront — adding days later is typically more expensive than booking them in advance.',
      },
    ],
  },
  30: {
    yards: 30,
    slug: '30-yard',
    dimensions: '18 × 7.5 × 5.5 ft',
    lengthFt: 18,
    widthFt: 7.5,
    heightFt: 5.5,
    weightLimit: '4–8 tons (8,000–16,000 lbs)',
    avgPriceLow: 425,
    avgPriceHigh: 650,
    rentalDays: '7–14 days',
    equivalent: '9–12 pickup truck loads',
    intro: `The 30-yard dumpster is built for large residential projects and light commercial work. At nearly 6 feet tall, it can handle bulky materials that won't break down easily — think new construction framing waste, large-scale renovation debris, or full estate cleanouts from oversized homes. If you've outgrown the 20-yard or you're managing a contractor job site, the 30-yard is the next step up.`,
    whatFits: [
      'Large home remodels spanning the whole house',
      'New construction framing and rough debris',
      'Full estate cleanouts (large homes)',
      'Commercial tenant improvement projects',
      'Multiple roofing layers on large homes',
      'Large additions or room expansions',
      'Siding, windows, and exterior renovation on large homes',
      'Large amounts of bulky furniture or appliances',
    ],
    doesNotFit: [
      'Large commercial demolition projects',
      'Full concrete removal (too heavy for this size)',
      'Industrial construction debris at scale',
    ],
    bestFor: [
      'Large home remodels and additions',
      'New residential construction job sites',
      'Large estate cleanouts',
      'Commercial renovation and tenant improvement',
      'Large roofing jobs on big homes',
    ],
    notGoodFor: [
      'Simple residential cleanouts (overkill, use a 20-yard)',
      'Heavy dense materials like concrete or dirt',
      'Projects where space is tight for delivery',
    ],
    heavyMaterialNote: 'At 30 yards, weight limits are higher — but concrete, dirt, and asphalt can still push you over. For heavy materials, ask your provider about maximum weight and per-ton overage charges before filling.',
    faqs: [
      {
        q: 'How much does a 30-yard dumpster cost?',
        a: 'A 30-yard dumpster runs $425–$650 on average. It\'s a significant step up in price from a 20-yard due to higher transport and disposal costs for larger loads.',
      },
      {
        q: 'When should I choose a 30-yard over a 20-yard?',
        a: 'Choose a 30-yard if your project involves heavy framing debris, multiple rooms across a large home, new construction, or a commercial project. If a 20-yard seems borderline, go with a 30 — the extra cost is far less than a second haul.',
      },
      {
        q: 'Can a 30-yard dumpster fit in a residential driveway?',
        a: 'Possibly — at 18 feet long, it needs a long driveway. Many providers also require a larger delivery truck for 30-yard containers, which needs clear access. Measure your space and confirm with the rental company.',
      },
      {
        q: 'What types of projects use 30-yard dumpsters most?',
        a: 'Contractors use them for new construction, large renovations, and commercial tenant improvements. Homeowners use them for whole-house remodels, large estate cleanouts, and major additions.',
      },
      {
        q: 'Is a 30-yard dumpster good for roofing?',
        a: 'Yes — a 30-yard handles large roofing jobs with multiple layers. It\'s commonly used by roofing contractors on homes over 2,500 sq ft or multi-layer tear-offs.',
      },
    ],
  },
  40: {
    yards: 40,
    slug: '40-yard',
    dimensions: '22 × 7.5 × 8 ft',
    lengthFt: 22,
    widthFt: 7.5,
    heightFt: 8,
    weightLimit: '5–10 tons (10,000–20,000 lbs)',
    avgPriceLow: 475,
    avgPriceHigh: 750,
    rentalDays: '7–30 days',
    equivalent: '12–16 pickup truck loads',
    intro: `The 40-yard dumpster is the largest standard roll-off size available and is built for serious commercial and industrial work. Standing 8 feet tall and stretching 22 feet long, it holds the equivalent of 12–16 full pickup truck loads of debris. You'll see 40-yard containers on commercial demolition sites, large ground-up construction projects, and industrial facility cleanouts. For residential use, this size is almost always overkill — but for the right project, nothing else comes close.`,
    whatFits: [
      'Major commercial building demolition',
      'Large ground-up new construction debris',
      'Industrial facility cleanouts',
      'Apartment complex or hotel renovation',
      'Large commercial roofing projects',
      'Bulk packaging and industrial waste',
      'Commercial flooring and ceiling removal at scale',
    ],
    doesNotFit: [
      'Typical residential projects (use a 20 or 30 yard instead)',
      'Concrete-only projects (too light per cubic yard — use a specialty heavy dumpster)',
    ],
    bestFor: [
      'Commercial demolition projects',
      'Large new construction job sites',
      'Industrial facility or warehouse cleanouts',
      'Apartment or commercial building renovations',
      'Large commercial roofing and exterior projects',
    ],
    notGoodFor: [
      'Residential cleanouts or home renovations',
      'Projects with limited driveway or site access',
      'Light debris where smaller sizes would work fine',
    ],
    heavyMaterialNote: 'Even at 40 yards, dense materials like concrete or asphalt can hit weight limits before the container is visually full. For demolition concrete, specialty roll-off containers (often smaller but heavy-duty) are purpose-built for this material.',
    faqs: [
      {
        q: 'How much does a 40-yard dumpster cost?',
        a: 'A 40-yard dumpster costs $475–$750 on average, though commercial and industrial jobs often run higher depending on debris type, location, and rental duration.',
      },
      {
        q: 'Who rents 40-yard dumpsters?',
        a: 'Mostly commercial contractors, demolition companies, property managers, and construction project managers. Residential use is rare — a 30-yard usually covers even the largest home projects.',
      },
      {
        q: 'How long can I rent a 40-yard dumpster?',
        a: 'Rental periods for 40-yard containers are more flexible — from 7 days to 30+ days for long-term job sites. Pricing is often negotiated for extended commercial projects.',
      },
      {
        q: 'How much space does a 40-yard dumpster need?',
        a: 'The container is 22 feet long and requires significant space for delivery and pickup. Commercial job sites usually have room, but residential settings rarely do. Confirm access with your provider before booking.',
      },
      {
        q: 'What\'s the weight limit on a 40-yard dumpster?',
        a: 'Typical allowance is 5–10 tons of debris. Overage is billed by the ton. For very heavy loads, ask your provider about their capacity before filling.',
      },
    ],
  },
}

const ALL_SIZES = [2, 3, 4, 6, 10, 12, 15, 20, 30, 40]

const SIZE_TO_CATEGORIES: Record<number, { label: string; href: string }[]> = {
  2: [
    { label: 'Commercial Rental', href: '/dumpster-rental/commercial' },
    { label: 'Residential Rental', href: '/dumpster-rental/residential' },
  ],
  3: [
    { label: 'Residential Rental', href: '/dumpster-rental/residential' },
    { label: 'Commercial Rental', href: '/dumpster-rental/commercial' },
  ],
  4: [
    { label: 'Residential Rental', href: '/dumpster-rental/residential' },
    { label: 'Yard Waste Disposal', href: '/dumpster-rental/yard-waste' },
  ],
  6: [
    { label: 'Residential Rental', href: '/dumpster-rental/residential' },
    { label: 'Yard Waste Disposal', href: '/dumpster-rental/yard-waste' },
    { label: 'Roll-Off Rental Guide', href: '/dumpster-rental/roll-off' },
  ],
  10: [
    { label: 'Residential Rental', href: '/dumpster-rental/residential' },
    { label: 'Yard Waste Disposal', href: '/dumpster-rental/yard-waste' },
    { label: 'Roll-Off Rental Guide', href: '/dumpster-rental/roll-off' },
  ],
  12: [
    { label: 'Construction Dumpsters', href: '/dumpster-rental/construction' },
    { label: 'Residential Rental', href: '/dumpster-rental/residential' },
    { label: 'Concrete Disposal', href: '/dumpster-rental/concrete' },
  ],
  15: [
    { label: 'Residential Rental', href: '/dumpster-rental/residential' },
    { label: 'Construction Dumpsters', href: '/dumpster-rental/construction' },
    { label: 'Roofing Dumpsters', href: '/dumpster-rental/roofing' },
  ],
  20: [
    { label: 'Construction Dumpsters', href: '/dumpster-rental/construction' },
    { label: 'Roofing Dumpsters', href: '/dumpster-rental/roofing' },
    { label: 'Residential Rental', href: '/dumpster-rental/residential' },
    { label: 'Roll-Off Rental Guide', href: '/dumpster-rental/roll-off' },
  ],
  30: [
    { label: 'Construction Dumpsters', href: '/dumpster-rental/construction' },
    { label: 'Commercial Rental', href: '/dumpster-rental/commercial' },
    { label: 'Roofing Dumpsters', href: '/dumpster-rental/roofing' },
    { label: 'Roll-Off Rental Guide', href: '/dumpster-rental/roll-off' },
  ],
  40: [
    { label: 'Construction Dumpsters', href: '/dumpster-rental/construction' },
    { label: 'Commercial Rental', href: '/dumpster-rental/commercial' },
    { label: 'Roll-Off Rental Guide', href: '/dumpster-rental/roll-off' },
  ],
}

// ─── Static params ────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return ALL_SIZES.map((size) => ({ size: `${size}-yard` }))
}

// ─── Metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ size: string }>
}): Promise<Metadata> {
  const { size: sizeSlug } = await params
  const yards = parseInt(sizeSlug)
  const data = SIZE_DATA[yards]
  if (!data) return { title: 'Not Found' }

  const title = `${yards} Yard Dumpster Rental — Size Guide, Dimensions & Pricing (2026)`
  const description = `${yards}-yard roll-off dumpster: ${data.dimensions}, capacity ${data.equivalent}, avg cost ${formatPrice(data.avgPriceLow)}–${formatPrice(data.avgPriceHigh)}. See what fits, best uses, and how to rent one.`

  return {
    title,
    description,
    alternates: { canonical: `/dumpster-sizes/${sizeSlug}` },
    openGraph: { title, description, url: `/dumpster-sizes/${sizeSlug}` },
  }
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function SizePage({
  params,
}: {
  params: Promise<{ size: string }>
}) {
  const { size: sizeSlug } = await params
  const yards = parseInt(sizeSlug)
  const data = SIZE_DATA[yards]

  if (!data) notFound()

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  }

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${yards} Yard Roll-Off Dumpster Rental`,
    description: `${yards}-yard dumpster rental: ${data.dimensions}, holds ${data.equivalent}`,
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      lowPrice: data.avgPriceLow,
      highPrice: data.avgPriceHigh,
      offerCount: 100,
    },
  }

  const otherSizes = ALL_SIZES.filter((s) => s !== yards)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />

      {/* Hero */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs crumbs={[
            { label: 'Home', href: '/' },
            { label: 'Dumpster Sizes', href: '/dumpster-sizes' },
            { label: `${yards} Yard` },
          ]} />

          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900">
            {yards} Yard Dumpster — Size Guide, Dimensions & Pricing
          </h1>

          {/* Specs strip */}
          <div className="mt-5 flex flex-wrap gap-4">
            {[
              { label: 'Dimensions', value: data.dimensions },
              { label: 'Capacity', value: data.equivalent },
              { label: 'Weight Limit', value: data.weightLimit },
              { label: 'Avg. Price', value: `${formatPrice(data.avgPriceLow)}–${formatPrice(data.avgPriceHigh)}` },
              { label: 'Rental Period', value: data.rentalDays },
            ].map((spec) => (
              <div key={spec.label} className="rounded-lg bg-gray-50 border border-gray-200 px-4 py-2.5 text-sm">
                <span className="text-gray-500">{spec.label}: </span>
                <span className="font-semibold text-gray-900">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">

          {/* Main content */}
          <div className="xl:col-span-2 space-y-10">

            {/* Intro */}
            <section>
              <p className="text-gray-700 leading-relaxed text-lg">{data.intro}</p>
            </section>

            {/* Visual size indicator */}
            <section className="rounded-xl border border-gray-200 bg-white p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">{yards} Yard Dumpster Dimensions</h2>
              <div className="flex items-center gap-6">
                {/* Simple diagram */}
                <div
                  className="bg-green-50 border-2 border-green-300 rounded-lg flex items-center justify-center text-green-800 font-bold text-sm shrink-0"
                  style={{
                    width: `${Math.round((data.lengthFt / 22) * 180)}px`,
                    height: `${Math.round((data.heightFt / 8) * 80)}px`,
                    minWidth: '80px',
                    minHeight: '40px',
                  }}
                >
                  {yards} yd
                </div>
                <div className="space-y-2 text-sm text-gray-700">
                  <div><span className="font-medium w-20 inline-block">Length:</span> {data.lengthFt} feet</div>
                  <div><span className="font-medium w-20 inline-block">Width:</span> {data.widthFt} feet</div>
                  <div><span className="font-medium w-20 inline-block">Height:</span> {data.heightFt} feet</div>
                  <div><span className="font-medium w-20 inline-block">Volume:</span> {yards} cubic yards ({yards * 27} cubic feet)</div>
                </div>
              </div>
            </section>

            {/* What fits / doesn't fit */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-5">
                What Fits in a {yards} Yard Dumpster?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="rounded-xl border border-green-200 bg-green-50 p-5">
                  <h3 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" /> What Fits
                  </h3>
                  <ul className="space-y-2">
                    {data.whatFits.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 text-green-700 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl border border-red-100 bg-red-50 p-5">
                  <h3 className="font-semibold text-red-800 mb-3 flex items-center gap-2">
                    <XCircle className="h-5 w-5" /> What Doesn&apos;t Fit Well
                  </h3>
                  <ul className="space-y-2">
                    {data.doesNotFit.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                        <XCircle className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Best for / not for */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-5">
                Is a {yards} Yard Dumpster Right for Your Project?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Best for:</h3>
                  <ul className="space-y-2">
                    {data.bestFor.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Not ideal for:</h3>
                  <ul className="space-y-2">
                    {data.notGoodFor.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                        <XCircle className="h-4 w-4 text-red-400 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Heavy materials note */}
            <div className="rounded-xl border border-amber-200 bg-amber-50 p-5 flex gap-3">
              <Info className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-amber-900 mb-1">Heavy Material Note</p>
                <p className="text-sm text-amber-800">{data.heavyMaterialNote}</p>
              </div>
            </div>

            {/* Pricing section */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-5">
                How Much Does a {yards} Yard Dumpster Cost?
              </h2>
              <div className="rounded-xl border border-gray-200 bg-white overflow-hidden">
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-extrabold text-gray-900">
                      {formatPrice(data.avgPriceLow)}–{formatPrice(data.avgPriceHigh)}
                    </span>
                    <span className="text-gray-500 text-sm">national average</span>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">
                    Includes delivery, pickup, and standard weight allowance ({data.rentalDays} rental).
                    Actual price varies by city, company, and debris type.
                  </p>
                </div>
                <div className="p-6 space-y-3 text-sm">
                  {[
                    { label: 'Delivery & pickup', value: 'Included' },
                    { label: 'Rental duration', value: data.rentalDays },
                    { label: 'Weight limit', value: data.weightLimit },
                    { label: 'Extra days', value: '$5–$15/day' },
                    { label: 'Weight overage', value: '$60–$100/ton' },
                    { label: 'Street permit (if needed)', value: '$20–$100' },
                  ].map((row) => (
                    <div key={row.label} className="flex justify-between text-gray-700">
                      <span className="text-gray-500">{row.label}</span>
                      <span className="font-medium">{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Find Near You */}
            <section className="rounded-xl border border-green-200 bg-green-50 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                Find a {yards}-Yard Dumpster Near You
              </h2>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                Prices for {yards}-yard roll-offs vary by city based on local landfill fees and competition.
                Browse your city to compare local companies, see area pricing, and get free quotes.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/dumpster-rental"
                  className="flex-1 rounded-lg bg-green-700 px-5 py-3 text-center font-bold text-white hover:bg-green-800 transition"
                >
                  Find Local Companies
                </Link>
                <Link
                  href="/dumpster-rental-cost"
                  className="flex-1 rounded-lg border border-green-600 px-5 py-3 text-center font-semibold text-green-700 hover:bg-green-50 transition"
                >
                  See Pricing by City
                </Link>
              </div>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-5">
                {yards} Yard Dumpster — Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {data.faqs.map((faq) => (
                  <div key={faq.q} className="rounded-xl border border-gray-200 bg-white p-5">
                    <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <aside className="space-y-5">

            {/* CTA */}
            <div className="rounded-xl border border-green-200 bg-green-50 p-6">
              <h3 className="font-bold text-gray-900 text-lg mb-1">Ready to Rent?</h3>
              <p className="text-sm text-gray-600 mb-4">
                Find local companies that rent {yards}-yard dumpsters. Compare prices and get free quotes.
              </p>
              <Link
                href="/dumpster-rental"
                className="block w-full rounded-lg bg-green-700 py-3 text-center font-bold text-white hover:bg-green-800 transition"
              >
                Find Local Companies
              </Link>
            </div>

            {/* Quick specs */}
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <h3 className="font-bold text-gray-900 mb-3">Quick Specs</h3>
              <div className="space-y-2 text-sm">
                {[
                  { label: 'Size', value: `${yards} cubic yards` },
                  { label: 'Dimensions', value: data.dimensions },
                  { label: 'Capacity', value: data.equivalent },
                  { label: 'Weight limit', value: data.weightLimit },
                  { label: 'Rental period', value: data.rentalDays },
                  { label: 'Avg. price', value: `${formatPrice(data.avgPriceLow)}–${formatPrice(data.avgPriceHigh)}` },
                ].map((spec) => (
                  <div key={spec.label} className="flex justify-between gap-2">
                    <span className="text-gray-500">{spec.label}</span>
                    <span className="font-medium text-gray-900 text-right">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Other sizes */}
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <h3 className="font-bold text-gray-900 mb-3">Compare Other Sizes</h3>
              <div className="space-y-2">
                {otherSizes.map((size) => {
                  const s = SIZE_DATA[size]
                  return (
                    <Link
                      key={size}
                      href={`/dumpster-sizes/${size}-yard`}
                      className="flex items-center justify-between text-sm text-gray-700 hover:text-green-700 transition group"
                    >
                      <span>{size} Yard — {formatPrice(s.avgPriceLow)}–{formatPrice(s.avgPriceHigh)}</span>
                      <ArrowRight className="h-3.5 w-3.5 text-gray-400 group-hover:text-green-700 transition" />
                    </Link>
                  )
                })}
                <Link
                  href="/dumpster-sizes"
                  className="flex items-center gap-1 text-sm font-medium text-green-700 hover:text-green-700 transition mt-1 pt-1 border-t border-gray-100"
                >
                  Full size guide <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Use cases / category links */}
            {SIZE_TO_CATEGORIES[yards] && (
              <div className="rounded-xl border border-gray-200 bg-white p-5">
                <h3 className="font-bold text-gray-900 mb-3">Common Use Cases</h3>
                <div className="space-y-2">
                  {SIZE_TO_CATEGORIES[yards].map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex items-center justify-between text-sm text-gray-700 hover:text-green-700 transition group"
                    >
                      <span>{link.label}</span>
                      <ArrowRight className="h-3.5 w-3.5 text-gray-400 group-hover:text-green-700 transition shrink-0" />
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Related guides */}
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <h3 className="font-bold text-gray-900 mb-3">Related Guides</h3>
              <div className="space-y-2">
                {[
                  ...(yards === 20 || yards === 30
                    ? [{ label: '20 Yard vs 30 Yard: Which to Choose?', href: '/20-yard-dumpster-vs-30-yard-dumpster' }]
                    : []),
                  { label: 'All Roll-Off Dumpster Sizes', href: '/roll-off-dumpster-sizes' },
                  { label: 'Weight Limit Calculator', href: '/dumpster-weight-limit-calculator' },
                  { label: 'Do You Need a Permit?', href: '/dumpster-rental-permit' },
                  { label: 'How Long Can You Keep a Dumpster?', href: '/how-long-can-you-keep-a-rental-dumpster' },
                  { label: 'What Can You Put in a Dumpster?', href: '/what-can-you-put-in-a-dumpster' },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center justify-between text-sm text-gray-700 hover:text-green-700 transition group"
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="h-3.5 w-3.5 text-gray-400 group-hover:text-green-700 transition shrink-0" />
                  </Link>
                ))}
              </div>
            </div>

          </aside>
        </div>
      </div>
    </>
  )
}
