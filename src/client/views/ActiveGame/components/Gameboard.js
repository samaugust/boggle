import React, { useState } from 'react'
import classNames from 'classnames'

import config from '../../../config'
import {
  isInCellList,
  isInvalidEntry
} from '../../../utils'

import Cell from './Cell'

const boardDimension = config.GAME_SETTINGS.BOARD_DIMENSION

const Gameboard = ({gameboardData, input, setInput, highlightedCells, setHighlightedCells, setInputError, enteredWords, setEnteredWords}) => {
  const [isMouseDown, setIsMouseDown] = useState(false)

  const handleMouseDown = (e, cell) => {
    e.preventDefault()
    setInput(cell.letter)
    setHighlightedCells([cell])
    setIsMouseDown(true)
  }

  const handleMouseUp = e => {
    e.preventDefault()
    const error = isInvalidEntry(input, 0, enteredWords)
    if (error) {
      setInputError(error)
    } else {
      const newEnteredWords = [...enteredWords, input].sort((a, b) => a.localeCompare(b))
      setEnteredWords(newEnteredWords)
      setInputError('')
    }
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

  console.warn({gameboardData})

  return (
    <React.Fragment>
      <div className={classNames("board", `board-${boardDimension}x${boardDimension}`)}>
          {gameboardData && gameboardData.board.map((cell) => (
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

      </React.Fragment>
  )
}

export default Gameboard