import { put, call, takeLatest, all } from "@redux-saga/core/effects";
import { getDetailsURLpath } from "../../logic/getURLpath";
import { getAPI } from "../../logic/getAPI";

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
      call(getAPI, personURL),
      call(getAPI, creditsURL),
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
