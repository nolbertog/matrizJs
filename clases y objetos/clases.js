class persona{
    constructor(firsName, lastName){
        this.firsNName = firsName
        this.lastName = lastName
    }
    getFullName(){
        return `${this.firsNName} ${this.lastName}`;
    }
}

const persona1 = new persona("Nono", "Gonzalez");

console.log(persona1.getFullName());

