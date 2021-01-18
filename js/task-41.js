// Задача. Расширяем инвентарь
// Задание
// Заказчица хочет чтобы каждое зелье было представлено не только именем, но и ценой,
//     а в будущем может быть и другими характеристиками.Поэтому теперь в свойстве potions будет
// храниться массив объектов со следующими свойствами.

// {
//   name: 'Дыхание дракона',
//   price: 700
// }
// Выполни рефакторинг методов объекта atTheOldToad так, чтобы они работали не с массивом строк, а с массивом объектов.

// getPotions() - метод для получения всех зелий. Возвращает значение свойства potions.
// addPotion(newPotion) - добавляет зелье newPotion (уже объект) в массив в свойстве potions.
// removePotion(potionName) - удаляет объект зелья с именем potionName из массива в свойстве potions.
// updatePotionName(oldName, newName) - обновляет свойство name объекта-зелья с названием oldName на newName в массиве potions.

const atTheOldToad = {
  potions: [
    { name: 'Зелье скорости', price: 460 },
    { name: 'Дыхание дракона', price: 780 },
    { name: 'Каменная кожа', price: 520 },
  ],

    getPotions() {
    const array = [...this.potions];
    return array;
    },
  
    addPotion(potionName) {
      for(const potion of this.potions)
    if (potion.name === potionName.name) {
      return `Зелье ${potionName} уже есть в инвентаре!`;
    }
        this.potions.push(potionName);
        return this.potions;
  },
    
    removePotion(potionName) {    
        for (const potion of this.potions) {
            if (potion.name === potionName) {
                const potionIndex = this.potions.indexOf(potion);
                this.potions.splice(potionIndex, 1);
                return this.potions;
            }
        }
         return `Зелья ${potionName} нет в инвентаре!`;
  },
    updatePotionName(oldName, newName) {
        for (const potion of this.potions) {
            if (potion.name === oldName) {
                potion.name = newName
                return this.potions;
            }
        }
         return `Зелья ${oldName} нет в инвентаре!`;
  },
};

console.log(atTheOldToad.getPotions()); // [ { name: 'Зелье скорости', price: 460 }, { name: 'Дыхание дракона', price: 780 }, { name: 'Каменная кожа', price: 520 } ]
console.log(atTheOldToad.addPotion({ name: 'Зелье силы', price: 270 })); // в массиве potions последним элементом будет этот объект.
console.log(atTheOldToad.addPotion({ name: 'Невидимка', price: 620 })); // в массиве potions последним элементом будет этот объект.
console.log(atTheOldToad.removePotion('Дыхание дракона')); // в свойстве potions будет массив [ { name: 'Зелье скорости', price: 460 }, { name: 'Каменная кожа', price: 520 } ]
console.log(atTheOldToad.removePotion('Зелье скорости')); // в свойстве potions будет массив [ { name: 'Дыхание дракона', price: 780 }, { name: 'Каменная кожа', price: 520 } ].
console.log(atTheOldToad.updatePotionName('Дыхание дракона', 'Полиморф')); // в свойстве potions будет массив [ { name: 'Зелье скорости', price: 460 }, { name: 'Полиморф', price: 780 }, { name: 'Каменная кожа', price: 520 } ].
console.log(atTheOldToad.updatePotionName('Каменная кожа', 'Зелье неуязвимости')); // в свойстве potions будет массив [ { name: 'Зелье скорости', price: 460 }, { name: 'Дыхание дракона', price: 780 }, { name: 'Зелье неуязвимости', price: 520 } ].

