import { call, put, takeLatest } from "@redux-saga/core/effects";
import { getApi } from "../../getApi";
import {
  fetchPeople,
  fetchPeopleError,
  fetchPeopleSuccess,
} from "./peopleSlice";
import { API_Key, baseSiteUrl } from "../../ApiParameters";
function* fetchPeopleHandler({ payload: { page } }) {
  const url = `${baseSiteUrl}person/popular?api_key=${API_Key}&page=${page}`;
  try {
    const people = yield call(getApi, url);
    yield put(fetchPeopleSuccess(people));
  } catch (error) {
    yield put(fetchPeopleError());
    yield call(alert, "coś poszło nie tak!");
  }
}

export function* peopleSaga() {
  yield takeLatest(fetchPeople.type, fetchPeopleHandler);
}
