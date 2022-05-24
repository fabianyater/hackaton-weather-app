import PropTypes from 'prop-types'
import './styles.css'

const Details = ({ value, description }) => {
  return (
    <div className='details'>
      <h3 className='details__value' >{value}</h3>
      <p className='details__description' >{description}</p>
    </div>
  )
}

Details.propTypes = {
  value: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired
}

export default Details;