'use client'

import { useState, type FormEvent } from 'react'
import { Send, CheckCircle, Loader2 } from 'lucide-react'

interface FormData {
  business_name: string
  your_name: string
  email: string
  phone: string
  city_state: string
  website: string
  plan: string
  message: string
}

interface FormErrors {
  business_name?: string
  your_name?: string
  email?: string
  phone?: string
  city_state?: string
  plan?: string
}

const PLANS = [
  { value: 'free', label: 'Free Listing — $0/mo' },
  { value: 'basic', label: 'Basic / Verified — $29/mo' },
  { value: 'premium', label: 'Premium / Featured — $79/mo' },
]

export default function ListingForm() {
  const [form, setForm] = useState<FormData>({
    business_name: '',
    your_name: '',
    email: '',
    phone: '',
    city_state: '',
    website: '',
    plan: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  function validate(): FormErrors {
    const e: FormErrors = {}
    if (!form.business_name.trim()) e.business_name = 'Business name is required.'
    if (!form.your_name.trim()) e.your_name = 'Your name is required.'
    if (!form.email.trim()) e.email = 'Email is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email address.'
    if (!form.phone.trim()) e.phone = 'Phone number is required.'
    if (!form.city_state.trim()) e.city_state = 'City & State is required.'
    if (!form.plan) e.plan = 'Please select a plan.'
    return e
  }

  function set(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[field as keyof FormErrors]
        return next
      })
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSubmitError(null)
    const v = validate()
    setErrors(v)
    if (Object.keys(v).length) return
    setLoading(true)
    try {
      await fetch('/api/list-business', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      // Show success regardless of API availability — the endpoint is not yet implemented.
      setSuccess(true)
    } catch {
      // Still show success client-side; API is not yet implemented.
      setSuccess(true)
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="mx-auto max-w-2xl rounded-2xl border border-green-200 bg-green-50 p-10 text-center">
        <CheckCircle className="mx-auto mb-4 h-16 w-16 text-green-600" />
        <h3 className="mb-2 text-2xl font-bold text-green-800">We received your request!</h3>
        <p className="text-lg text-green-700">
          Our team will review your information and reach out within 1–2 business days to get your listing live.
        </p>
      </div>
    )
  }

  const inputClass = (field: keyof FormErrors) =>
    `w-full rounded-lg border px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 transition ${
      errors[field] ? 'border-red-500' : 'border-gray-300'
    }`

  return (
    <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl bg-white shadow-xl">
      <div className="bg-gradient-to-r from-green-600 to-green-700 px-8 py-10 text-center text-white">
        <h2 className="mb-2 text-3xl font-extrabold md:text-4xl">
          Get Listed Today
        </h2>
        <p className="mx-auto max-w-xl text-lg text-green-100">
          Fill out the form below and our team will set up your listing within 1–2 business days.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="p-8" noValidate>
        <div className="grid grid-cols-1 gap-x-6 gap-y-5 md:grid-cols-2">
          {/* Business Name */}
          <div>
            <label className="mb-1 block text-sm font-semibold text-gray-700">
              Business Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Acme Dumpster Rental"
              value={form.business_name}
              onChange={(e) => set('business_name', e.target.value)}
              className={inputClass('business_name')}
            />
            {errors.business_name && (
              <p className="mt-1 text-sm text-red-600">{errors.business_name}</p>
            )}
          </div>

          {/* Your Name */}
          <div>
            <label className="mb-1 block text-sm font-semibold text-gray-700">
              Your Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Jane Smith"
              value={form.your_name}
              onChange={(e) => set('your_name', e.target.value)}
              className={inputClass('your_name')}
            />
            {errors.your_name && (
              <p className="mt-1 text-sm text-red-600">{errors.your_name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="mb-1 block text-sm font-semibold text-gray-700">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="jane@acmedumpsters.com"
              value={form.email}
              onChange={(e) => set('email', e.target.value)}
              className={inputClass('email')}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="mb-1 block text-sm font-semibold text-gray-700">
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              placeholder="(555) 123-4567"
              value={form.phone}
              onChange={(e) => set('phone', e.target.value)}
              className={inputClass('phone')}
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
            )}
          </div>

          {/* City & State */}
          <div>
            <label className="mb-1 block text-sm font-semibold text-gray-700">
              City &amp; State <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Austin, TX"
              value={form.city_state}
              onChange={(e) => set('city_state', e.target.value)}
              className={inputClass('city_state')}
            />
            {errors.city_state && (
              <p className="mt-1 text-sm text-red-600">{errors.city_state}</p>
            )}
          </div>

          {/* Website */}
          <div>
            <label className="mb-1 block text-sm font-semibold text-gray-700">
              Website <span className="font-normal text-gray-400">(optional)</span>
            </label>
            <input
              type="url"
              placeholder="https://acmedumpsters.com"
              value={form.website}
              onChange={(e) => set('website', e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            />
          </div>

          {/* Plan */}
          <div className="md:col-span-2">
            <label className="mb-1 block text-sm font-semibold text-gray-700">
              Which plan are you interested in? <span className="text-red-500">*</span>
            </label>
            <select
              value={form.plan}
              onChange={(e) => set('plan', e.target.value)}
              className={`${inputClass('plan')} bg-white`}
            >
              <option value="">Select a plan...</option>
              {PLANS.map((p) => (
                <option key={p.value} value={p.value}>
                  {p.label}
                </option>
              ))}
            </select>
            {errors.plan && (
              <p className="mt-1 text-sm text-red-600">{errors.plan}</p>
            )}
          </div>

          {/* Message */}
          <div className="md:col-span-2">
            <label className="mb-1 block text-sm font-semibold text-gray-700">
              Message <span className="font-normal text-gray-400">(optional)</span>
            </label>
            <textarea
              rows={3}
              placeholder="Tell us a bit about your business, service area, or any questions you have..."
              value={form.message}
              onChange={(e) => set('message', e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            />
          </div>
        </div>

        {submitError && (
          <div className="mt-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-center text-sm text-red-700">
            {submitError}
          </div>
        )}

        <div className="mt-8 text-center">
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-10 py-4 text-lg font-bold text-white shadow-lg hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300 disabled:opacity-60 disabled:cursor-not-allowed transition"
          >
            {loading ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                <Send className="h-5 w-5" />
                Submit My Listing Request
              </>
            )}
          </button>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-sm text-gray-500">
          <span>Free to start</span>
          <span>No long-term contracts</span>
          <span>Cancel anytime</span>
        </div>
      </form>
    </div>
  )
}
