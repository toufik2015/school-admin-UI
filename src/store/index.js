import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";
import studentsSlice from "./students-slice";

const store = configureStore({
  reducer: { ui: uiSlice.reducer, students: studentsSlice.reducer },
});

export default store;
