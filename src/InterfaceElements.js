import React, { Component } from 'react';

function Score(props) {
   
  return (
    <p className="score"></p>
  ); 

}

function TutorialMsg(props) {

  return (
    <div className='tutorial-msg'>
      <p>Use the arrow keys to change direction. Press the space bar to begin.</p>
    </div>
  );

}

function GameOverMsg(props) {

  return <div className='game-over-msg'><p>Game over. Press the space bar to try again.</p></div>;

}

export { Score, TutorialMsg, GameOverMsg }