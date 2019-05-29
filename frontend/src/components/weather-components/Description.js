import React from 'react';
import '../css/WeatherBoxes.css'
import raining from '../images/raining.svg'

const Description = ( { description } ) => {
  return (
    <div>
      <h2 className="dataFromJson">Estado chuva</h2>
      <div className="box">
      <img className="icon" src={ raining } alt="rain" />
      <div className="dataFromJson">{ description } </div>
      </div>
    </div>
  )
}

export default Description
