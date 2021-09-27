import {put, call, takeLatest} from "@redux-saga/core/effects";
import { API_Key, baseSiteUrl, language } from "../../ApiParameters";
import { getApi } from "../../getApi";
import { 
  fetchMovie,
  fetchMovieError,
  fetchMovieSuccess, 
} from "./movieSlice";

function* fetchMovieHandler() {
    const url = `${baseSiteUrl}/movie/id?api_key=${API_Key}&language=${language}`;
    try {
      const movie = yield call(getApi, url);
      yield put(fetchMovieSuccess(movie));
    } catch (error) {
      yield put(fetchMovieError());
      yield call(alert, "coś poszło nie tak!");
    }
  }
  
  export function* movieSaga() {
    yield takeLatest(fetchMovie.type, fetchMovieHandler);
  }