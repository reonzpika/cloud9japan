import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import SEO from "@/components/SEO";

export default function AboutKurumeKasuri() {
  const faqs = [
    {
      question: "久留米絣はデニムですか？",
      answer:
        "いいえ、久留米絣はデニムではありません。久留米絣は、糸を染め分けてから織り上げる「絣技法」を用いた伝統的な日本の織物です。藍染めの久留米絣は見た目がデニムに似ていることがありますが、製法も歴史も異なります。",
    },
    {
      question: "なぜ製品ごとに柄の出方が違うのですか？",
      answer:
        "久留米絣は手作業で糸を染め、織り上げるため、生地ごとに柄の出方や位置が微妙に異なります。これは大量生産品にはない、手仕事ならではの個性です。一つとして同じものがないことが、久留米絣の魅力の一つです。",
    },
    {
      question: "お手入れ方法を教えてください。",
      answer:
        "久留米絣は丈夫な織物ですが、長く美しく使うためには優しいお手入れをおすすめします。詳しくは「お手入れ方法」ページをご覧ください。",
    },
    {
      question: "オンラインで購入できますか？",
      answer:
        "現在、Cloud Nineはオンライン販売を行っておりません。製品についてのお問い合わせ、取扱店のご案内は、お問い合わせフォームよりご連絡ください。",
    },
    {
      question: "取扱店・卸売を希望しています。",
      answer:
        "取扱店・卸売のご相談を歓迎しています。お問い合わせフォームより、店舗名、所在地、ご興味のある製品カテゴリーをお知らせください。",
    },
    {
      question: "カスタムオーダーやコラボレーションは可能ですか？",
      answer:
        "はい、ご相談を承っています。お問い合わせフォームより詳細をお知らせください。",
    },
    {
      question: "製品は日本製ですか？",
      answer:
        "はい、すべての製品は久留米絣を使用し、日本国内で制作しています。",
    },
    {
      question: "ギフトラッピングはできますか？",
      answer:
        "ギフトラッピングについては、お問い合わせフォームよりご相談ください。",
    },
  ];

  return (
    <PageLayout>
      <SEO
        title="久留米絣について | 200年続く日本の伝統織物 | Cloud Nine"
        description="久留米絣は200年以上の歴史を持つ日本の伝統織物。1957年重要無形文化財指定。30以上の工程を手作業で行い、丈夫で柔らかく、使い込むほど味わいが増す織物です。"
      />
      {/* Header */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-accent/30 to-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-6xl font-serif font-bold">
              久留米絣について
            </h1>
            <a
              href="https://kurumekasuri.jp/en/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              久留米絣の公式サイトはこちら
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <p className="text-lg leading-relaxed text-foreground/80">
              久留米絣（くるめかすり）は、福岡県久留米地方で200年以上にわたり受け継がれてきた日本の伝統織物です。1957年には重要無形文化財に指定され、その歴史的・芸術的価値が認められています。
            </p>

            <p className="text-lg leading-relaxed text-foreground/80 mt-6">
              絣とは、糸を染め分けてから織り上げることで模様を作る技法のこと。久留米絣は30を超える工程をすべて手作業で行い、一つとして同じ表情のない生地を生み出します。大量生産では決して作れない、手仕事ならではの温かみと深みがあります。
            </p>
          </div>
        </div>
      </section>

      {/* Tactile Appeal */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center">
              丈夫で、柔らかく、長く使える
            </h2>

            <div className="prose prose-lg">
              <p className="text-lg leading-relaxed text-foreground/80">
                久留米絣の生地は、丈夫でありながら柔らかく、肌に優しく馴染みます。通気性が良く、季節を問わず快適に使えるのが特徴です。
              </p>

              <p className="text-lg leading-relaxed text-foreground/80 mt-6">
                使い込むほどに生地は柔らかくなり、味わいが増していきます。10年、20年と愛用できる耐久性を持ちながら、経年変化を楽しめる織物です。大切に使えば、次の世代へと受け継ぐこともできます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emotional Appeal */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center">
              200年の伝統を手にする
            </h2>

            <div className="prose prose-lg">
              <p className="text-lg leading-relaxed text-foreground/80">
                久留米絣は、江戸時代から続く日本の伝統技術です。1957年に重要無形文化財に指定され、その技術は国によって保護されています。
              </p>

              <p className="text-lg leading-relaxed text-foreground/80 mt-6">
                一つひとつの製品は、職人の手によって丁寧に作られた唯一無二の存在です。大量生産品では得られない、手仕事ならではの温かみと誇り。久留米絣を持つことは、200年以上続く職人の技術と文化を支えることでもあります。
              </p>

              <p className="text-lg leading-relaxed text-foreground/80 mt-6">
                Cloud
                Nineは、この伝統を尊重しながら、現代のライフスタイルに寄り添う形で久留米絣を紹介しています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Appeal */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center">
              絣独特の、深い表情
            </h2>

            <div className="prose prose-lg">
              <p className="text-lg leading-relaxed text-foreground/80">
                久留米絣の最大の特徴は、糸を染め分けてから織り上げる「絣技法」が生む、立体的で奥行きのある模様です。
              </p>

              <p className="text-lg leading-relaxed text-foreground/80 mt-6">
                特に藍染めの久留米絣は、深い藍色と白のコントラストが美しく、光の当たり方や角度によって表情が変わります。織りの密度、糸の太さ、染めの濃淡が重なり合い、一つとして同じ表情のない生地が生まれます。
              </p>

              <p className="text-lg leading-relaxed text-foreground/80 mt-6">
                この独特のテクスチャと深みは、手仕事でしか作り出せないものです。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center">
              よくある質問
            </h2>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index}>
                  <CardContent className="p-6 space-y-3">
                    <h3 className="text-lg font-semibold">{faq.question}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                    {faq.question.includes("お手入れ") && (
                      <Link href="/care">
                        <a className="text-primary hover:underline text-sm inline-block mt-2">
                          お手入れ方法ページへ →
                        </a>
                      </Link>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Learn More */}
      <section className="py-16 md:py-24 bg-accent/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif font-bold">
              久留米絣をもっと知りたい方へ
            </h2>

            <p className="text-lg text-foreground/80 leading-relaxed">
              久留米絣の歴史、製作工程、職人の技術について詳しく知りたい方は、久留米絣公式サイトをご覧ください。
            </p>

            <Button size="lg" asChild>
              <a
                href="https://kurumekasuri.jp/en/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                久留米絣公式サイトへ
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
