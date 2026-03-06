'use server'

import { getAdminClient } from '@/lib/supabase-admin'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

const ADMIN_COOKIE = 'dl_admin_auth'

export async function verifyAdmin() {
  const cookieStore = await cookies()
  const token = cookieStore.get(ADMIN_COOKIE)?.value
  return token === process.env.ADMIN_PASSWORD
}

export async function loginAction(formData: FormData) {
  const password = formData.get('password') as string
  if (password !== process.env.ADMIN_PASSWORD) {
    redirect('/admin?error=invalid')
  }
  const cookieStore = await cookies()
  cookieStore.set(ADMIN_COOKIE, password, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: '/admin',
  })
  redirect('/admin')
}

export async function logoutAction() {
  const cookieStore = await cookies()
  cookieStore.delete(ADMIN_COOKIE)
  redirect('/admin')
}

export async function searchCities(query: string) {
  if (!query || query.length < 2) return []
  const db = getAdminClient()
  const { data } = await db
    .from('cities')
    .select('id, city_name, state, state_slug, city_slug')
    .ilike('city_name', `${query}%`)
    .order('population', { ascending: false })
    .limit(20)
  return data || []
}

function slugify(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

async function uploadPhotos(db: ReturnType<typeof getAdminClient>, files: File[], slug: string): Promise<string[]> {
  const urls: string[] = []
  for (const file of files) {
    const ext = file.name.split('.').pop() || 'jpg'
    const path = `${slug}/${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`
    const { error } = await db.storage.from('business-photos').upload(path, file, {
      contentType: file.type,
      upsert: false,
    })
    if (!error) {
      const { data } = db.storage.from('business-photos').getPublicUrl(path)
      urls.push(data.publicUrl)
    }
  }
  return urls
}

function parseFormFields(formData: FormData) {
  const sizes = (formData.get('sizes_available') as string || '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean)

  return {
    address: formData.get('address') as string || null,
    phone: formData.get('phone') as string || null,
    website: formData.get('website') as string || null,
    email: formData.get('email') as string || null,
    rating: formData.get('rating') ? parseFloat(formData.get('rating') as string) : null,
    review_count: parseInt(formData.get('review_count') as string || '0'),
    tier: (formData.get('tier') as string) || 'free',
    is_active: formData.get('is_active') === 'true',
    sizes_available: sizes,
    service_area_miles: parseInt(formData.get('service_area_miles') as string || '25'),
    description: formData.get('description') as string || null,
    google_place_id: formData.get('google_place_id') as string || null,
  }
}

async function resolvePhotos(db: ReturnType<typeof getAdminClient>, formData: FormData, slug: string): Promise<string[]> {
  // Keep existing photos that weren't removed
  const existing: string[] = JSON.parse(formData.get('existing_photos') as string || '[]')

  // Upload new files
  const files = formData.getAll('photo_files') as File[]
  const validFiles = files.filter((f) => f.size > 0)
  const uploaded = validFiles.length > 0 ? await uploadPhotos(db, validFiles, slug) : []

  return [...existing, ...uploaded]
}

export async function createBusiness(formData: FormData) {
  const isAdmin = await verifyAdmin()
  if (!isAdmin) return { error: 'Unauthorized' }

  const db = getAdminClient()
  const name = formData.get('name') as string
  const cityId = parseInt(formData.get('city_id') as string)
  const slug = slugify(name)
  const fields = parseFormFields(formData)
  const photos = await resolvePhotos(db, formData, slug)

  const { error } = await db.from('businesses').insert({
    city_id: cityId,
    name,
    slug,
    ...fields,
    photos,
  })

  if (error) return { error: error.message }
  revalidatePath('/admin')
  redirect('/admin')
}

export async function updateBusiness(id: number, formData: FormData) {
  const isAdmin = await verifyAdmin()
  if (!isAdmin) return { error: 'Unauthorized' }

  const db = getAdminClient()
  const name = formData.get('name') as string
  const slug = slugify(name)
  const fields = parseFormFields(formData)
  const photos = await resolvePhotos(db, formData, slug)

  const { error } = await db.from('businesses').update({
    name,
    slug,
    ...fields,
    photos,
    updated_at: new Date().toISOString(),
  }).eq('id', id)

  if (error) return { error: error.message }
  revalidatePath('/admin')
  redirect('/admin')
}

export async function deleteBusiness(id: number) {
  const isAdmin = await verifyAdmin()
  if (!isAdmin) return { error: 'Unauthorized' }

  const db = getAdminClient()
  await db.from('businesses').delete().eq('id', id)
  revalidatePath('/admin')
}

export async function toggleBusinessActive(id: number, isActive: boolean) {
  const isAdmin = await verifyAdmin()
  if (!isAdmin) return { error: 'Unauthorized' }

  const db = getAdminClient()
  await db.from('businesses').update({ is_active: isActive, updated_at: new Date().toISOString() }).eq('id', id)
  revalidatePath('/admin')
}
