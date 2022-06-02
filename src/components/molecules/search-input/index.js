import React from 'react'
import PropTypes from 'prop-types'

import IconButton from '../../atoms/icon-button'
import './styles.css'

const SearchInput = ({ type, placeholder, iconSource, buttonType, description, onClick }) => {
  return (
    <div className='searchbar'>
      <IconButton description={description} buttonType={buttonType} onClick={onClick} source={iconSource} />
      <input className='searchbar__input' type={type} placeholder={placeholder} />
    </div>
  )
}

SearchInput.propTypes = {
  type: PropTypes.string.isRequired,
  buttonType: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  iconSource: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default SearchInput;