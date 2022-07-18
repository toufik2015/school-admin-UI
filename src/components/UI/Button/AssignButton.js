import React from "react";
import classes from "./AssignButton.module.css";

const AssignButton = (props) => {
  return (
    <button onClick={props.clicked} className={classes["assign-btn"]}>
      Enroll
    </button>
  );
};

export default AssignButton;
