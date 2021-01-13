
// Задание
// Пришел трёхдневный прогноз максимальных температур и мы считаем среднюю температуру за три дня(meanTemperature).
// Замени объявления переменных yesterday, today и tomorrow одной операцией деструктуризации свойств объекта highTemperatures.

const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};

const { yesterday, tomorrow, today } = highTemperatures;
// const yesterday = highTemperatures.yesterday;
// const today = highTemperatures.today;
// const tomorrow = highTemperatures.tomorrow;

const meanTemperature = (yesterday + today + tomorrow) / 3;
console.log(meanTemperature); // 29
