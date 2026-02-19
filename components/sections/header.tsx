'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const NAV_ITEMS = [
  { label: 'ホーム', href: '/' },
  { label: '久留米絣を知る', href: '/about-kurumekasuri' },
  { label: 'ホースメッセ', href: '/#horse-messe-section' },
] as const

export type HeaderTocSection = { id: string; title: string }

type HeaderProps = {
  /** When provided (e.g. on homepage), show these TOC links in the mobile menu below main nav */
  tocSections?: HeaderTocSection[]
}

export function Header({ tocSections }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const drawerRef = useRef<HTMLDivElement>(null)
  const hamburgerRef = useRef<HTMLButtonElement>(null)

  const closeMenu = () => setIsMenuOpen(false)

  useEffect(() => {
    if (!isMenuOpen) return
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeMenu()
        hamburgerRef.current?.focus()
      }
    }
    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  return (
    <header className="sticky top-0 z-50 bg-indigo shadow-md overflow-visible">
      <div className="container">
        <div className="flex items-center justify-between h-10 min-h-[44px]">
          <Link
            href="/"
            className="flex items-center gap-2 text-2xl md:text-3xl font-serif font-bold text-kinari hover:text-artisan-gold transition-colors overflow-visible min-h-[44px] items-center"
          >
            <Image
              src="/logos/Logo_illustration.png"
              alt="Cloud Nine"
              width={108}
              height={108}
              className="h-[54px] w-auto"
            />
            <Image
              src="/logos/Logo_text_light.png"
              alt="Cloud Nine"
              width={288}
              height={96}
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop nav: visible from lg */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="メインナビゲーション">
            {NAV_ITEMS.map(({ label, href }) =>
              href.startsWith('/#') ? (
                <a
                  key={href}
                  href={href}
                  className="text-kinari hover:text-artisan-gold transition-colors font-medium text-sm py-2 px-3 rounded min-h-[44px] flex items-center"
                >
                  {label}
                </a>
              ) : (
                <Link
                  key={href}
                  href={href}
                  className="text-kinari hover:text-artisan-gold transition-colors font-medium text-sm py-2 px-3 rounded min-h-[44px] flex items-center"
                >
                  {label}
                </Link>
              )
            )}
          </nav>

          {/* Hamburger: visible below lg, min 44×44px tap target */}
          <button
            ref={hamburgerRef}
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="lg:hidden min-w-[48px] min-h-[48px] flex flex-col items-center justify-center gap-1.5 p-2 text-kinari hover:text-artisan-gold transition-colors rounded"
            aria-label="メニューを開く"
            aria-expanded={isMenuOpen}
          >
            <span className="block w-6 h-0.5 bg-current rounded-full" aria-hidden />
            <span className="block w-6 h-0.5 bg-current rounded-full" aria-hidden />
            <span className="block w-6 h-0.5 bg-current rounded-full" aria-hidden />
          </button>
        </div>
      </div>

      {/* Mobile drawer: full height, slide from right, 200–300ms */}
      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            style={{ paddingTop: 'env(safe-area-inset-top)' }}
            aria-hidden
            onClick={closeMenu}
          />
          <div
            ref={drawerRef}
            role="dialog"
            aria-modal="true"
            aria-label="メニュー"
            className="fixed top-0 right-0 bottom-0 w-full max-w-sm z-50 lg:hidden bg-indigo shadow-2xl flex flex-col overscroll-contain transition-transform duration-300 ease-out translate-x-0"
            style={{
              paddingTop: 'env(safe-area-inset-top)',
              paddingBottom: 'env(safe-area-inset-bottom)',
            }}
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-kinari/20">
              <span className="text-sm font-semibold text-kinari">メニュー</span>
              <button
                type="button"
                onClick={closeMenu}
                className="min-w-[48px] min-h-[48px] flex items-center justify-center text-kinari hover:bg-kinari/10 rounded-full transition-colors"
                aria-label="閉じる"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto py-4 px-4" aria-label="メインナビゲーション">
              <ul className="space-y-1">
                {NAV_ITEMS.map(({ label, href }) => (
                  <li key={href}>
                    {href.startsWith('/#') ? (
                      <a
                        href={href}
                        onClick={closeMenu}
                        className="block py-3 px-4 min-h-[48px] flex items-center text-kinari hover:bg-kinari/10 hover:text-artisan-gold rounded-lg transition-colors font-medium"
                      >
                        {label}
                      </a>
                    ) : (
                      <Link
                        href={href}
                        onClick={closeMenu}
                        className="block py-3 px-4 min-h-[48px] flex items-center text-kinari hover:bg-kinari/10 hover:text-artisan-gold rounded-lg transition-colors font-medium"
                      >
                        {label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
              {tocSections && tocSections.length > 0 && (
                <>
                  <div className="mt-6 pt-4 border-t border-kinari/20">
                    <h3 className="text-xs font-semibold text-kinari/80 uppercase tracking-wider px-4 pb-2">
                      目次
                    </h3>
                    <ul className="space-y-1" aria-label="目次">
                      {tocSections.map(({ id, title }) => (
                        <li key={id}>
                          <a
                            href={`/#${id}`}
                            onClick={closeMenu}
                            className="block py-3 px-4 min-h-[48px] flex items-center text-kinari hover:bg-kinari/10 hover:text-artisan-gold rounded-lg transition-colors font-medium text-sm"
                          >
                            {title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </nav>
          </div>
        </>
      )}
    </header>
  )
}
