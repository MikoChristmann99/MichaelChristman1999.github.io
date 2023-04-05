/*
    ==================
    Title: dessert.js, 
    Author: Michael Christman
    Date: March 31st, 2023
    Description: This is the dessert class module
*/
import {Product} from "./products.js";

export class Dessert extends Product {
    constructor (name, price){
        super(name, price);
    }
}
