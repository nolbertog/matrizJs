const students = [
    {name: "Alice", age: 25},
    {name: "Bob", age: 22},
    {name: "Charlie", age: 28},
];

const student = students.find(students => students.name === "Charlie")

console.log(student.age)