'use client'

import { motion } from 'framer-motion'

const products = [
  {
    id: 1,
    nameJP: '久留米絣 ショルダーバッグ',
    nameEN: 'Kasuri Shoulder Bag',
    price: '¥28,000',
    description: '厩舎から街へ。毎日連れていきたいバッグ。',
    status: 'available' as const,
    image: '/images/products/product-01.jpg',
  },
  {
    id: 2,
    nameJP: '馬刺繍 スマホポーチ',
    nameEN: 'Horse Embroidery Phone Pouch',
    price: '¥12,000',
    description: '金糸で描いた、走る馬。',
    status: 'sold' as const,
    image: '/images/products/product-02.jpg',
  },
  {
    id: 3,
    nameJP: '久留米絣 馬のぬいぐるみ',
    nameEN: 'Kasuri Horse Toy',
    price: '¥6,500',
    description: '世界に一つの、あなただけの馬。',
    status: 'available' as const,
    image: '/images/products/product-03.jpg',
  },
  {
    id: 4,
    nameJP: '久留米絣 巾着ポーチ',
    nameEN: 'Kasuri Drawstring Pouch',
    price: '¥4,500',
    description: '馬チャームとにんじん付き。贈り物にも。',
    status: 'available' as const,
    image: '/images/products/product-04.jpg',
  },
  {
    id: 5,
    nameJP: 'にんじんポーチ',
    nameEN: 'Carrot Zipper Pouch',
    price: '¥5,500',
    description: '馬の刺繍とにんじんストラップ。毎日の相棒に。',
    status: 'available' as const,
    image: '/images/products/product-05.jpg',
  },
  {
    id: 6,
    nameJP: '久留米絣 クッションカバー',
    nameEN: 'Kasuri Cushion Cover',
    price: '¥14,000',
    description: '馬のいる部屋をつくる。',
    status: 'available' as const,
    image: '/images/products/product-06.jpg',
  },
  {
    id: 7,
    nameJP: '久留米絣 大判ストール',
    nameEN: 'Kasuri Large Stole',
    price: '¥18,000',
    description: '馬場でも、街でも。藍の温もりを羽織る。',
    status: 'available' as const,
    image: '/images/products/product-07.jpg',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

function StatusBadge({ status }: { status: 'available' | 'sold' | 'reserve' }) {
  if (status === 'sold') {
    return (
      <span className="absolute top-3 left-3 rounded-full bg-indigo-muted/80 px-3 py-1 text-xs font-medium text-kinari">
        完売 / SOLD OUT
      </span>
    )
  }
  if (status === 'reserve') {
    return (
      <span className="absolute top-3 left-3 rounded-full bg-indigo px-3 py-1 text-xs font-medium text-kinari">
        DMで予約
      </span>
    )
  }
  return (
    <span className="absolute top-3 left-3 rounded-full bg-artisan-gold px-3 py-1 text-xs font-medium text-white">
      ホースメッセで販売
    </span>
  )
}

export function TheCollection() {
  return (
    <section
      id="section-the-collection"
      className="w-full bg-indigo-light py-16 md:py-24"
    >
      <div className="mb-12 md:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="font-serif text-3xl font-bold text-indigo md:text-5xl">
            作品集
          </h2>
          <p className="mt-2 font-sans text-base font-medium uppercase tracking-widest text-indigo-muted">
            The Collection
          </p>
          <p className="mx-auto mt-4 max-w-xl font-sans text-center text-sm text-indigo-muted md:text-base">
            すべて一点もの。同じものは二つとありません。
            <br />
            Every piece is one of a kind. No two are ever alike.
          </p>
        </motion.div>
      </div>

      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {products.map((product) => (
            <motion.article
              key={product.id}
              variants={cardVariants}
              className="overflow-hidden rounded-lg bg-kinari"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <div className="flex h-full w-full items-center justify-center bg-indigo-light">
                  <span className="font-sans text-sm text-indigo-muted">
                    画像準備中
                  </span>
                </div>
                <StatusBadge status={product.status} />
              </div>
              <div className="p-4">
                <h3 className="font-serif text-base font-semibold text-indigo">
                  {product.nameJP}
                </h3>
                <p className="mt-0.5 font-sans text-xs tracking-wide text-indigo-muted">
                  {product.nameEN}
                </p>
                <p className="mt-2 font-sans text-xs leading-relaxed text-indigo-muted">
                  {product.description}
                </p>
                <p className="mt-3 font-sans text-sm text-indigo-muted">
                  {product.price}
                </p>
                {product.status !== 'sold' ? (
                  <a
                    href="https://instagram.com/cloudnine1017"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block font-sans text-xs text-artisan-gold transition-colors hover:text-indigo"
                  >
                    Instagram DMで問い合わせる →
                  </a>
                ) : (
                  <p className="mt-3 font-sans text-xs italic text-indigo-muted/60">
                    この作品は新しい家族のもとへ。
                  </p>
                )}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>

      <div className="mt-12 text-center">
        <p className="font-serif text-base text-indigo">
          ホースメッセ ブースF6で、実際に手に取ってみてください。
        </p>
        <p className="mt-1 font-sans text-xs text-indigo-muted">
          Come and hold them at Horse Messe, Booth F6.
        </p>
      </div>
    </section>
  )
}
