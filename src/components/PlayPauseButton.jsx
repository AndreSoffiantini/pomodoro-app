import { React, useEffect } from "react";

const PlayPauseButton = (props) => {
  const handlePause = () => {
    props.setIsPaused(!props.isPaused);
  };

  useEffect(() => {
    if (!props.isPaused) {
      const interval = setInterval(() => {
        props.setSecondsLeft((secondsLeft) => secondsLeft - 1);
      }, 1000);

      if (props.secondsLeft === 0) {
        clearInterval(interval);
      }

      return () => clearInterval(interval);
    }
  });

  return (
    <button className="controller" onClick={handlePause}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d={
            props.isPaused
              ? "M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
              : "M15.75 5.25v13.5m-7.5-13.5v13.5"
          }
        />
      </svg>
    </button>
  );
};

export default PlayPauseButton;
