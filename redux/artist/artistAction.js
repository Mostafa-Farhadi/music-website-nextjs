import axios from 'axios';
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

export const eilishArtist = (name) => {
    return {
        type: EILISH,
        payload: name[0]
    }
}

export const lipaArtist = (name) => {
    return {
        type: LIPA,
        payload: name[1]
    }
}

export const beiberArtist = (name) => {
    return {
        type: BEIBER,
        payload: name[2]
    }
}

export const pitbullArtist = (name) => {
    return {
        type: PITBULL,
        payload: name[3]
    }
}

export const gomezArtist = (name) => {
    return {
        type: GOMEZ,
        payload: name[4]
    }
}

export const swiftArtist = (name) => {
    return {
        type: SWIFT,
        payload: name[5]
    }
}

export const timberlakeArtist = (name) => {
    return {
        type: TIBERLAKE,
        payload: name[6]
    }
}

export const iglesiasArtist = (name) => {
    return {
        type: IGLESIAS,
        payload: name[7]
    }
}

export const rihannaArtist = (name) => {
    return {
        type: RIHANNA,
        payload: name[8]
    }
}

export const shakiraArtist = (name) => {
    return {
        type: SHAKIRA,
        payload: name[9]
    }
}

export const btsArtist = (name) => {
    return {
        type: BTS,
        payload: name[10]
    }
}

export const choseArtist = (Artist) => {
    return (dispatch) => {
        axios.get("http://localhost:3000/api/musics")
        .then((response) => {
            const artist = response.data
            if (Artist === "Eilish") {
                dispatch(eilishArtist(artist))
            } else if (Artist === "Lipa") {
                dispatch(lipaArtist(artist))
            } else if (Artist === "Beiber") {
                dispatch(beiberArtist(artist))
            } else if (Artist === "Pitbull") {
                dispatch(pitbullArtist(artist))
            } else if (Artist === "Gomez") {
                dispatch(gomezArtist(artist))
            } else if (Artist === "Swift") {
                dispatch(swiftArtist(artist))
            } else if (Artist === "Timberlake") {
                dispatch(timberlakeArtist(artist))
            } else if (Artist === "Iglesias") {
                dispatch(iglesiasArtist(artist))
            } else if (Artist === "Rihanna") {
                dispatch(rihannaArtist(artist))
            } else if (Artist === "Shakira") {
                dispatch(shakiraArtist(artist))
            } else if (Artist === "Bts") {
                dispatch(btsArtist(artist))
            }

        });
    }
}