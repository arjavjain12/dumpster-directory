import { notFound } from 'next/navigation'
import { getAdminClient } from '@/lib/supabase-admin'
import BusinessForm from '../../BusinessForm'
import { updateBusiness } from '../../actions'

export default async function EditBusinessPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const db = getAdminClient()
  const { data } = await db
    .from('businesses')
    .select('*, city:cities(id, city_name, state)')
    .eq('id', parseInt(id))
    .single()

  if (!data) notFound()

  const business = data as any
  const businessId = business.id as number

  async function handleUpdate(formData: FormData) {
    'use server'
    await updateBusiness(businessId, formData)
  }

  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Edit: {business.name}</h1>
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <BusinessForm business={business} action={handleUpdate} submitLabel="Save Changes" />
      </div>
    </div>
  )
}
