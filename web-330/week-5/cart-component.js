/*
    ==================
    Title: cart-component.js
    Author: Michael Christman
    Date: April 14th, 2023
    Description: In this JS file, I created a CartComponent class, which in turn creates the 'cart-component' html tag
*/

export class CartComponent extends HTMLElement {
    constructor(){
        super(); 
    }
    connectedCallback(){
        this.innerHTML = `<i id="cartIcon" class="fa fa-shopping-cart"></i> 
        (<span id="cart-count"></span>)`;
    }
}

customElements.define('cart-component', CartComponent);
