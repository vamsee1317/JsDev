// ---------------------------------------------------
// Conditional Statements in JavaScript
// ---------------------------------------------------
// Conditional Statements (CS) are decision-making 
// statements that control the flow of execution 
// based on boolean values (true / false).
// ---------------------------------------------------


// ---------------------------------------------------
// Types of Conditional Statements in JS
// ---------------------------------------------------
// 1. if                → Runs a block of code only if condition is true
// 2. if...else         → Runs one block if true, another if false
// 3. if...else if...   → Used for multiple conditions in sequence
// 4. switch            → Better when we have fixed multiple options
// 5. Nested Conditions → One condition inside another
// ---------------------------------------------------


// ---------------------------------------------------
// 1. if Statement
// ---------------------------------------------------
let orderAmount = 1000;

if (orderAmount > 500) {
    console.log("🚚 You've got a free delivery!");
}


// ---------------------------------------------------
// 2. if...else Statement
// ---------------------------------------------------
let isLoggedIn = true;

if (isLoggedIn) {
    console.log("👋 Welcome Back! You can continue shopping.");
} else {
    console.log("🔑 Please login to continue.");
}


// ---------------------------------------------------
// 3. if...else if...else Ladder
// ---------------------------------------------------
let customerType = "regular";   // values → "VIP", "regular", "new"

if (orderAmount >= 1000) {
    if (customerType === "VIP") {
        console.log("🏆 30% discount for VIP customers");
    } else if (customerType === "regular") {
        console.log("🎉 20% discount for regular customers");
    } else {
        console.log("🎁 10% discount for new customers");
    }
} else {
    console.log("🛒 Add more items to get some discount!");
}


// ---------------------------------------------------
// 4. Switch Case
// ---------------------------------------------------
let paymentMethod = "CreditCard";

switch (paymentMethod) {
    case "CreditCard":
        console.log("💳 Payment successful using Credit Card.");
        break;

    case "DebitCard":
        console.log("🏧 Payment successful using Debit Card.");
        break;

    case "Cash":
        console.log("💵 Payment successful using Cash.");
        break;

    case "UPI":
        console.log("📱 Payment successful using UPI.");
        break;

    default:
        console.log("❌ Invalid payment method. Please choose again.");
}


// ---------------------------------------------------
// 5. Nested If-Else Example
// ---------------------------------------------------
if (true) {
    console.log("👉 Entered 1st if block");

    if (false) {
        console.log("➡ Inside 2nd if block (false)");
    } else {
        console.log("➡ Inside 2nd else block");

        if (false) {
            console.log("➡ Inside 3rd if block (false)");
        } else {
            console.log("➡ Inside 3rd else block");

            if (true) {
                console.log("✅ Inside 4th if block (true)");
            } else {
                console.log("❌ Inside 4th else block");
            }
        }
    }
} else {
    console.log("❌ Inside outer else block");
}


// ---------------------------------------------------
// 6. Nested Example with Logical & Comparison Operators
// ---------------------------------------------------
let x = 7, y = 12, z = 7;

if ((x < y && y <= 12) || !(z === x)) {
    console.log("1st if: ((x < y && y <= 12) || !(z === x)) → TRUE");

    if ((y % 2 === 0 && x + z >= 14) || (x === 10)) {
        console.log("2nd if: ((y % 2 === 0 && x + z >= 14) || (x === 10)) → TRUE");

        if (!(x > z) && (y - x > 5 || z * 2 === 14)) {
            console.log("3rd if: (!(x > z) && (y - x > 5 || z * 2 === 14)) → TRUE");
        } else {
            console.log("3rd else: (!(x > z) && (y - x > 5 || z * 2 === 14)) → FALSE");
        }

    } else {
        console.log("2nd else: ((y % 2 === 0 && x + z >= 14) || (x === 10)) → FALSE");
    }

} else {
    console.log("1st else: ((x < y && y <= 12) || !(z === x)) → FALSE");

    if ((x !== y && !(y > 20)) || (z <= 10 && x > 5)) {
        console.log("Else-if: ((x !== y && !(y > 20)) || (z <= 10 && x > 5)) → TRUE");
    } else {
        console.log("Else-else: ((x !== y && !(y > 20)) || (z <= 10 && x > 5)) → FALSE");
    }
}
