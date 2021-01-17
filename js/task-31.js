
// Задание
// Используя операцию rest дополни код функции add() так, чтобы она принимала любое количество аргументов,
//     считала и возвращала их сумму.
  
function add(...args) {
  let sum = 0;
    for (let i = 0; i < args.length; i++) {
  sum += args[i];
  } return sum;
}

console.log(add(15, 27)); // 42
console.log(add(12, 4, 11, 48)); // 75
console.log(add(32, 6, 13, 19, 8)); // 78
console.log(add(74, 11, 62, 46, 12, 36)); // 241

