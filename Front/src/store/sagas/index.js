import { takeEvery, all } from 'redux-saga/effects';

import * as actionTpes from '../actions/actionTypes';
import { loadCureDetailsSaga } from './labs';

export function* watchLabs() {
    yield all([
        takeEvery(actionTpes.INITIATE_LOAD_CURE_DETAILS, loadCureDetailsSaga)
    ])

}