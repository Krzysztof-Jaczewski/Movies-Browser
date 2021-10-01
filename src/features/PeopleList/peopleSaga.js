import { call, put, takeLatest } from "@redux-saga/core/effects";
import { getApi } from "../../getApi";
import {
  fetchPeople,
  fetchPeopleError,
  fetchPeopleResults,
  fetchPeopleResultsError,
  fetchPeopleResultsSuccess,
  fetchPeopleSuccess,
} from "./peopleSlice";
import { API_Key, baseSiteUrl, language } from "../../ApiParameters";
function* fetchPeopleHandler({ payload: { page } }) {
  const url = `${baseSiteUrl}person/popular?api_key=${API_Key}&language=${language}&page=${page}`;
  try {
    const people = yield call(getApi, url);
    yield put(fetchPeopleSuccess(people));
  } catch (error) {
    yield put(fetchPeopleError());
    yield call(alert, "coś poszło nie tak!");
  }
}

function* fetchPeopleResultsHandler({ payload: { value } }) {
  const url = `${baseSiteUrl}search/person?api_key=${API_Key}&query=${value}`;
  try {
    const people = yield call(getApi, url);
    yield put(fetchPeopleResultsSuccess(people));
  } catch (error) {
    yield put(fetchPeopleResultsError());
    yield call(alert, "Coś poszło nie tak!");
  }
}

export function* peopleSaga() {
  yield takeLatest(fetchPeople.type, fetchPeopleHandler);
};

export function* peopleResultsSaga() {
  yield takeLatest(fetchPeopleResults.type, fetchPeopleResultsHandler);
};
