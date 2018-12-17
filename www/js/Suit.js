class Suit extends Component {

  constructor(name){
    super();

    this.name = name;
    this.children = [];
    this.values = [];
  
  //this.addChildren();

  }

  addChildren(child){
    this.children.push(child);
  }
}