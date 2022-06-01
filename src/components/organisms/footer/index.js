import React, { useEffect, useState } from 'react'
import { useLocationContext } from '../../../context/locationContext'
import { getForecastWeather } from '../../../services/weather-api'
import ForecastCardsList from '../../molecules/forecast-cards-list'
import forecast from './formattedData'
import './styles.css'

const Footer = () => {

  const [data, setData] = useState();
  const [info, setInfo] = useState();
  const { contextLocation } = useLocationContext()
  const date = new Date();

  useEffect(() => {
    if (contextLocation.cityName) {
      getForecastWeather(contextLocation.cityName, date.getDate())
        .then((res) => setData(res))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contextLocation])

  useEffect(() => {
    (data) && setInfo(forecast(data))
  }, [data])

  

  return data ? (
    <footer>
      {info && <ForecastCardsList forecastCards={info} />}
      <div className='footer__credits'>
        <span role="img" aria-label="heart">
          Creado con ❤️ por
          <a href="https://github.com/fabianyater" target="_blank" rel="noopener noreferrer"> fabian.yate</a>
        </span>
      </div>
    </footer>
  )
    :
    (<h1>Cargando...</h1>)
}

export default Footer