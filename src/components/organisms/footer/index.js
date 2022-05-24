import React from 'react'
import { weatherapi } from '../../../assets/weather-mocked-data'
import ForecastCardsList from '../../molecules/forecast-cards-list'

const Footer = () => {

  const forecast = [
    {
      day: weatherapi.forecast.forecastday[0].date,
      temperature_c: weatherapi.forecast.forecastday[0].day.maxtemp_c,
      source: weatherapi.forecast.forecastday[0].day.condition.icon,
      condition: weatherapi.forecast.forecastday[0].day.condition.text,
    },
    {
      day: weatherapi.forecast.forecastday[1].date,
      temperature_c: weatherapi.forecast.forecastday[1].day.maxtemp_c,
      source: weatherapi.forecast.forecastday[1].day.condition.icon,
      condition: weatherapi.forecast.forecastday[1].day.condition.text,
    },
    {
      day: weatherapi.forecast.forecastday[2].date,
      temperature_c: weatherapi.forecast.forecastday[2].day.maxtemp_c,
      source: weatherapi.forecast.forecastday[2].day.condition.icon,
      condition: weatherapi.forecast.forecastday[2].day.condition.text,
    }
  ]

  return (
    <footer>
      <ForecastCardsList forecastCards={forecast} />
    </footer>
  )
}

export default Footer