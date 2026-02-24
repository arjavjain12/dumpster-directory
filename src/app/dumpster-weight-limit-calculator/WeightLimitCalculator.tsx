'use client'

import { useState } from 'react'
import { AlertTriangle, CheckCircle } from 'lucide-react'

const MATERIAL_WEIGHTS: { name: string; lbsPerCuYd: number; category: string }[] = [
  { name: 'General household junk', lbsPerCuYd: 300, category: 'General' },
  { name: 'Cardboard / paper', lbsPerCuYd: 100, category: 'General' },
  { name: 'Furniture / wood', lbsPerCuYd: 400, category: 'General' },
  { name: 'Drywall / plaster', lbsPerCuYd: 500, category: 'Construction' },
  { name: 'Lumber / wood scraps', lbsPerCuYd: 600, category: 'Construction' },
  { name: 'Asphalt shingles', lbsPerCuYd: 850, category: 'Construction' },
  { name: 'Tile / ceramic', lbsPerCuYd: 1800, category: 'Construction' },
  { name: 'Concrete / brick', lbsPerCuYd: 4050, category: 'Heavy' },
  { name: 'Dirt / soil', lbsPerCuYd: 2700, category: 'Heavy' },
  { name: 'Gravel / stone', lbsPerCuYd: 2800, category: 'Heavy' },
  { name: 'Sand', lbsPerCuYd: 2700, category: 'Heavy' },
  { name: 'Yard waste / brush', lbsPerCuYd: 400, category: 'Yard' },
  { name: 'Leaves / grass clippings', lbsPerCuYd: 250, category: 'Yard' },
]

const DUMPSTER_LIMITS = [
  { yards: 10, limitTons: 2, limitLbs: 4000 },
  { yards: 15, limitTons: 3, limitLbs: 6000 },
  { yards: 20, limitTons: 3, limitLbs: 6000 },
  { yards: 30, limitTons: 5, limitLbs: 10000 },
  { yards: 40, limitTons: 6, limitLbs: 12000 },
]

const OVERAGE_RATE = 65 // $/ton typical

