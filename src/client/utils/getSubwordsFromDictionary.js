// might need to change the substring file, not sure whether my optimization worked
export const getSubwordsFromDictionary = (dictionaryWords) => {
  return dictionaryWords.reduce((substrings, word, idx) => {
    const lastLetter =
      dictionaryWords[idx + 1] &&
      dictionaryWords[idx + 1].indexOf(word) > -1
        ? word.length + 1
        : word.length
    for (let i = 1; i < lastLetter; i++) {
      substrings[word.slice(0, i)] = true
    }
    return substrings
  }, {})
}