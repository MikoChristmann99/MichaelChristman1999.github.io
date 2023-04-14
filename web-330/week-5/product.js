/*
    ==================
    Title: product.js, 
    Author: William Austin
    Date: 4/12/2023
    Description: Creating a Product Class Module for Repair Shop App
*/

export class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
        this.id = Math.random().toString(16).slice(2); //Creates a random ID Number
    }
}