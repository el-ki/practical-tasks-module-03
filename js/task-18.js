
// Задача. Поиск объекта по значению свойства
// Задание
// Напиши функцию getProductPrice(productName) которая принимает один параметр productName - название продукта.
// Функция ищет объект продукта с таким именем(свойство name) в массиве products и возвращает его цену(свойство price).
// Если продукт с таким названием не найден, функция должна возвращать null.

// Тесты
// Объявлена функция getProductPrice(productName).
// Вызов getProductPrice('Радар') возвращает 1300.
// Вызов getProductPrice('Захват') возвращает 1200.
// Вызов getProductPrice('Сканер') возвращает 2700.
// Вызов getProductPrice('Дроид') возвращает 400.
// Вызов getProductPrice('Двигатель') возвращает null.

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 9 },
];

function getProductPrice(productName) {

  for (const product of products) {
    if(productName === product.name) {
    return product.price;
      } 
  } return null;
  
}

console.log(getProductPrice('Радар')); // 1300
console.log(getProductPrice('Захват')); // 1200
console.log(getProductPrice('Сканер')); // 2700
console.log(getProductPrice('Дроид')); // 400
console.log(getProductPrice('Двигатель')); // null