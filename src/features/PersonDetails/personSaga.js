import { put, call, takeLatest, all } from "@redux-saga/core/effects";
import { getDetailsURLpath } from "../../logic/getURLpath";
import { getApi } from "../../logic/getApi";

import {
  fetchPerson,
  fetchPersonCreditsSuccess,
  fetchPersonError,
  fetchPersonSuccess,
} from "./personSlice";

function* fetchPersonHandler({ payload: { id } }) {
  const personURL = getDetailsURLpath(`person/${id}`);
  const creditsURL = getDetailsURLpath(`person/${id}/movie_credits`);
  try {
    const [person, personCredits] = yield all([
      call(getApi, personURL),
      call(getApi, creditsURL),
    ]);
    yield all([
      put(fetchPersonSuccess(person)),
      put(fetchPersonCreditsSuccess(personCredits)),
    ]);
  } catch (error) {
    yield put(fetchPersonError());
  }
}

export function* personSaga() {
  yield takeLatest(fetchPerson.type, fetchPersonHandler);
}
