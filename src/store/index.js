import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";
import studentsSlice from "./students-slice";
import groupsSlice from "./groups-slice";

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    students: studentsSlice.reducer,
    groups: groupsSlice.reducer,
  },
});

export default store;
