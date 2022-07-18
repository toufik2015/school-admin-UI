import React from "react";
import classes from "./RegisterButton.module.css";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
const RegisterButton = (props) => {
  return (
    <button
      onClick={props.onRegister}
      type="submit"
      className={classes["Register-btn"]}
    >
      <AppRegistrationIcon />
    </button>
  );
};
export default RegisterButton;
