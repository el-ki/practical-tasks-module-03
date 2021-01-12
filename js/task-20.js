// Задача. Общая стоимость товара
// Задание
// Напиши функцию calculateTotalPrice(productName) которая принимает один параметр productName - название товара.
// Функция должна вернуть общую стоимость(цена * количество) товара с таким именем из массива products.

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {

    let totalPrice = 0;
    
    for (const product of products) { 
        if (productName === product.name) { 
            totalPrice = product.price * product.quantity;
        } 
    } return totalPrice;

}


console.log(calculateTotalPrice('Бластер')); // 0
console.log(calculateTotalPrice('Радар')); // 5200
console.log(calculateTotalPrice('Дроид')); // 2800
console.log(calculateTotalPrice('Захват')); // 10800
console.log(calculateTotalPrice('Сканер')); // 8100
    