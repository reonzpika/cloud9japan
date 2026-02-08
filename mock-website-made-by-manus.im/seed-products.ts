import { drizzle } from "drizzle-orm/mysql2";
import { products } from "./drizzle/schema";
import { productSeedData } from "./server/productData";

const db = drizzle(process.env.DATABASE_URL!);

async function seedProducts() {
  console.log("Seeding products...");
  
  try {
    // Clear existing products
    await db.delete(products);
    console.log("Cleared existing products");
    
    // Insert seed data
    for (const product of productSeedData) {
      await db.insert(products).values(product);
      console.log(`Inserted: ${product.name}`);
    }
    
    console.log(`✓ Successfully seeded ${productSeedData.length} products`);
  } catch (error) {
    console.error("Error seeding products:", error);
    process.exit(1);
  }
  
  process.exit(0);
}

seedProducts();
