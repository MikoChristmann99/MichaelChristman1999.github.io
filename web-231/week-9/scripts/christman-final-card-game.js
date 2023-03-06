// Title: christman-final-card-game.js
// Author: Michael Christman
// Date: 3/1/2023
// Description: Final card project for Enterprise JavaScript I. This is a card game site made with JavaScript and HTML.

//Card class, for creating cards.
class Card {
    constructor(faces, suits) {
        this.faces = faces;
        this.suits = suits;
    }
}
//This allows deck creation, shuffling, and icons to be displayed, kind of the meat and potatoes of the app.
class Dealer {
    constructor() {
        this.getDeckOfCards();
    }

    //Number of cards in the deck.
    CARD_COUNT = 52;
    //Creating an empty cards array.
    cards = [];
    //Array for faces.
    faces = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    //Array for suits.
    suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];

    //Creates new cards with each iteration of the loop.
    getDeckOfCards() {
        for (let count = 0; count < this.CARD_COUNT; count++) {
            this.cards[count] = new Card(this.faces[count % 13], this.suits[Math.floor(count / 13)]);
        }
    }

    //Shuffling the deck using a loop. Each time the loop runs it misplaces cards in the array.
    shuffle() {
        for (let firstCard = 0; firstCard < this.CARD_COUNT; firstCard++) {
            let secondCard = Math.floor(Math.random() * this.CARD_COUNT);

            let tempCard = this.cards[firstCard];
            this.cards[firstCard] = this.cards[secondCard];
            this.cards[secondCard] = tempCard;
        }
        this.cardOutput();
    }


    buildPlayingCard(card, suitIcon, faceColor, suitColor) {
        //Dynamically building the div to hold the output results.
        return `<div class='card player-card' style='width:100%'>
                    <div class='card-title' style='color: ${faceColor}; font-size: 20px; padding-left: 10px; text-align: left;'>
                        ${card}
                    </div>
                    <div class='card-content' style='font-size: 28px; padding-bottom: 25px;'>
                        <span style='color: ${suitColor}' class='${suitIcon}'></span>
                    </div>    
                </div> `;
    }

    cardOutput() {
        let cardOutputWithIcon = "";
        this.cards.forEach((card) => {
            //Determines what suit the card is.
            if (card.suits === 'Hearts') {
                cardOutputWithIcon += this.buildPlayingCard(card.faces, 'mdi mdi-cards-heart', 'red', 'red');
            } else if (card.suits === 'Diamonds') {
                cardOutputWithIcon += this.buildPlayingCard(card.faces, 'mdi mdi-cards-diamond', 'red', 'red');
            } else if (card.suits === 'Clubs') {
                cardOutputWithIcon += this.buildPlayingCard(card.faces, 'mdi mdi-cards-club', 'black', 'black');
            } else {
                cardOutputWithIcon += this.buildPlayingCard(card.faces, 'mdi mdi-cards-spade', 'black', 'black');
            }
        });
        //Binding the variable to the shuffled-results div to display the output.
        document.getElementById('shuffled-results').innerHTML = cardOutputWithIcon;
    }
}
//Fires when the button is clicked. This essentially executes all of the functions in the script section.
function dealCards() {

    new Dealer().shuffle();

}
