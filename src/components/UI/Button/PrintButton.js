import React from "react";
import classes from "./PrintButton.module.css";
import PrintIcon from "@mui/icons-material/Print";
const PrintButton = () => {
  return (
    <button className={classes["print-btn"]}>
      <PrintIcon />
    </button>
  );
};
export default PrintButton;
