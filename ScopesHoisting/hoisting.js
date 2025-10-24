// Hoisting :
// Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their containing scope during the compilation phase. This means that you can use variables and functions before they are declared in the code.


// Note : 

// Variables declared with var are hoisted and initialized with undefined, while let and const are hoisted but not initialized. 

// Variables declared with var key word are scanned first and made them as undefined.

// Function declarations are fully hoisted, meaning you can call them before their declaration in the code.

// Function declarations are scanned and made available before any code is executed.

// However, function expressions (functions assigned to variables) are treated like variable declarations. FE are not hoisted, so you cannot call them before they are defined.



{

    console.log(myVar); 

    let myVar = "Hello, World!";
    console.log("Greetings from the greet function!");
}


// How Javascript excutes Code : 

// Before any Js code runs, the js engine (like V8 in chrome) sets up an execution environment called the "Execution Context".


// Think of a context as container that stores everything that the js engine needs to run your code properly.

// Global Execution Context :
// The GC is the default environment where your js code starts executing. 
// It is create when your js file is loaded.
// It represents the outermost scope - not inside any function.
// There is only one global context in a js program.

// What It Contains :

    // Global Object : In browsers, this is the window object. It provides built-in properties and methods that are globally accessible.

        //  In browsers, the global object is 'window'.
        //  In Node.js, the global object is 'global'.

    // Life Cycle :
        // Created once per page load.
        // Destroyed only when the page is closed or reloaded.


// Function Execution Context :

// An FEC is a wrapper that js engine creates each time a function is invoked.

// What It Contains :

    // Arguments Object : An array-like object that contains all the arguments passed to the function.
    // Local Variables : Variables declared within the function are stored here.

    // Life Cycle :
        // Created each time a function is called.
        // Destroyed when the function execution is complete and control is returned to the calling context.
