import React, { useState } from "react";
import "./reset.css";
import "./App.sass";

import ActiveGame from "./views/ActiveGame/ActiveGame";
import CompletedGame from "./views/CompletedGame/CompletedGame";
import NavBar from "./views/shared/NavBar";

import { game1 } from "./stubs/gameStubs";

// import config from "../../config";
// For when we need to generate a new game board:
// const options = {
//   dictionary: config.GAME_SETTINGS.DICTIONARY,
//   boardDimension: config.GAME_SETTINGS.BOARD_DIMENSION,
//   frequencyTable: config.GAME_SETTINGS.FREQUENCY_TABLE,
//   bonusWord: "JEFFBABIAK",
// };
// const before = Date.now();
// // const GAMEBOARD = createGameBoard(options);
// // const GAMEBOARD = board1
// const after = Date.now();
// console.info(
//   `A board with these parameters took this long to generate: ${
//     (after - before) / 1000
//   }`
// );
// console.warn(JSON.stringify(GAMEBOARD));

const App = () => {
  const [gameStatus, setGameStatus] = useState("active");
  const [game] = useState(game1);

  let view = null;
  if (gameStatus === "active")
    view = <ActiveGame setGameStatus={setGameStatus} game={game} />;
  if (gameStatus === "complete") view = <CompletedGame game={game} />;

  return (
    <div className="app">
      {!["pregame", "active"].includes(gameStatus) && <NavBar />}
      {view}
    </div>
  );
};

export default App;
