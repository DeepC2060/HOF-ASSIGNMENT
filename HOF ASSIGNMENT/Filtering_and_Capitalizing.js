function filterAndCapitalizeBooks(books) {
    const filteredBooks = [];
    for (let i = 0; i < books.length; i++) {
      const book = books[i];
      if (book.publication_year >= 2010) {
        book.author = book.author.replace(/\b\w/g, l => l.toUpperCase());
        filteredBooks.push(book);
      }
    }
    return filteredBooks;
  }

  const books = [
    {title: 'The Hunger Games', author: 'suzanne collins', publication_year: 2008},
    {title: 'Mockingjay', author: 'suzanne collins', publication_year: 2010},
    {title: 'Divergent', author: 'veronica roth', publication_year: 2011},
    {title: 'The Fault in Our Stars', author: 'john green', publication_year: 2012},
    {title: 'Gone Girl', author: 'gillian flynn', publication_year: 2012}
  ];
  
  const filteredBooks = filterAndCapitalizeBooks(books);
  console.log(filteredBooks);
  