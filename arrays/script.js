// Product array
const products = [
  { id: 1, name: "Laptop Pro 15", category: "Electronics", price: 95000, inStock: true, rating: 4.5 },
  { id: 2, name: "Wireless Mouse", category: "Electronics", price: 1200, inStock: true, rating: 4.2 },
  { id: 3, name: "Bluetooth Headphones", category: "Electronics", price: 3500, inStock: false, rating: 4.0 },
  { id: 4, name: "Smartphone X", category: "Mobiles", price: 68000, inStock: true, rating: 4.7 },
  { id: 5, name: "Mechanical Keyboard", category: "Electronics", price: 4500, inStock: true, rating: 4.6 },
  { id: 6, name: "LED Monitor 24\"", category: "Electronics", price: 12000, inStock: true, rating: 4.4 },
  { id: 7, name: "USB-C Charger", category: "Accessories", price: 2000, inStock: false, rating: 4.1 },
  { id: 8, name: "Power Bank 20000mAh", category: "Accessories", price: 1800, inStock: true, rating: 4.3 },
  { id: 9, name: "Smart Watch", category: "Wearables", price: 7500, inStock: true, rating: 4.5 },
  { id: 10, name: "Gaming Chair", category: "Furniture", price: 15000, inStock: true, rating: 4.6 },
  { id: 11, name: "DSLR Camera", category: "Electronics", price: 52000, inStock: false, rating: 4.8 },
  { id: 12, name: "Tripod Stand", category: "Accessories", price: 1200, inStock: true, rating: 4.0 },
  { id: 13, name: "Office Desk", category: "Furniture", price: 8000, inStock: true, rating: 4.2 },
  { id: 14, name: "Portable Speaker", category: "Electronics", price: 2500, inStock: true, rating: 4.4 },
  { id: 15, name: "Air Conditioner 1.5T", category: "Home Appliances", price: 42000, inStock: true, rating: 4.6 },
  { id: 16, name: "Refrigerator 300L", category: "Home Appliances", price: 35000, inStock: false, rating: 4.5 },
  { id: 17, name: "Microwave Oven", category: "Home Appliances", price: 11000, inStock: true, rating: 4.3 },
  { id: 18, name: "Washing Machine", category: "Home Appliances", price: 28000, inStock: true, rating: 4.4 },
  { id: 19, name: "Electric Kettle", category: "Kitchen", price: 1500, inStock: true, rating: 4.2 },
  { id: 20, name: "Vacuum Cleaner", category: "Home Appliances", price: 7000, inStock: true, rating: 4.1 },
];

let cart = [];

const productList = document.getElementById("productList");
const searchBox = document.getElementById("searchBox");
const sortSelect = document.getElementById("sortSelect");
const stats = document.getElementById("stats");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");

// Render products using map()
function renderProducts(list) {
  productList.innerHTML = list.map(p => `
    <div class="product">
      <h3>${p.name}</h3>
      <p>Category: ${p.category}</p>
      <p>Price: ₹${p.price}</p>
      <p>Rating: ⭐ ${p.rating}</p>
      <p>${p.inStock ? "✅ In Stock" : "❌ Out of Stock"}</p>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    </div>
  `).join("");

  updateStats(list);
}

// Update stats with reduce
function updateStats(list) {
  const totalProducts = list.length;
  const totalPrice = list.reduce((acc, p) => acc + p.price, 0);
  const avgPrice = (totalPrice / totalProducts).toFixed(2);

  // Find example: First expensive product > ₹50k
  const expensive = list.find(p => p.price > 50000);

  stats.innerHTML = `
    <strong>Total Products:</strong> ${totalProducts} |
    <strong>Total Price:</strong> ₹${totalPrice} |
    <strong>Avg Price:</strong> ₹${avgPrice} |
    <strong>Expensive:</strong> ${expensive ? expensive.name : "None"}
  `;
}

// Cart functionality
function addToCart(id) {
  const product = products.find(p => p.id === id);
  if (product) {
    cart.push(product); // push
    renderCart();
  }
}

function removeFromCart(index) {
  cart.splice(index, 1); // remove
  renderCart();
}

function clearCart() {
  cart = cart.fill(null, 0, cart.length); // fill with nulls
  cart = cart.filter(item => item !== null); // clear
  renderCart();
}

function renderCart() {
  cartItems.innerHTML = cart.map((item, index) => `
    <li>
      ${item.name} - ₹${item.price}
      <button onclick="removeFromCart(${index})">❌</button>
    </li>
  `).join("");

  const total = cart.reduce((acc, item) => acc + item.price, 0);
  cartTotal.innerHTML = `<strong>Total:</strong> ₹${total} <br>
    <button onclick="clearCart()">Clear Cart</button>`;
}

// Search filter
searchBox.addEventListener("input", e => {
  const query = e.target.value.toLowerCase();
  const filtered = products.filter(p => p.name.toLowerCase().includes(query));
  renderProducts(filtered);
});

// Sort functionality
sortSelect.addEventListener("change", e => {
  let sorted = [...products];
  if (e.target.value === "priceLowHigh") sorted.sort((a, b) => a.price - b.price);
  if (e.target.value === "priceHighLow") sorted.sort((a, b) => b.price - a.price);
  if (e.target.value === "ratingHighLow") sorted.sort((a, b) => b.rating - a.rating);
  renderProducts(sorted);
});

// Initial render
renderProducts(products);
