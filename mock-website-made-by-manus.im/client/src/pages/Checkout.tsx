import PageLayout from "@/components/PageLayout";
import SEO from "@/components/SEO";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ShoppingCart, ExternalLink } from "lucide-react";

export default function Checkout() {
  const { cartItems, cartCount } = useCart();

  const subtotal = cartItems.reduce((sum, item) => {
    return sum + (item.product?.price || 0) * item.quantity;
  }, 0);

  const shipping: number = 0; // Free shipping for now
  const total: number = subtotal + shipping;

  return (
    <PageLayout>
      <SEO
        title="ご購入手続き | Cloud Nine"
        description="Cloud Nineのオンラインショップでのご購入手続きページです。"
      />

      <div className="container py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">ご購入手続き</h1>

          {cartCount === 0 ? (
            <div className="text-center py-12">
              <ShoppingCart className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-lg font-medium mb-2">カートは空です</p>
              <p className="text-sm text-muted-foreground mb-6">商品を追加してください</p>
              <Button asChild>
                <Link href="/shop">商品を見る</Link>
              </Button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8">
              {/* Order Summary */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold mb-4">ご注文内容</h2>
                  <div className="space-y-4">
                    {cartItems.map((item) => {
                      const product = item.product;
                      if (!product) return null;

                      const images = JSON.parse(product.images as string);
                      const imageUrl = images[0];

                      return (
                        <div key={item.id} className="flex gap-4 pb-4 border-b">
                          <img
                            src={imageUrl}
                            alt={product.name}
                            className="w-20 h-20 object-cover rounded"
                          />
                          <div className="flex-1">
                            <h3 className="font-medium mb-1">{product.name}</h3>
                            <p className="text-sm text-muted-foreground">数量: {item.quantity}</p>
                            <p className="text-sm font-medium mt-1">
                              ¥{(product.price * item.quantity).toLocaleString()}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="space-y-2 pt-4 border-t">
                  <div className="flex justify-between">
                    <span>小計</span>
                    <span>¥{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>送料</span>
                    <span>{shipping === 0 ? "無料" : `¥${shipping.toLocaleString()}`}</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold pt-2 border-t">
                    <span>合計</span>
                    <span>¥{total.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Checkout Info */}
              <div className="space-y-6">
                <div className="bg-muted p-6 rounded-lg">
                  <h2 className="text-xl font-bold mb-4">お支払い方法について</h2>
                  <p className="text-muted-foreground mb-4">
                    現在、オンライン決済システムの準備中です。
                  </p>
                  <p className="text-muted-foreground mb-6">
                    ご購入をご希望の方は、お問い合わせフォームよりご連絡ください。
                    折り返し、お支払い方法と配送についてご案内させていただきます。
                  </p>
                  <Button className="w-full" size="lg" asChild>
                    <Link href="/contact">
                      <ExternalLink className="h-5 w-5 mr-2" />
                      お問い合わせフォームへ
                    </Link>
                  </Button>
                </div>

                <div className="bg-sky-50 p-6 rounded-lg">
                  <h3 className="font-medium mb-2">配送について</h3>
                  <p className="text-sm text-muted-foreground">
                    全国一律送料無料でお届けします。通常、ご注文から3-5営業日でお届けいたします。
                  </p>
                </div>

                <div className="bg-sky-50 p-6 rounded-lg">
                  <h3 className="font-medium mb-2">返品・交換について</h3>
                  <p className="text-sm text-muted-foreground">
                    商品到着後7日以内であれば、未使用品に限り返品・交換を承ります。
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  );
}
