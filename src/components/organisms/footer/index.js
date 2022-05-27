import React from 'react'
import { weatherapi } from '../../../assets/weather-mocked-data'
import ForecastCardsList from '../../molecules/forecast-cards-list'
import './styles.css'

const Footer = () => {

  const forecast = [
    {
      date: weatherapi.forecast.forecastday[0].date,
      temperature_c: weatherapi.forecast.forecastday[0].day.maxtemp_c,
      source: weatherapi.forecast.forecastday[0].day.condition.icon,
      condition: weatherapi.forecast.forecastday[0].day.condition.text,
    },
    {
      date: weatherapi.forecast.forecastday[1].date,
      temperature_c: weatherapi.forecast.forecastday[1].day.maxtemp_c,
      source: weatherapi.forecast.forecastday[1].day.condition.icon,
      condition: weatherapi.forecast.forecastday[1].day.condition.text,
    },
    {
      date: weatherapi.forecast.forecastday[2].date,
      temperature_c: weatherapi.forecast.forecastday[2].day.maxtemp_c,
      source: weatherapi.forecast.forecastday[2].day.condition.icon,
      condition: weatherapi.forecast.forecastday[2].day.condition.text,
    }
  ]

  return (
    <footer>
      <ForecastCardsList forecastCards={forecast} />
      <div className='footer__credits'>
        <span role="img" aria-label="heart">
          Creado con ❤️ por 
          <a href="https://github.com/fabianyater" target="_blank" rel="noopener noreferrer"> fabian.yate</a>
        </span>
      </div>
    </footer>
  )
}

export default Footer