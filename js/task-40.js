// Задача. Обновляем зелье
// Задание
// Дополни метод updatePotionName(oldName, newName) так, чтобы он обновлял название зелья с oldName на newName,
//     в массиве зелий в свойстве potions.

const atTheOldToad = {
  potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
    updatePotionName(oldName, newName) {
    const oldNameIndex = this.potions.indexOf(oldName);
    this.potions.splice(oldNameIndex, 1, newName);
    return this.potions;
  },
};

console.log(atTheOldToad.updatePotionName('Дыхание дракона', 'Полиморф')); // ['Зелье скорости', 'Полиморф', 'Каменная кожа']
console.log(atTheOldToad.updatePotionName('Каменная кожа', 'Невидимка')); // ['Зелье скорости', 'Полиморф', 'Невидимка']
