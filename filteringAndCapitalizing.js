/*4. Filtering and Capitalizing: Books Published After 2010 with Author Names.
Write a program that takes a list of books, including their authors and publication years as input. The program should then filter out all books that were published before 2010 and create a new array with the remaining 
books, but with their author names capitalized.*/
const books = [
    {bookTitle:"Pride and Prejudice",author:"Jane Austen", year:1813},
    {bookTitle:"To Kill a Mockingbird",author:"Harper Lee",year:1960},
    { bookTitle: "Lincoln in the Bardo", author: "George Saunders", year: 2017 },
    { bookTitle: "The Martian", author: "Andy Weir", year: 2011 },
    { bookTitle: "Milkman", author: "Anna Burns", year: 2018 },,
    { bookTitle: "Sapiens: A Brief History of Humankind", author: "Yuval Noah Harari", year: 2014 },   
]
const filteredBook = books.filter(y =>
    y.year<2010);
const capitalizedBooks = filteredBook.map(book => {
    book.author = book.author.toUpperCase();
    return book;
  });
console.log(capitalizedBooks);


