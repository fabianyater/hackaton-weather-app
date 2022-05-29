import PropTypes from 'prop-types'
import './styles.css'

const Condition = ({ source, alt, condition }) => {
  return (
    <div className='condition'>
      <div className='condition__weapper'>
        <img className='condition__image' src={source} alt={alt} />
        <span className='condition__name'>{condition}</span>
      </div>
    </div>
  )
}

Condition.propTypes = {
  source: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  condition: PropTypes.string.isRequired
}

export default Condition;