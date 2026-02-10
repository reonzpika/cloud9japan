import { NextResponse } from 'next/server'
import { unstable_cache } from 'next/cache'
import { InstagramScraper, type InstagramPost as ScraperPost } from '@aduptive/instagram-scraper'
import type { InstagramPost } from '@/lib/instagram'

const USERNAME = 'cloudnine1017'
const POST_LIMIT = 6
const CACHE_REVALIDATE_SECONDS = 300 // 5 min so failures retry without hammering Instagram

function normalizePost(raw: ScraperPost): InstagramPost {
  const permalink = `https://www.instagram.com/p/${raw.shortcode}/`
  const media_url =
    raw.display_url ||
    raw.thumbnail_url ||
    raw.video_url ||
    raw.media_items?.find((m) => m.type === 'image')?.url ||
    raw.media_items?.[0]?.url ||
    ''
  return {
    id: raw.id,
    media_url,
    thumbnail_url: raw.thumbnail_url,
    permalink,
    caption: raw.caption ?? undefined,
  }
}

async function fetchInstagramPosts(): Promise<InstagramPost[]> {
  const scraper = new InstagramScraper({
    timeout: 35000,
    minDelay: 600,
    maxDelay: 1200,
  })
  const result = await scraper.getPosts(USERNAME, POST_LIMIT)
  if (!result.success || !result.posts?.length) {
    return []
  }
  return result.posts.slice(0, POST_LIMIT).map(normalizePost)
}

// Cache 1 hour on success; same key caches empty for 5 min to avoid hammering Instagram on repeated failures
const getCachedPosts = unstable_cache(
  fetchInstagramPosts,
  ['instagram-posts'],
  { revalidate: CACHE_REVALIDATE_SECONDS }
)

export const dynamic = 'force-dynamic'
export const maxDuration = 60

export async function GET() {
  try {
    const posts = await getCachedPosts()
    return NextResponse.json({ posts })
  } catch (error) {
    console.error('[api/instagram]', error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to fetch posts', posts: [] },
      { status: 500 }
    )
  }
}
