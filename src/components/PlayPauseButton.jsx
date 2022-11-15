import { React } from "react";

const PlayPauseButton = (props) => {
  /*  useEffect(() => {
    return () => clearInterval(intervalId);
  }); */

  return (
    <button className="controller" onClick={props.handleClick}>
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
            props.intervalId
              ? "M15.75 5.25v13.5m-7.5-13.5v13.5"
              : "M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
          }
        />
      </svg>
    </button>
  );
};

export default PlayPauseButton;
