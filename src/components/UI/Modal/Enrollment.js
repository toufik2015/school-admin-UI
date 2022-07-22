import React from "react";
import DeleteButton from "../Button/DeleteButton";
import classes from "./Enrollment.module.css";

function Enrollment({ enrollment, key }) {
  return (
    <div className={classes["enrollment-box"]} key={key}>
      <span>{enrollment.group.name}</span>
      <span> {enrollment.enrolledAt} </span> <DeleteButton />
    </div>
  );
}

export default Enrollment;
