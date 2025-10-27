/**
 * 📘 MODULE: productData.js
 * This module stores and exports product data used by the frontend.
 * Purpose: To separate static/dynamic data logic from UI logic.
 */

export const products = [
  { id: 1, name: "Wireless Earbuds", price: 1999, rating: 4.4 },
  { id: 2, name: "Smart Watch", price: 4999, rating: 4.7 },
  { id: 3, name: "Bluetooth Speaker", price: 2599, rating: 4.5 },
  { id: 4, name: "Gaming Mouse", price: 1499, rating: 4.6 },
];

/**
 * Function: getProducts()
 * Returns all products for rendering on UI.
 */
export function getProducts() {
  return products;
}
