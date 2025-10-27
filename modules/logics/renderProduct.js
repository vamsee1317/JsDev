/**
 * 📘 MODULE: renderProduct.js
 * Handles rendering of product cards dynamically using imported data and utilities.
 * Concept: Frontend separation — display logic is independent from data and event logic.
 */

import { createElement, appendChildren } from "./domUtils.js";
import { addToCart } from "./cart.js";

export function renderProducts(productList, container) {
  productList.forEach(product => {
    const card = createElement("div", "card");
    const title = createElement("h3", "card-title", product.name);
    const price = createElement("p", "card-price", `₹${product.price}`);
    const rating = createElement("p", "card-rating", `⭐ ${product.rating}`);
    const btn = createElement("button", "card-btn", "Add to Cart");

    btn.addEventListener("click", () => addToCart(product));

    appendChildren(card, [title, price, rating, btn]);
    container.appendChild(card);
  });
}
