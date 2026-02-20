import { NextResponse } from 'next/server'

const EMAIL_REGEX = /.+@.+\..+/

export async function POST(request: Request) {
  let body: { email?: string }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
  }

  const email = typeof body.email === 'string' ? body.email.trim() : ''
  if (!email || !EMAIL_REGEX.test(email)) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
  }

  const RESEND_API_KEY = process.env.RESEND_API_KEY
  const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL

  if (!RESEND_API_KEY || !NOTIFICATION_EMAIL) {
    console.error('Missing Resend env: RESEND_API_KEY or NOTIFICATION_EMAIL')
    return NextResponse.json({ error: 'Subscription failed' }, { status: 500 })
  }

  const headers: HeadersInit = {
    Authorization: `Bearer ${RESEND_API_KEY}`,
    'Content-Type': 'application/json',
  }

  const addContactRes = await fetch('https://api.resend.com/contacts', {
    method: 'POST',
    headers,
    body: JSON.stringify({ email, unsubscribed: false }),
  })

  if (!addContactRes.ok) {
    const errText = await addContactRes.text()
    console.error('Resend add contact failed:', addContactRes.status, errText)
    return NextResponse.json({ error: 'Subscription failed' }, { status: 500 })
  }

  const notificationRes = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers,
    body: JSON.stringify({
      from: 'Cloud Nine <onboarding@resend.dev>',
      to: NOTIFICATION_EMAIL,
      subject: '新規メール登録 / New signup',
      text: `新しいメール登録がありました。\n\nEmail: ${email}\nTime: ${new Date().toISOString()}`,
    }),
  })

  if (!notificationRes.ok) {
    const errText = await notificationRes.text()
    console.error('Resend notification email failed:', notificationRes.status, errText)
    return NextResponse.json({ error: 'Subscription failed' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
