import React from "react";
import PlayButton from "./PlayButton";
import PauseButton from "./PauseButton";
import ResetButton from "./ResetButton";
import { useState, useEffect } from "react";

const TimerSection = () => {
  const [sessionTimer, setSessionTimer] = useState(25);
  const [breakTimer, setBreakTimer] = useState(5);
  const [status, setStatus] = useState("session");
  const [isPaused, setIsPaused] = useState(true);

  const [secondsLeft, setSecondsLeft] = useState(sessionTimer * 60);
  const minutes = Math.floor(secondsLeft / 60);
  let seconds = secondsLeft % 60;
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  useEffect(() => {
    function switchStatus() {
      const changedStatus = status === "session" ? "break" : "session";
      const changedSeconds =
        changedStatus === "session" ? sessionTimer * 60 : breakTimer * 60;

      setStatus(changedStatus);
      setSecondsLeft(changedSeconds);
    }
    setSecondsLeft(secondsLeft);

    if (!isPaused) {
      const interval = setInterval(() => {
        setSecondsLeft((secondsLeft) => secondsLeft - 1);
      }, 1000);

      if (secondsLeft === 0) {
        switchStatus();
        clearInterval(interval);
        setIsPaused(false);
      }

      return () => clearInterval(interval);
    }
  }, [sessionTimer, breakTimer, isPaused, secondsLeft, status]);

  const handleSessionChange = (e) => {
    setSessionTimer(e.target.value);
    setSecondsLeft(e.target.value * 60);
  };

  const handleBreakChange = (e) => {
    setBreakTimer(e.target.value);
  };

  const handlePause = () => {
    setIsPaused(!isPaused);
  };

  const handleReset = () => {
    setIsPaused(true);
    setStatus("session");
    setSecondsLeft(sessionTimer * 60);
  };

  return (
    <div className="container">
      <div className="statusField">
        <h2 className="statusText">
          {status === "session" ? "Session!" : "Break!"}
        </h2>
      </div>
      <div className="timer">{minutes + ":" + seconds}</div>

      <div className="inputFields">
        <div className="inputField">
          <label>Session length</label>
          <input
            type="number"
            name="session"
            id="session"
            min="1"
            max="120"
            value={sessionTimer}
            onChange={handleSessionChange}
          ></input>
        </div>
        <div className="inputField">
          <label>Break length</label>
          <input
            type="number"
            name="breakTimer"
            id="breakTimer"
            min="1"
            max="30"
            value={breakTimer}
            onChange={handleBreakChange}
          ></input>
        </div>
      </div>

      <div style={{ margin: "25px" }}>
        {isPaused ? (
          <PlayButton onClick={handlePause} />
        ) : (
          <PauseButton onClick={handlePause} />
        )}
        <ResetButton onClick={handleReset} />
      </div>
    </div>
  );
};

export default TimerSection;
