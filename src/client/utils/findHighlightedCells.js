import { getAdjacentCells } from "./";

//FOR HIGHLIGHTING LETTERS IN BOARD
const getMatchesFromCell = (
  currentCell,
  input,
  board,
  alreadyChecked = [],
  potentialMatch = [],
  matches = []
) => {
  let currentLetter = input.slice(0, 2);
  if (currentLetter !== "QU") currentLetter = input.slice(0, 1);

  if (
    (currentLetter === currentCell.letter && input.length === 1) ||
    (currentLetter === currentCell.letter &&
      currentLetter === "QU" &&
      input.length === 2)
  )
    return [...potentialMatch, currentCell];

  if (currentLetter !== currentCell.letter) return [];

  const uncheckedAdjacentCells = getAdjacentCells(
    currentCell,
    board,
    alreadyChecked
  );

  for (let cell of uncheckedAdjacentCells) {
    const match = getMatchesFromCell(
      cell,
      input.slice(currentLetter === "QU" ? 2 : 1),
      board,
      [...alreadyChecked, { ...currentCell }],
      [...potentialMatch, { ...currentCell }],
      [...matches]
    );
    matches = matches.concat(match);
  }
  return matches;
};

export const findHighlightedCells = (board, input) =>
  board.flatMap((cell) => getMatchesFromCell(cell, input, board));
