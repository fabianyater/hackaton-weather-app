import React from 'react'
import PropTypes from 'prop-types'
import ForecastCard from '../forecast-card'
import './styles.css'

const ForecastCardsList = ({ forecastCards }) => {
  return (
    <div className='forecast-list'>
      {
        forecastCards.map(({ day, temperature_c, source, condition }, index) => (
          <ForecastCard
            key={index}
            day={day}
            temperature_c={temperature_c}
            source={source}
            condition={condition}
          />
        ))
      }
    </div>
  )
}

ForecastCardsList.propTypes = {
  forecastCards: PropTypes.arrayOf(PropTypes.shape({
    day: PropTypes.string.isRequired,
    temperature_c: PropTypes.number.isRequired,
    source: PropTypes.string.isRequired,
    condition: PropTypes.string.isRequired
  }))
}

export default ForecastCardsList