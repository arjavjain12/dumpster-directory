import { createClient } from '@supabase/supabase-js'

const sb = createClient(
  'https://zeoritxrwngqpfoqsglh.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inplb3JpdHhyd25ncXBmb3FzZ2xoIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MTUyOTIwOCwiZXhwIjoyMDg3MTA1MjA4fQ.Vrg0qzzIB_nC831kBaU8cyKzCT-ptX0xFmCDXyzBWl0'
)

// ── 1. Fix Lubbock intro (Indian number format bug) ────────────────────────
async function fixLubbockIntro() {
  const { data: city } = await sb.from('cities').select('id,city_slug,state_slug,intro').eq('city_slug','lubbock').eq('state_slug','texas').single()
  if (!city) { console.log('Lubbock not found'); return }

  const fixed = city.intro.replace('2,83,565', '283,565')
  const { error } = await sb.from('cities').update({ intro: fixed }).eq('id', city.id)
  if (error) console.error('Lubbock intro fix failed:', error.message)
  else console.log('✅ Lubbock intro fixed')
}

// ── 2. Fix Clean Slate Lubbock description (fake phone in description) ─────
async function fixCleanSlateDescription() {
  const { data } = await sb.from('businesses').select('id,name,description').eq('slug','clean-slate-junk-removal-dumpsters').single()
  if (!data) { console.log('Clean Slate not found'); return }

  const fixed = data.description.replace('Call Clean Slate at 806-555-3141', 'Call Clean Slate at (806) 701-7379')
  const { error } = await sb.from('businesses').update({ description: fixed }).eq('id', data.id)
  if (error) console.error('Clean Slate fix failed:', error.message)
  else console.log('✅ Clean Slate description fixed')
}

// ── 3. Insert businesses for Bonita, CA (city_id: 3399) ───────────────────
const BONITA_CITY_ID = 3399

const BONITA_BUSINESSES = [
  {
    name: "Haul'n Off Dumpster Rentals",
    slug: 'hauln-off-dumpster-rentals',
    address: '3468 Citrus St Suite A, Lemon Grove, CA 91945',
    phone: '(619) 720-4511',
    website: 'https://www.haulnoff.com/',
    rating: 4.9,
    review_count: 119,
    description: "Haul'n Off Dumpster Rentals serves Bonita and South San Diego County with reliable roll-off dumpster delivery for home cleanouts, roof tear-offs, remodels, and construction debris. Rated 4.9/5 from 119 Google reviews, their team is known for fast same-day scheduling and transparent pricing. Call (619) 720-4511 or request a free quote online.",
  },
  {
    name: 'Veterans Dumpster Rental',
    slug: 'veterans-dumpster-rental',
    address: '8755 Winter Gardens Blvd, Lakeside, CA 92040',
    phone: '(619) 740-1194',
    website: 'http://veteransdumpsterrentals.com/',
    rating: 5.0,
    review_count: 53,
    description: 'Veterans Dumpster Rental brings veteran-owned professionalism to dumpster rentals throughout Bonita and the greater San Diego region. With a perfect 5.0/5 rating from 53 Google reviews, they offer 10–40 yard roll-off bins for home cleanouts, renovation debris, yard waste, and roofing projects. Open 24 hours — call (619) 740-1194 for a fast quote.',
  },
  {
    name: 'WM - San Diego Dumpster Rental',
    slug: 'wm-san-diego-dumpster-rental',
    address: 'San Diego, CA 92121',
    phone: '(619) 596-5100',
    website: 'https://www.wm.com/us/en/location/ca/san-diego/dumpster-rental-san-diego-ca',
    rating: 3.7,
    review_count: 872,
    description: 'WM (Waste Management) offers dumpster rental throughout San Diego County including Bonita, delivering 10–40 yard roll-off containers for residential and commercial projects. As the largest waste management company in North America, WM provides reliable scheduling and extended rental periods. Call (619) 596-5100 for current availability and pricing.',
  },
  {
    name: 'Jay Jay Dumpster Rental',
    slug: 'jay-jay-dumpster-rental',
    address: '2005 Highland Ave, National City, CA 91950',
    phone: '(619) 257-0520',
    website: null,
    rating: 5.0,
    review_count: 2,
    description: 'Jay Jay Dumpster Rental provides affordable roll-off dumpster service to Bonita and surrounding South Bay communities. Rated 5.0/5 by local customers, they handle home cleanouts, construction debris, and renovation waste with prompt delivery and pickup. Call (619) 257-0520 to get a same-day quote for your project.',
  },
  {
    name: 'SouthPoint Dumpster Rentals',
    slug: 'southpoint-dumpster-rentals',
    address: '311 F St, Chula Vista, CA 91910',
    phone: '(858) 288-4886',
    website: null,
    rating: null,
    review_count: 0,
    description: 'SouthPoint Dumpster Rentals serves Bonita and the South San Diego area with straightforward roll-off dumpster rentals for residential cleanouts, renovation projects, and landscaping debris. Conveniently located in Chula Vista, their team offers flexible scheduling and competitive pricing. Call (858) 288-4886 to get a quote for your next project.',
  },
  {
    name: 'Superior Dumpster Rentals Lemon Grove',
    slug: 'superior-dumpster-rentals-lemon-grove',
    address: '2731 Lemon Grove Ave, Lemon Grove, CA 91945',
    phone: '(858) 288-4893',
    website: null,
    rating: null,
    review_count: 0,
    description: 'Superior Dumpster Rentals serves Bonita and South San Diego County with roll-off containers for home and commercial projects. Offering 10–40 yard bins for cleanouts, roofing tear-offs, construction, and yard waste, their Lemon Grove team provides prompt delivery and pickup with no hidden fees. Call (858) 288-4893 to check availability.',
  },
  {
    name: 'Dumpster 4 Rental',
    slug: 'dumpster-4-rental',
    address: '15547 El Monte Rd, Lakeside, CA 92040',
    phone: '(855) 598-4848',
    website: 'https://dumpster4rental.com/',
    rating: 3.4,
    review_count: 53,
    description: 'Dumpster 4 Rental provides roll-off dumpster service to Bonita and the East San Diego County area, offering online estimates and on-site delivery for cleanouts, renovation debris, and construction waste. With 10–40 yard containers available, they accommodate projects of all sizes. Call (855) 598-4848 or visit their website for a free quote.',
  },
]

