import React from 'react';
import './Css/WeatherBoxes.css'

const Humidity = ( { humidity } ) => {
  return (
    <div>
      <h2 className="dataFromJson">Umidade</h2>
      <div className="dataFromJson">{ humidity } </div>
    </div>
  )
}

export default Humidity
