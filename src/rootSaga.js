import { all } from "@redux-saga/core/effects";
import { moviesSaga } from "./features/MoviesList/moviesSaga";
import { peopleSaga } from "./features/PeopleList/peopleSaga";

export default function* rootSaga() {
  yield all([moviesSaga(), peopleSaga()]);
}
