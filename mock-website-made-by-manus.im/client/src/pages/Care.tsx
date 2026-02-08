import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import PageLayout from "@/components/PageLayout";

export default function Care() {
  return (
    <PageLayout>
      {/* Header */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-accent/30 to-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-6xl font-serif font-bold">
              お手入れ方法
            </h1>
            <p className="text-lg text-foreground/80">
              久留米絣は丈夫な織物ですが、長く美しくお使いいただくために、優しいお手入れをおすすめします。
            </p>
          </div>
        </div>
      </section>

      {/* Daily Care */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center">
              日常のお手入れ
            </h2>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-8 space-y-4">
                  <h3 className="text-xl font-semibold">ブラッシング</h3>
                  <p className="text-foreground/80 leading-relaxed">
                    使用後は柔らかいブラシで軽くブラッシングしてください。ホコリや汚れを落とし、生地の風合いを保ちます。
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8 space-y-4">
                  <h3 className="text-xl font-semibold">陰干し</h3>
                  <p className="text-foreground/80 leading-relaxed">
                    湿気がこもらないよう、風通しの良い場所で陰干ししてください。直射日光は色あせの原因になります。
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Washing */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center">
              洗濯について
            </h2>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-8 space-y-4">
                  <h3 className="text-xl font-semibold">手洗い推奨</h3>
                  <p className="text-foreground/80 leading-relaxed">
                    久留米絣は手洗いをおすすめします。ぬるま湯（30度以下）に中性洗剤を溶かし、優しく押し洗いしてください。
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8 space-y-4">
                  <h3 className="text-xl font-semibold">洗濯機を使う場合</h3>
                  <p className="text-foreground/80 leading-relaxed">
                    洗濯ネットに入れ、手洗いモード・ドライモードで洗ってください。脱水は短時間（30秒〜1分）に設定してください。
                  </p>
                </CardContent>
              </Card>

              <Card className="border-destructive/50">
                <CardContent className="p-8 space-y-4">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-6 w-6 text-destructive shrink-0 mt-1" />
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold">避けるべきこと</h3>
                      <ul className="list-disc list-inside space-y-2 text-foreground/80">
                        <li>漂白剤、蛍光増白剤入り洗剤の使用</li>
                        <li>熱いお湯での洗濯</li>
                        <li>強い脱水・乾燥機の使用</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Drying & Storage */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center">
              乾燥と保管
            </h2>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-8 space-y-4">
                  <h3 className="text-xl font-semibold">乾燥</h3>
                  <p className="text-foreground/80 leading-relaxed">
                    形を整えて陰干ししてください。直射日光は避け、風通しの良い場所で自然乾燥させます。
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8 space-y-4">
                  <h3 className="text-xl font-semibold">アイロン</h3>
                  <p className="text-foreground/80 leading-relaxed">
                    必要に応じて、当て布をして中温（140〜160度）でアイロンをかけてください。藍染めの場合、高温は避けてください。
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8 space-y-4">
                  <h3 className="text-xl font-semibold">保管</h3>
                  <p className="text-foreground/80 leading-relaxed">
                    湿気を避け、風通しの良い場所で保管してください。長期保管の場合は、防虫剤を使用し、たまに陰干しすることをおすすめします。
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center">
              注意事項
            </h2>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-8 space-y-4">
                  <h3 className="text-xl font-semibold">色落ちについて</h3>
                  <p className="text-foreground/80 leading-relaxed">
                    藍染めの久留米絣は、最初の数回、色落ちすることがあります。他のものと分けて洗ってください。使い込むほど色は安定し、深い味わいが出ます。
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8 space-y-4">
                  <h3 className="text-xl font-semibold">個体差について</h3>
                  <p className="text-foreground/80 leading-relaxed">
                    手作業で作られているため、製品ごとに色の濃淡や柄の出方が異なります。これは久留米絣の特性であり、個性としてお楽しみください。
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <p className="text-lg text-foreground/80">
              お手入れについてご不明な点がございましたら、お気軽にお問い合わせください。
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">
                <a>お問い合わせフォームへ</a>
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
