import React, { Fragment, useEffect } from "react";
import ReactDOM from "react-dom";
import Overlay from "./Overlay";
import Backdrop from "./Backdrop";
import { useForm } from "react-hook-form";
import ConfirmButton from "../Button/ConfirmButton";
import CloseButton from "../Button/CloseButton";
import Input from "../Input/Input";
import { fetchGroups } from "../../../store/groups-slice";
import { useDispatch, useSelector } from "react-redux";
import Select from "../Input/Select";

import classes from "./EnrollModal.module.css";
import Enrollment from "./Enrollment";

function EnrollModalContent(props) {
  const groupsData = useSelector((state) => state.groups.groupsList);
  const enrollments = useSelector((state) => state.students.enrollments);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGroups());
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const enrollmentItems = enrollments.map((enrollment) => (
    <Enrollment key={enrollment.id} enrollment={enrollment} />
  ));
  return (
    <>
      <div className={classes["btn-group"]}>
        <CloseButton />
      </div>
      <div className={classes["enroll-container"]}>
        <form
          onSubmit={handleSubmit(props.onSubmit)}
          className={classes["form-box"]}
        >
          <Select register={register} items={groupsData} name="group" />
          <Input register={register} type="date" name="EnrollDate" />
          <ConfirmButton />
        </form>
        <div className={classes["enroll-items"]}>{enrollmentItems}</div>
      </div>
    </>
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
