'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { ArrowRight, Calculator, RefreshCw } from 'lucide-react'

const CONCRETE_TYPES = [
  { label: 'Standard Concrete', density: 150 },
  { label: 'Reinforced Concrete', density: 155 },
  { label: 'Lightweight Concrete', density: 110 },
  { label: 'High-Density Concrete', density: 175 },
]

const SHAPES = [
  { id: 'slab', label: 'Slab / Patio / Driveway' },
  { id: 'wall', label: 'Wall / Foundation' },
  { id: 'cylinder', label: 'Column / Post / Cylinder' },
  { id: 'steps', label: 'Steps / Stairs' },
]

const DUMPSTER_RECS = [
  { maxTons: 1.5, size: 10, note: 'A 10-yard dumpster handles up to ~1.5 tons of concrete.' },
  { maxTons: 3, size: 15, note: 'A 15-yard dumpster handles up to ~3 tons of concrete.' },
  { maxTons: 5, size: 20, note: 'A 20-yard dumpster handles up to ~5 tons of concrete.' },
  { maxTons: 8, size: 30, note: 'A 30-yard dumpster handles up to ~8 tons of concrete.' },
  { maxTons: Infinity, size: 40, note: 'A 40-yard dumpster is recommended for very large concrete jobs.' },
]

function getDumpsterRec(tons: number) {
  return DUMPSTER_RECS.find((r) => tons <= r.maxTons) ?? DUMPSTER_RECS[DUMPSTER_RECS.length - 1]
}

function fmt(n: number, decimals = 1) {
  return n.toLocaleString('en-US', { maximumFractionDigits: decimals })
}

