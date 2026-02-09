'use client'

import { motion } from 'framer-motion'

export function KurumeKasuri() {
  return (
    <section className="py-16 md:py-24 bg-indigo-light">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto space-y-12"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-center text-indigo">
            220年続く、手織り職人わずか2人の伝統
          </h2>
          
          <div className="space-y-8">
            {/* Block 1: 重要無形文化財 */}
            <div className="space-y-4">
              <p className="text-base md:text-lg text-indigo-muted leading-relaxed">
                久留米絣は1957年、国の重要無形文化財に指定されました。約200年前、12歳の少女・井上伝が考案したこの技法は、今では日本を代表する伝統工芸の一つです。
              </p>
              <p className="text-base md:text-lg text-indigo-muted leading-relaxed">
                一つの布が完成するまでに、<strong className="text-indigo font-semibold">30以上の工程を経て、2〜3ヶ月</strong>かかります。糸を一本一本手で括り、天然の藍で何度も染め、そして織る。すべてが手作業です。
              </p>
            </div>

            {/* Block 2: 今では職人が2人だけ */}
            <div className="space-y-4">
              <p className="text-base md:text-lg text-indigo-muted leading-relaxed">
                かつて何百人もいた手織り職人は、今ではわずか2人。彼らが使う織機は、100年以上前に作られたものです。
              </p>
              <p className="text-base md:text-lg text-indigo-muted leading-relaxed">
                現代の機械では作れない、<strong className="text-indigo font-semibold">ゆっくりと丁寧に織り上げられる布</strong>。その柔らかさと温かみは、時間をかけた手仕事だからこそ生まれます。
              </p>
              <p className="text-base md:text-lg text-indigo-muted leading-relaxed">
                織りの過程で糸が自然に動くため、完成した布の柄は一つとして同じものがありません。これは偶然が生み出す美しさであり、大量生産では決して真似できない、久留米絣ならではの魅力です。
              </p>
            </div>

            {/* Block 3: この伝統を、もっと多くの人に */}
            <div className="space-y-4">
              <p className="text-base md:text-lg text-indigo-muted leading-relaxed">
                Cloud Nineの久留米絣コラボレーションは、この貴重な伝統工芸の良さを、馬を愛する皆さまに届けたいという想いから生まれました。
              </p>
              <p className="text-base md:text-lg text-indigo-muted leading-relaxed">
                使っていただくこと、それ自体が、伝統を未来へつなぐ一歩になります。一つ一つの製品には、200年以上の歴史と、職人の誇りが織り込まれています。
              </p>
            </div>
          </div>
          
          <div className="text-center pt-4">
            <a 
              href="#" 
              className="inline-flex items-center text-indigo hover:text-artisan-gold font-medium underline-offset-4 hover:underline transition-colors"
            >
              久留米絣について詳しく →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
