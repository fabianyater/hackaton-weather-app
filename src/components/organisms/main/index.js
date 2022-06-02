import React, { useState, useEffect, useContext } from 'react'
import { RaceBy } from '@uiball/loaders'

import { formatDate, getDay } from '../../../constants/formatDate';
import { getRealtimeWeather } from '../../../services/weather-api'
import { LocationContext } from '../../../context/locationContext';
import { detailsData } from './detailsData';

import DetailsList from '../../molecules/details-list';
import Temperature from '../../molecules/temperature';
import Condition from '../../molecules/condition';
import './styles.css'

const Main = () => {

  const [data, setData] = useState();
  const [info, setInfo] = useState();
  const { contextLocation } = useContext(LocationContext)

  useEffect(() => {
    if (contextLocation.cityName)
      getRealtimeWeather(contextLocation.cityName)
        .then((res) => setData(res))
  }, [contextLocation.cityName])

  useEffect(() => {
    (data) && setInfo(detailsData(data))
  }, [data])

  return data ? (
    <>
      <main className={data.current.temp_c > 29 ? 'main hot' : 'main fresh'}>
        <h1 className='main__title'>{data.location.name}, {data.location.region}, {data.location.country}
          <span className='localtime'>{getDay(data.location.localtime, true)}  {formatDate(data.location.localtime)}</span>
        </h1>
        <div className='main__wrapper'>
          <div className='main__condition'>
          <Temperature
            celsius={data.current.temp_c}
            farenheit={data.current.temp_f}
          />

          <Condition
            source={data.current.condition.icon}
            alt='Time condition'
            condition={data.current.condition.text}
          />
          </div>
          {info && <DetailsList details={info} />}
        </div>
      </main>
    </>
  )
    :
    (
      <RaceBy
        size={200}
        lineWeight={10}
        speed={1.4}
        color="blue"
      />
    )
}

export default Main
