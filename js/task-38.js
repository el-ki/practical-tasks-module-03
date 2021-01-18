// Задача. Добавляем новое зелье
// Задание
// Дополни метод addPotion(potionName) так, чтобы он добавлял зелье potionName в конец массива зелий в свойстве potions.

const atTheOldToad = {
  potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
  addPotion(potionName) {

      this.potions.push(potionName);
      return this.potions;

  },
};

console.log(atTheOldToad.addPotion('Невидимка')); // ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа', 'Невидимка']
console.log(atTheOldToad.addPotion('Зелье силы')); // ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа', 'Невидимка', 'Зелье силы']
