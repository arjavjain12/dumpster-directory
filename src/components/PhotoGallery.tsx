'use client'

import { useState, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'

interface PhotoGalleryProps {
  photos: string[]
  businessName: string
}

export default function PhotoGallery({ photos, businessName }: PhotoGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const [mounted, setMounted] = useState(false)
  const [visible, setVisible] = useState(false)

  // Track when component is mounted (for createPortal)
  useEffect(() => {
    setMounted(true)
  }, [])

  // Lock body scroll & fade in when lightbox opens
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden'
      // Trigger fade-in on next frame
      requestAnimationFrame(() => setVisible(true))
    } else {
      document.body.style.overflow = ''
      setVisible(false)
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [lightboxIndex])

  const closeLightbox = useCallback(() => {
    setVisible(false)
    // Wait for fade-out transition before unmounting
    setTimeout(() => setLightboxIndex(null), 200)
  }, [])

  const goNext = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null ? (prev + 1) % photos.length : null))
  }, [photos.length])

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null ? (prev - 1 + photos.length) % photos.length : null))
  }, [photos.length])

  // Keyboard navigation
  useEffect(() => {
    if (lightboxIndex === null) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') goNext()
      if (e.key === 'ArrowLeft') goPrev()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightboxIndex, closeLightbox, goNext, goPrev])

  if (!photos || photos.length === 0) return null

  const lightbox =
    lightboxIndex !== null && mounted
      ? createPortal(
          <div
            className={`fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-200 ${
              visible ? 'opacity-100' : 'opacity-0'
            }`}
            role="dialog"
            aria-modal="true"
            aria-label={`Photo ${lightboxIndex + 1} of ${photos.length} — ${businessName}`}
          >
            {/* Overlay */}
            <div
              className="absolute inset-0 bg-black/90"
              onClick={closeLightbox}
            />

            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="Close lightbox"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Prev arrow */}
            {photos.length > 1 && (
              <button
                onClick={goPrev}
                className="absolute left-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                aria-label="Previous photo"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}

            {/* Image */}
            <div className="relative z-10 max-h-[85vh] max-w-[90vw]">
              <Image
                src={photos[lightboxIndex]}
                alt={`${businessName} — photo ${lightboxIndex + 1}`}
                width={1200}
                height={800}
                className="max-h-[85vh] max-w-[90vw] object-contain"
                unoptimized
              />
            </div>

            {/* Next arrow */}
            {photos.length > 1 && (
              <button
                onClick={goNext}
                className="absolute right-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                aria-label="Next photo"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}

            {/* Counter */}
            {photos.length > 1 && (
              <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 rounded-full bg-black/60 px-4 py-1.5 text-sm font-medium text-white">
                {lightboxIndex + 1} / {photos.length}
              </div>
            )}
          </div>,
          document.body,
        )
      : null

  return (
    <>
      <div
        className={`grid gap-2 rounded-xl overflow-hidden ${
          photos.length === 1
            ? 'grid-cols-1'
            : 'grid-cols-2'
        }`}
      >
        {/* Main / first image */}
        <div
          className={`relative cursor-pointer ${
            photos.length === 1 ? 'h-64' : 'h-64 row-span-2'
          }`}
          onClick={() => setLightboxIndex(0)}
        >
          <Image
            src={photos[0]}
            alt={`${businessName} — photo 1`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 600px"
            unoptimized
          />
        </div>

        {/* Additional images stacked on the right */}
        {photos.slice(1).map((src, i) => (
          <div
            key={i}
            className="relative h-32 cursor-pointer"
            onClick={() => setLightboxIndex(i + 1)}
          >
            <Image
              src={src}
              alt={`${businessName} — photo ${i + 2}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 300px"
              unoptimized
            />
          </div>
        ))}
      </div>

      {lightbox}
    </>
  )
}
