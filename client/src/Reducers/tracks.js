import { FETCH_TRACKS } from "../Constants/Tracks";

const trackReducer = (state={tracks:[]}, action) => {
    switch (action.type) {
        case FETCH_TRACKS:
            
            return { ...state, tracks: action.payload.data }
    
        default:
            return state
    }
}

export default trackReducer