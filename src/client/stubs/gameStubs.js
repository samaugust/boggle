import { user1, user2, user3, user4, user5, user6 } from './userStubs'
import { board1 } from './boardStubs'
import { COLLINS_2019 } from '../dictionaries'


export const game1 = {
  id: 1,
  players: [ user1, user2, user3, user4, user5, user6 ],
  board: board1,
  header: 'COACHDOG',
  settings: {
    dictionary: COLLINS_2019,
    gridSize: 4,
    minLetters: 3,
    length: 180,
    frequency: 'prolific',
    minPlayers: 3,
    wordCount: 'very high',
    penalty: true
  }
}
