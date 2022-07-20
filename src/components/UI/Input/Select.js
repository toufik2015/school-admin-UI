import React from "react";
import classes from "./Select.module.css";
function Select({ items, name }) {
  const groups = items.map((group) => (
    <option value={group.id}> {group.name} </option>
  ));
  return (
    <div className={classes["select-box"]}>
      <select name={name}>
        <option selected value={null}></option>
        {groups}
      </select>
    </div>
  );
}

export default Select;
