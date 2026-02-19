'use client'

import { motion } from 'framer-motion'

const benefits = [
  {
    icon: "🦟",
    title: "防虫効果",
    description: "江戸時代から、藍染めは虫除けとして使われてきました。田んぼで働く農民も、戦場に向かう武士も、藍染めの衣類を身につけていました。厩舎や馬場での虫対策に、自然の力を。"
  },
  {
    icon: "✨",
    title: "抗菌・消臭",
    description: "馬との暮らしに欠かせない衛生面。藍に含まれる成分には、抗菌作用があることが知られています。日常の使用をサポートします。そして、洗濯機で洗えます。気兼ねなく、毎日お使いください。"
  },
  {
    icon: "🌱",
    title: "使うほど味わい深く",
    description: "久留米絣は、使い込むほどに柔らかく、肌に馴染みます。10年、20年と愛用できる丈夫さ。革のように、美しく経年変化していきます。色あせも、味わいの一部。時間とともに、あなただけの一品に育っていきます。"
  }
]

export function Functions() {
  return (
    <section id="section-functions" className="py-16 md:py-24 bg-white scroll-mt-20">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-center text-indigo mb-12">
            馬のいる暮らしに寄り添う布
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 bg-kinari-light rounded-lg space-y-4 text-center"
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-serif font-semibold text-indigo">
                  {benefit.title}
                </h3>
                <p className="text-sm text-indigo-muted leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
