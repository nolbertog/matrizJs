const orderPrice = [50, 30, 25, 40, 15];

const totalOrderValue = orderPrice.reduce((total, price) => total + price, 0);
console.log(`The total value of the order is`, totalOrderValue);