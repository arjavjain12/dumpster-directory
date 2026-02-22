'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { ArrowRight, Calculator, RefreshCw, Plus, Trash2 } from 'lucide-react'

const DUMPSTER_SIZES = [
  { yards: 10, pickupLoads: '3–4', typical: 'Small cleanout, bathroom remodel' },
  { yards: 15, pickupLoads: '4–6', typical: 'Kitchen/bath remodel, garage' },
  { yards: 20, pickupLoads: '6–8', typical: 'Whole-home cleanout, roofing' },
  { yards: 30, pickupLoads: '9–12', typical: 'Large remodel, new construction' },
  { yards: 40, pickupLoads: '12–16', typical: 'Commercial, major demolition' },
]

function getRecommendedSize(yd3: number) {
  if (yd3 <= 10) return 10
  if (yd3 <= 15) return 15
  if (yd3 <= 20) return 20
  if (yd3 <= 30) return 30
  return 40
}

function fmt(n: number, dec = 2) {
  return n.toLocaleString('en-US', { maximumFractionDigits: dec })
}

interface Area {
  id: number
  label: string
  length: string
  width: string
  depth: string
  unit: 'ft' | 'in' | 'yd'
}

let nextId = 2

export default function CubicYardCalculator() {
  const [areas, setAreas] = useState<Area[]>([
    { id: 1, label: 'Area 1', length: '', width: '', depth: '', unit: 'ft' },
  ])

  const results = useMemo(() => {
    return areas.map((a) => {
      const toFt = (v: string) => {
        const n = parseFloat(v) || 0
        if (a.unit === 'in') return n / 12
        if (a.unit === 'yd') return n * 3
        return n
      }
      const cubicFt = toFt(a.length) * toFt(a.width) * toFt(a.depth)
      return cubicFt / 27
    })
  }, [areas])

  const totalYards = results.reduce((s, v) => s + v, 0)
  const recommendedSize = getRecommendedSize(totalYards)
  const pickupLoads = (totalYards / 2).toFixed(1) // ~2 yd³ per pickup load
  const cubicFt = totalYards * 27

  const addArea = () => {
    setAreas((prev) => [...prev, { id: nextId++, label: `Area ${nextId - 1}`, length: '', width: '', depth: '', unit: 'ft' }])
  }

  const removeArea = (id: number) => {
    setAreas((prev) => prev.filter((a) => a.id !== id))
  }

  const updateArea = (id: number, field: keyof Area, value: string) => {
    setAreas((prev) => prev.map((a) => a.id === id ? { ...a, [field]: value } : a))
  }

  const reset = () => {
    setAreas([{ id: 1, label: 'Area 1', length: '', width: '', depth: '', unit: 'ft' }])
  }

  const inputCls = 'w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition'

  return (
    <div className="grid grid-cols-1 xl:grid-cols-5 gap-8">
      <div className="xl:col-span-3 space-y-4">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
              <Calculator className="h-5 w-5 text-green-600" />
              Enter Dimensions
            </h2>
            <button onClick={reset} className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-700 transition">
              <RefreshCw className="h-3.5 w-3.5" /> Reset
            </button>
          </div>

          <div className="space-y-4">
            {areas.map((area, idx) => (
              <div key={area.id} className="rounded-xl border border-gray-100 bg-gray-50 p-4">
                <div className="flex items-center justify-between mb-3">
                  <input
                    value={area.label}
                    onChange={e => updateArea(area.id, 'label', e.target.value)}
                    className="text-sm font-semibold text-gray-700 bg-transparent border-b border-dashed border-gray-300 focus:outline-none focus:border-green-500 w-28"
                  />
                  <div className="flex items-center gap-2">
                    <select value={area.unit} onChange={e => updateArea(area.id, 'unit', e.target.value)}
                      className="text-xs rounded-lg border border-gray-200 px-2 py-1 bg-white">
                      <option value="ft">Feet</option>
                      <option value="in">Inches</option>
                      <option value="yd">Yards</option>
                    </select>
                    {areas.length > 1 && (
                      <button onClick={() => removeArea(area.id)} className="text-red-400 hover:text-red-600 transition">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Length</label>
                    <input type="number" min="0" placeholder="0" value={area.length}
                      onChange={e => updateArea(area.id, 'length', e.target.value)} className={inputCls} />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Width</label>
                    <input type="number" min="0" placeholder="0" value={area.width}
                      onChange={e => updateArea(area.id, 'width', e.target.value)} className={inputCls} />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Depth / Height</label>
                    <input type="number" min="0" placeholder="0" value={area.depth}
                      onChange={e => updateArea(area.id, 'depth', e.target.value)} className={inputCls} />
                  </div>
                </div>
                {results[idx] > 0 && (
                  <p className="text-xs text-green-700 font-semibold mt-2">
                    = {fmt(results[idx])} cubic yards
                  </p>
                )}
              </div>
            ))}
          </div>

          <button onClick={addArea}
            className="mt-4 flex items-center gap-2 text-sm font-medium text-green-600 hover:text-green-700 transition">
            <Plus className="h-4 w-4" /> Add another area
          </button>
        </div>
      </div>

      <div className="xl:col-span-2 space-y-4">
        {totalYards > 0 ? (
          <>
            <div className="rounded-2xl border border-green-200 bg-green-50 p-6">
              <h3 className="font-bold text-gray-900 mb-4">Total Volume</h3>
              <div className="space-y-3">
                {[
                  { label: 'Cubic Feet', value: fmt(cubicFt, 1) + ' ft³' },
                  { label: 'Cubic Yards', value: fmt(totalYards) + ' yd³' },
                  { label: 'Pickup Truck Loads', value: '~' + pickupLoads + ' loads' },
                ].map(({ label, value }) => (
                  <div key={label} className="flex justify-between items-center py-2 border-b border-green-100 last:border-0">
                    <span className="text-sm text-gray-600">{label}</span>
                    <span className="font-bold text-gray-900">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <p className="text-xs font-bold text-green-700 uppercase tracking-wider mb-2">Recommended Dumpster</p>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-5xl font-extrabold text-gray-900">{recommendedSize}</span>
                <span className="text-xl font-semibold text-gray-500">yard</span>
              </div>
              <div className="space-y-1.5 mb-4">
                {DUMPSTER_SIZES.map((s) => (
                  <div key={s.yards} className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm ${s.yards === recommendedSize ? 'bg-green-100 border border-green-300 font-semibold' : 'bg-gray-50'}`}>
                    <span className="text-gray-800">{s.yards} yd — {s.pickupLoads} pickup loads</span>
                    {s.yards === recommendedSize && <span className="text-green-700 text-xs font-bold">✓ Best fit</span>}
                  </div>
                ))}
              </div>
              <Link href="/dumpster-rental"
                className="flex items-center justify-center gap-2 rounded-xl bg-green-600 py-3 font-bold text-white hover:bg-green-700 transition">
                Get Free Quotes <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </>
        ) : (
          <div className="rounded-2xl border border-dashed border-gray-200 p-8 text-center text-gray-400">
            <Calculator className="h-10 w-10 mx-auto mb-3 opacity-30" />
            <p className="text-sm">Enter dimensions to calculate cubic yards</p>
          </div>
        )}

        <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Conversions</p>
          <div className="space-y-1 text-xs text-gray-600">
            <div className="flex justify-between"><span>1 cubic yard</span><span className="font-semibold">27 cubic feet</span></div>
            <div className="flex justify-between"><span>1 cubic yard</span><span className="font-semibold">~46,656 cubic inches</span></div>
            <div className="flex justify-between"><span>1 pickup truck load</span><span className="font-semibold">~2 cubic yards</span></div>
          </div>
        </div>
      </div>
    </div>
  )
}
