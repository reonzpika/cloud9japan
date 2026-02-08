import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Hand, Heart, Eye, Instagram, MapPin, Clock } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import SEO from "@/components/SEO";
import { trpc } from "@/lib/trpc";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

export default function Home() {
  // Map to actual products: 久留米絣 ショルダー, 横長ショルダー（大）, ハンカチ, ふでばこ, キーホルダー, ミニショルダー
  const products = [
    {
      slug: "shoulder",
      name: "久留米絣 ショルダー",
      description: "伝統の藍染が美しい、馬モチーフのショルダーバッグ",
      tags: ["久留米絣", "藍染", "バッグ"],
      image: "/products/shoulder-1.jpg",
    },
    {
      slug: "wide-large",
      name: "横長ショルダー（大）",
      description: "たっぷり収納できる横長デザイン",
      tags: ["久留米絣", "大容量", "バッグ"],
      image: "/products/wide-large-1.jpg",
    },
    {
      slug: "handkerchief",
      name: "ハンカチ",
      description: "毎日使える、久留米絣の手触り",
      tags: ["久留米絣", "小物", "ギフト"],
      image: "/products/handkerchief-1.jpg",
    },
    {
      slug: "pencil-case",
      name: "ふでばこ",
      description: "藍染の美しさを日常に",
      tags: ["久留米絣", "文房具", "小物"],
      image: "/products/pencil-case-1.jpg",
    },
    {
      slug: "keychain",
      name: "キーホルダー",
      description: "さりげなく持ち歩く、久留米絣",
      tags: ["久留米絣", "アクセサリー", "ギフト"],
      image: "/products/keychain-1.jpg",
    },
    {
      slug: "mini-shoulder",
      name: "ミニショルダー",
      description: "コンパクトで使いやすいミニサイズ",
      tags: ["久留米絣", "バッグ", "小物"],
      image: "/products/mini-shoulder-1.jpg",
    },
  ];

  const { data: featuredProducts = [] } = trpc.products.list.useQuery({ featured: true });
  const { addToCart } = useCart();

  const handleAddToCart = async (productId: number, productName: string) => {
    try {
      await addToCart(productId, 1);
      toast.success(`${productName}をカートに追加しました`);
    } catch (error) {
      toast.error("カートへの追加に失敗しました");
    }
  };

  const scrollToProducts = () => {
    const element = document.getElementById("products-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Cloud Nine",
    description: "久留米絣で作る、馬のある暮らしの手仕事",
    url: window.location.origin,
    sameAs: [
      "https://www.instagram.com/cloudnine1017",
    ],
  };

  return (
    <PageLayout>
      <SEO
        title="Cloud Nine | 久留米絣で作る、馬のある暮らしの手仕事"
        description="200年以上の伝統を持つ久留米絣を使い、馬を愛する人々へ手仕事の品々を届けるCloud Nine。Horse Messe 2025出展。重要無形文化財指定の織物で作る、特別なライフスタイルアイテム。"
        structuredData={organizationSchema}
      />
      {/* Hero Section - 2026 Design Trends */}
      <section className="relative min-h-[85vh] flex flex-col md:flex-row">
        {/* Mobile: Image First (55vh) */}
        <div className="md:hidden w-full h-[55vh] relative">
          <img
            src="/hero-premium.jpg"
            alt="Cloud Nine 久留米絣"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Desktop: Left Image (50%) */}
        <div className="hidden md:block md:w-1/2 relative">
          <img
            src="/hero-premium.jpg"
            alt="Cloud Nine 久留米絣"
            className="w-full h-full object-cover"
          />
          {/* Glowing gradient on right edge */}
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white/20 to-transparent pointer-events-none" />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 bg-white px-6 py-8 md:px-20 md:py-20 flex flex-col justify-center">
          <div className="max-w-xl">
            {/* Badge */}
            <div className="inline-block mb-6 px-4 py-2 border-2 border-[#1A365D] bg-[#FAF9F6] rounded-full">
              <span className="text-sm font-bold text-[#1A365D]">重要無形文化財指定 久留米絣</span>
            </div>

            {/* H1 - Kinetic Typography */}
            <h1 className="text-[40px] md:text-[64px] font-serif font-bold text-[#1A365D] leading-[1.25] md:leading-[1.3] mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
              200年続く日本の技が、<br />
              馬のある暮らしと出会う
            </h1>

            {/* Brand */}
            <p className="text-[20px] md:text-[24px] font-medium text-[#87CEEB] mb-4">
              Cloud Nine × 久留米絣
            </p>

            {/* Tagline */}
            <p className="text-base md:text-lg text-[#666666] leading-[1.8] mb-8">
              一つひとつ手織りで作られる、世界に一点だけのオリジナル。
            </p>

            {/* CTAs with Glassmorphism */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="h-14 md:h-[56px] text-base md:text-lg font-semibold bg-[#87CEEB] hover:bg-[#87CEEB]/90 text-white backdrop-blur-sm shadow-lg" 
                asChild
              >
                <Link href="/shop">オンラインで購入</Link>
              </Button>
              <a
                href="#horse-messe-section"
                className="inline-flex items-center justify-center text-sm md:text-base text-[#1A365D] hover:text-[#87CEEB] transition-colors underline-offset-4 hover:underline"
              >
                ブースF6で実物をご覧 →
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-[#666666] text-sm animate-bounce">
          <span>↓</span>
          <span>Scroll to explore</span>
        </div>
      </section>

      {/* Horse Messe Section */}
      <section id="horse-messe-section" className="py-16 md:py-24 bg-primary/10">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-primary">
              <CardContent className="p-8 md:p-12 space-y-6">
                <div className="text-center space-y-4">
                  <div className="flex justify-center mb-4">
                    <img 
                      src="https://horsemesse.jp/wp-content/uploads/2025/07/horsemesse_logo_yoko4.webp" 
                      alt="Horse Messe 2026" 
                      className="h-16 md:h-20 object-contain"
                    />
                  </div>
                  <Badge className="text-base px-4 py-2">2026年2月21日(土)・22日(日)・23日(月・祝)</Badge>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold">
                    日本最大級の馬の祭典に出展します
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6 py-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">会場</p>
                      <p className="text-muted-foreground">JRA馬事公苑（東京）</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">時間</p>
                      <p className="text-muted-foreground">9:00–17:00</p>
                    </div>
                  </div>
                </div>

                <p className="text-center text-foreground/80 leading-relaxed">
                  「馬に会う、馬を知る、もっと好きになる」をテーマに、久留米絣の手仕事をご紹介します。
                  <br />
                  セミナー・トークは無料でご参加いただけます（主催者情報より）。
                </p>

                <div className="text-center pt-4">
                  <p className="text-lg font-semibold mb-4">
                    ブース番号：<span className="text-primary">F6</span>
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button variant="outline" asChild>
                      <a
                        href="https://horsemesse.jp/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        公式サイトへ
                      </a>
                    </Button>
                    <Button onClick={scrollToContact}>お問い合わせ</Button>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground text-center pt-4">
                  公式サイト：
                  <a
                    href="https://horsemesse.jp/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline ml-1"
                  >
                    https://horsemesse.jp/
                  </a>
                  <br />
                  テーマ：未来へ繋ぐ 馬との世界をデザインする
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products-section" className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <h2 className="text-3xl md:text-5xl font-serif font-bold">
              手仕事が生む、馬のある暮らし
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              久留米絣の深い藍と雲のような白。一つひとつ手で染め、織り上げた生地で、馬好きのための特別なアイテムを作りました。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {products.map((product) => (
              <Card
                key={product.slug}
                className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              >
                <Link href={`/product/${product.slug}`}>
                  <div className="aspect-square bg-muted flex items-center justify-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                </Link>
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-xl font-semibold">{product.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {product.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {product.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" asChild>
              <Link href="/shop">もっと見る</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Kurume Kasuri Appeal Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <h2 className="text-3xl md:text-5xl font-serif font-bold">
              なぜ、久留米絣なのか
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              久留米絣は、200年以上の歴史を持つ日本の伝統織物です。30を超える工程をすべて手作業で行い、一つとして同じ表情のない生地を生み出します。Cloud
              Nineは、この織物の持つ強さ、やわらかさ、深みを、馬を愛する人々へ届けたいと考えています。
            </p>
          </div>

          {/* Featured Kurume Kasuri Image */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="relative aspect-[21/9] overflow-hidden rounded-lg shadow-xl">
              <img
                src="/kurume-kasuri-closeup.jpg"
                alt="久留米絣の織りの質感"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex justify-center mt-6">
              <img 
                src="https://kurumekasuri.sakura.ne.jp/rwp/wp-content/uploads/2021/03/krm-logo_yoko.png" 
                alt="久留米絣" 
                className="h-12 object-contain opacity-80"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <Hand className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">丈夫で柔らかく、肌に馴染む</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  使い込むほどに味わいが増し、長く愛用できる織物です。通気性が良く、季節を問わず快適に使えます。
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">200年の伝統を手にする</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  重要無形文化財（1957年指定）に認定された技術を支える職人の手仕事。一つひとつが唯一無二の存在です。
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">絣独特の深い表情</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  糸を染め分けて織り上げる絣技法が生む、立体的で奥行きのある模様。藍の深みと白のコントラストが美しい。
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link href="/about-kurumekasuri">久留米絣についてもっと詳しく</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      {featuredProducts.length > 0 && (
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">おすすめ製品</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                職人が丁寧に選んだ、特におすすめの製品をご紹介します
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProducts.slice(0, 3).map((product) => {
                const images = JSON.parse(product.images as string);
                const imageUrl = images[0];

                return (
                  <div key={product.id} className="group">
                    <Link href={`/product/${product.slug}`}>
                      <a className="block">
                        <div className="relative aspect-square mb-4 overflow-hidden rounded-lg bg-muted">
                          <img
                            src={imageUrl}
                            alt={product.name}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <Badge className="absolute top-3 left-3">おすすめ</Badge>
                        </div>
                        <h3 className="font-medium text-lg mb-2 group-hover:text-primary transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                          {product.description}
                        </p>
                        <p className="text-lg font-bold">¥{product.price.toLocaleString()}</p>
                      </a>
                    </Link>
                    <Button
                      className="w-full mt-4"
                      onClick={() => handleAddToCart(product.id, product.name)}
                    >
                      カートに追加
                    </Button>
                  </div>
                );
              })}
            </div>

            <div className="text-center mt-12">
              <Button size="lg" asChild>
                <Link href="/shop">すべての製品を見る</Link>
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Cloud Nine Brand Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-5xl font-serif font-bold">
              Cloud Nineについて
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              空の青と雲の白。久留米絣の色彩に込めた想いは、馬と過ごす時間の自由さと心地よさです。
              <br />
              伝統の技と現代の感性を織り交ぜ、馬を愛するすべての人へ、特別な日常を届けます。
            </p>
            <div className="pt-4">
              <Button size="lg" variant="outline" asChild>
                <Link href="/about-cloudnine">ブランドストーリーを読む</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12 space-y-4">
            <div className="flex items-center justify-center gap-2">
              <Instagram className="h-8 w-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-serif font-bold">
                Instagram
              </h2>
            </div>
            <p className="text-lg text-muted-foreground">
              @cloudnine_kurumekasuri で日々の制作風景や製品をご紹介しています
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="aspect-square bg-muted rounded-lg flex items-center justify-center"
              >
                <Instagram className="h-12 w-12 text-muted-foreground/30" />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg" asChild>
              <a
                href="https://instagram.com/cloudnine_kurumekasuri"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagramをフォロー
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-section" className="py-16 md:py-24 bg-primary/10">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif font-bold">
              お問い合わせ
            </h2>
            <p className="text-lg text-foreground/80">
              製品についてのご質問、卸売のご相談、コラボレーションのご提案など、お気軽にお問い合わせください。
            </p>
            <div className="pt-4">
              <Button size="lg" asChild>
                <Link href="/contact">お問い合わせフォームへ</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
