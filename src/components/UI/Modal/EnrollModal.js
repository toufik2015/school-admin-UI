import React, { Fragment, useEffect } from "react";
import ReactDOM from "react-dom";
import Overlay from "./Overlay";
import Backdrop from "./Backdrop";
import { useForm } from "react-hook-form";
import ConfirmButton from "../Button/ConfirmButton";
import Input from "../Input/Input";
import { fetchGroups } from "../../../store/groups-slice";
import { useDispatch, useSelector } from "react-redux";
import Select from "../Input/Select";

import classes from "./EnrollModal.module.css";

function EnrollModalContent(props) {
  const groupsData = useSelector((state) => state.groups.groupsList);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGroups());
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div>
      <form
        onSubmit={handleSubmit(props.onSubmit)}
        className={classes["form-box"]}
      >
        <Select register={register} items={groupsData} name="group" />
        <Input register={register} type="date" name="EnrollDate" />
        <ConfirmButton />
      </form>
    </div>
  );
}

function EnrollModal(props) {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Overlay>
          <EnrollModalContent onSubmit={props.onSubmit} />
        </Overlay>,
        document.getElementById("backdrop-root")
      )}
    </Fragment>
  );
}

export default EnrollModal;
