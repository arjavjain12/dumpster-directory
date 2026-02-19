'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

interface FAQProps {
  items: FAQItem[]
  cityName: string
}

export default function FAQ({ items, cityName }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  }

  return (
    <section className="py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <h2 className="mb-8 text-2xl font-bold text-gray-900">
        Frequently Asked Questions — Dumpster Rental in {cityName}
      </h2>

      <div className="divide-y divide-gray-200 rounded-xl border border-gray-200 bg-white">
        {items.map((item, i) => {
          const isOpen = openIndex === i
          return (
            <div key={i}>
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left hover:bg-gray-50 transition"
                aria-expanded={isOpen}
              >
                <span className="text-base font-semibold text-gray-900">{item.question}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                />
              </button>
              <div className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                <div className="px-6 pb-5 text-gray-600 leading-relaxed">{item.answer}</div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
