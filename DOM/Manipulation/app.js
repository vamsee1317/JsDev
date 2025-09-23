
// ------------------------------
// 1. PRODUCT DATA
// ------------------------------

const products = [

  { id: 1, name: "Wireless Headphones", category: "Electronics", image: "https://images.pexels.com/photos/3394657/pexels-photo-3394657.jpeg", description: "High-quality wireless headphones with noise cancellation.", quantity: 12, actualPrice: 2999, discountPrice: 2699 },
  {
    id: 2,
    name: "Smartphone",
    category: "Electronics",
    image: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg",
    description: "Latest smartphone with AMOLED display and fast charging.",
    quantity: 20,
    actualPrice: 24999,
    discountPrice: 21999
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    category: "Electronics",
    image: "https://images.pexels.com/photos/63703/sound-speaker-radio-music-63703.jpeg",
    description: "Portable Bluetooth speaker with deep bass and long battery life.",
    quantity: 15,
    actualPrice: 4999,
    discountPrice: 4499
  },
  {
    id: 4,
    name: "Laptop",
    category: "Electronics",
    image: "https://images.pexels.com/photos/18105/pexels-photo.jpg",
    description: "Lightweight laptop with Intel i7 processor and SSD storage.",
    quantity: 10,
    actualPrice: 69999,
    discountPrice: 64999
  },
  {
    id: 5,
    name: "Gaming Mouse",
    category: "Electronics",
    image: "https://images.pexels.com/photos/1298601/pexels-photo-1298601.jpeg",
    description: "RGB gaming mouse with adjustable DPI and ergonomic design.",
    quantity: 25,
    actualPrice: 2499,
    discountPrice: 1999
  },
  {
    id: 6,
    name: "Smartwatch",
    category: "Electronics",
    image: "https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg",
    description: "Water-resistant smartwatch with fitness tracking.",
    quantity: 30,
    actualPrice: 7999,
    discountPrice: 6999
  },
  {
    id: 7,
    name: "Wireless Keyboard",
    category: "Electronics",
    image: "https://images.pexels.com/photos/776113/pexels-photo-776113.jpeg",
    description: "Slim wireless keyboard with silent keys.",
    quantity: 18,
    actualPrice: 3499,
    discountPrice: 2999
  },
  {
    id: 8,
    name: "LED Monitor",
    category: "Electronics",
    image: "https://images.pexels.com/photos/572056/pexels-photo-572056.jpeg",
    description: "24-inch Full HD LED monitor with ultra-thin bezels.",
    quantity: 12,
    actualPrice: 12499,
    discountPrice: 10999
  },
  {
    id: 9,
    name: "DSLR Camera",
    category: "Electronics",
    image: "https://images.pexels.com/photos/51383/camera-lens-technology-reflex-51383.jpeg",
    description: "Professional DSLR camera with 24MP lens and Wi-Fi.",
    quantity: 8,
    actualPrice: 59999,
    discountPrice: 54999
  },
  {
    id: 10,
    name: "Power Bank",
    category: "Electronics",
    image: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg",
    description: "10000mAh power bank with fast charging support.",
    quantity: 40,
    actualPrice: 1999,
    discountPrice: 1599
  },
  {
    id: 11,
    name: "Air Conditioner",
    category: "Home Appliances",
    image: "https://images.pexels.com/photos/276672/pexels-photo-276672.jpeg",
    description: "1.5 Ton inverter AC with energy-efficient cooling.",
    quantity: 6,
    actualPrice: 35999,
    discountPrice: 32999
  },
  {
    id: 12,
    name: "Microwave Oven",
    category: "Home Appliances",
    image: "https://images.pexels.com/photos/8132/kitchen-cooking-interior-decor.jpg",
    description: "Convection microwave oven with auto-cook menu.",
    quantity: 10,
    actualPrice: 14999,
    discountPrice: 12999
  },
  {
    id: 13,
    name: "Refrigerator",
    category: "Home Appliances",
    image: "https://images.pexels.com/photos/3735347/pexels-photo-3735347.jpeg",
    description: "Double-door refrigerator with frost-free technology.",
    quantity: 7,
    actualPrice: 27999,
    discountPrice: 25999
  },
  {
    id: 14,
    name: "Washing Machine",
    category: "Home Appliances",
    image: "https://images.pexels.com/photos/3966549/pexels-photo-3966549.jpeg",
    description: "Front-load washing machine with inverter motor.",
    quantity: 5,
    actualPrice: 22999,
    discountPrice: 20999
  },
  {
    id: 15,
    name: "Vacuum Cleaner",
    category: "Home Appliances",
    image: "https://images.pexels.com/photos/4792497/pexels-photo-4792497.jpeg",
    description: "Bagless vacuum cleaner with strong suction power.",
    quantity: 14,
    actualPrice: 7999,
    discountPrice: 6999
  },
  {
    id: 16,
    name: "Coffee Maker",
    category: "Home Appliances",
    image: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg",
    description: "Automatic coffee machine with milk frother.",
    quantity: 9,
    actualPrice: 8999,
    discountPrice: 7499
  },
  {
    id: 17,
    name: "Mixer Grinder",
    category: "Home Appliances",
    image: "https://images.pexels.com/photos/3952043/pexels-photo-3952043.jpeg",
    description: "Multi-purpose mixer grinder with stainless steel jars.",
    quantity: 20,
    actualPrice: 5499,
    discountPrice: 4999
  },
  {
    id: 18,
    name: "Air Fryer",
    category: "Home Appliances",
    image: "https://images.pexels.com/photos/6546424/pexels-photo-6546424.jpeg",
    description: "Oil-free cooking with digital temperature control.",
    quantity: 15,
    actualPrice: 11999,
    discountPrice: 9999
  },
  {
    id: 19,
    name: "Electric Kettle",
    category: "Home Appliances",
    image: "https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg",
    description: "Stainless steel electric kettle with auto cut-off.",
    quantity: 22,
    actualPrice: 1999,
    discountPrice: 1599
  },
  {
    id: 20,
    name: "Induction Cooktop",
    category: "Home Appliances",
    image: "https://images.pexels.com/photos/674573/pexels-photo-674573.jpeg",
    description: "Smart induction cooktop with timer and auto-shut.",
    quantity: 18,
    actualPrice: 3999,
    discountPrice: 3499
  },
  {
    id: 21,
    name: "Men's Leather Jacket",
    category: "Fashion",
    image: "https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg",
    description: "Stylish leather jacket for men with zipper pockets.",
    quantity: 10,
    actualPrice: 4999,
    discountPrice: 4299
  },
  {
    id: 22,
    name: "Women's Handbag",
    category: "Fashion",
    image: "https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg",
    description: "Trendy handbag with spacious compartments.",
    quantity: 25,
    actualPrice: 2499,
    discountPrice: 1999
  },
  {
    id: 23,
    name: "Running Shoes",
    category: "Fashion",
    image: "https://images.pexels.com/photos/19090/pexels-photo.jpg",
    description: "Comfortable running shoes with breathable mesh.",
    quantity: 20,
    actualPrice: 2999,
    discountPrice: 2499
  },
  {
    id: 24,
    name: "Men's Wrist Watch",
    category: "Fashion",
    image: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg",
    description: "Analog wrist watch with leather strap.",
    quantity: 18,
    actualPrice: 3499,
    discountPrice: 2999
  },
  {
    id: 25,
    name: "Sunglasses",
    category: "Fashion",
    image: "https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg",
    description: "UV-protected stylish sunglasses.",
    quantity: 30,
    actualPrice: 1499,
    discountPrice: 1199
  },
  {
    id: 26,
    name: "Denim Jeans",
    category: "Fashion",
    image: "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg",
    description: "Slim fit denim jeans for everyday wear.",
    quantity: 35,
    actualPrice: 1999,
    discountPrice: 1699
  },
  {
    id: 27,
    name: "Women's Dress",
    category: "Fashion",
    image: "https://images.pexels.com/photos/2860814/pexels-photo-2860814.jpeg",
    description: "Elegant evening dress with modern design.",
    quantity: 12,
    actualPrice: 3499,
    discountPrice: 2999
  },
  {
    id: 28,
    name: "Casual T-Shirt",
    category: "Fashion",
    image: "https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg",
    description: "Cotton casual t-shirt with round neck.",
    quantity: 40,
    actualPrice: 899,
    discountPrice: 699
  },
  {
    id: 29,
    name: "Formal Shoes",
    category: "Fashion",
    image: "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg",
    description: "Classic formal shoes with leather finish.",
    quantity: 15,
    actualPrice: 3999,
    discountPrice: 3499
  },
  {
    id: 30,
    name: "Sports Cap",
    category: "Fashion",
    image: "https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg",
    description: "Adjustable sports cap with breathable fabric.",
    quantity: 28,
    actualPrice: 599,
    discountPrice: 499
  },
  {
    id: 31,
    name: "Yoga Mat",
    category: "Sports",
    image: "https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg",
    description: "Anti-slip yoga mat with extra cushioning.",
    quantity: 25,
    actualPrice: 1299,
    discountPrice: 999
  },
  {
    id: 32,
    name: "Cricket Bat",
    category: "Sports",
    image: "https://images.pexels.com/photos/163452/cricket-bat-ball-sport-163452.jpeg",
    description: "Lightweight cricket bat made with Kashmir willow.",
    quantity: 15,
    actualPrice: 2999,
    discountPrice: 2499
  },
  {
    id: 33,
    name: "Football",
    category: "Sports",
    image: "https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg",
    description: "Durable football with water-resistant outer cover.",
    quantity: 20,
    actualPrice: 899,
    discountPrice: 699
  },
  {
    id: 34,
    name: "Badminton Racket",
    category: "Sports",
    image: "https://images.pexels.com/photos/358042/pexels-photo-358042.jpeg",
    description: "Lightweight badminton racket with strong grip.",
    quantity: 22,
    actualPrice: 1599,
    discountPrice: 1299
  },
  {
    id: 35,
    name: "Tennis Ball",
    category: "Sports",
    image: "https://images.pexels.com/photos/226733/pexels-photo-226733.jpeg",
    description: "Pack of 3 professional tennis balls.",
    quantity: 40,
    actualPrice: 499,
    discountPrice: 399
  },
  {
    id: 36,
    name: "Dumbbells",
    category: "Sports",
    image: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg",
    description: "Pair of 5kg dumbbells for home workouts.",
    quantity: 18,
    actualPrice: 2499,
    discountPrice: 1999
  },
  {
    id: 37,
    name: "Skipping Rope",
    category: "Sports",
    image: "https://images.pexels.com/photos/4056724/pexels-photo-4056724.jpeg",
    description: "Adjustable skipping rope with soft grip handles.",
    quantity: 35,
    actualPrice: 399,
    discountPrice: 299
  },
  {
    id: 38,
    name: "Cycling Helmet",
    category: "Sports",
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg",
    description: "Protective cycling helmet with adjustable straps.",
    quantity: 12,
    actualPrice: 1499,
    discountPrice: 1199
  },
  {
    id: 39,
    name: "Basketball",
    category: "Sports",
    image: "https://images.pexels.com/photos/110383/pexels-photo-110383.jpeg",
    description: "Official size basketball with strong grip.",
    quantity: 15,
    actualPrice: 1199,
    discountPrice: 999
  },
  {
    id: 40,
    name: "Camping Tent",
    category: "Sports",
    image: "https://images.pexels.com/photos/699558/pexels-photo-699558.jpeg",
    description: "2-person waterproof camping tent.",
    quantity: 8,
    actualPrice: 4999,
    discountPrice: 4499
  },
  {
    id: 41,
    name: "Cookware Set",
    category: "Kitchen",
    image: "https://images.pexels.com/photos/276287/pexels-photo-276287.jpeg",
    description: "Non-stick cookware set with 5 pieces.",
    quantity: 14,
    actualPrice: 3999,
    discountPrice: 3499
  },
  {
    id: 42,
    name: "Dinner Set",
    category: "Kitchen",
    image: "https://images.pexels.com/photos/410999/pexels-photo-410999.jpeg",
    description: "24-piece ceramic dinner set.",
    quantity: 10,
    actualPrice: 2499,
    discountPrice: 1999
  },
  {
    id: 43,
    name: "Pressure Cooker",
    category: "Kitchen",
    image: "https://images.pexels.com/photos/4039846/pexels-photo-4039846.jpeg",
    description: "5-liter stainless steel pressure cooker.",
    quantity: 20,
    actualPrice: 2999,
    discountPrice: 2599
  },
  {
    id: 44,
    name: "Water Bottle",
    category: "Kitchen",
    image: "https://images.pexels.com/photos/134634/pexels-photo-134634.jpeg",
    description: "Insulated stainless steel water bottle.",
    quantity: 50,
    actualPrice: 799,
    discountPrice: 599
  },
  {
    id: 45,
    name: "Blender",
    category: "Kitchen",
    image: "https://images.pexels.com/photos/414553/pexels-photo-414553.jpeg",
    description: "High-speed blender for smoothies and shakes.",
    quantity: 16,
    actualPrice: 4999,
    discountPrice: 4499
  },
  {
    id: 46,
    name: "Knife Set",
    category: "Kitchen",
    image: "https://images.pexels.com/photos/952478/pexels-photo-952478.jpeg",
    description: "6-piece stainless steel knife set with stand.",
    quantity: 25,
    actualPrice: 1999,
    discountPrice: 1599
  },
  {
    id: 47,
    name: "Toaster",
    category: "Kitchen",
    image: "https://images.pexels.com/photos/218445/pexels-photo-218445.jpeg",
    description: "2-slice toaster with auto pop-up feature.",
    quantity: 12,
    actualPrice: 2499,
    discountPrice: 1999
  },
  {
    id: 48,
    name: "Chopping Board",
    category: "Kitchen",
    image: "https://images.pexels.com/photos/1359365/pexels-photo-1359365.jpeg",
    description: "Wooden chopping board for multipurpose use.",
    quantity: 30,
    actualPrice: 599,
    discountPrice: 399
  },
  {
    id: 49,
    name: "Frying Pan",
    category: "Kitchen",
    image: "https://images.pexels.com/photos/3952045/pexels-photo-3952045.jpeg",
    description: "Non-stick frying pan with heat-resistant handle.",
    quantity: 22,
    actualPrice: 1299,
    discountPrice: 999
  },
  {
    id: 50,
    name: "Electric Rice Cooker",
    category: "Kitchen",
    image: "https://images.pexels.com/photos/41123/electric-rice-cooker-41123.jpeg",
    description: "Automatic rice cooker with warm mode.",
    quantity: 10,
    actualPrice: 3499,
    discountPrice: 2999
  },
  {
    id: 51,
    name: "Fiction Novel",
    category: "Books",
    image: "https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg",
    description: "Bestselling fiction novel with hardcover edition.",
    quantity: 40,
    actualPrice: 799,
    discountPrice: 599
  }
]

