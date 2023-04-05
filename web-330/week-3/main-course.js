/*
    ==================
    Title: main-course.js, 
    Author: Michael Christman
    Date: March 31st, 2023
    Description: This is the main course class module.
*/
import {Product} from "./products.js";

export class MainCourse extends Product{
    constructor (name, price){
        super(name, price);
    }
}
