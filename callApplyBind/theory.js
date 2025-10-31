// ======================================================================
// CALL(), APPLY(), and BIND() in JavaScript
// ======================================================================

// ----------------------------------------------------------------------
// THEORY SECTION
// ----------------------------------------------------------------------

// Introduction:
// In JavaScript, functions are objects. This means they have built-in methods.
// Among these, call(), apply(), and bind() allow us to manually control
// the value of 'this' inside a function.
//
// Normally, 'this' refers to the object that owns the function.
// But with these methods, we can borrow a function from one object
// and make another object use it without rewriting the same function.

// ----------------------------------------------------------------------
// WHY USE THEM?
// ----------------------------------------------------------------------
// 1. To control the 'this' keyword manually.
// 2. To borrow methods from one object and use them for another.
// 3. To reuse code instead of duplicating logic.
// 4. To make functions more flexible and reusable across objects.

// ----------------------------------------------------------------------
// REAL-LIFE ANALOGY
// ----------------------------------------------------------------------
// Think of a DRIVER (function) and several CARS (objects).
// Normally, the driver drives their own car — that’s the default 'this'.
// But with call(), apply(), and bind(), the same driver can drive
// another car temporarily by reassigning 'this'.
//
// These methods let us decide WHO drives the car (which object 'this' refers to).

// ======================================================================
// CODE EXAMPLES
// ======================================================================

const person1 = {
  name: "Vamsee",
};

const person2 = {
  name: "Ravindra",
};

// A standalone function
function greet(city, country) {
  console.log(`Hi, I'm ${this.name} from ${city}, ${country}`);
}

// ----------------------------------------------------------------------
// 1. CALL()
// ----------------------------------------------------------------------
// Syntax: function.call(object, arg1, arg2, ...)
// - Executes the function immediately.
// - You manually set what 'this' refers to.

console.log("---- CALL() ----");
greet.call(person1, "Hyderabad", "India");
greet.call(person2, "Bangalore", "India");

// ----------------------------------------------------------------------
// 2. APPLY()
// ----------------------------------------------------------------------
// Syntax: function.apply(object, [argsArray])
// - Similar to call(), but arguments are passed as an array.
// - Useful when arguments are already available in array format.

console.log("---- APPLY() ----");
greet.apply(person1, ["Hyderabad", "India"]);
greet.apply(person2, ["Bangalore", "India"]);

// ----------------------------------------------------------------------
// 3. BIND()
// ----------------------------------------------------------------------
// Syntax: const newFunction = function.bind(object, arg1, arg2, ...)
// - Does NOT execute the function immediately.
// - Returns a NEW function with 'this' permanently bound to the given object.

console.log("---- BIND() ----");
const boundGreet1 = greet.bind(person1);
const boundGreet2 = greet.bind(person2);

// Can be executed later
boundGreet1("Chennai", "India");
boundGreet1("Goa", "India");
boundGreet2("Pune", "India");

// ======================================================================
// DETAILED EXPLANATION
// ======================================================================

// 1. CALL()
// - Immediately invokes the function.
// - Arguments are passed individually.
// - Used when borrowing a function from one object to another.
//
// Example:
// greet.call(person1, "Hyderabad", "India");
// Here, 'this' inside greet() refers to person1.

// 2. APPLY()
// - Immediately invokes the function.
// - Arguments are passed as an array.
// - Useful when the arguments are already stored in an array.
//
// Example:
// greet.apply(person2, ["Bangalore", "India"]);
// Here, 'this' inside greet() refers to person2.

// 3. BIND()
// - Does not call the function immediately.
// - Returns a new function that is permanently bound to a specific object.
//
// Example:
// const boundGreet = greet.bind(person1);
// boundGreet("Chennai", "India");
// Even if called later, 'this' refers to person1.

// ======================================================================
// REAL-TIME EXAMPLE: OLA OR RAPIDO SCENARIO
// ======================================================================
// Imagine a ride-sharing app where multiple drivers (objects)
// can use the same ride-starting function. Each time, we decide
// which driver and which vehicle is associated with 'this'.

const bike1 = {
  driver: "Arun",
  vehicle: "Ola Electric",
};

const bike2 = {
  driver: "Suresh",
  vehicle: "Rapido Bike",
};

function startRide(pickup, drop) {
  console.log(
    `${this.driver} has started a ride on ${this.vehicle} from ${pickup} to ${drop}`
  );
}

// Using call()
console.log("---- CALL() Example ----");
startRide.call(bike1, "Kukatpally", "Hitech City");
startRide.call(bike2, "BTM", "Marathahalli");

// Using apply()
console.log("---- APPLY() Example ----");
startRide.apply(bike1, ["Madhapur", "Kondapur"]);
startRide.apply(bike2, ["Koramangala", "HSR Layout"]);

// Using bind()
console.log("---- BIND() Example ----");
const olaRide = startRide.bind(bike1, "Gachibowli", "Airport");
const rapidoRide = startRide.bind(bike2, "Banashankari", "Electronic City");

// Executing later
olaRide();
rapidoRide();

// ======================================================================
// SUMMARY TABLE (REFERENCE)
// ======================================================================
//
// | Method | Executes Immediately? | Arguments Format | Returns a New Function? | Common Use Case |
// |---------|------------------------|------------------|--------------------------|----------------|
// | call()  | Yes                    | Individual args  | No                       | Borrow and execute immediately |
// | apply() | Yes                    | Array            | No                       | Borrow when args are in array |
// | bind()  | No                     | Individual args  | Yes                      | Store function for later execution |

// ======================================================================
// KEY TAKEAWAYS
// ======================================================================
//
// 1. call() and apply() execute functions immediately with controlled 'this'.
// 2. bind() creates a new function with permanently fixed 'this'.
// 3. These are mainly used for method borrowing, event handling, and code reuse.


function loggingActivity(action){
    console.log(`${this.name} performed ${action} at ${new Date().toLocaleTimeString()}`);
}

const admin = {
    userName : "AdminUser"
}

const editor = {
    userName : "Editor"
}

loggingActivity.call(admin, "DeletedPost");
loggingActivity.call(editor, "EditedComment");