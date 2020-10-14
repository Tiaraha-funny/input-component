import React from "react";
import contactIcon from "./images/iconPhone.svg";
import padlockIcon from "./images/padlock.svg"

function Icon(props) {
  let icon;
  const style = props.align === "right" ? "icon--right" : null;
  switch (props.name) {
    case "contact":
      icon = <img src={contactIcon} className={style} />;
      break;
    case 'padlock':
			icon = <img src={padlockIcon} className={style} />;
			break;
  }
  return icon;
}

export default Icon