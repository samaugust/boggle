import { SCORE_KEY } from "../constants/scoreKey";
//https://prolific.games/games/j21U8cNW7O-Rjm-0
import { submissionStubs1 } from "../stubs/submissionStubs";
import { GAME_SETTINGS } from "../config/gameSettings";

const getInitialScoreForWord = (word) => {
  if (word.length === 3) return SCORE_KEY["3LW"];
  if (word.length === 4) return SCORE_KEY["4LW"];
  if (word.length === 5) return SCORE_KEY["5LW"];
  if (word.length === 6) return SCORE_KEY["6LW"];
  if (word.length === 7) return SCORE_KEY["7LW"];
  return SCORE_KEY["7LW"] + (word.length - 7);
};

const processSubmissions = (userSubmissions, game, penalty) => {
  const dictionary = GAME_SETTINGS.DICTIONARY;
  const allWordsInBoard = game.board?.words || [];
  const allUserSubmissions = userSubmissions.reduce((arr, userSub) => {
    return [...arr, ...userSub.submissions];
  }, []);

  const submissions = allUserSubmissions.reduce(
    (submissionTally, currentSubmission) => {
      const isWord = dictionary.words[currentSubmission];
      const isInBoard = allWordsInBoard.includes(currentSubmission);
      const submissionInfo = submissionTally[currentSubmission];
      const hasBeenTallied = !!submissionTally[currentSubmission];
      if (!isInBoard && !hasBeenTallied) {
        submissionTally[currentSubmission] = { isInBoard: false, score: 0 };
      }
      if (!isWord && isInBoard && !hasBeenTallied) {
        submissionTally[currentSubmission] = {
          isWord: false,
          isInBoard: true,
          score: penalty ? -2 : 0,
        };
      }
      if (isWord && isInBoard && !hasBeenTallied)
        submissionTally[currentSubmission] = {
          isWord: true,
          isInBoard: true,
          score: getInitialScoreForWord(currentSubmission),
        };
      if (
        (!isWord && isInBoard && hasBeenTallied) ||
        (isWord && isInBoard && hasBeenTallied)
      )
        submissionTally[currentSubmission] = {
          ...submissionTally[currentSubmission],
          score: Math.floor(submissionInfo.score / 2),
        };
      return submissionTally;
    },
    {}
  );

  return submissions;
};

const getResults = (game) => {
  // We would query the API here instead of using stub later
  const processedSubmissions = processSubmissions(submissionStubs1, game);
  return processedSubmissions;
};

export { getResults };
