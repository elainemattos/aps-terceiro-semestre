import React from 'react';
import '../assets/css/WeatherBoxes.css'
import chuvaForte from '../assets/images/chuvaForte.svg'
import chuvaFraca from '../assets/images/chuvaFraca.svg'
import semChuva from '../assets/images/semChuva.svg'

const WeatherIcon = ( { description } ) => {
  return (
    <div>
        {(function() {
        switch(description) {
          case 'Sem Chuva':
            return <img className="wicon" src={ semChuva } alt="Sem Chuva" />
          case 'Chuva Fraca':
            return <img className="wicon" src={ chuvaFraca } alt="Chuva Fraca" />
          case 'Chuva Forte':
            return <img className="wicon" src={ chuvaForte } alt="Chuva Forte" />
          default:
            return null;
        }
      })()}
    </div>
  )
}

export default WeatherIcon
