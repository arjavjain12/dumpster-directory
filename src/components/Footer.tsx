import Link from 'next/link'
import { Truck } from 'lucide-react'

const TOP_STATES = [
  { name: 'Texas', slug: 'texas' },
  { name: 'California', slug: 'california' },
  { name: 'Florida', slug: 'florida' },
  { name: 'New York', slug: 'new-york' },
  { name: 'Illinois', slug: 'illinois' },
  { name: 'Pennsylvania', slug: 'pennsylvania' },
  { name: 'Ohio', slug: 'ohio' },
  { name: 'Georgia', slug: 'georgia' },
  { name: 'North Carolina', slug: 'north-carolina' },
  { name: 'Michigan', slug: 'michigan' },
]

const TOP_CITIES = [
  { name: 'New York, NY', state: 'new-york', city: 'new-york-city' },
  { name: 'Los Angeles, CA', state: 'california', city: 'los-angeles' },
  { name: 'Chicago, IL', state: 'illinois', city: 'chicago' },
  { name: 'Houston, TX', state: 'texas', city: 'houston' },
  { name: 'Phoenix, AZ', state: 'arizona', city: 'phoenix' },
  { name: 'Philadelphia, PA', state: 'pennsylvania', city: 'philadelphia' },
  { name: 'San Antonio, TX', state: 'texas', city: 'san-antonio' },
  { name: 'Dallas, TX', state: 'texas', city: 'dallas' },
  { name: 'Austin, TX', state: 'texas', city: 'austin' },
  { name: 'Jacksonville, FL', state: 'florida', city: 'jacksonville' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-3">
              <div className="bg-green-600 rounded-lg p-1.5">
                <Truck className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-white text-lg">
                Dumpster<span className="text-green-400">Listing</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Find and compare dumpster rental companies in your city. Free quotes from local providers.
            </p>
          </div>

          {/* Top States */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-3">Browse by State</h3>
            <ul className="space-y-1.5">
              {TOP_STATES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/dumpster-rental/${s.slug}`}
                    className="text-sm text-gray-400 hover:text-green-400 transition-colors"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/dumpster-rental" className="text-sm text-green-500 hover:text-green-400 transition-colors">
                  All states →
                </Link>
              </li>
            </ul>
          </div>

          {/* Top Cities */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-3">Popular Cities</h3>
            <ul className="space-y-1.5">
              {TOP_CITIES.map((c) => (
                <li key={c.city}>
                  <Link
                    href={`/dumpster-rental/${c.state}/${c.city}`}
                    className="text-sm text-gray-400 hover:text-green-400 transition-colors"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-3">Resources</h3>
            <ul className="space-y-1.5">
              {[
                { label: 'Size Guide', href: '/dumpster-sizes' },
                { label: 'Pricing Guide', href: '/dumpster-rental-cost' },
                { label: 'Construction Rental', href: '/dumpster-rental/construction' },
                { label: 'Residential Rental', href: '/dumpster-rental/residential' },
                { label: 'Roll-Off Rental', href: '/dumpster-rental/roll-off' },
                { label: 'Roofing Dumpsters', href: '/dumpster-rental/roofing' },
                { label: 'Near Me', href: '/dumpster-rental-near-me' },
                { label: 'Large Dumpster Rental', href: '/large-dumpster-rental' },
                { label: 'Small Dumpster Rental', href: '/small-dumpster-rental' },
                { label: 'Cheap Dumpster Rental', href: '/cheap-dumpster-rental' },
                { label: 'How Much Does It Cost?', href: '/how-much-does-dumpster-rental-cost' },
                { label: 'Dumpster vs Junk Removal', href: '/dumpster-rental-vs-junk-removal' },
                { label: 'What Can You Put in a Dumpster?', href: '/what-can-you-put-in-a-dumpster' },
                { label: 'How to Dispose of Furniture', href: '/how-to-dispose-of-furniture' },
                { label: 'How to Dispose of Concrete', href: '/how-to-dispose-of-concrete' },
                { label: 'How to Dispose of Yard Waste', href: '/how-to-dispose-of-yard-waste' },
                { label: 'Dumpster Size Estimator', href: '/dumpster-size-estimator' },
                { label: 'Cubic Yard Calculator', href: '/cubic-yard-calculator' },
                { label: 'Concrete Weight Calculator', href: '/concrete-weight-calculator' },
                { label: 'Drywall Weight Calculator', href: '/drywall-weight-calculator' },
                { label: 'About Us', href: '/about' },
                { label: 'List Your Business', href: '/list-your-business' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-green-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} DumpsterListing. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <Link href="/privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-300 transition-colors">Terms of Service</Link>
            <Link href="/contact" className="hover:text-gray-300 transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
