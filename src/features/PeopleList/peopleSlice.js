import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
  name: "peopleState",
  initialState: {
    people: [],
    peopleResults: [],
    status: "loading",
    searchStatus: "loading",
    totalPeoplePages: 500,
    totalPeopleResultsPages: 500,
  },
  reducers: {
    fetchPeople: (state) => {
      state.status = "loading";
    },
    fetchPeopleSuccess: (state, { payload: Apipeople }) => {
      state.status = "success";
      state.people = Apipeople.results;
      state.totalPeoplePages = Apipeople.total_pages;
    },
    fetchPeopleError: (state) => {
      state.status = "error";
    },
    fetchPeopleResults: (state) => {
      state.searchStatus = "loading";
    },
    fetchPeopleResultsSuccess: (state, { payload: Apipeople }) => {
      state.searchStatus = "success";
      state.people = Apipeople.results;
      state.totalPeopleResultsPages = Apipeople.total_pages;
    },
    fetchPeopleResultsError: (state) => {
      state.searchStatus = "error";
    },
  },
});
export const {
  fetchPeople,
  fetchPeopleError,
  fetchPeopleSuccess,
  fetchPeopleResults,
  fetchPeopleResultsSuccess,
  fetchPeopleResultsError } =
  peopleSlice.actions;
export const selectPeopleState = (state) => state.peopleReducer;
export const selectPeople = (state) => selectPeopleState(state).people;
export const selectStatus = (state) => selectPeopleState(state).status;
export const selectTotalPeoplePages = (state) =>
  selectPeopleState(state).totalPeoplePages;
export const selectPeopleResults = (state) => selectPeopleState(state).peopleResults;
export const selectSearchStatus = (state) => selectPeopleState(state).searchStatus;
export const selectTotalPeopleStatusPages = (state) => selectPeopleState(state).totalPeopleResultsPages;

export default peopleSlice.reducer;
