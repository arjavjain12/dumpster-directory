import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

function getServiceClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL!
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY!
  return createClient(url, key)
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const { name, email, phone, city_id, project_type, dumpster_size_needed, project_start, zip_code, message } = body

    // Basic validation
    if (!name || !email || !phone || !city_id || !project_type || !zip_code) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
    }

    const { data, error } = await getServiceClient()
      .from('leads')
      .insert({
        name: name.trim(),
        email: email.trim().toLowerCase(),
        phone: phone.trim(),
        city_id: Number(city_id),
        project_type,
        dumpster_size_needed: dumpster_size_needed || 'Not Sure',
        project_start: project_start || 'ASAP',
        zip_code: zip_code.trim(),
        message: message?.trim() || null,
        status: 'new',
      })
      .select()
      .single()

    if (error) {
      console.error('Supabase lead insert error:', error)
      return NextResponse.json({ error: 'Failed to submit lead' }, { status: 500 })
    }

    // TODO Phase 2: trigger email notification to matched local businesses here

    return NextResponse.json({ success: true, id: data.id }, { status: 201 })
  } catch (err) {
    console.error('Lead API error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
