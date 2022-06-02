import React from 'react'
import locationError from '../../../assets/images/location-error.svg'
import './styles.css'

const Error = ({ error }) => {

  const errorMessage = {
    1: 'Permiso denegado',
    2: 'Posición no disponible',
    3: 'Tiempo de espera agotado',
  }

  return (
    <div className='error'>
      <img src={locationError} alt='error' />
      <h2>Acceso a la ubicación</h2>
      <p>{errorMessage[error]}</p>
    </div>
  )
}

export default Error