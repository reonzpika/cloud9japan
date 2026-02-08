import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router, protectedProcedure } from "./_core/trpc";
import { z } from "zod";
import * as db from "./db";
import { nanoid } from "nanoid";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  // Product routes
  products: router({
    list: publicProcedure
      .input(
        z
          .object({
            category: z.string().optional(),
            priceRange: z.string().optional(),
            featured: z.boolean().optional(),
            bestSeller: z.boolean().optional(),
          })
          .optional()
      )
      .query(async ({ input }) => {
        if (!input) return await db.getAllProducts();
        if (input.category) return await db.getProductsByCategory(input.category);
        if (input.priceRange) return await db.getProductsByPriceRange(input.priceRange);
        if (input.featured) return await db.getFeaturedProducts();
        if (input.bestSeller) return await db.getBestSellerProducts();
        return await db.getAllProducts();
      }),
    getBySlug: publicProcedure.input(z.object({ slug: z.string() })).query(async ({ input }) => {
      return await db.getProductBySlug(input.slug);
    }),
  }),

  // Cart routes
  cart: router({
    get: publicProcedure.query(async ({ ctx }) => {
      // Get or create session ID from cookie
      let sessionId = ctx.req.cookies?.cartSessionId;
      if (!sessionId) {
        sessionId = nanoid();
        ctx.res.cookie("cartSessionId", sessionId, {
          maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
          httpOnly: true,
          secure: ctx.req.protocol === "https",
          sameSite: "lax",
        });
      }

      const items = await db.getCartItems(sessionId, ctx.user?.id);
      const products = await db.getAllProducts();

      // Join cart items with product details
      const cartWithDetails = items.map((item) => {
        const product = products.find((p) => p.id === item.productId);
        return {
          ...item,
          product,
        };
      });

      return cartWithDetails;
    }),
    add: publicProcedure
      .input(
        z.object({
          productId: z.number(),
          quantity: z.number().min(1).default(1),
        })
      )
      .mutation(async ({ input, ctx }) => {
        let sessionId = ctx.req.cookies?.cartSessionId;
        if (!sessionId) {
          sessionId = nanoid();
          ctx.res.cookie("cartSessionId", sessionId, {
            maxAge: 30 * 24 * 60 * 60 * 1000,
            httpOnly: true,
            secure: ctx.req.protocol === "https",
            sameSite: "lax",
          });
        }

        await db.addToCart({
          sessionId,
          userId: ctx.user?.id,
          productId: input.productId,
          quantity: input.quantity,
        });

        return { success: true };
      }),
    updateQuantity: publicProcedure
      .input(
        z.object({
          cartItemId: z.number(),
          quantity: z.number().min(0),
        })
      )
      .mutation(async ({ input }) => {
        await db.updateCartItemQuantity(input.cartItemId, input.quantity);
        return { success: true };
      }),
    remove: publicProcedure.input(z.object({ cartItemId: z.number() })).mutation(async ({ input }) => {
      await db.removeFromCart(input.cartItemId);
      return { success: true };
    }),
    clear: publicProcedure.mutation(async ({ ctx }) => {
      const sessionId = ctx.req.cookies?.cartSessionId;
      if (!sessionId) return { success: true };
      await db.clearCart(sessionId, ctx.user?.id);
      return { success: true };
    }),
  }),

  // Contact form router
  contact: router({
    submit: publicProcedure
      .input(
        z.object({
          name: z.string().min(1, "お名前を入力してください"),
          email: z.string().email("有効なメールアドレスを入力してください"),
          inquiryType: z.string().min(1, "お問い合わせ内容を選択してください"),
          message: z.string().min(1, "メッセージを入力してください"),
          attendingHorseMesse: z.boolean(),
        })
      )
      .mutation(async ({ input }) => {
        const { createContactSubmission } = await import("./db");
        const { notifyOwner } = await import("./_core/notification");

        // Save to database
        await createContactSubmission(input);

        // Notify owner
        const inquiryTypeLabels: Record<string, string> = {
          general: "一般的なお問い合わせ",
          products: "製品について",
          wholesale: "取扱店・卸売について",
          collaboration: "コラボレーション",
          press: "プレス・メディア",
          horsemesse: "Horse Messeについて",
        };

        const inquiryLabel = inquiryTypeLabels[input.inquiryType] || input.inquiryType;
        const horseMesseNote = input.attendingHorseMesse
          ? "\n\n※ Horse Messeに来場予定です"
          : "";

        await notifyOwner({
          title: `新しいお問い合わせ: ${inquiryLabel}`,
          content: `お名前: ${input.name}\nメール: ${input.email}\n\n${input.message}${horseMesseNote}`,
        });

        return { success: true };
      }),
  }),
});

export type AppRouter = typeof appRouter;
