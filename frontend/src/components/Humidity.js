import React from 'react';
import './Css/WeatherBoxes.css'

const Humidity = ( { humidity } ) => {
  return (
    <div className="boxes">
      <h2>Umidade</h2>
      <div className="dataFromJson">{ humidity } </div>
    </div>
  )
}

export default Humidity
