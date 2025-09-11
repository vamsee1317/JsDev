// ======================================================
// 🚀 Functions in JavaScript
// ======================================================

// A function is a reusable block of code that performs a specific task.
// It helps in avoiding repetition, makes code modular, and improves readability.


// ======================================================
// 🔹 Function Definition
// ======================================================

// A function is defined once and can be invoked (called) multiple times.

function functionName(parameters) {
    // code to be executed
    return "result"; // optional
}


// Example: Greeting Function
function greet(name, age) { // Function Declaration
    console.log(`Hello, ${name ?? 'Guest'}! You are ${age ?? 'unknown age'} years old.`);
}

// Function Calls
greet("Vamseee", 27); // ✅ With arguments
greet();              // ✅ Without arguments → uses default handling

// Output:
// Hello, Vamseee! You are 27 years old.
// Hello, Guest! You are unknown age years old.


// ======================================================
// 🔹 Types of Functions in JavaScript
// ======================================================

// -----------------------------
// 1️⃣ Function Declaration
// -----------------------------
// - Declared with the `function` keyword.
// - ✅ Hoisted (can be called before they are defined).

function add(a, b) {
    return a + b; // return stops execution, so console.log after this won't run
}

const sum = add(5, 3);
console.log("Function Declaration:", sum); // 8

// ======================================================
// 🔹 Functions with Default Parameters
// ======================================================
//
// - Introduced in ES6
// - Allows you to set default values for parameters if no argument is passed.
// - Prevents "undefined" values when arguments are missing.
// - Syntax: function fn(param = defaultValue) {}
//
// Example: Greeting with default values

function greetUser(name = "Guest", age = "unknown age") {
    console.log(`Hello, ${name}! You are ${age} years old.`);
}

// Function Calls
greetUser("Vamseee", 27); // ✅ Arguments provided
greetUser("John");        // ✅ Only one argument, second uses default
greetUser();              // ✅ No arguments, both defaults used

// Output:
// Hello, Vamseee! You are 27 years old.
// Hello, John! You are unknown age years old.
// Hello, Guest! You are unknown age years old.


// -----------------------------
// 2️⃣ Function Expression
// -----------------------------
// - A function assigned to a variable.
// - ❌ Not hoisted (must be defined before calling).
// - Can be named or anonymous.

const multiply = function (a, b) { // Anonymous Function Expression
    return a * b;
};

const product = multiply(4, 6);
console.log("Function Expression:", product); // 24

// Named function expression
const multiplyNamed = function pro(a, b) {
    return a * b;
};
console.log("Named Function Expression:", multiplyNamed(2, 3)); // 6


// -----------------------------
// 3️⃣ Arrow Function (ES6)
// -----------------------------
// - Compact syntax, often used for callbacks.
// - ⚡ Does not have its own `this`.
// - ❌ Not hoisted.


// Implicit return (one-liner)
const divide = (a, b) => a / b;
console.log("Arrow Function (implicit):", divide(20, 4)); // 5

// Explicit return (multi-line)
const square = (x) => {
    return x * x;
};
console.log("Arrow Function (explicit):", square(5)); // 25


// ======================================================
// 🔹 Key Differences
// ======================================================
//
// Function Declaration -> ✅ Hoisted, reusable
// Function Expression  -> ❌ Not hoisted, can be named or anonymous
// Arrow Function       -> ❌ Not hoisted, short syntax, no own `this`
//
// | Type                 | Hoisting | Syntax Style                  | Best Use Case |
// | -------------------- | -------- | ----------------------------- | ------------- |
// | Function Declaration | ✅ Yes    | function add(a,b){}           | Reusable, general purpose |
// | Function Expression  | ❌ No     | const add = function(a,b){}   | Assign functions as values |
// | Arrow Function       | ❌ No     | const add = (a,b) => a+b      | Short callbacks, modern syntax |


// ======================================================
// 🔹 Real-World Example: Shopping Cart
// ======================================================

// Function Declaration
function addToCart(item) {
    console.log(`${item} added to cart`);
}

// Function Expression
const calculateTotal = function (prices) {
    return prices.reduce((sum, price) => sum + price, 0);
};

// Arrow Function
const applyDiscount = (total, discount) => total - (total * discount) / 100;

// Usage
addToCart("Laptop");

