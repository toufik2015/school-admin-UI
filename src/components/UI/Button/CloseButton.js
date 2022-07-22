import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import classes from "./CloseButton.module.css";
function CloseButton() {
  return (
    <button className={classes["close-btn"]}>
      <CloseIcon />
    </button>
  );
}

export default CloseButton;
