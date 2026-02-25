export interface City {
  id: number
  city_name: string
  state: string
  state_slug: string
  city_slug: string
  population: number
  latitude: number
  longitude: number
  county: string
  metro_area: string | null
}

export interface Business {
  id: number
  city_id: number
  name: string
  slug: string
  address: string
  phone: string | null
  website: string | null
  email: string | null
  rating: number | null
  review_count: number
  tier: 'free' | 'basic' | 'premium'
  is_active: boolean
  sizes_available: string[]
  service_area_miles: number
  description: string | null
  photos: string[]
  created_at: string
  // joined from cities table
  city?: City
}

export interface CityPricing {
  id: number
  city_id: number
  size_yards: number
  price_low: number
  price_high: number
  rental_days_included: number
}

export interface Lead {
  id?: number
  city_id: number
  name: string
  email: string
  phone: string
  project_type: string
  dumpster_size_needed: string
  project_start: string
  zip_code: string
  message: string | null
  status: 'new' | 'contacted' | 'converted' | 'lost'
  created_at?: string
}

export interface DumpsterSize {
  yards: number
  slug: string
  label: string
  dimensions: string
  typical_uses: string[]
  weight_limit: string
  avg_price_low: number
  avg_price_high: number
}
