import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";

const groupsSlice = createSlice({
  name: "groups",
  initialState: { groupsList: [] },
  reducers: {
    populateGroups(state, action) {
      state.groupsList = action.payload;
    },
  },
});

export const groupsActions = groupsSlice.actions;

export const fetchGroups = () => {
  return async (dispatch) => {
    const response = await fetch("http://127.0.0.1:8000/api/v1/groups");

    const data = await response.json();

    dispatch(groupsActions.populateGroups(data.groups));
  };
};

export default groupsSlice;
