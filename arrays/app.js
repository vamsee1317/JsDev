// Array : 

// Collection of values stored in a single variable. 
// Values can be of different data types
// Values are stored in a contiguous memory location
// Values are accessed using index (0, 1, 2, 3, ...)
// Arrays are mutable (can be changed)
// Arrays are dynamic (can grow and shrink in size)


// Creating an array


const userNames = ["gvks.245@gmail.com", 87641345678, "Vamsee_Krishna"]; // Array of strings and numbers.
const registeredMobileNumbers = [87641345678, 9876543210, 7654321098, 6543210987]; // Array of numbers.
const isLoggedIn = [true, false, true, false]; // Array of booleans.
const randomValues = ["Vamsee", 87641345678, true, null, undefined, { name: "Vamsee", age: 25 }, [1, 2, 3]]; // Array of different data types.

// Accessing array elements using index.                                 
console.log(userNames[0]); // gvks.245@gmail.com
console.log(registeredMobileNumbers[2]); // 7654321098
console.log(isLoggedIn[1]); // false
console.log(randomValues[5]); // { name: 'Vamsee' }
console.log(randomValues[6][1]); // 2


// array properties and methods


// Property : length

const registerUsersCount = registeredMobileNumbers.length;

// Methods : 

const productCategories = ["Electronics", "Mobiles", "Fashion", "Home Appliances", "Books"];

// push () : Adds one or more elements to the end of an array and returns the new length of the array.


productCategories.push("Toys", "Groceries"); // Adds "Toys" and "Groceries" to the end of the array.


// Pop () : Removes the last element from an array and returns that element.

const removedCategory = productCategories.pop();
console.log(removedCategory); // "Groceries"


// shift () : Removes the first element from an array and returns that element.

const firstCategory = productCategories.shift();
console.log(firstCategory); // "Electronics"

// unshift () : Adds one or more elements to the beginning of an array and returns the new length of the array.

productCategories.unshift("Sports", "Outdoors");

// Slice() : slice helps use to extract a portion of an array into a new array without modifying the original array.

const selectedCategories = productCategories.slice(3, 6);  
console.log(selectedCategories); 

// splice() : splice helps us to add/remove items to/from an array, and returns the removed item(s).

const removedCategories = productCategories.splice(2, 0, "Health", "Beauty");
console.log(removedCategories); // []


// indexOf() : indexOf helps us to find the index of an element in an array. If the element is not found, it returns -1.

const fashionIndex = productCategories.indexOf("Fashion");
console.log(fashionIndex); // 4

// lastIndexOf() : lastIndexOf helps us to find the last index of an element in an array. If the element is not found, it returns -1.

productCategories.push("Books"); // Adding "Books" again to demonstrate lastIndexOf
const lastBooksIndex = productCategories.lastIndexOf("Books");
console.log(lastBooksIndex); // Last index of "Books"

console.log(productCategories);
console.log(`-------------------`)

// forEach() : forEach helps us to iterate over each element in an array.

const numList = [10, 20, 31, 40, 50];

numList.forEach((num)=>{
    console.log(num * num);
}); 

// map() : map helps us to create a new array by applying a function to each element of the original array.                    

  const squaredNumbers = numList.map((num) => num * num);
    console.log(squaredNumbers); // [100, 400, 961, 1600, 2500]

// filter() : filter helps us to create a new array with all elements that pass the test implemented by the provided function.

const oddNumbers = numList.filter((num) => num % 2 !== 0);
console.log(oddNumbers); // [31]

// reduce() : reduce helps us to execute a reducer function on each element of the array, resulting in a single output value.

const sum = numList.reduce((a, b)=> a + b, 1000);
console.log(sum); // 1151

// find() : find helps us to return the value of the first element in the array that satisfies the provided testing function. Otherwise, undefined is returned.

const firstOddNumber = numList.find((num) => num % 2 !== 0);
console.log(firstOddNumber); // 31

// sort() : sort helps us to sort the elements of an array in place and returns the sorted array.

const sortedNumbers = numList.sort((a, b) => b - a);
console.log(sortedNumbers); // [50, 40, 31, 20, 10]


// fill() : fill helps us to fill all the elements of an array from a start index to an end index with a static value.

const filledArray = numList.fill(0, 1, 4);
console.log(filledArray); // [10, 0, 0, 0, 50];

// includes() : includes helps us to determine whether an array includes a certain value among its entries, returning true or false as appropriate.

const hasTwenty = numList.includes(20);
console.log(hasTwenty); // true

const hasSixty = numList.includes(60);
console.log(hasSixty); // false