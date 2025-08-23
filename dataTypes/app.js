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

// ---- undefined ----
// A variable declared but not assigned any value
let myAddress;
console.log(myAddress);        // undefined
console.log(typeof myAddress); // undefined


// ---- null ----
// Represents intentional empty value
let middleName = null;
console.log(middleName);        // null
console.log(typeof middleName); // object (special case in JS)


// ---- BigInt ----
// Used for numbers beyond safe integer limit
let bigNumber = 1234567890123456789012345678901234567890n;
console.log(typeof bigNumber);  // bigint


// ---- Symbol ----
// Unique and immutable identifier
let id1 = Symbol("userID");
let id2 = Symbol("userID");

console.log(id1 === id2); // false (symbols are always unique)


// =========================
// 2. Non-Primitive (Reference) Data Types
// =========================

// These are mutable and can store collections or multiple values.


// ---- Array ----
// Ordered collection of items
let courses = ["HTML", "CSS", "JavaScript", "React"];
console.log(typeof courses);  // object
console.log(courses[2]);      // JavaScript


// ---- Object ----
// Key-value pairs
let user = {
    name: "Vamsi",
    age: 27,
    email: "vamsi@example.com",
    isPremium: true
};
console.log(user.name);  // Vamsi
console.log(user["age"]); // 27


// ---- Array of Objects ----
// Collection of multiple objects
let products = [
    { id: 1, name: "iPhone 15", price: 79999 },
    { id: 2, name: "Samsung S23", price: 69999 },
    { id: 3, name: "OnePlus 12", price: 49999 }
];

console.log(products[1].name); // Samsung S23


// ---- Function ----
// Function is also a data type in JS
function greetUser(userName) {
    return `Hello, ${userName}! Welcome back!`;
}

console.log(greetUser("Vamsi")); // Hello, Vamsi! Welcome back!


// =========================
// Summary
// =========================

// Primitive (Single values):
// - number, string, boolean, undefined, null, bigint, symbol

// Non-Primitive (Collections/Objects):
// - array, object, array of objects, function

// Key Difference:
// Primitive values are stored directly in memory.
// Non-Primitive values store a reference (address) to the memory location.



// NonPrimitive : 

// Array : is nothing but collection of values stored to a single variable which can be of same DT or diff DT.

    const userDetails = ["VamsiKrishna", 27, "abc@gmail.com", true, null];
//                              0        1          2           3     4

    // userDetails.push("Hyderabad");

    for(let i = 0; i<userDetails.length; i++){
        console.log(`${userDetails[i]}`);
    }


    console.log(userDetails.length);


// Object : is nothing but collection of values, it will be stored interms of key value pairs.


    const userInfo = {
        firstName : "KrishnaVamsi",
        lastName : "Galeti",
        age : 27,
        email : "abc@gmail.com",
        location : "Hyderabad"
    };

    userInfo.experience = "6";

    console.log(userInfo["lastName"]);


// Array of Object :

const users = [
    {
        name : "Vamsee Krishna",
        age : 27,
        company : "AchieversIT",
        designation : "Tutor",
        exp : 6
    }, 
    {
        name : "Anjali Sharma",
        age : 25,
        company : "Infosys",
        designation : "Software Engineer",
        exp : 3
    }, 
    {
        name : "Rohit Verma",
        age : 30,
        company : "TCS",
        designation : "Team Lead",
        exp : 8
    }, 
    {
        name : "Sneha Reddy",
        age : 28,
        company : "Wipro",
        designation : "UI/UX Designer",
        exp : 5, 
        skills : ["HTML", "CSS", "Bootstrap", "TailwindCSS", "Canva", "Adobe"]
    }
];


console.log(users[2].name + " | " + users[2].designation);

console.log(users[3].skills[2]);





