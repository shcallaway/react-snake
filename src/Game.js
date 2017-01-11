import React, { Component } from 'react';
// import $ from 'jquery';

import CollisionChecker from './CollisionChecker.js';
import Snake from './Snake.js';
import Candy from './Candy.js';
import Canvas from './Canvas.js';
import { GameOverMsg, TutorialMsg, Score } from './InterfaceElements.js';

var DIR_KEYCODES = [37, 38, 39, 40];
var SPEEDS = {test: 200, slow: 30, medium: 20, fast: 10}
var INTERVAL = null;

class Game extends Component {

  constructor() {

    super();

    this.state = {
      snake: new Snake(),
      canvas: new Canvas(),
      candy: new Candy(),
      collisions: new CollisionChecker(),
      score: 0,
      speed: SPEEDS.slow,
      status: 0 // {inactive: 0, active: 1, over: 2}
    }

  }

  componentDidMount() {
    
    this.addKeyPressListener();

  }

  addKeyPressListener() {

    document.addEventListener("keydown", e => this.handleKeyPress(e), false);

  }

  handleKeyPress(e) {

    // if game is inactive and key pressed was space bar, begin
    
    var space_bar = (e.keyCode === 32), inactive = (this.state.status === 0);
    if (space_bar && inactive ) this.begin();

    // determine if event keyCode represents a directional key

    var dir_key = DIR_KEYCODES.indexOf(e.keyCode) === -1 ? false : true;

    if (dir_key) {
      var snake = this.state.snake;
      snake.changeDirection(e.keyCode);
    }

  }

  begin() {

    // get all them state variables

    var snake = this.state.snake;
    var canvas = this.state.canvas;
    var candy = this.state.candy;
    var speed = this.state.speed;
    var collisions = this.state.collisions;
    var score = this.state.score;

    // initialize the candy location

    var c_height = canvas.state.height, c_width = canvas.state.width;
    candy.move(c_width, c_height);

    INTERVAL = setInterval(function() {
      
      // move the snake and draw the canvas

      snake.updateHead();
      snake.updateTail();
      canvas.draw(snake, candy);

      // if collided with walls or tail, end the game

      if (collisions.walls(snake, canvas) || collisions.tail(snake)) {

        this.blowUp();
      
      // else if collided with the candy, increment score, grow snake, and move candy

      } else if (collisions.candy(snake, candy)) {
        
        this.incrementScore();
        snake.increaseMaxLength();

        var c_height = canvas.state.height, c_width = canvas.state.width;
        candy.move(c_width, c_height);
      
      }

    }.bind(this), speed, snake, canvas, score);

    this.setState({status: 1}); // active

  }

  calculateSpeed() {

    return 100 / this.state.speed;
  
  }

  blowUp() {

    clearInterval(INTERVAL);
    INTERVAL = null;

    this.setState({status: 2}); // over

  }

  incrementScore() {

    // could use jquery here

    var score = this.state.score + 1;
    this.setState({score: score});
    var s = document.getElementsByClassName("score")[0];
    s.innerHTML = score;

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
    var score = <Score />

    return (
      <div className="main-container">
        {canvas}
        {message}
        {score}
      </div>
    );
  }
}

export default Game;