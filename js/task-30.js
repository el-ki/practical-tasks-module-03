// Задача. Карточки задач
// Задание
// Напиши функцию makeTask(data) которая принимает один параметр data - объект со следующими свойствами.

// text - текст задачи.
// category - категория задачи.
// priority - приоритет задачи.
// Функция должна составить и вернуть новый объект задачи, не изменяя напрямую параметр data.
// В новом объекте должно быть свойство completed, значение которого хранится в одноимённой локальной переменной.

// В параметре data гарантированно будет только свойство text, а остальные два, category и priority, могут отсутствовать.
//     Тогда, в новом объекте задачи, в свойствах category и priority должны быть значения по умолчанию, хранящиеся в одноимённых локальных переменных.
function makeTask(data) {
  const completed = false;
  const category = 'Общее';
  const priority = 'Обычный';

    return {completed, category, priority, ...data}
}

console.log(makeTask({})); // { category: 'Общее', priority: 'Обычный', completed: false }
console.log(makeTask({ category: 'Домашнее', priority: 'Низкий', text: 'Вынести мусор' })); // { category: 'Домашнее', priority: 'Низкий', text: 'Вынести мусор', completed: false }
console.log(makeTask({ category: 'Финансы', text: 'Забрать проценты' })); // { category: 'Финансы', priority: 'Обычный', text: 'Забрать проценты', completed: false }
console.log(makeTask({ text: 'Купить хлеб' })); // { category: 'Общее', priority: 'Обычный', text: 'Купить хлеб', completed: false }

