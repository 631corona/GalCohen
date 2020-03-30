import * as actionTypes from './actionTypes';
import axios from 'axios';

export const getCureData = (labs) => {
    return {
        type: actionTypes.GET_CURE_DETAILS,
        labsData: labs
    };
}
export const getCureDetails = () => {
    return dispatch => {
        axios.get('http://localhost:3000/v1/labs')
            .then(response => {
                console.log(response.data.labs);
                dispatch(getCureData(response.data.labs));
            })
    }

};