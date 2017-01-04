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
      head: [0, 0]
    }
  }

  move(direction) {
    var head = this.state.head;
    var x = head[0], y = head[1];

    switch (direction) {
      case 37: x--; break; // left
      case 38: x++; break; // right
      case 39: y++; break; // up
      case 40: y--; break; // down
      default: return;
    }

    console.log('x: ' + x + ', y: ' + y);
    this.setState({head: [x, y]});
  }

  componentDidMount() {
    document.addEventListener("keydown", e => this.handleKeyPress(e), false);
  }

  handleKeyPress(e) {
    var directionalKey = KEYCODES.indexOf(e.keyCode) == -1 ? false : true;

    if (directionalKey) {
      this.move(e.keyCode)
    }
  }

  render() {
    return <div className="Game" />
  }
}

export default App;