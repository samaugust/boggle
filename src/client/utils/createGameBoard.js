import config from '../config'

//FOR GENERATING A BOARD
const getLettersForBoard = (frequencyTable, boardDimension) => {
  const { frequencies, range } = frequencyTable
  let letters = []
  const numberOfSquaresOnBoard = Math.pow(boardDimension, 2)

  for (let i = 1; i <= numberOfSquaresOnBoard; i++) {
    const rangeQuantity = Math.ceil(Math.random() * range)
    for (let j = 0; j < config.GAME_SETTINGS.ALPHABET.length; j++) {
      const currentLetter = config.GAME_SETTINGS.ALPHABET[j]
      if (frequencies[currentLetter] > rangeQuantity) {
        letters.push(currentLetter)
        break
      }
    }
  }
  return letters
}

export const createGameBoard = (frequencyTable, boardDimension) => {
  const lettersForBoard = getLettersForBoard(
    frequencyTable,
    boardDimension
  )
  let i = 0
  const gameBoard = []
  for (let x = 0; x < boardDimension; x++) {
    for (let y = 0; y < boardDimension; y++) {
      gameBoard.push({ x, y, value: lettersForBoard[i], id: i })
      i++
    }
  }
  return gameBoard
}