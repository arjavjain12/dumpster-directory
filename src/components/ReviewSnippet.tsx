import { Star, Quote } from 'lucide-react'

interface ReviewSnippetProps {
  quote: string
  author: string
  location: string
  rating: number
}

export default function ReviewSnippet({ quote, author, location, rating }: ReviewSnippetProps) {
  return (
    <div className="flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <Quote className="h-6 w-6 text-green-200" />
      <div className="mt-3 flex gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-4 w-4 ${star <= rating ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-200 text-gray-200'}`}
          />
        ))}
      </div>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="mt-4 border-t border-gray-100 pt-4">
        <p className="text-sm font-semibold text-gray-900">{author}</p>
        <p className="text-xs text-gray-500">{location}</p>
      </div>
    </div>
  )
}
