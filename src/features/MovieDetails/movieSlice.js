import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movieState",
  initialState: { movie: [], status: "loading" },
  reducers: {
    fetchMovie: (state) => {
      state.status = "loading";
    },
    fetchMovieSuccess: (state, { payload: Apimovie }) => {
      state.status = "success";
      state.movie = Apimovie.results;
    },
    fetchMovieError: (state) => {
      state.status = "error";
    },
  },
});
export const { fetchMovie, fetchMovieError, fetchMovieSuccess } =
  movieSlice.actions;

export const selectMovieState = (state) => state.movieReducer;
export const selectMovie = (state) => selectMovieState(state).movie;

export const getMovieById = (state, movie_id) =>
  selectMovie(state).find(({id}) => id === movie_id)

export default movieSlice.reducer;