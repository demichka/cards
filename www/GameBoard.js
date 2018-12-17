class GameBoard {
    constructor() {
        this.cardDeck = new CardDeck();
        this.showCardDeck();
    }
    showCardDeck() {
        console.log(this.cardDeck);
    }
}