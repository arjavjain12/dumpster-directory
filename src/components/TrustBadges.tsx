import { MapPin, Building2, DollarSign, RefreshCw } from 'lucide-react'

const badges = [
  { icon: MapPin, label: '31,000+ Cities' },
  { icon: Building2, label: '12,000+ Businesses Listed' },
  { icon: DollarSign, label: '100% Free' },
  { icon: RefreshCw, label: 'Updated Monthly' },
]

export default function TrustBadges() {
  return (
    <section className="bg-white py-10 border-b border-gray-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 lg:gap-14">
          {badges.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2.5 text-gray-600"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-50">
                <Icon className="h-5 w-5 text-green-700" />
              </div>
              <span className="text-sm font-semibold">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
