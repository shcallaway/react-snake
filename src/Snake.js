class Snake {
  
  constructor() {

    this.body = [[10, 10]];
    this.max_length = 100;
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

    this.grow([x, y]);

  }  

  grow(new_coordinates) {

    var body = this.body;

    // adds new coordinates to front of array
    body.unshift(new_coordinates);

    // removes old coordinates from end of array if necessary
    if (body.length === this.max_length) body.pop();

    this.body = body;
  
  }
}

export default Snake;