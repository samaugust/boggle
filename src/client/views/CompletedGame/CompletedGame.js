import React, { useEffect, useState } from "react";
import { getResults } from "../../utils/getResults";
import { user1 } from "../../stubs/userStubs";

import WinnerHeader from "./components/WinnerHeader";

import wordStyles from "./Word.module.sass";
import styles from "./CompletedGame.module.sass";
import FinalBoard from "./components/FinalBoard/FinalBoard";

const CompletedGame = ({ game }) => {
  const [results, setResults] = useState({});

  useEffect(() => {
    setResults(getResults(game));
  }, []);

  console.log({
    game,
    results,
  });

  return (
    <div>
      <div className={styles["results-container"]}>
        <WinnerHeader
          playerAvatarUrl={user1.img}
          playerName={user1.name}
          percentFound={24}
        />
        <FinalBoard board={game.board.board} />
        <div className="score-table-container">
          <div className="score-table"></div>
        </div>
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
