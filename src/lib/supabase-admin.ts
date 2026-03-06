import { createClient, SupabaseClient } from '@supabase/supabase-js'

// Admin client uses service role key — bypasses RLS
let _adminClient: SupabaseClient | null = null

export function getAdminClient(): SupabaseClient {
  if (_adminClient) return _adminClient
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!url || !key) throw new Error('Missing Supabase admin credentials')
  _adminClient = createClient(url, key)
  return _adminClient
}
