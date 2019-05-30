import React from 'react';
import '../assets/css/WeatherBoxes.css'
import umidade from '../assets/images/umidade.svg'

const Humidity = ( { humidity } ) => {
  return (
    <div>
      <h2 className="text-informative">Umidade</h2>
      <div className="box">
        <img className="icon" src={ umidade } alt="Umidade" />
        <div className="text-informative">{ humidity } </div>
      </div>
    </div>
  )
}

export default Humidity
