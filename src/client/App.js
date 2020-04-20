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
import classnames from 'classnames'

const options = {
  dictionary: config.GAME_SETTINGS.DICTIONARY,
  boardDimension: config.GAME_SETTINGS.BOARD_DIMENSION,
  frequencyTable: config.GAME_SETTINGS.FREQUENCY_TABLE,
  bonusWord: 'JEFFBABIAK'
}

const before = Date.now()
const GAME_BOARD = createGameBoard(options)
const after = Date.now()
console.info(`A board with these parameters took this long to generate: ${(after-before)/1000}`)
console.warn(JSON.stringify(GAME_BOARD))

const boardDimension = config.GAME_SETTINGS.BOARD_DIMENSION

const App = () => {
  const [highlightedCells, setHighlightedCells] = useState([])
  const [input, setInput] = useState('')
  const [isMouseDown, setIsMouseDown] = useState(false)
  //const [mousedCells, setMousedCells] = useState([])

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

  const handleMouseDown = (e, cell) => {
    e.preventDefault()
    setInput(cell.letter)
    setHighlightedCells([cell])
    setIsMouseDown(true)
  }

  const handleMouseUp = e => {
    e.preventDefault()
    setIsMouseDown(false)
    setInput('')
    setHighlightedCells([])
  }

  const handleMouseOver = (e, cell) => {
    e.preventDefault()
    if (!isMouseDown) return
    const previousCell = highlightedCells[highlightedCells.length - 2]
    if (previousCell && previousCell.id === cell.id) {
      const nextHighlightedCells = highlightedCells.slice(0, -1)
      const nextInput = nextHighlightedCells.map(({letter}) => letter).join('')
      setInput(nextInput)
      setHighlightedCells(nextHighlightedCells)
      return
    }
    if (!isInCellList(highlightedCells,  cell)) {
      const nextHighlightedCells = [...highlightedCells, cell]
      const nextInput = nextHighlightedCells.map(({letter}) => letter).join('')
      setInput(nextInput)
      setHighlightedCells(nextHighlightedCells)
    }
  }

  const formatLetter = letter => (
    letter === 'QU' ? 'Qu' : letter
  )

  return (
    <div className="app">
      <div className={classnames("board", `board-${boardDimension}x${boardDimension}`)}>
        {GAME_BOARD.board.map((cell) => (
          <Cell
            key={cell.id}
            cell={{...cell}}
            letter={formatLetter(cell.letter)} 
            className={classNames('cell', { highlighted: isInCellList(highlightedCells, cell) })}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseOver={handleMouseOver}
          >
          </Cell>
        ))}
      </div>
      {/* <ul className="word-list" style={{position: 'absolute', fontSize:'10px', right: '350px', top: '45px', height: '500px', display: 'flex', flexDirection: 'column', flexWrap: 'wrap', listStyleType: 'none', flexBasis: '20px'}}>
       { GAME_BOARD.words.filter(w => w.length > 2).map(word => <li className={classNames('word', { highlighted: input === word})} key={word}>{word}</li>) }
      </ul> */}
      <input
        value={input}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      ></input>
    </div>
  )
}

export default App
