const breakfastMenu = ['Pancakes- $12', 'Eggs Benedict -$22.99', 'Oatmeal -$21.99', 'Frittata -$15'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];

// Generar HTML para el menú de desayuno usando map
const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

// Generar HTML para el menú principal usando un bucle for...of
let mainCourseItemHTML = '';
let mainCourseIndex = 1;
for (const item of mainCourseMenu) {
    mainCourseItemHTML += `<p>Item ${mainCourseIndex++}: ${item}</p>`;
}
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItemHTML;

// Generar HTML para el menú de postres usando un bucle for...of
let dessertItemHTML = '';
let dessertIndex = 1;
for (const item of dessertMenu) {
    dessertItemHTML += `<p>Item ${dessertIndex++}: ${item}</p>`;
}
document.getElementById('dessertMenuItems').innerHTML = dessertItemHTML;
