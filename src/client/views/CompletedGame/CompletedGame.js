import React, { useEffect, useState } from "react";
import { getResults } from "../../utils/getResults";
import { user1, user2, user3, user4, user5 } from "../../stubs/userStubs";
import { submissionStubs1 } from "../../stubs/submissionStubs";

import WinnerHeader from "./components/WinnerHeader";
import FinalBoard from "./components/FinalBoard";
import ScoreTable from "./components/ScoreTable";
import WordsNotFound from "./components/WordsNotFound/WordsNotFound";
import ScoringKey from "./components/ScoringKey/ScoringKey";

import styles from "./CompletedGame.module.sass";

const CompletedGame = ({ game }) => {
  const [players] = useState([user1, user2, user3, user4, user5]);
  const [results, setResults] = useState({});
  const [userColumns, setUserColumns] = useState([]);
  // Winners are an array in case of a tie
  const [winnerIds, setWinnerIds] = useState([0]);

  useEffect(() => {
    // In real world, we would also fetch the submissions and pull user data from state here
    const submissions = submissionStubs1;
    const _results = getResults(game.settings);

    const columnData = players.map((player) => {
      let points = 0;
      let words = [];
      const playerSubs = submissions.find(
        (sub) => sub.userId === player.id
      )?.submissions;

      if (playerSubs && playerSubs.length > 0) {
        words = playerSubs.map((sub) => {
          points += _results[sub.word].score;
          return {
            word: sub.word,
            isInBoard: sub.isInBoard,
            ..._results[sub.word],
          };
        });
      }

      return {
        id: player.id,
        name: player.name,
        img: player.img,
        points,
        words,
      };
    });

    // Find winner(s)
    let _winnerIds = [];
    let highestScore = 0;
    columnData.forEach((player) => {
      if (player.points > highestScore) {
        highestScore = player.points;
        _winnerIds = [player.id];
      } else if (player.points === highestScore) {
        _winnerIds.push(player.id);
      }
    });

    setResults(_results);
    setWinnerIds(_winnerIds);
    setUserColumns(columnData);
  }, []);

  const winners = userColumns.filter((user) => winnerIds.includes(user.id));

  const guessedWords = Object.keys(results);
  const unfoundWords = game.board.words.filter(
    (word) => !guessedWords.includes(word)
  );

  // Should optimize later and maybe combine this with another loop earlier
  const foundWords = guessedWords.filter((w) => game.board.words.includes(w));
  const percentFound = Math.round(
    (foundWords.length / game.board.words.length) * 100
  );

  return (
    <div>
      <div className={styles["results-container"]}>
        <div>
          {/* Need to handle the case of a tie better later on */}
          {/* For now it just spits out multiple winner headers */}
          {winners.map((user) => (
            <WinnerHeader
              playerAvatarUrl={user.img}
              playerName={user.name}
              percentFound={percentFound}
              key={user.id}
            />
          ))}
        </div>
        <FinalBoard board={game.board.board} />
        <ScoreTable userColumns={userColumns} />
        <WordsNotFound words={unfoundWords} />
        <ScoringKey />
      </div>
    </div>
  );
};

export default CompletedGame;
