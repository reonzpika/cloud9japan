import Link from 'next/link'
import Image from 'next/image'

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-indigo shadow-md">
      <div className="container">
        <div className="flex items-center justify-between h-12 md:h-14">
          <Link 
            href="/" 
            className="flex items-center gap-2 text-2xl md:text-3xl font-serif font-bold text-kinari hover:text-artisan-gold transition-colors"
          >
            <Image
              src="/logos/Logo_illustration.png"
              alt="Cloud Nine"
              width={36}
              height={36}
              className="h-8 w-auto md:h-9"
            />
            <Image
              src="/logos/Logo_text_light.png"
              alt="Cloud Nine"
              width={120}
              height={36}
              className="h-8 w-auto md:h-9"
            />
          </Link>
        </div>
      </div>
    </header>
  )
}
