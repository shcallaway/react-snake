import React, { Component } from 'react';
import $ from 'jquery';

class Canvas extends Component {

  constructor() {
    
    super();

    this.state = {
      width: 200,
      height: 200,
    }

  }

  componentDidMount() {

    var ctx = this.getContext()
    var width = this.state.width, height = this.state.height;
    ctx.canvas.width = width, ctx.canvas.height = height;

  }

  getContext() {

    var c = document.getElementsByClassName("canvas")[0];
    return c.getContext("2d");
  
  }

  clear() {

    var ctx = this.getContext();
    var width = this.state.width, height = this.state.height;

    ctx.canvas.width = width, ctx.canvas.height = height;
    ctx.clearRect(0, 0, width, height);

  }

  draw(snake, candy) {

    this.clear();
    this.drawSnake(snake);
    this.drawCandy(candy);

  }

  drawSnake(snake) {


    var ctx = this.getContext();
    var head = snake.head, verticies = snake.verticies;

    // draw the line from head to the first vertex

    ctx.moveTo(head.x, head.y);
    ctx.lineTo(verticies[0].x, verticies[0].y);
    ctx.stroke();

    // console.log('draw line from ' + head.x + ', ' + head.y + ' to ' + verticies[0].x + ', ' + verticies[0].y)

    // draw the other lines between verticies

    for (var i = 1; i < verticies.length; i++) {

      // grab the previous vertex

      ctx.moveTo(verticies[i-1].x, verticies[i-1].y);

      // draw a line to the current vertex

      ctx.lineTo(verticies[i].x, verticies[i].y);
      ctx.stroke();

    }

    // IDEA TO IMPROVE PERFORMANCE USING SECTION BUILDER
    // create section builder object
    // pass snake body to section builder build method
    // store array of sections and iterate over it
    // for each section, draw a line from [start_x, start_y] to [end_x, end_y]

  }

  drawCandy(candy) {

    var ctx = this.getContext();

    var x = candy.location[0], y = candy.location[1];
    ctx.rect(x, y, 10, 10);
    ctx.stroke();

  }

  render() {

    return <canvas className="canvas"></canvas>;

  }

}

class Section {

  constructor() {

    this.start_x;
    this.start_y;
    this.end_x;
    this.end_y;
    this.length;

  }

}

class SectionBuilder {

  build(body) {

    // create an empty array (to be populated with sections)
    // pass the body to buildOneSection and store the section
    // chop off the portion of the body within the section (using section length)
    // repeat until the body is empty
    // return the array of sections

  }

  buildOneSection(body) {

    // looks at first two entries in 2d array to determine the constant dimension (is x or y the same across pairs?)
    // assigns section start_x and start_y to first coordinate pair
    // iterates over the 2d array, incrementing section length on each iteration
    // keeps going until pattern breaks (constant dimension changes)
    // assigns section end_x and end_y to the coordinate pair just prior to the break
    // assigns the section length to the calculated length
    // returns the section

  }

}

export default Canvas;