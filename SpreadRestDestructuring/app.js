// ======================================================================
// 🌟 SPREAD, REST, AND DESTRUCTURING IN JAVASCRIPT
// ======================================================================

// -------------------------------
// 🧩 SPREAD OPERATOR (...)
// -------------------------------

// ➤ Definition:
//     The Spread Operator expands (spreads) the elements of an array or object
//     into individual values.

// ➤ Syntax:
//     const newArray = [...oldArray];
//     const newObject = {...oldObject};

// ➤ Why Spread?
//     ✅ To copy arrays/objects without mutating the original
//     ✅ To merge arrays or objects
//     ✅ To pass multiple values to a function
//     ✅ To simplify immutability updates (especially in React)

// -------------------------------
// 📘 Spread with Arrays
// -------------------------------
const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8];

const finalArray = [...arr1, ...arr2, ...arr1];
console.log("Final Array:", finalArray);
console.log("Original arr1:", arr1);
console.log("Original arr2:", arr2);

// -------------------------------
// 📘 Spread with Objects
// -------------------------------
const userInfo = {
  firstName: "G Vamsi",
  lastName: "Krishna",
  age: 27
};

const employeeInfo = {
  ...userInfo,
  companyName: "TCS",
  location: "Hyd",
  age: 28 // overwrites existing key
};

console.log("Employee Info:", employeeInfo);

// -------------------------------
// 📘 Real-Time Example (Frontend)
// -------------------------------
const localProducts = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Phone" }
];

const apiProducts = [
  { id: 3, name: "Tablet" },
  { id: 4, name: "Camera" }
];

const allProducts = [...localProducts, ...apiProducts];
console.log("All Products:", allProducts);

// -------------------------------
// 📘 Real-Time Example (Backend Config)
// -------------------------------
const defaultConfig = { port: 5000, logging: true };
const envConfig = { port: 8000 };

const finalConfig = { ...defaultConfig, ...envConfig };
// If keys match, later ones overwrite earlier ones
console.log("Final Config:", finalConfig);

// -------------------------------
// 📘 Function Arguments Example
// -------------------------------
function multiply(a, b, c) {
  return a * b * c;
}

const nums = [2, 3, 4];
console.log("Multiply Result:", multiply(...nums)); // Spread converts array → args

// ======================================================================
// 🌐 REST OPERATOR (...)
// ======================================================================

// ➤ Definition:
//     The Rest Operator collects multiple elements into a single array or object.
//     (Opposite of Spread)

// ➤ Syntax:
//     function demo(...args) { }          // Function parameters
//     const [a, ...rest] = [1,2,3,4];     // Array destructuring
//     const {x, ...restObj} = obj;        // Object destructuring

// ➤ Why Rest?
//     ✅ Handle an unknown number of arguments
//     ✅ Group remaining values together
//     ✅ Used in React props and utility functions

// -------------------------------
// 📘 Example 1: Function Parameters
// -------------------------------
function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}

console.log("Sum:", sum(20, 40, 60)); // 120

// -------------------------------
// 📘 Example 2: Array Rest
// -------------------------------
const products = ["Laptop", "Mouse", "Keyboard", "Charger"];
const [mainProduct, ...relatedProducts] = products;

console.log("Main Product:", mainProduct);
console.log("Related Products:", relatedProducts);

// -------------------------------
// 📘 Example 3: Object Rest
// -------------------------------
const employee = {
  id: 101,
  name: "Vamsi",
  role: "Developer",
  salary: 50000,
  location: "Hyderabad"
};

const { name, role, ...otherDetails } = employee;
console.log("Name:", name);
console.log("Role:", role);
console.log("Other Details:", otherDetails);

// ======================================================================
// 🧭 DESTRUCTURING
// ======================================================================

// ➤ Definition:
//     Destructuring allows extracting values from arrays or objects
//     into individual variables easily.

// ➤ Why Destructuring?
//     ✅ Makes code cleaner and shorter
//     ✅ Easy to access nested data
//     ✅ Common in React (props, state) & API responses

// -------------------------------
// 📘 Array Destructuring
// -------------------------------
const colors = ["red", "green", "blue"];
const [primary, secondary, tertiary] = colors;

console.log("Primary:", primary);
console.log("Secondary:", secondary);
console.log("Tertiary:", tertiary);

// ➤ Skipping values
const [first, , third] = ["a", "b", "c"];
console.log("Skipped Example:", first, third); // a c

// -------------------------------
// 📘 Object Destructuring
// -------------------------------
const user = {
  id: 101,
  name: "Vamsee",
  role: "ReactJs Developer",
  companyName: "PariTech",
  location: "Hyderabad"
};

// Using alias + rest operator together
const { name: userName, role: jobRole, ...restDetails } = user;
console.log("User Name:", userName);
console.log("Job Role:", jobRole);
console.log("Rest Details:", restDetails);

// -------------------------------
// 📘 Nested Object Destructuring
// -------------------------------
const student = {
  id: 1,
  name: "Nikhil",
  address: {
    city: "Hyderabad",
    pincode: 500001
  },
  scores: {
    math: 95,
    science: 90
  }
};

const {
  name: studentName,
  address: { city, pincode },
  scores: { math, science }
} = student;

console.log("Student Name:", studentName);
console.log("City:", city);
console.log("Pincode:", pincode);
console.log("Math:", math);
console.log("Science:", science);

// ======================================================================
// ✅ SUMMARY
// ======================================================================
// 1️⃣ Spread: Expands elements (copies, merges, passes values)
// 2️⃣ Rest: Collects multiple values into one
// 3️⃣ Destructuring: Extracts data from arrays/objects
// ======================================================================
