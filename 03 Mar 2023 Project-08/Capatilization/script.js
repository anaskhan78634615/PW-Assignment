const books = [
  {
    title: 'Book1',
    author: 'Author1',
    year: 2009
  },
  {
    title: 'Book2',
    author: 'Author2',
    year: 2011
  },
  {
    title: 'Book3',
    author: 'Author3',
    year: 2007
  }
];

const filteredBooks = books.filter(book => book.year >= 2010).map(book => ({ title: book.title, author: book.author.toUpperCase() }));

console.log(filteredBooks);
