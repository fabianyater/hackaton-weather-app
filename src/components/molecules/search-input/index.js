import React, { useState } from 'react'
import PropTypes from 'prop-types'
import IconButton from '../../atoms/icon-button'
import Select from 'react-select'
import { RaceBy } from '@uiball/loaders'
import './styles.css'
import { useLocationContext } from '../../../context/locationContext'
import { searchCityWeather } from '../../../services/weather-api'

const SearchInput = ({ iconSource, buttonType, description, onClick }) => {

  const [selectedOption, setSelectedOption] = useState(null);
  const [options, setOptions] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  const { setContextLocation } = useLocationContext()

  const handleChange = selectedOption => {
    setSelectedOption(selectedOption);
    setContextLocation((prevState) => {
      return { ...prevState, cityName: selectedOption.value }
    })
  }

  const handleInputChange = (inputValue) => {
    if (inputValue.length > 2) {
      setIsLoading(true);
      searchCityWeather(inputValue)
        .then((res) => setOptions(res.map((city) => (
          {
            value: `${city.name}, ${city.region}, ${city.country}`,
            label: `${city.name}, ${city.region}, ${city.country}`
          }
        ))))
        .finally(() => setIsLoading(false))
    }
  }

  return (
    <div className='searchbar'>
      <IconButton description={description} buttonType={buttonType} onClick={onClick} source={iconSource} />
      <Select
        placeholder={selectedOption ? selectedOption.label : 'Busca una ciudad'}
        loadingMessage={() => <RaceBy
          size={80}
          lineWeight={5}
          speed={1.4}
          color="black"
        />}
        noOptionsMessage={() => 'No hubo ninguna coincidencia :c'}
        className='searchbar__input'
        maxMenuHeight={300}
        options={options ? options : []}
        onChange={handleChange}
        onInputChange={handleInputChange}
        isLoading={isLoading}
      />
    </div>
  )
}

SearchInput.propTypes = {
  buttonType: PropTypes.string.isRequired,
  iconSource: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default SearchInput;