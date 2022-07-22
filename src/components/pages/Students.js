import classes from "./Students.module.css";

import Pagination from "../UI/OtherUI/Pagination";

import StudentsTable from "../UI/Tables/StudentsTable";
import Loader from "../UI/Loader/Loader";
import { useSelector, useDispatch } from "react-redux";
import ConfirmModal from "../UI/Modal/ConfimModal";

import React from "react";

import { registerStudent, enrollStudent } from "../../store/students-slice";
import { uiActions } from "../../store/ui-slice";
import { studentsActions } from "../../store/students-slice";
import { deleteStudentDb } from "../../store/students-slice";
import RegisterStudentModal from "../UI/Modal/RegisterStudentModal";
import EnrollModal from "../UI/Modal/EnrollModal";

const Students = () => {
  const dispatch = useDispatch();
  const StudentDltModalShow = useSelector(
    (state) => state.ui.showDltStudentModal
  );

  const studentEnrollModalShow = useSelector(
    (state) => state.ui.showEnrollStudentModal
  );
  const StudentRegisterModalShow = useSelector(
    (state) => state.ui.showStudentRegisterModal
  );
  const studentDltConfirmHanlder = () => {
    dispatch(deleteStudentDb());
  };

  const showDltStudentModalHandler = (e) => {
    const studentId = e.target.dataset.id;
    dispatch(studentsActions.setStudentId(studentId));
    dispatch(uiActions.toggleStudnetDltModal());
  };
  const showRegisterStudentModalHandler = (e) => {
    e.preventDefault();
    dispatch(uiActions.toggleStudentRegisterModal());
  };

  const enrollStudentHandler = (data) => {
    dispatch(enrollStudent(data));
  };
  const submitStudentFormHandler = (data) => {
    dispatch(registerStudent(data));
  };

  return (
    <div className={classes.container}>
      {studentEnrollModalShow && (
        <EnrollModal onSubmit={enrollStudentHandler} />
      )}
      {StudentRegisterModalShow && (
        <RegisterStudentModal
          onSubmit={submitStudentFormHandler}
          onCancel={showRegisterStudentModalHandler}
        />
      )}
      {StudentDltModalShow && (
        <ConfirmModal
          onConfirm={studentDltConfirmHanlder}
          onCancel={showDltStudentModalHandler}
          message="Do you really want to delete this student?"
        />
      )}

      <div className={classes.results}>
        <div className={classes["result-items"]}>
          <StudentsTable onRegister={showRegisterStudentModalHandler} />
        </div>
        <Pagination />
      </div>
    </div>
  );
};

export default Students;
