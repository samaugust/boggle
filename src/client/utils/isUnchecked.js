export const isUnchecked = (cell, alreadyChecked) => {
  return !alreadyChecked.find(c => c.id === cell.id)
}
