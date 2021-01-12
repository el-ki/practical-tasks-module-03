
// Задание
// Запиши в переменную keys массив ключей собственных свойств объекта apartment,
//     а в переменную values массив всех значений его свойств.Используй методы Object.keys() и Object.values().
const apartment = {
  descr: 'Просторная квартира в центре',
  rating: 4,
  price: 2153,
};

const keys = Object.keys(apartment);
const values = Object.values(apartment);

console.log(keys); // ['descr', 'rating', 'price'].
console.log(values); // ['Просторная квартира в центре', 4, 2153]
