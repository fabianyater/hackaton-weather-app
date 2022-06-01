import React from 'react'
import { Ring } from '@uiball/loaders'
import './styles.css'

const Loader = () => {
  return (
    <div className='loader'>
      <h1>Cargando ubicación</h1>
      <Ring
        size={40}
        lineWeight={5}
        speed={2}
        color="black"
      />
    </div>
  )
}

export default Loader