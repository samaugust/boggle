import React, { memo } from "react";
import ScoreColumn from "./ScoreColumn";

import styles from "./ScoreTable.module.sass";

const ScoreTable = ({ userColumns }) => {
  return (
    <div className={styles["score-table-wrapper"]}>
      {userColumns.map((user) => (
        <ScoreColumn {...user} key={user.id} />
      ))}
    </div>
  );
};

export default memo(ScoreTable);
