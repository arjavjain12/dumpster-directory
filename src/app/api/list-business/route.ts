import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { businessName, contactName, email, phone, cityState, website, plan, message } = body

    if (!businessName || !contactName || !email || !phone || !cityState) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const url = process.env.NEXT_PUBLIC_SUPABASE_URL
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY
    if (!url || !key) {
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 })
    }

    const supabase = createClient(url, key)

    const { error } = await supabase
      .from('listing_requests')
      .insert({
        business_name: businessName,
        contact_name:  contactName,
        email,
        phone,
        city_state:    cityState,
        website:       website || null,
        plan:          plan || 'free',
        message:       message || null,
      })

    if (error) {
      console.error('listing_requests insert error:', error.message)
      // Still return 200 so the user sees a success message — we'll follow up manually
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('list-business API error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
