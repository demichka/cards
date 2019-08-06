let cards = new CardDeck();
let gameBoard = new GameBoard(cards);
console.log("cards should be in right order: ", gameBoard.cardDeck);
let shuffled = gameBoard.shuffleCardDeck(gameBoard.cardDeck.slice());
console.log("shuffled: ", shuffled);
let slim = new Player("Slim");
let luke = new Player("Luke");
// let mike = new Player("Mike");

gameBoard.addPlayer(slim);
gameBoard.addPlayer(luke);
// gameBoard.addPlayer(mike);

console.log("these players are added:");

for (let player of gameBoard.players) {
  console.log(player.name);
}
let cardsInGame = shuffled.slice();
gameBoard.dealCards(cardsInGame, 5);

let showCards = (player) => {
  for (let card of player.playersCards) {
    console.log(`${card.name}, ${card.color}, ${card.value}`);
  }
}

for (let player of gameBoard.players) {
  console.log("************************");
  console.log(`${player.name} cards:`)
  showCards(player);
  console.log(`${player.name} has ${player.sum} points`);
}

console.log(cardsInGame, "rest of cards");
console.log("************************");

for (let player of gameBoard.players) {
  gameBoard.playerPutCards(player, 2);
  gameBoard.playerTakeCards(cardsInGame, player, 2);
}

console.log(cardsInGame, "rest of cards");
console.log("************************");

for (let player of gameBoard.players) {
  gameBoard.playerPutCards(player, player.playersCards.length);
}

cardsInGame = cardsInGame.concat(gameBoard.stack);
let restInStack = gameBoard.stack.slice();
console.log(restInStack), "Stack before clean";
gameBoard.stack.splice(0, gameBoard.stack.length);
console.log('Stack is empty now');

console.log(`stack: ${gameBoard.stack.length}`);
console.log(cardsInGame.slice());
console.log("///////////////////////////Shuffle cards:");
cardsInGame = gameBoard.shuffleCardDeck(cardsInGame);

console.log(cardsInGame);