'use client'

import { useState, useEffect, useRef, useCallback } from 'react'

export type TocSection = { id: string; title: string }

type TableOfContentsProps = {
  sections: TocSection[]
  /** 'full' (default): sidebar on lg+, FAB + bottom sheet on mobile. 'sidebar': sidebar only (e.g. about page). */
  variant?: 'full' | 'sidebar'
}

const defaultRootMargin = '-20% 0px -60% 0px'

export function TableOfContents({
  sections,
  variant = 'full',
}: TableOfContentsProps) {
  const [activeSection, setActiveSection] = useState('')
  const [mobileOpen, setMobileOpen] = useState(false)
  const sheetRef = useRef<HTMLDivElement>(null)
  const prevFocusRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: defaultRootMargin }
    )

    sections.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [sections])

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setMobileOpen(false)
    }
  }, [])

  const openSheet = useCallback(() => {
    prevFocusRef.current = document.activeElement as HTMLButtonElement | null
    setMobileOpen(true)
  }, [])

  const closeSheet = useCallback(() => {
    setMobileOpen(false)
    requestAnimationFrame(() => {
      prevFocusRef.current?.focus()
    })
  }, [])

  useEffect(() => {
    if (!mobileOpen) return
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeSheet()
    }
    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [mobileOpen, closeSheet])

  const showSidebar = variant === 'full' || variant === 'sidebar'
  const showMobileToc = variant === 'full'

  return (
    <>
      {/* Desktop sidebar: visible on lg+ */}
      {showSidebar && (
        <nav
          className="sticky top-20 space-y-2 hidden lg:block"
          aria-label="目次"
        >
          <h3 className="text-sm font-semibold text-indigo mb-4">目次</h3>
          {sections.map(({ id, title }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection(id)
              }}
              className={`block text-sm py-1 px-3 rounded transition-all ${
                activeSection === id
                  ? 'text-artisan-gold font-medium bg-indigo-light'
                  : 'text-indigo-muted hover:text-indigo hover:bg-kinari-light'
              }`}
            >
              {title}
            </a>
          ))}
        </nav>
      )}

      {/* Mobile FAB + bottom sheet: visible below lg */}
      {showMobileToc && (
        <>
          <button
            type="button"
            onClick={openSheet}
            className="fixed bottom-6 right-6 z-40 lg:hidden min-w-[48px] min-h-[48px] px-4 py-3 rounded-full bg-indigo text-kinari font-medium text-sm shadow-lg hover:bg-indigo-dark active:scale-95 transition-all duration-200 flex items-center justify-center gap-1"
            aria-label="目次を開く"
            aria-expanded={mobileOpen}
          >
            目次
          </button>

          {/* Bottom sheet overlay */}
          {mobileOpen && (
            <>
              <div
                className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                style={{ paddingTop: 'env(safe-area-inset-top)' }}
                aria-hidden
                onClick={closeSheet}
              />
              <div
                ref={sheetRef}
                role="dialog"
                aria-modal="true"
                aria-label="目次"
                className="fixed left-0 right-0 bottom-0 z-50 lg:hidden bg-kinari rounded-t-2xl shadow-2xl max-h-[85vh] flex flex-col overscroll-contain transition-transform duration-300 ease-out translate-y-0"
                style={{
                  paddingBottom: 'env(safe-area-inset-bottom)',
                  paddingTop: 'env(safe-area-inset-top)',
                }}
              >
                <div className="flex items-center justify-between px-4 pt-3 pb-2 border-b border-indigo-light">
                  <h3 className="text-lg font-semibold text-indigo">目次</h3>
                  <button
                    type="button"
                    onClick={closeSheet}
                    className="min-w-[48px] min-h-[48px] flex items-center justify-center text-indigo hover:bg-indigo-light rounded-full transition-colors"
                    aria-label="閉じる"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <nav className="overflow-y-auto flex-1 py-2 px-4" aria-label="セクション一覧">
                  {sections.map(({ id, title }) => (
                    <button
                      key={id}
                      type="button"
                      onClick={() => scrollToSection(id)}
                      className={`w-full text-left py-3 px-4 rounded-lg transition-all min-h-[48px] flex items-center ${
                        activeSection === id
                          ? 'text-artisan-gold font-medium bg-indigo-light'
                          : 'text-indigo-muted hover:text-indigo hover:bg-kinari-light'
                      }`}
                    >
                      {title}
                    </button>
                  ))}
                </nav>
              </div>
            </>
          )}
        </>
      )}

    </>
  )
}
