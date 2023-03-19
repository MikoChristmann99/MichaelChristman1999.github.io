/**
   ==================================================
   ; Title: Exercise 1.3 - Modules
   ; Author: Michael Christman
   ; Date: March 19th, 2023
   ; Modified By: Michael Christman
   ; Description: Recreating the module example.
   ;=================================================
   */

//Creating a require statement for the URL library.   
var url = require('url');

//Variable to hold a string URL variable value.
var parsedURL = url.parse('https://www.example.com/profile?name=alex');

//Capturing different pieces of the string URL using console.log
console.log(parsedURL.protocol);

console.log(parsedURL.host);

console.log(parsedURL.query);
