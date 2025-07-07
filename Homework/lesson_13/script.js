const form = document.querySelector("#form-book");
const ul = document.querySelector("#list-book");
const clearBtn = document.getElementById("clear-book-list");
const bookList = [
  { title: "Гарри Поттер", author: "Джоан Роулинг" },
  { title: "Гарри Поттер и философский камень", author: "Джоан Роулинг" },
  { title: "Война и мир", author: "Лев Толстой" },
];

function updateBookList() {
  ul.innerHTML = bookList
    .map((book) => {
      const title = book.title.toLowerCase();
      const author = book.author.toLowerCase();
      return `<li>${title} от ${author}</li>`;
    })
    .join("");
}

function clearBookList() {
  bookList.splice(0, bookList.length);
  updateBookList();
}

function checkBook(book) {
  const check = bookList.find(
    (el) =>
      el.title.toLowerCase() === book.title &&
      el.author.toLowerCase() === book.author
  );

  //console.log(check);

  if (!isNotOnlyDigits(book.title)) {
    alert("Название книги не может состоять только из цифр!");
    return;
  }

  if (!isNotOnlyDigits(book.author)) {
    alert("Автор книги не может состоять только из цифр!");
    return;
  }

  if (check) {
    alert("Эта книга уже есть в списке!");
  } else {
    addBook(book);
    updateBookList();
  }
}

function addBook(book) {
  bookList.push(book);
  //console.log("Книга добавленa!");
}

function isNotOnlyDigits(str) {
  return !/^\d+$/.test(str);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let book = {
    title: event.target.title.value.trim().toLowerCase(),
    author: event.target.author.value.trim().toLowerCase(),
  };

  event.target.title.value = "";
  event.target.author.value = "";
  checkBook(book);
  //console.log(book);
});

document.addEventListener("DOMContentLoaded", () => {
  updateBookList();
});

clearBtn.addEventListener("click", () => {
  clearBookList();
});
