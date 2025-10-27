/**
 * 📘 MODULE: cartHandler.js
 * Handles the shopping cart feature (frontend-only simulation).
 * Demonstrates: Importing, exporting, state handling in separate module.
 */

let cart = [];

/**
 * Adds a product to the cart and updates UI feedback.
 */
export function addToCart(product) {
  cart.push(product);
  alert(`${product.name} added to cart!`);
  console.log("🛒 Current Cart:", cart);
}

/**
 * Returns cart items.
 */
export function getCartItems() {
  return cart;
}
