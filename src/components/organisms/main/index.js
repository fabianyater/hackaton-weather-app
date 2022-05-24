import React from 'react'
import Condition from '../../molecules/condition';
import DetailsList from '../../molecules/details-list';
import Temperature from '../../molecules/temperature';
import { weatherapi } from '../../../assets/weather-mocked-data';
import './styles.css'
import Wrapper from '../../molecules/wrapper';

const Main = () => {

  const cityName = 'Florencia';

  const info = [
    {
      value: weatherapi.current.humidity,
      description: 'Humedad'
    },
    {
      value: weatherapi.current.vis_km,
      description: 'Visibilidad'
    },
    {
      value: weatherapi.current.wind_kph,
      description: 'Velocidad'
    },
  ]

  return (
    <main>
      <h1 className='main__title'>{cityName}</h1>
      <Wrapper />
      <DetailsList details={info} />

    </main>
  )
}

export default Main