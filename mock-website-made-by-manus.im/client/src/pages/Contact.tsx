import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Instagram, Twitter, Facebook, Mail } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import PageLayout from "@/components/PageLayout";
import { trpc } from "@/lib/trpc";
import SEO from "@/components/SEO";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiryType: "",
    message: "",
    attendingHorseMesse: false,
    privacyConsent: false,
  });

  const submitMutation = trpc.contact.submit.useMutation({
    onSuccess: () => {
      toast.success("お問い合わせを送信しました。ありがとうございます。");
      setFormData({
        name: "",
        email: "",
        inquiryType: "",
        message: "",
        attendingHorseMesse: false,
        privacyConsent: false,
      });
    },
    onError: () => {
      toast.error("送信に失敗しました。もう一度お試しください。");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.privacyConsent) {
      toast.error("個人情報の取り扱いに同意してください。");
      return;
    }

    submitMutation.mutate({
      name: formData.name,
      email: formData.email,
      inquiryType: formData.inquiryType,
      message: formData.message,
      attendingHorseMesse: formData.attendingHorseMesse,
    });
  };

  return (
    <PageLayout>
      <SEO
        title="お問い合わせ | Cloud Nine"
        description="製品、取扱店、卸売、コラボレーション、プレス取材についてお気軽にお問い合わせください。Horse Messeでお会いできることを楽しみにしています。"
      />
      {/* Header */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-accent/30 to-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-6xl font-serif font-bold">
              お問い合わせ
            </h1>
            <p className="text-lg text-foreground/80 leading-relaxed">
              製品について、取扱店・卸売のご相談、コラボレーション、プレス・メディア取材など、お気軽にお問い合わせください。
              <br />
              Horse Messeでお会いできることを楽しみにしています。
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <Label htmlFor="name">
                      お名前 <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email">
                      メールアドレス <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>

                  {/* Inquiry Type */}
                  <div className="space-y-2">
                    <Label htmlFor="inquiryType">
                      お問い合わせ内容 <span className="text-destructive">*</span>
                    </Label>
                    <Select
                      required
                      value={formData.inquiryType}
                      onValueChange={(value) =>
                        setFormData({ ...formData, inquiryType: value })
                      }
                    >
                      <SelectTrigger id="inquiryType">
                        <SelectValue placeholder="選択してください" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">
                          一般的なお問い合わせ
                        </SelectItem>
                        <SelectItem value="products">製品について</SelectItem>
                        <SelectItem value="wholesale">
                          取扱店・卸売について
                        </SelectItem>
                        <SelectItem value="collaboration">
                          コラボレーション
                        </SelectItem>
                        <SelectItem value="press">プレス・メディア</SelectItem>
                        <SelectItem value="horsemesse">
                          Horse Messeについて
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message">
                      メッセージ <span className="text-destructive">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    />
                  </div>

                  {/* Horse Messe Attendance */}
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="attendingHorseMesse"
                      checked={formData.attendingHorseMesse}
                      onCheckedChange={(checked) =>
                        setFormData({
                          ...formData,
                          attendingHorseMesse: checked === true,
                        })
                      }
                    />
                    <Label
                      htmlFor="attendingHorseMesse"
                      className="font-normal cursor-pointer"
                    >
                      Horse Messeに来場予定です
                    </Label>
                  </div>

                  {/* Privacy Consent */}
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="privacyConsent"
                      required
                      checked={formData.privacyConsent}
                      onCheckedChange={(checked) =>
                        setFormData({
                          ...formData,
                          privacyConsent: checked === true,
                        })
                      }
                    />
                    <Label
                      htmlFor="privacyConsent"
                      className="font-normal cursor-pointer"
                    >
                      個人情報の取り扱いに同意します{" "}
                      <span className="text-destructive">*</span>
                    </Label>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={submitMutation.isPending}
                  >
                    {submitMutation.isPending ? "送信中..." : "送信する"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Wholesale Info */}
            <Card className="mt-8">
              <CardContent className="p-8 space-y-4">
                <h2 className="text-2xl font-serif font-bold">
                  取扱店・卸売をご希望の方へ
                </h2>
                <p className="text-foreground/80 leading-relaxed">
                  Cloud
                  Nineの製品を取り扱いたい小売店様、卸売をご希望の方は、以下の情報をお問い合わせ時にお知らせください。
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground/80">
                  <li>店舗名</li>
                  <li>所在地</li>
                  <li>ご興味のある製品カテゴリー</li>
                  <li>その他ご要望</li>
                </ul>
                <p className="text-sm text-muted-foreground">
                  担当者より折り返しご連絡いたします。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-serif font-bold">連絡先情報</h2>

            <div className="space-y-4">
              <div className="flex items-center justify-center gap-2 text-foreground/80">
                <Mail className="h-5 w-5" />
                <span>[CONTACT EMAIL]</span>
              </div>

              <div className="pt-4">
                <h3 className="text-lg font-semibold mb-4">SNS</h3>
                <div className="flex gap-4 justify-center">
                  <a
                    href="[INSTAGRAM_URL]"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-accent hover:bg-primary transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href="[X_URL]"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-accent hover:bg-primary transition-colors"
                    aria-label="X (Twitter)"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a
                    href="[FACEBOOK_URL]"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-accent hover:bg-primary transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
