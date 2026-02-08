import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import PageLayout from "@/components/PageLayout";
import SEO from "@/components/SEO";

export default function AboutCloudNine() {
  const values = [
    {
      title: "工芸への敬意",
      description: "職人の技術と時間を尊重し、伝統を未来へ繋ぐ",
    },
    {
      title: "明快さ",
      description: "シンプルで誠実なデザインとコミュニケーション",
    },
    {
      title: "長く愛用できるもの",
      description: "流行ではなく、使い込むほどに味わいが増すものづくり",
    },
    {
      title: "穏やかな自信",
      description: "静かだけれど、確かな存在感を持つブランドであること",
    },
  ];

  return (
    <PageLayout>
      <SEO
        title="Cloud Nineについて | 馬と伝統工芸を繋ぐブランド"
        description="Cloud Nineは、馬を愛するすべての人へ日本の手仕事と出会う場所を届けます。久留米絣の職人とコラボレーションし、伝統を現代のライフスタイルに繋ぐものづくりを続けています。"
      />
      {/* Header */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-accent/30 to-background">
        <div className="container">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-center">
            Cloud Nineについて
          </h1>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <p className="text-lg leading-relaxed text-foreground/80">
              Cloud
              Nineは、馬を愛するすべての人へ、日本の手仕事と出会う場所を届けたいという想いから生まれました。
            </p>

            <p className="text-lg leading-relaxed text-foreground/80 mt-6">
              ブランド名の「Cloud Nine（雲の上）」は、澄んだ空、雲よりもはるか高い場所を意味します。馬と過ごす時間の中で感じる、あの特別な高揚感や自由さ。私たちは、その感覚を日常に持ち帰れるような、丁寧に作られた品々を提案します。
            </p>

            <p className="text-lg leading-relaxed text-foreground/80 mt-6">
              現在、200年以上の歴史を持つ久留米絣の職人とコラボレーションし、馬のいる暮らしを彩るアイテムを制作しています。一つひとつ手で染め、手で織り上げた生地には、大量生産では決して生まれない表情と温かみがあります。
            </p>

            <p className="text-lg leading-relaxed text-foreground/80 mt-6">
              これからも、職人の技術を尊重し、伝統を現代のライフスタイルに繋ぐものづくりを続けていきます。
            </p>
          </div>
        </div>
      </section>

      {/* Design Inspiration */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center">
              なぜ、青と白なのか
            </h2>

            <div className="prose prose-lg">
              <p className="text-lg leading-relaxed text-foreground/80">
                Cloud
                Nineのカラーパレットは、澄んだ空をイメージしています。深い藍色と雲のような白。それは、馬と駆ける時に見上げる、あの開放的な空です。
              </p>

              <p className="text-lg leading-relaxed text-foreground/80 mt-6">
                この色の組み合わせは、久留米絣の伝統的な藍染めとも自然に響き合います。軽やかさ、穏やかさ、そして高揚感。私たちは、この色に「雲の上」のような特別な気持ちを込めています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center">
              私たちの価値観
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <Card key={index}>
                  <CardContent className="p-8 space-y-3">
                    <h3 className="text-xl font-semibold">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stockists & Press */}
      <section className="py-16 md:py-24 bg-accent/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif font-bold">
              取扱店・プレス・コラボレーション
            </h2>

            <p className="text-lg text-foreground/80 leading-relaxed">
              Cloud
              Nineの製品を取り扱いたい小売店様、メディア取材、コラボレーションのご相談を歓迎しています。お問い合わせフォームよりご連絡ください。
            </p>

            <div className="pt-4 space-y-4">
              <p className="text-sm text-muted-foreground">
                取扱店リスト：[STOCKISTS LIST]
              </p>

              <Button size="lg" asChild>
                <Link href="/contact">
                  <a>お問い合わせ</a>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
