# Cloud Nine Website TODO

## Design System & Foundation
- [x] Establish color palette (sky blue #87CEEB, navy #1A365D, soft grays)
- [x] Configure typography (serif for headings, sans-serif for body)
- [x] Set up global theme with Tailwind CSS 4 OKLCH colors
- [x] Configure Japanese fonts (Noto Serif JP, Noto Sans JP)

## Global Components
- [x] Create responsive header with navigation (Home, About Cloud Nine, About Kurume Kasuri, Contact)
- [x] Build footer with brand info, navigation links, and social media icons
- [x] Implement Horse Messe announcement banner with toggle visibility
- [x] Add smooth scroll behavior for anchor links

## Home Page (Long-scroll)
- [x] Hero section with sky gradient background and Japanese messaging
- [x] Dual CTAs: "Horse Messeで会いましょう" and "製品を見る"
- [x] Horse Messe 2025 event announcement section
- [x] Product grid with 6 Kurume Kasuri items (no pricing/cart)
- [x] Kurume Kasuri appeal teaser section (3 pillars: tactile, emotional, visual)
- [x] Cloud Nine brand snippet section
- [x] Instagram/social media section
- [x] Inline contact form

## About Cloud Nine Page
- [x] Brand story section with mission statement
- [x] Design inspiration section (sky blue and indigo explanation)
- [x] Core values section (4 values with descriptions)
- [x] Stockists/press/collaboration section
- [x] CTA to contact page

## About Kurume Kasuri Page
- [x] Introduction section with official website link
- [x] Tactile/functional appeal section
- [x] Emotional/status appeal section
- [x] Visual/aesthetic appeal section
- [x] FAQ section (8 questions)
- [x] External link to kurumekasuri.jp

## Contact Page
- [x] Contact form with name, email, inquiry type dropdown
- [x] Message textarea and Horse Messe attendance checkbox
- [x] Privacy consent checkbox
- [x] Wholesale inquiry information section
- [x] Contact information and social media links

## Care Instructions Page
- [x] Daily care section (brushing, air drying)
- [x] Washing instructions (hand wash, machine wash)
- [x] Drying and storage guidelines
- [x] Special notes about indigo dye color bleeding
- [x] CTA to contact form

## Backend & Database
- [x] Create contact form schema in database
- [x] Implement tRPC procedure for form submission
- [x] Add email notification for new inquiries
- [x] Store form submissions with timestamp and inquiry type

## SEO & Accessibility
- [x] Add Japanese meta tags for all pages
- [x] Configure Open Graph images (1200x630px)
- [x] Implement Organization structured data (JSON-LD)
- [ ] Implement LocalBusiness structured data for Horse Messe
- [x] Ensure WCAG AA color contrast (4.5:1)
- [x] Add alt text to all images
- [x] Implement keyboard navigation
- [x] Add semantic HTML structure

## Performance & Optimization
- [x] Implement lazy loading for images
- [x] Use WebP format for all images
- [ ] Add responsive image srcset
- [ ] Optimize Core Web Vitals (LCP < 2.5s, FID < 100ms, CLS < 0.1)
- [x] Configure font-display: swap for Google Fonts
- [ ] Minimize JavaScript bundle size

## Mobile Optimization
- [x] Ensure touch targets are minimum 44x44px
- [x] Test responsive layouts (mobile, tablet, desktop)
- [ ] Optimize mobile loading speed
- [ ] Disable parallax effects on mobile
- [x] Test form usability on mobile devices

## Testing
- [x] Write vitest tests for contact form submission
- [x] Test form validation
- [x] Test database insertion
- [x] Test error handling

## Final Polish
- [x] Add micro-interactions (hover effects, fade animations)
- [x] Test all navigation links
- [x] Verify all Japanese content is correct
- [x] Test Horse Messe banner toggle functionality
- [ ] Cross-browser testing
- [ ] Final accessibility audit


## E-commerce Transformation (COMPLETED)

### Product System
- [x] Create products database schema (14 products with details)
- [x] Add product categories (bags, accessories, textiles, special)
- [x] Implement price range filtering (under-5000, 5000-10000, premium)
- [x] Add made-to-order flag for custom products
- [x] Generate product images for all 14 products
- [x] Create product detail pages with image galleries
- [x] Add product size/dimensions display
- [x] Implement product badges (おすすめ, 人気, 受注制作)

### Shopping Cart
- [x] Create cart database schema
- [x] Build cart drawer (slide-in from right)
- [x] Implement add to cart functionality
- [x] Add quantity selector (+/- buttons)
- [x] Implement remove from cart
- [x] Calculate cart subtotal
- [x] Show cart item count badge in header
- [x] Add empty cart state
- [x] Implement cart persistence (session-based)

### Collection Pages
- [x] Create /shop route (all products)
- [x] Create /shop/under-5000 route
- [x] Create /shop/5000-10000 route
- [x] Create /shop/premium route
- [x] Add filter by category dropdown
- [x] Add sort functionality (recommended, price low-high, price high-low, newest)
- [x] Implement 3-column grid (desktop), 1-column (mobile)
- [x] Add product card hover effects

### Homepage Redesign
- [x] Update hero section with large product image and gradient
- [x] Add featured products section (horizontal scroll mobile)
- [x] Create "Shop by Price" tiles (3 price ranges)
- [x] Add best sellers section with badges
- [x] Update Kurume Kasuri teaser section
- [x] Add Instagram grid (6 images)
- [x] Maintain contact form section

### Navigation & Header
- [x] Add shop dropdown menu with 4 categories
- [x] Implement cart icon with item count badge
- [x] Make header sticky on scroll
- [x] Add mobile hamburger menu
- [x] Update navigation structure

### Checkout & Confirmation
- [x] Create /checkout placeholder page
- [x] Add Shopify integration comments
- [ ] Create /thank-you page with order confirmation
- [ ] Add order number display placeholder

### Design & Animations
- [x] Update color scheme (sky blue #87CEEB, indigo #1A365D)
- [x] Add Kurume Kasuri texture overlay (3-5% opacity)
- [x] Implement fade-in on scroll animations
- [x] Add product card hover scale effect (1.05x)
- [x] Create cart drawer slide-in animation
- [x] Add button hover effects
- [x] Implement frosted glass effect on cart drawer

### Mobile Optimization
- [x] Ensure all touch targets are 44x44px minimum
- [x] Make buttons full-width on mobile product pages
- [ ] Implement swipeable product image galleries
- [x] Add sticky "Add to Cart" bar on mobile
- [x] Test responsive layouts on 375px width
- [ ] Optimize mobile loading speed

### SEO & Accessibility
- [x] Update meta tags for e-commerce pages
- [x] Add OpenGraph images for products
- [ ] Implement product structured data
- [x] Add ARIA labels for cart and buttons
- [x] Ensure keyboard navigation for cart drawer
- [x] Add alt text for all product images

### Testing
- [x] Write vitest tests for add to cart
- [x] Test cart quantity updates
- [x] Test cart removal
- [x] Test product filtering
- [x] Test product sorting
- [x] Test mobile responsiveness

## Future Enhancements (Not Yet Implemented)
- [ ] Shopify payment integration
- [ ] Order management system
- [ ] User account system with order history
- [ ] Product reviews and ratings
- [ ] Wishlist functionality
- [ ] Product search functionality
- [ ] Advanced filtering (by category, material, size)
- [ ] Product image zoom and gallery
- [ ] Email notifications for orders
- [ ] Inventory management
- [ ] Discount codes and promotions
- [ ] Shipping calculator
- [ ] Multiple product images per item
- [ ] Thank you page after checkout


## Homepage & Navigation Updates (User Request)
- [x] Restore original homepage layout (long-scroll brand storytelling)
- [x] Change product grid CTA to "ショップを見る"
- [x] Add Featured Products Section after Kurume Kasuri Appeal section
- [x] Restore original navigation structure (remove dropdown)
- [x] Add "Shop" as simple navigation item
- [x] Keep Horse Messe event section
- [x] Keep inline contact form at bottom
- [x] Keep Instagram/social section


## Website Updates - Branding & UI/UX Improvements
- [x] Copy Cloud Nine logo files to public folder
- [x] Generate new hero image following 2026 design trends (layered composition)
- [x] Generate Kurume Kasuri close-up material photo
- [x] Update Horse Messe section with dates (2/21-2/23, 2026)
- [x] Update booth number to F6
- [x] Add Horse Messe logo to event section
- [x] Update header with Cloud Nine logo
- [x] Update Instagram handle to cloudnine1017
- [x] Add Kurume Kasuri logo to appropriate section
- [x] Make 6 product images clickable (link to product pages)
- [x] Map products: 久留米絣 ショルダー, 横長ショルダー（大）, ハンカチ, ふでばこ, キーホルダー, ミニショルダー
- [x] Change CTA from "ショップを見る" to "もっと見る"
- [x] Add Kurume Kasuri featured image to "なぜ、久留米絣なのか" section
- [x] Implement glassmorphism effects on CTAs
- [x] Add kinetic typography animations
- [x] Add glowing gradients to hero image
- [x] Update color palette to 2026 muted organic palette
- [x] Update typography system (Noto Serif JP + Noto Sans JP)
- [x] Implement microinteractions on hover states
