
// Задание
// Дополни метод updateBook(oldName, newName) так, чтобы он изменял название книги с oldName на newName в свойстве books.
// Используй indexOf() для того, чтобы найти нужный элемент массива, и splice() для того чтобы заменить этот элемент.

// This для доступа к свойствам объекта:
// const bookShelf = {
//   books: ['Последнее королевство'],
//   getBooks() {
//     return this.books;
//   },
//   addBook(bookName) {
//     this.books.push(bookName);
//   },
//   removeBook(bookName) {
//     const bookIndex = this.books.indexOf(bookName);
//     this.books.splice(bookIndex, 1);
//   },
// };

// console.log(bookShelf.getBooks()); // []
// bookShelf.addBook('Мгла');
// bookShelf.addBook('Страж снов');
// console.log(bookShelf.getBooks()); // ['Последнее королевство', 'Мгла', 'Страж снов']
// bookShelf.removeBook('Мгла');
// console.log(bookShelf.getBooks()); // ['Последнее королевство', 'Страж снов']

// Задание:

const bookShelf = {
  books: ['Последнее королевство', 'Мгла', 'Страж снов'],
  updateBook(oldName, newName) {
    // Пиши код ниже этой строки
	  const oldNameIndex = this.books.indexOf(oldName);
      this.books.splice(oldNameIndex, 1, newName);
      return this.books;
	
	
    // Пиши код выше этой строки
  },
};


console.log(bookShelf.updateBook('Мгла', 'Хроники подземелий')); // ['Последнее королевство', 'Хроники подземелий', 'Страж снов']
console.log(bookShelf.updateBook('Последнее королевство', 'Дюна')); // ['Дюна', 'Мгла', 'Страж снов']
    