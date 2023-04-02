/** 
   Title: bill.js
   Author: Michael Christman
   Date: March 31st, 2023
   Description: Module bill.js
   Sources https://www.w3schools.com/jsref/jsref_tofixed.asp
*/

import { Product } from "./product.js";



export class Bill {

    //Assigning class props to an empty array.
    constructor(_beverages, _appetizers, _mainCourses, _desserts)
    {
    
        this._beverages = [];
        this._appetizers = [];
        this._mainCourses = [];
        this._desserts = [];
    }


     addBeverage(beverage) {

        //Pushing the beverage object to the _beverages array.
        this._beverages.push(beverage);
    }

     addAppetizer(appetizer) {

        this._appetizers.push(appetizer);

    }

     addMainCourse(mainCourse) {

        this._mainCourses.push(mainCourse);
    }

     addDessert(dessert){

        this._desserts.push(dessert);
    }

     getTotal() {
        //Creating variable total with initial value of 0.
        let total = 0;

        //Using for loop to iterate over each array. Then calculate the total price of each object.
        //Using parseFloat to ensure results are returned in a floating point number.
        let beverageTotal = this._beverages.forEach(function(beverage) {
            
            total += parseFloat(beverage.price);

        });

        let mainCourseTotal = this._mainCourses.forEach(function(mainCourse) {

            total += parseFloat(mainCourse.price);
        });

        let appetizerTotal = this._appetizers.forEach(function(appetizer) {

            total += parseFloat(appetizer.price);

        })

        let dessertTotal = this._desserts.forEach(function(dessert) {

            total += parseFloat(dessert.price);

        })


        console.log(total);
        //Returning total variable and setting precision to 2 decimal places.
        return total.toFixed(2);

    }

}
