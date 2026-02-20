import type { Metadata } from 'next'
import { FileText } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Terms of Service | DumpsterListing',
  description:
    'Read the Terms of Service for DumpsterListing. Understand your rights and responsibilities when using our dumpster rental directory.',
  alternates: { canonical: '/terms' },
  openGraph: {
    title: 'Terms of Service | DumpsterListing',
    description:
      'Read the Terms of Service for DumpsterListing. Understand your rights and responsibilities when using our dumpster rental directory.',
  },
}

const SECTIONS = [
  {
    heading: 'Acceptance of Terms',
    body: [
      'By accessing or using DumpsterListing at dumpsterlisting.com (the "Site"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use the Site.',
      'We reserve the right to update these Terms at any time. Continued use of the Site after changes are posted constitutes your acceptance of the revised Terms.',
    ],
  },
  {
    heading: 'Use of the Directory',
    body: [
      'DumpsterListing is an online directory that connects individuals seeking dumpster rental services with local dumpster rental companies. The Site is provided for informational and lead generation purposes only.',
      'You agree to use the Site only for lawful purposes and in a manner that does not infringe the rights of others or restrict their use of the Site. You must not misuse or abuse any lead forms, contact features, or other interactive elements on the Site.',
    ],
  },
  {
    heading: 'Accuracy of Business Listings',
    body: [
      'DumpsterListing does not guarantee the accuracy, completeness, or current status of any business listing displayed on the Site. Business information including names, addresses, phone numbers, hours, pricing, and availability is provided by or on behalf of the listed businesses and may not reflect current conditions.',
      'We strongly encourage users to independently verify all business information before engaging with any company. DumpsterListing makes no representations or warranties regarding the quality, reliability, or fitness for any particular purpose of the businesses listed.',
    ],
  },
  {
    heading: 'Voluntary Submission of Lead Information',
    body: [
      'When you submit a lead form on the Site, you are voluntarily providing your contact information (including name, email address, and phone number) for the purpose of being contacted by local dumpster rental companies.',
      'By submitting a lead form, you consent to being contacted by one or more businesses relevant to your inquiry. DumpsterListing acts solely as an intermediary and is not a party to any transaction or agreement between you and any listed business.',
    ],
  },
  {
    heading: 'Independently Listed Businesses',
    body: [
      'The businesses listed on DumpsterListing are independent third-party companies. DumpsterListing does not employ, endorse, or vouch for any listed business. We do not control the quality of services provided, pricing offered, or business conduct.',
      'Any disputes, claims, or issues arising from your interactions with a listed business are solely between you and that business. DumpsterListing has no obligation to intervene in or mediate such disputes.',
    ],
  },
  {
    heading: 'Intellectual Property',
    body: [
      'All content on the Site, including text, graphics, logos, and software, is the property of DumpsterListing or its licensors and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works from Site content without our prior written consent.',
    ],
  },
  {
    heading: 'Limitation of Liability',
    body: [
      'To the fullest extent permitted by applicable law, DumpsterListing and its owners, employees, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Site or reliance on any information or business listing displayed herein.',
      'DumpsterListing\'s total liability for any claim arising out of or related to the Site shall not exceed one hundred dollars ($100). Some jurisdictions do not allow the exclusion or limitation of certain damages, so the above limitations may not apply to you.',
    ],
  },
  {
    heading: 'Disclaimer of Warranties',
    body: [
      'The Site and all content are provided on an "as is" and "as available" basis without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.',
      'DumpsterListing does not warrant that the Site will be uninterrupted, error-free, or free of viruses or other harmful components.',
    ],
  },
  {
    heading: 'Governing Law',
    body: [
      'These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts located in Delaware.',
    ],
  },
  {
    heading: 'Contact',
    body: [
      'If you have any questions about these Terms of Service, please contact us at legal@dumpsterlisting.com.',
    ],
  },
]

export default function TermsPage() {
  return (
    <>
      {/* Header */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-green-50 border border-green-200 px-4 py-1.5 text-sm font-medium text-green-700 mb-5">
            <FileText className="h-4 w-4" />
            Legal
          </div>
          <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">Terms of Service</h1>
          <p className="mt-4 text-gray-500 text-sm">Last updated: February 2026</p>
          <p className="mt-4 text-gray-600 leading-relaxed max-w-2xl">
            Please read these Terms of Service carefully before using{' '}
            <span className="font-medium text-gray-800">dumpsterlisting.com</span>. These Terms govern
            your access to and use of the DumpsterListing platform and services.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-10">
          {SECTIONS.map((section) => (
            <section key={section.heading}>
              <h2 className="text-xl font-bold text-gray-900 mb-4">{section.heading}</h2>
              <div className="space-y-3">
                {section.body.map((paragraph, i) => (
                  <p key={i} className="text-gray-600 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Contact card */}
        <div className="mt-14 rounded-xl border border-green-200 bg-green-50 px-8 py-8">
          <h2 className="text-lg font-bold text-gray-900 mb-2">Legal Questions?</h2>
          <p className="text-gray-600 leading-relaxed">
            Email our legal team at{' '}
            <a
              href="mailto:legal@dumpsterlisting.com"
              className="font-medium text-green-700 hover:underline"
            >
              legal@dumpsterlisting.com
            </a>{' '}
            and we will respond as soon as possible.
          </p>
        </div>
      </div>
    </>
  )
}
