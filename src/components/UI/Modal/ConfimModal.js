import React from "react";
import ReactDOM from "react-dom";
import Backdrop from "./Backdrop";
import Overlay from "./Overlay";
import classes from "./ConfirmModal.module.css";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

const ConfirmContent = (props) => {
  return (
    <div className={classes["confirm-content"]}>
      <p>{props.message}</p>
      <div className={classes["confirm-btns"]}>
        <button onClick={props.onConfirm} className={classes["confirm-btn"]}>
          <CheckIcon />
        </button>
        <button onClick={props.onCancel} className={classes["cancel-btn"]}>
          <CloseIcon />
        </button>
      </div>
    </div>
  );
};

const ConfirmModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.toggleModal} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Overlay>
          <ConfirmContent
            onConfirm={props.onConfirm}
            onCancel={props.onCancel}
            message={props.message}
          />
        </Overlay>,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default ConfirmModal;
