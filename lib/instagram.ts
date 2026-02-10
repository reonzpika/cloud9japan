/**
 * Normalized Instagram post shape used by the API route and Instagram section.
 */
export interface InstagramPost {
  id: string
  media_url: string
  thumbnail_url?: string
  permalink: string
  caption?: string
}
