/*
    ==================
    Title: beverage.js, 
    Author: William Austin
    Date: 3/28/2023
    Description: Creating a Beverage Class Module 
*/

import {Product} from "./products.js";

export class Beverage extends Product{
    constructor(name, price){
        super(name, price);
    }
}