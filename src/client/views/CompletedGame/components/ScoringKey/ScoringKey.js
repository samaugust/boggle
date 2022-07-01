import React, { memo } from "react";
import styles from "../../Score.module.sass";

const ScoringKey = () => (
  <div className={styles["scoring-key-wrapper"]}>
    Scoring key:
    <ul>
      <li>
        <span className={styles["full-score"]}>EXAMPLE</span> - only one person
        got this word; they get full points for it.
      </li>
      <li>
        <span className={styles["not-in-board"]}>EXAMPLE</span> - not possible.
        Words you make have to be formed with letters that are next to each
        other on the grid. If you can form a snake between all the letters, the
        word is valid. Diagonals are allowed. A letter on the grid can only be
        used once in each word.
      </li>
      <li>
        <span className={styles.normal}>EXAMPLE</span> - the word is good, but
        two or more players found it. Points that one person would have got are
        divided equally amongst the players.
      </li>
      <li>
        <span className={styles["not-real"]}>EXAMPLE</span> - the word is not in
        the dictionary. If dictionary penalty was on for this game, and they
        were the only one to find this incorrectly spelled word, they lose two
        points.
      </li>
    </ul>
    {/* <p>
            Words <span class="word bonus">highlighted in yellow</span> used the
            bonus square.
          </p> */}
    <p>Be sure to check out the Prolific Rules for further information.</p>
  </div>
);

export default memo(ScoringKey);
