import React from 'react';
import './Css/WeatherBoxes.css'

const Description = ( { description } ) => {
  return (
    <div className="boxes">
      <h2>Umidade</h2>
      <div className="dataFromJson">{ description } </div>
    </div>
  )
}

export default Description