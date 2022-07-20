import React from "react";
import classes from "./AssignButton.module.css";
import CheckIcon from "@mui/icons-material/Check";

const ConfirmButton = (props) => {
  return (
    <button onClick={props.clicked} className={classes["assign-btn"]}>
      <CheckIcon />
    </button>
  );
};

export default ConfirmButton;
