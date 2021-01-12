// Задача. Коллекция значений свойства
// Задание
// Напиши функцию getAllPropValues(propName) которая принимает один параметр propName - имя(ключ) свойства.
// Функция должна вернуть массив всех значений свойства с таким именем из каждого объекта в массиве products.
// Если в объектах нет свойства с таким именем, функция должна вернуть пустой массив.

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {

  const propertyArray = [];
  
    for (const product of products) {
        const arrayOfKeys = Object.keys(product);
        const arrayOfValues = Object.values(product);
        if (arrayOfKeys.includes(propName)) { 
            const propIndex = arrayOfKeys.indexOf(propName);
            propertyArray.push(arrayOfValues[propIndex]);
        }            
    } return propertyArray;

}

console.log(getAllPropValues('name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']
console.log(getAllPropValues('quantity')); // [4, 3, 7, 9]
console.log(getAllPropValues('price')); // [1300, 2700, 400, 1200]
console.log(getAllPropValues('category')); // []
