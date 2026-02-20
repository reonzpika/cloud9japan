'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

type FormStatus = 'idle' | 'submitting' | 'success'

export function EmailCapture() {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [error, setError] = useState<string | null>(null)
  const [email, setEmail] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    setStatus('submitting')
    const res = await fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    })
    if (res.ok) {
      setStatus('success')
      return
    }
    const data = await res.json().catch(() => ({}))
    setError(typeof data.error === 'string' ? data.error : '登録に失敗しました')
    setStatus('idle')
  }

  return (
    <section id="section-email-signup" className="py-16 md:py-24 bg-kinari scroll-mt-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="max-w-xl mx-auto text-center space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-indigo">
            ホースメッセに来られない方へ
          </h2>
          <p className="text-indigo-muted">
            新作情報をいち早くお届けします
          </p>

          <div className="border-t border-indigo-light w-16 mx-auto" aria-hidden />

          {status === 'success' ? (
            <div className="space-y-2">
              <p className="text-indigo font-medium text-center">
                ありがとうございます
              </p>
              <p className="text-sm text-indigo-muted">
                新作情報をお届けします。ホースメッセでお会いしましょう！
              </p>
            </div>
          ) : (
            <>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="メールアドレス"
                    required
                    disabled={status === 'submitting'}
                    className="border border-indigo-light rounded-md px-4 py-3 bg-white text-indigo placeholder:text-indigo-muted focus:outline-none focus:border-artisan-gold w-full"
                  />
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="bg-artisan-gold hover:bg-artisan-gold/90 text-white font-medium px-6 py-3 rounded-md transition-all duration-300 active:scale-95 disabled:opacity-70 disabled:pointer-events-none shrink-0"
                  >
                    {status === 'submitting' ? '登録中...' : '登録する'}
                  </button>
                </div>
                {error && (
                  <p className="text-sm text-terracotta">
                    送信に失敗しました。もう一度お試しください。
                  </p>
                )}
              </form>
              <p className="text-xs text-indigo-muted text-center">
                プライバシーポリシーに基づき、メールアドレスは厳重に管理します。
              </p>
            </>
          )}
        </motion.div>
      </div>
    </section>
  )
}
