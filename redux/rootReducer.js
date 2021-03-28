import { combineReducers } from "redux";
import artistReducer from './artist/artistReducer'

const rootReducer = combineReducers ({
    Artist: artistReducer
})

export default rootReducer;