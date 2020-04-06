import { getAdjacentCells, isUnchecked } from './'
import config from '../config'

//////FOR GETTING ALL WORDS FROM A GENERATED GAMEBOARD
const getAllWordsFromCell = (
  currentCell,
  board,
  dictionary,
  subwordDictionary,
  wordCandidate = '',
  alreadyChecked = [],
  foundWords = []
) => {
  const nextWordCandidate = `${wordCandidate}${currentCell.value}`
  let nextFoundWords = []
  // not a subword so it could never be a word later, stop looking and return from function
  if (!subwordDictionary[nextWordCandidate]) {
    return dictionary[nextWordCandidate]
      ? [...foundWords, nextWordCandidate]
      : foundWords
  }
  // is a subword, so continue to see whether it will develop into words
  if (dictionary[nextWordCandidate]) {
    nextFoundWords = [...nextFoundWords, nextWordCandidate]
  }
  const adjacentCells = getAdjacentCells(
    currentCell,
    board
  ).filter((cell) => isUnchecked(cell, alreadyChecked))

  for (let cell of adjacentCells) {
    const words = getAllWordsFromCell(
      cell,
      board,
      dictionary,
      subwordDictionary,
      nextWordCandidate,
      [...alreadyChecked, { ...currentCell }]
    )
    nextFoundWords = [...nextFoundWords, ...words]
  }
  return nextFoundWords
}

export const findAllWords = (board, dictionary, subwordDictionary) => {
  const foundWords = board.flatMap((cell) =>
    getAllWordsFromCell(cell, board, dictionary, subwordDictionary)
  )
  return [
    ...new Set(
      foundWords.filter(
        (word) => word.length > config.GAME_SETTINGS.MINIMUM_WORD_LENGTH
      )
    ),
  ]
}
