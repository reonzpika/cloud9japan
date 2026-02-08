import { trpc } from "@/lib/trpc";
import PageLayout from "@/components/PageLayout";
import SEO from "@/components/SEO";
import { Link, useRoute } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Loader2 } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

export default function Shop() {
  const [match, params] = useRoute("/shop/:filter?");
  const filter = params?.filter || "all";
  
  const { addToCart } = useCart();

  // Determine query based on filter
  const getQueryInput = () => {
    if (filter === "under-5000") return { priceRange: "under-5000" };
    if (filter === "5000-10000") return { priceRange: "5000-10000" };
    if (filter === "premium") return { priceRange: "over-10000" };
    return undefined;
  };

  const { data: products = [], isLoading } = trpc.products.list.useQuery(getQueryInput());

  const handleAddToCart = async (productId: number, productName: string) => {
    try {
      await addToCart(productId, 1);
      toast.success(`${productName}をカートに追加しました`);
    } catch (error) {
      toast.error("カートへの追加に失敗しました");
    }
  };

  const getTitle = () => {
    if (filter === "under-5000") return "¥5,000以下の製品";
    if (filter === "5000-10000") return "¥5,000 - ¥10,000の製品";
    if (filter === "premium") return "プレミアム製品";
    return "すべての製品";
  };

  return (
    <PageLayout>
      <SEO
        title={`${getTitle()} | Cloud Nine`}
        description="久留米絣を使用した手作りバッグ・小物のオンラインショップ。伝統的な藍染めの美しさと現代的なデザインが融合した製品をお届けします。"
      />

      <div className="container py-12 md:py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{getTitle()}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            伝統的な久留米絣の美しさを日常に。職人の手で丁寧に作られた製品をご覧ください。
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          <Button variant={filter === "all" ? "default" : "outline"} asChild>
            <Link href="/shop">すべて</Link>
          </Button>
          <Button variant={filter === "under-5000" ? "default" : "outline"} asChild>
            <Link href="/shop/under-5000">¥5,000以下</Link>
          </Button>
          <Button variant={filter === "5000-10000" ? "default" : "outline"} asChild>
            <Link href="/shop/5000-10000">¥5,000 - ¥10,000</Link>
          </Button>
          <Button variant={filter === "premium" ? "default" : "outline"} asChild>
            <Link href="/shop/premium">プレミアム</Link>
          </Button>
        </div>

        {/* Products Grid */}
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-lg text-muted-foreground">製品が見つかりませんでした</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => {
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
                        {product.featured === 1 && (
                          <Badge className="absolute top-3 left-3">おすすめ</Badge>
                        )}
                        {product.bestSeller === 1 && (
                          <Badge variant="secondary" className="absolute top-3 right-3">
                            人気
                          </Badge>
                        )}
                        {product.madeToOrder === 1 && (
                          <Badge variant="outline" className="absolute bottom-3 left-3 bg-background/80 backdrop-blur">
                            受注制作
                          </Badge>
                        )}
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
        )}
      </div>
    </PageLayout>
  );
}
