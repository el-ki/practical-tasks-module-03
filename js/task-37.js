// Задача. Получаем все зелья
// Задание
// Добавь объекту atTheOldToad метод getPotions(), который просто возвращает значение свойства potions.
const atTheOldToad = {
  potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
  getPotions() {
    return this.potions;
  }
};

console.log(atTheOldToad.potions); // ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа']
console.log(atTheOldToad.getPotions()); // ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа']
