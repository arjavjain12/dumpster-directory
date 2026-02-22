'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { ArrowRight, CheckCircle, RefreshCw } from 'lucide-react'

const PROJECT_TYPES = [
  { id: 'cleanout', label: '🏠 Home Cleanout', baseYards: 8 },
  { id: 'renovation', label: '🔨 Home Renovation', baseYards: 12 },
  { id: 'roofing', label: '🏗️ Roofing Project', baseYards: 15 },
  { id: 'construction', label: '🧱 New Construction', baseYards: 25 },
  { id: 'landscaping', label: '🌿 Landscaping', baseYards: 8 },
  { id: 'commercial', label: '🏢 Commercial', baseYards: 30 },
  { id: 'custom', label: '📦 Custom / Mixed', baseYards: 0 },
]

const ITEMS: { category: string; items: { id: string; label: string; yards: number }[] }[] = [
  {
    category: 'Furniture',
    items: [
      { id: 'sofa', label: 'Sofa / Sectional', yards: 2 },
      { id: 'mattress', label: 'Mattress (per)', yards: 1.5 },
      { id: 'bed_frame', label: 'Bed Frame', yards: 1 },
      { id: 'dresser', label: 'Dresser / Wardrobe', yards: 1.5 },
      { id: 'dining_set', label: 'Dining Table + Chairs', yards: 2 },
      { id: 'desk', label: 'Desk', yards: 1 },
    ],
  },
  {
    category: 'Appliances',
    items: [
      { id: 'fridge', label: 'Refrigerator', yards: 1.5 },
      { id: 'washer', label: 'Washer or Dryer', yards: 1 },
      { id: 'stove', label: 'Stove / Range', yards: 1 },
      { id: 'dishwasher', label: 'Dishwasher', yards: 0.75 },
      { id: 'ac_window', label: 'Window AC Unit', yards: 0.5 },
    ],
  },
  {
    category: 'Construction Debris',
    items: [
      { id: 'drywall_room', label: 'Drywall (per room)', yards: 3 },
      { id: 'flooring_room', label: 'Flooring (per room)', yards: 2 },
      { id: 'roofing_1500', label: 'Roofing shingles (1,500 sq ft)', yards: 10 },
      { id: 'roofing_2500', label: 'Roofing shingles (2,500 sq ft)', yards: 15 },
      { id: 'cabinets_kitchen', label: 'Kitchen Cabinets (full set)', yards: 4 },
      { id: 'concrete_patio', label: 'Concrete Patio (10×10)', yards: 3 },
      { id: 'deck_small', label: 'Wood Deck (small)', yards: 4 },
      { id: 'deck_large', label: 'Wood Deck (large)', yards: 8 },
    ],
  },
  {
    category: 'Yard & Outdoor',
    items: [
      { id: 'yard_bags', label: 'Yard waste bags (10)', yards: 1 },
      { id: 'tree_small', label: 'Small tree removal', yards: 3 },
      { id: 'tree_large', label: 'Large tree removal', yards: 8 },
      { id: 'shrubs', label: 'Shrubs & bushes (lot)', yards: 3 },
      { id: 'sod', label: 'Sod removal (500 sq ft)', yards: 3 },
    ],
  },
  {
    category: 'Miscellaneous',
    items: [
      { id: 'boxes_sm', label: 'Boxes / bags (10)', yards: 1 },
      { id: 'clothing', label: 'Clothing & textiles (large)', yards: 1 },
      { id: 'books', label: 'Books & paper (large)', yards: 0.5 },
      { id: 'electronics', label: 'Electronics (box)', yards: 0.5 },
      { id: 'paint_cans', label: 'Misc. junk (room)', yards: 1.5 },
    ],
  },
]

const SIZES = [
  { yards: 10, label: '10-Yard', price: '$275–$450', capacity: '3–4 pickup loads', slug: '10-yard' },
  { yards: 15, label: '15-Yard', price: '$325–$500', capacity: '4–6 pickup loads', slug: '15-yard' },
  { yards: 20, label: '20-Yard', price: '$375–$575', capacity: '6–8 pickup loads', slug: '20-yard' },
  { yards: 30, label: '30-Yard', price: '$425–$650', capacity: '9–12 pickup loads', slug: '30-yard' },
  { yards: 40, label: '40-Yard', price: '$475–$750', capacity: '12–16 pickup loads', slug: '40-yard' },
]

function getRecommended(total: number) {
  // Add 20% buffer for packing inefficiency
  const withBuffer = total * 1.2
  if (withBuffer <= 10) return 10
  if (withBuffer <= 15) return 15
  if (withBuffer <= 20) return 20
  if (withBuffer <= 30) return 30
  return 40
}

