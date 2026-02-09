'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'

const featureCards = [
  {
    title: "職人の手織り久留米絣",
    description: "わずか2人の職人が手織りした、本物の久留米絣です。織りの過程で糸が自然に動くため、同じ柄は物理的に作れません。"
  },
  {
    title: "一つひとつ、Yokoの手作り",
    description: "すべての製品を、Yokoがミシンで丁寧に縫い上げています。デザインから制作まで、一人で。だから、想いが伝わります。"
  },
  {
    title: "日本製の確かな品質",
    description: "細部まで丁寧に仕上げた、長く使える製品。使い込むほどに柔らかく、味わい深くなります。"
  }
]

const products = [
  {
    id: 1,
    name: "久留米絣 ショルダー",
    description: "手織り職人が織った藍染めの久留米絣に、母子の馬を刺繍。Yokoが一つひとつミシンで丁寧に縫い上げた、毎日使えるショルダーバッグです。使い込むほどに柔らかく、あなただけの風合いに育っていきます。",
    price: "¥[価格]",
    popular: false
  },
  {
    id: 2,
    name: "横長ショルダー（大）",
    description: "たっぷり入る大きめサイズ。厩舎への外出や、週末のお出かけに。久留米絣の美しい藍の深みが、どんなスタイルにも馴染みます。Yokoの手作りです。",
    price: "¥[価格]",
    popular: false
  },
  {
    id: 3,
    name: "ハンカチ",
    description: "毎日持ち歩きたい、久留米絣のハンカチ。様々な柄からお選びいただけます。使うたびに柔らかくなり、藍の色が美しく変化していきます。馬好きへのちょっとした贈り物にも最適です。",
    price: "¥[価格]",
    popular: true
  },
  {
    id: 4,
    name: "にんじんポーチ",
    description: "馬好きなら思わず笑顔になる、にんじんストラップ付きポーチ。久留米絣の様々な柄から、お好きなデザインをお選びいただけます。Yokoが一つひとつ手作りしています。",
    price: "¥[価格]",
    popular: true
  },
  {
    id: 5,
    name: "キーホルダー",
    description: "いつも一緒に。鍵やバッグに付けて、久留米絣の手触りを身近に感じてください。小さくても、職人の手仕事とYokoの丁寧な仕上げがしっかりと息づいています。",
    price: "¥[価格]",
    popular: false
  },
  {
    id: 6,
    name: "ミニショルダー",
    description: "必要最低限のものだけを入れて、身軽にお出かけ。ちょっとした外出や、厩舎での作業にちょうどいいサイズです。Yokoが一つひとつ心を込めて作っています。",
    price: "¥[価格]",
    popular: false
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
              バッグから小物まで、すべてYokoの手作り・一点もの
            </p>
          </div>
          
          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {featureCards.map((card, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 bg-indigo-light rounded-lg space-y-3"
              >
                <h3 className="text-xl font-serif font-semibold text-indigo text-center">
                  {card.title}
                </h3>
                <p className="text-sm text-indigo-muted leading-relaxed text-center">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>
          
          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                {/* Image */}
                <div className="aspect-square bg-kinari-light overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-indigo-muted p-8 text-center text-sm transition-transform duration-500 group-hover:scale-105">
                    [{product.name} Image Placeholder]
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 space-y-3 bg-white">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-serif font-semibold text-indigo">
                      {product.name}
                    </h3>
                    {product.popular && (
                      <Badge variant="popular" className="text-xs px-2 py-1">
                        人気
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-indigo-muted leading-relaxed">
                    {product.description}
                  </p>
                  <p className="text-2xl font-bold text-indigo">{product.price}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
