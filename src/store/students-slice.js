import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";

const studentsSlice = createSlice({
  name: "students",
  initialState: { studentsList: [], studentId: null, studentDetails: null },
  reducers: {
    populateStudents(state, action) {
      state.studentsList = action.payload;
    },
    setStudentId(state, action) {
      state.studentId = action.payload;
    },

    assginStudentData(state, action) {
      state.studentDetails = action.payload;
    },
    deleteStudent(state, action) {
      const newStudentsList = state.studentsList.filter(
        (student) => student.id !== state.studentId
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

export const fetchOneStudent = () => {
  return async (dispatch, getState) => {
    const studentId = getState().students.studentId;
    const response = await fetch(
      `http://127.0.0.1:8000/api/v1/students/${studentId}`
    );

    const data = await response.json();

    dispatch(studentsActions.assginStudentData(data.student));
  };
};

export const deleteStudentDb = () => {
  return async (dispatch, getState) => {
    const studentDltData = getState().students.studentId;

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

export const enrollStudent = (data) => {
  return async (dispatch, getState) => {
    const studentData = getState().students.studentId;
    const enrollData = { student: studentData, group: data.group };

    const response = await fetch("http://127.0.0.1:8000/api/v1/enrollments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(enrollData),
    });

    const enrolledData = await response.json();

    console.log(enrolledData);
  };
};

export default studentsSlice;
