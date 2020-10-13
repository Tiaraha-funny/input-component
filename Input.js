import React from "react";
import "./index.css";

function Input(props) {
  const label = props.children;
  const placeholder = props.label;
  let classes = props.variant ? `input input__${props.variant}` : "input";
  let classLabel = props.variant === "error" ? "error" : "blue";

  if (props.disabled) {
		classes = `${classes} input__${props.disabled}`;
  }

  if (props.startIcon) {
		classes = `${classes} input__${props.startIcon}`;
  }
  if (props.endIcon) {
		classes = `${classes} input__${props.endIcon}`;
  }
  if (props.size) {
		classes = `${classes} input__${props.size}`;
  }
  if (props.value) {
		classes = `${classes} input__${props.value}`;
  }
  if (props.row) {
		classes = `${classes} input__${props.row}`;
	}

  return (
    <p>
      <label className={classes}>{label}</label><br/>
      <input
        type="text"
        placeholder={placeholder}
        className={classes}
        disabled={props.disabled}
      /><br />
      <span style={{color:"#D32F2F"}}>{props.variant === "interestingText" ? "Some interesting text" : ""}</span>
    </p>
  );
}

export default Input;
