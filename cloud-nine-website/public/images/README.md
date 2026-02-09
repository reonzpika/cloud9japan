# Image Assets Guide

Place all product and brand images in this directory.

---

## Required Images

### High Priority

1. **hero-main.jpg** (1920x1080)
   - Yoko with Marshall and/or Lucas
   - Natural, candid shot
   - Used in: Hero section

2. **yoko-marshall.jpg** (1600x1067)
   - Yoko with Marshall
   - Used in: Yoko's Story section

3. **yoko-lucas.jpg** (1600x1067)
   - Yoko with Lucas
   - Used in: Yoko's Story section

4. **carrot-pouch.jpg** (1200x1200)
   - Carrot pouch with visible carrot strap
   - Multiple pattern variations if possible
   - Used in: Featured Carrot Pouch section

### Product Images (1200x1200 each)

5. **product-shoulder-bag.jpg** - 久留米絣 ショルダー
6. **product-wide-large.jpg** - 横長ショルダー（大）
7. **product-handkerchief.jpg** - ハンカチ
8. **product-carrot-pouch.jpg** - にんじんポーチ
9. **product-keychain.jpg** - キーホルダー
10. **product-mini-shoulder.jpg** - ミニショルダー

---

## Optional Images

### Kurume Kasuri Process
- **kasuri-weaving.jpg** - Artisan at 100-year-old loom
- **kasuri-fabric-closeup.jpg** - Fabric texture detail
- **kasuri-indigo-dye.jpg** - Natural indigo dyeing process

### Instagram Feed
- **instagram-1.jpg** through **instagram-6.jpg** (600x600)
- Behind-the-scenes, Marshall, Lucas, products

---

## Image Specifications

- **Format**: WebP (preferred) or JPEG
- **Quality**: 85% compression
- **Color Profile**: sRGB
- **Max File Size**: 500KB per image

---

## How to Add Images

1. Place images in this directory (`/public/images/`)
2. Update component files to replace placeholders:

```tsx
// Replace placeholder div with:
import Image from 'next/image'

<Image
  src="/images/hero-main.jpg"
  alt="Yoko with Marshall"
  width={1920}
  height={1080}
  priority
  className="object-cover w-full h-full"
/>
```

3. Test in development: `npm run dev`

---

## Current Status

All images are currently **PLACEHOLDERS**. Replace with actual photos before launch.
