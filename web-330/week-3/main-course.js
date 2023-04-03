/*
    ==================
    Title: main-course.js, 
    Author: William Austin
    Date: 3/28/2023
    Description: Creating a Main Course Class Module 
*/
import {Product} from "./products.js";

export class MainCourse extends Product{
    constructor (name, price){
        super(name, price);
    }
}