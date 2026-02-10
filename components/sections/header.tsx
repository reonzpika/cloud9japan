import Link from 'next/link'

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-indigo shadow-md">
      <div className="container">
        <div className="flex items-center justify-between h-12 md:h-14">
          <Link 
            href="/" 
            className="text-2xl md:text-3xl font-serif font-bold text-kinari hover:text-artisan-gold transition-colors"
          >
            Cloud Nine
          </Link>
        </div>
      </div>
    </header>
  )
}
