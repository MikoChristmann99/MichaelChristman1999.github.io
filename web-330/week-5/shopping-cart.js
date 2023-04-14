
/*
    ==================
    Title: shopping-cart.js, 
    Author: Michael Christman
    Date: March 14th, 2023
    Description: In this JavaScript file, I created a ShoppingCart function module for the Repair Shop app assignment.
*/

export class ShoppingCart {
    constructor(){
        this.products=[]; //the shopping cart is simply an empty array of products
    }
    count(){
        return this.products.length; //count exactly how many products are in the cart
    }
    add(product){
        this.products.push(product); //addition function, pretty self-explanatory: adds more products to the cart
    }
    *[Symbol.iterator](){
        for(let x of this.products){
            yield x;
        }

    }
}
