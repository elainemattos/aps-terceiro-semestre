import React, { Component } from 'react';
import Temperature from './weather-components/Temperature'
import Description from './weather-components/Description'
import Humidity from './weather-components/Humidity'
import WeatherIcon from './weather-components/WeatherIcon'
import './assets/css/GetData.css'

class Getdata extends Component {

  state = {
    temperature: null,
    humidity: null,
    description: null,
  }

  componentWillMount() {
    this.getWeather();
  }

  componentDidMount() {
    this.stopFetch = setInterval(
      () => this.getWeather(),
      30000
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
    })
  }

  render() {
    return (
      <div>
        <WeatherIcon description={ this.state.description } />
        <div className="Container">
          <Temperature temperature={ this.state.temperature } />
          <Description description={ this.state.description }/>
          <Humidity humidity={ this.state.humidity }/>
        </div>
      </div>
    );
  }
}

export default Getdata;
