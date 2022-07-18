import React from "react";
import classes from "./ButtonGroup.module.css";
import AssignButton from "./AssignButton";
import DeleteButton from "./DeleteButton";
import DetailsButton from "./DetailsButton";

function ButtonGroup(props) {
  return (
    <div className={classes["btn-group"]}>
      <AssignButton onAssign={props.onAssign} />
      <DetailsButton onDetails={props.onDetails} />
      <DeleteButton ID={props.ID} onDelete={props.onDelete} />
    </div>
  );
}

export default ButtonGroup;
