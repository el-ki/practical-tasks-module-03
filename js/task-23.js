
// Задание
// Замени объявления переменных highYesterday, highToday, highTomorrow и highIcon одной операцией деструктуризации свойств
// объекта highTemperatures.Задай значение по умолчанию для highIcon - строку 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'.

const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Пиши код ниже этой строки

const {
    yesterday: highYesterday,
    today: highToday,
    tomorrow: highTomorrow,
    highIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',

} = highTemperatures;

// const highYesterday = highTemperatures.yesterday;
// const highToday = highTemperatures.today;
// const highTomorrow = highTemperatures.tomorrow;
// const highIcon = highTemperatures.icon;

// Пиши код выше этой строки
const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

console.log(meanTemperature); // 29
console.log(highToday); // 26
console.log(highYesterday); // 28
console.log(highTomorrow); // 33
console.log(highIcon); // https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg
