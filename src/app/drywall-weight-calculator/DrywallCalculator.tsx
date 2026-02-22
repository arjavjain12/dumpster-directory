'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { ArrowRight, Calculator, RefreshCw } from 'lucide-react'

const THICKNESS_OPTIONS = [
  { label: '1/4" (6mm) — Repair/overlay', lbsPerSqFt: 1.2 },
  { label: '3/8" (10mm) — Curved walls', lbsPerSqFt: 1.56 },
  { label: '1/2" (13mm) — Standard walls', lbsPerSqFt: 1.78 },
  { label: '5/8" (16mm) — Ceilings / fire-rated', lbsPerSqFt: 2.31 },
  { label: '3/4" (19mm) — Shaft liner', lbsPerSqFt: 2.84 },
]

const DUMPSTER_RECS = [
  { maxTons: 1, size: 10, note: 'A 10-yard dumpster easily handles small remodel drywall.' },
  { maxTons: 2.5, size: 15, note: 'A 15-yard dumpster suits a full room or small home renovation.' },
  { maxTons: 4, size: 20, note: 'A 20-yard dumpster is ideal for whole-home drywall removal.' },
  { maxTons: Infinity, size: 30, note: 'A 30-yard dumpster handles large commercial drywall jobs.' },
]

function getDumpsterRec(tons: number) {
  return DUMPSTER_RECS.find((r) => tons <= r.maxTons) ?? DUMPSTER_RECS[DUMPSTER_RECS.length - 1]
}

function fmt(n: number, dec = 1) {
  return n.toLocaleString('en-US', { maximumFractionDigits: dec })
}

