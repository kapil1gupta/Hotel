import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hotel from './Hotel/Hotel'
class App extends Component {
  render() {
    return (
      <div className="App">
      <Hotel/>
      </div>
    );
  }
}

export default App;
