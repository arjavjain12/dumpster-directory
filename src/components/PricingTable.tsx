import { DEFAULT_PRICING, formatPrice } from '@/lib/utils'
import type { CityPricing } from '@/types'

interface PricingTableProps {
  cityPricing?: CityPricing[]
  cityName: string
}

const SIZE_INFO = [
  { yards: 10, dimensions: '12×8×3.5 ft', bestFor: 'Small cleanouts, single room remodel', popular: false },
  { yards: 15, dimensions: '14×8×4 ft',   bestFor: 'Medium cleanouts, flooring removal',  popular: false },
  { yards: 20, dimensions: '22×8×4 ft',   bestFor: 'Large renovations, roof replacement',  popular: true  },
  { yards: 30, dimensions: '22×8×6 ft',   bestFor: 'Whole-home renovation, new construction', popular: false },
  { yards: 40, dimensions: '22×8×8 ft',   bestFor: 'Large commercial, demolition',         popular: false },
]

function getPrice(yards: number, cityPricing?: CityPricing[]) {
  const city = cityPricing?.find((p) => p.size_yards === yards)
  if (city) return { low: city.price_low, high: city.price_high, days: city.rental_days_included }
  const d = DEFAULT_PRICING[yards] ?? { low: 300, high: 600 }
  return { low: d.low, high: d.high, days: 7 }
}

export default function PricingTable({ cityPricing, cityName }: PricingTableProps) {
  const hasCityData = cityPricing && cityPricing.length > 0

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900">Dumpster Rental Prices in {cityName}</h2>
      <p className="mt-1 text-sm text-gray-500">
        {hasCityData
          ? 'Prices based on local market data'
          : 'Average pricing estimates — actual costs vary by provider'}
      </p>

      {/* Desktop table */}
      <div className="mt-4 hidden md:block overflow-hidden rounded-xl border border-gray-200">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="bg-gray-50 text-xs font-semibold uppercase tracking-wide text-gray-500">
              <th className="px-4 py-3">Size</th>
              <th className="px-4 py-3">Dimensions</th>
              <th className="px-4 py-3">Best For</th>
              <th className="px-4 py-3">Price Range</th>
              <th className="px-4 py-3">Rental Period</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {SIZE_INFO.map((s) => {
              const p = getPrice(s.yards, cityPricing)
              return (
                <tr key={s.yards} className={s.popular ? 'bg-green-50' : 'bg-white'}>
                  <td className="px-4 py-3.5 font-semibold text-gray-900 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      {s.yards} Yard
                      {s.popular && (
                        <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-semibold text-green-700">
                          Most Popular
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-4 py-3.5 text-gray-600">{s.dimensions}</td>
                  <td className="px-4 py-3.5 text-gray-600">{s.bestFor}</td>
                  <td className="px-4 py-3.5 font-semibold text-gray-900">
                    {formatPrice(p.low)} – {formatPrice(p.high)}
                  </td>
                  <td className="px-4 py-3.5 text-gray-600">{p.days} days included</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="mt-4 space-y-3 md:hidden">
        {SIZE_INFO.map((s) => {
          const p = getPrice(s.yards, cityPricing)
          return (
            <div key={s.yards} className={`rounded-xl border p-4 ${s.popular ? 'border-green-300 bg-green-50' : 'border-gray-200 bg-white'}`}>
              <div className="flex items-center justify-between">
                <span className="font-bold text-gray-900">{s.yards} Yard Dumpster</span>
                {s.popular && (
                  <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-semibold text-green-700">
                    Most Popular
                  </span>
                )}
              </div>
              <div className="mt-2 text-xl font-bold text-gray-900">
                {formatPrice(p.low)} – {formatPrice(p.high)}
              </div>
              <dl className="mt-2 space-y-1 text-sm text-gray-600">
                <div className="flex justify-between">
                  <dt className="text-gray-500">Dimensions</dt>
                  <dd>{s.dimensions}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-500">Rental Period</dt>
                  <dd>{p.days} days</dd>
                </div>
              </dl>
              <p className="mt-2 text-sm text-gray-500">{s.bestFor}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
