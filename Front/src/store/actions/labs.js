import * as actionTypes from './actionTypes';

export const foundCure = () => {
    return {
        type: actionTypes.FOUND_CURE
    };
};

export const loadCureDetails = () => {
    return {
        type: actionTypes.INITIATE_LOAD_CURE_DETAILS,
    };
}

export const loadCureDetailsSuccess = (labs) => {
    return {
        type: actionTypes.LOAD_CURE_DETAILS,
        labsData: labs
    };
}