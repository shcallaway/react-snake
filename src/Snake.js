class Snake {
  
  constructor() {

    this.body = [[10, 10]];
    this.max_length = 200;
    this.direction = 39;
  
  }

  move() {
  
    // retrieve current head of the snake
    var x = this.body[0][0], y = this.body[0][1];

    // increment appropriate coordinate
    switch (this.direction) {
      case 37: x--; break; // left
      case 38: y--; break; // up
      case 39: x++; break; // right
      case 40: y++; break; // down
      default: return;
    }

    var body = this.body;

    // adds new coordinates to front of array
    body.unshift([x, y]);

    // removes old coordinates from end of array if necessary
    if (body.length === this.max_length) body.pop();

    this.body = body;

  }  

  grow() {

    this.max_length = this.max_length + 50;
  
  }

}

export default Snake;