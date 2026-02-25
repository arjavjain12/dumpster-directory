import Image from 'next/image'
import Link from 'next/link'

const SIZES = [
  { yards: 10, height: 35, price: '$275–$450', capacity: '3–4 loads', slug: '10-yard' },
  { yards: 15, height: 45, price: '$325–$500', capacity: '4–6 loads', slug: '15-yard' },
  { yards: 20, height: 58, price: '$375–$575', capacity: '6–8 loads', slug: '20-yard' },
  { yards: 30, height: 72, price: '$425–$650', capacity: '9–12 loads', slug: '30-yard' },
  { yards: 40, height: 88, price: '$475–$750', capacity: '12–16 loads', slug: '40-yard' },
]

export default function SizeComparisonInfographic() {
  return (
    <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-md">
      {/* Header */}
      <div className="bg-gray-900 px-6 py-4">
        <h3 className="text-white font-extrabold text-lg">Roll-Off Dumpster Size Comparison</h3>
        <p className="text-gray-400 text-sm mt-0.5">Prices shown are national averages — click any size for a full guide</p>
      </div>

      {/* Background image + bar chart overlay */}
      <div className="relative bg-gray-50">
        <div className="relative h-56 sm:h-72 overflow-hidden">
          <Image
            src="/images/infographic-sizes-bg.jpg"
            alt="Roll-off dumpsters of increasing sizes lined up for comparison"
            fill
            className="object-cover object-center opacity-30"
          />
          {/* Bar chart bars */}
          <div className="absolute inset-0 flex items-end justify-around px-6 pb-0">
            {SIZES.map((s) => (
              <Link
                key={s.yards}
                href={`/dumpster-sizes/${s.slug}`}
                className="group flex flex-col items-center gap-1 hover:scale-105 transition-transform"
                style={{ width: '17%' }}
              >
                <span className="text-xs font-bold text-gray-800 bg-white/90 rounded px-1.5 py-0.5 shadow-sm hidden sm:block">
                  {s.price}
                </span>
                <div
                  className="w-full rounded-t-lg bg-green-700 group-hover:bg-green-500 transition-colors relative"
                  style={{ height: `${s.height * 2}px` }}
                >
                  <span className="absolute top-2 inset-x-0 text-center text-white font-extrabold text-xl leading-none">
                    {s.yards}
                    <span className="text-xs font-semibold block opacity-90">yd</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Data row */}
        <div className="grid grid-cols-5 border-t border-gray-200 bg-white">
          {SIZES.map((s, i) => (
            <Link
              key={s.yards}
              href={`/dumpster-sizes/${s.slug}`}
              className={`flex flex-col items-center py-3 px-1 text-center hover:bg-green-50 transition-colors ${i < 4 ? 'border-r border-gray-100' : ''}`}
            >
              <span className="text-sm font-bold text-gray-900">{s.yards} yd</span>
              <span className="text-xs text-green-700 font-semibold mt-0.5">{s.price}</span>
              <span className="text-xs text-gray-400 mt-0.5 hidden sm:block">{s.capacity}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
