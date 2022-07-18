import React from "react";
import classes from "./CancelButton.module.css";
function CancelButton(props) {
  return (
    <button
      type="button"
      className={classes["cancel-btn"]}
      onClick={props.onCancel}
    >
      Cancel
    </button>
  );
}

export default CancelButton;
