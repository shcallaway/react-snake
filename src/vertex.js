class Vertex {

  constructor(x, y) {

    this.x = x;
    this.y = y;

  }

  copy() {

    return new Vertex(this.x, this.y)

  }

}

export default Vertex;