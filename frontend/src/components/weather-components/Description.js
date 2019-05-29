import React from 'react';
import '../assets/css/WeatherBoxes.css'
import raining from '../assets/images/raining.svg'

const Description = ( { description } ) => {
  return (
    <div>
      <h2 className="text-informative">Estado chuva</h2>
      <div className="box">
        <img className="icon" src={ raining } alt="Estado Chuva" />
        <div className="text-informative">{ description } </div>
      </div>
    </div>
  )
}

export default Description
