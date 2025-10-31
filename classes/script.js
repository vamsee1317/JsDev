// Classes :

// Objects :

const car = {
    // Properties: Describe the characteristics of the car
    brand: "Tesla",
    model: "Model S",
    color: "Red",
    year: 2024,
    isStarted: false,
    speed: 0,

    // Methods: Describe the actions a car can perform
    start : ()=> {
        if (!this.isStarted) {
            this.isStarted = true;
            console.log(`${this.brand} ${this.model} started.`);
        } 
    },

    stop : () => {
        if (this.isStarted) {
            this.isStarted = false;
            this.speed = 0;
            console.log(`${this.brand} ${this.model} stopped.`);
        } else {
            console.log(`${this.brand} ${this.model} is already stopped.`);
        }
    },

    accelerate : (amount) => {
        if (this.isStarted) {
            this.speed += amount;
            console.log(`${this.brand} ${this.model} is now going at ${this.speed} km/h.`);
        } else {
            console.log(`Start the car before accelerating.`);
        }
    },

    brake : (amount) =>{
        if (this.isStarted && this.speed > 0) {
            this.speed -= amount;
            if (this.speed < 0) this.speed = 0;
            console.log(`${this.brand} ${this.model} slowed down to ${this.speed} km/h.`);
        } else {
            console.log(`Car is already stopped.`);
        }
    },

    getDetails : () => {
        return(`Car: ${this.brand} ${this.model}, Color: ${this.color}, Year: ${this.year}`);
    }
};

// car.fuelVariant = "Petrol";

// console.log(car);


// // Example usage
car.getDetails();
car.start();
car.accelerate(40);
// car.brake(10);
// car.stop();


// Syntax of class :

class Car {
    constructor(brand, model, year, color) {
        // Properties (attributes)
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
        this.isStarted = false;
        this.speed = 0;
    }

    // Methods (actions)
    start() {
        if (!this.isStarted) {
            this.isStarted = true;
            console.log(`${this.brand} ${this.model} started.`);
        } else {
            console.log(`${this.brand} ${this.model} is already running.`);
        }
    }

    stop() {
        if (this.isStarted) {
            this.isStarted = false;
            this.speed = 0;
            console.log(`${this.brand} ${this.model} stopped.`);
        } else {
            console.log(`${this.brand} ${this.model} is already stopped.`);
        }
    }

    accelerate(amount) {
        if (this.isStarted) {
            this.speed += amount;
            console.log(`${this.brand} ${this.model} is now going at ${this.speed} km/h.`);
        } else {
            console.log(`Start the car before accelerating.`);
        }
    }

    brake(amount) {
        if (this.isStarted && this.speed > 0) {
            this.speed -= amount;
            if (this.speed < 0) this.speed = 0;
            console.log(`${this.brand} ${this.model} slowed down to ${this.speed} km/h.`);
        } else {
            console.log(`Car is already stopped.`);
        }
    }

    getDetails() {
        console.log(`Car: ${this.brand} ${this.model}, Color: ${this.color}, Year: ${this.year}`);
    }
}


// Creating an object : 

const teslaCar = new Car("Tesla", "S", 2024, "silver");
console.log(teslaCar);
teslaCar.start();

const bmwCar = new Car("BMW", "Q", 2025, "black");
console.log(bmwCar);


// Child Class (inherits from Car)
class ElectricCar extends Car {
    constructor(brand, model, year, color, batteryCapacity) {
        // Call parent constructor using super()
        super(brand, model, year, color);
        this.batteryCapacity = batteryCapacity; // new property
        this.batteryLevel = 100; // default value
    }

    // New method (specific to ElectricCar)
    chargeBattery(amount) {
        this.batteryLevel += amount;
        if (this.batteryLevel > 100) this.batteryLevel = 100;
        console.log(`${this.brand} ${this.model} charged to ${this.batteryLevel}%`);
    }

    // Method overriding (accelerate behaves differently for ElectricCar)
    accelerate(amount) {
        if (this.isStarted && this.batteryLevel > 0) {
            this.speed += amount;
            this.batteryLevel -= amount * 0.5;
            if (this.batteryLevel < 0) this.batteryLevel = 0;
            console.log(`${this.brand} ${this.model} (Electric) is now going at ${this.speed} km/h. Battery: ${this.batteryLevel.toFixed(1)}%`);
        } else {
            console.log(`Start the car and ensure enough battery before accelerating.`);
        }
    }

    // Method overriding (getDetails adds battery info)
    getDetails() {
        console.log(`Electric Car: ${this.brand} ${this.model}, Color: ${this.color}, Year: ${this.year}, Battery: ${this.batteryCapacity} kWh`);
    }
}

// Example usage:
const tesla = new ElectricCar("Tesla", "Model S", 2024, "Red", 100);

tesla.getDetails();        // From overridden method
tesla.start();             // Inherited from Car
tesla.accelerate(40);      // Overridden method
tesla.brake(20);           // Inherited method
tesla.chargeBattery(20);   // New method
tesla.stop();              // Inherited method
