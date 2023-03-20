/*
============================================
; Title:  books.js
; Author: Michael Christman
; Date:   March 20th, 2023
; Description: This is the books.js file for WEB 340's week 1 assignment.
;===========================================
*/

class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
}

class BookStore {
    books = [];

    constructor() {
        this.books = [
            new Book('The Hobbit', 'J.R.R. Tolkien'),
            new Book('The Fellowship of the Ring', 'J.R.R. Tolkien'),
            new Book('The Two Towers', 'J.R.R. Tolkien'),
            new Book('The Return of the King', 'J.R.R. Tolkien'),
            new Book('Dune', 'Frank Herbert')
        ]
    }

    showBooks() {
        console.log('\n  -- DISPLAYING AVAILABLE BOOKS --');
        for (let book of this.books) {
            let currentBook = book;
        }
    }
}

let bookStore = new BookStore();
bookStore.showBooks();
