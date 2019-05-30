import React from 'react';
import '../assets/css/WeatherBoxes.css'
import Descrip from '../assets/images/Descrip.svg'

const Description = ( { description } ) => {
  return (
    <div>
      <h2 className="text-informative">Estado chuva</h2>
      <div className="box">
        <img className="icon" src={ Descrip } alt="Estado Chuva" />
        <div className="text-informative">{ description } </div>
      </div>
    </div>
  )
}

export default Description
