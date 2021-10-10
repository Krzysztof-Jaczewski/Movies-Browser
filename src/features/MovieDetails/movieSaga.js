import { put, call, all, takeLatest } from "@redux-saga/core/effects";
import { getApi } from "../../logic/getApi";
import { getDetailsURLpath } from "../../logic/getURLpath";
import {
  fetchMovie,
  fetchMovieCreditsSuccess,
  fetchMovieError,
  fetchMovieSuccess,
} from "./movieSlice";

function* fetchMovieHandler({ payload: { id } }) {
  const movieURL = getDetailsURLpath("movie/" + id);
  const creditsURL = getDetailsURLpath("movie/" + id + "/credits");
  try {
    const [movie, credits] = yield all([
      call(getApi, movieURL),
      call(getApi, creditsURL),
    ]);
    yield all([
      put(fetchMovieSuccess(movie)),
      put(fetchMovieCreditsSuccess(credits)),
    ]);
  } catch (error) {
    yield put(fetchMovieError());
  }
}

export function* movieSaga() {
  yield takeLatest(fetchMovie.type, fetchMovieHandler);
}
