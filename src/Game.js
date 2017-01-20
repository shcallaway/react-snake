import React, { Component } from 'react';

import CollisionChecker from './collision_checker.js';
import Snake from './snake.js';
import Candy from './candy.js';
import Canvas from './canvas.js';
import { GameOverMsg, TutorialMsg, Score } from './interface.js';

import { DIR_KEYCODES, SPEEDS, STATUSES } from './constants.js';

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
      speed: SPEEDS.fast,
      status: STATUSES.inactive
    }

  }

  componentDidMount() {
    
    this.addKeyPressListener();

  }

  addKeyPressListener() {

    document.addEventListener("keydown", e => this.handleKeyPress(e), false);

  }

  startOver() {

    var canvas = this.state.canvas;
    var snake = this.state.snake;

    canvas.clear();
    snake.reset();

    this.setState({status: STATUSES.inactive})
    
    this.resetScore()
    this.begin();

  }

  handleKeyPress(e) {

    // if game is inactive and key pressed was space bar, begin
    
    var space_bar = (e.keyCode === 32);
    var sts_inactive = (this.state.status === STATUSES.inactive);
    var sts_over = (this.state.status === STATUSES.over);

    if (space_bar && sts_inactive ) {
      this.begin();
    } else if (space_bar && sts_over) {
      this.startOver();
    }

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

        candy.move();
      
      }

    }.bind(this), speed);

    this.setState({status: STATUSES.active}); // active

  }

  calculateSpeed() {

    return 100 / this.state.speed;
  
  }

  blowUp() {

    clearInterval(INTERVAL);
    INTERVAL = null;

    this.setState({status: STATUSES.over}); // over

  }

  incrementScore() {

    // could use jquery here

    var score = this.state.score + 1;
    this.setState({score: score});
    var s = document.getElementsByClassName("score")[0];
    s.innerHTML = score;

  }

  resetScore() {

    // could use jquery here

    this.setState({score: 0});
    var s = document.getElementsByClassName("score")[0];
    s.innerHTML = 0;

  }

  render() {

    var status = this.state.status, message;

    switch (status) {

      case STATUSES.inactive: // inactive (display tutorial message)
        message = <TutorialMsg />; break;

      case STATUSES.active: // active (no messages)
        message = null; break; 

      case STATUSES.over: // over (display game over message)
        message = <GameOverMsg />; break; 

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