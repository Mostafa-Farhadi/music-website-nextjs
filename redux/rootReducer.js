import { combineReducers } from "redux";
import artistReducer from './artist/artistReducer'

const rootReducer = combineReducers ({
    albums: artistReducer
})

export default rootReducer;