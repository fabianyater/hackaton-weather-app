import React from 'react'

import locationIcon from '../../../assets/images/location-icon.svg'
import { geolocationOptions } from '../../../constants/options'
import { useLocationContext } from '../../../context/locationContext'
import useCurrentLocation from '../../../hooks/useGeoLocation'
import { getUserLocation } from '../../../services/weather-api'
import SearchInput from '../../molecules/search-input'
import './styles.css'

const Header = () => {

  const { location } = useCurrentLocation(geolocationOptions);
  const { contextLocation, setContextLocation } = useLocationContext();


  const getLocation = () => {
    if (location) {
      getUserLocation(location.latitude, location.longitude)
        .then(res => {
          setContextLocation({
            cityName: res.location.name,
          })
        })
    }
  }

  return (
    <header>
      <SearchInput
        type='search'
        buttonType='button'
        placeholder='Enter a city name'
        description="Search icon"
        iconSource={locationIcon}
        onClick={getLocation}
      />
    </header>
  )
}

export default Header;