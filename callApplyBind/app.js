// CallApplyBind :

// Object : is nothing but real time entity, where the information will be stored in key value pairs.


// Syntax : 

    // const objName = {
    //     key1 : "",
    //     key2 : 12345,
    //     key3 : false,
    //     key4 : ["1", 1234, false],
    //     key5 : {
    //         subKey1 : "",
    //         subKey2 : 12345
    //     }
    // };

// Object representing a car
const bmwCar = {

    // Properties: describe characteristics of the car
    brand: "BMW",
    model: "Model B",
    year: 2024,
    color: "Midnight Silver",
    isEngineOn: false,
    speed: 0,
};

const audiCar = {

    // Properties: describe characteristics of the car
    brand: "Audi",
    model: "Q7 S",
    year: 2024,
    color: "Midnight black",
    isEngineOn: false,
    speed: 0,
};


   function startEngine(time, name) {
        if (!this.isEngineOn) {
            this.isEngineOn = true;
            console.log(`${this.brand} ${this.model} engine started and it was started by ${name}, in the ${time}`);
        } else {
            console.log("Engine is already running.");
        }
    }

   function stopEngine(time, name) {
        if (this.isEngineOn) {
            this.isEngineOn = false;
            this.speed = 0;
            console.log(`Engine stopped by ${name} in the ${time}`);
        } else {
            console.log("Engine is already off.");
        }
    }

    function accelerate(increaseBy) {
        if (this.isEngineOn) {
            this.speed += increaseBy;
            console.log(`Accelerated by ${increaseBy} km/h. Current speed: ${this.speed} km/h.`);
        } else {
            console.log("Cannot accelerate. Please start the engine first.");
        }
    }

    function brake(decreaseBy) {
        if (this.isEngineOn && this.speed > 0) {
            this.speed -= decreaseBy;
            if (this.speed < 0) this.speed = 0;
            console.log(`Braked by ${decreaseBy} km/h. Current speed: ${this.speed} km/h.`);
        } else {
            console.log("Car is already stationary or engine is off.");
        }
    }

  function  getDetails() {
        console.log(`Car Details:
        Brand: ${this.brand}
        Model: ${this.model}
        Year: ${this.year}
        Color: ${this.color}`);
    }




// 1. call () :

// Syntax : functionname.call(objName, args)

// bmwCar.startEngine.call(audiCar);
// bmwCar.startEngine.call(rangeRover);

startEngine.call(bmwCar, "Morning", "Vamsee");
startEngine.call(audiCar, "Afternoon", "Naveen");


// Apply :

stopEngine.apply(bmwCar,["Morning", "Vamsee"]);
startEngine.call(bmwCar, "Afternoon", "Vamsee");


// Bind :

const bmwStart = startEngine.bind(bmwCar);

const bmwStop = stopEngine.bind(bmwCar);

bmwStop("Evening", "Vamsee");
bmwStart("Night", "Vamsee");




