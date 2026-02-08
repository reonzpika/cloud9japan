import PageLayout from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";

export default function Privacy() {
  return (
    <PageLayout showEventBanner={false}>
      <section className="py-12 md:py-16 bg-gradient-to-b from-accent/30 to-background">
        <div className="container">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-center">
            プライバシーポリシー
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardContent className="p-8 space-y-6">
                <p className="text-muted-foreground text-center">
                  プライバシーポリシーの内容は準備中です。
                </p>
                <p className="text-sm text-muted-foreground text-center">
                  お客様の個人情報は適切に管理し、第三者に開示することはございません。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
