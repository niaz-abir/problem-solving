const books = [
  { title: "Dont judge", author: "Shakin Mahmud", year: 1910 },
  { title: "Ses Somoy", author: "Ahsan Habib", year: 1960 },
  { title: "Asman", author: "Jisan Khan", year: 1924 },
  { title: "Grand with Habit", author: "Asif Khan", year: 2007 },
  { title: "Doctor Habit", author: "Asif Najrul", year: 2004 },
];

function getBookTitles(books) {
  if (!Array.isArray(books) || !books.length) {
    return console.log("Please provide a valid argument.");
  }

  const bookTitles = books.map(({ title }) => title);

  console.log(bookTitles);
}

getBookTitles(books);
