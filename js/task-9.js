
// Задание
// Дополни код объявления объекта credentials так, чтобы в результате у него были два свойства: email и password,
//     имена которых хранятся в переменных emailInputName и passwordInputName.

// Значением свойства email должна быть строка 'henry.carter@aptmail.com', а значением свойства password - строка 'jqueryismyjam'.
const emailInputName = 'email';
const passwordInputName = 'password';

const credentials = {
  // Пиши код ниже этой строки
  [emailInputName]: 'henry.carter@aptmail.com',
  [passwordInputName]: 'jqueryismyjam',
  // Пиши код выше этой строки
};

console.log(credentials);
console.log(credentials.email); // 'henry.carter@aptmail.com
console.log(credentials.password); // 'jqueryismyjam'
