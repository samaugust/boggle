import React, { memo } from "react";
import ScoreColumn from "./ScoreColumn";

const ScoreTable = ({ players, results }) => {
  const columnData = players.map(() => {});

  return (
    <div>
      {columnData.map((data) => (
        <ScoreColumn {...data} />
      ))}
    </div>
  );
};

export default memo(ScoreTable);
