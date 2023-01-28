/*
    Title: scripts/christman_temp_conversion.js
    Author: Michael Christman
    Date: 1/28/2023
    Description: JavaScript code including function numberGuess and declared variables for the number guessing game
 */


/*The computer generates a random number between 1 and 10 and assigns it to a variable named randomNum. */
const randomNum = Math.floor((Math.random() * 10) + 1);

function numberGuess() {
    /* Acquires the text value from the txtMyNumber input tag and assigns it to the variable, userNum */
    let userNum = document.getElementById("txtMyNumber").value;
    /* Compares userNum and checks if it's greater than the random number generated */
    /* If the user input is greater, the results will display the appropriate message. */
    /* If the user input is lesser, the results will display another message. */
    /* It will also check to see if the input number matches the randomly generated number, then a message telling the user that they chose the correct number will be displayed. */
    if(userNum > randomNum) {
        document.getElementById('results').innerHTML = "The random number is less than " + userNum;
    } else if(userNum < randomNum) {
        document.getElementById('results').innerHTML = "The random number is greater than " + userNum;
    } else if(userNum = randomNum) {
        document.getElementById('results').innerHTML = "Congratulations! You chose the correct number!";
    }
}
