import React from 'react'

const Cell = (({letter, className}) => (
  <div className={className}>{letter}</div>
))

export default Cell