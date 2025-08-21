// =======================================================
// 📘 JavaScript Variable Naming Conventions — paste into app.js
// =======================================================

// Global Standards
// -------------------------------------------------------
// • camelCase        → variables & functions
// • PascalCase       → classes & constructor functions
// • UPPER_SNAKE_CASE → immutable config/constants
// • English, descriptive, and consistent naming
// • No spaces, hyphens, or starting with numbers
// • Avoid abbreviations unless universally known (id, URL, API)


// ✅ Good vs ❌ Bad
// -------------------------------------------------------
let userName = "Vamsi";           // ✅ clear camelCase
let itemCount = 0;                // ✅ describes *what* and that it's a count
const MAX_LOGIN_ATTEMPTS = 5;     // ✅ constant in UPPER_SNAKE_CASE
class OrderService {}             // ✅ PascalCase for class

// let User_name = "Vamsi";       // ❌ inconsistent casing & underscore
// let t = 0;                     // ❌ meaningless
// const MaxLoginAttempts = 5;    // ❌ wrong case for constant
// class orderservice {}          // ❌ wrong case for class


// 1) Booleans → prefix with is/has/can/should
// -------------------------------------------------------
let isLoggedIn = false;
let hasDiscount = true;
let canRetry = true;
let shouldSendEmail = false;

// let loggedIn = false;          // ❌ lacks boolean intent


// 2) Numbers & counts → use count/total/limit/min/max
// -------------------------------------------------------
let cartItemCount = 3;
let retryLimit = 3;
let maxSeats = 50;
let totalFare = 0;


// 3) Units & currency → suffix with unit
// -------------------------------------------------------
let delayMs = 250;                // milliseconds
let widthPx = 320;                // pixels
let priceInINR = 499;             // currency
let distanceKm = 12.5;

// let price = 499;                // ❌ unit/currency unclear


// 4) Dates & times → suffix At/On/Date/Time/ISO
// -------------------------------------------------------
let createdAt = new Date();
let updatedAt = new Date();
let journeyDate = "2025-09-01";
let eventTimeISO = "2025-08-21T15:00:00+05:30";


// 5) Arrays & collections → plural or suffix List/Array
// -------------------------------------------------------
let products = [];
let seatIds = [];
let movieTitles = [];
let orderItemsList = [];


// 6) Maps & lookups → suffix Map/ById/Index
// -------------------------------------------------------
let userById = { "42": { name: "A" } };
let fareMap = new Map();
let cityIndexByCode = { HYD: 0, BLR: 1 };


// 7) Functions → verbNoun(); do not use nouns alone
// -------------------------------------------------------
function calculateTotalFare() {}
function getUserName() {}
function updateOrderStatus() {}


// 8) Avoid reserved words & illegal chars
// -------------------------------------------------------
// let class = "x";               // ❌ reserved word
// let order-id = 1;              // ❌ hyphen not allowed
// let 2items = [];               // ❌ cannot start with number


// 9) File-level constants vs runtime values
// -------------------------------------------------------
const APP_NAME = "Learning JS";   // never changes
let currentTheme = "light";       // may change during runtime


// 10) Consistent domain prefixes (optional, but helpful in projects)
// -------------------------------------------------------
let apiBaseUrl = "https://api.example.com";
let uiTheme = "dark";
let dbConnectionUri = "mongodb://...";


// Mini Domain Examples (apply the same conventions consistently)
// -------------------------------------------------------
// Amazon-like
const PLATFORM_AMAZON = "Amazon";
let productTitle = "iPhone 16";
let productPriceInINR = 79999;
let isInStock = true;
let sellerRating = 4.7;
let cartItemIds = [101, 102];

// RedBus-like
const PLATFORM_REDBUS = "RedBus";
let sourceCity = "Hyderabad";
let destinationCity = "Bengaluru";
let availableSeatIds = [11, 12, 13];
let boardingTimeISO = "2025-09-01T22:00:00+05:30";
let ticketBaseFareInINR = 1199;

// Swiggy-like
const PLATFORM_SWIGGY = "Swiggy";
let restaurantName = "Paradise";
let foodItems = ["Chicken Biryani", "Gulab Jamun"];
let estimatedDeliveryMins = 30;
let hasCouponApplied = false;
let orderTotalInINR = 650;


// Anti-patterns with quick fixes
// -------------------------------------------------------
let a = 5;                 // ❌ unclear
let maxRetries = 5;        // ✅ clear

let list = [];             // ❌ vague
let restaurantIds = [];    // ✅ specific plural

let data = {};             // ❌ meaningless
let bookingDetails = {};   // ✅ meaningful


// Optional (for later): automate with linters
// -------------------------------------------------------
// • ESLint + @typescript-eslint/naming-convention or eslint-plugin-unicorn
// • Prettier for formatting consistency
