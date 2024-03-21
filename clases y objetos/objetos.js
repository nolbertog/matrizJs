class Car {
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year
    }
    startEngine(){
        console.log(`The ${this.make} ${this.model}'s engine is running.`)
    }
}

const myCar = new Car("Toyota", "Camry", 2022)
myCar.startEngine()