import { get } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';

function* loadCureData(action) {
    yield get({
        type: actionTypes.LOAD_CURE_DETAILS
    });

}