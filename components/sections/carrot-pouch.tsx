'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const CAROUSEL_IMAGES = [
  { src: '/images/homepage/carrot-pouch-close-up.png', alt: 'にんじんポーチ - 久留米絣 クローズアップ' },
  { src: '/images/homepage/carrot-pouches.png', alt: 'にんじんポーチ - 久留米絣 いろいろ' },
] as const

const AUTO_ADVANCE_MS = 5000

export function CarrotPouch() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => (c === CAROUSEL_IMAGES.length - 1 ? 0 : c + 1))
    }, AUTO_ADVANCE_MS)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="section-carrot-pouch" className="py-16 md:py-24 bg-indigo-light scroll-mt-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Carousel */}
            <div className="aspect-square bg-white rounded-lg overflow-hidden shadow-lg relative">
              {CAROUSEL_IMAGES.map((img, i) => (
                <div
                  key={img.src}
                  className="absolute inset-0 transition-opacity duration-300"
                  style={{ opacity: i === current ? 1 : 0 }}
                  aria-hidden={i !== current}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              ))}
              {/* Prev/Next */}
              <button
                type="button"
                onClick={() => setCurrent((c) => (c === 0 ? CAROUSEL_IMAGES.length - 1 : c - 1))}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-md flex items-center justify-center text-indigo hover:bg-white transition-colors z-10"
                aria-label="前の画像"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => setCurrent((c) => (c === CAROUSEL_IMAGES.length - 1 ? 0 : c + 1))}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-md flex items-center justify-center text-indigo hover:bg-white transition-colors z-10"
                aria-label="次の画像"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              {/* Dots */}
              <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 z-10">
                {CAROUSEL_IMAGES.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setCurrent(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      i === current ? 'bg-indigo' : 'bg-white/80 hover:bg-white'
                    }`}
                    aria-label={`画像 ${i + 1}`}
                    aria-current={i === current ? 'true' : undefined}
                  />
                ))}
              </div>
            </div>
            
            {/* Content */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-indigo">
                人気の「にんじんポーチ」
              </h2>
              
              <div className="space-y-4">
                <p className="text-base md:text-lg text-indigo-muted leading-relaxed">
                  馬好きなら、思わず笑顔になるデザイン。
                </p>
                
                <p className="text-base md:text-lg text-indigo-muted leading-relaxed">
                  久留米絣の様々な柄から選んだ布に、にんじんのストラップ。「馬のおやつ」を持ち歩くように、日常の小物を入れて。
                </p>
                
                <p className="text-base md:text-lg text-indigo-muted leading-relaxed">
                  このポーチを見た馬好きの方は、必ず「可愛い！」と言ってくださいます。
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
