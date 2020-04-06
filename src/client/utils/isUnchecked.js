export const isUnchecked = (cell, alreadyChecked) => {
  for (let checked of alreadyChecked) {
    if (checked.x === cell.x && checked.y === cell.y) return false
  }
  return true
}