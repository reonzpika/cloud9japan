import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-noto-sans-jp',
  display: 'swap',
});

const notoSerifJP = Noto_Serif_JP({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-noto-serif-jp',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Cloud Nine | 久留米絣で作る、馬のある暮らしの手仕事',
  description: '200年以上の伝統を持つ久留米絣を使い、馬を愛する人々へ手仕事の品々を届けるCloud Nine。',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} ${notoSerifJP.variable}`}>
      <body className="font-sans bg-kinari text-indigo antialiased">
        {children}
      </body>
    </html>
  );
}
