import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'

const TemperatureButton = ({ text, onClick }) => {
  return (
    <button className='temperature__button' onClick={onClick} type='button'>{text}</button>
  )
}

TemperatureButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}

export default TemperatureButton