import React from 'react';
import '../css/WeatherBoxes.css'
import descrip from '../images/descrip.svg'

const Humidity = ( { humidity } ) => {
  return (
    <div>
      <h2 className="dataFromJson">Umidade</h2>
      <div className="box">
        <img className="icon"  src={ descrip } alt="rain" />
      <div className="dataFromJson">{ humidity } </div>
      </div>
    </div>
  )
}

export default Humidity
