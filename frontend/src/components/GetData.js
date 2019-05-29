import React, { Component } from 'react';
import Temperature from './weather-components/Temperature.js'
import Description from './weather-components/Description.js'
import Humidity from './weather-components/Humidity.js'
import './assets/css/GetData.css'

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
    const data = require ('../data/dataArduino.json')

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
        <div className="Container">
          <Temperature temperature={ this.state.temperature } />
          <Description description={ this.state.description }/>
          <Humidity humidity={ this.state.humidity }/>
        </div>
        <h2 className="TextIndex">{this.state.date.toLocaleTimeString()}</h2>
        <button className="btnGet" onClick={this.getWeather}>Atualizar Temperatura</button>
      </div>
    );
  }
}

export default Getdata;
