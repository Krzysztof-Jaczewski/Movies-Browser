import { all } from "@redux-saga/core/effects";
import { movieSaga } from "./features/MovieDetails/movieSaga";
import { moviesSaga } from "./features/MoviesList/moviesSaga";
import { peopleSaga } from "./features/PeopleList/peopleSaga";

export default function* rootSaga() {
  yield all([moviesSaga(), peopleSaga(), movieSaga()]);
}
