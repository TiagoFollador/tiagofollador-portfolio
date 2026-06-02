import { ImageResponse } from 'next/og'

export const alt = 'Tiago Follador — Full Stack Engineer'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          background: '#0a0a0a',
          padding: '80px',
          fontFamily: 'monospace',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            color: '#22c55e',
            fontSize: 28,
            marginBottom: 24,
          }}
        >
          <span>$ whoami</span>
        </div>
        <div
          style={{
            display: 'flex',
            color: '#f5f5f5',
            fontSize: 84,
            fontWeight: 700,
            letterSpacing: '-0.03em',
          }}
        >
          Tiago Follador
        </div>
        <div
          style={{
            display: 'flex',
            color: '#22c55e',
            fontSize: 44,
            fontWeight: 600,
            marginTop: 12,
          }}
        >
          Full Stack Engineer
        </div>
        <div
          style={{
            display: 'flex',
            color: '#a3a3a3',
            fontSize: 30,
            marginTop: 28,
            maxWidth: 900,
          }}
        >
          Production APIs, integrations, and web systems — available for freelance.
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            color: '#737373',
            fontSize: 26,
            marginTop: 48,
          }}
        >
          <span style={{ color: '#22c55e' }}>{'>'}</span>
          <span>TypeScript · NestJS · React · GraphQL · PostgreSQL</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
