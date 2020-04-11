// import { ALPHABET } from '../constants'
/*
generates a frequency table based on an array of 26 numbers
example input: 
[146,42,64,57,72,26,37,40,118,6,23,90,55,84,106,52,3,99,139,80,72,17,18,8,39,9]
where the first number in the array corresponds to how likely 'A' will appear, and so on
this makes it easy for me to visualize the probability distribution of the letters
*/
const ALPHABET = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','QU','R','S','T','U','V','W','X','Y','Z']

export const getFrequencyTable = frequencies => {
  return frequencies.reduce(
    ({ frequencies, range }, num, i) => {
      range += num
      frequencies[ALPHABET[i]] = range
      return { frequencies, range }
    },
    { frequencies: {}, range: 0 }
  )
}