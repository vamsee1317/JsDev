// 1. Function Declaration → Logging system
function log(message) {
  const time = new Date().toLocaleTimeString();
  console.log(`[${time}] ${message}`);
}

// 2. Function Expression → Sanitize product names
const sanitizeName = function (name) {
  return name.trim().toLowerCase();
};

// 3. Arrow Function → Calculate discounts
const applyDiscount = (price, discount) => price - (price * discount) / 100;

// 4. Function with Parameters → Format currency
function formatCurrency(amount, currency = "INR") {
  return new Intl.NumberFormat("en-IN", { style: "currency", currency }).format(amount);
}

// 5. Function with Return → Tax calculation
function calculateTax(amount) {
  return amount * 0.18; // 18% GST
}

// 6. Default Parameters → Logger with default level
function logMessage(message, level = "INFO") {
  console.log(`[${level}] ${message}`);
}

// 7. Callback Function → Simulate checkout process
function checkout(cart, callback) {
  log("Processing checkout...");
  setTimeout(() => {
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    callback(total);
  }, 1500);
}

// 8. IIFE → App configuration (private scope)
const config = (() => {
  const secretCoupon = "SALE10";
  return {
    appName: "MyCart",
    getCoupon: () => secretCoupon,
  };
})();

// 9. setTimeout → Simulate data loading
log("Fetching products...");
setTimeout(() => {
  log("Products loaded ✅");

  // Sample cart
  let cart = [
    { id: 1, name: sanitizeName("   Laptop   "), price: applyDiscount(50000, 10) },
    { id: 2, name: sanitizeName("Phone"), price: applyDiscount(20000, 5) },
  ];

  logMessage("Items added to cart", "SUCCESS");

  // 10. setInterval → Real-time cart status (simulate stock countdown)
  let stock = 5;
  const intervalId = setInterval(() => {
    if (stock > 0) {
      log(`Stock remaining: ${stock}`);
      stock--;
    } else {
      clearInterval(intervalId);
      log("Stock empty ❌");
    }
  }, 1000);

  // Checkout
  checkout(cart, (total) => {
    const tax = calculateTax(total);
    const grandTotal = total + tax;

    console.log("\n🛒 Checkout Summary:");
    console.log("Cart:", cart);
    console.log("Subtotal:", formatCurrency(total));
    console.log("Tax:", formatCurrency(tax));
    console.log("Total:", formatCurrency(grandTotal));
    console.log("Applied Coupon:", config.getCoupon());
  });

}, 2000);
