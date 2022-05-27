import React from 'react'
import PropTypes from 'prop-types'
import IconButton from '../../atoms/icon-button'
import './styles.css'

const SearchInput = ({ type, placeholder, leftIconSource, rightIconSource, description, onClick, leftIcon, rigthIcon }) => {
  return (
    <div className='searchbar'>
      {leftIcon && <IconButton description={description} onClick={onClick} source={leftIconSource} />}
      <input className='searchbar__input' type={type} placeholder={placeholder} />
      {rigthIcon && <IconButton description={description} onClick={onClick} source={rightIconSource} />}
    </div>
  )
}

SearchInput.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  leftIconSource: PropTypes.string.isRequired,
  rightIconSource: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  leftIcon: PropTypes.bool,
  rigthIcon: PropTypes.bool
}

export default SearchInput;