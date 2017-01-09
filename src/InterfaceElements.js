import React, { Component } from 'react';

function Score(props) {
   
  return (
    <p className="score"></p>
  ); 

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

export { Score, StartMenu, TutorialMsg, GameOverMsg }