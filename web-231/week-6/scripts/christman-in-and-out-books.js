/*
    Title: scripts/christman-in-and-out-books.js
    Author: Michael Christman
    Assignment 6.2 - In-and-Out Books
    Date: 2/7/2023
    Description: JavaScript code for the In-and-Out Books assignment
 */

//Initially hiding the tables.
let books = document.getElementById('favorite-books');
let authors = document.getElementById('favorite-authors');

//Fires when page is loaded.
window.addEventListener('load', (event) => {
    //Putting values into objects. Objects can hold multiple values.     
    var book1 = {
        isbn: "054792822X",
        title: "The Hobbit",
        pages: 300
    };
    var book2 = {
        isbn: "0486478505",
        title: "The Conquest of Bread",
        pages: 304
    };
    var book3 = {
        isbn: "0375826696",
        title: "Eragon",
        pages: 528
    };

    //Mapping table
    document.getElementById('”txtBook1ISBN”').innerHTML = book1.isbn;
    document.getElementById('”txtBook1Title”').innerHTML = book1.title;
    document.getElementById('”txtBook1Pages”').innerHTML = book1.pages;

    document.getElementById('”txtBook2ISBN”').innerHTML = book2.isbn;
    document.getElementById('”txtBook2Title”').innerHTML = book2.title;
    document.getElementById('”txtBook2Pages”').innerHTML = book2.pages;

    document.getElementById('”txtBook3ISBN”').innerHTML = book3.isbn;
    document.getElementById('”txtBook3Title”').innerHTML = book3.title;
    document.getElementById('”txtBook3Pages”').innerHTML = book3.pages;  

    //Putting values into objects. Objects can hold multiple values.              
    var author1 = {
        name: "J. R. R. Tolkien",
        genre: "Fantasy"
    };
    var author2 = {
        name: "Christopher Paolini",
        genre: "Fantasy"
    };
    var author3 = {
        name: "Tracey West",
        genre: "Fantasy"
    };           
    
    //Mapping table
    document.getElementById('”txtAuthor1Name”').innerHTML = author1.name;
    document.getElementById('”txtAuthor2Name”').innerHTML = author2.name;
    document.getElementById('”txtAuthor3Name”').innerHTML = author3.name;

    document.getElementById('txtAuthor1Genre').innerHTML = author1.genre;
    document.getElementById('txtAuthor2Genre').innerHTML = author2.genre;
    document.getElementById('txtAuthor3Genre').innerHTML = author3.genre;


    document.getElementById("book-table").style.display = "none";
    document.getElementById("author-table").style.display = "none";
});


//Executes when button is clicked.
function displayListing() {

    let choice = document.getElementById('favoriteList').value;

    //If the user selects books from the dropdown
    if (choice == "books") {
        document.getElementById("author-table").style.display = "none";
        document.getElementById("book-table").style.display = "block";
        //If the user selects authors from the dropdown
    } else if (choice == 'authors') {
        document.getElementById("author-table").style.display = "block";
        document.getElementById("book-table").style.display = "none";
        //If the user selects nothing from the dropdown   
    } else if (choice == 'select') {
        document.getElementById("book-table").style.display = "none";
        document.getElementById("author-table").style.display = "none";
    }

} 
