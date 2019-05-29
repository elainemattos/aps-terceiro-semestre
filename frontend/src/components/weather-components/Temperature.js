import React from 'react';
import '../assets/css/WeatherBoxes.css'
import temp from '../assets/images/temp.svg'

const Temperature = ( { temperature } ) => {
  return (
    <div>
      <h2 className="text-informative">Temperatura</h2>
      <div className="box">
        <img className="icon" src={ temp } alt="Temperatura" />
        <div className="text-informative">{ temperature } </div>
      </div>
    </div>
  )
}

export default Temperature