// ------------------------------
// 2. RENDER PRODUCTS (DOM Creation)
// ------------------------------
const productContainer = document.getElementById("productContainer");

productContainer.innerHTML = products.map(item => `
  <div class="card">
    <img src="${item.image}" alt="${item.name}">
    <h2>${item.name}</h2>
    <p>
      <span style="color:blue; font-size:20px">₹${item.discountPrice}</span>
      <strike style="color:red; font-size:16px">₹${item.actualPrice}</strike>
    </p>
    <button class="${item.quantity === 0 ? "outOfStock" : "addToCart"}">
      ${item.quantity === 0 ? "Out of Stock" : "Add to Cart"}
    </button>
  </div>
`).join("");  // join() to remove commas

// ------------------------------
// 3. INSERT ELEMENT (insertBefore)
// ------------------------------
const promotionalBanner = document.createElement("p");
promotionalBanner.innerText = "🎉 10% off on Electronics!";
promotionalBanner.className = "pbanner";

document.body.insertBefore(promotionalBanner, productContainer);

// ------------------------------
// 4. REPLACE ELEMENT (replaceChild)
// ------------------------------
const domHeader = document.getElementById("domHeader");
const newHeader = document.createElement("h3");
newHeader.innerText = "📘 Document Object Model Example";
domHeader.replaceWith(newHeader);

