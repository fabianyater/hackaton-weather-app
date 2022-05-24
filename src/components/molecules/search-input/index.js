import React from 'react'
import PropTypes from 'prop-types'
import IconButton from '../../atoms/icon-button'
import './styles.css'

const SearchInput = ({ type, placeholder, source, description, onClick }) => {
  return (
    <div className='searchbar'>
      <input className='searchbar__input' type={type} placeholder={placeholder} />
      <IconButton description={description} onClick={onClick} source={source} />
    </div>
  )
}

SearchInput.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default SearchInput;