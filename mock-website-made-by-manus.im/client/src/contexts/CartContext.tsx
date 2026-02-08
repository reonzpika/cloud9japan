import { createContext, useContext, ReactNode } from "react";
import { trpc } from "@/lib/trpc";

type CartContextType = {
  cartItems: any[];
  cartCount: number;
  isLoading: boolean;
  addToCart: (productId: number, quantity?: number) => Promise<void>;
  updateQuantity: (cartItemId: number, quantity: number) => Promise<void>;
  removeFromCart: (cartItemId: number) => Promise<void>;
  clearCart: () => Promise<void>;
  refetch: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const utils = trpc.useUtils();
  const { data: cartItems = [], isLoading, refetch } = trpc.cart.get.useQuery();
  
  const addMutation = trpc.cart.add.useMutation({
    onSuccess: () => {
      utils.cart.get.invalidate();
    },
  });

  const updateMutation = trpc.cart.updateQuantity.useMutation({
    onSuccess: () => {
      utils.cart.get.invalidate();
    },
  });

  const removeMutation = trpc.cart.remove.useMutation({
    onSuccess: () => {
      utils.cart.get.invalidate();
    },
  });

  const clearMutation = trpc.cart.clear.useMutation({
    onSuccess: () => {
      utils.cart.get.invalidate();
    },
  });

  const addToCart = async (productId: number, quantity = 1) => {
    await addMutation.mutateAsync({ productId, quantity });
  };

  const updateQuantity = async (cartItemId: number, quantity: number) => {
    await updateMutation.mutateAsync({ cartItemId, quantity });
  };

  const removeFromCart = async (cartItemId: number) => {
    await removeMutation.mutateAsync({ cartItemId });
  };

  const clearCart = async () => {
    await clearMutation.mutateAsync();
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartCount,
        isLoading,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        refetch,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
}
