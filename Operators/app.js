// =====================
// Operators in JavaScript
// =====================

// Operators help us perform operations on variables and values.
// Different categories: Arithmetic, Assignment, Comparison, Logical, Increment/Decrement, Typeof, Ternary, Spread & Rest

// ---------------------
// 1. Arithmetic Operators (+, -, *, /, %, **)
// ---------------------

let num1 = "1000A";
let num2 = 200;

console.log(`
--- Arithmetic Operators ---
num1 + num2 : ${num1 + num2}    // Concatenation -> "1000A200"
num1 - num2 : ${num1 - num2}    // NaN (since "1000A" is invalid number)
2000 - num2 : ${2000 - num2}    // 1800
num2 * 10   : ${num2 * 10}      // 2000
num2 / 4    : ${num2 / 4}       // 50
num2 % 3    : ${num2 % 3}       // 2
2 ** 3      : ${2 ** 3}         // 8
`);

// ✅ Real-time Example (E-commerce: Calculating total price with discount)
let price = 1200;
let quantity = 3;
let discount = 200;
let totalAmount = (price * quantity) - discount;
console.log(`Total payable after discount: ₹${totalAmount}`);


// ---------------------
// 2. Assignment Operators (=, +=, -=, *=, /=, %=)
// ---------------------

let cartValue = 0;

cartValue += 999; // adding product to cart
cartValue -= 99;  // applying coupon
cartValue *= 2;   // adding one more similar cart
cartValue /= 4;   // splitting bill into 4 friends
cartValue %= 2;   // remainder
console.log("\n--- Assignment Operators ---");
console.log("Final Cart Value: ", cartValue);

// ✅ Real-time Example (Wallet System)
let wallet = 500;
wallet += 200; // add money
wallet -= 100; // purchase
console.log(`Wallet Balance: ₹${wallet}`);


// ---------------------
// 3. Comparison Operators (>, <, >=, <=, ==, ===, !=)
// ---------------------

let num3 = 3000;
let num4 = 2000;
let num5 = 2000;

console.log(`
--- Comparison Operators ---
num4 > num5  : ${num4 > num5}
num4 < num5  : ${num4 < num5}
num4 >= num5 : ${num4 >= num5}
num4 <= num5 : ${num4 <= num5}
num4 == num5 : ${num4 == num5}   // true (checks only value)
num4 === num5: ${num4 === num5}  // true (checks value + type)
num4 != num5 : ${num4 != num5}
`);

// ✅ Real-time Example (Age Verification)
let userAge = 17;
if (userAge >= 18) {
    console.log("Eligible to vote.");
} else {
    console.log("Not eligible to vote.");
}


// ---------------------
// 4. Logical Operators (&&, ||, !)
// ---------------------

// Truth Table reminder:
/*
    A   B   A&&B   A||B   !A
    0   0    0      0     1
    0   1    0      1     1
    1   0    0      1     0
    1   1    1      1     0
*/

console.log("\n--- Logical Operators ---");
console.log(true && true || false); // true

// ✅ Real-time Example (Login System)
let email = "test@gmail.com";
let password = "12345";
if (email === "test@gmail.com" && password === "12345") {
    console.log("Login Successful ✅");
} else {
    console.log("Invalid Credentials ❌");
}


// ---------------------
// 5. Increment & Decrement Operators (++ / --)
// ---------------------

let a = 10;
let b = a--;
console.log("\n--- Increment/Decrement Operators ---");
console.log(`a = ${a}, b = ${b}`);

// ✅ Real-time Example (Ticket Booking System)
let tickets = 5;
console.log("Ticket booked, Remaining: ", --tickets);

// ---------------------
// 6. Typeof Operator
// ---------------------

let phoneNumber = "asdfghjkl";
phoneNumber = 9123456789;
console.log("\n--- Typeof Operator ---");
console.log(typeof(phoneNumber));  // number

// ✅ Mini Project: Dynamic Form Validation
function validateField(input) {
    if (typeof input === "string") {
        console.log("You entered a text field 📄");
    } else if (typeof input === "number") {
        console.log("You entered a number field 🔢");
    } else {
        console.log("Unknown input ❓");
    }
}
validateField("Hello");
validateField(123);


// ---------------------
// 7. Ternary Operator (? : )
// ---------------------

let employeeAge = 34;
employeeAge >= 21 
    ? console.log(`✅ Eligible`) 
    : console.log(`❌ Not Eligible`);

// ✅ Mini Project: Login/Logout Button
let isLoggedIn = true;
console.log(isLoggedIn ? "Logout" : "Login");


// ---------------------
// 8. Spread Operator (...)
// ---------------------

// ✅ Spread with Arrays
const voterListOne = ["Vamsee", "Krishna", "Ram", "Krish", "Yash"];
const voterListTwo = ["Manu", "Adwaith", "Sreeshanth", "Arun"];

const finalVoterList = [...voterListOne, ...voterListTwo, ...voterListOne];
console.log("\n--- Spread Operator (Arrays) ---");
console.log(finalVoterList);

// ✅ Spread with Objects
const userInfo = {
    firstName : "G Vamsi",
    lastName : "Krishna",
    age : 27,
    location : "Hyd"
}

const employeeInfo = {
    ...userInfo,
    employeeId : 227858,
    employeeExp : 6,
    ...userInfo // overwrites duplicate keys
}

console.log("\n--- Spread Operator (Objects) ---");
console.log(employeeInfo);

// ✅ Mini Project: Online Store (Merge Product Details)
const productDetails = { id: 101, name: "Laptop", price: 45000 };
const extraDetails = { brand: "Dell", warranty: "2 Years" };

const finalProduct = { ...productDetails, ...extraDetails, stock: 20 };
console.log("Final Product Object:", finalProduct);
