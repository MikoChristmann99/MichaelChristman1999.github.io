/*
    ==================
    Title: cart-component.js, 
    Author: William Austin
    Date: 4/12/2023
    Description: Creating a CartComponent class, which creates the 'cart-component' html tag
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
