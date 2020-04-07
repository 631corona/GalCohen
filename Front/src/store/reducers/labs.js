const initialState = {
    cureFound: false,
    labsDetails: []
}

const reducer = (state = initialState, action) => {
    if (action.type === 'FOUND_CURE') {
        return {
            ...state,
            cureFound: true
        }
    }
    if (action.type === 'LOAD_CURE_DETAILS') {
        const updatedLabsDetails = action.labsData.map(lab =>
            ({
                name: lab.name,
                id: lab.id,
                status: lab.status,
                progress_percentile: lab.progress_percentile
            })
        )
        return {
            ...state,
            labsDetails: updatedLabsDetails
        }
    }
    return state;
};

export const isCureFound = (state) => state.labs.cureFound;


export default reducer;