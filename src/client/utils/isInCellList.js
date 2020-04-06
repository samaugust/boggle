export const isInCellList = (cellList, cell) => {
  return !!cellList.find((c) => c.x === cell.x && c.y === cell.y)
}