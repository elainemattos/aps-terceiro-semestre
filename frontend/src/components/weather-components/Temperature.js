import React from 'react';
import '../assets/css/WeatherBoxes.css'
import temperatura from '../assets/images/temperatura.svg'

const Temperature = ( { temperature } ) => {
  return (
    <div>
      <h2 className="text-informative">Temperatura</h2>
      <div className="box">
        <img className="icon" src={ temperatura } alt="Temperatura" />
        <div className="text-informative">{ temperature } </div>
      </div>
    </div>
  )
}

export default Temperature
