'use client'

import { motion } from 'framer-motion'

export function CarrotPouch() {
  return (
    <section className="py-16 md:py-24 bg-indigo-light">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="aspect-square bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="w-full h-full flex items-center justify-center text-indigo-muted p-8 text-center">
                [Carrot Pouch Image Placeholder: Multiple pattern variations showing uniqueness]
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
                  このポーチを見た馬好きの方は、必ず「可愛い！」と言ってくださいます。Yokoが一つひとつ手作りしているので、同じ柄は二つとありません。
                </p>
              </div>
              
              <div className="pt-4">
                <p className="text-2xl md:text-3xl font-bold text-indigo mb-4">
                  ¥[実際の価格]
                </p>
                
                <a 
                  href="https://instagram.com/cloudnine1017"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-indigo hover:text-artisan-gold font-medium underline-offset-4 hover:underline transition-colors"
                >
                  Instagramで他のデザインを見る →
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
