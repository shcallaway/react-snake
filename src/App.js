import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';

class App extends Component {
  render() {
    return <Game />;
  }
}

var KEYCODES = [37, 38, 39, 40];
var INTERVAL = null;

// this doesn't need to be a React component, right? nothing to render.
class Snake {
  
  constructor() {

    this.body = [[10, 10]];
    this.max_length = 100;
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

class Candy {

  constructor() {

    this.location = [50, 50];

  }

  setLocation(c_width, c_height) {

    // do a random number calculation for x and y
    // where x < c_width & > 0 and y < c_height & > 0

    this.location = [50, 50]
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

    var x = candy.location[0], y = candy.location[1];
    ctx.moveTo(x, y);
    ctx.lineTo(x + 1, y + 1);
    ctx.stroke();

  }

  render() {

    return <canvas className="canvas"></canvas>;

  }

}

class Game extends Component {
  constructor() {
    super();

    this.state = {
      snake: new Snake(),
      canvas: new Canvas(),
      candy: new Candy(),
      speed: 10,
      status: 0 // inactive
    }
  }

  componentDidMount() {
    
    // add listener for all key presses
    document.addEventListener("keydown", e => this.handleKeyPress(e), false);

  }

  handleKeyPress(e) {

    // if game is inactive and key pressed was space bar, begin
    var space_bar = (e.keyCode == 32), inactive = (this.state.status == 0);
    if (space_bar && inactive ) this.begin();

    // determine if event keyCode represents a directional key
    var dir_key = KEYCODES.indexOf(e.keyCode) == -1 ? false : true;

    if (dir_key) {
      var snake = this.state.snake;
      snake.direction = e.keyCode;
    }

  }

  begin() {

    var snake = this.state.snake;
    var canvas = this.state.canvas;
    var candy = this.state.candy;
    var speed = this.state.speed;

    // might want to refactor speed so it behaves more logically

    INTERVAL = setInterval(function() {
      snake.move();
      canvas.draw(snake, candy);
      this.checkForCollision();
    }.bind(this), speed, snake, canvas);

    this.setState({status: 1}); // active

  }

  end() {

    clearInterval(INTERVAL);
    INTERVAL = null;

    this.setState({status: 2}); // over

  }

  checkForCollision() {

    if (this.checkForWallCollision() || this.checkForTailCollision()) this.end();

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

    var status = this.state.status;

    switch (status) {
      case 0: // inactive (display tutorial message)
        var message = <TutorialMsg />; break;
      case 1: // active (no messages)
        var message = null; break; 
      case 2: // over (display game over message)
        var message = <GameOverMsg />; break; 
      default: return;
    }

    var canvas = <Canvas />;

    return (
      <div className="main-container">
        {canvas}
        {message}
      </div>
    );
  }
}

function StartMenu(props) {
  return (
    <div>
      <p>React Snake</p>
      <button>Start</button>
    </div>
  );
}

function TutorialMsg(props) {
  return (
    <div className='tutorial-msg'>
      <p>1. Use the arrow keys to change direction.<br />
      2. Avoid contact with walls and yourself.<br />
      3. Gather as much candy as possible.</p>
      <p>Press the space bar to begin.</p>
    </div>
  );
}

function GameOverMsg(props) {
  return <div className='game-over-msg'><p>Game over.</p></div>;
}

export default App;