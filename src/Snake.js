var DIRECTIONS = {left: 37, up: 38, right: 39, down: 40};

// TO-DO: 
// 1. implement BetterSnake maximum length
// 2. implement tail collisions

class Snake {
  
  constructor() {

    this.head;
    this.verticies;
    // this.max_length = 200;
    this.direction;

    this.initialize();
  
  } 

  initialize() {

    this.head = new Vertex(10, 10);

    this.verticies = [];
    this.addNewVertex();

    this.direction = DIRECTIONS.right;

  }

  addNewVertex() {

    // copies are necessary so as to not accidentally modify vertexes when updating head

    var new_vertex = this.head.copy();
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

    // store a copy of the current head Vertex as a vertex at the front of the array

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

class Vertex {

  constructor(x, y) {

    this.x = x;
    this.y = y;

  }

  copy() {

    return new Vertex(this.x, this.y)

  }

}

export default Snake;