import { all } from "@redux-saga/core/effects";
import { moviesSaga } from "./features/MoviesList/moviesSaga";
import { peopleSaga } from "./features/PeopleList/poepleSaga";

export default function* rootSaga() {
  yield all([moviesSaga(), peopleSaga()]);
}
