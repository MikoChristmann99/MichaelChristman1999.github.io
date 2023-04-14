/*
    ==================
    Title: product.js, 
    Author: Michael Christman
    Date: April 14th, 2023
    Description: In this file, I created a Product class module for the Repair Shop app assignment
*/

export class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
        this.id = Math.random().toString(16).slice(2); //Creates a random ID Number
    }
}
