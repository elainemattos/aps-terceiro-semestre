import React from 'react';
import '../css/WeatherBoxes.css'
import temp from '../images/temp.svg'


const Temperature = ( { temperature } ) => {
  return (
    <div>
      <h2 className="dataFromJson">Temperatura</h2>
      <div className="box">
      <img className="icon" src={ temp } alt="temperature" />
      <div className="dataFromJson">{ temperature } </div>
      </div>
    </div>
  )
}

export default Temperature