export default function DumpsterEstimator() {
  const [projectType, setProjectType] = useState<string | null>(null)
  const [quantities, setQuantities] = useState<Record<string, number>>({})

  const itemTotal = useMemo(() => {
    return ITEMS.flatMap(c => c.items).reduce((sum, item) => {
      return sum + (item.yards * (quantities[item.id] ?? 0))
    }, 0)
  }, [quantities])

  const baseYards = projectType ? (PROJECT_TYPES.find(p => p.id === projectType)?.baseYards ?? 0) : 0
  const totalYards = projectType === 'custom' ? itemTotal : Math.max(baseYards, itemTotal)
  const recommended = getRecommended(totalYards)
  const recSize = SIZES.find(s => s.yards === recommended)!

  const setQty = (id: string, delta: number) => {
    setQuantities(prev => {
      const cur = prev[id] ?? 0
      const next = Math.max(0, cur + delta)
      if (next === 0) {
        const { [id]: _, ...rest } = prev
        return rest
      }
      return { ...prev, [id]: next }
    })
  }

  const totalItems = Object.values(quantities).reduce((s, v) => s + v, 0)

  return (
    <div className="grid grid-cols-1 xl:grid-cols-5 gap-8">
      <div className="xl:col-span-3 space-y-6">

        {/* Step 1: Project type */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-900">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-green-600 text-white text-sm font-bold mr-2">1</span>
              What type of project?
            </h2>
            {(projectType || totalItems > 0) && (
              <button onClick={() => { setProjectType(null); setQuantities({}) }}
                className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-600 transition">
                <RefreshCw className="h-3.5 w-3.5" /> Reset
              </button>
            )}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {PROJECT_TYPES.map((p) => (
              <button key={p.id} onClick={() => setProjectType(p.id)}
                className={`rounded-xl border px-3 py-3 text-sm font-medium text-left transition ${projectType === p.id ? 'border-green-500 bg-green-50 text-green-700' : 'border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50'}`}>
                {p.label}
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: Add items */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-bold text-gray-900 mb-1">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-green-600 text-white text-sm font-bold mr-2">2</span>
            Add specific items <span className="text-gray-400 font-normal text-sm">(optional — improves accuracy)</span>
          </h2>
          <p className="text-sm text-gray-500 mb-5 ml-9">Check off items you're disposing of to refine the estimate.</p>
          <div className="space-y-6">
            {ITEMS.map((cat) => (
              <div key={cat.category}>
                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">{cat.category}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {cat.items.map((item) => {
                    const qty = quantities[item.id] ?? 0
                    return (
                      <div key={item.id}
                        className={`flex items-center justify-between rounded-lg border px-3 py-2.5 ${qty > 0 ? 'border-green-300 bg-green-50' : 'border-gray-100 bg-gray-50'}`}>
                        <span className="text-sm text-gray-700 flex-1">{item.label}</span>
                        <div className="flex items-center gap-2 shrink-0 ml-2">
                          <button onClick={() => setQty(item.id, -1)}
                            className="h-6 w-6 rounded-full border border-gray-300 bg-white text-gray-600 text-sm font-bold hover:border-red-300 hover:text-red-500 transition flex items-center justify-center">
                            −
                          </button>
                          <span className={`w-5 text-center text-sm font-bold ${qty > 0 ? 'text-green-700' : 'text-gray-400'}`}>{qty}</span>
                          <button onClick={() => setQty(item.id, 1)}
                            className="h-6 w-6 rounded-full border border-gray-300 bg-white text-gray-600 text-sm font-bold hover:border-green-400 hover:text-green-600 transition flex items-center justify-center">
                            +
                          </button>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="xl:col-span-2 space-y-4">
        {(projectType || totalItems > 0) ? (
          <>
            <div className="rounded-2xl border border-green-200 bg-green-50 p-6">
              <h3 className="font-bold text-gray-900 mb-4">Your Estimate</h3>
              <div className="space-y-2">
                {projectType && projectType !== 'custom' && (
                  <div className="flex justify-between text-sm py-1.5 border-b border-green-100">
                    <span className="text-gray-600">Project base estimate</span>
                    <span className="font-semibold text-gray-900">~{baseYards} yd³</span>
                  </div>
                )}
                {totalItems > 0 && (
                  <div className="flex justify-between text-sm py-1.5 border-b border-green-100">
                    <span className="text-gray-600">Selected items ({totalItems} items)</span>
                    <span className="font-semibold text-gray-900">~{itemTotal.toFixed(1)} yd³</span>
                  </div>
                )}
                <div className="flex justify-between text-sm py-1.5 border-b border-green-100">
                  <span className="text-gray-600">Packing buffer (20%)</span>
                  <span className="font-semibold text-gray-900">+{(totalYards * 0.2).toFixed(1)} yd³</span>
                </div>
                <div className="flex justify-between text-base pt-1">
                  <span className="font-bold text-gray-900">Total Estimate</span>
                  <span className="font-extrabold text-green-700">{(totalYards * 1.2).toFixed(1)} yd³</span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <p className="text-xs font-bold text-green-700 uppercase tracking-wider mb-2">Recommended</p>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-5xl font-extrabold text-gray-900">{recSize.yards}</span>
                <span className="text-xl font-semibold text-gray-500">yard dumpster</span>
              </div>
              <p className="text-sm text-gray-500 mb-4">{recSize.capacity} · avg {recSize.price}</p>

              <div className="space-y-1.5 mb-5">
                {SIZES.map((s) => (
                  <div key={s.yards} className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm ${s.yards === recommended ? 'bg-green-100 border border-green-300' : 'bg-gray-50'}`}>
                    <span className={`font-medium ${s.yards === recommended ? 'text-green-800' : 'text-gray-600'}`}>
                      {s.yards} yd — {s.price}
                    </span>
                    {s.yards === recommended && <CheckCircle className="h-4 w-4 text-green-600" />}
                  </div>
                ))}
              </div>

              <Link href="/dumpster-rental"
                className="flex items-center justify-center gap-2 rounded-xl bg-green-600 py-3 font-bold text-white hover:bg-green-700 transition">
                Find Local Companies <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href={`/dumpster-sizes/${recSize.slug}`}
                className="mt-2 flex items-center justify-center gap-1 text-sm font-medium text-green-600 hover:text-green-700 transition">
                Full {recSize.yards}-yard guide <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </>
        ) : (
          <div className="rounded-2xl border border-dashed border-gray-200 p-8 text-center text-gray-400">
            <div className="text-5xl mb-3">🗑️</div>
            <p className="text-sm font-medium">Select a project type to get started</p>
            <p className="text-xs mt-1">Then add specific items for a more accurate estimate</p>
          </div>
        )}
      </div>
    </div>
  )
}
