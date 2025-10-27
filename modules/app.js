/**
 * 📘 MAIN MODULE
 * Acts as the entry point of the frontend app.
 * Demonstrates how different modules communicate.
 * 
 * 💡 IMPORTS:
 * - Data from productData.js
 * - Render functions from renderProduct.js
 * - DOM helpers from domUtils.js
 */

import { getProducts } from "./logics/productData.js";
import { renderProducts } from "./logics/renderProduct.js";
import { clearContainer } from "./logics/domUtils.js";

/**
 * Step 1️⃣: Select container
 */
const productContainer = document.querySelector("#product-list");

/**
 * Step 2️⃣: Load and render all products
 */
const allProducts = getProducts();
clearContainer(productContainer);
renderProducts(allProducts, productContainer);