const festiveOffer = document.createElement("p");
festiveOffer.innerText = "🔥 25% Off for Dussera!";
festiveOffer.className = "festivbanner";
document.body.replaceChild(festiveOffer, promotionalBanner);

// ------------------------------
// 5. REMOVE ELEMENT
// ------------------------------
// newHeader.remove();


// ------------------------------
// 1. CREATE ELEMENTS
// ------------------------------
const profilePic = document.createElement("img");
profilePic.src = "https://images.pexels.com/photos/29173977/pexels-photo-29173977.jpeg";
profilePic.alt = "ClockTower";

console.log("✅ Profile Picture:", profilePic);

const coverPicture = document.createElement("img");

// ------------------------------
// 2. SET ATTRIBUTE
// ------------------------------
coverPicture.setAttribute("src", "https://images.pexels.com/photos/28141259/pexels-photo-28141259.jpeg");
coverPicture.setAttribute("alt", "Glass Bridge");

console.log("✅ Cover Picture (with setAttribute):", coverPicture);

// ------------------------------
// 3. GET ATTRIBUTE
// ------------------------------
console.log("❌ Wrong Attribute (sr):", coverPicture.getAttribute("sr")); // null
console.log("✅ Correct Attribute (src):", coverPicture.getAttribute("src")); // actual URL

// ------------------------------
// 4. CHECK ATTRIBUTE
// ------------------------------
console.log("Does profilePic have 'class' attribute?", profilePic.hasAttribute("class")); // false

// ------------------------------
// 5. CLASS MANIPULATION
// ------------------------------

// Select an existing product card
const classPresence = document.querySelector(".card");
console.log("🎯 First product card before change:", classPresence);

// Change className (replaces all existing classes)
classPresence.className = "productCard";
console.log("After className overwrite:", classPresence.className);

// ------------------------------
// 6. CLASSLIST METHODS
// ------------------------------
const demoHeader = document.createElement("h3");
demoHeader.innerText = "Demo Header";

// Add multiple classes
demoHeader.classList.add("header", "highlight");
console.log("After add:", demoHeader.classList);

// Remove one class
demoHeader.classList.remove("highlight");
console.log("After remove:", demoHeader.classList);

// Toggle class (adds if missing, removes if present)
demoHeader.classList.toggle("header"); // removes
demoHeader.classList.toggle("header"); // adds back
console.log("After toggle twice:", demoHeader.classList);
