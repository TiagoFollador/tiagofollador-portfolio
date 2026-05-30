import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { profile } from '@/data/profile'

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null)
  if (!body) {
    return NextResponse.json({ error: 'invalid_body' }, { status: 400 })
  }

  const { name, email, message, _gotcha } = body

  // Honeypot: return 200 silently to fool bots.
  if (_gotcha) {
    return NextResponse.json({ ok: true })
  }

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json({ error: 'missing_fields' }, { status: 422 })
  }

  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ error: 'not_configured' }, { status: 503 })
  }

  const resend = new Resend(process.env.RESEND_API_KEY)

  const { error } = await resend.emails.send({
    from: 'Portfólio <onboarding@resend.dev>',
    to: profile.email,
    replyTo: email,
    subject: `[Portfolio] Mensagem de ${name}`,
    text: `Nome: ${name}\nE-mail: ${email}\n\n${message}`,
  })

  if (error) {
    console.error('Resend error:', error)
    return NextResponse.json({ error: 'send_failed' }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
