import { MAX_LENGTH, GROWTH_AMT, INITIAL_Y, INITIAL_X, DIRECTIONS } from './constants.js';
import Vertex from './vertex.js';

class Snake {
  
  constructor() {

    this.head;
    this.verticies;
    this.length;
    this.direction;
    this.max_len;

    this.initialize();
  
  } 

  reset() {

    this.initialize();

  }

  initialize() {

    this.head = new Vertex(INITIAL_X, INITIAL_Y);

    this.verticies = [];
    this.addNewVertex();

    this.length = 0;
    this.direction = DIRECTIONS.right;
    this.max_len = MAX_LENGTH;

  }

  addNewVertex() {

    // copies are necessary so as to not accidentally modify vertexes when updating head
    // new vertices get added to the front of the array... old ones popped off the back

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

    var new_ult_x, new_ult_y, new_ult_vertex;

    if (ult_vertex.y < penult_vertex.y) {
      
      // create new ultimate vertex with incremented y coordinate
      new_ult_x = ult_vertex.x;
      new_ult_y = ult_vertex.y + 1;
      new_ult_vertex = new Vertex(new_ult_x, new_ult_y);

      // remove old ultimate vertex and replace it
      this.verticies.pop();
      this.verticies.push(new_ult_vertex);

    } else if (ult_vertex.y > penult_vertex.y) {

      // create new ultimate vertex with incremented y coordinate
      new_ult_x = ult_vertex.x;
      new_ult_y = ult_vertex.y - 1;
      new_ult_vertex = new Vertex(new_ult_x, new_ult_y);

      // remove old ultimate vertex and replace it
      this.verticies.pop();
      this.verticies.push(new_ult_vertex);

    } else {

      this.verticies.pop();

    }

  }

  handleHorizontalShrinkage(ult_vertex, penult_vertex) {

    var new_ult_x, new_ult_y, new_ult_vertex;

    if (ult_vertex.x < penult_vertex.x) {
      
      // create new ultimate vertex with incremented y coordinate
      new_ult_x = ult_vertex.x + 1;
      new_ult_y = ult_vertex.y;
      new_ult_vertex = new Vertex(new_ult_x, new_ult_y);

      // remove old ultimate vertex and replace it
      this.verticies.pop();
      this.verticies.push(new_ult_vertex);

    } else if (ult_vertex.x > penult_vertex.x) {

      // create new ultimate vertex with incremented y coordinate
      new_ult_x = ult_vertex.x - 1;
      new_ult_y = ult_vertex.y;
      new_ult_vertex = new Vertex(new_ult_x, new_ult_y);

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

  }

  printVerticies() {

    var string = '';
    for (var i = 0; i < this.verticies.length; i++) {
      string += '(' + this.verticies[i].x + ', ' + this.verticies[i].y + ') ';
    }

    console.log(string)

  }

}

export default Snake;