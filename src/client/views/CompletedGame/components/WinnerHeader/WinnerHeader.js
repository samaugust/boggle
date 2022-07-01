import React from "react";
import styles from "./WinnerHeader.module.sass";

const WinnerHeader = ({
  playerAvatarUrl = "",
  playerName = "",
  percentFound = 0,
}) => {
  return (
    <div className={styles["winner-header"]}>
      <div className={styles["winner-div"]}>
        <img
          className={styles["avatar"]}
          src={playerAvatarUrl}
          alt={playerName}
        />
        <h1>{playerName}</h1>
      </div>
      <div>
        <h1>{percentFound}% found</h1>
      </div>
    </div>
  );
};

export default React.memo(WinnerHeader);
