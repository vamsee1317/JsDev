// =========================
// JavaScript Data Types
// =========================

// Data Types define the type of value that can be stored inside a variable.
// In JavaScript, data types are divided into 2 categories:
// 1. Primitive Data Types
// 2. Non-Primitive (Reference) Data Types


// =========================
// 1. Primitive Data Types
// =========================

// These are immutable and store single values.

// ---- number ----
let phoneNumber = 9123456789;       // integer
let userAge = 23;                   // integer
const aadharNumber = 123443211234;  // large number
let productPrice = 199.99;          // decimal

console.log(typeof aadharNumber);   // number
console.log(typeof productPrice);   // number


// ---- string ----
const fullName = "Galeti Vamsi Krishna"; // double quotes
let city = 'Hyderabad';                  // single quotes
let email = `abc@gmail.com`;             // backticks (template literals)

console.log(typeof fullName); // string


// ---- boolean ----
let isLoggedIn = true;
let isVerified = false;

console.log(typeof isLoggedIn); // boolean