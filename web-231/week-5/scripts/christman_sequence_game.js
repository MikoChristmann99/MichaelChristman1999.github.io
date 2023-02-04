/*
    Title: scripts/christman_sequence_game.js
    Author: Michael Christman
    Assignment 5.2 - Sequence Game
    Date: 1/28/2023
    Description: Code that will display a numerical sequence when a user selects a number sequence from the dropdown list and press the button.
 */

    	//Executes when button is clicked.
function displaySequence() {
    //Capturing the value from the select list and assign it to a variable.
    let choice = document.getElementById('sequence').value;
    //This runs if the user selects fibonacci and clicks the button.
    if (choice == "fibonacci") {
        //fibonacciSequenceText is a variable to hold results from the first loop.
        let fibonacciSequenceText = "";
        //Starting values for the fibonacci loop.
        let number1 = 0,
            number2 = 1,
            next;
        //Loop that prints out numbers in the fibonacci sequence until it reaches 40.
        while (number1 < 40) {
            fibonacciSequenceText += number1 + ", ";
            next = number1 + number2;
            number1 = number2;
            number2 = next;
        }
        //Putting output into results div, slicing off the last 2 characters.
        document.getElementById('results').innerHTML = fibonacciSequenceText.slice(0, -2);
        //This runs if the user selects even numbers and clicks the button.
    } else if (choice == "even") {
        //evenNum holds the results of this loop output.
        let evenNumber = "";
        let next;
        let number1 = 0;
        //Loop that executes a specified statement until the test condition evaluates to false.
        do {
            evenNumber += number1 + " ,";
            next = number1 + 2;
            number1 = next;
        }
        while (number1 < 20);
        //Putting output into results div, slicing off the last 2 characters.
        document.getElementById("results").innerHTML = evenNumber.slice(0, -2);
        //This runs if the user selects odd numbers and clicks the button.       
    } else if (choice == "odd") {
        let number1;
        //oddNum holds the results of this loop output.        
        oddNumber = "";
        //This loop initializes number1 to 1, and increments it as long as it's less than 20.
        for (let number1 = 1; number1 < 20; number1++) {
            if ((number1 % 2) !== 0) {
                oddNumber += number1 + " ,";
            }
        }
        //Putting output into results div, slicing off the last 2 characters.        
        document.getElementById("results").innerHTML = oddNumber.slice(0, -2);
        //This runs if the user doesn't make a selection and presses the button.
    } else {
        alert("Invalid selection, please try again!");
    }
    }
