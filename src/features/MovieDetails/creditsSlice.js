import { createSlice } from "@reduxjs/toolkit";

const creditsSlice = createSlice({
    name: "creditsState",
    initialState: { credits: [], status: "loading" },
    reducers: {
      fetchCredits: (state) => {
        state.status = "loading";
      },
      fetchCreditsSuccess: (state, { payload: Apicredits }) => {
        state.status = "success";
        state.credits = Apicredits.results;
      },
      fetchCreditsError: (state) => {
        state.status = "error";
      },
    },
  });
  export const {fetchCredits, fetchCreditsError, fetchCreditsSuccess} =
    creditsSlice.actions;
  
  export const selectCreditsState = (state) => state.creditsReducer;
  export const selectCredits = (state) => selectCreditsState(state).credits;
  export const selectStatus = (state) => selectCreditsState(state).status;

  export default creditsSlice.reducer;
  