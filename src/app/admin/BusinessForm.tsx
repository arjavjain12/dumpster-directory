'use client'

import { useState } from 'react'
import CitySearch from './CitySearch'

interface BusinessData {
  id?: number
  name?: string
  address?: string
  phone?: string
  website?: string
  email?: string
  rating?: number | null
  review_count?: number
  tier?: string
  is_active?: boolean
  sizes_available?: string[]
  service_area_miles?: number
  description?: string | null
  google_place_id?: string | null
  photos?: string[]
  city?: { id: number; city_name: string; state: string } | null
}

export default function BusinessForm({
  business,
  action,
  submitLabel,
}: {
  business?: BusinessData
  action: (formData: FormData) => void | Promise<void>
  submitLabel: string
}) {
  const b = business || {}
  const initialCity = b.city ? `${b.city.city_name}, ${b.city.state}` : undefined
  const initialCityId = b.city?.id
  const [existingPhotos, setExistingPhotos] = useState<string[]>(b.photos || [])
  const [newFiles, setNewFiles] = useState<File[]>([])
  const [previews, setPreviews] = useState<string[]>([])

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files || [])
    setNewFiles((prev) => [...prev, ...files])
    files.forEach((file) => {
      const reader = new FileReader()
      reader.onload = () => setPreviews((prev) => [...prev, reader.result as string])
      reader.readAsDataURL(file)
    })
  }

  function removeExisting(index: number) {
    setExistingPhotos((prev) => prev.filter((_, i) => i !== index))
  }

  function removeNew(index: number) {
    setNewFiles((prev) => prev.filter((_, i) => i !== index))
    setPreviews((prev) => prev.filter((_, i) => i !== index))
  }

  async function handleSubmit(formData: FormData) {
    // Remove the native file input and append files manually
    formData.delete('photo_files')
    newFiles.forEach((file) => formData.append('photo_files', file))
    // Pass existing photos that weren't removed
    formData.set('existing_photos', JSON.stringify(existingPhotos))
    await action(formData)
  }

  return (
    <form action={handleSubmit} className="space-y-6">
      {/* Business Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Business Name *</label>
        <input
          type="text"
          name="name"
          defaultValue={b.name}
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
        />
      </div>

      {/* City */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">City *</label>
        <CitySearch initialCity={initialCity} initialCityId={initialCityId} />
      </div>

      {/* Address */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Address *</label>
        <input
          type="text"
          name="address"
          defaultValue={b.address || ''}
          required
          placeholder="123 Main St, Austin, TX 78701"
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
        />
      </div>

      {/* Phone + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
          <input
            type="text"
            name="phone"
            defaultValue={b.phone || ''}
            required
            placeholder="(555) 123-4567"
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            name="email"
            defaultValue={b.email || ''}
            placeholder="info@business.com"
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>
      </div>

      {/* Website + Google Maps Link */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Website</label>
          <input
            type="url"
            name="website"
            defaultValue={b.website || ''}
            placeholder="https://example.com"
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Google Maps Link</label>
          <input
            type="text"
            name="google_place_id"
            defaultValue={b.google_place_id || ''}
            placeholder="https://maps.google.com/..."
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
        <textarea
          name="description"
          defaultValue={b.description || ''}
          rows={3}
          placeholder="Brief description of the business and services offered..."
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
        />
      </div>

      {/* Photos */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Photos</label>

        {/* Existing photos */}
        {existingPhotos.length > 0 && (
          <div className="flex flex-wrap gap-3 mb-3">
            {existingPhotos.map((url, i) => (
              <div key={url} className="relative group">
                <img src={url} alt="" className="h-24 w-24 rounded-lg object-cover border border-gray-200" />
                <button
                  type="button"
                  onClick={() => removeExisting(i)}
                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition"
                >
                  x
                </button>
              </div>
            ))}
          </div>
        )}

        {/* New photo previews */}
        {previews.length > 0 && (
          <div className="flex flex-wrap gap-3 mb-3">
            {previews.map((src, i) => (
              <div key={i} className="relative group">
                <img src={src} alt="" className="h-24 w-24 rounded-lg object-cover border border-green-300" />
                <button
                  type="button"
                  onClick={() => removeNew(i)}
                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition"
                >
                  x
                </button>
              </div>
            ))}
          </div>
        )}

        <label className="inline-flex items-center gap-2 cursor-pointer rounded-lg border border-dashed border-gray-300 px-4 py-3 text-sm text-gray-500 hover:border-green-500 hover:text-green-600 transition">
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 16v-8m-4 4h8m6 4v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2m4-6l4-4 4 4m4 2a8 8 0 11-16 0" />
          </svg>
          Upload photos
          <input
            type="file"
            name="photo_files"
            accept="image/*"
            multiple
            onChange={handleFileChange}
            className="hidden"
          />
        </label>
        <p className="text-xs text-gray-400 mt-1">Max 5MB per image. JPG, PNG, WebP accepted.</p>
      </div>

      {/* Rating + Reviews */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Rating (1-5)</label>
          <input
            type="number"
            name="rating"
            defaultValue={b.rating ?? ''}
            min="1"
            max="5"
            step="0.1"
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Review Count</label>
          <input
            type="number"
            name="review_count"
            defaultValue={b.review_count || 0}
            min="0"
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>
      </div>

      {/* Sizes + Tier */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Dumpster Sizes Available</label>
          <input
            type="text"
            name="sizes_available"
            defaultValue={(b.sizes_available || []).join(', ')}
            placeholder="10, 15, 20, 30, 40"
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
          />
          <p className="text-xs text-gray-400 mt-1">Comma-separated yard sizes</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Tier</label>
          <select
            name="tier"
            defaultValue={b.tier || 'free'}
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
          >
            <option value="free">Free</option>
            <option value="basic">Basic (Verified)</option>
            <option value="premium">Premium (Featured)</option>
          </select>
        </div>
      </div>

      {/* Service Area */}
      <div className="max-w-xs">
        <label className="block text-sm font-medium text-gray-700 mb-1">Service Area (miles)</label>
        <input
          type="number"
          name="service_area_miles"
          defaultValue={b.service_area_miles || 25}
          min="1"
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
        />
      </div>

      {/* Publish toggle */}
      <div className="flex items-center gap-3">
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="hidden"
            name="is_active"
            value={b.is_active !== false ? 'true' : 'false'}
          />
          <input
            type="checkbox"
            defaultChecked={b.is_active !== false}
            onChange={(e) => {
              const hidden = e.target.previousElementSibling as HTMLInputElement
              hidden.value = e.target.checked ? 'true' : 'false'
            }}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:ring-2 peer-focus:ring-green-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:bg-green-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all" />
        </label>
        <span className="text-sm font-medium text-gray-700">Publish immediately</span>
      </div>

      <button
        type="submit"
        className="bg-green-700 text-white rounded-lg px-6 py-2.5 text-sm font-semibold hover:bg-green-800 transition"
      >
        {submitLabel}
      </button>
    </form>
  )
}
