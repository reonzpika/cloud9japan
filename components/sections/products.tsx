'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const featureCards = [
  {
    title: "職人の手織り久留米絣",
    description: "わずか2人の職人が手織りした、本物の久留米絣です。織りの過程で糸が自然に動くため、同じ柄は物理的に作れません。",
    image: "/images/homepage/kurume-kasuri-process.png"
  },
  {
    title: "久留米絣 × 馬好きの手仕事",
    description: "職人が織った久留米絣に、Yokoが馬のモチーフを一つひとつ手で加えます。伝統の布が、馬を愛する人のための特別なアイテムに生まれ変わります。",
    image: "/images/homepage/yoko-working.png"
  },
  {
    title: "日本製の確かな品質",
    description: "細部まで丁寧に仕上げた、長く使える製品。使い込むほどに柔らかく、味わい深くなります。",
    image: "/images/homepage/kurume-kasuri-label-close-up.png"
  }
]

export function Products() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-indigo">
              馬のいる暮らしを彩る
            </h2>
            <p className="text-lg md:text-xl text-indigo-muted">
              バッグから小物まで、すべて手作り・一点もの
            </p>
          </div>
          
          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {featureCards.map((card, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 bg-indigo-light rounded-lg space-y-3"
              >
                <div className="aspect-square relative w-full overflow-hidden rounded-lg bg-white/50">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className={`object-cover ${index === 2 ? 'scale-[2.04]' : ''}`}
                    sizes="(max-width: 768px) 100vw, 384px"
                  />
                </div>
                <h3 className="text-xl font-serif font-semibold text-indigo text-center">
                  {card.title}
                </h3>
                <p className="text-sm text-indigo-muted leading-relaxed text-center">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
