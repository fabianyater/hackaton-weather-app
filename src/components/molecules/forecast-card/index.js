import PropTypes from 'prop-types'
import './styles.css'

const ForecastCard = ({ day, temperature_c, source, condition }) => {
  return (
    <div className='forecast-card'>
      <h3 className='forecast-card__date' >{day}</h3>
      <span className='forecast-card__value' >{temperature_c}</span>
      <img className='forecast-card__icon' src={source} alt={condition} />
      <p className='forecast-card__condition' >{condition}</p>
    </div>
  )
}

ForecastCard.propTypes = {
  day: PropTypes.string.isRequired,
  temperature_c: PropTypes.number.isRequired,
  source: PropTypes.string.isRequired,
  condition: PropTypes.string.isRequired
}

export default ForecastCard;