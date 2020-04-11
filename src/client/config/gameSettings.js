import { GAME_OPTIONS, ALPHABET } from '../constants'
import { collins2019 } from '../dictionaries'

//TODO: make game settings dynamic / user-configurable
export const GAME_SETTINGS = {
  BOARD_DIMENSION: GAME_OPTIONS.BOARD_DIMENSIONS[2],
  MINIMUM_WORD_LENGTH: GAME_OPTIONS.MINIMUM_WORD_LENGTHS[2],
  FREQUENCY_TABLE: GAME_OPTIONS.FREQUENCY_TABLES.BEAUTY,
  DICTIONARY: collins2019,
  ALPHABET
}