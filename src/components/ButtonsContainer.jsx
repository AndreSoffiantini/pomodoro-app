import { React, useState } from "react";
import ResetButton from "./ResetButton";
import PlayPauseButton from "./PlayPauseButton";

const ButtonsContainer = (props) => {
  const [intervalId, setIntervalId] = useState(0);

  const handleClick = () => {
    props.handlePause();

    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(0);
      return;
    }
    const newInterval = setInterval(() => {
      props.setSecondsLeft((prev) => prev - 1);
    }, 1000);
    setIntervalId(newInterval);
  };

  const handleResetInterval = () => {
    props.handleReset();
    clearInterval(intervalId);
    setIntervalId(0);
  };

  return (
    <>
      <PlayPauseButton handleClick={handleClick} intervalId={intervalId} />
      <ResetButton handleReset={handleResetInterval} />
    </>
  );
};

export default ButtonsContainer;
