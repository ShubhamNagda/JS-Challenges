class Car {
    constructor(make, model, year, color) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
    }

    describe() {
        console.log(`Car is Made by ${this.make}, and model is ${this.model}, And Year is ${this.year},color of car is ${this.color}`)
    }
}

// ddeclaration of Objects(instance)
const Toyota = new Car("Toyota", "Fortuner", 2023, "white");
const Bmw = new Car("BMW", "M5", 2024, "black");
const rollsRoyce = new Car("RollsRoyce", "Gost", 2024, "Blue");
Toyota.describe();
Bmw.describe();
rollsRoyce.describe();
