// Javascript Classes :

// Classes :
    // A class in Javascript is a blueprint for creating objects with shared props and methods.

// Why classes :
    // Think of a class like a cookie cutter and objects as the cookies.
    // The cutter defines the shape and design , but each cookie is an individual instance of it.

    // example of an Object without class :

        let user1 = {
            // Props :
            name : "Vamsi",
            email : "vamsi@gmail.com",
            // Methods :
            greet : function(){
                console.log(`Hello ${this.name}`);
            }
        }


        let user2 = {
            // Props :
            name : "Vamsi",
            email : "vamsi@gmail.com",
            // Methods :
            greet : function(){
                console.log(`Hello ${this.name}`);
            }
        }

        // If we create 100 users, we'll repear the same structure - not efficient.
// This repetition is exactly what classes helps us to avoid.



// Creating a Basic class :

class User{
    // props
    constructor(name, email, phoneNumber){
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }

    // methods

    greet(){
        console.log(`Welcome ${this.name}`);
    }
}


// Creating Objects :

const userOne = new User("Vamsee","Vamsee@gmail.com", 9123456789);
const userTwo = new User("Nobitha", "nobitha@gmail.com", 8123456789);

console.log(userOne);

userOne.greet();
userTwo.greet();

// Constructor and this keyword :

// The constructor() method runs automatically when we create an object using new.
// the this keyword refers to the current instance or current object.


// One More Example on Classes :

class BankAccount{
    // props 
    constructor(owner, balance){
        this.owner = owner;
        this.balance = balance;
    }

    // methods

    deposit(amount){
        this.balance += amount;

        console.log(`${this.owner} deposited $ ${amount} : New Balance : $ ${this.balance}`);
    }

    withDraw(amount){
        if(amount > this.balance){
            console.log(`Insufficient Balance`);
        }else{
            this.balance -= amount;
            console.log(`${this.owner} withdrew $ ${amount} : Remaining Balance : $ ${this.balance}`);
        }
    }
}

const account1 = new BankAccount("Ravindra", 10000);

account1.deposit(5000);
account1.withDraw(3000);


// Inheritance Concept :

// Let's say some accounts have special privileges - for example, savingsAccount or current Account:
// We can create these by extending the BankAccount class.


class SavingsAccount extends BankAccount{
    constructor(owner, balance, interestRate){
        super(owner, balance);

        this.interestRate = interestRate;
    }

    // Methods :

    addInterest(){
        const interest = (this.balance * this.interestRate) / 100;
        this.balance += interest;
        console.log(`${this.owner} earned $${interest}. New balance : $${this.balance}`);
    }

}

const ravindraSavingsAccount = new SavingsAccount("RavindraReddy", 5000, 8);
ravindraSavingsAccount.deposit(5000); // inherited from BankAccount
ravindraSavingsAccount.withDraw(1000); // inherited from BankAccount
ravindraSavingsAccount.addInterest(); // Specific to SavingsAccount


// Inheritance Explaination :

// Inheritance means once class(child/subclass) can use the props and methods of another class(parent/superclass).
// The extends keyword is used to create a subclass.
// The super() method is used to call the parent class constructor.
// The subClass can :
    // Use methods from the parent (deposit, withdraw)
    // add new methods (addInterest)
    // Overrides existing methods if needed.