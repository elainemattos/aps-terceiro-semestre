import React from 'react';
import './Css/WeatherBoxes.css'

const Description = ( { description } ) => {
  return (
    <div>
      <h2 className="dataFromJson">Descrição</h2>
      <div className="dataFromJson">{ description } </div>
    </div>
  )
}

export default Description
