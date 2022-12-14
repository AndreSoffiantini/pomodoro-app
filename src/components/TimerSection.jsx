import React from "react";
import ButtonsContainer from "./ButtonsContainer";
import InputField from "./InputField";
import Timer from "./Timer";
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

    if (!isPaused && secondsLeft === 0) {
      switchStatus();
    }
  }, [secondsLeft, breakTimer, sessionTimer, status, isPaused]);

  const handleSessionChange = (e) => {
    if (e.target.value) {
      if (isPaused && e.target.value === "0") {
        return;
      } else {
        setSessionTimer(e.target.value);
        setSecondsLeft(e.target.value * 60);
      }
    }
  };

  const handleBreakChange = (e) => {
    if (e.target.value) {
      if (isPaused && e.target.value === "0") {
        return;
      } else {
        setBreakTimer(e.target.value);
      }
    }
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

      <Timer minutes={minutes} seconds={seconds} />

      <div className="inputFields">
        <InputField
          id="session"
          labelText="Session length"
          min="1"
          max="120"
          value={sessionTimer}
          isPaused={isPaused}
          handleChange={handleSessionChange}
        />
        <InputField
          id="breakTimer"
          labelText="Break length"
          min="1"
          max="30"
          value={breakTimer}
          isPaused={isPaused}
          handleChange={handleBreakChange}
        />
      </div>

      <div style={{ margin: "25px" }}>
        <ButtonsContainer
          handlePause={handlePause}
          handleReset={handleReset}
          setSecondsLeft={setSecondsLeft}
        />
      </div>
    </div>
  );
};

export default TimerSection;
