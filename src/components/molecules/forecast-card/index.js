import PropTypes from 'prop-types'

import { useLocationContext } from '../../../context/locationContext';
import { getDay } from '../../../constants/formatDate';
import './styles.css'

const ForecastCard = ({ date, temperature_c, temperature_f, source, condition }) => {

  const { contextLocation } = useLocationContext();
  const { temperature } = contextLocation;

  return (
    <div className='forecast-card'>
      <div className='forecast-card__wrapper' >
        <h3 className='forecast-card__day' >{getDay(date)}</h3>
        <h3 className='forecast-card__date' >{date}</h3>
        <span className='forecast-card__value' >{temperature === "c" ? temperature_c : temperature_f}°</span>
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