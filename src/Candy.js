class Candy {

  constructor() {

    // initialize the candy location
    
    this.location = [200, 10];

  }

  move(c_width, c_height) {

    var ran_x = Math.random() * c_width;
    var ran_y = Math.random() * c_height;
    this.location = [ran_x, ran_y];
  }

}

export default Candy;