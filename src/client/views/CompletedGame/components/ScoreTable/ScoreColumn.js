import React, { memo } from "react";
import styles from "./ScoreColumn.module.sass";

// words = list of words with the points, whether it's a real word, full score, normal, or not in the board

const ScoreColumn = ({ name, img, points, words }) => {
  return (
    <div className={styles["column-wrapper"]}>
      <div className={styles["column-top"]}>
        <img src={img} alt="Avatar" className={styles.avatar} />
        <div>{name}</div>
        <div className={styles.score}>
          {words.length > 0 ? `${points} points` : "did not play"}
        </div>
      </div>
      <div>
        {words.map((w, i) => (
          <div key={w.word} className={styles["word-row"]}>
            <div className="word">{w.word}</div>
            <div className="score">{w.score}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(ScoreColumn);
