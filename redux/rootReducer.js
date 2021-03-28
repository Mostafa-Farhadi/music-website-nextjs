import { combineReducers } from "redux";
import artistReducer from './artist/artistReducer'
import albumReducer from './album/AlbumReducer'

const rootReducer = combineReducers ({
    Artist: artistReducer,
    Album: albumReducer
})

export default rootReducer;