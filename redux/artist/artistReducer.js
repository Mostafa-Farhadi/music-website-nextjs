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
    albumesName: "Albumes Section"
}

const artistReducer = (state = initialState, action) => {
    switch (action.type) {
        case EILISH: return {
            albumesName: action.payload
        }
        case LIPA: return {
            albumesName: action.payload
        }
        case BEIBER: return {
            albumesName: action.payload
        }
        case PITBULL: return {
            albumesName: action.payload
        }
        case GOMEZ: return {
            albumesName: action.payload
        }
        case SWIFT: return {
            albumesName: action.payload
        }
        case TIBERLAKE: return {
            albumesName: action.payload
        }
        case IGLESIAS: return {
            albumesName: action.payload
        }
        case RIHANNA: return {
            albumesName: action.payload
        }
        case SHAKIRA: return {
            albumesName: action.payload
        }
        case BTS: return {
            albumesName: action.payload
        }

        default: return state
    }
}

export default artistReducer;