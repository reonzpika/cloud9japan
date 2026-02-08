import { eq, and, asc } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { InsertUser, users, products, cartItems, type InsertProduct, type InsertCartItem, contactSubmissions, type InsertContactSubmission } from "../drizzle/schema";
import { ENV } from './_core/env';

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = 'admin';
      updateSet.role = 'admin';
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);

  return result.length > 0 ? result[0] : undefined;
}

/**
 * Contact form submission helpers
 */
export async function createContactSubmission(data: {
  name: string;
  email: string;
  inquiryType: string;
  message: string;
  attendingHorseMesse: boolean;
}) {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }

  const { contactSubmissions } = await import("../drizzle/schema");

  await db.insert(contactSubmissions).values({
    name: data.name,
    email: data.email,
    inquiryType: data.inquiryType,
    message: data.message,
    attendingHorseMesse: data.attendingHorseMesse ? 1 : 0,
  });
}

/**
 * Product queries
 */

export async function getAllProducts() {
  const db = await getDb();
  if (!db) return [];
  const result = await db.select().from(products).orderBy(asc(products.sortOrder));
  return result;
}

export async function getProductBySlug(slug: string) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.select().from(products).where(eq(products.slug, slug)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

export async function getProductsByCategory(category: string) {
  const db = await getDb();
  if (!db) return [];
  const result = await db.select().from(products).where(eq(products.category as any, category)).orderBy(asc(products.sortOrder));
  return result;
}

export async function getProductsByPriceRange(priceRange: string) {
  const db = await getDb();
  if (!db) return [];
  const result = await db.select().from(products).where(eq(products.priceRange as any, priceRange)).orderBy(asc(products.sortOrder));
  return result;
}

export async function getFeaturedProducts() {
  const db = await getDb();
  if (!db) return [];
  const result = await db.select().from(products).where(eq(products.featured, 1)).orderBy(asc(products.sortOrder));
  return result;
}

export async function getBestSellerProducts() {
  const db = await getDb();
  if (!db) return [];
  const result = await db.select().from(products).where(eq(products.bestSeller, 1)).orderBy(asc(products.sortOrder));
  return result;
}

export async function createProduct(product: InsertProduct) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.insert(products).values(product);
}

/**
 * Cart queries
 */
export async function getCartItems(sessionId: string, userId?: number) {
  const db = await getDb();
  if (!db) return [];
  
  const conditions = userId 
    ? eq(cartItems.userId, userId)
    : eq(cartItems.sessionId, sessionId);
  
  const result = await db.select().from(cartItems).where(conditions);
  return result;
}

export async function addToCart(item: InsertCartItem) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  
  // Check if item already exists
  const existing = await db
    .select()
    .from(cartItems)
    .where(
      item.userId
        ? and(eq(cartItems.userId, item.userId), eq(cartItems.productId, item.productId))
        : and(eq(cartItems.sessionId, item.sessionId), eq(cartItems.productId, item.productId))
    )
    .limit(1);
  
  if (existing.length > 0) {
    // Update quantity
    await db
      .update(cartItems)
      .set({ quantity: existing[0].quantity + (item.quantity || 1) })
      .where(eq(cartItems.id, existing[0].id));
    return existing[0].id;
  } else {
    // Insert new item
    const result = await db.insert(cartItems).values(item);
    return result[0].insertId;
  }
}

export async function updateCartItemQuantity(cartItemId: number, quantity: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  
  if (quantity <= 0) {
    await db.delete(cartItems).where(eq(cartItems.id, cartItemId));
  } else {
    await db.update(cartItems).set({ quantity }).where(eq(cartItems.id, cartItemId));
  }
}

export async function removeFromCart(cartItemId: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.delete(cartItems).where(eq(cartItems.id, cartItemId));
}

export async function clearCart(sessionId: string, userId?: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  
  const conditions = userId
    ? eq(cartItems.userId, userId)
    : eq(cartItems.sessionId, sessionId);
  
  await db.delete(cartItems).where(conditions);
}
