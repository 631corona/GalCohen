import { put, call } from 'redux-saga/effects';
import axios from 'axios';
import * as actions from "../actions";

export function* loadCureDetailsSaga() {
    const response = yield call([axios, "get"], 'http://localhost:3000/v1/labs');
    yield put(actions.loadCureDetailsSuccess(response.data.labs));
}


