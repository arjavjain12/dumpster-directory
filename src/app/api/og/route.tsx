import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const title = searchParams.get('title') || 'Find Dumpster Rental Companies Near You'
  const subtitle = searchParams.get('subtitle') || 'Compare local roll-off companies · Free quotes · 500+ cities'

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#f9fafb',
          fontFamily: 'sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Green top bar */}
        <div style={{ width: '100%', height: '8px', backgroundColor: '#16a34a', display: 'flex' }} />

        {/* Main content */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '60px 80px',
          }}
        >
          {/* Logo row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '40px' }}>
            <div
              style={{
                width: '56px',
                height: '56px',
                backgroundColor: '#16a34a',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {/* Truck icon (simplified SVG) */}
              <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
                <path d="M1 3h15v13H1zM16 8h4l3 3v5h-7V8z" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="5.5" cy="18.5" r="2.5" fill="white"/>
                <circle cx="18.5" cy="18.5" r="2.5" fill="white"/>
              </svg>
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0px' }}>
              <span style={{ fontSize: '32px', fontWeight: '800', color: '#111827' }}>Dumpster</span>
              <span style={{ fontSize: '32px', fontWeight: '800', color: '#16a34a' }}>Listing</span>
            </div>
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: title.length > 50 ? '48px' : '56px',
              fontWeight: '800',
              color: '#111827',
              lineHeight: '1.15',
              marginBottom: '24px',
              maxWidth: '900px',
            }}
          >
            {title}
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: '24px',
              color: '#6b7280',
              fontWeight: '500',
              marginBottom: '48px',
            }}
          >
            {subtitle}
          </div>

          {/* Stats pills */}
          <div style={{ display: 'flex', gap: '16px' }}>
            {['4,000+ Companies', '500+ Cities', '100% Free'].map((stat) => (
              <div
                key={stat}
                style={{
                  backgroundColor: '#dcfce7',
                  color: '#15803d',
                  fontSize: '18px',
                  fontWeight: '700',
                  padding: '10px 24px',
                  borderRadius: '100px',
                  display: 'flex',
                }}
              >
                {stat}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom domain bar */}
        <div
          style={{
            backgroundColor: '#111827',
            padding: '20px 80px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <span style={{ color: '#9ca3af', fontSize: '20px', fontWeight: '500' }}>
            dumpsterlisting.com
          </span>
          <span style={{ color: '#16a34a', fontSize: '20px', fontWeight: '700' }}>
            Free Quotes · No Spam
          </span>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
