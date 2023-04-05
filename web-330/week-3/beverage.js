/*
    ==================
    Title: beverage.js, 
    Author: Michael Christman
    Date: March 31st, 2023
    Description: This is the beverage class module
*/

import {Product} from "./products.js";

export class Beverage extends Product{
    constructor(name, price){
        super(name, price);
    }
}
