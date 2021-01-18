// Задача. Удаляем зелье
// Задание
// Дополни метод removePotion(potionName) так, чтобы он удалял зелье potionName из массива зелий в свойстве potions.
const atTheOldToad = {
  potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
  removePotion(potionName) {

    const indexPotionName = this.potions.indexOf(potionName);
    this.potions.splice(indexPotionName, 1);
    return this.potions;

  },
};


console.log(atTheOldToad.potions); // ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа']
console.log(atTheOldToad.removePotion('Дыхание дракона')); // ['Зелье скорости', 'Каменная кожа']
console.log(atTheOldToad.removePotion('Зелье скорости')); // ['Каменная кожа']
