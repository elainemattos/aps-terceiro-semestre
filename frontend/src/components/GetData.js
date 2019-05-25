import React, { Component } from 'react';
import Temperature from './Temperature.js'
import Description from './Description.js'
import Humidity from './Humidity.js'
import './Css/GetData.css'

class Getdata extends Component {

  state = {
    temperature: null,
    humidity: null,
    description: null,
    date: new Date()
  }

  componentDidMount() {
    this.stopFetch = setInterval(
      () => this.getWeather(),
      3000
    );
  }

  componentWillUnmount() {
    clearInterval(this.stopFetch);
  }

  getWeather = () => {
    const data = require ('../data/felipe.json')

    this.setState({
      temperature: data.Temperatura,
      description: data.EstadoChuva,
      humidity:data.Umidade,
      date: new Date()
    })
  }

  render() {
    return (
      <div>
        <h1 className="text">Sorocaba, SP</h1>
        <div className="Container">
          <Temperature temperature={ this.state.temperature } />
          <Description description={ this.state.description }/>
          <Humidity humidity={ this.state.humidity }/>
        </div>
        <h2 className="text">{this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

export default Getdata;
