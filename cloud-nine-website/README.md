# Cloud Nine Website - Homepage

**Japanese Kurume Kasuri × Equestrian Lifestyle Brand**

A Next.js 16 website showcasing handmade bags and accessories crafted from Kurume Kasuri (220-year-old Japanese textile tradition) for Japanese female horse enthusiasts.

---

## 🎯 Project Overview

- **Launch Event**: Horse Messe 2026 (February 21-23) at Booth F6
- **Target**: Japanese horse owners/riders (70% female, 30s-40s)
- **Stage**: Pre-commerce (focus on brand storytelling, event attendance, Instagram growth)
- **Tech Stack**: Next.js 16, TypeScript, Tailwind CSS v4, Framer Motion

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
cloud-nine-website/
├── app/
│   ├── layout.tsx          # Root layout with Japanese fonts & metadata
│   ├── page.tsx            # Homepage (imports all sections)
│   ├── globals.css         # Tailwind v4 config + custom styles
│   └── favicon.ico
│
├── components/
│   ├── ui/
│   │   ├── button.tsx      # Button component (primary, secondary, outline)
│   │   └── badge.tsx       # Badge component (default, popular, heritage)
│   │
│   └── sections/
│       ├── alert-bar.tsx      # Sticky Horse Messe announcement
│       ├── hero.tsx           # Main hero section
│       ├── yoko-story.tsx     # Founder story (40-year journey)
│       ├── carrot-pouch.tsx   # Featured product
│       ├── products.tsx       # Product grid (6 items)
│       ├── kurume-kasuri.tsx  # Heritage textile story
│       ├── functions.tsx      # Functional benefits
│       ├── horse-messe.tsx    # Event details
│       ├── instagram.tsx      # Social media section
│       ├── newsletter.tsx     # Email signup (UI only)
│       └── footer.tsx         # Footer with links
│
├── lib/
│   └── utils.ts            # Utility functions (cn helper)
│
├── public/
│   └── images/             # Placeholder for product images
│
└── package.json
```

---

## 🎨 Design System

### Color Palette (Tailwind v4)

| Color | Value | Usage |
|-------|-------|-------|
| **kinari** | #F7EFE3 | Background (cream) |
| **kinari-light** | #FAF6F0 | Light backgrounds |
| **indigo** | #2E4057 | Primary text, headings |
| **indigo-dark** | #1B2838 | Dark accents |
| **indigo-muted** | #5A6B7A | Secondary text |
| **artisan-gold** | #C9A96E | Primary CTA |
| **artisan-gold-light** | #D4B896 | Light accents |
| **terracotta** | #C07850 | Alert bar, accents |
| **sage** | #7A8B6F | Optional accents |

### Typography

- **Sans Serif**: Noto Sans JP (300, 400, 500, 600) - Body text
- **Serif**: Noto Serif JP (400, 600, 700) - Headings

### Responsive Breakpoints

- **Mobile**: < 640px (default)
- **Tablet**: 640px - 768px (sm:)
- **Desktop**: 768px - 1024px (md:)
- **Large Desktop**: 1024px+ (lg:)

---

## 📄 Homepage Sections

### 1. Alert Bar (Sticky)
- **Content**: Horse Messe 2026 announcement (Feb 21-23, Booth F6)
- **Color**: Terracotta background, white text
- **Links to**: Horse Messe section

### 2. Hero
- **Heading**: "馬を愛するあなたへ。" (For you, who loves horses)
- **Key Message**: "No two alike, just like your horse"
- **CTAs**: 
  - Primary: Horse Messe (Booth F6)
  - Secondary: Instagram (@cloudnine1017)
- **Layout**: 50/50 split (image left, text right on desktop)

### 3. Yoko's Story
- **Content**: 
  - 8歳の出会い (First meeting at age 8)
  - 40年後の再会 (40 years later reunion)
  - **Marshall**: Kikuka-sho racer, injury retirement, emotional support during child-raising
  - **Lucas**: Rehabilitation story (bit, kick issues), March competition
- **Purpose**: Establish authenticity (real equestrian, not designer)

### 4. Carrot Pouch (Featured Product)
- **Purpose**: Showcase most popular item
- **Content**: Playful design, carrot strap, unique patterns
- **CTA**: Instagram to see more designs

### 5. Products
- **Feature Cards** (3):
  1. 職人の手織り久留米絣 (Artisan hand-woven)
  2. 一つひとつ、Yokoの手作り (Handmade by Yoko)
  3. 日本製の確かな品質 (Japanese quality)
- **Product Grid** (6 items):
  1. 久留米絣 ショルダー
  2. 横長ショルダー（大）
  3. ハンカチ ★人気
  4. にんじんポーチ ★人気
  5. キーホルダー
  6. ミニショルダー

### 6. Kurume Kasuri Story
- **Content**:
  - 1957 Important Intangible Cultural Property
  - Only 2 hand-weaving artisans remain
  - 30+ steps, 2-3 months per piece
  - 100-year-old looms
  - Physical impossibility of identical patterns

### 7. Functions
- **3 Benefits**:
  1. 🦟 防虫効果 (Insect-repellent, historical use)
  2. ✨ 抗菌・消臭 (Antibacterial/deodorizing)
  3. 🌱 使うほど味わい深く (Better with age)

### 8. Horse Messe
- **Event**: 第7回ホースメッセTOKYO2026
- **Dates**: Feb 21-23, 2026
- **Location**: JRA馬事公苑 (Tokyo 2020 Olympics venue)
- **Booth**: F6 (prominent display)
- **Admission**: Free

### 9. Instagram
- **Handle**: @cloudnine1017
- **Hashtags**: #ホースメッセ2026 #馬好きさんと繋がりたい #久留米絣 #乗馬ファッション
- **CTA**: Follow button

### 10. Newsletter
- **Purpose**: Email capture for shop launch
- **Status**: UI only (non-functional, placeholder)

### 11. Footer
- **Content**: Company info, links, Instagram, copyright

---

## 🖼️ Image Requirements

### Priority Images Needed:

1. **Hero Image**: Yoko with Marshall and/or Lucas (natural, candid shot)
2. **Yoko + Marshall Photo**: For Yoko's Story section
3. **Yoko + Lucas Photo**: For Yoko's Story section
4. **Carrot Pouch**: Multiple pattern variations
5. **Product Photos** (6):
   - 久留米絣 ショルダー
   - 横長ショルダー（大）
   - ハンカチ
   - にんじんポーチ
   - キーホルダー
   - ミニショルダー

### Optional Images:

- Kurume Kasuri fabric close-ups
- Weaving process photos (artisan at work, 100-year-old loom)
- Instagram feed images

### Image Specifications:

| Type | Aspect Ratio | Min Width | Format |
|------|--------------|-----------|--------|
| Hero | 16:9 | 1920px | WebP/JPEG |
| Product | 1:1 | 1200px | WebP/JPEG |
| Lifestyle | 3:2 | 1600px | WebP/JPEG |

**Place images in**: `/public/images/`

---

## ✅ Success Criteria

### Completed ✓

- [x] All 8 sections render correctly
- [x] Colors match Design.md exactly (Tailwind tokens)
- [x] Typography follows Design.md scale
- [x] Mobile-first responsive design (375px, 768px, 1280px)
- [x] Smooth scroll to Horse Messe section
- [x] All CTAs link correctly (Instagram, Horse Messe)
- [x] No TypeScript build errors
- [x] Framer Motion scroll animations
- [x] Japanese content from provided materials
- [x] Enhanced Marshall & Lucas story
- [x] Git commits pushed to branch

### Pending

- [ ] Replace placeholder images with actual photos
- [ ] Add actual product prices (replace ¥[価格])
- [ ] Implement functional newsletter form (backend)
- [ ] Test on real mobile devices
- [ ] Accessibility audit (WCAG AA)
- [ ] Performance optimization (Lighthouse)

---

## 🔧 Technical Notes

### Tailwind CSS v4 Configuration

Tailwind v4 uses CSS-based configuration instead of `tailwind.config.js`:

- Configuration is in `app/globals.css` using `@theme inline`
- Custom colors defined as CSS variables
- Font families reference Next.js font variables

### Next.js 16 Features

- **Turbopack**: Enabled by default in dev mode
- **App Router**: Uses `app/` directory structure
- **React 19**: Latest React features
- **Automatic Static Optimization**: Static pages pre-rendered

### Framer Motion Animations

- Scroll-triggered animations with `whileInView`
- Viewport trigger with margin offset (-100px)
- Staggered animations with delay
- Duration: 0.5s (consistent throughout)

---

## 🚫 What's NOT Included

Per project requirements:

- ❌ E-commerce functionality (no cart, checkout, payment)
- ❌ Backend/database (static site only)
- ❌ "Shop Online" buttons (event + Instagram focus)
- ❌ Navigation menu (single-page site)
- ❌ Functional newsletter form (UI only)
- ❌ Product detail pages (homepage only)

---

## 📝 Content Updates

### To Update Prices:

1. Open `/components/sections/products.tsx`
2. Replace `¥[価格]` with actual prices (e.g., `¥5,000`)
3. Also update in `/components/sections/carrot-pouch.tsx`

### To Update Event Details:

1. Open `/components/sections/horse-messe.tsx`
2. Update dates, times, booth number as needed

### To Add Real Images:

1. Place images in `/public/images/`
2. Update placeholder `<div>` elements with Next.js `<Image>` components:

```tsx
import Image from 'next/image'

