// Events :
// Events are nothing but actions or occurrences that happens in the browser, either by the user interacting with the page or automatically by the browser itself.

// Common events are:
// click
// change
// mouseover
// mouseout

// Types of Events:
// 1. Mouse Events
        // click, dblclick, mousedown, mouseup, mousemove, mouseover, mouseout..etc
// 2. Keyboard Events
        // keydown, keyup, keypress...etc
// 3. Form Events
        // submit, change, focus, blur, input...etc
// 4. Window Events
        // load, unload, resize, scroll...etc
// 5. Clipboard Events
        // copy, cut, paste...etc
// 6. Touch Events
        // touchstart, touchmove, touchend, touchcancel...etc
// 7. Drag and Drop Events
        // drag, dragstart, dragend, dragover, dragenter, dragleave, drop...etc


// Event Handling : The process of responding to events is called event handling.

// Event Listening : The process of detecting and waiting for events to occur is called event listening.

// Implementation of Event Handling and Event Listening in JavaScript:

// Inline Event Handling: (Poor Practice - Not Recommended, but still used in some cases)
    // Inline event handling is done by adding event attributes directly to HTML elements.
// DOM Property Event Handling: (Overwritten if assigned multiple times) :
    // DOM property event handling is done by assigning event handler functions to DOM element properties.
// addEventListener() Method Event Handling:
    // The addEventListener() method is a more flexible and powerful way to handle events in JavaScript.

//  Inline Event Handling:
function showAlert() {
    console.log("Button Clicked!");
}

// DOM Property Event Handling:

const domEventBtn = document.getElementById("domEventBtn");

console.log(domEventBtn);

domEventBtn.onclick = () =>{
    console.log("DOM Property Event Handling: Button Clicked!");
}

domEventBtn.onclick = () =>{
    console.log("DOM Property Event Handling: Button Clicked Again!"); // This will overwrite the previous event handler
}
// So, only the last assigned event handler will be executed when the button is clicked.

// addEventListener() Method Event Handling:

const eventListenerBtn = document.getElementById("eventListenerBtn");

console.log(eventListenerBtn);

eventListenerBtn.addEventListener('click', ()=>{
    console.log("addEventListener() Method Event Handling: Button Clicked!");
});


eventListenerBtn.addEventListener('click', ()=>{
    console.log("addEventListener() Method Event Handling: Button Clicked Again!"); // This will NOT overwrite the previous event handler
});

// So, both event handlers will be executed when the button is clicked.

// Event Object:
// When an event occurs, the browser creates an event object that contains information about the event, such as the type of event, the target element, and other relevant data.

eventListenerBtn.addEventListener('click', (e)=>{
    console.log(e); // e is the event object
    console.log("Event Type:", e.type); // Type of event
    console.log("Event Target:", e.target); // Target element
    console.log("Event Timestamp:", e.timeStamp); // Timestamp of the event
    console.log("Event Current Target:", e.currentTarget); // Current target element
    console.log(e.target.innerText);
});


// Event Propagation:
// Event propagation is the process by which an event travels through the DOM tree. There are two phases of event propagation: capturing phase and bubbling phase.
// 1. Capturing Phase: The event starts from the window object and travels down to the target element.
// 2. Bubbling Phase: The event starts from the target element and travels up to the window object.

// By default, event listeners are executed in the bubbling phase. However, you can specify whether to use the capturing phase by passing a third argument to the addEventListener() method.

// Event Delegation:

const car = {
    // props : describes how the object will look like
    name: "BMW",
    model: "X5",
    year: 2020,
    color: "Black",
    carStatus : false,

    // methods : describes what the object will do
    start: function() {
        this.carStatus = true;
        console.log(`${this.name} ${this.model} is started.`);
    },
    stop: function() {
        this.carStatus = false;
        console.log(`${this.name} ${this.model} is stopped.`);
    }
}

car.start();


// Event Bubbling Example:
const body = document.querySelector("body");
const grandParent = document.getElementById("grandParent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");

// body.addEventListener('click', (e)=>{
//     console.log("Body Bubbling");
// });

grandParent.addEventListener('click', (e)=>{
    console.log("Grand Parent Bubbling");
});

parent.addEventListener('click', (e)=>{
    console.log("Parent Bubbling");
});

child.addEventListener('click', (e)=>{
    console.log("Child bubbling");
    e.stopPropagation(); // Uncomment this line to stop event bubbling
});


// Event Capturing Example:

body.addEventListener('click', (e)=>{
    console.log("Body Capturing");
}, true);

grandParent.addEventListener('click', (e)=>{
    console.log("Grand Parent Capturing");
}, true);

parent.addEventListener('click', (e)=>{
    console.log("Parent Capturing");
}, true);

child.addEventListener('click', (e)=>{
    console.log("Child Capturing");
    // e.stopPropagation(); // Uncomment this line to stop event capturing
}, true);


// Event Delegation :
// Event delegation is a technique of handling events by attaching a single event listener to a parent element instead of multiple event listeners to individual child elements. This is useful when you have a large number of child elements or when child elements are added dynamically.


const navList = document.getElementById("navList");

navList.addEventListener("click",  e =>{
    console.log(e.target);
})