import React, { memo } from "react";

// words = list of words with the points, whether it's a real word, full score, normal, or not in the board

const ScoreColumn = ({ playerName, avatar, totalPoints, words }) => {
  return (
    <div>
      <div>
        <img src={avatar} alt="Avatar" />
        <div>{playerName}</div>
        <div>{words.length > 0 ? `${totalPoints} points` : "did not play"}</div>
      </div>
      <div>
        {words.map((w) => (
          <div>
            <div>{w.word}</div>
            <div>{w.points}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(ScoreColumn);
