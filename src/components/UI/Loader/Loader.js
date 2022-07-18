import React from "react";
import classes from "./Loader.module.css";
const Loader = () => {
  return (
    <div className={classes.loader}>
      <div className={classes["lds-dual-ring"]}></div>
    </div>
  );
};

export default Loader;
