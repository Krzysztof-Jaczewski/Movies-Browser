import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
  name: "peopleState",
  initialState: { people: [], status: "loading" },
  reducers: {
    fetchPeople: (state) => {
      state.status = "loading";
    },
    fetchPeopleSuccess: (state, { payload: Apipeople }) => {
      state.status = "success";
      state.people = Apipeople;
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

export default peopleSlice.reducer;
