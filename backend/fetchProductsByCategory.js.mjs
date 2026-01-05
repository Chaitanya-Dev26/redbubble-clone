import fs from "fs";
import fetch from "node-fetch";  // If using Node 18+, you can skip import and use global fetch

async function fetchAllProducts() {
  const url = "https://api.escuelajs.co/api/v1/products";
  const res = await fetch(url);
  const products = await res.json();
  return products;   // array of product objects
}

async function groupByCategory(products) {
  const byCategory = {};
  for (const p of products) {
    const cat = p.category.name;    // e.g. "Electronics", "Clothes", etc.
    if (!byCategory[cat]) {
      byCategory[cat] = [];
    }
    byCategory[cat].push(p);
  }
  return byCategory;   // object: categoryName -> [products]
}

async function saveJSON(filename, data) {
  fs.writeFileSync(filename, JSON.stringify(data, null, 2));
  console.log(`✅ Saved ${filename}`);
}

async function main() {
  try {
    const products = await fetchAllProducts();
    console.log(`Fetched ${products.length} products`);

    // Save all products
    await saveJSON("allProducts.json", products);

    // Group by category
    const byCat = await groupByCategory(products);

    // For each category, save separate JSON
    for (const categoryName in byCat) {
      // Make a safe filename: remove spaces, lowercase
      const fileName = categoryName.toLowerCase().replace(/\s+/g, "_") + ".json";
      await saveJSON(fileName, byCat[categoryName]);
    }
    console.log("🎉 Done: all categories saved.");
  } catch (err) {
    console.error("❌ Error:", err);
  }
}

main();
