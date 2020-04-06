export const getAdjacentCells = (cell, board) => {
  return board.filter(
    ({ x, y }) =>
      (cell.x + 1 === x || cell.x - 1 === x || cell.x === x) &&
      (cell.y + 1 === y || cell.y - 1 === y || cell.y === y) &&
      !(cell.y === y && cell.x === x)
  )
}