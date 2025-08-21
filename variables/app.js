// =======================================================
// 📘 JavaScript Variables Notes
// =======================================================

// A variable is a container used to store information or data.

// ES5 way:
var oldVariable = "I am var"; 

// ES6 (2015) way: (Preferred in modern JS)
let modernVariable = "I am let";
const fixedVariable = "I am const";

// ----------------------
// Declaration: Just creating a variable
let username;  

// Initialization: Assigning a value for the first time
username = "Vamsi";  

// Reinitialization: Changing the value (works with var, let)
username = "Krishna";  

// Redeclaration: Declaring again
var age = 25;
var age = 26; // ✅ Works with var
// let age = 30; ❌ Error (Cannot redeclare)
// const age = 40; ❌ Error (Cannot redeclare)

// ----------------------
// Summary
// var   -> Can be reinitialized & redeclared
// let   -> Can be reinitialized but ❌ NOT redeclared
// const -> ❌ Cannot be reinitialized or redeclared


// =======================================================
// 📱 Application Based Variables
// =======================================================

// 1️⃣ Amazon (E-commerce)
let productName = "iPhone 16";
let productPrice = 79999;
let productStock = 120;
let userCartItems = 3;
const amazonPlatform = "Amazon";

console.log("Amazon Variables:", productName, productPrice, productStock, userCartItems, amazonPlatform);


// 2️⃣ Netflix (Streaming Platform)
let movieName = "Inception";
let userSubscriptionPlan = "Premium";
let watchTime = 120; // minutes watched
let userProfiles = 4;
const netflixPlatform = "Netflix";

console.log("Netflix Variables:", movieName, userSubscriptionPlan, watchTime, userProfiles, netflixPlatform);


// 3️⃣ RedBus (Bus Booking App)
let sourceCity = "Hyderabad";
let destinationCity = "Bangalore";
let ticketPrice = 1200;
let availableSeats = 45;
const redbusPlatform = "RedBus";

console.log("RedBus Variables:", sourceCity, destinationCity, ticketPrice, availableSeats, redbusPlatform);


// 4️⃣ Flipkart (E-commerce)
let category = "Electronics";
let discountPercentage = 15;
let deliveryDays = 3;
let userWishlistCount = 7;
const flipkartPlatform = "Flipkart";

console.log("Flipkart Variables:", category, discountPercentage, deliveryDays, userWishlistCount, flipkartPlatform);


// 5️⃣ Zomato (Food Delivery App)
let restaurantName = "Paradise Biryani";
let foodItem = "Chicken Biryani";
let orderAmount = 450;
let deliveryTime = "30 mins";
const zomatoPlatform = "Zomato";

console.log("Zomato Variables:", restaurantName, foodItem, orderAmount, deliveryTime, zomatoPlatform);


// =======================================================
// 🎯 Practice Tasks for Students
// =======================================================

// 1. Create 5 new variables for YouTube app 
//    Example: channelName, subscribers, videoCount, isVerified, totalViews

// 2. Try declaring variables using var, let, const and test redeclaration/reinitialization

// 3. Print all variables in console and observe the differences

// =======================================================

