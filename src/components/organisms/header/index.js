import React from 'react'
import SearchInput from '../../molecules/search-input'
import searchIcon from '../../../assets/images/search-icon.png'
import locationIcon from '../../../assets/images/location-icon.svg'
import './styles.css'

const Header = () => {
  return (
    <header>
      <SearchInput
        type='search'
        placeholder='Enter a city name'
        description="Search icon"
        leftIcon={true}
        rigthIcon={true}
        rightIconSource={searchIcon}
        leftIconSource={locationIcon}
        onClick={() => { console.log("Búsqueda xd") }}
      />
    </header>
  )
}

export default Header;