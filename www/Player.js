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
}