
// Задание
// В переменной scores хранится массив результатов тестирования.Используя распыление и методы Math.max() и Math.min()
// дополни код так, чтобы в переменной bestScore был самый высокий балл, а в worstScore самый низкий.

const scores = [89, 64, 42, 17, 93, 51, 26];

const bestScore = Math.max(...scores);
const worstScore = Math.min(...scores);

console.log(bestScore) // 93
console.log(worstScore); // 17
