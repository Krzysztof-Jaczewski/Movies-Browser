import { all } from "@redux-saga/core/effects";
import { moviesSaga } from "./features/MoviesList/moviesSaga";

export default function* rootSaga() {
  yield all([moviesSaga()]);
}