const total = calculateTotal([1000, 2000, 500]);
console.log("Total:", total); // 3500

const discounted = applyDiscount(total, 10);
console.log("After Discount:", discounted); // 3150

// 4. Anonymous Function :
// - A function without a name, often used as an argument to other functions or assigned to variables.
// Example:
setTimeout(function () {
    console.log("This is an anonymous function executed after 2 seconds");
}, 2000);

// 5. IIFE (Immediately Invoked Function Expression):
// - A function that runs as soon as it is defined.
// Example:
(function () {
    console.log("This is an IIFE, executed immediately upon definition");
})();
// 6. Recursive Function
// 7. Callback Function :
// Step 1: Define a register function that accepts user data and a callback
function registerUser(userData, callback) {
    console.log("Registering user...");

    // Simulating async operation like API/database save
    setTimeout(() => {
        console.log("✅ Registration successful for:", userData.username);

        // After registration, call the callback function and pass credentials
        callback({
            username: userData.username,
            email: userData.email,
            password: userData.password   // (In real projects, don't expose raw passwords)
        });
    }, 2000);
}

// Step 2: Define a callback function to share credentials
function shareCredentials(credentials) {
    console.log("\n📢 Sharing Credentials:");
    console.log("Username:", credentials.username);
    console.log("Email:", credentials.email);
    console.log("Password:", credentials.password);
}

// Step 3: Call registerUser and pass shareCredentials as callback
registerUser(
    {
        username: "vamsi123",
        email: "vamsi@example.com",
        password: "SecurePass@123"
    },
    shareCredentials
);


// 8. Higher-Order Function
// 9. Generator Function
// 10. Async Function





// Function Syntax :

// Function Declaration :
function greet(){
    console.log(`Hello, World!`);
}
greet();

// Function Expression :
const greetExp = function(){
    console.log(`Hello, World!`);
}

greetExp();

// Arrow Function :

const greetArrow = () => {
    console.log(`Hello, World!`);
}

greetArrow();

// Function with Parameters and Arguments :

function greetUser(name, age){
    console.log(`Hello, ${name}! You are ${age} years old.`);
}

greetUser("Vamseee", 27); // Arguments
greetUser("Alice", 30);   // Arguments
greetUser();              // No arguments, will be undefined

// Function with Return Statement :

function add(a, b){
    return a + b; // return stops execution, so console.log after this won't run
    console.log("This won't be logged");
}

console.log(add(5, 3));

const result = add(10, 15);
console.log(result);

// Function with Default Parameters :

function greetWithDefaults(name = "Guest", age = "unknown age"){
    console.log(`Hello, ${name}! You are ${age} years old.`);
}

greetWithDefaults("Vamseee", 27); // Arguments
greetWithDefaults("John");        // One argument, second uses default
greetWithDefaults();              // No arguments, both defaults used

// Callback Function : 
// passing function as an argument to another function

function register(name, cb){
    console.log("Registering user...");
    console.log(`User ${name} registered successfully!`);
    cb(); // callback function
}


function sendDetails(){
    console.log("Sending details...");
    console.log("Details sent successfully!");
}

register("Vamseee", sendDetails); // passing function as argument


// IIFE (Immediately Invoked Function Expression) :

((name, age)=>{
    console.log("This is an IIFE, executed immediately upon definition");
    console.log(`Hello, ${name} ! You are ${age} years old.`);
})("Vamseee", 27); // passing arguments


// SetTimeout function : 


setTimeout(()=>{
    console.log(`This is a delayed message`);
}, 5000); // 5000 milliseconds = 5 seconds


// SetInterval function :

// Run a timer for 60 second

// let seconds = 0;

// setInterval(()=>{
//     if(seconds < 60){
//         seconds++;
//         console.log(`Timer: ${seconds} seconds`);
//     } else {
//         console.log("Timer completed!");
//     }
// }, 1000); // 3000 milliseconds = 3 seconds


// Run a timer for 60 seconds and then clear the interval

let seconds = 0;

const intervalId = setInterval(()=>{
    if(seconds < 60){
        seconds++;
        console.log(`Timer: ${seconds} seconds`);
    } else {
        console.log("Timer completed!");
        clearInterval(intervalId); // Clear the interval
    }
}, 1000); // 1000 milliseconds = 1 second