// ── 4. Insert businesses for El Cajon, CA (city_id: 461) ──────────────────
const ELCAJON_CITY_ID = 461

const ELCAJON_BUSINESSES = [
  {
    name: 'Veterans Dumpster Rental',
    slug: 'veterans-dumpster-rental',
    address: '8755 Winter Gardens Blvd, El Cajon, CA 92021',
    phone: '(619) 740-1194',
    website: 'http://veteransdumpsterrentals.com/',
    rating: 5.0,
    review_count: 53,
    description: 'Veterans Dumpster Rental brings veteran-owned expertise to roll-off dumpster service in El Cajon and the East County San Diego area. Rated a perfect 5.0/5 from 53 Google reviews, they deliver 10–40 yard bins for home cleanouts, roofing projects, renovation debris, and construction sites. Open 24 hours — call (619) 740-1194 for a fast, free quote.',
  },
  {
    name: "Haul'n Off Dumpster Rentals",
    slug: 'hauln-off-dumpster-rentals',
    address: '3468 Citrus St Suite A, Lemon Grove, CA 91945',
    phone: '(619) 720-4511',
    website: 'https://www.haulnoff.com/',
    rating: 4.9,
    review_count: 119,
    description: "Haul'n Off Dumpster Rentals serves El Cajon and San Diego's East County with same-day roll-off dumpster delivery for home cleanouts, roofing tear-offs, renovations, and construction projects. Rated 4.9/5 from 119 Google reviews, their team is known for honest pricing and quick turnarounds. Call (619) 720-4511 or request a free online quote.",
  },
  {
    name: 'WM - San Diego Dumpster Rental',
    slug: 'wm-san-diego-dumpster-rental',
    address: 'San Diego, CA 92121',
    phone: '(619) 596-5100',
    website: 'https://www.wm.com/us/en/location/ca/san-diego/dumpster-rental-san-diego-ca',
    rating: 3.7,
    review_count: 872,
    description: 'WM (Waste Management) offers roll-off dumpster rental throughout El Cajon and greater San Diego County, with 10–40 yard containers available for residential cleanouts, roofing, remodeling, and commercial projects. As the leading waste management provider in the region, WM offers flexible scheduling and extended rental periods. Call (619) 596-5100 for availability.',
  },
  {
    name: 'Mr. Franco Junk Removal & Dumpsters',
    slug: 'mr-franco-junk-removal-dumpsters',
    address: '12538 Royal Rd, El Cajon, CA 92021',
    phone: '(619) 646-7818',
    website: 'https://mrfrancojunk.com/',
    rating: 5.0,
    review_count: 85,
    description: 'Mr. Franco Junk Removal & Dumpsters is a top-rated El Cajon provider offering both junk removal and roll-off dumpster rental for home cleanouts, estate clearing, renovation debris, and yard waste. Rated 5.0/5 from 85 Google reviews, the team is known for prompt, courteous service and upfront pricing. Open 24 hours — call (619) 646-7818 for a same-day quote.',
  },
  {
    name: 'Trident Junk Removal & Dumpsters',
    slug: 'trident-junk-removal-dumpsters',
    address: '925 Eucalyptus Dr, El Cajon, CA 92020',
    phone: '(760) 871-8794',
    website: 'https://tridentjunkremoval.com/',
    rating: 5.0,
    review_count: 82,
    description: 'Trident Junk Removal & Dumpsters serves El Cajon with professional roll-off dumpster rental and full-service junk removal for home cleanouts, construction debris, roofing tear-offs, and commercial projects. Rated 5.0/5 from 82 Google reviews, the Trident team shows up on time and handles waste quickly. Call (760) 871-8794 for a fast, free estimate.',
  },
  {
    name: 'Dumpster 4 Rental',
    slug: 'dumpster-4-rental',
    address: '15547 El Monte Rd, Lakeside, CA 92040',
    phone: '(855) 598-4848',
    website: 'https://dumpster4rental.com/',
    rating: 3.4,
    review_count: 53,
    description: 'Dumpster 4 Rental provides on-demand roll-off dumpster service to El Cajon and surrounding East San Diego County communities. With online estimates and 10–40 yard containers for cleanouts, renovation, roofing, and construction projects, they make ordering a dumpster easy and affordable. Call (855) 598-4848 or get an instant quote on their website.',
  },
  {
    name: 'Jay Jay Dumpster Rental',
    slug: 'jay-jay-dumpster-rental',
    address: '2005 Highland Ave, National City, CA 91950',
    phone: '(619) 257-0520',
    website: null,
    rating: 5.0,
    review_count: 2,
    description: 'Jay Jay Dumpster Rental provides straightforward roll-off dumpster service to El Cajon and South San Diego County communities. Rated 5.0/5 by local customers, they handle home cleanouts, renovation debris, roofing projects, and yard waste with prompt delivery and easy pickup scheduling. Call (619) 257-0520 for a free same-day quote.',
  },
  {
    name: 'SouthPoint Dumpster Rentals',
    slug: 'southpoint-dumpster-rentals',
    address: '311 F St, Chula Vista, CA 91910',
    phone: '(858) 288-4886',
    website: null,
    rating: null,
    review_count: 0,
    description: 'SouthPoint Dumpster Rentals delivers roll-off containers to El Cajon and the greater San Diego area for home cleanouts, landscaping, renovation debris, and construction projects. They offer flexible rental periods and competitive rates with no hidden fees. Call (858) 288-4886 to confirm availability and get a free quote for your project.',
  },
]

