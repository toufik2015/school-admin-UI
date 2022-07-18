import classes from "./SearchInput.module.css";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";

const SearchInput = ({ filter, setFilter, ...props }) => {
  return (
    <div className={classes["input-box"]}>
      <button type="submit">
        <SearchIcon />
      </button>
      <input
        value={filter || ""}
        onChange={(e) => setFilter(e.target.value)}
        type={props.type}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default SearchInput;
