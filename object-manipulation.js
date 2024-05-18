const books = [
  { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "The Lord of the Rings", author: "J. R. R. Tolkien", year: 1954 },
  {
    title: "One Hundred Years of Solitude",
    author: "Gabriel García Márquez",
    year: 1967,
  },
  { title: "Frankenstein", author: "Mary Shelley", year: 1818 },
];

function getBookTitles(books) {
  if (!Array.isArray(books) || !books.length) {
    return console.log("Please provide a valid argument.");
  }

  const bookTitles = books.map(({ title }) => title);

  console.log(bookTitles);
}

getBookTitles(books);
