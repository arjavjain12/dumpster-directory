import Image from 'next/image'
import { CheckCircle, XCircle } from 'lucide-react'

const ALLOWED = [
  'Furniture (sofas, beds, tables)',
  'Appliances (washer, dryer, dishwasher)',
  'Cardboard & paper',
  'Clothing & textiles',
  'Wood, lumber & drywall',
  'Roofing shingles',
  'Yard waste & brush',
  'Concrete & brick (confirm weight)',
  'Metal scraps & piping',
  'Electronics (TVs, computers)',
]

const PROHIBITED = [
  'Hazardous waste (paint, solvents)',
  'Motor oil & gasoline',
  'Batteries (car & household)',
  'Refrigerants (AC units, fridges)',
  'Tires',
  'Medical waste',
  'Asbestos',
  'Propane tanks',
  'Fluorescent light bulbs',
  'Pesticides & fertilizers',
]

export default function WhatFitsInfographic() {
  return (
    <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-md">
      {/* Header with background */}
      <div className="relative h-36 sm:h-44">
        <Image
          src="/images/infographic-what-fits-bg.jpg"
          alt="Overhead view of items loaded into a roll-off dumpster"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 to-gray-900/80 flex items-center justify-center">
          <div className="text-center">
            <h3 className="text-white font-extrabold text-xl sm:text-2xl">What Can Go In a Dumpster?</h3>
            <p className="text-gray-300 text-sm mt-1">Know before you load — avoid extra fees</p>
          </div>
        </div>
      </div>

      {/* Two-column list */}
      <div className="grid grid-cols-1 sm:grid-cols-2 bg-white">
        {/* Allowed */}
        <div className="p-5 border-b sm:border-b-0 sm:border-r border-gray-100">
          <div className="flex items-center gap-2 mb-3">
            <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle className="h-4 w-4 text-green-600" />
            </div>
            <h4 className="font-bold text-green-800 text-sm uppercase tracking-wide">Accepted Items</h4>
          </div>
          <ul className="space-y-1.5">
            {ALLOWED.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                <CheckCircle className="h-3.5 w-3.5 text-green-500 shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Prohibited */}
        <div className="p-5 bg-red-50/30">
          <div className="flex items-center gap-2 mb-3">
            <div className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center">
              <XCircle className="h-4 w-4 text-red-600" />
            </div>
            <h4 className="font-bold text-red-800 text-sm uppercase tracking-wide">Not Accepted</h4>
          </div>
          <ul className="space-y-1.5">
            {PROHIBITED.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                <XCircle className="h-3.5 w-3.5 text-red-500 shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-amber-50 border-t border-amber-100 px-5 py-3">
        <p className="text-xs text-amber-800">
          <strong>Tip:</strong> Rules vary by company and municipality. Always confirm with your local hauler before loading prohibited items — violations can result in $50–$500 in extra fees.
        </p>
      </div>
    </div>
  )
}
