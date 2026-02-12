import Image from 'next/image'

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-indigo text-kinari py-12 md:py-16">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Image
              src="/logos/Logo_text_light.png"
              alt="Cloud Nine"
              width={240}
              height={80}
              className="h-8 w-auto"
            />
            <p className="text-sm text-kinari-light leading-relaxed">
              馬とカメラを愛する友人二人の手仕事ブランド
            </p>
          </div>
          
          {/* SNS */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">SNS</h4>
            <a 
              href="https://instagram.com/cloudnine1017"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-kinari-light hover:text-artisan-gold transition-colors"
            >
              <span>Instagram:</span>
              <span>@cloudnine1017</span>
            </a>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-kinari-light/20 text-center">
          <p className="text-sm text-kinari-light">
            © {currentYear} Cloud Nine. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
