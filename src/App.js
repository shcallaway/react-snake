import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Game from './game.js';
import { Header } from './interface.js';

class App extends Component {
  
  render() {

    return ( 
      <div>
        <Header />
        <Game />
      </div>
    );
  
  }
}

export default App;