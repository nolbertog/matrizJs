const person = {
    firsName: "Alice",
    lastName: "Johnson",
    getFullName : function(){
        return `${this.firsName} ${this.lastName}`
    }
};
console.log(person.getFullName());