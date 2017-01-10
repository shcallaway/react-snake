import React, { Component } from 'react';
import $ from 'jquery';

class Canvas extends Component {

  constructor() {
    
    super();

    this.state = {
      width: 600,
      height: 400,
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
    var body = snake.body;

    for (var i = 0; i < body.length; i++) {
      var x = body[i][0], y = body[i][1];
      ctx.moveTo(x, y);
      ctx.lineTo(x + 1, y + 1);
      ctx.stroke();
    }

    // FOR BETTER IMPROVE PERFORMANCE
    // iterate over snake body
    // store x and y of current coordinate, go to next coordinate
    // if new x matches old x, skip to next coordinate (sames goes for y)
    // continue skipping until new x differs from old x
    // draw a straight line from first xy to the current xy (the different ones)
    // move to next coordinate, start over again

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

export default Canvas;