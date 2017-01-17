import { CANDY_SIZE } from './constants.js';

class Candy {

  constructor() {

    this.location;
    this.size = CANDY_SIZE;

  }

  move(c_width, c_height) {

    // generate a random x and y coordinate within the canvas dimensions

    var ran_x = Math.random() * c_width;
    var ran_y = Math.random() * c_height;

    // prevent the candy from going off-screen if too close to canvas edge
    
    if (ran_x >= (c_width - this.size)) (ran_x -= this.size);
    if (ran_y >= (c_height - this.size)) (ran_y -= this.size);

    this.location = [ran_x, ran_y];

  }

}

export default Candy;