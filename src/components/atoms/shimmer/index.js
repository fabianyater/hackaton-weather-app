import React from 'react';
import PropTypes from 'prop-types'
import './styles.css'


const Shimmer = ({ repetitions = 1, height = 150 }) => (
  <div className="shimmers">
    {Array.from({ length: repetitions }, (_, i) => (
      <div key={i} className="shimmer" style={{ height }} />
    ))}
  </div>
);

Shimmer.propTypes = {
  repetitions: PropTypes.number,
  height: PropTypes.number,
}

export default React.memo(Shimmer);
