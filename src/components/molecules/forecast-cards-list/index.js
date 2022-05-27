import React from 'react'
import PropTypes from 'prop-types'
import ForecastCard from '../forecast-card'
import './styles.css'

const ForecastCardsList = ({ forecastCards }) => {
  return (
    <div className='forecast-list'>
      {
        forecastCards.map(({ date, temperature_c, source, condition }, index) => (
          <ForecastCard
            key={index}
            date={date}
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
    date: PropTypes.string.isRequired,
    temperature_c: PropTypes.number.isRequired,
    source: PropTypes.string.isRequired,
    condition: PropTypes.string.isRequired
  }))
}

export default ForecastCardsList