import React, { Component } from 'react';
import { C_WIDTH, C_HEIGHT, S_COLOR, C_COLOR } from './constants.js';

class Canvas extends Component {

  constructor() {
    
    super();

    this.state = {
      width: C_WIDTH,
      height: C_HEIGHT
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
    ctx.strokeStyle = S_COLOR;
    ctx.stroke();

    // draw the other lines between verticies

    for (var i = 1; i < verticies.length; i++) {

      // grab the previous vertex

      ctx.moveTo(verticies[i-1].x, verticies[i-1].y);

      // draw a line to the current vertex (set the color too)

      ctx.lineTo(verticies[i].x, verticies[i].y);
      ctx.strokeStyle = S_COLOR;
      ctx.stroke();

    }

  }

  drawCandy(candy) {

    var ctx = this.getContext();

    var x = candy.location[0], y = candy.location[1];
    var size = candy.size;
    ctx.fillStyle = C_COLOR;
    ctx.fillRect(x, y, size, size);

  }

  render() {

    return <canvas className="canvas"></canvas>;

  }

}

export default Canvas;