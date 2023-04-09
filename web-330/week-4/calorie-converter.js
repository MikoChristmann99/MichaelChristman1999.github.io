/*
    ==================
    Title: calorie-converter.js, 
    Author: Michael Christman
    Date: April 7th, 2023
    Description: JS file to create an array of FoodModel objects
                 and a function which will match each object with the user's input
*/

import {FoodModel} from "./food-model.js";

export class CalorieConverter{
    static data = [
        new FoodModel(1007, "Egg", 78),
        new FoodModel(1008, "Apple", 95),
        new FoodModel(1009, "Hamburger", 354),
        new FoodModel(1010, "Fries", 400),
        new FoodModel(1011, "Banana", 105),
        new FoodModel(1012, "Soda", 150),
    ]
    static find(string) {
        return this.data.filter(foodModel => foodModel.name.toLowerCase().includes(string.toLowerCase()));
    }
}

