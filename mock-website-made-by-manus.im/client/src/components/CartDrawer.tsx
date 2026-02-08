import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ShoppingCart, X, Plus, Minus } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { Link } from "wouter";
import { useState } from "react";

export function CartDrawer() {
  const { cartItems, cartCount, removeFromCart, updateQuantity } = useCart();
  const [open, setOpen] = useState(false);

  const subtotal = cartItems.reduce((sum, item) => {
    return sum + (item.product?.price || 0) * item.quantity;
  }, 0);

  const handleQuantityChange = async (cartItemId: number, currentQuantity: number, delta: number) => {
    const newQuantity = currentQuantity + delta;
    if (newQuantity >= 1) {
      await updateQuantity(cartItemId, newQuantity);
    }
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative" aria-label={`カートを開く。現在${cartCount}点`}>
          <ShoppingCart className="h-5 w-5" />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center" aria-label={`${cartCount}点`}>
              {cartCount}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle>ショッピングカート</SheetTitle>
        </SheetHeader>
        
        <div className="mt-8 flex flex-col h-full">
          {cartItems.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center py-12">
              <ShoppingCart className="h-16 w-16 text-muted-foreground mb-4" />
              <p className="text-lg font-medium mb-2">カートは空です</p>
              <p className="text-sm text-muted-foreground mb-6">商品を追加してください</p>
              <Button onClick={() => setOpen(false)} asChild>
                <Link href="/shop">商品を見る</Link>
              </Button>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto -mx-6 px-6">
                <div className="space-y-4">
                  {cartItems.map((item) => {
                    const product = item.product;
                    if (!product) return null;
                    
                    const images = JSON.parse(product.images as string);
                    const imageUrl = images[0];

                    return (
                      <div key={item.id} className="flex gap-4 py-4 border-b">
                        <img
                          src={imageUrl}
                          alt={product.name}
                          className="w-20 h-20 object-cover rounded"
                        />
                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium text-sm mb-1 truncate">{product.name}</h3>
                          <p className="text-sm text-muted-foreground mb-2">¥{product.price.toLocaleString()}</p>
                          
                          <div className="flex items-center gap-2" role="group" aria-label="数量選択">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => handleQuantityChange(item.id, item.quantity, -1)}
                              aria-label="数量を減らす"
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="w-8 text-center" aria-label="数量">{item.quantity}</span>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => handleQuantityChange(item.id, item.quantity, 1)}
                              aria-label="数量を増やす"
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                        <div className="flex flex-col items-end justify-between">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => removeFromCart(item.id)}
                            aria-label={`${product.name}を削除`}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                          <p className="font-medium text-sm">
                            ¥{(product.price * item.quantity).toLocaleString()}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="border-t pt-4 mt-4 space-y-4">
                <div className="flex justify-between text-lg font-medium">
                  <span>小計</span>
                  <span>¥{subtotal.toLocaleString()}</span>
                </div>
                <Button className="w-full" size="lg" onClick={() => setOpen(false)} asChild>
                  <Link href="/checkout">ご購入手続きへ</Link>
                </Button>
                <Button variant="outline" className="w-full" onClick={() => setOpen(false)} asChild>
                  <Link href="/shop">買い物を続ける</Link>
                </Button>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
