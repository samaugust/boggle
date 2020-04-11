import { getFrequencyTable } from '../utils/getFrequencyTable'

const FREQUENCIES = {
  BEAUTY: [146,42,64,57,72,26,37,40,118,6,23,90,55,84,106,52,3,99,139,80,72,17,18,8,39,9],
  GORGEOUS: [71,19,36,33,43,12,25,21,75,2,10,49,26,56,57,26,2,63,60,55,32,9,8,3,15,4],
  QUITE_GORGEOUS: [71,19,36,33,43,12,25,21,75,2,10,49,26,56,57,26,15,63,60,55,32,9,8,3,15,4],
  ALL_ABOUT_ME: [1,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],
  ALL_ABOUT_LOTTIKA: [1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,2,0,0,0,0,0,0]
}

const FREQUENCY_TABLES = Object.keys(FREQUENCIES).reduce((tables, currentFrequencies) => {
  tables[currentFrequencies] = getFrequencyTable(FREQUENCIES[currentFrequencies])
  return tables
}, {})

export const GAME_OPTIONS = {
  BOARD_DIMENSIONS: [4,5,6],
  MINIMUM_WORD_LENGTHS: [2, 3, 4, 5, 6, 7],
  FREQUENCY_TABLES
}