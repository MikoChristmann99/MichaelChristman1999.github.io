/*
    ==================
    Title: dessert.js, 
    Author: William Austin
    Date: 3/28/2023
    Description: Creating a Dessert Class Module 
*/
import {Product} from "./products.js";

export class Dessert extends Product {
    constructor (name, price){
        super(name, price);
    }
}