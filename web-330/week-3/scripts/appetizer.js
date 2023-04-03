/*
    ==================
    Title: appetizer.js, 
    Author: William Austin
    Date: 3/28/2023
    Description: Creating a Appetizer Class Module 
*/


import {Product} from "./products.js";

export class Appetizer extends Product{
    constructor(name, price){
        super(name, price);
    }
}