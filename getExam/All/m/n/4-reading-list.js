/**
 * Keep track of which books you read and which books you want to read!
 *  
 * Follow the steps:
 *  Declare a variable that holds an array of 3 objects, where each object describes a book and has properties for the title (string), author (string), and alreadyRead (boolean indicating if you read it yet).
 *  Loop through the array of books.
 *  For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
 *  Create a conditional statement to change the log depending on whether you read it yet or not. If you read it, log a string like You already read "The Hobbit" right after the log of the book details
 *  If you haven't read it log a string like You still need to read "The Lord of the Rings"
 */
const listOfBooks = [{
        title: 'Hard Times',
        author: 'Charles Dickens',
        alreadyRead: true
    },
    {
        title: 'The Grapes of Wrath',
        author: 'John Steinbeck',
        alreadyRead: true
    },
    {
        title: 'The Fellowship of the Ring',
        author: 'Peter Jackson',
        alreadyRead: false
    }
];
for (let bookIndex in listOfBooks) {
    const book = listOfBooks[bookIndex];

    if (book.alreadyRead) {
        console.log(`${book.title} by ${book.author}. You already read "${book.title}".`);
    } else {
        console.log(`${book.title} by ${book.author}. You still need to read "${book.title}".`);
    }
}



// // another solution 
// for (let book in listOfBooks) {
//     if (listOfBooks[book].alreadyRead) {
//         console.log(`${listOfBooks[book].title} by ${listOfBooks[book].author}. You already read "${listOfBooks[book].title}".`);
//     } else {
//         console.log(`${listOfBooks[book].title} by ${listOfBooks[book].author}. You still need to read "${listOfBooks[book].title}".`);
//     }
// }