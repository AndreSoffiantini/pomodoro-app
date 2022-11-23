import { React } from "react";

const Timer = (props) => {
  return (
    <>
      <time className="timer">{props.minutes + ":" + props.seconds}</time>
    </>
  );
};

export default Timer;
