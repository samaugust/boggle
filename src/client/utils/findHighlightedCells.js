import { getAdjacentCells, isInCellList } from './'

//FOR HIGHLIGHTING LETTERS IN BOARD
const getMatchesFromCell = (
  currentCell,
  input,
  board,
  alreadyChecked = [],
  potentialMatch = [],
  matches = []
) => {
  const currentChar = input.slice(0, 1)

  if (currentChar === currentCell.value && input.length === 1)
    return [...potentialMatch, currentCell]

  if (currentChar !== currentCell.value) return

  const uncheckedAdjacentCells = getAdjacentCells(
    currentCell,
    board
  ).filter((cell) => !isInCellList(alreadyChecked, cell))

  for (let cell of uncheckedAdjacentCells) {
    const match = getMatchesFromCell(
      cell,
      input.slice(1),
      board,
      [...alreadyChecked, { ...currentCell }],
      [...potentialMatch, { ...currentCell }],
      [...matches]
    )
    if (match) {
      matches = matches.concat(match)
    }
  }
  return matches
}

export const findHighlightedCells = (board, input) =>
  board.reduce(
    (matches, cell) => [
      ...matches,
      ...(getMatchesFromCell(cell, input, board) || []),
    ],
    []
  )