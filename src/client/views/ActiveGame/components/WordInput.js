import React, { Fragment } from 'react'

import { isInvalidEntry, findHighlightedCells } from '../../../utils'

const WordInput = ({ gameboard, input, setInput, inputError, setInputError, setHighlightedCells, enteredWords, setEnteredWords }) => {

  const handleChange = (e) => {
    const input = e.target.value.toUpperCase()
    setInput(input)
    const matches = findHighlightedCells(gameboard, input)
    setHighlightedCells(matches)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      const error = isInvalidEntry(input, 0, enteredWords)
      if (error) {
        setInputError(error)
      } else {
        const newEnteredWords = [...enteredWords, input].sort((a, b) => a.localeCompare(b))
        setInputError('')
        setEnteredWords(newEnteredWords)
      }
      setInput('')
      setHighlightedCells([])
    }
  }

  return (
    <Fragment>
      <input
        value={input}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
        {inputError && <p>{inputError}</p>}
    </Fragment>

  )
}

export default WordInput
