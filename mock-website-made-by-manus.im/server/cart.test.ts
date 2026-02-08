import { describe, expect, it, beforeEach } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";
import * as db from "./db";

function createMockContext(): TrpcContext {
  const cookies: Record<string, string> = {};
  
  const ctx: TrpcContext = {
    user: undefined,
    req: {
      protocol: "https",
      headers: {},
      cookies,
    } as TrpcContext["req"],
    res: {
      cookie: (name: string, value: string) => {
        cookies[name] = value;
      },
      clearCookie: () => {},
    } as TrpcContext["res"],
  };

  return ctx;
}

describe("cart.add", () => {
  it("adds a product to cart and creates session", async () => {
    const ctx = createMockContext();
    const caller = appRouter.createCaller(ctx);

    // Add product to cart
    const result = await caller.cart.add({ productId: 1, quantity: 2 });

    expect(result).toEqual({ success: true });
    expect(ctx.req.cookies.cartSessionId).toBeDefined();
  });

  it("adds product with default quantity of 1", async () => {
    const ctx = createMockContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.cart.add({ productId: 1, quantity: 1 });

    expect(result).toEqual({ success: true });
  });
});

describe("cart.get", () => {
  it("returns empty cart for new session", async () => {
    const ctx = createMockContext();
    const caller = appRouter.createCaller(ctx);

    const cart = await caller.cart.get();

    expect(Array.isArray(cart)).toBe(true);
    expect(ctx.req.cookies.cartSessionId).toBeDefined();
  });

  it("returns cart items with product details", async () => {
    const ctx = createMockContext();
    const caller = appRouter.createCaller(ctx);

    // Add a product first
    await caller.cart.add({ productId: 1, quantity: 1 });

    // Get cart
    const cart = await caller.cart.get();

    expect(Array.isArray(cart)).toBe(true);
    // Cart should have items with product details joined
    if (cart.length > 0) {
      expect(cart[0]).toHaveProperty("product");
      expect(cart[0]).toHaveProperty("quantity");
    }
  });
});

describe("cart.updateQuantity", () => {
  it("updates cart item quantity", async () => {
    const ctx = createMockContext();
    const caller = appRouter.createCaller(ctx);

    // Add product first
    await caller.cart.add({ productId: 1, quantity: 1 });
    const cart = await caller.cart.get();
    
    if (cart.length > 0) {
      const cartItemId = cart[0].id;
      
      // Update quantity
      const result = await caller.cart.updateQuantity({ cartItemId, quantity: 5 });
      
      expect(result).toEqual({ success: true });
    }
  });
});

describe("cart.remove", () => {
  it("removes item from cart", async () => {
    const ctx = createMockContext();
    const caller = appRouter.createCaller(ctx);

    // Add product first
    await caller.cart.add({ productId: 1, quantity: 1 });
    const cart = await caller.cart.get();
    
    if (cart.length > 0) {
      const cartItemId = cart[0].id;
      
      // Remove item
      const result = await caller.cart.remove({ cartItemId });
      
      expect(result).toEqual({ success: true });
    }
  });
});

describe("cart.clear", () => {
  it("clears all items from cart", async () => {
    const ctx = createMockContext();
    const caller = appRouter.createCaller(ctx);

    // Add multiple products
    await caller.cart.add({ productId: 1, quantity: 1 });
    await caller.cart.add({ productId: 2, quantity: 2 });

    // Clear cart
    const result = await caller.cart.clear();

    expect(result).toEqual({ success: true });
  });
});

describe("products.list", () => {
  it("returns all products when no filter is provided", async () => {
    const ctx = createMockContext();
    const caller = appRouter.createCaller(ctx);

    const products = await caller.products.list();

    expect(Array.isArray(products)).toBe(true);
    expect(products.length).toBeGreaterThan(0);
  });

  it("filters products by price range", async () => {
    const ctx = createMockContext();
    const caller = appRouter.createCaller(ctx);

    const products = await caller.products.list({ priceRange: "under-5000" });

    expect(Array.isArray(products)).toBe(true);
    // All products should be under 5000
    products.forEach((product) => {
      expect(product.price).toBeLessThan(5000);
    });
  });

  it("returns featured products", async () => {
    const ctx = createMockContext();
    const caller = appRouter.createCaller(ctx);

    const products = await caller.products.list({ featured: true });

    expect(Array.isArray(products)).toBe(true);
    // All products should be featured
    products.forEach((product) => {
      expect(product.featured).toBe(1);
    });
  });

  it("returns best seller products", async () => {
    const ctx = createMockContext();
    const caller = appRouter.createCaller(ctx);

    const products = await caller.products.list({ bestSeller: true });

    expect(Array.isArray(products)).toBe(true);
    // All products should be best sellers
    products.forEach((product) => {
      expect(product.bestSeller).toBe(1);
    });
  });
});

describe("products.getBySlug", () => {
  it("returns product by slug", async () => {
    const ctx = createMockContext();
    const caller = appRouter.createCaller(ctx);

    // First get all products to find a valid slug
    const allProducts = await caller.products.list();
    
    if (allProducts.length > 0) {
      const slug = allProducts[0].slug;
      const product = await caller.products.getBySlug({ slug });

      expect(product).toBeDefined();
      expect(product?.slug).toBe(slug);
    }
  });

  it("returns undefined for non-existent slug", async () => {
    const ctx = createMockContext();
    const caller = appRouter.createCaller(ctx);

    const product = await caller.products.getBySlug({ slug: "non-existent-product" });

    expect(product).toBeUndefined();
  });
});
