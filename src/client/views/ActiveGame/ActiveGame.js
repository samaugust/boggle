import React, { useState, Fragment } from 'react'

import config from '../../config'
import {
  createGameBoard,
} from '../../utils'

import Gameboard from './components/Gameboard'
import Timer from './components/Timer'
import WordInput from './components/WordInput'
import EnteredWordList from './components/EnteredWordList'
import PlayerList from './components/PlayerList'
import GameHeader from '../shared/GameHeader'

const options = {
  dictionary: config.GAME_SETTINGS.DICTIONARY,
  boardDimension: config.GAME_SETTINGS.BOARD_DIMENSION,
  frequencyTable: config.GAME_SETTINGS.FREQUENCY_TABLE,
  bonusWord: 'JEFFBABIAK'
}

const before = Date.now()
const GAMEBOARD = createGameBoard(options)
const after = Date.now()
console.info(`A board with these parameters took this long to generate: ${(after-before)/1000}`)
console.warn(JSON.stringify(GAMEBOARD))

const ActiveGame = () => {
  const [highlightedCells, setHighlightedCells] = useState([])
  const [input, setInput] = useState('')
  const [enteredWords, setEnteredWords] = useState([])
  const [inputError, setInputError] = useState('')

  return (
    <div className="active-game-container">
      <div className="active-game-header">
        <GameHeader/>
      </div>

      <div className="active-game-content">
        <section className="player-pane">
          <PlayerList/>
        </section>

        <section className="game-pane">
          <Gameboard
            gameboardData={GAMEBOARD}
            highlightedCells={highlightedCells}
            setHighlightedCells={setHighlightedCells}
            input={input}
            setInput={setInput}
            setInputError={setInputError}
            enteredWords={enteredWords}
            setEnteredWords={setEnteredWords}
          />
          <WordInput
            gameboard={GAMEBOARD.board}
            input={input}
            setInput={setInput}
            inputError={inputError}
            setInputError={setInputError}
            setHighlightedCells={setHighlightedCells}
            enteredWords={enteredWords}
            setEnteredWords={setEnteredWords}
          />
        </section>

        <section className="progress-pane">
          <Timer/>
          <EnteredWordList enteredWords={enteredWords} totalWords={GAMEBOARD.words.length}/>
        </section>
      </div>
    </div>
  )
}

export default ActiveGame
