/*
    ==================
    Title: appetizer.js, 
    Author: Michael Christman
    Date: March 31st, 2023
    Description: This is the appetizer class module
*/


import {Product} from "./products.js";

export class Appetizer extends Product{
    constructor(name, price){
        super(name, price);
    }
}
