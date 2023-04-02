/** 
   Title: dessert.js
   Author: Michael Christman
   Date: March 31st, 2023
   Description: Module dessert.js
*/
        //Import statement for the product object.
        import { Product } from "./product.js";
                      
        export class Dessert extends Product {

            constructor(name, price) {

            super(name, price);

            }
        }
