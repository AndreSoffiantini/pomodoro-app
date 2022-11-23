import { React } from "react";

const InputField = (props) => {
  return (
    <div className="inputField">
      <label for={props.id}>{props.labelText}</label>
      <input
        type="number"
        name={props.id}
        id={props.id}
        min={props.min}
        max={props.max}
        value={props.value}
        onChange={props.isPaused ? props.handleChange : null}
        required
      ></input>
    </div>
  );
};

export default InputField;
