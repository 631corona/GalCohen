const initialState = {
    status: null
}

const reducer = (state = initialState, action) => {
    if (action.type === 'MakeStatusPositive') {
        return {
            status: 1
        }
    }
    return state;
};

export default reducer;