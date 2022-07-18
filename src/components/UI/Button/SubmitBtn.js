import React from "react";
import classes from "./SubmitBtn.module.css";
function SubmitBtn(props) {
  return (
    <button className={classes["submit-btn"]} type="submit">
      Submit
    </button>
  );
}

export default SubmitBtn;
