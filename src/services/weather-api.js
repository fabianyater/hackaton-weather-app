const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
    'X-RapidAPI-Key': '4966e7b81bmsh00b2d234b626992p138ba9jsnebfd72b440c0'
  }
};

export const realtimeWeather = async (cityName) => {

  const res = await fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${cityName}&lang=es`, options)
    .then(response => response.json())
    /* .then(response => console.log(response))
    .catch(err => console.error(err)); */
console.log(res)
  return res;
}