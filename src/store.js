import createSagaMiddleware from "@redux-saga/core";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import moviesReducer from "./features/MoviesList/moviesSlice";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();
const reducer = combineReducers({ moviesReducer: moviesReducer });

const store = configureStore({
  reducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
