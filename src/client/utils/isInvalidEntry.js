function onlyLetters(str) {
  return /^[a-zA-Z]+$/.test(str);
}

export const isInvalidEntry = (input, minWordLength, enteredWords) => {
  if (!onlyLetters(input)) return `${input} not accepted: answer contains invalid characters`
  if (input.length < minWordLength) return `${input} not accepted: answer is too short`
  console.warn({enteredWords})
  if (enteredWords.indexOf(input) > -1) return `${input} already submitted`
  return false
}
