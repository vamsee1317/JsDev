// Scope :
// Scope defines the accessibility of variables, functions, and objects in some particular part of your code.

// There are three types of scope in JavaScript:

// Global Scope : The global scope is the outermost scope and is accessible from anywhere in the code.
// Local Scope : The local scope is created within functions and is only accessible within that function.
// Block Scope : The block scope is created within curly braces {} and is accessible only within that block. Block scope is introduced with the let and const keywords.

// Example of Global Scope : 

const globalVar = "I am a global variable";

console.log(`Global Scope : ${globalVar}`); // Accessible here

function checkGlobalScope() {
    const localVar = "I am a local variable";
    console.log(`Local Scope : ${globalVar}`); // Accessible here
    console.log(`Local Scope : ${localVar}`); // Accessible here
}

//    console.log(`Global Scope : ${localVar}`); // Not Accessible here


checkGlobalScope();

{
    console.log(`Block Scope : ${globalVar}`); // Accessible here
}

// Example of Block Scope :

{
    let blockVar = "I am a block-scoped variable";
    console.log(`Inside Block Scope : ${blockVar}`); // Accessible here
    // var blockVar = "I am a block-scoped variable outside";

    let x = 10;
    const y = 20;
    console.log(`Inside Block Scope : x = ${x}, y = ${y}`); // Accessible here
}

let blockVar = "Block Var Outside block";

console.log(`Outside Block Scope : ${blockVar}`);

let x = 30;
const y = 40;
console.log(`Outside Block Scope : x = ${x}, y = ${y}`); // Accessible here

