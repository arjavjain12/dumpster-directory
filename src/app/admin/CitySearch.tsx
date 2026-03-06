'use client'

import { useState, useEffect, useRef } from 'react'
import { searchCities } from './actions'

interface City {
  id: number
  city_name: string
  state: string
  state_slug: string
  city_slug: string
}

export default function CitySearch({
  initialCity,
  initialCityId,
}: {
  initialCity?: string
  initialCityId?: number
}) {
  const [query, setQuery] = useState(initialCity || '')
  const [results, setResults] = useState<City[]>([])
  const [selectedId, setSelectedId] = useState<number | null>(initialCityId || null)
  const [open, setOpen] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined)
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  function handleChange(value: string) {
    setQuery(value)
    setSelectedId(null)
    if (timerRef.current) clearTimeout(timerRef.current)
    if (value.length < 2) {
      setResults([])
      setOpen(false)
      return
    }
    timerRef.current = setTimeout(async () => {
      const cities = await searchCities(value)
      setResults(cities)
      setOpen(true)
    }, 300)
  }

  function selectCity(city: City) {
    setQuery(`${city.city_name}, ${city.state}`)
    setSelectedId(city.id)
    setOpen(false)
  }

  return (
    <div ref={wrapperRef} className="relative">
      <input type="hidden" name="city_id" value={selectedId || ''} />
      <input
        type="text"
        value={query}
        onChange={(e) => handleChange(e.target.value)}
        onFocus={() => results.length > 0 && setOpen(true)}
        placeholder="Type city name..."
        required
        className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
      />
      {!selectedId && query.length >= 2 && (
        <p className="text-xs text-amber-600 mt-1">Select a city from the dropdown</p>
      )}
      {open && results.length > 0 && (
        <ul className="absolute z-50 top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
          {results.map((city) => (
            <li key={city.id}>
              <button
                type="button"
                onClick={() => selectCity(city)}
                className="w-full text-left px-4 py-2.5 text-sm hover:bg-green-50 transition"
              >
                <span className="font-medium text-gray-900">{city.city_name}</span>
                <span className="text-gray-500">, {city.state}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
