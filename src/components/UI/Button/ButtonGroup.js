import React from "react";
import classes from "./ButtonGroup.module.css";
import AssignButton from "./AssignButton";
import DeleteButton from "./DeleteButton";
import DetailsButton from "./DetailsButton";

function ButtonGroup(props) {
  return (
    <div className={classes["btn-group"]}>
      <AssignButton ID={props.ID} onAssign={props.onEnroll} />
      <DetailsButton onDetails={props.onDetails} />
      <DeleteButton ID={props.ID} onDelete={props.onDelete} />
    </div>
  );
}

export default ButtonGroup;
