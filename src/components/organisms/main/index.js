import React, { useState, useEffect, useContext } from 'react'

import { getRealtimeWeather } from '../../../services/weather-api'
import { detailsData } from './detailsData';
import { LocationContext } from '../../../context/locationContext';

import DetailsList from '../../molecules/details-list';
import Temperature from '../../molecules/temperature';
import Condition from '../../molecules/condition';
import Shimmer from '../../atoms/shimmer';
import './styles.css'

const Main = () => {

  const [data, setData] = useState();
  const [info, setInfo] = useState();
  const { contextLocation } = useContext(LocationContext)

  useEffect(() => {
    if (contextLocation.cityName)
      getRealtimeWeather(contextLocation.cityName)
        .then((res) => setData(res))
  }, [contextLocation])

  useEffect(() => {
    (data) && setInfo(detailsData(data))
  }, [data])

  return data ? (
    <main className={data.current.temp_c > 20 ? 'main hot' : 'main fresh'}>
      <h1 className='main__title'>{data.location.name}, <span className='localtime'>{data.location.localtime}</span> </h1>
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
    :
    (<Shimmer height={300} />)
}

export default Main