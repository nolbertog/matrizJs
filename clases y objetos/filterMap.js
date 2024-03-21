const student = [
    {name: "Alice", age: 25},
    {name: "Bob", age: 22},
    {name: "Charlie", age: 28},
];
const adult = student.filter(student => student.age >=23); // busca todos los estudientes mayores o iguales a 23

const studentName = student.map(student => student.name); // busca todos los nombre del array

console.log(adult);
console.log(studentName);