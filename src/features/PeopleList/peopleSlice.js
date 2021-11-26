import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
  name: "peopleState",
  initialState: {
    people: [],
    totalPeoplePages: null,
    status: "initial",
  },
  reducers: {
    fetchPeople: (state) => {
      state.status = "loading";
    },
    fetchPeopleSuccess: (state, { payload: { results, total_pages } }) => {
      state.status = "success";
      state.people = results;
      state.totalPeoplePages = total_pages;
    },
    fetchPeopleError: (state) => {
      state.status = "error";
    },
  },
});
export const { fetchPeople, fetchPeopleError, fetchPeopleSuccess } =
  peopleSlice.actions;
export const selectPeopleState = (state) => state.peopleReducer;
export const selectPeople = (state) => selectPeopleState(state).people;
export const selectStatus = (state) => selectPeopleState(state).status;
export const selectTotalPeoplePages = (state) =>
  selectPeopleState(state).totalPeoplePages;

export default peopleSlice.reducer;
