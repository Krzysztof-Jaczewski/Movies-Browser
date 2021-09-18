import { all } from "@redux-saga/core/effects";
import { moviesSaga } from "./features/MovieList/moviesSaga";

export default function* rootSaga() {
  yield all([moviesSaga()]);
}
