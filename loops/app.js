// ====================
// LOOPS IN JAVASCRIPT
// ====================

// A loop allows us to repeat a block of code until a condition is true.

// ------------------------------------------------
// 1. BASIC LOOPS
// ------------------------------------------------

// (a) for loop : Used when we know how many times to run
// Syntax: for(initialization; condition; increment/decrement){}

for (let i = 1; i <= 5; i++) {
    console.log("For Loop Count:", i);
}

// Project Example: Print all seat numbers in a bus (1 to 40)
for (let seat = 1; seat <= 40; seat++) {
    console.log(`Seat No: ${seat}`);
}


// (b) while loop : Runs as long as condition is true
// Syntax: while(condition){}

let count = 1;
while (count <= 5) {
    console.log("While Loop Count:", count);
    count++;
}

// Project Example: ATM PIN check (max 3 attempts)
// ATM PIN Check with Decrementing Attempts

let pin = 1234;
let enteredPin = 1111;   // wrong pin initially
let attempts = 3;        // user gets 3 attempts

while (attempts > 0 && enteredPin !== pin) {
    console.log(`Wrong PIN. You have ${attempts - 1} attempts left.`);
    attempts--;

    // simulate user entering correct pin on last attempt
    if (attempts === 1) {
        enteredPin = 1234;
    }
}

if (enteredPin === pin) {
    console.log("✅ Access Granted");
} else {
    console.log("❌ Card Blocked! Too many wrong attempts.");
}



// (c) do...while loop : Executes at least once before checking condition
// Syntax: do { } while(condition)

let num = 1;
do {
    console.log("Do While Count:", num);
    num++;
} while (num <= 5);

// Project Example: Keep showing a menu until user selects "Exit"
let option;
do {
    option = "Exit"; // simulate user input
    console.log("Menu displayed...");
} while (option !== "Exit");
console.log("Menu closed.");


// ------------------------------------------------
// 2. ADVANCED LOOPS
// ------------------------------------------------

// (a) for...in : Used to loop through object keys

const student = {
    name: "John",
    age: 20,
    course: "JavaScript"
};

for (let key in student) {
    console.log(`${key}: ${student[key]}`);
}

// Project Example: Display product details
const product = {
    id: 101,
    name: "Laptop",
    price: 45000,
    stock: 12
};

for (let detail in product) {
    console.log(`${detail} => ${product[detail]}`);
}


// (b) for...of : Used to loop through iterables (arrays, strings, etc.)

const fruits = ["Apple", "Banana", "Mango"];

for (let fruit of fruits) {
    console.log("Fruit:", fruit);
}

// Project Example: Display all booked movie tickets
const tickets = ["A1", "A2", "B3", "C4"];
for (let ticket of tickets) {
    console.log(`Booked Ticket: ${ticket}`);
}


// (c) forEach : Used with arrays, applies function to each element

const numbers = [10, 20, 30, 40];

numbers.forEach((num, index) => {
    console.log(`Index: ${index}, Value: ${num}`);
});

// Project Example: Calculate total bill of items
const cart = [100, 250, 400, 150];
let total = 0;

cart.forEach(price => {
    total += price;
});
console.log("Total Bill:", total);




let products = [
  "Laptop",
  "Smartphone",
  "Headphones",
  "Keyboard",
  "Smartwatch",
  "Tablet",
  "Monitor",
  "Mouse",
  "Furniture",
  "Curtains",
];


// for(let i = 0; i < products.length ; i++){
//     console.log(`${products[i]}`);
// }

for(let item of products){
    console.log(item);
}


console.log(`-------------------------------------------`)

const productInfo = {
  id: 1,
  name: "Laptop",
  price: 55000,
  inStock: true
};

for(let info in productInfo){
    console.log(productInfo[info]);
}



