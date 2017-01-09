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
    
    var ctx = this.getContext();
    var body = snake.body;

    for (var i = 0; i < body.length; i++) {
      var x = body[i][0], y = body[i][1];
      ctx.moveTo(x, y);
      ctx.lineTo(x + 1, y + 1);
      ctx.stroke();
    }

    // draw candy as a rectangle
    
    var x = candy.location[0], y = candy.location[1];
    ctx.rect(x, y, 10,10);
    ctx.stroke();

  }

  render() {

    return <canvas className="canvas"></canvas>;

  }

}

export default Canvas;