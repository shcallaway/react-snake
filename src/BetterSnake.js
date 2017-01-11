var DIRECTIONS = {left: 37, up: 38, right: 39, down: 40};

class BetterSnake {
  
  constructor() {

    this.head;
    this.verticies;
    // this.max_length = 200;
    this.direction;

    this.initialize();
  
  } 

  initialize() {

    this.head = new CoordinatePair(10, 10);

    this.verticies = [];
    this.addNewVertex();

    this.direction = DIRECTIONS.right;

  }

  addNewVertex() {

    var new_vertex = this.head.copyMe();
    this.verticies.unshift(new_vertex)

  }

  updateHead() {

    switch (this.direction) {

      case 37: // left
        this.head.x--;
        break;

      case 38: // up
        this.head.y--;
        break;

      case 39: // right
        this.head.x++;
        break;

      case 40: // down
        this.head.y++;
        break;

      default: return;
    
    }

  }

  changeDirection(dir) {

    this.direction = dir;

    // store a copy of the current head CoordinatePair as a vertex at the front of the array

    this.addNewVertex();
    this.printVerticies();

  }

  printVerticies() {

    var string = '';
    for (var i = 0; i < this.verticies.length; i++) {
      string += '(' + this.verticies[i].x + ', ' + this.verticies[i].y + ') ';

    }

    console.log(string)

  }

}

class CoordinatePair {

  constructor(x, y) {

    this.x = x;
    this.y = y;

  }

  copyMe() {

    return new CoordinatePair(this.x, this.y)

  }

}

export default BetterSnake;