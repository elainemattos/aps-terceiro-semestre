import React from 'react';
import '../assets/css/WeatherBoxes.css'
import descrip from '../assets/images/descrip.svg'
import raining from '../assets/images/raining.svg'
import temp from '../assets/images/temp.svg'

const WeatherIcon = ( { description } ) => {
  return (
    <div>
        {(function() {
        switch(description) {
          case 'Sem Chuva':
            return <img className="wicon" src={ descrip } alt="temperature" />
          case 'Chuva Fraca':
            return <img className="wicon" src={ raining } alt="temperature" />
          case 'Chuva Forte':
            return <img className="wicon" src={ temp } alt="temperature" />
          default:
            return null;
        }
      })()}
    </div>
  )
}

export default WeatherIcon
