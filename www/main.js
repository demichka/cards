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