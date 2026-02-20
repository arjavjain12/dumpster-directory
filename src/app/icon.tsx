import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 8,
          backgroundColor: '#16a34a',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <rect x="1" y="4" width="15" height="12" rx="1" fill="white" />
          <path d="M16 8h4l3 4v4h-7V8z" fill="white" />
          <circle cx="5.5" cy="18.5" r="2" fill="white" stroke="#16a34a" strokeWidth="1" />
          <circle cx="18.5" cy="18.5" r="2" fill="white" stroke="#16a34a" strokeWidth="1" />
        </svg>
      </div>
    ),
    { ...size }
  )
}
