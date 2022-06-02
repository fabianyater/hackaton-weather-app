const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
    'X-RapidAPI-Key': '4966e7b81bmsh00b2d234b626992p138ba9jsnebfd72b440c0'
  }
};

export const getUserLocation = async (lat, lon) => {
  let res;

  await fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${lat}%2C${lon}&lang=es`, options)
    .then(response => response.json())
    .then(response => res = response)
    .catch(err => console.error(err));
  return res;
}

export const getRealtimeWeather = async (cityName) => {
  let res;

  await fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${cityName}&lang=es`, options)
    .then(response => response.json())
    .then(response => res = response)
    .catch(err => console.error(err));
  return res;
}

export const getForecastWeather = async (cityName, date) => {
  let res;

  await fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${cityName}&days=3&lang=es&dt=${date}`, options)
    .then(response => response.json())
    .then(response => res = response)
    .catch(err => console.error(err));

  return res;
}

export const searchCityWeather = async (cityName) => {
  let res;

  await fetch(`https://weatherapi-com.p.rapidapi.com/search.json?q=${cityName}&lang=es`, options)
    .then(response => response.json())
    .then(response => res = response)
    .catch(err => console.error(err));

  return res;
}
