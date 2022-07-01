import React, { memo } from "react";
import styles from "./FinalBoard.module.sass";

const FinalBoard = ({ board }) => {
  const itemsPerRow = Math.sqrt(board.length);
  const rows = Array(itemsPerRow)
    .fill(null)
    .map((_, i) => {
      const pos = i * itemsPerRow;
      const cells = board.slice(pos, pos + itemsPerRow);
      return cells.map((cell) => (
        <div className={styles.cell}>{cell.letter}</div>
      ));
    });

  return (
    <div className={styles.table}>
      {rows.map((row) => (
        <div className={styles.row}>{row}</div>
      ))}
    </div>
  );
};

export default memo(FinalBoard);
