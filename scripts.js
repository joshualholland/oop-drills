let Person1 = {
    name: 'Kelsy',
    sayHello: () => {
        console.log(`Hello! My name is ${this.name}`)
    }
}
Person1.sayHello();

let Person2 = {
    name: 'Josh',
    sayHello: function () {
        console.log(`Hello! My  name is ${this.name}`)
    }
}
Person2.sayHello();

let Person3 = {
    name: 'Joel',
    sayHello: function () {
        console.log(`Hello! My name is ${this.name}`)
    }
}
Person3.sayHello();

let Person4 = {
    name: 'Daniel',
    sayHello: function () {
        console.log(`Hello! My name is ${this.name}`)
    }
}
Person4.sayHello();

let Person5 = {
    name: 'Kenny',
    sayHello: function () {
        console.log(`Hello! My name is ${this.name}`)
    }
}
Person5.sayHello();

// Psuedo Class
class Person {
    constructor(name, city, age) {
        this.name = name,
            this.city = city,
            this.age = age
    }
    // Method
    print() {
        console.log(`Hello! My name is ${this.name}, I am ${this.age}, and I live in ${this.city}`)
    }
};

const kelsy = new Person('Kelsy', 'Birmingham', 23);
kelsy.print();
const Joel = new Person('Joel', 'Birmingham', 24);
Joel.print();
const Daniel = new Person('Daniel', 'Trussville', 24);
Daniel.print();
const Kenny = new Person('Kenny', 'Nashville', 22);
Kenny.print();
const Jenna = new Person('Jenna', 'Mobile', 23);
Jenna.print();

// Vehicles inheritance
class Vehicles {
    constructor(type, manufacturer, wheels) {
        this.type = type,
            this.manufacturer = manufacturer,
            this.wheels = wheels
    }

    aboutVehicle() {
        console.log(`This vehicle is a ${this.type}, made by ${this.manufacturer}, and has ${this.wheels} wheels.`)
    }
};
// Trucks child class
class Trucks extends Vehicles {
    constructor(type, manufacturer, wheels, doors, bed) {
        super(type, manufacturer, wheels),
            this.doors = doors,
            this.bed = bed;
            if (this.bed && true) {
                bed = 'bed'
            }
    }
    aboutTruck() {
        console.log(`This vehicle is a ${this.type}, made by ${this.manufacturer}, and has ${this.wheels} wheels. It has ${this.doors} doors and has a ${this.bed}`)
    }
};

const truck = new Trucks('truck', 'Ford', 4, 2, true);

truck.aboutTruck();

class Sedan extends Vehicles {
    constructor(type, manufacturer, wheels, size, mpg) {
        super(type, manufacturer, wheels),
        this.size = size,
        this.mpg = mpg;
    }
    aboutSedan() {
        console.log(`This vehicle is a ${this.type}, made by ${this.manufacturer}, and has ${this.wheels} wheels. It is ${this.size} size and get ${this.mpg} mpg.`)
    }
};
const sedan = new Sedan('sedan', 'Honda', 4, 'medium', 42)
sedan.aboutSedan();

class Motorcycle extends Vehicles {
    constructor(type, manufacturer, wheels, handlebars, doors) {
        super(type, manufacturer, wheels),
        this.handlebars = handlebars,
        this.doors = doors;
    }
    aboutMotorcycle() {
        console.log(`This vehicle is a ${this.type}, made by ${this.manufacturer}, and has ${this.wheels} wheels. It has ${this.handlebars} handlebars and ${this.doors} doors.`)
    }
};
const bike = new Motorcycle('Motorcycle', 'Yamaha', 2, 1, 0);
bike.aboutMotorcycle();
