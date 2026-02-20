import type { Metadata } from 'next'
import { Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy | DumpsterListing',
  description:
    'Learn how DumpsterListing collects, uses, and protects your personal information when you use our dumpster rental directory.',
  alternates: { canonical: '/privacy' },
  openGraph: {
    title: 'Privacy Policy | DumpsterListing',
    description:
      'Learn how DumpsterListing collects, uses, and protects your personal information when you use our dumpster rental directory.',
  },
}

const SECTIONS = [
  {
    heading: 'Information We Collect',
    body: [
      'When you submit a lead form on any city or business page, we collect personal information you voluntarily provide, including your name, email address, and phone number.',
      'We also automatically collect certain technical information when you visit our site, including your IP address, browser type, operating system, referring URLs, and pages viewed. This information is collected through cookies and similar tracking technologies.',
    ],
  },
  {
    heading: 'How We Use Your Information',
    body: [
      'The primary purpose of collecting your contact information is to connect you with local dumpster rental businesses in your area. When you submit a lead form, your information may be shared with one or more relevant businesses listed on DumpsterListing so they can respond to your inquiry with quotes and availability.',
      'We also use your information to operate and improve the DumpsterListing platform, send you relevant communications if you have opted in, analyze usage trends, and ensure the security and integrity of our service.',
    ],
  },
  {
    heading: 'Cookies and Tracking Technologies',
    body: [
      'DumpsterListing uses cookies and similar technologies to enhance your browsing experience, remember preferences, and collect analytics data. Cookies are small text files stored on your device by your browser.',
      'You can control cookie settings through your browser preferences. Disabling cookies may affect the functionality of certain parts of the site. We use both session cookies (which expire when you close your browser) and persistent cookies (which remain until deleted or expired).',
    ],
  },
  {
    heading: 'Third-Party Services',
    body: [
      'We use the following third-party services that may collect or process data on our behalf:',
      'Supabase — our database and backend infrastructure provider, used to store business listings and lead form submissions. Vercel — our hosting and deployment platform. Google Analytics — used to analyze traffic patterns and understand how visitors use our site. Each of these providers has their own privacy policy governing their handling of data.',
    ],
  },
  {
    heading: 'Data Sharing and Disclosure',
    body: [
      'We do not sell your personal information to third parties. We share your contact information only with dumpster rental businesses relevant to your inquiry, as described above.',
      'We may disclose your information if required by law, to protect our legal rights, to prevent fraud or abuse, or in connection with a business transfer such as a merger or acquisition.',
    ],
  },
  {
    heading: 'Data Retention',
    body: [
      'We retain your contact information for as long as necessary to fulfill the purposes described in this policy, including providing the lead connection service and complying with legal obligations.',
      'If you would like your information deleted from our systems, please contact us at the email address below and we will process your request within a reasonable timeframe.',
    ],
  },
  {
    heading: 'Your Rights',
    body: [
      'Depending on your location, you may have rights regarding your personal data, including the right to access, correct, or delete information we hold about you. To exercise any of these rights, please reach out to us directly.',
    ],
  },
  {
    heading: 'Children\'s Privacy',
    body: [
      'DumpsterListing is not directed at children under the age of 13. We do not knowingly collect personal information from children. If you believe we have inadvertently collected such information, please contact us so we can delete it promptly.',
    ],
  },
  {
    heading: 'Changes to This Policy',
    body: [
      'We may update this Privacy Policy from time to time. When we do, we will revise the "Last Updated" date at the top of this page. Continued use of DumpsterListing after any changes constitutes your acceptance of the updated policy.',
    ],
  },
  {
    heading: 'Contact Us',
    body: [
      'If you have any questions or concerns about this Privacy Policy or how we handle your data, please email us at privacy@dumpsterlisting.com. We will respond to all reasonable requests within a timely manner.',
    ],
  },
]

export default function PrivacyPage() {
  return (
    <>
      {/* Header */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-green-50 border border-green-200 px-4 py-1.5 text-sm font-medium text-green-700 mb-5">
            <Shield className="h-4 w-4" />
            Legal
          </div>
          <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">Privacy Policy</h1>
          <p className="mt-4 text-gray-500 text-sm">Last updated: February 2026</p>
          <p className="mt-4 text-gray-600 leading-relaxed max-w-2xl">
            DumpsterListing ("we," "us," or "our") is committed to protecting your privacy. This Privacy
            Policy explains how we collect, use, and share information when you use our website at{' '}
            <span className="font-medium text-gray-800">dumpsterlisting.com</span>.
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
          <h2 className="text-lg font-bold text-gray-900 mb-2">Questions About Your Privacy?</h2>
          <p className="text-gray-600 leading-relaxed">
            Email us at{' '}
            <a
              href="mailto:privacy@dumpsterlisting.com"
              className="font-medium text-green-700 hover:underline"
            >
              privacy@dumpsterlisting.com
            </a>{' '}
            and we will get back to you promptly.
          </p>
        </div>
      </div>
    </>
  )
}
