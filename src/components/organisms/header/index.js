import React from 'react'

import locationIcon from '../../../assets/images/location-icon.svg'
import { useLocationContext } from '../../../context/locationContext'
import { getRealtimeWeather } from '../../../services/weather-api'
import SearchInput from '../../molecules/search-input'
import './styles.css'

const Header = () => {

  const { contextLocation } = useLocationContext();


  const getLocation = () => {
    if (contextLocation.cityName)
        getRealtimeWeather(contextLocation.cityName)
          .then((res) => console.log(res))
  }

  return (
    <header>
      <SearchInput
        type='search'
        buttonType='button'
        placeholder='Enter a city name'
        description="Search icon"
        iconSource={locationIcon}
        onClick={() => getLocation()}
      />
    </header>
  )
}

export default Header;