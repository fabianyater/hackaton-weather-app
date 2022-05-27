import React from 'react'
import DetailsList from '../../molecules/details-list';
import { weatherapi } from '../../../assets/weather-mocked-data';
import './styles.css'

import Temperature from '../../molecules/temperature';
import Condition from '../../molecules/condition';

import clouds from '../../../assets/images/clouds.svg';
import pressure from '../../../assets/images/pressure.svg';
import precipitation from '../../../assets/images/precipitation.svg';
import visibility from '../../../assets/images/visibility.svg';
import humidity from '../../../assets/images/humidity.svg';
import wind from '../../../assets/images/wind.svg';

import sun from '../../../assets/images/sun.png'


const Main = () => {

  const cityName = 'Florencia';

  const info = [
    {
      value: weatherapi.current.humidity,
      description: 'Humedad',
      source: humidity,
      alt: 'Highlight icon'
    },
    {
      value: weatherapi.current.vis_km,
      description: 'Visibilidad',
      source: visibility,
      alt: 'Highlight icon'
    },
    {
      value: weatherapi.current.wind_kph,
      description: 'Viento',
      source: wind,
      alt: 'Highlight icon'
    },
    {
      value: weatherapi.current.humidity,
      description: 'Presión',
      source: pressure,
      alt: 'Highlight icon'
    },
    {
      value: weatherapi.current.vis_km,
      description: 'Precipitación',
      source: precipitation,
      alt: 'Highlight icon'
    },
    {
      value: weatherapi.current.wind_kph,
      description: 'Nubes',
      source: clouds,
      alt: 'Highlight icon'
    },
  ]

  return (
    <main className='main'>
      <h1 className='main__title'>{cityName}</h1>
      <div className='main__wrapper'>
        <Condition
          source={sun}
          alt='Time condition'
          condition='Cloudy'
        />

        <Temperature
          celsius='19'
          farenheit='32'
        />

        <DetailsList details={info} />
      </div>
    </main>
  )
}

export default Main