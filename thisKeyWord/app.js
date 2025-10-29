// "use strict";

// this keyword :

// The this keyword in js refers to the current execution context - the object that owns the code being executed.
// It allows functions to access props and methods of the object they belong to.

// In simple words "this" refers to the person or object who is currently calling the function.


// Why ?
// without this, functions would have no built-in way to refer back to the object they belong to. 
// It makes code dynamic and reuseable, you can use the same function with multiple objects.

// Real - World Analogy
// Imagine you're in the classroom and the teacher says :

    // "I'm going to explain Javascript"

// Here. "I" refers to the current person who is speaking.
// Similarly, In js, this keyword refers to the current object who is executing the task.

// How it works :


// Case 1 : Global Context :

console.log(this);

console.log(this === window);

// In browser, this refers to the window object
// In Node.js, this referws to the module.exports object

// Case 2 : Inside a regular function (Non-Strict Mode) :


    function showThis(){
        console.log(this);  // in strict mode : undefined // nonStrictMode : window
    }

    showThis();

    // Here, this will refer to the global object (window) in non-strict mode.
    // In strict mode ("use strict"), this becomes undefined.

// Case 3 : Inside object method:

    const person = {
        name : "Ravindra",
        greet : ()=>{
            // console.log(`Hi, I'm ${this.name}`);
            console.log(this.name);
        }
    }

    person.greet();

    // Here, this refers to the object calling the method, i.e person.

// Case 4 : Losing Context (Common mistakes)

const user = {
    // props 
    fname : "Vamsee",
    // Methods :
    showName(){
        console.log(this.fname);
    }
}

const ref = user.showName;

ref();   // undefined (error);

// ref() is called as a standlone function --> this no longer refers to user.
// It defaults to undefined in strit mode sometimes.


// Case 5 : Using this in Arrow functions

// Arrow Function do not have their own "this".
// they inherit this from their surrounding scope.

// const student = {
//     name : "Mahesh",
//     sayHi : () => {
//         console.log(this.name);
//     }
// }

// student.sayHi();  // undefined.

// Why ? 
// The AF this points to the outer scope (global), not student(Variable).

const student = {
    name : "Mahesh",
    sayHi : function (){
    const inner = () => {
        console.log(this.name);
    }
    inner();
    }
}

student.sayHi(); 


// Case 6 : Inside a constructor function :

function Car(brand){
    this.brand = brand;
}

const car1 = new Car('Tesla');
console.log(car1.brand);

const car2 = new Car("BMW");
console.log(car2.brand);

// Explaination : In a constructor, this refers to the newly created object.

// Case 7 : Inside a class :

class Teacher {
    constructor(name){
        this.name = name;
    }


    teach(){
        console.log(`${this.name} is teaching Js`);
    }
}

const t1 = new Teacher("Vamsee");
console.log(t1.teach());

const t2 = new Teacher("Ravindra");
console.log(t2);

// In class methods, this refers to the current instance of the class.




// | Context                     | What "this" Refers To                  | Example                                                                                     |
// |------------------------------|----------------------------------------|---------------------------------------------------------------------------------------------|
// | Global Scope (Browser)       | The window object                      | console.log(this);  // window                                                               |
// | Inside Object Method         | The object itself                      | const car = { name: 'Tesla', getName(){ console.log(this.name); } }; car.getName(); // Tesla |
// | In Function (Non-Strict)     | The window (or global) object          | function test(){ console.log(this); } test();                                               |
// | In Function (Strict Mode)    | undefined                              | 'use strict'; function test(){ console.log(this); } test();                                 |
// | In Constructor Function      | The new instance created               | function Car(){ this.brand='BMW'; } const c = new Car(); console.log(c.brand); // BMW       |
// | In Event Listener            | The element that triggered the event   | button.addEventListener('click', function(){ console.log(this.id); });                      |
// | In Arrow Function            | Inherits "this" from surrounding scope | const obj = { name:'JS', greet: ()=> console.log(this.name) }; obj.greet(); // undefined    |
