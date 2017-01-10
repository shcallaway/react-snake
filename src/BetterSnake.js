class BetterSnake {
  
  constructor() {

    this.head;
    this.verticies = []
    // this.max_length = 200;
    this.direction = 39;

    this.initialize();
  
  } 

  initialize() {

    var initial_pos = new CoordinatePair(10, 10);
    this.head = initial_pos;
    this.verticies.unshift(initial_pos);

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

  changeDirection() {

    // store the current CoordinatePair as a vertex
    this.verticies.push(this.head)

  }

}

class CoordinatePair {

  constructor(x, y) {

    this.x = x;
    this.y = y;

  }

}

export default BetterSnake;