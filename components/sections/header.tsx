import Link from 'next/link'
import Image from 'next/image'

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-indigo shadow-md">
      <div className="container">
        <div className="flex items-center justify-between h-14 md:h-16">
          <Link 
            href="/" 
            className="flex items-center gap-2 text-2xl md:text-3xl font-serif font-bold text-kinari hover:text-artisan-gold transition-colors"
          >
            <Image
              src="/logos/Logo_illustration.png"
              alt="Cloud Nine"
              width={43}
              height={43}
              className="h-10 w-auto md:h-11"
            />
            <Image
              src="/logos/Logo_text_light.png"
              alt="Cloud Nine"
              width={144}
              height={43}
              className="h-10 w-auto md:h-11"
            />
          </Link>
        </div>
      </div>
    </header>
  )
}
