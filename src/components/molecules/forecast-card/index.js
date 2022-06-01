import PropTypes from 'prop-types'
import { formatDate, formatDay } from '../../../constants/formatDate';
import './styles.css'

const ForecastCard = ({ date, temperature_c, source, condition }) => {

  return (
    <div className='forecast-card'>
      <div className='forecast-card__wrapper' >
        <h3 className='forecast-card__day' >{formatDay(date)}</h3>
        <h3 className='forecast-card__date' >{formatDate(date)}</h3>
        <span className='forecast-card__value' >{temperature_c}°</span>
        <p className='forecast-card__condition' >{condition}</p>
      </div>
      <img className='forecast-card__icon' src={source} alt={condition} />
    </div>
  )
}

ForecastCard.propTypes = {
  date: PropTypes.string.isRequired,
  temperature_c: PropTypes.number.isRequired,
  source: PropTypes.string.isRequired,
  condition: PropTypes.string.isRequired
}

export default ForecastCard;