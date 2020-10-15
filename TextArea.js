import React from "react";
import "./index.css";

function TextArea(props) {
  let classes = props.text ? `input input__${props.text}` : "input";
  const placeholder = props.label || props.children;

  return (
    <textarea
      type="text"
      placeholder={placeholder}
      className={classes}
    ></textarea>
  );
}

export default TextArea;
