import React from "react";
import classes from "./AssignButton.module.css";

const AssignButton = (props) => {
  return (
    <button
      data-id={props.ID}
      onClick={props.onAssign}
      className={classes["assign-btn"]}
    >
      Enroll
    </button>
  );
};

export default AssignButton;
