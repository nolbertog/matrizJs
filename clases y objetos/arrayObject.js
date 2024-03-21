const student = [
    {name: "Alice", age: 25},
    {name: "Bob", age: 22},
    {name: "Charlie", age: 28},
];

console.log(student[0].name);
console.log(student[2].age);

student[0].name = "Roberto";
student[2].age = 29; // Actualizacion de los datoa a traves de los indices de las matrices


console.log(student[0].name);
console.log(student[2].age);