<Image
  src="/images/hero.jpg"
  alt="Description"
  width={1920}
  height={1080}
  priority
  className="object-cover"
/>
```

---

## 🌐 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Build for Production

```bash
npm run build
npm start
```

Static export will be in `.next/` directory.

---

## 📊 Performance Targets

- **Lighthouse Performance**: 90+
- **Lighthouse Accessibility**: 90+
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3s

---

## 🤝 Contributing

This is a production website for Cloud Nine brand. For updates:

1. Create feature branch from `cursor/cloud-nine-website-homepage-a1b9`
2. Make changes
3. Test build: `npm run build`
4. Commit with descriptive message
5. Push and create PR

---

## 📞 Support

For questions about:
- **Content**: Contact Yoko (Cloud Nine founder)
- **Technical**: Check this README or Next.js 16 documentation
- **Design**: Refer to `/uploads/Design.md`

---

## 📚 Key Documents

Located in `/workspace/uploads/`:
- `Design.md` - Complete design system specifications
- `cloud-nine-homepage-content-full-japanese.md` - All Japanese copy
- `cloud-nine-homepage-structure-final.md` - Content structure and strategy
- `Cloud_Nine__Strategic_Research_for_a_Kurume_Kasuri_Equestrian_Brand_Launch.md` - Strategic context

---

**Built with Next.js 16 + Tailwind CSS v4 + TypeScript + Framer Motion**

© 2026 Cloud Nine. All rights reserved.
