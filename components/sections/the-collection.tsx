'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

type Product = {
  id: number
  nameJP: string
  nameEN: string
  price: string
  description: string
  status: 'available' | 'sold' | 'reserve'
  images: string[]
}

const products: Product[] = [
  {
    id: 1,
    nameJP: '馬刺繍 スマホポーチ',
    nameEN: 'Phone Case Bag',
    price: '¥12,000',
    description: '金糸で描いた、走る馬。',
    status: 'sold' as const,
    images: [
      '/images/homepage/collections/phonecase-bag-front.png',
      '/images/homepage/collections/phonecase-bag-back.png',
    ],
  },
  {
    id: 2,
    nameJP: '久留米絣 ショルダーバッグ',
    nameEN: 'Kasuri Shoulder Bag',
    price: '¥28,000',
    description: '厩舎から街へ。毎日連れていきたいバッグ。',
    status: 'available' as const,
    images: [
      '/images/homepage/collections/shoulder-bag.png',
      '/images/homepage/collections/shoulder-bag-lifestyle.png',
    ],
  },
  {
    id: 3,
    nameJP: '久留米絣 ペンケース',
    nameEN: 'Pencil Case',
    price: '¥3,500',
    description: '藍の温もりを、毎日の筆箱に。',
    status: 'available' as const,
    images: ['/images/homepage/collections/pencil-case.png'],
  },
  {
    id: 4,
    nameJP: '久留米絣 馬のぬいぐるみ',
    nameEN: 'Stuffed Horses',
    price: '¥6,500',
    description: '世界に一つの、あなただけの馬。',
    status: 'available' as const,
    images: ['/images/homepage/collections/stuffed-horses.png'],
  },
  {
    id: 5,
    nameJP: '久留米絣 大巾着',
    nameEN: 'Large Drawstring Pouch',
    price: '¥4,500',
    description: '馬チャームとにんじん付き。贈り物にも。',
    status: 'available' as const,
    images: ['/images/homepage/collections/large-pouch.png'],
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

const SLIDESHOW_INTERVAL_MS = 4000

function ProductCardImage({
  images,
  alt,
  productId,
}: {
  images: string[]
  alt: string
  productId: number
}) {
  const [index, setIndex] = useState(0)
  const isSlideshow = images.length > 1

  useEffect(() => {
    if (!isSlideshow) return
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % images.length)
    }, SLIDESHOW_INTERVAL_MS)
    return () => clearInterval(t)
  }, [isSlideshow, images.length])

  return (
    <div className="relative h-full w-full">
      {images.map((src, i) => (
        <div
          key={`${productId}-${src}`}
          className="absolute inset-0 transition-opacity duration-500 ease-in-out"
          style={{ opacity: i === index ? 1 : 0 }}
          aria-hidden={i !== index}
        >
          <Image
            src={src}
            alt={i === index ? alt : ''}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          />
        </div>
      ))}
      {isSlideshow && (
        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              className={`h-1.5 w-1.5 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-artisan-gold focus:ring-offset-2 focus:ring-offset-indigo-light ${i === index ? 'bg-artisan-gold' : 'bg-white/50'}`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

function StatusBadge({ status }: { status: 'available' | 'sold' | 'reserve' }) {
  if (status === 'sold') {
    return (
      <span className="absolute top-3 left-3 rounded-full bg-indigo-muted/80 px-3 py-1 text-xs font-medium text-kinari">
        完売
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
          animate="visible"
        >
          {products.map((product) => (
            <motion.article
              key={product.id}
              variants={cardVariants}
              className="overflow-hidden rounded-lg bg-kinari"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-indigo-light">
                <ProductCardImage
                  images={product.images}
                  alt={product.nameJP}
                  productId={product.id}
                />
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
          <motion.article
            variants={cardVariants}
            className="overflow-hidden rounded-lg bg-kinari"
          >
            <div className="relative aspect-[3/4] overflow-hidden bg-indigo-light">
              <Image
                src="/images/homepage/hero-image.png"
                alt="Cloud Nine – クラウドナイン"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              />
            </div>
            <div className="p-4">
              <h3 className="font-serif text-base font-semibold text-indigo">
                ほかにもさまざまな作品があります
              </h3>
              <p className="mt-0.5 font-sans text-xs tracking-wide text-indigo-muted">
                We have many more different products
              </p>
              <p className="mt-2 font-sans text-xs leading-relaxed text-indigo-muted">
                ハンカチ、キーホルダー、ミニショルダーなど。ホースメッセでお手に取ってご覧ください。
              </p>
              <p className="mt-2 font-sans text-xs leading-relaxed text-indigo-muted">
                Handkerchiefs, keyholders, mini shoulder bags and more. Come see them at Horse Messe.
              </p>
              <a
                href="https://instagram.com/cloudnine1017"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block font-sans text-xs text-artisan-gold transition-colors hover:text-indigo"
              >
                Instagramで続きを見る →
              </a>
            </div>
          </motion.article>
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
