class Player {
  constructor(name) {
    this.name = name;
    this.playersCards = [];
  }

  sumCards() {
    let sum = 0;
    for (let i = 0; i < this.playersCards.length; i++) {
      sum = sum + this.playersCards[i].value;
    }
    return sum;
  }

  makeMove(num) {
    return this.playersCards.splice(0, num);
  }
  takeCards(cards) {
    this.playersCards = this.playersCards.concat(cards);
    console.log(`${this.name} takes cards:`);
    for (let card of cards) {
      console.log(card);
    }
    console.log(this.playersCards);
    console.log(this.sumCards());
    console.log("**********************");
  }
}