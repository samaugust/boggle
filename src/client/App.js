import React, { useState } from 'react'
import classNames from 'classnames'

import config from './config'
import {
  isInCellList,
  findHighlightedCells,
  createGameBoard
} from './utils'

import Cell from './Cell'
import './App.css'

const options = {
  dictionary: config.GAME_SETTINGS.DICTIONARY,
  boardDimension: config.GAME_SETTINGS.BOARD_DIMENSION,
  frequencyTable: config.GAME_SETTINGS.FREQUENCY_TABLE,
  bonusWord: "CSUKI",
  minWordCount: 300
}

const before = Date.now()
const GAME_BOARD = createGameBoard(options)
const after = Date.now()
console.info(`A board with these parameters took this long to generate: ${(after-before)/1000}`)
console.warn(JSON.stringify(GAME_BOARD))

const App = () => {
  const [highlightedCells, setHighlightedCells] = useState([])
  const [input, setInput] = useState('')

  const handleChange = (e) => {
    const input = e.target.value.toUpperCase()
    setInput(input)
    const matches = findHighlightedCells(GAME_BOARD.board, input)
    setHighlightedCells(matches)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      setInput('')
      setHighlightedCells([])
    }
  }

  const formatLetter = letter => (
    letter === 'QU' ? 'Qu' : letter
  )

  return (
    <div className="app">
      <div className="board">
        {GAME_BOARD.board.map((cell) => (
          <Cell
            key={cell.id}
            letter={formatLetter(cell.letter)} 
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
