// Synchronous Javascript :

    // console.log("1");
    // console.log("2");
    // console.log("3");
    // console.log("4");
    // console.log("5");


// Asynchronous Javascript :

    console.log("1");
    console.log("2");
setTimeout(()=>{
        console.log("3");
}, 3000);
    console.log("4");
    console.log("5");



// Callback vs Callback Hell :

// Callback : A function passed into another function as an argument to be executed later.
                 
     function orderFood(food, callback){
        console.log(`Order is placed for ${food}....`);

        setTimeout(()=>{
            console.log(`${food} is ready to serve.`);
            callback();
        }, 3000);
    
     }

     function serveFood(){
        console.log("Please enjoy your meal!");
     }

     orderFood("Pizza", serveFood);


    //  Callback Hell : Multiple nested callbacks making code hard to read and maintain.
    
    function orderFoodCallbackHell(food, callback){
        console.log(`Order is placed for ${food}....`);
        setTimeout(()=>{
            console.log(`${food} is being prepared...`);
            setTimeout(()=>{
                console.log(`${food} is ready to serve.`);
                callback();
            }, 2000);
        }, 2000);
     }

     orderFoodCallbackHell("Burger", serveFood);


// Promises :
//    A Promise is an object representing the eventual completion or failure of an asynchronous operation.

// States of Promise :
// 1. Pending : Initial state, neither fulfilled nor rejected.
// 2. Fulfilled : Operation completed successfully.
// 3. Rejected : Operation failed.

// Creating a Promise :

const makeFoodPromise = new Promise((resolve, reject)=>{});
console.log(makeFoodPromise); // Pending Promise

     const foodOrderPromise = new Promise((resolve, reject)=>{
        const orderSuccess = false; // Simulating order success or failure

        setTimeout(()=>{
            if(orderSuccess){
                resolve("Food promise is ready to serve.");
            } else {
                reject("Order failed. Please try again.");
            }
        }, 3000);
     });

    // Consuming a Promise :

    foodOrderPromise.then((message)=>{
        console.log(message);
    }).catch(()=>{
        console.log("Order failed. Please try again.");
    });


// API Introduction :


// Fetch API :


// Async Await :