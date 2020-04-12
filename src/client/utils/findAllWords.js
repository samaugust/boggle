import { getAdjacentCells } from './'

//FOR GETTING ALL WORDS FROM A GENERATED GAMEBOARD
const getAllWordsFromCell = (
  currentCell,
  board,
  dictionary,
  wordCandidate = '',
  alreadyChecked = [],
  foundWords = []
) => {
  const nextWordCandidate = `${wordCandidate}${currentCell.letter}`
  let nextFoundWords = []
  const isWord = dictionary.words[nextWordCandidate]
  const isSubword = dictionary.subWords[nextWordCandidate]
  
  // not a subword so it could never be a word later, stop looking and return from function
  if (!isSubword) {
    return isWord
      ? [...foundWords, nextWordCandidate]
      : foundWords
  }
  if (isWord) {
    nextFoundWords.push(nextWordCandidate)
  }
  // is a subword, so continue recursive search to see whether current sequence will yield more words
  const adjacentCells = getAdjacentCells(currentCell, board, alreadyChecked)

  for (let cell of adjacentCells) {
    const words = getAllWordsFromCell(
      cell,
      board,
      dictionary,
      nextWordCandidate,
      [...alreadyChecked, { ...currentCell }]
    )
    nextFoundWords = [...nextFoundWords, ...words]
  }
  return nextFoundWords
}

export const findAllWords = (board, dictionary) => {
  const foundWords = board.flatMap(cell => getAllWordsFromCell(cell, board, dictionary))
  return [...new Set(foundWords)]
}