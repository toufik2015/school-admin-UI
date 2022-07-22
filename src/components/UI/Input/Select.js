import React from "react";
import classes from "./Select.module.css";

function Select({ items, name, register }) {
  const groups = items.map((group) => (
    <option key={group.id} value={group.id}>
      {group.name}
    </option>
  ));
  return (
    <div className={classes["select-box"]}>
      <select defaultValue={null} {...register(name)} name={name}>
        <option value={null}></option>
        {groups}
      </select>
    </div>
  );
}

export default Select;
