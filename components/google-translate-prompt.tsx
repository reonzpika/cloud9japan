'use client'

import { useState, useEffect } from 'react'

const STORAGE_KEY = 'cloud9-google-translate-prompt-dismissed'

function isEnglishPreferred(): boolean {
  if (typeof navigator === 'undefined') return false
  const lang = navigator.language
  const languages = navigator.languages
  if (lang?.startsWith('en')) return true
  return Array.isArray(languages) && languages.some((l) => String(l).startsWith('en'))
}

function getGoogleTranslateUrl(): string {
  if (typeof window === 'undefined') return '#'
  const currentUrl = window.location.href
  return `https://translate.google.com/translate?hl=en&sl=ja&u=${encodeURIComponent(currentUrl)}`
}

export function GoogleTranslatePrompt() {
  const [show, setShow] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted || typeof sessionStorage === 'undefined') return
    const dismissed = sessionStorage.getItem(STORAGE_KEY)
    if (dismissed === 'true') return
    if (isEnglishPreferred()) {
      setShow(true)
    }
  }, [mounted])

  const dismiss = () => {
    setShow(false)
    try {
      sessionStorage.setItem(STORAGE_KEY, 'true')
    } catch {
      // ignore
    }
  }

  if (!show) return null

  return (
    <div
      role="region"
      aria-label="Translation suggestion"
      className="fixed bottom-0 left-0 right-0 z-40 bg-indigo text-kinari px-4 py-3 shadow-lg border-t border-artisan-gold/30"
    >
      <div className="container flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm font-medium">
          View this page in English with{' '}
          <a
            href={getGoogleTranslateUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-artisan-gold hover:text-artisan-gold-light transition-colors"
          >
            Google Translate
          </a>
        </p>
        <div className="flex items-center gap-2">
          <a
            href={getGoogleTranslateUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs md:text-sm px-3 py-1.5 rounded bg-artisan-gold text-indigo font-medium hover:bg-artisan-gold-light transition-colors"
          >
            Translate page
          </a>
          <button
            type="button"
            onClick={dismiss}
            className="text-kinari/80 hover:text-kinari text-sm px-2 py-1 rounded transition-colors"
            aria-label="Dismiss"
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>
  )
}
