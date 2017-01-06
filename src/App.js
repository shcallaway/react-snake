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

// var DIRECTIONS = ['left', 'right', 'up', 'down']
var KEYCODES = [37, 38, 39, 40]

class Game extends Component {
  constructor() {
    super();

    this.state = {
      x: 31,
      y: 24,
      dir: 39
    }
  }

  move() {
    var dir = this.state.dir;
    var x = this.state.x, y = this.state.y;

    switch (dir) {
      case 37: x--; break; // left
      case 38: y--; break; // up
      case 39: x++; break; // right
      case 40: y++; break; // down
      default: return;
    }

    console.log('x: ' + x + ', y: ' + y);
    this.setState({x: x, y: y});
    this.drawSnake();
  }

  componentDidMount() {
    document.addEventListener("keydown", e => this.handleKeyPress(e), false);
    setInterval(this.move.bind(this), 1000);
  }

  handleKeyPress(e) {
    var directionalKey = KEYCODES.indexOf(e.keyCode) == -1 ? false : true;

    if (directionalKey) {
      this.setState({dir: e.keyCode})
    }
  }

  drawSnake() {
    var x = this.state.x, y = this.state.y;

    var c = document.getElementsByClassName("Game")[0];
    var ctx = c.getContext("2d");

    ctx.moveTo(x, y)
    ctx.lineTo(x + 1, y + 1)
    ctx.stroke();
  }

  render() {
    return <canvas className="Game"></canvas>
  }
}

export default App;