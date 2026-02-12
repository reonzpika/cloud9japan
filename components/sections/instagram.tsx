'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const hashtags = [
  "#ホースメッセ2026",
  "#馬好きさんと繋がりたい",
  "#久留米絣",
  "#乗馬ファッション"
]

export function Instagram() {
  return (
    <section className="py-16 md:py-24 bg-kinari-light">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center space-y-8"
        >
          <div className="flex justify-center">
            <Image
              src="/logos/Logo_with_background.png"
              alt="Cloud Nine"
              width={480}
              height={480}
              className="h-[160px] w-auto"
            />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-indigo">
            制作の様子、MarshallとLucasとの日々
          </h2>

          <div className="space-y-4">
            <p className="text-lg text-indigo-muted">
              @cloudnine1017 で、新作の制作過程や、Marshall・Lucasとの暮らしを投稿しています。
            </p>
            <p className="text-base text-indigo-muted">
              手作業で一つ一つ作られる過程や、馬たちとの何気ない瞬間を、ぜひご覧ください。
            </p>
            <p className="text-base text-indigo-muted">
              馬を愛するYokoと、カメラを愛するYukaの二人でお届けしています。
            </p>
          </div>

          {/* Hashtags */}
          <div className="flex flex-wrap justify-center gap-3">
            {hashtags.map((tag, index) => (
              <span
                key={index}
                className="text-sm text-indigo-muted hover:text-artisan-gold transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="pt-4">
            <a
              href="https://www.instagram.com/cloudnine1017"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-indigo hover:bg-indigo-dark text-white font-medium text-lg rounded-md transition-all duration-300 active:scale-95"
            >
              Instagramをフォローする
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
