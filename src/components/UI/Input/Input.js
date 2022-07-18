import classes from "./Input.module.css";
import React from "react";

const Input = ({ label, register, required, placeholder, type, name }) => {
  return (
    <div className={classes["input-box"]}>
      <label>{label}</label>
      <input {...register(name)} placeholder={placeholder} type={type} />
    </div>
  );
};

export default Input;
