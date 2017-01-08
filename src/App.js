import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';

class App extends Component {
  render() {
    return (
      <div>
        <Game />
      </div>
    );
  }
}

var KEYCODES = [37, 38, 39, 40]

// this doesn't need to be a React component, right? nothing to render.
class Snake {
  
  constructor() {

    this.body = [[10, 10]];
    this.max_length = 50;
    this.direction = 39;
  
  }

  move() {
  
    // retrieve current head of the snake
    var x = this.body[0][0], y = this.body[0][1];

    // increment appropriate coordinate
    switch (this.direction) {
      case 37: x--; break; // left
      case 38: y--; break; // up
      case 39: x++; break; // right
      case 40: y++; break; // down
      default: return;
    }

    this.grow([x, y]);

  }  

  grow(new_coordinates) {

    var body = this.body;

    // adds new coordinates to front of array
    body.unshift(new_coordinates);

    // removes old coordinates from end of array if necessary
    if (body.length == this.max_length) body.pop();

    this.body = body;
  
  }
}

class Canvas extends Component {

  constructor() {
    
    super();

    this.state = {
      width: 600,
      height: 400,
    }

  }

  draw(snake) {

    // grab the canvas and the context
    var c = document.getElementsByClassName("Canvas")[0];
    var ctx = c.getContext("2d");

    // clear the previous canvas and set up the new one
    var width = this.state.width, height = this.state.height;
    ctx.canvas.width = width, ctx.canvas.height = height;
    ctx.clearRect(0, 0, width, height);

    var body = snake.body;
    for (var i = 0; i < body.length; i++) {
      var x = body[i][0], y = body[i][1];
      ctx.moveTo(x, y)
      ctx.lineTo(x + 1, y + 1)
      ctx.stroke();
    }

  }

  render() {

    return <canvas className="Canvas"></canvas>

  }

}

class Game extends Component {
  constructor() {
    super();

    this.state = {
      snake: new Snake(),
      canvas: new Canvas(),
      interval: null,
      speed: 10
    }
  }


  componentDidMount() {
    
    document.addEventListener("keydown", e => this.handleKeyPress(e), false);
    this.start();

  }

  handleKeyPress(e) {

    // determine if event keyCode represents a directional key
    var directionalKey = KEYCODES.indexOf(e.keyCode) == -1 ? false : true;

    if (directionalKey) {
      var snake = this.state.snake;
      snake.direction = e.keyCode;
    }

  }

  start() {

    var snake = this.state.snake;
    var canvas = this.state.canvas;
    var speed = this.state.speed;

    // might want to refactor speed so it behaves more logically

    var interval = setInterval(function() {
      snake.move();
      canvas.draw(snake);
      this.checkForCollision();
    }.bind(this), speed, snake, canvas);

    this.setState({interval: interval})

  }

  over() {

    var interval = this.state.interval;
    clearInterval(interval);
    console.log('Game over.')

  }

  checkForCollision() {

    if (this.checkForWallCollision() || this.checkForTailCollision()) this.over();

  }

  checkForWallCollision() {

    var canvas = this.state.canvas;
    var c_width = canvas.state.width, c_height = canvas.state.height;
    var x = this.state.snake.body[0][0], y = this.state.snake.body[0][1];
    return (x >= c_width || x <= 0 || y >= c_height || y <= 0);

  }

  checkForTailCollision() {

    var body = this.state.snake.body;
    var x = body[0][0], y = body[0][1];

    // start at index 1 to skip the head coordinate pair
    for (var i = 1; i < body.length; i++) {
      var tx = body[i][0], ty = body[i][1];
      if (x == tx && y == ty) {
        return true;
      }
    }

    return false;

  }

  render() {
    return (
      <Canvas />
    );
  }
}

// function GameOverMessage(props) {
//   return <div>Game over.</div>;
// }

export default App;