import * as actionTypes from './actionTypes';
import axios from 'axios';

export const foundCure = () => {
    return {
        type: actionTypes.FOUND_CURE
    };
};

export const loadCureData = (labs) => {
    return {
        type: actionTypes.LOAD_CURE_DETAILS,
        labsData: labs
    };
}
export const loadCureDetails = () => {
    return dispatch => {
        axios.get('http://localhost:3000/v1/labs')
            .then(response => {
                dispatch(loadCureData(response.data.labs));
            })
    }
};