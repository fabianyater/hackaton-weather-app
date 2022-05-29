import React, { useState, useEffect } from 'react'

import { realtimeWeather } from '../../../services/weather-api'
import { detailsData } from './detailsData';

import DetailsList from '../../molecules/details-list';
import Temperature from '../../molecules/temperature';
import Condition from '../../molecules/condition';
import './styles.css'



const Main = () => {

  const cityName = 'Florencia';
  const [data, setData] = useState();
  const [info, setInfo] = useState();

  useEffect(() => {
    realtimeWeather(cityName)
      .then((res) => setData(res))
  }, [])

  useEffect(() => {
    if (data) {
      setInfo(detailsData(data))
    }
  }, [data])



  return data && (

    <main className='main'>
      <h1 className='main__title'>{data.location.name}</h1>
      <div className='main__wrapper'>
        <Condition
          source={data.current.condition.icon}
          alt='Time condition'
          condition={data.current.condition.text}
        />

        <Temperature
          celsius={data.current.temp_c}
          farenheit={data.current.temp_f}
        />

        {info && <DetailsList details={info} />}
      </div>
    </main>
  )
}

export default Main