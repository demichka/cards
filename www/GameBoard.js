class GameBoard {
    constructor(cards) {
        this.cardDeck = cards.children;
        this.players = [];
        this.stack = [];
    }

    shuffleCardDeck(cards) {
        for (let i = cards.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [cards[i], cards[j]] = [cards[j], cards[i]];
        }
        return cards;
    }

    dealCards(cards, num) {
        for (let i = 0; i < this.players.length; i++) {
            this.players[i].playersCards = cards.splice(0, num);
            this.players[i].sum = this.players[i].sumCards();
        }
    }

    addPlayer(player) {
        this.players.push(player);
    }

    playerPutCards(player, num) {
        this.stack = this.stack.concat(player.makeMove(num));
    }

    playerTakeCards(cards, player, num) {
        player.takeCards(cards.splice(0, num));
    }
}