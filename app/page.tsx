import { Header } from '@/components/sections/header'
import { HOME_TOC_SECTIONS } from '@/lib/home-toc-sections'
import { AlertBar } from '@/components/sections/alert-bar'
import { HomePageLayout } from '@/components/sections/home-page-layout'
import { Hero } from '@/components/sections/hero'
import { YokoStory } from '@/components/sections/yoko-story'
import { CarrotPouch } from '@/components/sections/carrot-pouch'
import { Products } from '@/components/sections/products'
import { KurumeKasuri } from '@/components/sections/kurume-kasuri'
import { Functions } from '@/components/sections/functions'
import { TheCollection } from '@/components/sections/the-collection'
import { HorseMesse } from '@/components/sections/horse-messe'
import { EmailCapture } from '@/components/sections/email-capture'
import { Instagram } from '@/components/sections/instagram'
import { Footer } from '@/components/sections/footer'

export default function Home() {
  return (
    <main>
      <Header tocSections={HOME_TOC_SECTIONS} />
      <AlertBar />
      <Hero />
      <HomePageLayout>
        <YokoStory />
        <CarrotPouch />
        <Products />
        <KurumeKasuri />
        <Functions />
        <TheCollection />
        <HorseMesse />
        <EmailCapture />
        <Instagram />
      </HomePageLayout>
      <Footer />
    </main>
  )
}
