import { combineReducers } from "redux";
import artistReducer from './artist/artistReducer'

const rootReducer = combineReducers ({
    artist: artistReducer
})

export default rootReducer;