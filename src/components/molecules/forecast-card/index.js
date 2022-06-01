import PropTypes from 'prop-types'
import { formatDate, formatDay } from '../../../constants/formatDate';
import { useLocationContext } from '../../../context/locationContext';
import './styles.css'

const ForecastCard = ({ date, temperature_c, temperature_f, source, condition }) => {

  const { contextLocation } = useLocationContext();
  const temp = contextLocation.temperature;

  return (
    <div className='forecast-card'>
      <div className='forecast-card__wrapper' >
        <h3 className='forecast-card__day' >{formatDay(date)}</h3>
        <h3 className='forecast-card__date' >{formatDate(date)}</h3>
        <span className='forecast-card__value' >{temp === "c" ? temperature_c : temperature_f}°</span>
        <p className='forecast-card__condition' >{condition}</p>
      </div>
      <img className='forecast-card__icon' src={source} alt={condition} />
    </div>
  )
}

ForecastCard.propTypes = {
  date: PropTypes.string.isRequired,
  temperature_c: PropTypes.number.isRequired,
  temperature_f: PropTypes.number.isRequired,
  source: PropTypes.string.isRequired,
  condition: PropTypes.string.isRequired
}

export default ForecastCard;