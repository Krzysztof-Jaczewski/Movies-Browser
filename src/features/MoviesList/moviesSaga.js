import { call, put, takeLatest } from "@redux-saga/core/effects";
import { getApi } from "../../getApi";
import {
  fetchMovies,
  fetchMoviesError,
  fetchMoviesSuccess,
} from "./moviesSlice";
import { API_Key, baseSiteUrl, language } from "../../ApiParameters";
function* fetchMoviesHandler({ payload: { page, query } }) {
  const url =
    query === null
      ? `${baseSiteUrl}movie/popular?api_key=${API_Key}&language=${language}&page=${page}`
      : `${baseSiteUrl}search/movie?api_key=${API_Key}&query=${query}&page=${page}`;
  try {
    const movies = yield call(getApi, url);
    yield put(fetchMoviesSuccess(movies));
  } catch (error) {
    yield put(fetchMoviesError());
    yield call(alert, "coś poszło nie tak!");
  }
}

export function* moviesSaga() {
  yield takeLatest(fetchMovies.type, fetchMoviesHandler);
}
