import React, { useEffect } from "react"

import { geolocationOptions } from "../../constants/options"
import { useLocationContext } from "../../context/locationContext"
import { getUserLocation } from "../../services/weather-api"

import useCurrentLocation from "../../hooks/useGeoLocation"
import Footer from "../../components/organisms/footer"
import Header from "../../components/organisms/header"
import Main from "../../components/organisms/main"
import Loader from "../../components/atoms/loader"
import Error from "../../components/atoms/error"
import './styles.css'

export const Index = () => {

  const { location, error } = useCurrentLocation(geolocationOptions);
  const { setContextLocation } = useLocationContext();
  
  useEffect(() => {
    if (location) {
      getUserLocation(location.latitude, location.longitude)
        .then(res => {
          setContextLocation({
            cityName: res.location.name,
          })
        })
    }
  }, [location, setContextLocation]);

  return location ? (
    <div className='wrapper'>
      <div className="wrapper__container">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  ) :
    (
      <div className="wrapper__error">
        {error ? <Error error={error.code} /> : <Loader />}
      </div>
    )
}