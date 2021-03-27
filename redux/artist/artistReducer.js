import { FETCH_ARTIST_REQUEST } from './artistTypes';
import { FETCH_ARTIST_SUCCESS } from './artistTypes';
import { FETCH_ARTIST_FAILURE } from './artistTypes';


const initialState = {
    loading: true,
    albumesName: '',
    error: ''
}

const artistReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ARTIST_REQUEST: return {
            ...state,
            loading: true,
        }
        case FETCH_ARTIST_SUCCESS: return {
            ...state,
            loading: false,
            albumesName: action.payload
        }
        case FETCH_ARTIST_FAILURE: return {
            ...state,
            loading: true,
            error: action.error
        }
        default: return state
    }
}

export default artistReducer;
