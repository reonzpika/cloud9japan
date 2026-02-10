'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import type { InstagramPost } from '@/lib/instagram'

const INSTAGRAM_PROFILE_URL = 'https://www.instagram.com/cloudnine1017'

const instagramImages = [
  '/images/samples/S__65019911_0.jpg',
  '/images/samples/S__65118217.jpg',
  '/images/samples/S__65175587.jpg',
  '/images/samples/S__65175589.jpg',
  '/images/samples/S__65249307.jpg',
  '/images/samples/S__64815237_0.jpg'
]

const hashtags = [
  "#ホースメッセ2026",
  "#馬好きさんと繋がりたい",
  "#久留米絣",
  "#乗馬ファッション"
]

export function Instagram() {
  const [posts, setPosts] = useState<InstagramPost[] | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch('/api/instagram')
      .then((res) => {
        const contentType = res.headers.get('content-type')
        if (!contentType?.includes('application/json')) {
          throw new Error('Invalid response')
        }
        return res.json()
      })
      .then((data: { posts?: InstagramPost[]; error?: string }) => {
        const list = Array.isArray(data.posts) ? data.posts : []
        if (list.length > 0) {
          setPosts(list)
        } else {
          setPosts([])
        }
        setError(list.length === 0)
      })
      .catch(() => {
        setPosts([])
        setError(true)
      })
      .finally(() => setLoading(false))
  }, [])

  const showLivePosts = !loading && posts && posts.length > 0
  const showFallback = !loading && (!posts || posts.length === 0)

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
          </div>

          {/* Instagram Post Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 py-8">
            {showLivePosts &&
              posts!.map((post) => (
                <a
                  key={post.id}
                  href={post.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="aspect-square relative block bg-white rounded-lg shadow-md overflow-hidden"
                  aria-label="View Instagram post"
                >
                  <Image
                    src={post.media_url || post.thumbnail_url || ''}
                    alt={post.caption || 'Instagram post'}
                    fill
                    className="object-cover rounded-lg"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                </a>
              ))}
            {loading &&
              instagramImages.map((src, i) => (
                <div
                  key={i}
                  className="aspect-square relative bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <Image
                    src={src}
                    alt=""
                    fill
                    className="object-cover rounded-lg opacity-70"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                  {i === 0 && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-lg">
                      <span className="text-white text-sm">Loading…</span>
                    </div>
                  )}
                </div>
              ))}
            {showFallback &&
              instagramImages.map((src, i) => (
                <div
                  key={i}
                  className="aspect-square relative bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <Image
                    src={src}
                    alt={`Instagram post ${i + 1}`}
                    fill
                    className="object-cover rounded-lg"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                </div>
              ))}
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
              href={INSTAGRAM_PROFILE_URL}
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
