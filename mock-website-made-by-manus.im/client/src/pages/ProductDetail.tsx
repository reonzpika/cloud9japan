import { trpc } from "@/lib/trpc";
import PageLayout from "@/components/PageLayout";
import SEO from "@/components/SEO";
import { useRoute, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Loader2, ChevronLeft, ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";
import { useState } from "react";

export default function ProductDetail() {
  const [, params] = useRoute("/product/:slug");
  const slug = params?.slug || "";
  
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const { data: product, isLoading } = trpc.products.getBySlug.useQuery({ slug });

  const handleAddToCart = async () => {
    if (!product) return;
    try {
      await addToCart(product.id, quantity);
      toast.success(`${product.name}をカートに追加しました`);
    } catch (error) {
      toast.error("カートへの追加に失敗しました");
    }
  };

  if (isLoading) {
    return (
      <PageLayout>
        <div className="container py-20 flex justify-center items-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      </PageLayout>
    );
  }

  if (!product) {
    return (
      <PageLayout>
        <div className="container py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">製品が見つかりませんでした</h1>
          <Button asChild>
            <Link href="/shop">ショップに戻る</Link>
          </Button>
        </div>
      </PageLayout>
    );
  }

  const images = JSON.parse(product.images as string);

  return (
    <PageLayout>
      <SEO
        title={`${product.name} | Cloud Nine`}
        description={product.description || ""}
      />

      <div className="container py-8 md:py-12">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Button variant="ghost" asChild>
            <Link href="/shop">
              <ChevronLeft className="h-4 w-4 mr-1" />
              ショップに戻る
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-square rounded-lg overflow-hidden bg-muted">
              <img
                src={images[0]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.featured === 1 && (
                <Badge className="absolute top-4 left-4">おすすめ</Badge>
              )}
              {product.bestSeller === 1 && (
                <Badge variant="secondary" className="absolute top-4 right-4">
                  人気
                </Badge>
              )}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{product.name}</h1>
              <p className="text-2xl font-bold text-primary">¥{product.price.toLocaleString()}</p>
            </div>

            {product.madeToOrder === 1 && (
              <div className="bg-muted p-4 rounded-lg">
                <p className="text-sm font-medium">受注制作品</p>
                <p className="text-sm text-muted-foreground mt-1">
                  ご注文後、職人が丁寧に制作いたします。お届けまで2-3週間程度お時間をいただきます。
                </p>
              </div>
            )}

            <div className="prose prose-sm max-w-none">
              <p className="text-muted-foreground">{product.description}</p>
            </div>

            {/* Specifications */}
            <div className="space-y-3 border-t pt-6">
              <h3 className="font-medium">製品詳細</h3>
              <div className="space-y-2 text-sm">
                {product.dimensions && (
                  <div className="flex">
                    <span className="w-24 text-muted-foreground">サイズ</span>
                    <span>{product.dimensions}</span>
                  </div>
                )}
                {product.material && (
                  <div className="flex">
                    <span className="w-24 text-muted-foreground">素材</span>
                    <span>{product.material}</span>
                  </div>
                )}
                <div className="flex">
                  <span className="w-24 text-muted-foreground">カテゴリー</span>
                  <span>{product.category}</span>
                </div>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="space-y-4 border-t pt-6">
              <div className="flex items-center gap-4">
                <label htmlFor="quantity" className="text-sm font-medium">
                  数量
                </label>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    aria-label="数量を減らす"
                  >
                    -
                  </Button>
                  <input
                    id="quantity"
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-16 text-center border rounded px-2 py-1"
                    aria-label="数量"
                  />
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                    aria-label="数量を増やす"
                  >
                    +
                  </Button>
                </div>
              </div>

              <Button className="w-full" size="lg" onClick={handleAddToCart}>
                <ShoppingCart className="h-5 w-5 mr-2" />
                カートに追加
              </Button>
            </div>

            {/* Care Instructions */}
            <div className="bg-muted p-4 rounded-lg text-sm space-y-2">
              <h4 className="font-medium">お手入れ方法</h4>
              <p className="text-muted-foreground">
                久留米絣は天然の藍染めを使用しています。詳しいお手入れ方法は
                <Link href="/care">
                  <a className="text-primary hover:underline ml-1">こちら</a>
                </Link>
                をご覧ください。
              </p>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold mb-8 text-center">関連製品</h2>
          <RelatedProducts currentProductId={product.id} category={product.category} />
        </div>
      </div>
    </PageLayout>
  );
}

function RelatedProducts({ currentProductId, category }: { currentProductId: number; category: string }) {
  const { data: products = [] } = trpc.products.list.useQuery({ category });
  const { addToCart } = useCart();

  const relatedProducts = products
    .filter((p) => p.id !== currentProductId)
    .slice(0, 3);

  if (relatedProducts.length === 0) return null;

  const handleAddToCart = async (productId: number, productName: string) => {
    try {
      await addToCart(productId, 1);
      toast.success(`${productName}をカートに追加しました`);
    } catch (error) {
      toast.error("カートへの追加に失敗しました");
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {relatedProducts.map((product) => {
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
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-medium text-lg mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
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
  );
}
