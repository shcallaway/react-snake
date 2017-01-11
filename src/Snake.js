var DIRECTIONS = {left: 37, up: 38, right: 39, down: 40};

// TO-DO: 
// 2. implement tail collisions

var MAX_LENGTH = 300;
var GROWTH_AMT = 50;

class Snake {
  
  constructor() {

    this.head;
    this.verticies;
    this.length;
    this.direction;
    this.max_len;

    this.initialize();
  
  } 

  initialize() {

    this.head = new Vertex(10, 10);

    this.verticies = [];
    this.addNewVertex();

    this.length = 0;
    this.direction = DIRECTIONS.right;
    this.max_len = MAX_LENGTH;

  }

  addNewVertex() {

    // copies are necessary so as to not accidentally modify vertexes when updating head

    var new_vertex = this.head.copy();
    this.verticies.unshift(new_vertex)

  }

  atMaxLength() {

    return (this.length >= this.max_len)

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

    this.increaseLength();

  }

  updateTail() {

    // don't shrink if not at max length

    if (!this.atMaxLength()) return;

    var ult_vertex = this.getUltimateVertex();
    var penult_vertex = this.getPenultimateVertex();

    if (ult_vertex.x === penult_vertex.x) { // if x same, vertical line

      this.handleVerticalShrinkage(ult_vertex, penult_vertex);

    } else if (ult_vertex.y === penult_vertex.y) { // same y means horizontal line

      this.handleHorizontalShrinkage(ult_vertex, penult_vertex);

    }

  }

  handleVerticalShrinkage(ult_vertex, penult_vertex) {

    if (ult_vertex.y < penult_vertex.y) {
      
      // create new ultimate vertex with incremented y coordinate
      var new_ult_x = ult_vertex.x, new_ult_y = (ult_vertex.y + 1);
      var new_ult_vertex = new Vertex(new_ult_x, new_ult_y);

      // remove old ultimate vertex and replace it
      this.verticies.pop();
      this.verticies.push(new_ult_vertex);

    } else if (ult_vertex.y > penult_vertex.y) {

      // create new ultimate vertex with incremented y coordinate
      var new_ult_x = ult_vertex.x, new_ult_y = (ult_vertex.y - 1);
      var new_ult_vertex = new Vertex(new_ult_x, new_ult_y);

      // remove old ultimate vertex and replace it
      this.verticies.pop();
      this.verticies.push(new_ult_vertex);

    } else {

      this.verticies.pop();

    }

  }

  handleHorizontalShrinkage(ult_vertex, penult_vertex) {

    if (ult_vertex.x < penult_vertex.x) {
      
      // create new ultimate vertex with incremented y coordinate
      var new_ult_x = (ult_vertex.x + 1), new_ult_y = ult_vertex.y;
      var new_ult_vertex = new Vertex(new_ult_x, new_ult_y);

      // remove old ultimate vertex and replace it
      this.verticies.pop();
      this.verticies.push(new_ult_vertex);

    } else if (ult_vertex.x > penult_vertex.x) {

      // create new ultimate vertex with incremented y coordinate
      var new_ult_x = (ult_vertex.x - 1), new_ult_y = ult_vertex.y;
      var new_ult_vertex = new Vertex(new_ult_x, new_ult_y);

      // remove old ultimate vertex and replace it
      this.verticies.pop();
      this.verticies.push(new_ult_vertex);

    } else {

      this.verticies.pop();

    }

  }

  getPenultimateVertex() {

    if (this.verticies.length === 1) {
      return this.head.copy();
    } else {
      return this.verticies[this.verticies.length - 2].copy();
    }

  }

  getUltimateVertex() {

    return this.verticies[this.verticies.length - 1].copy();

  }

  increaseLength() {

    if (!this.atMaxLength()) this.length++;

  }

  increaseMaxLength() {

    // hard-code the growth rate for now

    this.max_len += GROWTH_AMT;

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