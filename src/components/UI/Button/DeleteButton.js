import React from "react";
import classes from "./DeleteButton.module.css";

const DeleteButton = (props) => {
  return (
    <button
      data-id={props.ID}
      onClick={props.onDelete}
      className={classes["dlt-btn"]}
    >
      Delete
    </button>
  );
};

export default DeleteButton;
