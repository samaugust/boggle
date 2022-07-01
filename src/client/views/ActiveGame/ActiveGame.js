import React, { useState } from "react";

import Gameboard from "./components/Gameboard";
import Timer from "./components/Timer";
import WordInput from "./components/WordInput";
import EnteredWordList from "./components/EnteredWordList";
import PlayerList from "./components/PlayerList";
import GameHeader from "../shared/GameHeader";

const ActiveGame = ({ setGameStatus, game }) => {
  const [highlightedCells, setHighlightedCells] = useState([]);
  const [input, setInput] = useState("");
  const [enteredWords, setEnteredWords] = useState([]);
  const [inputError, setInputError] = useState("");

  return (
    <div className="active-game-container">
      <div className="active-game-header">
        <GameHeader />
      </div>

      <div className="active-game-content">
        <section className="player-pane">
          <PlayerList />
        </section>

        <section className="game-pane">
          <Gameboard
            gameboardData={game.board}
            highlightedCells={highlightedCells}
            setHighlightedCells={setHighlightedCells}
            input={input}
            setInput={setInput}
            setInputError={setInputError}
            enteredWords={enteredWords}
            setEnteredWords={setEnteredWords}
          />
          <WordInput
            gameboard={game.board}
            input={input}
            setInput={setInput}
            inputError={inputError}
            setInputError={setInputError}
            setHighlightedCells={setHighlightedCells}
            enteredWords={enteredWords}
            setEnteredWords={setEnteredWords}
          />
        </section>

        <section className="progress-pane">
          <Timer setGameStatus={setGameStatus} />
          <EnteredWordList
            enteredWords={enteredWords}
            setEnteredWords={setEnteredWords}
            totalWords={game.board?.words?.length}
          />
        </section>
      </div>
    </div>
  );
};

export default ActiveGame;
