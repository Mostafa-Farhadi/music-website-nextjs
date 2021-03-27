import { EILISH } from './artistTypes';
import { LIPA } from './artistTypes';
import { BEIBER } from './artistTypes';
import { PITBULL } from './artistTypes';
import { GOMEZ } from './artistTypes';
import { SWIFT } from './artistTypes';
import { TIBERLAKE } from './artistTypes';
import { IGLESIAS } from './artistTypes';
import { RIHANNA } from './artistTypes';
import { SHAKIRA } from './artistTypes';
import { BTS } from './artistTypes';


const initialState = {
    loading: true,
    albumesName: "Albumes Section"
}

const artistReducer = (state = initialState, action) => {
    switch (action.type) {
        case EILISH: return {
            loading: false,
            albumesName: action.payload
        }
        case LIPA: return {
            loading: false,
            albumesName: action.payload
        }
        case BEIBER: return {
            loading: false,
            albumesName: action.payload
        }
        case PITBULL: return {
            loading: false,
            albumesName: action.payload
        }
        case GOMEZ: return {
            loading: false,
            albumesName: action.payload
        }
        case SWIFT: return {
            loading: false,
            albumesName: action.payload
        }
        case TIBERLAKE: return {
            loading: false,
            albumesName: action.payload
        }
        case IGLESIAS: return {
            loading: false,
            albumesName: action.payload
        }
        case RIHANNA: return {
            loading: false,
            albumesName: action.payload
        }
        case SHAKIRA: return {
            loading: false,
            albumesName: action.payload
        }
        case BTS: return {
            loading: false,
            albumesName: action.payload
        }

        default: return state
    }
}

export default artistReducer;