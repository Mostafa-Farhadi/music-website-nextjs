import { MUSIC_REQUEST } from './musicTypes';
import { MUSIC_SUCCESS } from './musicTypes';

const initialState = {
    loading: true,
    music: '',
}

const musicReducer = (state = initialState, action) => {
    switch (action.type) {
        case MUSIC_REQUEST: return {
            ...state,
            loading: true,
        }
        case MUSIC_SUCCESS: return {
            ...state,
            loading: false,
            music: action.payload
        }
        default: return state
    }
}

export default musicReducer;