/*
Objective:
Students will create and work with higher-order functions to transform and manipulate data.
They will:
  Write higher-order functions that accept callbacks to apply transformations dynamically.
  Practice returning functions from higher-order functions for reusable, customizable utilities.
  Gain experience using map, filter, and reduce to perform practical data transformations.
*/



// Instructions:
// Starting Point: A List of Products Provide students with the following dataset:
const products = [
    { name: "Laptop", price: 1000, inStock: true },
    { name: "Phone", price: 500, inStock: false },
    { name: "Tablet", price: 800, inStock: true },
    { name: "Monitor", price: 300, inStock: true },
    { name: "Keyboard", price: 100, inStock: false },
];



/*
Tasks:
  Filter Products by Availability: Create a function filterProducts that accepts
  a callback function to dynamically filter products based on any condition
  (e.g., in stock or above a certain price).

  Transform Product Names: Use map to create a new array of uppercase product names.

  Generate Discounted Prices: Write a higher-order function applyDiscount that accepts
  a discount percentage and returns a function to calculate discounted prices for each product.

  Calculate Total Inventory Value: Use reduce to calculate the total value of all products currently in stock.
*/
