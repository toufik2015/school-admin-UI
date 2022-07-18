import React from "react";
import classes from "./Pagination.module.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "../../../index.css";

const Pagination = (props) => {
  return (
    <div className={classes.pagination}>
      <button className={classes["pagination-btn"]}>
        <ArrowBackIosIcon />
      </button>
      <span>1/5</span>
      <button className={classes["pagination-btn"]}>
        <ArrowForwardIosIcon />
      </button>
    </div>
  );
};

export default Pagination;
