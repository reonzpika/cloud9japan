'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'

const HERO_IMAGE = '/images/samples/S__64815237_0.jpg'

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex flex-col md:flex-row">
      {/* Mobile Image */}
      <div className="md:hidden w-full h-[55vh] relative bg-kinari-light overflow-hidden">
        <Image
          src={HERO_IMAGE}
          alt="Cloud Nine - 馬を愛するあなたへ"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>
      
      {/* Desktop Image */}
      <div className="hidden md:block md:w-1/2 relative bg-kinari-light overflow-hidden min-h-[85vh]">
        <Image
          src={HERO_IMAGE}
          alt="Cloud Nine - 馬を愛するあなたへ"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>
      
      {/* Text Content */}
      <div className="w-full md:w-1/2 bg-kinari px-6 py-8 md:px-20 md:py-20 flex flex-col justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl space-y-6"
        >
          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-indigo leading-tight">
            馬を愛するあなたへ。
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl font-medium text-indigo">
            世界に一つだけの、あなたと馬の物語を持ち歩く
          </p>
          
          {/* Feature Badge */}
          <div className="py-4">
            <div className="inline-block bg-indigo-light p-6 rounded-lg border-2 border-indigo">
              <p className="text-lg font-bold text-indigo mb-2">
                同じものは二つとない
              </p>
              <p className="text-lg font-bold text-indigo mb-3">
                あなたの馬と同じように
              </p>
              <p className="text-sm text-indigo-muted italic">
                No two alike.
              </p>
              <p className="text-sm text-indigo-muted italic">
                Just like your horse.
              </p>
            </div>
          </div>
          
          {/* Body */}
          <div className="space-y-4">
            <p className="text-base md:text-lg text-indigo-muted leading-relaxed">
              Cloud Nineは、馬好きによる、馬好きのための手仕事ブランドです。220年の伝統を持つ久留米絣で、一つひとつ心を込めて作っています。
            </p>
            <p className="text-base md:text-lg text-indigo-muted leading-relaxed">
              久留米絣は、糸の動きにより物理的に同じ柄が二つと作れません。あなたの馬が世界で唯一の存在であるように、このバッグも世界に一つだけです。
            </p>
          </div>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a 
              href="#horse-messe-section" 
              className="inline-flex items-center justify-center px-6 py-3 bg-artisan-gold hover:bg-artisan-gold/90 text-white font-medium text-lg rounded-md transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95"
            >
              🎪 ホースメッセでお会いしましょう（ブースF6）
            </a>
            <a 
              href="https://instagram.com/cloudnine1017"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-indigo hover:bg-indigo-dark text-white font-medium text-lg rounded-md transition-all duration-300 active:scale-95"
            >
              📱 Instagramで制作過程を見る
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
