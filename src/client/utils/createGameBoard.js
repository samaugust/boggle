import { ALPHABET } from '../constants'
import { getAdjacentCells, findAllWords } from './'

//FOR GENERATING A BOARD
const getLettersForBoard = (frequencyTable, boardDimension) => {
  const { frequencies, range } = frequencyTable
  let letters = []
  const numberOfSquaresOnBoard = Math.pow(boardDimension, 2)

  for (let i = 1; i <= numberOfSquaresOnBoard; i++) {
    const randomNumberWithinRange = Math.floor(Math.random() * range)

    for (let j = 0; j < ALPHABET.length; j++) {
      const currentLetter = ALPHABET[j]
      const nextLetter = ALPHABET[j + 1]
      const currentLetterRange = frequencies[currentLetter]
      const nextLetterRange = frequencies[nextLetter]

      if (currentLetter === 'A' && randomNumberWithinRange < currentLetterRange) {
        letters.push(currentLetter)
        break
      }
      if (currentLetterRange <= randomNumberWithinRange && nextLetterRange > randomNumberWithinRange) {
        letters.push(nextLetter)
        break
      }
    }
  }
  return letters
}

const generateRandomBoard = (frequencyTable, boardDimension) => {
  const lettersForBoard = getLettersForBoard(frequencyTable, boardDimension)
  let i = 0
  const gameBoard = []

  for (let x = 0; x < boardDimension; x++) {
    for (let y = 0; y < boardDimension; y++) {
      gameBoard.push({ x, y, letter: lettersForBoard[i], id: i })
      i++
    }
  }
  return gameBoard
}

const getRandomOverlay = (board, overlayLength) => {
  const startingIndex = Math.floor(Math.random() * board.length)
  let currentCell = board[startingIndex]
  const overlay = [currentCell]

  for (let l = 1; l < overlayLength; l++) {
    const adjacentCells = getAdjacentCells(currentCell, board, overlay)
    if (!adjacentCells.length) {
      console.warn("STARTING OVER")
      return getRandomOverlay(board, overlayLength)
    }
    const nextCellIndex = Math.floor(Math.random() * adjacentCells.length)
    currentCell = adjacentCells[nextCellIndex]
    overlay.push(currentCell)
  }
  return overlay
}

const placeBonusWordOnBoard = (board, bonusWord) => {
  const randomBoardOverlay = getRandomOverlay(board, bonusWord.length)
  randomBoardOverlay.forEach((cell, i) => {
    board[cell.id] = {...board[cell.id], letter: bonusWord[i]}
  })
  return board
}

export const getBoardWithMinWordCount = (count, options) => {
  const { frequencyTable, boardDimension, bonusWord, dictionary } = options

  let board = generateRandomBoard(frequencyTable, boardDimension)
  if (bonusWord) board = placeBonusWordOnBoard(board, bonusWord)

  const foundWords = findAllWords(board, dictionary)
  if (foundWords.length > count) return { board, words: foundWords }

  console.warn("TRYING AGAIN")
  return getBoardWithMinWordCount(count, options)
}

export const createGameBoard = options => {
  const { dictionary, boardDimension, frequencyTable, minWordCount, bonusWord } = options
  
  if (minWordCount) return getBoardWithMinWordCount(minWordCount, options)

  let board = generateRandomBoard(frequencyTable, boardDimension)
  if (bonusWord) {
    board = placeBonusWordOnBoard(board, bonusWord)
  }

  const words = findAllWords(board, dictionary)
  return { board, words }
}
