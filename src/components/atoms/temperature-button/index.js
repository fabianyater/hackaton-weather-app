import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'

const TemperatureButton = ({ text, onClick, className }) => {
  return (
    <button className={`temperature__button ${className}`} onClick={onClick} type='button'>{text}</button>
  )
}

TemperatureButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.bool
}

export default TemperatureButton