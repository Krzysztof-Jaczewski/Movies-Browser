import { call, put, debounce } from "@redux-saga/core/effects";
import { getApi } from "../../logic/getApi";
import { getURLpath } from "../../logic/getURLpath";
import {
  fetchMovies,
  fetchMoviesError,
  fetchMoviesSuccess,
} from "./moviesSlice";

function* fetchMoviesHandler({ payload: { page, query } }) {
  const url = query
    ? getURLpath("search/movie", page, query)
    : getURLpath("movie/popular", page);
  try {
    const movies = yield call(getApi, url);
    yield put(fetchMoviesSuccess(movies));
  } catch (error) {
    yield put(fetchMoviesError());
    yield call(alert, "coś poszło nie tak!");
  }
}

export function* moviesSaga() {
  yield debounce(500, fetchMovies.type, fetchMoviesHandler);
}
