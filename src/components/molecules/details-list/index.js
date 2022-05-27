import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'

import Details from '../../atoms/details'

const DetailsList = ({ details }) => {


  return (
    <div className='details-list'>
      {
        details.map(({ value, description, source, alt }, index) => (
          <Details key={index} source={source} alt={alt} value={value} description={description} />
        ))
      }
    </div>
  )
}

DetailsList.propTypes = {
  details: PropTypes.arrayOf(PropTypes.shape({
    source: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired
  }))
}

export default DetailsList