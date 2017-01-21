import { C_WIDTH, C_HEIGHT, CANDY_SIZE } from './constants.js';

class Candy {

  constructor() {

    this.location = this.getRandomCoords();
    this.size = CANDY_SIZE;

  }

  move() {

    this.location = this.getRandomCoords();

  }

  getRandomCoords() {

    // generate a random x and y coordinate within the canvas dimensions

    var ran_x = Math.random() * C_WIDTH;
    var ran_y = Math.random() * C_HEIGHT;

    // prevent the candy from going off-screen if too close to canvas edge
    
    if (ran_x >= (C_WIDTH - this.size)) (ran_x -= this.size);
    if (ran_y >= (C_HEIGHT - this.size)) (ran_y -= this.size);

    return [ran_x, ran_y];

  }

}

export default Candy;
