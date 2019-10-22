
const initialState = [];

export function tracks(state = initialState, action){
    switch (action.type) {
        case 'ADD_TRACK': {
            return [...state, action.payload]
        }
        case 'DELETE_TRACK': {
            return state;
        }
        case 'FETCH_TRACKS_SUCCESS': {
            return action.payload;
        }
        default:
            return state;
    }
}