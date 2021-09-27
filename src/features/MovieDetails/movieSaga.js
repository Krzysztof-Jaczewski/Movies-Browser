import { put, call, takeLatest } from "@redux-saga/core/effects";
import { API_Key, baseSiteUrl, language } from "../../ApiParameters";
import { getApi } from "../../getApi";
import { 
  fetchCreditsError, 
  fetchCreditsSuccess,
  fetchCredits
} from "./creditsSlice";
import {
  fetchMovie,
  fetchMovieError,
  fetchMovieSuccess,
} from "./movieSlice";

function* fetchMovieHandler({ payload: {movie_id} }) {
  const url = `${baseSiteUrl}movie/${movie_id}?api_key=${API_Key}&language=${language}`;
  try {
    const movie = yield call(getApi, url);
    yield put(fetchMovieSuccess(movie));
  } catch (error) {
    yield put(fetchMovieError());
    yield call(alert, "coś poszło nie tak!");
  }
}

function* fetchCreditsHandler({ payload: {movie_id}}) {
  const url = `${baseSiteUrl}movie/${movie_id}/credits?api_key=${API_Key}&language=${language}`;
  try {
    const credits = yield call(getApi, url);
    yield put(fetchCreditsSuccess(credits));
  } catch (error) {
    yield put(fetchCreditsError());
    yield call(alert, "coś poszło nie tak!");
  }
}

export function* movieSaga() {
  yield takeLatest(fetchMovie.type, fetchMovieHandler);
};

export function* creditsSaga() {
    yield takeLatest(fetchCredits.type, fetchCreditsHandler);
};