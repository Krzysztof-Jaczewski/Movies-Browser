import { call, put, takeLatest } from "@redux-saga/core/effects";
import { getApi } from "../../logic/getApi";
import { getURLpath } from "../../logic/getURLpath";
import {
  fetchPeople,
  fetchPeopleError,
  fetchPeopleSuccess,
} from "./peopleSlice";
function* fetchPeopleHandler({ payload: { page, query } }) {
  const url = query
    ? getURLpath("search/person", page, query)
    : getURLpath("person/popular", page);
  try {
    const people = yield call(getApi, url);
    yield put(fetchPeopleSuccess(people));
  } catch (error) {
    yield put(fetchPeopleError());
  }
}

export function* peopleSaga() {
  yield takeLatest(fetchPeople.type, fetchPeopleHandler);
}
