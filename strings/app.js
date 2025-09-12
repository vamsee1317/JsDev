// Strings : 

// Sequence of characters or collection of characters enclosed in single or double quotes

// Creating Strings
let str1 = 'Hello, World!'; // Using single quotes
let str2 = "Hello, World!"; // Using double quotes
let str3 = `Hello, World!`; // Using backticks (template literals)

// String Properties and Methods
let sampleString = "JavaScript is awesome!";

// Length property
console.log(sampleString.length); // Output: 22

// Accessing characters
console.log(sampleString[21]); // Output: J

// Common String Methods : 

// 1. toUpperCase() and toLowerCase()
console.log(sampleString.toUpperCase()); // Output: "JAVASCRIPT IS AWESOME!"
console.log(sampleString.toLowerCase()); // Output: "javascript is awesome!"

// 2. indexOf() and lastIndexOf()
console.log(sampleString.indexOf('a')); // Output: 1
console.log(sampleString.lastIndexOf('a')); // Output: 14
console.log(sampleString.indexOf('z')); // Output: -1 (not found)

// "JavaScript is awesome!"

// 3. slice(), substring(), and substr()
console.log(sampleString.slice(0, 10)); // Output: "JavaScript"
console.log(sampleString.substring(0, 10)); // Output: "JavaScript"
console.log(sampleString.substr(0, 10)); // Output: "JavaScript"
console.log(sampleString.slice(-8)); // Output: "awesome!"


const lang = sampleString.substring(0);
console.log(lang); // Output: "JavaScript"

// 4. replace()
let newString = sampleString.replace(/awesome/ig, 'fantastic');
console.log(newString); // Output: "JavaScript is fantastic!"

// 5. split()
let words = sampleString.split(" ");
console.log(words); // Output: ["JavaScript", "is", "awesome!"]

// 6. trim()
let stringWithSpaces = "   Hello,       World!   ";
console.log(stringWithSpaces); // Output: "   Hello, World!   "
console.log(stringWithSpaces.trim()); // Output: "Hello, World!"

// 7. charAt()
console.log(sampleString.charAt(0)); // Output: "J"
console.log(sampleString.charCodeAt(0)); // Output: 74 (ASCII code of 'J') 

// 8. includes()
console.log(sampleString.includes("Java")); // Output: true
console.log(sampleString.includes("java")); // Output: false (case-sensitive)

// 9. startsWith() and endsWith()
console.log(sampleString.startsWith("Java")); // Output: true
console.log(sampleString.endsWith("awesome!")); // Output: true

// 10. repeat()
console.log("Ha".repeat(3)); // Output: "HaHaHa"

// Template Literals (Backticks)
let name = "Alice";
let age = 25;
let greeting = `Hello, my name is ${name} and I am $${age} years old.`;
console.log(greeting); // Output: "Hello, my name is Alice and I am 25 years old."

// Multi-line strings using template literals
let multiLineString = `This is a string
that spans multiple
lines.`;
console.log(multiLineString); 