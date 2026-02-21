import { formatPrice } from '@/lib/utils'

export interface CategoryData {
  slug: string
  primaryKeyword: string
  h1: string
  metaTitle: string
  metaDescription: string
  intro: string
  stats: { label: string; value: string }[]
  why: { title: string; desc: string }[]
  sizes: { yards: number; reason: string }[]
  tips: string[]
  faqs: { q: string; a: string }[]
}

export const CATEGORY_DATA: Record<string, CategoryData> = {
  'roll-off': {
    slug: 'roll-off',
    primaryKeyword: 'roll off dumpster rental',
    h1: 'Roll-Off Dumpster Rental — How It Works & What to Expect',
    metaTitle: 'Roll-Off Dumpster Rental Guide (2026) — Sizes, Pricing & How to Rent',
    metaDescription:
      'Everything about roll-off dumpster rental: how it works, sizes (10–40 yard), pricing, what you can dump, and how to find the best local company.',
    intro: `A roll-off dumpster is the large, rectangular open-top container you see parked in driveways and job sites across the US. It gets its name from the way it's delivered — the container rolls off the back of a specialized truck onto your property. Roll-off dumpsters are the go-to choice for any project generating significant waste: home cleanouts, renovations, roofing, construction, and landscaping. Unlike the smaller front-load bins used for regular trash service, roll-offs are rented for a specific project and hauled away when you're done.`,
    stats: [
      { label: 'Sizes available', value: '10–40 cubic yards' },
      { label: 'Avg. rental period', value: '7–14 days' },
      { label: 'Avg. price range', value: '$275–$750' },
      { label: 'Weight limit', value: '1–10 tons' },
    ],
    why: [
      {
        title: 'Open-top access',
        desc: 'Walk debris right in — no lifting over a wall. Most roll-offs have a door at one end for wheelbarrow access on heavy jobs.',
      },
      {
        title: 'Delivered to your door',
        desc: 'The truck drops the container exactly where you need it — driveway, alley, parking lot, or job site. Pickup is scheduled at your convenience.',
      },
      {
        title: 'Any project size',
        desc: 'Five standard sizes handle everything from a single-room cleanout (10-yard) to a major commercial construction project (40-yard).',
      },
      {
        title: 'Flexible rental periods',
        desc: 'Standard rentals run 7–14 days. Need longer? Extensions are available for $5–$15/day — ask your provider upfront.',
      },
      {
        title: 'All debris types accepted',
        desc: 'Household junk, construction materials, roofing shingles, yard waste, furniture, appliances — almost anything non-hazardous.',
      },
      {
        title: 'Flat-rate pricing',
        desc: 'Most companies quote an all-in price covering delivery, pickup, and standard weight. No surprise haul fees when the job is done.',
      },
    ],
    sizes: [
      { yards: 10, reason: 'Single room cleanouts, small bathroom remodels, minor landscaping' },
      { yards: 20, reason: 'Whole-home cleanouts, roofing, large renovations — most popular size' },
      { yards: 30, reason: 'Large remodels, new construction, commercial tenant improvement' },
      { yards: 40, reason: 'Major commercial demolition and construction projects' },
    ],
    tips: [
      'Measure your driveway before booking — roll-offs need 60 ft of approach clearance for the truck.',
      'Check for overhead wires or trees at the drop spot before the truck arrives.',
      'If the dumpster sits on a public street, ask your provider if a street permit is needed ($20–$100).',
      'Fill heaviest materials first (concrete, dirt), then lighter debris on top.',
      'Never load above the fill line — overfilled containers are illegal to transport.',
    ],
    faqs: [
      {
        q: 'How much does roll-off dumpster rental cost?',
        a: 'Roll-off dumpster rental typically costs $275–$750 depending on size and location. A 10-yard runs $275–$450 while a 40-yard runs $475–$750. The price usually includes delivery, pickup, and 1–3 tons of debris.',
      },
      {
        q: 'How long can I keep a roll-off dumpster?',
        a: 'Standard rentals include 7–14 days. Most projects finish within this window. If you need more time, extensions cost $5–$15 per extra day. Book extra days upfront if you think you\'ll need them — it\'s cheaper.',
      },
      {
        q: 'What can\'t I put in a roll-off dumpster?',
        a: 'Prohibited items include: hazardous materials (paint, solvents, asbestos), propane tanks, batteries, tires, electronics, and liquids. Your provider will give you a full list at booking.',
      },
      {
        q: 'Do I need a permit for a roll-off dumpster?',
        a: 'If the dumpster sits entirely on your private property (driveway), no permit is needed. If it goes on the street or sidewalk, most cities require a permit ($20–$100). Many rental companies handle the permit for you.',
      },
      {
        q: 'What size roll-off do I need?',
        a: 'The 20-yard is the most popular all-around size. For a bathroom remodel or single-room cleanout, choose a 10-yard. For roofing or whole-home renovation, go with a 20. For construction or large commercial work, choose a 30 or 40-yard.',
      },
    ],
  },

  construction: {
    slug: 'construction',
    primaryKeyword: 'construction dumpster rental',
    h1: 'Construction Dumpster Rental — Sizes, Pricing & What to Know',
    metaTitle: 'Construction Dumpster Rental (2026) — Sizes, Pricing & Best Practices',
    metaDescription:
      'Rent a dumpster for your construction project. Compare sizes, pricing, and weight limits for residential and commercial construction waste disposal.',
    intro: `Construction projects generate enormous amounts of debris fast — lumber, drywall, concrete, roofing materials, metal, packaging, and mixed waste all pile up simultaneously. A construction dumpster rental keeps your job site clean, compliant with waste management regulations, and moving efficiently. Whether you're framing a new home, doing a gut renovation, or managing a commercial build, having the right container on site from day one is non-negotiable. Construction dumpsters differ from standard residential rentals in capacity, weight tolerance, and sometimes material restrictions — here's what you need to know before you book.`,
    stats: [
      { label: 'Recommended sizes', value: '20–40 cubic yards' },
      { label: 'Avg. weight limit', value: '3–10 tons' },
      { label: 'Typical rental period', value: '7–30 days' },
      { label: 'Avg. price range', value: `${formatPrice(375)}–${formatPrice(750)}` },
    ],
    why: [
      {
        title: 'Job site compliance',
        desc: 'Most municipalities require active construction sites to have waste disposal on-site. A roll-off keeps your project code-compliant and avoids fines.',
      },
      {
        title: 'High weight capacity',
        desc: 'Construction debris is heavy. Concrete, masonry, roofing shingles, and lumber add up fast. Construction-rated containers handle 3–10+ tons.',
      },
      {
        title: 'Flexible scheduling',
        desc: 'Long-term job site rentals with swap-out service available. Get a full container swapped for an empty one without downtime.',
      },
      {
        title: 'Mixed debris accepted',
        desc: 'Construction dumpsters accept lumber, drywall, concrete (with limits), roofing, insulation, metal, cardboard, and general site waste.',
      },
      {
        title: 'Keeps crews productive',
        desc: 'A clean, organized job site is a faster job site. Workers spend less time stepping around debris and more time building.',
      },
      {
        title: 'Proper disposal',
        desc: 'Reputable providers ensure construction waste goes to licensed facilities. Protects you from illegal dumping liability.',
      },
    ],
    sizes: [
      { yards: 20, reason: 'Small residential renovations and additions' },
      { yards: 30, reason: 'New home construction and major remodels — most popular for contractors' },
      { yards: 40, reason: 'Commercial builds, large multi-unit residential, demolition projects' },
    ],
    tips: [
      'For concrete and masonry, always confirm the weight limit before loading — these materials max out containers fast.',
      'On active job sites, consider a swap service: the provider hauls the full container and returns an empty one.',
      'Separate recyclables (metal, clean lumber, cardboard) — some providers offer recycling rebates.',
      'Position the container near the work area but away from access paths for equipment.',
      'For multi-phase projects, book in advance — construction season creates high demand and limited availability.',
    ],
    faqs: [
      {
        q: 'What size dumpster do I need for a construction project?',
        a: 'For residential new construction or major remodels, a 30-yard is the standard. Small renovations fit in a 20-yard. Commercial projects and full demolitions typically need 40-yard containers, sometimes multiple.',
      },
      {
        q: 'Can I put concrete in a construction dumpster?',
        a: 'Yes, but concrete is extremely heavy and most standard roll-offs have weight limits that concrete will quickly exceed. Many providers offer specialty "heavy material" mini dumpsters (4–10 yards) specifically for concrete, dirt, and masonry.',
      },
      {
        q: 'How long can I keep a construction dumpster?',
        a: 'Most construction rentals run 7–30 days. Long-term job site rentals are available with monthly pricing. Swap service is available for active sites that fill containers regularly.',
      },
      {
        q: 'How much does a construction dumpster cost?',
        a: 'Expect $375–$750 for a 20–40 yard container depending on location and rental duration. Long-term job site rentals may be priced per swap or monthly. Ask about contractor discounts — many providers offer volume pricing.',
      },
      {
        q: 'Do I need a permit for a construction dumpster?',
        a: 'If the container is on private property (your lot or parking area), no permit is needed. If it must go on public right-of-way, check with your city. Most contractors factor permit costs into project budgets.',
      },
    ],
  },

  residential: {
    slug: 'residential',
    primaryKeyword: 'residential dumpster rental',
    h1: 'Residential Dumpster Rental — For Homeowners Who Mean Business',
    metaTitle: 'Residential Dumpster Rental (2026) — Sizes, Cost & What You Can Dump',
    metaDescription:
      'Renting a dumpster for your home project? Compare sizes, costs, and tips for residential roll-off dumpster rental. Find the right container for cleanouts, renovations, and more.',
    intro: `Residential dumpster rental gives homeowners the same professional waste disposal tool that contractors have used for decades. Whether you're clearing out decades of accumulated stuff, knocking out a basement renovation, replacing a roof, or doing major landscaping, a roll-off dumpster dropped in your driveway is dramatically more efficient than multiple trips to the transfer station. Most homeowners are surprised at how easy it is — you call, they deliver, you fill it at your own pace, they haul it away. No renting a truck, no dump fees, no multiple trips.`,
    stats: [
      { label: 'Most popular size', value: '10–20 cubic yards' },
      { label: 'Avg. rental period', value: '7–10 days' },
      { label: 'Typical price', value: `${formatPrice(275)}–${formatPrice(575)}` },
      { label: 'Driveway friendly', value: 'All standard sizes' },
    ],
    why: [
      {
        title: 'Work at your own pace',
        desc: 'Unlike renting a truck, a dumpster sits there for 7–10 days. Fill it room by room, day by day, without rushing.',
      },
      {
        title: 'No heavy lifting to a truck',
        desc: 'Most roll-offs have an end door at ground level. Walk or wheel debris straight in — no lifting overhead into a truck bed.',
      },
      {
        title: 'Fits in most driveways',
        desc: 'Standard residential sizes (10–20 yard) fit in typical driveways. The truck needs about 60 ft of clear approach to drop the container.',
      },
      {
        title: 'Protects your lawn',
        desc: 'Providers typically place boards under the container to protect your driveway surface. Ask when booking.',
      },
      {
        title: 'One flat price',
        desc: 'Delivery, pickup, disposal, and standard tonnage all included. No hidden fees for the fourth dump run.',
      },
      {
        title: 'Any residential debris',
        desc: 'Furniture, appliances, carpet, drywall, roofing, yard waste, cabinets, and general household junk — all accepted.',
      },
    ],
    sizes: [
      { yards: 10, reason: 'Bathroom remodel, garage cleanout, 1–2 room declutter' },
      { yards: 15, reason: 'Kitchen renovation, multi-room flooring, medium cleanout' },
      { yards: 20, reason: 'Whole-home cleanout, roofing, large renovation — most popular residential size' },
    ],
    tips: [
      'For most home cleanouts, the 10 or 20-yard is the right call. When in doubt, go one size up — it\'s cheaper than a second rental.',
      'Schedule delivery the day before you start — arrive fresh and start loading immediately.',
      'Keep your neighbor in mind: position the container so it doesn\'t block their driveway or sightline.',
      'Check your HOA rules — some prohibit visible dumpsters or require placement in specific spots.',
      'Sort as you go: donate reusable items, recycle what you can, and dump the rest.',
    ],
    faqs: [
      {
        q: 'What size dumpster do I need for a home cleanout?',
        a: 'For an average 1,500–2,500 sq ft home cleanout, a 20-yard handles most situations. If you\'re clearing a single room or garage, a 10-yard is plenty. Very large homes or those with heavy accumulation may need a 30-yard.',
      },
      {
        q: 'Will the dumpster damage my driveway?',
        a: 'It can, especially on cracked concrete or asphalt. Ask your provider to use protective boards (planks) under the container. Most good companies do this as standard practice.',
      },
      {
        q: 'How much does residential dumpster rental cost?',
        a: 'For homeowners, expect $275–$575 depending on size and location. A 10-yard for a small project runs $275–$450. A 20-yard for a whole-home cleanout runs $375–$575. All-in pricing covers delivery, pickup, and standard weight.',
      },
      {
        q: 'Can I put old appliances in a residential dumpster?',
        a: 'Most appliances are accepted — washing machines, dryers, dishwashers, stoves. Refrigerators and AC units require freon removal first. Ask your provider specifically, as policies vary.',
      },
      {
        q: 'How quickly can I get a dumpster delivered?',
        a: 'Most local companies offer next-day or same-day delivery. Calling 2–3 days ahead ensures better availability. Peak season (spring/summer) can have tighter schedules.',
      },
    ],
  },

  commercial: {
    slug: 'commercial',
    primaryKeyword: 'commercial dumpster rental',
    h1: 'Commercial Dumpster Rental — Bulk Waste Solutions for Businesses',
    metaTitle: 'Commercial Dumpster Rental (2026) — For Businesses, Contractors & Property Managers',
    metaDescription:
      'Commercial dumpster rental for businesses, contractors, and property managers. Compare sizes, pricing, and ongoing service options for commercial waste disposal needs.',
    intro: `Commercial dumpster rental covers a wide range of business needs — from a retail store clearing out old inventory to a property management company handling ongoing waste for a multi-unit complex. Unlike residential one-time rentals, commercial clients often need scheduled pickups, swap services, or long-term container placement. The right commercial provider understands job site timelines, volume pricing, and the regulatory requirements that come with business waste disposal. Here's what to know before you rent.`,
    stats: [
      { label: 'Common sizes', value: '20–40 cubic yards' },
      { label: 'Service type', value: 'One-time or recurring' },
      { label: 'Avg. price range', value: `${formatPrice(375)}–${formatPrice(750)}+` },
      { label: 'Permit handling', value: 'Provider-managed' },
    ],
    why: [
      {
        title: 'Volume pricing available',
        desc: 'Contractors and property managers renting multiple containers or scheduling recurring service can negotiate significantly better rates.',
      },
      {
        title: 'Swap-out service',
        desc: 'Full container hauled away, empty one returned — keeping your site productive without downtime. Available on request.',
      },
      {
        title: 'Permit and compliance management',
        desc: 'Commercial providers routinely handle street permits, weight documentation, and disposal manifests required for business projects.',
      },
      {
        title: 'Flexible placement',
        desc: 'Parking lots, loading docks, alleys, commercial properties — providers are experienced with commercial access requirements.',
      },
      {
        title: 'Mixed commercial debris',
        desc: 'Retail fixtures, office furniture, packaging, construction waste, tenant improvement debris — all accepted in commercial roll-offs.',
      },
      {
        title: 'Priority scheduling',
        desc: 'Established commercial accounts often get priority delivery windows — critical when your crews are on the clock.',
      },
    ],
    sizes: [
      { yards: 20, reason: 'Small commercial renovations, retail cleanouts, office moves' },
      { yards: 30, reason: 'Tenant improvement, restaurant renovation, mid-size commercial projects' },
      { yards: 40, reason: 'Large commercial construction, building demolition, industrial cleanouts' },
    ],
    tips: [
      'If you\'re a contractor who rents regularly, ask about account pricing — most providers offer 10–20% discounts.',
      'For ongoing projects, negotiate a swap rate upfront rather than paying standard haul-off each time.',
      'Keep a copy of your disposal manifests — some jobs require documented waste disposal for permitting.',
      'Plan container placement around your commercial access hours — delivery trucks need clearance.',
      'For multi-tenant buildings, verify who\'s responsible for waste before booking.',
    ],
    faqs: [
      {
        q: 'How much does commercial dumpster rental cost?',
        a: 'Commercial roll-off rental typically runs $375–$750+ per haul depending on size, location, and debris type. Long-term or recurring commercial accounts often qualify for lower rates. Some providers charge by the ton for high-volume commercial waste.',
      },
      {
        q: 'What\'s the difference between commercial and residential dumpster rental?',
        a: 'Commercial rentals often involve larger containers (30–40 yard), longer placements, swap services, and recurring pickup schedules. Pricing is often negotiated for volume. Residential is typically one-time, shorter duration, and smaller containers.',
      },
      {
        q: 'Can I get a long-term commercial dumpster rental?',
        a: 'Yes — many providers offer monthly or open-ended commercial contracts. This is common for construction sites, property managers, and businesses undergoing extended renovations.',
      },
      {
        q: 'Do commercial dumpster rentals require a permit?',
        a: 'If placed on private commercial property, typically no. Street placement requires city permits. Most commercial providers handle permit applications as part of their service.',
      },
      {
        q: 'Can I rent multiple dumpsters at once for a commercial project?',
        a: 'Absolutely — larger commercial projects often run multiple containers simultaneously (e.g., one for concrete, one for general debris). Ask providers about multi-container pricing.',
      },
    ],
  },

  concrete: {
    slug: 'concrete',
    primaryKeyword: 'concrete dumpster rental',
    h1: 'Concrete Dumpster Rental — Heavy Material Disposal Done Right',
    metaTitle: 'Concrete Dumpster Rental (2026) — Heavy Debris Disposal, Pricing & Sizes',
    metaDescription:
      'Renting a dumpster for concrete, dirt, or masonry? Learn about weight limits, specialty containers, and pricing for heavy material disposal.',
    intro: `Concrete, dirt, brick, asphalt, and stone are among the heaviest materials you can dispose of — and they require special handling when renting a dumpster. Standard roll-off containers have weight limits of 2–6 tons, and a half-full container of broken concrete can easily max that out. For heavy debris like concrete and masonry, most rental companies offer smaller, reinforced "heavy material" dumpsters — typically 4–12 cubic yards — specifically engineered for dense loads. Renting the wrong container can result in overage fees of $80–$100 per extra ton, so getting this right at booking matters.`,
    stats: [
      { label: 'Best container size', value: '4–12 cubic yards' },
      { label: 'Concrete weight', value: '~150 lbs per cubic foot' },
      { label: 'Weight limit', value: '2–5 tons typical' },
      { label: 'Overage fee', value: '$60–$100/ton' },
    ],
    why: [
      {
        title: 'Purpose-built for heavy debris',
        desc: 'Heavy material dumpsters are smaller but reinforced — they handle the weight that would overload a standard roll-off.',
      },
      {
        title: 'Avoid costly overage fees',
        desc: 'Booking the right container upfront avoids $80–100/ton overage charges. The right size costs less than the wrong size overfilled.',
      },
      {
        title: 'Driveway safe',
        desc: 'Smaller heavy material containers are lighter when empty, reducing risk of cracking asphalt or concrete driveways.',
      },
      {
        title: 'Proper disposal',
        desc: 'Reputable providers take concrete to licensed recycling facilities where it\'s crushed and reused as aggregate — an environmentally responsible outcome.',
      },
    ],
    sizes: [
      { yards: 10, reason: 'Mixed debris with some concrete — confirm weight allowance' },
      { yards: 15, reason: 'Small concrete jobs with mixed materials' },
      { yards: 20, reason: 'Only if concrete is mixed with light debris; confirm tonnage' },
    ],
    tips: [
      'Always tell the provider upfront that you\'re disposing of concrete — they\'ll recommend the right container and quote the right price.',
      'Never mix concrete with light debris in a container without confirming the weight — you\'ll likely exceed the limit.',
      'Break concrete into smaller pieces before loading — easier to fill and more efficient use of container space.',
      'Wet concrete weighs significantly more than dry/broken concrete — factor this in for fresh pours.',
      'Ask if the provider recycles concrete — some offer lower rates for clean concrete that goes to recycling.',
    ],
    faqs: [
      {
        q: 'How much does it cost to rent a dumpster for concrete?',
        a: 'Specialty heavy material containers for concrete run $150–$400 depending on size and location. Standard roll-offs for mixed loads with some concrete cost $275–$575. Always confirm weight limits and per-ton overage charges when booking.',
      },
      {
        q: 'What size dumpster do I need for concrete?',
        a: 'For pure concrete disposal, a 4–12 yard heavy material container is the right tool. For a small patio demo (under 200 sq ft), a 4–6 yard mini is usually sufficient. For larger concrete removal, ask your provider — they\'ll calculate by estimated weight, not cubic yards.',
      },
      {
        q: 'Can I put concrete in a regular dumpster?',
        a: 'In small amounts, yes — but you\'ll likely hit the weight limit before the container looks full. This triggers overage fees of $60–$100 per extra ton. For any significant concrete volume, book a specialty heavy container.',
      },
      {
        q: 'Can I mix concrete and other debris in the same dumpster?',
        a: 'Yes, but carefully. Mix light debris (wood, drywall) with concrete to balance the weight. Never fill an entire container with concrete unless it\'s rated for it. Ask your provider for their mixed-load policy.',
      },
      {
        q: 'Do companies recycle concrete?',
        a: 'Many do — crushed concrete is valuable as aggregate material for road base and construction fill. Some providers offer lower rates for clean (uncontaminated) concrete loads. Ask about their recycling policy when booking.',
      },
    ],
  },

  'yard-waste': {
    slug: 'yard-waste',
    primaryKeyword: 'yard waste dumpster rental',
    h1: 'Yard Waste Dumpster Rental — Landscaping & Garden Debris Disposal',
    metaTitle: 'Yard Waste Dumpster Rental (2026) — Landscaping Debris, Brush & Tree Removal',
    metaDescription:
      'Renting a dumpster for yard waste, landscaping, or tree removal? Learn what\'s accepted, best sizes, and pricing for organic debris disposal.',
    intro: `Major landscaping projects generate more debris than most homeowners expect. A tree removal, overgrown shrub removal, sod replacement, or large-scale yard cleanup can quickly fill several pickup truck loads with branches, brush, grass, mulch, and soil. A yard waste dumpster rental eliminates the multiple trips to the green waste facility and lets you work efficiently across days. Most providers accept organic yard debris alongside regular waste in standard containers, though some municipalities require separate disposal. Understanding what's accepted — and what isn't — saves you time and avoids extra charges.`,
    stats: [
      { label: 'Popular sizes', value: '10–20 cubic yards' },
      { label: 'Brush/branches', value: 'Accepted (confirm locally)' },
      { label: 'Soil/dirt limits', value: 'Weight-dependent' },
      { label: 'Avg. price range', value: `${formatPrice(275)}–${formatPrice(575)}` },
    ],
    why: [
      {
        title: 'Eliminate dump runs',
        desc: 'Load at your own pace over days without multiple trips to the transfer station. Fill it, they haul it — one call, one price.',
      },
      {
        title: 'Handles bulk organic debris',
        desc: 'Branches, logs, brush, sod, mulch, dirt, and mixed yard waste all fit. No bundling or bagging required for most providers.',
      },
      {
        title: 'Seasonal convenience',
        desc: 'Spring cleanups and fall leaf/brush removal generate the most yard waste — order early during peak season as demand spikes.',
      },
      {
        title: 'No HOA conflict',
        desc: 'A dumpster keeps yard debris contained and out of sight — no sprawling brush piles on the lawn attracting complaints.',
      },
    ],
    sizes: [
      { yards: 10, reason: 'Small yard cleanup, garden clearing, minor tree trimming' },
      { yards: 15, reason: 'Medium landscaping project, shrub removal, partial yard overhaul' },
      { yards: 20, reason: 'Large yard overhaul, full tree removal, sod replacement across entire property' },
    ],
    tips: [
      'Brush and branches are bulky but light — a 10-yard may fill up fast but stay under the weight limit. Plan for volume, not weight.',
      'Soil and dirt are heavy — don\'t overfill with dirt. Mix soil with lighter organic debris to stay under the weight limit.',
      'Cut large branches into 4-foot sections before loading — they stack more efficiently and you\'ll fit more in the container.',
      'Ask if your provider charges extra for yard waste — some areas require green waste to go to a composting facility at higher cost.',
      'Check if your municipality has curbside green waste pickup before renting — it may be free for smaller amounts.',
    ],
    faqs: [
      {
        q: 'Can I put yard waste in a regular dumpster?',
        a: 'Usually yes — most providers accept mixed loads including yard waste. Some areas require separate disposal of organic material. Confirm with your provider at booking.',
      },
      {
        q: 'What yard debris is accepted in a dumpster?',
        a: 'Branches, brush, grass clippings, sod, leaves, mulch, garden plants, and small logs are generally accepted. Large tree trunks may be restricted due to weight. Dirt is accepted in limited amounts.',
      },
      {
        q: 'How much does yard waste dumpster rental cost?',
        a: 'Expect $275–$575 for a standard 10–20 yard container. Some areas have surcharges for organic/green waste disposal ($25–$75 extra). Ask your provider about yard waste pricing specifically.',
      },
      {
        q: 'What size dumpster do I need for a tree removal?',
        a: 'A single medium tree (8–12 inch trunk diameter) typically fills a 10-yard container. Multiple trees or a large mature tree may need a 20-yard. Your tree service may arrange disposal separately — confirm who\'s handling it.',
      },
      {
        q: 'Can I put dirt and soil in a yard waste dumpster?',
        a: 'Yes, but in limited amounts. Soil is heavy — a few inches of dirt can significantly add to weight. Most providers limit dirt to 1–2 tons maximum. Mixing light organic debris with soil helps balance the load.',
      },
    ],
  },

  roofing: {
    slug: 'roofing',
    primaryKeyword: 'roofing dumpster rental',
    h1: 'Roofing Dumpster Rental — The Right Container for Shingle Tear-Off',
    metaTitle: 'Roofing Dumpster Rental (2026) — Shingles, Weight Limits & Best Sizes',
    metaDescription:
      'Renting a dumpster for a roofing project? Compare sizes and pricing for roofing shingle disposal, weight limits, and what roofing contractors need to know.',
    intro: `Asphalt shingles are heavier than they look. A single layer of standard 3-tab shingles weighs about 2–4 lbs per square foot — meaning a 1,500 sq ft roof tear-off generates 3,000–6,000 lbs of debris before you account for underlayment, nails, and flashing. Multiple layers multiply that weight fast. Getting the right dumpster for a roofing job is less about volume than it is about weight — choose too small, or without confirming the weight allowance, and you'll pay significant overage fees. Here's how to get it right.`,
    stats: [
      { label: 'Shingle weight', value: '2–4 lbs/sq ft per layer' },
      { label: 'Recommended size', value: '20–30 cubic yards' },
      { label: 'Avg. rental period', value: '1–3 days' },
      { label: 'Avg. price range', value: `${formatPrice(375)}–${formatPrice(650)}` },
    ],
    why: [
      {
        title: 'Fast turnaround',
        desc: 'Roofing jobs are usually done in 1–3 days. Most providers can deliver and pick up within your project window.',
      },
      {
        title: 'Weight-rated containers',
        desc: 'Roofing-specific rentals are quoted with actual weight in mind, not just volume. Get a container rated for shingle weight, not just cubic yards.',
      },
      {
        title: 'Convenient driveway placement',
        desc: 'Positioned under the eave where shingles fall directly in — saves significant time vs. tarping and hauling.',
      },
      {
        title: 'Handles multiple layers',
        desc: 'Old homes with 2–3 layers of shingles generate 2–3x the weight. 30-yard containers handle multi-layer tear-offs on average homes.',
      },
    ],
    sizes: [
      { yards: 20, reason: 'Single-layer tear-off on roofs up to 1,500 sq ft' },
      { yards: 30, reason: 'Multi-layer or large single-story homes (1,500–3,000 sq ft)' },
      { yards: 40, reason: 'Commercial roofing or very large residential multi-layer jobs' },
    ],
    tips: [
      'Tell your provider the roof square footage AND number of existing layers — this determines weight, not just volume.',
      'Position the container directly under the eave where debris will fall. Every extra step costs roofing crews time.',
      'Ask about roofing-specific weight allowances — some companies offer higher tonnage for shingle jobs vs. mixed debris.',
      'If you\'re a roofer who books frequently, ask for contractor pricing — many companies discount for repeat business.',
      'Shingles with asbestos (pre-1980 homes) require specialized disposal — confirm with your provider before booking.',
    ],
    faqs: [
      {
        q: 'What size dumpster do I need for a roofing job?',
        a: 'For a single layer of shingles on a 1,500 sq ft roof, a 20-yard container is usually sufficient. Two layers on that same roof → 30-yard. Large homes or commercial roofing → 40-yard. Always tell your provider the square footage and number of layers.',
      },
      {
        q: 'How much does a roofing dumpster rental cost?',
        a: 'Roofing dumpster rental typically runs $375–$650 for a 20–30 yard container. Roofing shingles are heavy, so providers may quote a higher rate due to the weight. Confirm what tonnage is included before booking.',
      },
      {
        q: 'How long do I need to rent a dumpster for roofing?',
        a: 'Most roofing jobs complete in 1–3 days. Standard rentals are 7 days, so you won\'t need the full period. Some providers offer short-term roofing rentals at a discounted rate — ask when booking.',
      },
      {
        q: 'Can I mix other debris with roofing shingles?',
        a: 'Yes, but watch the weight. Shingles are already heavy — adding construction debris can push you over the weight limit quickly. If your weight allowance is tight, consider a separate container for non-roofing debris.',
      },
      {
        q: 'What about asbestos shingles on older roofs?',
        a: 'Homes built before 1980 may have asbestos-containing shingles or underlayment. These cannot go in a standard dumpster — they require licensed hazardous waste disposal. Get your roof tested if you\'re unsure before booking any container.',
      },
    ],
  },
}
