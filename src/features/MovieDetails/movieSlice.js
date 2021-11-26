import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movieState",
  initialState: {
    movie: [],
    credits: [],
    status: "initial",
  },
  reducers: {
    fetchMovie: (state) => {
      state.status = "loading";
    },
    fetchMovieSuccess: (state, { payload: Movie }) => {
      state.status = "success";
      state.movie = Movie;
    },
    fetchMovieCreditsSuccess: (state, { payload: MovieCredits }) => {
      state.status = "success";
      state.credits = MovieCredits;
    },
    fetchMovieError: (state) => {
      state.status = "error";
    },
  },
});
export const {
  fetchMovie,
  fetchMovieCreditsSuccess,
  fetchMovieError,
  fetchMovieSuccess,
  fetchMovieImagesSuccess,
} = movieSlice.actions;

export const selectMovieState = (state) => state.movieReducer;
export const selectMovie = (state) => selectMovieState(state).movie;
export const selectMovieCredits = (state) => selectMovieState(state).credits;
export const selectStatus = (state) => selectMovieState(state).status;

export default movieSlice.reducer;
