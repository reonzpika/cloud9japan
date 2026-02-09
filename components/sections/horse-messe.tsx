'use client'

import { motion } from 'framer-motion'

export function HorseMesse() {
  return (
    <section id="horse-messe-section" className="py-16 md:py-24 bg-white">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="p-8 md:p-12 border-2 border-indigo rounded-lg bg-indigo-light space-y-6">
            <div className="text-center space-y-4">
              <span className="inline-block px-4 py-2 bg-indigo text-white text-sm font-bold rounded-full">
                2026年2月21日(土)・22日(日)・23日(月・祝)
              </span>
              
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-indigo">
                午年の今年、日本最大の馬の祭典でお会いしましょう
              </h2>
              
              <p className="text-xl font-semibold text-indigo">
                第7回ホースメッセTOKYO2026
              </p>
            </div>
            
            {/* Event Details Grid */}
            <div className="grid md:grid-cols-2 gap-6 py-6">
              <div className="space-y-2">
                <p className="font-semibold text-indigo">📍 会場</p>
                <p className="text-indigo-muted">JRA馬事公苑（東京・世田谷区）</p>
                <p className="text-sm text-indigo-muted">東京2020オリンピック馬術競技会場</p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-indigo">🕘 時間</p>
                <p className="text-indigo-muted">9:00 - 17:00</p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-indigo">🎯 ブース番号</p>
                <p className="text-2xl font-bold text-indigo">F6</p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-indigo">💴 入場料</p>
                <p className="text-indigo-muted">無料</p>
                <p className="text-sm text-indigo-muted">セミナーも無料でご参加いただけます</p>
              </div>
            </div>
            
            <div className="text-center py-4 space-y-4">
              <p className="text-indigo-muted leading-relaxed">
                実物を手に取って、久留米絣の質感を体験いただけます。MarshallとLucasの写真もたくさんご用意していますので、ぜひ遊びにいらしてください。
              </p>
              <p className="text-indigo-muted leading-relaxed">
                馬好きの皆さまとお話しできることを、心から楽しみにしています。
              </p>
            </div>
            
            <div className="text-center pt-4 space-y-4">
              <a 
                href="https://horsemesse.jp/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-indigo text-indigo hover:bg-indigo hover:text-kinari font-medium text-lg rounded-md transition-all duration-300"
              >
                イベント公式サイトを見る
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
