import { Header } from '@/components/sections/header'
import { AlertBar } from '@/components/sections/alert-bar'
import { Hero } from '@/components/sections/hero'
import { YokoStory } from '@/components/sections/yoko-story'
import { CarrotPouch } from '@/components/sections/carrot-pouch'
import { Products } from '@/components/sections/products'
import { KurumeKasuri } from '@/components/sections/kurume-kasuri'
import { Functions } from '@/components/sections/functions'
import { HorseMesse } from '@/components/sections/horse-messe'
import { Instagram } from '@/components/sections/instagram'
import { Footer } from '@/components/sections/footer'

export default function Home() {
  return (
    <main>
      <Header />
      <AlertBar />
      <Hero />
      <YokoStory />
      <CarrotPouch />
      <Products />
      <KurumeKasuri />
      <Functions />
      <HorseMesse />
      <Instagram />
      <Footer />
    </main>
  )
}