export default function DrywallCalculator() {
  const [mode, setMode] = useState<'room' | 'sqft'>('room')
  const [thicknessIdx, setThicknessIdx] = useState(2)
  const [sqft, setSqft] = useState('')
  const [roomLength, setRoomLength] = useState('')
  const [roomWidth, setRoomWidth] = useState('')
  const [roomHeight, setRoomHeight] = useState('9')
  const [doors, setDoors] = useState('1')
  const [windows, setWindows] = useState('2')
  const [layers, setLayers] = useState('1')
  const [rooms, setRooms] = useState('1')

  const result = useMemo(() => {
    const lbsPerSqFt = THICKNESS_OPTIONS[thicknessIdx].lbsPerSqFt
    const l = parseFloat(layers) || 1
    const r = parseFloat(rooms) || 1

    let wallSqFt = 0
    if (mode === 'sqft') {
      wallSqFt = (parseFloat(sqft) || 0) * r
    } else {
      const len = parseFloat(roomLength) || 0
      const wid = parseFloat(roomWidth) || 0
      const ht = parseFloat(roomHeight) || 9
      const d = parseFloat(doors) || 0
      const w = parseFloat(windows) || 0
      // Perimeter × height − door area (20 sq ft each) − window area (15 sq ft each) + ceiling
      wallSqFt = ((2 * (len + wid) * ht) - (d * 20) - (w * 15) + (len * wid)) * r
    }

    const totalSqFt = wallSqFt * l
    const sheets = Math.ceil(totalSqFt / 32) // standard 4×8 sheet = 32 sq ft
    const lbs = totalSqFt * lbsPerSqFt
    const tons = lbs / 2000
    const rec = getDumpsterRec(tons)

    return { totalSqFt, sheets, lbs, tons, rec, valid: totalSqFt > 0 }
  }, [mode, thicknessIdx, sqft, roomLength, roomWidth, roomHeight, doors, windows, layers, rooms])

  const reset = () => {
    setSqft(''); setRoomLength(''); setRoomWidth('')
    setRoomHeight('9'); setDoors('1'); setWindows('2')
    setLayers('1'); setRooms('1')
  }

  const inputCls = 'w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition'
  const labelCls = 'block text-sm font-medium text-gray-700 mb-1'

  return (
    <div className="grid grid-cols-1 xl:grid-cols-5 gap-8">
      <div className="xl:col-span-3 space-y-6">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
              <Calculator className="h-5 w-5 text-green-600" />
              Enter Your Project Details
            </h2>
            <button onClick={reset} className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-700 transition">
              <RefreshCw className="h-3.5 w-3.5" /> Reset
            </button>
          </div>

          {/* Mode */}
          <div className="mb-5">
            <label className={labelCls}>How do you want to measure?</label>
            <div className="grid grid-cols-2 gap-2">
              {[
                { id: 'room', label: 'By Room Dimensions' },
                { id: 'sqft', label: 'I know the sq footage' },
              ].map((m) => (
                <button key={m.id} onClick={() => setMode(m.id as 'room' | 'sqft')}
                  className={`rounded-lg border px-3 py-2.5 text-sm font-medium text-left transition ${mode === m.id ? 'border-green-500 bg-green-50 text-green-700' : 'border-gray-200 text-gray-700 hover:border-gray-300'}`}>
                  {m.label}
                </button>
              ))}
            </div>
          </div>

          {/* Thickness */}
          <div className="mb-5">
            <label className={labelCls}>Drywall Thickness</label>
            <select value={thicknessIdx} onChange={e => setThicknessIdx(Number(e.target.value))} className={inputCls}>
              {THICKNESS_OPTIONS.map((t, i) => (
                <option key={t.label} value={i}>{t.label} — {t.lbsPerSqFt} lbs/sq ft</option>
              ))}
            </select>
          </div>

          {mode === 'sqft' ? (
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <label className={labelCls}>Total Square Footage (per room)</label>
                <input type="number" min="0" placeholder="e.g. 500" value={sqft} onChange={e => setSqft(e.target.value)} className={inputCls} />
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelCls}>Room Length (ft)</label>
                <input type="number" min="0" placeholder="e.g. 12" value={roomLength} onChange={e => setRoomLength(e.target.value)} className={inputCls} />
              </div>
              <div>
                <label className={labelCls}>Room Width (ft)</label>
                <input type="number" min="0" placeholder="e.g. 10" value={roomWidth} onChange={e => setRoomWidth(e.target.value)} className={inputCls} />
              </div>
              <div>
                <label className={labelCls}>Ceiling Height (ft)</label>
                <input type="number" min="0" placeholder="e.g. 9" value={roomHeight} onChange={e => setRoomHeight(e.target.value)} className={inputCls} />
              </div>
              <div>
                <label className={labelCls}>Number of Doors</label>
                <input type="number" min="0" placeholder="e.g. 1" value={doors} onChange={e => setDoors(e.target.value)} className={inputCls} />
              </div>
              <div>
                <label className={labelCls}>Number of Windows</label>
                <input type="number" min="0" placeholder="e.g. 2" value={windows} onChange={e => setWindows(e.target.value)} className={inputCls} />
              </div>
            </div>
          )}

          <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-gray-100">
            <div>
              <label className={labelCls}>Layers of Drywall</label>
              <input type="number" min="1" max="4" placeholder="1" value={layers} onChange={e => setLayers(e.target.value)} className={inputCls} />
            </div>
            <div>
              <label className={labelCls}>Number of Rooms</label>
              <input type="number" min="1" placeholder="1" value={rooms} onChange={e => setRooms(e.target.value)} className={inputCls} />
            </div>
          </div>
        </div>
      </div>

      <div className="xl:col-span-2 space-y-4">
        {result.valid ? (
          <>
            <div className="rounded-2xl border border-green-200 bg-green-50 p-6">
              <h3 className="font-bold text-gray-900 mb-4">Results</h3>
              <div className="space-y-3">
                {[
                  { label: 'Total Area', value: fmt(result.totalSqFt, 0) + ' sq ft' },
                  { label: '4×8 Sheets', value: fmt(result.sheets, 0) + ' sheets' },
                  { label: 'Weight (lbs)', value: fmt(result.lbs, 0) + ' lbs' },
                  { label: 'Weight (tons)', value: fmt(result.tons, 2) + ' tons' },
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
              <Link href="/dumpster-rental"
                className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-green-600 py-3 font-bold text-white hover:bg-green-700 transition">
                Find Local Companies <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </>
        ) : (
          <div className="rounded-2xl border border-dashed border-gray-200 p-8 text-center text-gray-400">
            <Calculator className="h-10 w-10 mx-auto mb-3 opacity-30" />
            <p className="text-sm">Enter your project details to see results</p>
          </div>
        )}

        <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Quick Reference</p>
          <div className="space-y-1 text-xs text-gray-600">
            <div className="flex justify-between"><span>1/2" drywall (per sheet)</span><span className="font-semibold">~57 lbs</span></div>
            <div className="flex justify-between"><span>5/8" drywall (per sheet)</span><span className="font-semibold">~74 lbs</span></div>
            <div className="flex justify-between"><span>Average bedroom tearout</span><span className="font-semibold">~400–600 lbs</span></div>
          </div>
        </div>
      </div>
    </div>
  )
}
