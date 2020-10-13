import React from "react";
import "./index.css"

function Input(props) {
  const label = props.label || props.children;
  let classes = props.variant ? `input input__${props.variant}` : "input";

    return (
      <p>
          <input type="text" placeholder={label} className={classes} disabled={props.disabled} />
      </p>
    )
}

export default Input;