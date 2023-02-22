// Name: scripts/christman-alphabet-game.js
// Author: Michael Christman
// Date: 2/21/2023
// Assignment 8.2: Alphabet Game
// Description: JavaScript code for the alphabet game assignment

//Creating an array that contains the entire english alphabet.
      let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
          'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
      ];

      //Creating an empty string to be used in a loop.
      let alphabetOutput = "";

      //Building a string of letters by iterating over the array.
      for (i in alphabet) {
          alphabetOutput += alphabet[i] + ', ';
      }

      //Removing trailing spaces/commas and binding the string to the div.
      document.getElementById('alphabet').innerHTML = alphabetOutput.slice(0, -2);


      //Fires when the find letter button is clicked.
      function findLetter() {

          //Getting the entered value and binding it to a variable named pos.
          let pos = document.getElementById('txtPosition').value;

          //Starting the array at 1 instead of 0.
          let letter = alphabet[pos - 1]; 

          //If the input field is undefined, display message/container.
          if (letter === undefined) {
              document.getElementById('results-container').style.display = "block";
              document.getElementById('alphabet-results').innerHTML = `There are not ${pos} letters in the alphabet`;
          } else {
              //If the inputted number is less than 27 but not 0, display message/container.
              document.getElementById('results-container').style.display = "block";
              document.getElementById('alphabet-results').innerHTML = `${letter} is at position ${pos} in the alphabet`;

          }

      }
