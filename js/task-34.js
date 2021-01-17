// Задание
// Добавь объекту bookShelf ещё два метода, которые пока что будут возвращать просто строки по аналогии с getBooks()
// и addBook(bookName).

// Метод removeBook(bookName) будет удалять книгу по имени.Возвращает строку 'Удаляем книгу <имя книги>',
//     где < имя книги > это значение параметра bookName.

// Метод updateBook(oldName, newName) будет обновлять название книги на новое.Возвращает строку
// 'Обновляем книгу <старое имя> на <новое имя>', где < старое имя > и < новое имя > это значения параметров
// oldName и newName соотвественно.


const bookShelf = {
  books: ['Последнее королевство', 'Страж снов'],
  getBooks() {
    return 'Возвращаем все книги';
  },
  addBook(bookName) {
    return `Добавляем книгу "${bookName}"`;
    },
    removeBook(bookName) {
        return `Удаляем книгу "${bookName}"`;
    },
    updateBook(oldName, newName) {
        return `Обновляем книгу "${oldName}" на "${newName}"`
     }
};

console.log(bookShelf.getBooks()) // возвращает строку 'Возвращаем все книги';
console.log(bookShelf.addBook('Мгла')) //  возвращает строку 'Добавляем книгу Мгла';
console.log(bookShelf.removeBook('Красный закат')) // возвращает строку 'Удаляем книгу Красный закат';
console.log(bookShelf.updateBook('Пески Дюны', 'Дюна')) // возвращает строку 'Обновляем книгу Пески Дюны на Дюна';

