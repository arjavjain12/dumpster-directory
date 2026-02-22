import Image from 'next/image'

const BREAKDOWN = [
  { label: 'Disposal / Tipping Fees', pct: 40, color: 'bg-green-600', desc: 'Landfill charges passed through by the hauler' },
  { label: 'Delivery & Pickup', pct: 25, color: 'bg-blue-500', desc: 'Truck fuel, driver time, equipment wear' },
  { label: 'Container Rental', pct: 20, color: 'bg-yellow-500', desc: 'Daily rate for keeping the bin on your property' },
  { label: 'Overhead & Profit', pct: 15, color: 'bg-orange-400', desc: 'Insurance, permits, business operating costs' },
]

const PRICE_ROWS = [
  { size: '10 yd', range: '$275–$450', typical: 'Small cleanout, bathroom remodel' },
  { size: '15 yd', range: '$325–$500', typical: 'Kitchen renovation, garage' },
  { size: '20 yd', range: '$375–$575', typical: 'Whole-home cleanout, roofing' },
  { size: '30 yd', range: '$425–$650', typical: 'Large remodel, new construction' },
  { size: '40 yd', range: '$475–$750', typical: 'Commercial, major demolition' },
]

export default function PricingBreakdownInfographic() {
  return (
    <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-md">
      {/* Header */}
      <div className="relative h-40 sm:h-52">
        <Image
          src="/images/infographic-cost-bg.jpg"
          alt="Dumpster rental pricing breakdown visual"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/40 flex items-center px-6 sm:px-8">
          <div>
            <p className="text-green-400 text-sm font-semibold uppercase tracking-wider">2026 Price Guide</p>
            <h3 className="text-white font-extrabold text-2xl sm:text-3xl mt-1">
              What Makes Up the Cost?
            </h3>
            <p className="text-gray-300 text-sm mt-1">National average: <strong className="text-white">$375–$450</strong> for a 20-yard dumpster</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 space-y-6">
        {/* Cost breakdown bars */}
        <div>
          <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">Cost Breakdown</h4>
          <div className="space-y-3">
            {BREAKDOWN.map((item) => (
              <div key={item.label}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium text-gray-800">{item.label}</span>
                  <span className="font-bold text-gray-900">{item.pct}%</span>
                </div>
                <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${item.color}`}
                    style={{ width: `${item.pct}%` }}
                  />
                </div>
                <p className="text-xs text-gray-400 mt-0.5">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Price table */}
        <div>
          <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">Price by Size</h4>
          <div className="rounded-xl border border-gray-100 overflow-hidden">
            {PRICE_ROWS.map((row, i) => (
              <div
                key={row.size}
                className={`grid grid-cols-3 text-sm ${i % 2 === 0 ? 'bg-gray-50' : 'bg-white'} ${i < PRICE_ROWS.length - 1 ? 'border-b border-gray-100' : ''}`}
              >
                <div className="px-4 py-2.5 font-bold text-gray-900">{row.size}</div>
                <div className="px-4 py-2.5 font-semibold text-green-700">{row.range}</div>
                <div className="px-4 py-2.5 text-gray-500 hidden sm:block">{row.typical}</div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-2">* Prices vary by city. Urban markets run 20–40% higher.</p>
        </div>
      </div>
    </div>
  )
}