export default function WeightLimitCalculator() {
  const [selectedMaterial, setSelectedMaterial] = useState(MATERIAL_WEIGHTS[0].name)
  const [volume, setVolume] = useState<string>('10')
  const [dumpsterSize, setDumpsterSize] = useState<number>(20)

  const material = MATERIAL_WEIGHTS.find((m) => m.name === selectedMaterial) ?? MATERIAL_WEIGHTS[0]
  const vol = parseFloat(volume) || 0
  const estimatedLbs = material.lbsPerCuYd * vol
  const estimatedTons = estimatedLbs / 2000

  const limit = DUMPSTER_LIMITS.find((d) => d.yards === dumpsterSize) ?? DUMPSTER_LIMITS[2]
  const overLbs = Math.max(0, estimatedLbs - limit.limitLbs)
  const overTons = overLbs / 2000
  const overageCost = overTons * OVERAGE_RATE

  const pctOfLimit = Math.min((estimatedLbs / limit.limitLbs) * 100, 150)
  const isOver = estimatedLbs > limit.limitLbs
  const isClose = !isOver && estimatedLbs > limit.limitLbs * 0.85

  const barColor = isOver ? 'bg-red-500' : isClose ? 'bg-amber-400' : 'bg-green-500'

  const nextSize = DUMPSTER_LIMITS[DUMPSTER_LIMITS.findIndex((d) => d.yards === dumpsterSize) + 1]

  return (
    <div className="space-y-6">
      {/* Inputs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Material type</label>
          <select
            value={selectedMaterial}
            onChange={(e) => setSelectedMaterial(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
          >
            {['General', 'Construction', 'Heavy', 'Yard'].map((cat) => (
              <optgroup key={cat} label={cat}>
                {MATERIAL_WEIGHTS.filter((m) => m.category === cat).map((m) => (
                  <option key={m.name} value={m.name}>{m.name}</option>
                ))}
              </optgroup>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Volume (cubic yards)</label>
          <input
            type="number"
            value={volume}
            min="0.5"
            max="40"
            step="0.5"
            onChange={(e) => setVolume(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Dumpster size</label>
          <select
            value={dumpsterSize}
            onChange={(e) => setDumpsterSize(Number(e.target.value))}
            className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
          >
            {DUMPSTER_LIMITS.map((d) => (
              <option key={d.yards} value={d.yards}>{d.yards} yard (limit: {d.limitTons} tons)</option>
            ))}
          </select>
        </div>
      </div>

      {/* Result */}
      <div className={`rounded-xl border p-5 ${isOver ? 'border-red-200 bg-red-50' : isClose ? 'border-amber-200 bg-amber-50' : 'border-green-200 bg-green-50'}`}>
        <div className="flex items-start gap-3 mb-4">
          {isOver
            ? <AlertTriangle className="h-6 w-6 text-red-500 shrink-0 mt-0.5" />
            : <CheckCircle className="h-6 w-6 text-green-600 shrink-0 mt-0.5" />}
          <div>
            <div className={`font-bold text-lg ${isOver ? 'text-red-700' : isClose ? 'text-amber-700' : 'text-green-700'}`}>
              {isOver
                ? `Over by ${overTons.toFixed(2)} tons — expect overage fees`
                : isClose
                  ? 'Close to the weight limit — consider sizing up'
                  : 'Within weight limits'}
            </div>
            <div className="text-sm text-gray-600 mt-0.5">
              Estimated weight: <strong>{estimatedLbs.toLocaleString()} lbs ({estimatedTons.toFixed(2)} tons)</strong> ·
              Limit: <strong>{limit.limitLbs.toLocaleString()} lbs ({limit.limitTons} tons)</strong>
            </div>
          </div>
        </div>

        {/* Weight bar */}
        <div className="mb-2">
          <div className="h-4 w-full rounded-full bg-gray-200 overflow-hidden">
            <div
              className={`h-4 rounded-full transition-all duration-500 ${barColor}`}
              style={{ width: `${Math.min(pctOfLimit, 100)}%` }}
            />
          </div>
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>0</span>
            <span>{limit.limitTons} ton limit</span>
          </div>
        </div>

        {isOver && (
          <div className="mt-4 rounded-lg bg-white border border-red-100 p-3 text-sm">
            <div className="font-semibold text-red-700 mb-1">Estimated overage charge</div>
            <div className="text-gray-700">
              {overTons.toFixed(2)} tons over × ${OVERAGE_RATE}/ton ≈{' '}
              <strong className="text-red-700">${Math.round(overageCost).toLocaleString()}</strong> extra fee
            </div>
            {nextSize && (
              <div className="text-gray-500 text-xs mt-1">
                Consider a {nextSize.yards}-yard dumpster or splitting into two loads.
              </div>
            )}
          </div>
        )}

        <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-gray-600">
          <div className="rounded bg-white border border-gray-100 p-2">
            <div className="font-semibold text-gray-800">{estimatedLbs.toLocaleString()}</div>
            <div>Est. lbs</div>
          </div>
          <div className="rounded bg-white border border-gray-100 p-2">
            <div className="font-semibold text-gray-800">{estimatedTons.toFixed(2)}</div>
            <div>Est. tons</div>
          </div>
          <div className="rounded bg-white border border-gray-100 p-2">
            <div className="font-semibold text-gray-800">{limit.limitLbs.toLocaleString()}</div>
            <div>Limit lbs</div>
          </div>
          <div className="rounded bg-white border border-gray-100 p-2">
            <div className={`font-semibold ${isOver ? 'text-red-600' : 'text-green-600'}`}>
              {isOver ? `+${overLbs.toLocaleString()}` : `-${(limit.limitLbs - estimatedLbs).toLocaleString()}`}
            </div>
            <div>{isOver ? 'lbs over' : 'lbs remaining'}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
