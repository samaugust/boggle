export const isInCellList = (cellList, cell) => {
  return !!cellList.find(c => c.id === cell.id)
}
