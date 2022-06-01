import React from 'react'
import './styles.css'

const Error = ({ error }) => {
  return (
    <div className='error'><h1>{error}</h1></div>
  )
}

export default Error