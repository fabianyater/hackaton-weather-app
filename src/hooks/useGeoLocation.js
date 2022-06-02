import { useEffect, useState } from 'react'

const useCurrentLocation = (options = {}) => {
  const [location, setLocation] = useState()
  const [error, setError] = useState()

  const handleSuccess = (pos) => {
    const { latitude, longitude } = pos.coords

    setLocation({
      latitude,
      longitude
    })
  }

  const handleError = (err) => {
    setError({
      code: err.code,
      message: err.message
    })
  }

  useEffect(() => {
    const { geolocation } = navigator

    if (!geolocation) {
      setError('Geolocalización no soportada en el navegador actual')
      return
    }

    geolocation.getCurrentPosition(handleSuccess, handleError, options)
    // eslint-disable-next-line
  }, [options])

  return { location, error }
}

export default useCurrentLocation