/*
===========================================
🛒 Higher-Order Functions: Product Utilities
===========================================

🎯 Objective:
Students will create and work with higher-order functions to transform and manipulate data.

They will:
- Write higher-order functions that accept callbacks to apply transformations dynamically
- Practice returning functions from higher-order functions for reusable, customizable utilities
- Gain experience using `map`, `filter`, and `reduce` to perform practical data transformations
*/

// ============================================
// 📦 Starting Dataset: Product List
// ============================================

const products = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Phone", price: 500, inStock: false },
  { name: "Tablet", price: 800, inStock: true },
  { name: "Monitor", price: 300, inStock: true },
  { name: "Keyboard", price: 100, inStock: false },
];

// ============================================
// 🔧 Tasks
// ============================================

/*
🔹 Task 1: Filter Products by Availability

Create a function `filterProducts` that accepts:
- an array of products
- a callback function

The callback should determine which products to include.
Example use case: filter by in-stock items or by price.
*/
// function filterProducts(products, callback) {
//     // TODO: return products.filter(callback);
// }

/*
🔹 Task 2: Transform Product Names

Use `map()` to create a new array of product names in UPPERCASE.
*/
// const uppercasedNames = products.map(function(product) {
//     return product.name.toUpperCase();
// });

/*
🔹 Task 3: Generate Discounted Prices

Write a higher-order function `applyDiscount` that:
- Accepts a discount percentage
- Returns a function that takes a product and returns a discounted price

Use this with `map()` to create a new array of discounted products.
*/
// function applyDiscount(discountPercent) {
//     // TODO: return a function that takes a product and returns a discounted version
// }

/*
🔹 Task 4: Calculate Total Inventory Value

Use `reduce()` to calculate the total value of products that are currently in stock.
*/
// const totalValueInStock = products.reduce(function(acc, product) {
//     return product.inStock ? acc + product.price : acc;
// }, 0);

// ✅ Use console.log() to verify your results
// console.log(filterProducts(products, p => p.inStock));
// console.log(uppercasedNames);
// console.log(discountedProducts);
// console.log(totalValueInStock);
