let cards = new CardDeck();
let gameBoard = new GameBoard(cards);
console.log("cards should be in right order: ", gameBoard.cardDeck);
let shuffled = gameBoard.shuffleCardDeck(gameBoard.cardDeck.slice());
console.log("shuffled: ", shuffled);