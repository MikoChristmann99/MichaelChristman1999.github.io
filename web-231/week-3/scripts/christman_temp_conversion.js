/*
    Title: scripts/christman_temp_conversion.js
    Author: Michael Christman
    Date: 1/21/2023
    Description: In this file, I declared variables that store a user input for a Fahrenheit temperature which the conversion formula in the function will convert to a Celsius temperature.
 */


        let temperature = document.getElementById("txtFahrenheit"); //text input from html
        let convertedTemp = document.getElementById("celsiusTempResult"); //<p> from html to hold conversion result
        let conversionButton = document.getElementById("temperatureConvertButton"); //button from html to assign onclick to
        
        
        // function that converts user entered contents of text input to celsius then changes inner html of result to the formula's result
        const fahrenheitToCelsius = function() {
            let fahrenheit = temperature.value;
            convertedTemp.innerHTML = String(((parseFloat(fahrenheit) - 32) / 1.8).toFixed(2));
            
        }
        
        conversionButton.onclick = fahrenheitToCelsius;
