import PropTypes from 'prop-types'
import React, { useState } from 'react';
import TemperatureButton from '../../atoms/temperature-button';
import './styles.css'

const Temperature = ({ celsius, farenheit }) => {

  const [isCelsius, setIsCelsius] = useState(true);

  return (
    <div className='temperature'>
      <h2 className='temperature__title'>{isCelsius ? celsius : farenheit}</h2>
      <div className='temperature__degree'>
        {/* TODO: Poner en gris el que se deselecciona */}
        {isCelsius ?
          <TemperatureButton text='°F' onClick={() => setIsCelsius(false)} />
          :
          <TemperatureButton text='°C' onClick={() => setIsCelsius(true)} />
        }
      </div>
    </div>
  )
}

Temperature.propTypes = {
  celsius: PropTypes.string.isRequired,
  farenheit: PropTypes.string.isRequired
}

export default Temperature;