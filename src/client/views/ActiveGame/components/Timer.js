import React, { useState, useEffect } from "react";

const Timer = ({ initialTime = 1000, setGameStatus }) => {
  const [timeRemaining, setTimeRemaining] = useState(180);

  useEffect(() => {
    if (initialTime) {
      setTimeRemaining(Math.floor(initialTime / 1000));
    }
  }, [initialTime]);

  useEffect(() => {
    if (timeRemaining === 0) setGameStatus("complete");
  }, [timeRemaining]);

  useEffect(() => {
    const updateTimeRemaining = setInterval(() => {
      setTimeRemaining(timeRemaining - 1);
    }, 1000);
    return () => clearInterval(updateTimeRemaining);
  });

  return <p className="time-remaining">{timeRemaining} seconds</p>;
};

export default Timer;
