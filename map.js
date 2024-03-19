const products = [
    {name: 'Laptop', price:1000},
    {name: 'Smartphone', price:500},
    {name: 'Tablet', price:300},
];

products.map((product)=> {
    console.log(`El precio de ${product.name} is ${product.price}.`);
});
