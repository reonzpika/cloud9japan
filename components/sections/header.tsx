import Link from 'next/link'
import Image from 'next/image'

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-indigo shadow-md overflow-visible">
      <div className="container">
        <div className="flex items-center justify-between h-10">
          <Link 
            href="/" 
            className="flex items-center gap-2 text-2xl md:text-3xl font-serif font-bold text-kinari hover:text-artisan-gold transition-colors overflow-visible"
          >
            <Image
              src="/logos/Logo_illustration.png"
              alt="Cloud Nine"
              width={84}
              height={84}
              className="h-[78px] w-auto md:h-[86px]"
            />
            <Image
              src="/logos/Logo_text_light.png"
              alt="Cloud Nine"
              width={96}
              height={32}
              className="h-8 w-auto"
            />
          </Link>
        </div>
      </div>
    </header>
  )
}
