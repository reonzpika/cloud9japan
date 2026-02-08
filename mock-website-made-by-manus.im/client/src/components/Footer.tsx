import { Link } from "wouter";
import { Instagram, Twitter, Facebook } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/30">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-serif font-bold">Cloud Nine</h3>
            <p className="text-sm text-muted-foreground">
              久留米絣で作る、馬のある暮らしの手仕事
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">ナビゲーション</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    ホーム
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/about-cloudnine">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Cloud Nineについて
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/about-kurumekasuri">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    久留米絣について
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    お問い合わせ
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/care">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    お手入れ方法
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/privacy">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    プライバシーポリシー
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">フォローする</h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/cloudnine1017"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 flex items-center justify-center rounded-full bg-accent hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              @cloudnine1017
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {currentYear} Cloud Nine. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
