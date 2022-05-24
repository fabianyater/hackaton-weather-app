import React from 'react'
import Condition from '../condition'
import Temperature from '../temperature'
import './styles.css'

import sun from '../../../assets/images/sun.png'

const Wrapper = () => {
  return (
    <div className='weather'>
      <Condition
        source={sun}
        alt='Time condition'
        condition='Cloudy'
      />

      <Temperature
        celsius='19'
        farenheit='32'
      />
    </div>
  )
}

export default Wrapper