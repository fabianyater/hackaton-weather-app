const forecast = (weatherapi) => [
  {
    date: weatherapi.forecast.forecastday[0].date,
    temperature_c: weatherapi.forecast.forecastday[0].day.maxtemp_c,
    temperature_f: weatherapi.forecast.forecastday[0].day.maxtemp_f,
    source: weatherapi.forecast.forecastday[0].day.condition.icon,
    condition: weatherapi.forecast.forecastday[0].day.condition.text,
  },
  {
    date: weatherapi.forecast.forecastday[1].date,
    temperature_c: weatherapi.forecast.forecastday[1].day.maxtemp_c,
    temperature_f: weatherapi.forecast.forecastday[1].day.maxtemp_f,
    source: weatherapi.forecast.forecastday[1].day.condition.icon,
    condition: weatherapi.forecast.forecastday[1].day.condition.text,
  },
  {
    date: weatherapi.forecast.forecastday[2].date,
    temperature_c: weatherapi.forecast.forecastday[2].day.maxtemp_c,
    temperature_f: weatherapi.forecast.forecastday[2].day.maxtemp_f,
    source: weatherapi.forecast.forecastday[2].day.condition.icon,
    condition: weatherapi.forecast.forecastday[2].day.condition.text,
  }
]

export default forecast;