const initialState = {
    counter: 1
}

export default function Reducer(state = initialState, action) {
    switch (action.type) {
        case 'Inc':
            return {
                // Always return a new object in case of react due to immutablility issues
                counter: state.counter + 1
            };
        case 'Dec':
            return {
                counter: state.counter - 1
            };
        case 'Dec-ten':
            return {
                counter: action.payload
            };
        default:
            return state
    }
}