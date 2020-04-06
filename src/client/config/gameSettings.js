export const ALPHABET = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

const GAME_VARIABLES = {
  BOARD_DIMENSIONS: [4,5,6],
  MINIMUM_WORD_LENGTHS: [2, 3, 4, 5, 6, 7],
  FREQUENCIES: {
    BEAUTY: [146,42,64,57,72,26,37,40,118,6,23,90,55,84,106,52,3,99,139,80,72,17,18,8,39,9],
    GORGEOUS: [71,19,36,33,43,12,25,21,75,2,10,49,26,56,57,26,2,63,60,55,32,9,8,3,15,4]
  }
}

/*
generates a frequency table based on an array of 26 numbers
example input: 
[146,42,64,57,72,26,37,40,118,6,23,90,55,84,106,52,3,99,139,80,72,17,18,8,39,9]
where the first number in the array corresponds to how likely 'A' will appear, and so on
this makes it easy for me to visualize the probability distribution of the letters
*/
const getFrequencyTable = (frequencies) => {
  return frequencies.reduce(
    ({ frequencies, range }, num, i) => {
      range += num
      frequencies[ALPHABET[i]] = range
      return { frequencies, range }
    },
    { frequencies: {}, range: 0 }
  )
}

//TODO: make game settings dynamic / user-configurable
export const GAME_SETTINGS = {
  BOARD_DIMENSION: GAME_VARIABLES.BOARD_DIMENSIONS[1],
  MINIMUM_WORD_LENGTH: GAME_VARIABLES.MINIMUM_WORD_LENGTHS[2],
  FREQUENCY_TABLE: getFrequencyTable(
    GAME_VARIABLES.FREQUENCIES.BEAUTY
  ),
  ALPHABET
}