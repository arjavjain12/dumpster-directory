import Link from 'next/link'
import { Truck } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-green-600 rounded-lg p-1.5 group-hover:bg-green-700 transition-colors">
              <Truck className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl text-gray-900">
              Dumpster<span className="text-green-600">Listing</span>
            </span>
          </Link>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
            <Link href="/dumpster-rental" className="hover:text-green-600 transition-colors">
              Find by City
            </Link>
            <Link href="/dumpster-sizes" className="hover:text-green-600 transition-colors">
              Size Guide
            </Link>
            <Link href="/dumpster-rental-cost" className="hover:text-green-600 transition-colors">
              Pricing
            </Link>
            <Link href="/dumpster-rental-near-me" className="hover:text-green-600 transition-colors">
              Near Me
            </Link>
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <Link
              href="/dumpster-rental-near-me"
              className="bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
            >
              Get Quotes
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
