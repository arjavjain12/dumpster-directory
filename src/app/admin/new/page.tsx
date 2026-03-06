import BusinessForm from '../BusinessForm'
import { createBusiness } from '../actions'

async function handleCreate(formData: FormData) {
  'use server'
  await createBusiness(formData)
}

export default function NewBusinessPage() {
  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Add Business</h1>
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <BusinessForm action={handleCreate} submitLabel="Create Business" />
      </div>
    </div>
  )
}
