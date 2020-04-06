import React, { useState } from 'react'
import classNames from 'classnames'

import {
  isInCellList,
  findHighlightedCells,
  findAllWords,
  createGameBoard
} from './utils'
import config from './config'

import {
  collinsSubwords2019,
  collinsDictionary2019,
} from './dictionaries'

import Cell from './Cell'
import './App.css'

const GAME_BOARD = createGameBoard(
  config.GAME_SETTINGS.FREQUENCY_TABLE,
  config.GAME_SETTINGS.BOARD_DIMENSION
)
const gameBoardWords = findAllWords(
  GAME_BOARD,
  collinsDictionary2019,
  collinsSubwords2019
)

const App = () => {
  const [highlightedCells, setHighlightedCells] = useState([])
  const [input, setInput] = useState('')

  const handleChange = (e) => {
    const input = e.target.value.toUpperCase()
    setInput(input)
    const matches = findHighlightedCells(GAME_BOARD, input)
    setHighlightedCells(matches)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      setInput('')
      setHighlightedCells([])
    }
  }

  return (
    <div className="app">
      <div className="board">
        {GAME_BOARD.map((cell) => (
          <Cell
            key={cell.id}
            letter={cell.value} 
            className={classNames('cell', { highlighted: isInCellList(highlightedCells, cell) })}>
          </Cell>
        ))}
      </div>
      <input
        value={input}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      ></input>
    </div>
  )
}

export default App
