const products = [
    {name: 'Laptop', price:1000},
    {name: 'Smartphone', price:500},
    {name: 'Tablet', price:300},
    {name: 'Monitor', price:250},
    {name: 'Keyboard', price:50},
];

function filterProductByPriceRange(product, minPrice, maxPrice) {
    return product.filter((product)=> product.price >= minPrice && product.price <= maxPrice);
}

const minPrice = 100;
const maxPrice = 500;

const filteredProducts = filterProductByPriceRange(products, minPrice, maxPrice);

filteredProducts.forEach((product) => {
    console.log(`${product.name} is of $${product.price}`)
});