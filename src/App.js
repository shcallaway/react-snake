import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';

import Game from './Game.js';

class App extends Component {
  
  render() {

    return ( 
      <div>
        <Game />
      </div>
    );
  
  }
}

export default App;