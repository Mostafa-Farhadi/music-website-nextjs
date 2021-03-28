import { combineReducers } from "redux";
import artistReducer from './artist/artistReducer'
import albumReducer from './album/AlbumReducer'
import musicReducer from './musicPlayer/musicReducer'

const rootReducer = combineReducers ({
    Artist: artistReducer,
    Album: albumReducer,
    Music: musicReducer
})

export default rootReducer;