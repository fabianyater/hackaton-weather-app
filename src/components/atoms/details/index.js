import PropTypes from 'prop-types'
import './styles.css'

const Details = ({ value, description, source, alt }) => {
  return (
    <div className='details'>
      <img className='details__icon' src={source} alt={alt} />
      <h3 className='details__value' >{value}</h3>
      <p className='details__description' >{description}</p>
    </div>
  )
}

Details.propTypes = {
  source: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired
}

export default Details;