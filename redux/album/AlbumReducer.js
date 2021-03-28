import { FETCH_ALBUM_REQUEST } from './albumTypes';
import { FETCH_ALBUM_SUCCESS } from './albumTypes';
import { FETCH_ALBUM_FAILURE } from './albumTypes';


const initialState = {
    loading: true,
    album: '',
    error: ''
}

const albumReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ALBUM_REQUEST: return {
            ...state,
            loading: true,
        }
        case FETCH_ALBUM_SUCCESS: return {
            ...state,
            loading: false,
            album: action.payload
        }
        case FETCH_ALBUM_FAILURE: return {
            ...state,
            loading: true,
            error: action.error
        }
        default: return state
    }
}

export default albumReducer;
