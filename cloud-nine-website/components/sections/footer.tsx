export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-indigo text-kinari py-12 md:py-16">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-bold">Cloud Nine</h3>
            <p className="text-sm text-kinari-light leading-relaxed">
              馬を愛する人のための、手仕事ブランド
            </p>
          </div>
          
          {/* Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">リンク</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#" className="text-sm text-kinari-light hover:text-artisan-gold transition-colors">
                About Cloud Nine
              </a>
              <a href="#" className="text-sm text-kinari-light hover:text-artisan-gold transition-colors">
                About Kurume Kasuri
              </a>
              <a href="#" className="text-sm text-kinari-light hover:text-artisan-gold transition-colors">
                Shop
              </a>
              <a href="#" className="text-sm text-kinari-light hover:text-artisan-gold transition-colors">
                Care Instructions
              </a>
              <a href="#" className="text-sm text-kinari-light hover:text-artisan-gold transition-colors">
                Contact
              </a>
              <a href="#" className="text-sm text-kinari-light hover:text-artisan-gold transition-colors">
                Privacy Policy
              </a>
            </nav>
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
