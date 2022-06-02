import scoreKey from '../constants/scoreKey'
import { game1 } from '../stubs/gameStubs'
//https://prolific.games/games/j21U8cNW7O-Rjm-0
import { submission1 } from '../stubs/submissionStubs'

const getInitialScoreForWord = (word) => {
  if (word.length === 3) return scoreKey['3LW']
  if (word.length === 4) return scoreKey['4LW']
  if (word.length === 5) return scoreKey['5LW']
  if (word.length === 6) return scoreKey['6LW']
  if (word.length === 7) return scoreKey['7LW']
  return scoreKey['7LW'] + (word.length - 7)
}

const processSubmissions = (allUserSubmissions, allWordsInBoard, dictionary, penalty) => {
  return allUserSubmissions.reduce((currentSubmission, submissionTally) => {
    const isWord = dictionary.words[currentSubmission]
    const isInBoard = allWordsInBoard.includes(currentSubmission)
    const submissionInfo = submissionTally[currentSubmission]
    const hasBeenTallied = !!submissionTally[currentSubmission]
    if (!isInBoard && !hasBeenTallied) submissionTally[currentSubmission] = { isInBoard: false, score: 0 }
    if (!isWord && isInBoard && !hasBeenTallied) submissionTally[currentSubmission] = { isWord: false, isInBoard: true, score: penalty ? -2 : 0 }
    if (isWord && isInBoard && !hasBeenTallied) submissionTally[currentSubmission] = { isWord: true, isInBoard: true, score: getInitialScoreForWord(currentSubmission) }
    if ((!isWord && isInBoard && hasBeenTallied) || (isWord && isInBoard && hasBeenTallied)) submissionTally[currentSubmission] = { ...submissionTally[currentSubmission], score: Math.floor(submissionInfo.score / 2) }
  }, {})
}

const getResults = (userSubmissions, game) => {
  const allUserSubmissions = Object.values(userSubmissions)
  const processedSubmissions = processSubmissions()
}