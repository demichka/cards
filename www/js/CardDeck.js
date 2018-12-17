class CardDeck {

  constructor(){
    this.children = [];
    this.names = ['Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King', 'Ace'];
    this.colors = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
    this.addChildren();
  }

  addChildren(){
    let value = 1;
    for (let name in this.names) {
      value++;
      for (let color in this.colors) {
        this.children.push(new Card(this.colors[color], this.names[name], value));
      }
    }
  }
}