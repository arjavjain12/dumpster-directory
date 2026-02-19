'use client'

import { useState, type FormEvent } from 'react'
import { Send, CheckCircle, Loader2 } from 'lucide-react'

interface LeadFormProps {
  cityId: number
  cityName: string
  stateAbbr: string
}

interface FormData {
  name: string
  email: string
  phone: string
  zip_code: string
  project_type: string
  dumpster_size_needed: string
  project_start: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  zip_code?: string
  project_type?: string
}

const PROJECT_TYPES = [
  'Home Cleanout','Renovation/Remodel','Roofing Project',
  'Yard/Landscaping','Moving','Construction/Demolition','Other',
]
const DUMPSTER_SIZES = ['Not Sure','10 Yard','15 Yard','20 Yard','30 Yard','40 Yard']
const TIMELINES = ['ASAP','Within a week','Within 2 weeks','Next month','Planning ahead']

export default function LeadForm({ cityId, cityName, stateAbbr }: LeadFormProps) {
  const [form, setForm] = useState<FormData>({
    name: '', email: '', phone: '', zip_code: '',
    project_type: '', dumpster_size_needed: '', project_start: '', message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  function validate(): FormErrors {
    const e: FormErrors = {}
    if (!form.name.trim()) e.name = 'Full name is required.'
    if (!form.email.trim()) e.email = 'Email is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email address.'
    if (!form.phone.trim()) e.phone = 'Phone number is required.'
    if (!form.zip_code.trim()) e.zip_code = 'Zip code is required.'
    else if (!/^\d{5}$/.test(form.zip_code)) e.zip_code = 'Enter a valid 5-digit zip code.'
    if (!form.project_type) e.project_type = 'Please select a project type.'
    return e
  }

  function set(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => { const n = { ...prev }; delete n[field as keyof FormErrors]; return n })
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
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, city_id: cityId }),
      })
      if (!res.ok) throw new Error('Failed to submit. Please try again.')
      setSuccess(true)
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : 'Something went wrong.')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <section id="quote" className="py-16 px-4">
        <div className="mx-auto max-w-2xl rounded-2xl border border-green-200 bg-green-50 p-10 text-center">
          <CheckCircle className="mx-auto mb-4 h-16 w-16 text-green-600" />
          <h3 className="mb-2 text-2xl font-bold text-green-800">Your request has been sent!</h3>
          <p className="text-lg text-green-700">Local companies will contact you within 24 hours.</p>
        </div>
      </section>
    )
  }

  const inputClass = (field: keyof FormErrors) =>
    `w-full rounded-lg border px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 transition ${
      errors[field] ? 'border-red-500' : 'border-gray-300'
    }`

  return (
    <section id="quote" className="py-16 px-4">
      <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl bg-white shadow-xl">
        <div className="bg-gradient-to-r from-green-600 to-green-700 px-8 py-10 text-center text-white">
          <h2 className="mb-2 text-3xl font-extrabold md:text-4xl">
            Get Free Quotes from {cityName} Dumpster Rental Companies
          </h2>
          <p className="mx-auto max-w-xl text-lg text-green-100">
            Compare prices from local companies. No obligation. Instant response.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-8" noValidate>
          <div className="grid grid-cols-1 gap-x-6 gap-y-5 md:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-semibold text-gray-700">Full Name <span className="text-red-500">*</span></label>
              <input type="text" placeholder="John Smith" value={form.name} onChange={(e) => set('name', e.target.value)} className={inputClass('name')} />
              {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
            </div>

            <div>
              <label className="mb-1 block text-sm font-semibold text-gray-700">Email <span className="text-red-500">*</span></label>
              <input type="email" placeholder="john@example.com" value={form.email} onChange={(e) => set('email', e.target.value)} className={inputClass('email')} />
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
            </div>

            <div>
              <label className="mb-1 block text-sm font-semibold text-gray-700">Phone <span className="text-red-500">*</span></label>
              <input type="tel" placeholder="(555) 123-4567" value={form.phone} onChange={(e) => set('phone', e.target.value)} className={inputClass('phone')} />
              {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
            </div>

            <div>
              <label className="mb-1 block text-sm font-semibold text-gray-700">Zip Code <span className="text-red-500">*</span></label>
              <input type="text" placeholder="12345" maxLength={5} value={form.zip_code}
                onChange={(e) => set('zip_code', e.target.value.replace(/\D/g, '').slice(0, 5))}
                className={inputClass('zip_code')} />
              {errors.zip_code && <p className="mt-1 text-sm text-red-600">{errors.zip_code}</p>}
            </div>

            <div>
              <label className="mb-1 block text-sm font-semibold text-gray-700">Project Type <span className="text-red-500">*</span></label>
              <select value={form.project_type} onChange={(e) => set('project_type', e.target.value)}
                className={`${inputClass('project_type')} bg-white`}>
                <option value="">Select project type...</option>
                {PROJECT_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
              {errors.project_type && <p className="mt-1 text-sm text-red-600">{errors.project_type}</p>}
            </div>

            <div>
              <label className="mb-1 block text-sm font-semibold text-gray-700">Dumpster Size Needed</label>
              <select value={form.dumpster_size_needed} onChange={(e) => set('dumpster_size_needed', e.target.value)}
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 transition">
                <option value="">Select a size...</option>
                {DUMPSTER_SIZES.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>

            <div>
              <label className="mb-1 block text-sm font-semibold text-gray-700">When do you need it?</label>
              <select value={form.project_start} onChange={(e) => set('project_start', e.target.value)}
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 transition">
                <option value="">Select timeline...</option>
                {TIMELINES.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="mb-1 block text-sm font-semibold text-gray-700">
                Additional Details <span className="font-normal text-gray-400">(optional)</span>
              </label>
              <textarea rows={3} placeholder={`Tell us about your project in ${cityName}, ${stateAbbr}...`}
                value={form.message} onChange={(e) => set('message', e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 transition" />
            </div>
          </div>

          {submitError && (
            <div className="mt-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-center text-sm text-red-700">
              {submitError}
            </div>
          )}

          <div className="mt-8 text-center">
            <button type="submit" disabled={loading}
              className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-10 py-4 text-lg font-bold text-white shadow-lg hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300 disabled:opacity-60 disabled:cursor-not-allowed transition">
              {loading ? <><Loader2 className="h-5 w-5 animate-spin" /> Submitting...</> : <><Send className="h-5 w-5" /> Get My Free Quotes →</>}
            </button>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-sm text-gray-500">
            <span>✓ Free service</span>
            <span>✓ No spam</span>
            <span>✓ Local companies only</span>
          </div>
        </form>
      </div>
    </section>
  )
}
