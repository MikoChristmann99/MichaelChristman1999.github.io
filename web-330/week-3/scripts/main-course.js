/** 
   Title: main-course.js
   Author: Michael Christman
   Date: March 31st, 2023
   Description: Module main-course.js
*/

import { Product } from "./product.js";

export class MainCourse extends Product {

    constructor(name, price){

        super(name, price);

    }
}
