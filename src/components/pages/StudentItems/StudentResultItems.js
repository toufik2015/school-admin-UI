import React, { Fragment, useEffect } from "react";
import StudentResultItem from "./StudentResultItem";

import { fetchStudentsData } from "../../../store/students-slice";
import { deleteStudentDb } from "../../../store/students-slice";
import { uiActions } from "../../../store/ui-slice";
import { studentsActions } from "../../../store/students-slice";

import ConfirmModal from "../../UI/Modal/ConfimModal";
import { useDispatch, useSelector } from "react-redux";
import classes from "./StudentResultItem.module.css";
import Loader from "../../UI/Loader/Loader";

const StudentResultItems = () => {
  const StudentDltModalShow = useSelector(
    (state) => state.ui.showDltStudentModal
  );

  const loaderShown = useSelector((state) => state.ui.showLoader);
  const showDltStudentModalHandler = (e) => {
    const studentId = e.target.dataset.id;
    dispatch(studentsActions.setStudentDltId(studentId));
    dispatch(uiActions.toggleStudnetDltModal());
  };

  const studentDltConfirmHanlder = () => {
    dispatch(uiActions.toggleStudnetDltModal());
    dispatch(deleteStudentDb());
    dispatch(studentsActions.deleteStudent());
  };

  const dispatch = useDispatch();
  const studentsData = useSelector((state) => state.students.studentsList);

  useEffect(() => {
    dispatch(fetchStudentsData());
  }, []);

  const students = studentsData.map((student) => (
    <StudentResultItem
      toggleModal={showDltStudentModalHandler}
      key={student.id}
      student={student}
    />
  ));
  return (
    <Fragment>
      {StudentDltModalShow && (
        <ConfirmModal
          onConfirm={studentDltConfirmHanlder}
          onCancel={showDltStudentModalHandler}
          message="Do you really want to delete this student?"
          toggleModal={showDltStudentModalHandler}
        />
      )}
      {loaderShown && <Loader />}
      {!loaderShown && (
        <table className={classes["styled-table"]}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Last name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Registration Date</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>{students}</tbody>
        </table>
      )}
    </Fragment>
  );
};

export default StudentResultItems;
