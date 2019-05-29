import React, { Component } from 'react';
import './App.css';
import Getdata from './components/GetData'
import Clouds from './components/Clouds.js'


class App extends Component {
  render() {
    return (
      <div className="App">
      <Clouds />
      <Getdata />
      </div>
    );
  }
}

export default App;
