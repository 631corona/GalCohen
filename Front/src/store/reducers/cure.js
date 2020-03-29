
const initialState = {
    found: false
}

const reducer = (state = initialState, action) => {
    if (action.type === 'FOUND_CURE') {
        return {
            found: true
        }
    }
    return state;
};

export default reducer;