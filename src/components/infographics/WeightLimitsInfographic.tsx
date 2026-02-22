import Image from 'next/image'

const MATERIALS = [
  { name: 'General Household Junk', weight: '200–400 lbs/yd³', risk: 'low', color: 'bg-green-500' },
  { name: 'Mixed Construction Debris', weight: '400–600 lbs/yd³', risk: 'medium', color: 'bg-yellow-500' },
  { name: 'Roofing Shingles', weight: '750–1,500 lbs/yd³', risk: 'high', color: 'bg-orange-500' },
  { name: 'Dirt & Soil', weight: '1,500–2,000 lbs/yd³', risk: 'high', color: 'bg-orange-600' },
  { name: 'Concrete & Brick', weight: '2,000–3,000 lbs/yd³', risk: 'very-high', color: 'bg-red-600' },
]

const RISK_LABELS: Record<string, string> = {
  low: 'Low',
  medium: 'Medium',
  high: 'High',
  'very-high': 'Very High',
}

export default function WeightLimitsInfographic() {
  return (
    <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-md">
      {/* Header */}
      <div className="relative h-36 sm:h-44">
        <Image
          src="/images/infographic-weight-bg.jpg"
          alt="Dumpster filled with heavy roofing shingles and concrete"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/75 to-gray-900/30 flex items-center px-6">
          <div>
            <p className="text-orange-400 text-sm font-bold uppercase tracking-wider">Watch Out</p>
            <h3 className="text-white font-extrabold text-xl sm:text-2xl mt-1">Heavy Material Weight Guide</h3>
            <p className="text-gray-300 text-sm mt-1">Overage fees: <strong className="text-white">$60–$100 per ton over limit</strong></p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6">
        <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Weight by Material Type</h4>
        <div className="space-y-3">
          {MATERIALS.map((m) => (
            <div key={m.name} className="flex items-center gap-3">
              <div className={`h-3 w-3 rounded-full shrink-0 ${m.color}`} />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm font-medium text-gray-800 truncate">{m.name}</span>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full shrink-0 ${
                    m.risk === 'low' ? 'bg-green-100 text-green-800' :
                    m.risk === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                    m.risk === 'high' ? 'bg-orange-100 text-orange-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {RISK_LABELS[m.risk]} Risk
                  </span>
                </div>
                <p className="text-xs text-gray-500 mt-0.5">{m.weight}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-xl bg-orange-50 border border-orange-100 p-4">
          <p className="text-sm text-orange-900">
            <strong>Example:</strong> A 20-yard dumpster has a 3-ton (6,000 lb) limit.
            Just 4 cubic yards of concrete = 8,000–12,000 lbs — already 2× over the limit.
            Always confirm weight allowances before loading heavy materials.
          </p>
        </div>
      </div>
    </div>
  )
}
