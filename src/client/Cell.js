import React from 'react'

const Cell = ({cell, letter, className, onMouseDown, onMouseUp, onMouseOver}) => (
  <div className={`${className} inner-cell`} onMouseDown={e => onMouseDown(e, cell)} onMouseUp={onMouseUp}><div onMouseOver={e => onMouseOver(e, cell)}>{letter}</div></div>
)

export default Cell
