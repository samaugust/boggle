import React, { useEffect, useState } from "react";
import { getResults } from "../../utils/getResults";
import { user1, user2, user3, user4, user5 } from "../../stubs/userStubs";
import { submissionStubs1 } from "../../stubs/submissionStubs";

import WinnerHeader from "./components/WinnerHeader";

import wordStyles from "./Word.module.sass";
import styles from "./CompletedGame.module.sass";
import FinalBoard from "./components/FinalBoard";
import ScoreTable from "./components/ScoreTable";

const CompletedGame = ({ game }) => {
  const [players] = useState([user1, user2, user3, user4, user5]);
  const [results, setResults] = useState({});
  const [userColumns, setUserColumns] = useState([]);
  // Winners are an array in case of a tie
  const [winnerIds, setWinnerIds] = useState([0]);

  useEffect(() => {
    // In real world, we would also fetch the submissions and pull user data from state here
    const submissions = submissionStubs1;
    const _results = getResults(game);

    const columnData = players.map((player) => {
      let points = 0;
      let words = [];
      const playerSubs = submissions.find(
        (sub) => sub.userId === player.id
      )?.submissions;

      if (playerSubs && playerSubs.length > 0) {
        words = playerSubs.map((w) => ({
          word: w,
          ..._results[w],
        }));
        words.forEach(({ word }) => {
          points += _results[word].score;
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
              percentFound={24}
              key={user.id}
            />
          ))}
        </div>
        <FinalBoard board={game.board.board} />
        <ScoreTable userColumns={userColumns} />
        <div className="words-not-found"></div>
        <div className="scoring-key">
          Scoring key:
          <ul>
            <li>
              <span className={wordStyles["full-score"]}>EXAMPLE</span> - only
              one person got this word; they get full points for it.
            </li>
            <li>
              <span className={wordStyles["not-in-board"]}>EXAMPLE</span> - not
              possible. Words you make have to be formed with letters that are
              next to each other on the grid. If you can form a snake between
              all the letters, the word is valid. Diagonals are allowed. A
              letter on the grid can only be used once in each word.
            </li>
            <li>
              <span className={wordStyles.normal}>EXAMPLE</span> - the word is
              good, but two or more players found it. Points that one person
              would have got are divided equally amongst the players.
            </li>
            <li>
              <span className={wordStyles["not-real"]}>EXAMPLE</span> - the word
              is not in the dictionary. If dictionary penalty was on for this
              game, and they were the only one to find this incorrectly spelled
              word, they lose two points.
            </li>
          </ul>
          {/* <p>
            Words <span class="word bonus">highlighted in yellow</span> used the
            bonus square.
          </p> */}
          <p>
            Be sure to check out the Prolific Rules for further information.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompletedGame;
