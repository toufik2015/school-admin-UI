import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Backdrop from "./Backdrop";
import Overlay from "./Overlay";
import Input from "../Input/Input";

import classes from "./RegisterStudentModal.module.css";
import SubmitBtn from "../Button/SubmitBtn";
import CancelButton from "../Button/CancelButton";

function RegisterStudentForm(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <form
      onSubmit={handleSubmit(props.onSubmit)}
      className={classes["registeration-form"]}
    >
      <Input register={register} name="firstName" label="First name" />
      <Input register={register} name="lastName" label="Last name" />
      <Input
        register={register}
        name="email"
        placeholder="Email..."
        label="Email"
      />
      <Input register={register} name="phone" type="tel" label="Phone number" />
      <Input
        register={register}
        name="birthdate"
        type="date"
        label="Registeration date"
      />
      <div className={classes["form-btns"]}>
        <SubmitBtn />
        <CancelButton onCancel={props.onCancel} />
      </div>
    </form>
  );
}

function RegisterStudentModal(props) {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Overlay>
          <RegisterStudentForm
            onSubmit={props.onSubmit}
            onCancel={props.onCancel}
          />
        </Overlay>,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
}

export default RegisterStudentModal;
