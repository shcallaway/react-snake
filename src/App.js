import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';

class App extends Component {
  render() {
    return (
      <Game />
    );
  }
}

var KEYCODES = [37, 38, 39, 40]

class Game extends Component {
  constructor() {
    super();

    this.state = {
      dir: 39,
      head: [10, 10],
      tail: [],
      max_len: 200,
      c_width: 600,
      c_height: 400,
      interval: null
    }
  }

  move() {
    var dir = this.state.dir;
    var x = this.state.head[0];
    var y = this.state.head[1];

    // add the current head to the tail
    var coords = [x, y]
    this.growTail(coords)

    // determine which way to go
    switch (dir) {
      case 37: x--; break; // left
      case 38: y--; break; // up
      case 39: x++; break; // right
      case 40: y++; break; // down
      default: return;
    }

    this.setState({head: [x, y]});
    this.checkForCollision();
    this.drawSnake();
  }

  growTail(coords) {
    var tail = this.state.tail;
    var max_len = this.state.max_len;

    // add coords to the front of the tail
    tail.unshift(coords)

    // remove coords from tail end if necessary
    if (tail.length == max_len) tail.pop()

    this.setState({tail: tail})
  }

  componentDidMount() {
    document.addEventListener("keydown", e => this.handleKeyPress(e), false);

    // get the snake moving along
    var interval = setInterval(this.move.bind(this), 50);
    this.setState({interval: interval})
  }

  handleKeyPress(e) {
    // determine if the keyCode represents a directional key
    var directionalKey = KEYCODES.indexOf(e.keyCode) == -1 ? false : true;

    if (directionalKey) {
      this.setState({dir: e.keyCode})
    }
  }

  drawSnake() {
    // grab the canvas and the context
    var c = document.getElementsByClassName("Game")[0];
    var ctx = c.getContext("2d");

    // clear the previous canvas and set up the new one
    var c_width = this.state.c_width, c_height = this.state.c_height;
    ctx.canvas.width = c_width, ctx.canvas.height = c_height;
    ctx.clearRect(0, 0, c_width, c_height);

    // draw the head
    var x = this.state.head[0], y = this.state.head[1];
    ctx.moveTo(x, y)
    ctx.lineTo(x + 1, y + 1)
    ctx.stroke();

    // draw the tail
    var tail = this.state.tail;
    for (var i = 0; i < tail.length; i++) {
      var x = tail[i][0], y = tail[i][1];
      ctx.moveTo(x, y)
      ctx.lineTo(x + 1, y + 1)
      ctx.stroke();
    }
  }

  checkForCollision() {

    if (this.wallCollision() || this.tailCollision()) this.gameOver();
  }

  wallCollision() {

    var c_width = this.state.c_width, c_height = this.state.c_height;
    var x = this.state.head[0], y = this.state.head[1];
    return (x >= c_width || x <= 0 || y >= c_height || y <= 0);

  }

  tailCollision() {

    var x = this.state.head[0], y = this.state.head[1];
    var tail = this.state.tail;

    for (var i = 0; i < tail.length; i++) {
      var tx = tail[i][0], ty = tail[i][1];
      if (x == tx && y == ty) {
        return true;
      }
    }

    return false;

  }

  gameOver() {
    var interval = this.state.interval;
    clearInterval(interval);
    this.setState({interval: null});
  }

  render() {
    var interval = this.state.interval;
    var gameOver = (interval == null ? true : false);
    var message = (gameOver == true ? <GameOverMessage /> : null )
    return (
      <div>
        <canvas className="Game"></canvas>
        {message}
      </div>
    );
  }
}

function GameOverMessage(props) {
  return <div>Game over.</div>;
}

export default App;