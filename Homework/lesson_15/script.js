const bookTitle = document.getElementById("title");
const bookAuthor = document.getElementById("author");
const bookYear = document.getElementById("year");

fetch("https://cryweb2025.github.io/my-favorite-book/book.json")
  .then((res) => res.json())
  .then((book) => {
    const { title, author, year } = book;
    bookTitle.textContent = title;
    bookAuthor.textContent += author;
    bookYear.textContent += year;
  })
  .catch((e) => {
    console.log(e);
  });
