import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'

import Details from '../../atoms/details'

const DetailsList = ({ details }) => {


  return (
    <div className='details-list'>
      {
        details.map(({ value, description }, index) => (
          <Details key={index} value={value} description={description} />
        ))
      }
    </div>
  )
}

DetailsList.propTypes = {
  details: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired
  }))
}

export default DetailsList