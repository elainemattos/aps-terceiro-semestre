import React from 'react';
import './Css/WeatherBoxes.css'

const Temperature = ( { temperature } ) => {
  return (
    <div className="boxes">
      <h2>Temperatura</h2>
      <div className="dataFromJson">{ temperature } </div>
    </div>
  )
}

export default Temperature