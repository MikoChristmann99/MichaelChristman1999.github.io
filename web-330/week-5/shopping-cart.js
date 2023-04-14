
/*
    ==================
    Title: shopping-cart.js, 
    Author: William Austin
    Date: 4/12/2023
    Description: Creating a ShoppingCart Function Module for Repair Shop App
*/

export class ShoppingCart {
    constructor(){
        this.products=[]; //the cart is an empty array of products
    }
    count(){
        return this.products.length; //the count in how many products are in the cart
    }
    add(product){
        this.products.push(product); //the add function, adds products to the cart
    }
    *[Symbol.iterator](){
        for(let x of this.products){
            yield x;
        }

    }
}
