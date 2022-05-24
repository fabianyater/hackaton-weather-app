import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'

const IconButton = ({ source, description, onClick }) => {
  return (
    <button className='searchbar__button' onClick={onClick}>
      <img src={source} alt={description} />
    </button>
  )
}

IconButton.propTypes = {
  source: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default IconButton;