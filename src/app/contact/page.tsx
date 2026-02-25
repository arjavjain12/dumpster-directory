import type { Metadata } from 'next'
import { Mail, Search, Building2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us | DumpsterListing',
  description:
    'Get in touch with DumpsterListing. Find answers for homeowners looking for dumpster rental quotes, businesses wanting to get listed, or general inquiries.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Us | DumpsterListing',
    description:
      'Get in touch with DumpsterListing. Find answers for homeowners looking for dumpster rental quotes, businesses wanting to get listed, or general inquiries.',
  },
}

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-green-50 border border-green-200 px-4 py-1.5 text-sm font-medium text-green-700 mb-5">
            <Mail className="h-4 w-4" />
            Get in Touch
          </div>
          <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">Contact Us</h1>
          <p className="mt-4 text-gray-600 leading-relaxed max-w-2xl">
            We're here to help. Find the right path below based on what you need.
          </p>
        </div>
      </div>

      {/* Cards */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6">

        {/* For homeowners */}
        <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="rounded-lg bg-green-100 p-2">
              <Search className="h-5 w-5 text-green-700" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">Looking to Rent a Dumpster?</h2>
          </div>
          <p className="text-gray-600 leading-relaxed mb-5">
            The fastest way to get quotes is to use the lead form directly on any city or business page.
            Local dumpster rental companies will reach out to you with pricing and availability — no waiting
            around.
          </p>
          <a
            href="/dumpster-rental"
            className="inline-flex items-center gap-2 rounded-xl bg-green-700 px-6 py-3 text-sm font-bold text-white hover:bg-green-800 transition shadow-sm"
          >
            <Search className="h-4 w-4" />
            Browse the Directory
          </a>
        </div>

        {/* For businesses */}
        <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="rounded-lg bg-green-100 p-2">
              <Building2 className="h-5 w-5 text-green-700" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">Want to List Your Business?</h2>
          </div>
          <p className="text-gray-600 leading-relaxed mb-5">
            If you own or manage a dumpster rental company and want to be listed on DumpsterListing, head
            to our business listing page. Free listings are available, with optional upgrades for more
            visibility and leads.
          </p>
          <a
            href="/list-your-business"
            className="inline-flex items-center gap-2 rounded-xl border border-green-600 px-6 py-3 text-sm font-bold text-green-700 hover:bg-green-50 transition"
          >
            <Building2 className="h-4 w-4" />
            List Your Business
          </a>
        </div>

        {/* General inquiries */}
        <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="rounded-lg bg-green-100 p-2">
              <Mail className="h-5 w-5 text-green-700" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">General Inquiries</h2>
          </div>
          <p className="text-gray-600 leading-relaxed mb-2">
            For anything else — feedback, partnership inquiries, press, or general questions — reach out
            to us by email. We read every message and will get back to you as soon as possible.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Email us at{' '}
            <a
              href="mailto:hello@dumpsterlisting.com"
              className="font-medium text-green-700 hover:underline"
            >
              hello@dumpsterlisting.com
            </a>
          </p>
        </div>

      </div>
    </>
  )
}
