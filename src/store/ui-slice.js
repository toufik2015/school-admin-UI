import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "students",
  initialState: {
    showLoader: false,
    showDltStudentModal: false,
    showStudentRegisterModal: false,
    showEnrollStudentModal: false,
  },
  reducers: {
    toggleLoader(state) {
      state.showLoader = !state.showLoader;
    },

    toggleStudnetDltModal(state) {
      state.showDltStudentModal = !state.showDltStudentModal;
    },
    toggleStudentRegisterModal(state) {
      state.showStudentRegisterModal = !state.showStudentRegisterModal;
    },
    toggleStudentEnrollModal(state) {
      state.showEnrollStudentModal = !state.showEnrollStudentModal;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
