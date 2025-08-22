// =========================
// JavaScript - Introduction
// =========================

// JavaScript (JS) is a scripting language that converts static webpages into dynamic webpages.
// It helps us to add functionality, interactivity, and validations to webpages.
// JS is a dynamically typed programming language. (No need to specify datatype explicitly.)
// JS is an interpreted language. (Executed line by line by the browser or Node.js runtime.)
// Introduced by Brendan Eich in 1995 (originally named Mocha, then LiveScript, and later JavaScript).


// =========================
// JavaScript Variables
// =========================

// A variable is nothing but a storage container used to store information or data.
// Syntax : keyword variableName = value;

// Keywords for creating a variable in JS: 

// ES5 :
//   var        -> Function-scoped, redeclaration allowed, can be reassigned

// ES6 (2015) :
//   let        -> Block-scoped, no redeclaration in same scope, can be reassigned
//   const      -> Block-scoped, no redeclaration, cannot be reassigned


// =========================
// Variable Examples
// =========================

// Declaration - creating a container (no value yet)
let userName;
console.log("Declared userName: ", userName); // Output: undefined

// Assigning - adding a value to the container
userName = "Javascript";
console.log("Assigned userName: ", userName); // Output: Javascript

// Reassigning - modifying a value from the container
userName = "JS";
console.log("Reassigned userName: ", userName); // Output: JS

// Redeclaration (Not allowed with let/const, only possible with var)
let userName1 = "Java";
console.log("New variable userName1: ", userName1); // Output: Java


// =========================
// Const Variables
// =========================

// const variable: Value remains constant (cannot be reassigned).
// Note: Declaration and Initialization should happen on the same line.

const fullName = "Galeti Vamsi Krishna";
let email = "abc@gmail.com";
const dateOfBirth = "DDMMYYYY";
let userAge = 26;

console.log("Full Name: ", fullName);
console.log("Email: ", email);
console.log("Date of Birth: ", dateOfBirth);
console.log("Age: ", userAge);


// =========================
// Real-Time Example: RedBus App
// =========================

// Here we are simulating variables for a bus booking app like RedBus.

let sourceCity = "Hyderabad";
let destinationCity = "Bengaluru";
const brandName = "RedBus";
let busFare = 999;

// Printing booking details
console.log("Booking Details:");
console.log("Brand: ", brandName);
console.log("Source City: ", sourceCity);
console.log("Destination City: ", destinationCity);
console.log("Bus Fare: ₹", busFare);

// Updating values
busFare = 1199; // Reassign allowed with let
console.log("Updated Bus Fare: ₹", busFare);

// brandName = "NewBus"; // ❌ Error: Assignment to constant variable

// =========================
// Summary
// =========================
// - Use `let` when you expect value changes.
// - Use `const` when the value must remain constant.
// - Avoid using `var` (older practice) because of scoping issues.


// =========================
// Example 1: E-Commerce App (Flipkart / Amazon)
// =========================

// Variables to hold product information
const storeName = "Flipkart";
let productName = "iPhone 15";
let productPrice = 79999;
let isAvailable = true;
let productRating = 4.8;
let productStock = 25;

console.log("===== E-Commerce App =====");
console.log("Store: ", storeName);
console.log("Product: ", productName);
console.log("Price: ₹", productPrice);
console.log("Available: ", isAvailable);
console.log("Rating: ", productRating, "⭐");
console.log("Stock Left: ", productStock);

// Update stock after a purchase
productStock = productStock - 1;
console.log("Updated Stock After Purchase: ", productStock);


// =========================
// Example 2: Food Delivery App (Zomato / Swiggy)
// =========================

// Variables to hold order details
const appName = "Zomato";
let restaurantName = "Mehfil Restaurant";
let foodItem = "Biryani";
let foodPrice = 250;
let deliveryFee = 40;
let totalBill = foodPrice + deliveryFee;

console.log("\n===== Food Delivery App =====");
console.log("App: ", appName);
console.log("Restaurant: ", restaurantName);
console.log("Food Item: ", foodItem);
console.log("Food Price: ₹", foodPrice);
console.log("Delivery Fee: ₹", deliveryFee);
console.log("Total Bill: ₹", totalBill);


// =========================
// Example 3: Banking Application
// =========================

// Variables to store user account details
const bankName = "HDFC Bank";
let accountHolder = "Vamsi Krishna";
let accountBalance = 50000;
let depositAmount = 10000;

// Deposit operation
accountBalance = accountBalance + depositAmount;

console.log("\n===== Banking App =====");
console.log("Bank: ", bankName);
console.log("Account Holder: ", accountHolder);
console.log("Balance After Deposit: ₹", accountBalance);

// Withdraw operation
let withdrawAmount = 12000;
accountBalance = accountBalance - withdrawAmount;
console.log("Balance After Withdrawal: ₹", accountBalance);


// =========================
// Example 4: OTT App (Netflix / Prime Video)
// =========================

// Variables to hold movie details
const platformName = "Netflix";
let movieTitle = "Inception";
let genre = "Sci-Fi";
let duration = "2h 28m";
let isPremium = true;

console.log("\n===== OTT App =====");
console.log("Platform: ", platformName);
console.log("Movie: ", movieTitle);
console.log("Genre: ", genre);
console.log("Duration: ", duration);
console.log("Premium Content: ", isPremium);


// =========================
// Summary
// =========================
// Variables help us store and manage data dynamically in any application.
// - E-Commerce → Product details
// - Food Delivery → Order details
// - Banking → Account transactions
// - OTT → Movie/Show details
