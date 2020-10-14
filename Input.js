import React from "react";
import "./index.css";
import Icon from "./icons";

function Input(props) {
  const label = props.children;
  const placeholder = props.label;
  let classes = props.text ? `input input__${props.text}` : "input";
  let classLabel = props.text === "error" ? "error" : "blue";


  // if(props.label === "icon start") {
  //   label = `${props.startIcon ? <Icon name={props.startIcon} /> : ''} start icon`
  // }
  
  // if(props.label === "icon end") {
  //   label = `${props.endIcon ? <Icon name={props.endIcon} align="right" /> : ''} end icon`
  // }


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
    <p className="inputs">
      <label className={classes}>{label}<br/>
        <input
          type="text"
          placeholder={placeholder}
          className={classes}
          disabled={props.text === "disabled" ? "disabled" : ""} 
        />
        <i>{props.startIcon ? <Icon name={props.startIcon} /> : ''}</i>
        <i>{props.endIcon ? <Icon name={props.endIcon} align="right" /> : ''}</i><br/>
        <span style={{color:"#D32F2F"}}>{props.text === "interestingText" ? "Some interesting text" : ""}</span>
        <span>{props.text === "interesting" ? "Some interesting text" : ""}</span>
      </label>
    </p>
  );
}

export default Input;