async function insertBusinesses(businesses, cityId, cityLabel) {
  const records = businesses.map(b => ({
    city_id: cityId,
    name: b.name,
    slug: b.slug,
    address: b.address,
    phone: b.phone,
    website: b.website,
    rating: b.rating,
    review_count: b.review_count,
    description: b.description,
    is_active: true,
    tier: 'free',
    service_area_miles: 20,
    sizes_available: ['10', '15', '20', '30', '40'],
    photos: [],
  }))

  const { data, error } = await sb.from('businesses').upsert(records, { onConflict: 'city_id,slug', ignoreDuplicates: false }).select('id,name')
  if (error) {
    console.error(`❌ ${cityLabel} insert failed:`, error.message)
  } else {
    console.log(`✅ ${cityLabel}: inserted/updated ${data.length} businesses`)
    data.forEach(b => console.log(`   - ${b.name} (id: ${b.id})`))
  }
}

async function main() {
  console.log('\n=== Starting DB fixes & business population ===\n')

  await fixLubbockIntro()
  await fixCleanSlateDescription()
  await insertBusinesses(BONITA_BUSINESSES, BONITA_CITY_ID, 'Bonita CA')
  await insertBusinesses(ELCAJON_BUSINESSES, ELCAJON_CITY_ID, 'El Cajon CA')

  console.log('\n=== Done ===\n')
}

main().catch(console.error)
