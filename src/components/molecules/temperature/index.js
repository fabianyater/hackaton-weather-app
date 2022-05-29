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
        <TemperatureButton className={!isCelsius && 'temperature__degree--disabled'} text='°C' onClick={() => setIsCelsius(true)} />
        <TemperatureButton className={isCelsius && 'temperature__degree--disabled'} text='°F' onClick={() => setIsCelsius(false)} />
      </div>
    </div>
  )
}

Temperature.propTypes = {
  celsius: PropTypes.number.isRequired,
  farenheit: PropTypes.number.isRequired
}

export default Temperature;