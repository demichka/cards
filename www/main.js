let cards = new CardDeck();
let gameBoard = new GameBoard(cards);

//Part 1
//new card deck
console.log("cards should be in right order: ", gameBoard.cardDeck);

//shuffle card deck
let shuffled = gameBoard.shuffleCardDeck(gameBoard.cardDeck.slice());
console.log("shuffled: ", shuffled);

//Part 2
//add players
let slim = new Player("Slim");
let luke = new Player("Luke");

gameBoard.addPlayer(slim);
gameBoard.addPlayer(luke);

console.log("these players are added:");

for (let player of gameBoard.players) {
  console.log(player.name);
}


//Take a copy of shuffled card deck to prevent changes in initial one
let cardsInGame = shuffled.slice();

//deal cards to players
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

//Part 3
//players throw cards and take another two from card deck
for (let player of gameBoard.players) {
  gameBoard.playerPutCards(player, 2);
  gameBoard.playerTakeCards(cardsInGame, player, 2);
}

console.log(cardsInGame, "rest of cards");
console.log("************************");


//Part 4
//players throw all their cards to the throwing pile
for (let player of gameBoard.players) {
  gameBoard.playerPutCards(player, player.playersCards.length);
}

//throwing pile returns to the card deck
cardsInGame = cardsInGame.concat(gameBoard.stack);
let restInStack = gameBoard.stack.slice();
console.log(restInStack), "Stack before clean";
gameBoard.stack.splice(0, gameBoard.stack.length);
console.log('Throwing pile is cleaned');

console.log(`stack: ${gameBoard.stack.length}`);
console.log("Threw cards returned to the pile");
console.log(cardsInGame.slice());
console.log("///////////////////////////Shuffle cards:");
cardsInGame = gameBoard.shuffleCardDeck(cardsInGame);

console.log(cardsInGame);