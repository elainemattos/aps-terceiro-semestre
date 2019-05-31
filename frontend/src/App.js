import React, { Component } from 'react'
import './App.css'
import Getdata from './components/GetData'
import Clouds from './components/Clouds'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Getdata />
        <Clouds />
      </div>
    );
  }
}

export default App;
