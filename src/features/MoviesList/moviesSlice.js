import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "moviesState",
  initialState: {
    movies: [],
    totalMoviesPages: null,
    status: "initial",
  },
  reducers: {
    fetchMovies: (state) => {
      state.status = "loading";
    },
    fetchMoviesSuccess: (state, { payload: { results, total_pages } }) => {
      state.status = "success";
      state.movies = results;
      state.totalMoviesPages = total_pages;
    },
    fetchMoviesError: (state) => {
      state.status = "error";
    },
  },
});
export const { fetchMovies, fetchMoviesError, fetchMoviesSuccess } =
  moviesSlice.actions;
export const selectMoviesState = (state) => state.moviesReducer;
export const selectMovies = (state) => selectMoviesState(state).movies;
export const selectStatus = (state) => selectMoviesState(state).status;
export const selectTotalMoviesPages = (state) =>
  selectMoviesState(state).totalMoviesPages;

export default moviesSlice.reducer;