export default function ConcreteCalculator() {
  const [shape, setShape] = useState('slab')
  const [concreteType, setConcreteType] = useState(0)
  const [length, setLength] = useState('')
  const [width, setWidth] = useState('')
  const [thickness, setThickness] = useState('')
  const [diameter, setDiameter] = useState('')
  const [height, setHeight] = useState('')
  const [pieces, setPieces] = useState('1')
  const [unit, setUnit] = useState<'ft' | 'in'>('ft')

  const result = useMemo(() => {
    const density = CONCRETE_TYPES[concreteType].density
    const toFt = (v: string) => {
      const n = parseFloat(v) || 0
      return unit === 'in' ? n / 12 : n
    }

    let cubicFt = 0
    const pc = parseFloat(pieces) || 1

    if (shape === 'slab' || shape === 'wall') {
      const l = toFt(length), w = toFt(width), t = toFt(thickness)
      cubicFt = l * w * t * pc
    } else if (shape === 'cylinder') {
      const d = toFt(diameter), h = toFt(height)
      cubicFt = Math.PI * (d / 2) ** 2 * h * pc
    } else if (shape === 'steps') {
      // approx: each step ≈ 0.5 * rise * run * width per step
      const l = toFt(length), w = toFt(width), t = toFt(thickness)
      cubicFt = 0.5 * l * w * t * pc
    }

    const cubicYards = cubicFt / 27
    const lbs = cubicFt * density
    const tons = lbs / 2000
    const rec = getDumpsterRec(tons)

    return { cubicFt, cubicYards, lbs, tons, rec, valid: cubicFt > 0 }
  }, [shape, concreteType, length, width, thickness, diameter, height, pieces, unit])

  const reset = () => {
    setLength(''); setWidth(''); setThickness('')
    setDiameter(''); setHeight(''); setPieces('1')
  }

  const inputCls = 'w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition'
  const labelCls = 'block text-sm font-medium text-gray-700 mb-1'

  return (
    <div className="grid grid-cols-1 xl:grid-cols-5 gap-8">
      {/* Calculator inputs */}
      <div className="xl:col-span-3 space-y-6">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
              <Calculator className="h-5 w-5 text-green-600" />
              Enter Your Measurements
            </h2>
            <button onClick={reset} className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-700 transition">
              <RefreshCw className="h-3.5 w-3.5" /> Reset
            </button>
          </div>

          {/* Concrete type */}
          <div className="mb-5">
            <label className={labelCls}>Concrete Type</label>
            <select value={concreteType} onChange={e => setConcreteType(Number(e.target.value))} className={inputCls}>
              {CONCRETE_TYPES.map((t, i) => (
                <option key={t.label} value={i}>{t.label} ({t.density} lbs/ft³)</option>
              ))}
            </select>
          </div>

          {/* Shape */}
          <div className="mb-5">
            <label className={labelCls}>Shape</label>
            <div className="grid grid-cols-2 gap-2">
              {SHAPES.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setShape(s.id)}
                  className={`rounded-lg border px-3 py-2.5 text-sm font-medium text-left transition ${
                    shape === s.id
                      ? 'border-green-500 bg-green-50 text-green-700'
                      : 'border-gray-200 text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          {/* Unit toggle */}
          <div className="mb-5 flex items-center gap-3">
            <span className="text-sm font-medium text-gray-700">Units:</span>
            {(['ft', 'in'] as const).map((u) => (
              <button
                key={u}
                onClick={() => setUnit(u)}
                className={`rounded-full px-4 py-1 text-sm font-medium transition ${
                  unit === u ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {u === 'ft' ? 'Feet' : 'Inches'}
              </button>
            ))}
          </div>

          {/* Dimension inputs */}
          <div className="grid grid-cols-2 gap-4">
            {(shape === 'slab' || shape === 'wall' || shape === 'steps') && (
              <>
                <div>
                  <label className={labelCls}>Length ({unit})</label>
                  <input type="number" min="0" placeholder="e.g. 20" value={length} onChange={e => setLength(e.target.value)} className={inputCls} />
                </div>
                <div>
                  <label className={labelCls}>Width ({unit})</label>
                  <input type="number" min="0" placeholder="e.g. 15" value={width} onChange={e => setWidth(e.target.value)} className={inputCls} />
                </div>
                <div>
                  <label className={labelCls}>
                    {shape === 'steps' ? 'Rise per step' : 'Thickness'} ({unit})
                  </label>
                  <input type="number" min="0" placeholder={unit === 'ft' ? 'e.g. 0.33' : 'e.g. 4'} value={thickness} onChange={e => setThickness(e.target.value)} className={inputCls} />
                </div>
                {shape === 'steps' && (
                  <div>
                    <label className={labelCls}>Number of Steps</label>
                    <input type="number" min="1" placeholder="e.g. 5" value={pieces} onChange={e => setPieces(e.target.value)} className={inputCls} />
                  </div>
                )}
              </>
            )}
            {shape === 'cylinder' && (
              <>
                <div>
                  <label className={labelCls}>Diameter ({unit})</label>
                  <input type="number" min="0" placeholder="e.g. 1.5" value={diameter} onChange={e => setDiameter(e.target.value)} className={inputCls} />
                </div>
                <div>
                  <label className={labelCls}>Height ({unit})</label>
                  <input type="number" min="0" placeholder="e.g. 8" value={height} onChange={e => setHeight(e.target.value)} className={inputCls} />
                </div>
                <div>
                  <label className={labelCls}>Number of Columns</label>
                  <input type="number" min="1" placeholder="e.g. 4" value={pieces} onChange={e => setPieces(e.target.value)} className={inputCls} />
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Results panel */}
      <div className="xl:col-span-2 space-y-4">
        {result.valid ? (
          <>
            <div className="rounded-2xl border border-green-200 bg-green-50 p-6">
              <h3 className="font-bold text-gray-900 mb-4">Calculated Weight</h3>
              <div className="space-y-3">
                {[
                  { label: 'Cubic Feet', value: fmt(result.cubicFt) + ' ft³' },
                  { label: 'Cubic Yards', value: fmt(result.cubicYards) + ' yd³' },
                  { label: 'Weight (lbs)', value: fmt(result.lbs, 0) + ' lbs' },
                  { label: 'Weight (tons)', value: fmt(result.tons) + ' tons' },
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
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl font-extrabold text-gray-900">{result.rec.size}</span>
                <span className="text-xl font-semibold text-gray-500">yard</span>
              </div>
              <p className="text-sm text-gray-600">{result.rec.note}</p>
              <div className="mt-4 rounded-lg bg-amber-50 border border-amber-100 p-3 text-xs text-amber-800">
                <strong>Note:</strong> Concrete is very heavy. Always confirm weight limits with your hauler before loading — overage fees run $60–$100/ton.
              </div>
              <Link
                href="/dumpster-rental"
                className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-green-600 py-3 font-bold text-white hover:bg-green-700 transition"
              >
                Find Local Dumpster Companies <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </>
        ) : (
          <div className="rounded-2xl border border-dashed border-gray-200 p-8 text-center text-gray-400">
            <Calculator className="h-10 w-10 mx-auto mb-3 opacity-30" />
            <p className="text-sm">Enter your dimensions to calculate weight</p>
          </div>
        )}

        {/* Quick reference */}
        <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Quick Reference</p>
          <div className="space-y-1 text-xs text-gray-600">
            <div className="flex justify-between"><span>1 cubic yard of concrete</span><span className="font-semibold">~4,050 lbs (2 tons)</span></div>
            <div className="flex justify-between"><span>Standard driveway (12×20×4")</span><span className="font-semibold">~2.4 tons</span></div>
            <div className="flex justify-between"><span>Standard patio (10×12×4")</span><span className="font-semibold">~1.5 tons</span></div>
          </div>
        </div>
      </div>
    </div>
  )
}
