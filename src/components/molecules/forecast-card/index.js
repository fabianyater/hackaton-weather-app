import PropTypes from 'prop-types'
import './styles.css'

const ForecastCard = ({ date, temperature_c, source, condition }) => {

  const days = ['sunday', 'monday', ' tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  const months = ["ENERO", "FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO", "JULIO", "AGOSTO", "SEPTIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE"];
  const newDate = new Date(date);
  const day = days[newDate.getDay()].toUpperCase()

  const formatDate = (date) => {
    let formatted_date = months[date.getMonth()] + ' ' + date.getDate() + ' ' + date.getFullYear();
    return formatted_date;
  }

  return (
    <div className='forecast-card'>
      <div className='forecast-card__wrapper' >
        <h3 className='forecast-card__day' >{day}</h3>
        <h3 className='forecast-card__date' >{formatDate(newDate)}</h3>
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