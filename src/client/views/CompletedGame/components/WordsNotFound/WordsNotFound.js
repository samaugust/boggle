import classNames from "classnames";
import React, { memo, useCallback, useState } from "react";

import styles from "./WordsNotFound.module.sass";

const WordsNotFound = ({ words }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const sortedWords = [...words].sort().sort((a, b) => b.length - a.length);

  const changeExpandedState = () => {
    setIsExpanded(true);
  };

  const wordsClassnames = classNames(styles.words, {
    [styles.expanded]: isExpanded,
  });

  return (
    <div className={styles.wrapper}>
      Words that weren't found:
      <div className={wordsClassnames}>
        {sortedWords.map((w, i) => (
          <span key={w}>
            {w}
            {i < sortedWords.length - 1 ? ", " : ""}
          </span>
        ))}
      </div>
      {!isExpanded && (
        <button className={styles.button} onClick={changeExpandedState}>
          See All
        </button>
      )}
    </div>
  );
};

export default memo(WordsNotFound);
