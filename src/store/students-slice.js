import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";

const studentsSlice = createSlice({
  name: "students",
  initialState: { studentsList: [], studentDltId: null },
  reducers: {
    populateStudents(state, action) {
      state.studentsList = action.payload;
    },
    setStudentDltId(state, action) {
      state.studentDltId = action.payload;
    },
    deleteStudent(state, action) {
      const newStudentsList = state.studentsList.filter(
        (student) => student.id !== state.studentDltId
      );
      state.studentsList = newStudentsList;
    },
    registerStudent(state, action) {
      state.studentsList.push(action.payload);
    },
  },
});

export const studentsActions = studentsSlice.actions;

export const fetchStudentsData = () => {
  return async (dispatch) => {
    dispatch(uiActions.toggleLoader());

    const response = await fetch("http://127.0.0.1:8000/api/v1/students");

    const data = await response.json();
    dispatch(studentsActions.populateStudents(data.students));
    dispatch(uiActions.toggleLoader());
  };
};

export const deleteStudentDb = () => {
  return async (dispatch, getState) => {
    const studentDltData = getState().students.studentDltId;

    await fetch(`http://127.0.0.1:8000/api/v1/students/${studentDltData}`, {
      method: "POST",
    });

    dispatch(studentsActions.deleteStudent());
    dispatch(uiActions.toggleStudnetDltModal());
  };
};

export const registerStudent = (data) => {
  return async (dispatch, getState) => {
    const response = await fetch("http://127.0.0.1:8000/api/v1/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const studentData = await response.json();
    console.log(studentData.data);

    dispatch(studentsActions.registerStudent(studentData.data));
    dispatch(uiActions.toggleStudentRegisterModal());
  };
};

export default studentsSlice;
