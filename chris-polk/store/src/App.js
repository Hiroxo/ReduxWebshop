import React, { Component } from 'react';
//import logo from './logo.svg';
import Items from './Items.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <h1 className="App-title">Hello!</h1>
        </header>
        <div className="store">
          <Items />
        </div>
      </div>
    );
  }
}

export default App;
