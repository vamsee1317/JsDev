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

//    An API (Application Programming Interface) is a set of rules and protocols for building software applications.
// It allows different software systems to communicate with each other.
// APIs can be used to access web services, databases, and other resources.
// API calls can be made using various methods, including XMLHttpRequest, Fetch API, and libraries like Axios.


// Fetch:
// Fetch API is a modern interface for making HTTP requests in JavaScript. 
// It returns Promises and provides a more powerful and flexible feature set than older methods like XMLHttpRequest.

// Syntax :
    // fetch().then().then().catch();

    const apiEndPoint = "https://dummyjson.com/products";

    fetch(apiEndPoint).then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data.products);
        // Do something with the product data
        const productsContainer = document.getElementById("products");
        productsContainer.innerHTML = data.products.map((product)=>{
 
        return(
            `<div class="product-card">
                <img src="${product.thumbnail}" alt="${product.title}" />
                <h3>${product.title}</h3>
                <p>Price: $${product.price}</p>
            </div>`
        );
        }).join("");
        // data.products.forEach((product)=>{
        //     console.log(`Product: ${product.title}, Price: $${product.price}`);
        // });
    }).catch(
        (error)=>{
            console.log("Error fetching data:", error);
        }
    );

// Async Await :

    const fetchProducts = async () => {

        const response = await fetch(apiEndPoint);
        const data = await response.json();
        console.log(data);

    };

    const btn = document.getElementById("btn");
    btn.addEventListener("click", fetchProducts);


    // Syntax for Native Fetch :

    // fetch("url")
    // .then((res)=>{res.json()})
    // .then((data)=>{console.log(data)})
    // .catch((error)=>{console.log(error)});

    // Syntax for AsynAwait :

    // async function fetchProd(params) {
    //     const res = await fetch(url);
    //     const data = await res.json();
    //     console.log(data);
    // }