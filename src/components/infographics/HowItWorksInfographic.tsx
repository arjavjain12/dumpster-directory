import Image from 'next/image'
import Link from 'next/link'
import { Search, BarChart2, Truck, ArrowRight } from 'lucide-react'

const STEPS = [
  {
    number: '1',
    icon: Search,
    title: 'Search Your City',
    detail: 'Enter your city or browse by state to find every dumpster rental company in your area.',
    color: 'bg-blue-600',
  },
  {
    number: '2',
    icon: BarChart2,
    title: 'Compare Prices',
    detail: 'See ratings, phone numbers, and pricing side by side. No switching tabs, no guesswork.',
    color: 'bg-green-600',
  },
  {
    number: '3',
    icon: Truck,
    title: 'Book & Get Delivered',
    detail: 'Call directly or submit a quote request. Local companies respond fast — often same day.',
    color: 'bg-purple-600',
  },
]

export default function HowItWorksInfographic() {
  return (
    <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-md">
      {/* Background image header */}
      <div className="relative h-40 sm:h-52">
        <Image
          src="/images/infographic-process-bg.jpg"
          alt="Three-step process: search, compare, get dumpster delivered"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-900/80 flex flex-col items-center justify-center text-center px-6">
          <h3 className="text-white font-extrabold text-2xl sm:text-3xl">Get a Dumpster in 3 Steps</h3>
          <p className="text-gray-300 text-sm mt-2 max-w-md">From your first search to dumpster delivery — takes less than 5 minutes</p>
        </div>
      </div>

      {/* Steps */}
      <div className="bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
          {STEPS.map((step) => {
            const Icon = step.icon
            return (
              <div key={step.number} className="p-6 flex flex-col items-center text-center sm:items-start sm:text-left">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`h-9 w-9 rounded-full ${step.color} flex items-center justify-center`}>
                    <Icon className="h-4.5 w-4.5 text-white h-5 w-5" />
                  </div>
                  <span className={`text-xs font-extrabold uppercase tracking-widest ${step.color.replace('bg-', 'text-')}`}>
                    Step {step.number}
                  </span>
                </div>
                <h4 className="font-bold text-gray-900 text-base mb-1">{step.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{step.detail}</p>
              </div>
            )
          })}
        </div>

        <div className="border-t border-gray-100 px-6 py-4 bg-green-50 flex items-center justify-between gap-4">
          <p className="text-sm font-medium text-gray-700">Ready to find companies near you?</p>
          <Link
            href="/dumpster-rental"
            className="shrink-0 flex items-center gap-1.5 text-sm font-bold text-white bg-green-600 hover:bg-green-700 transition px-4 py-2 rounded-lg"
          >
            Search Now <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  )
}
