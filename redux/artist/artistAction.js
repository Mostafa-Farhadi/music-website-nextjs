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

export const eilishArtist = () => {
    return {
        type: EILISH,
        payload: "Billie Eilish Albumes"
    }
}

export const lipaArtist = () => {
    return {
        type: LIPA,
        payload: "Dua Lipa Albumes"
    }
}

export const beiberArtist = () => {
    return {
        type: BEIBER,
        payload: "Justin Beiber Albumes"
    }
}

export const pitbullArtist = () => {
    return {
        type: PITBULL,
        payload: "Pitbull Albumes"
    }
}

export const gomezArtist = () => {
    return {
        type: GOMEZ,
        payload: "Selena Gomez Albumes"
    }
}

export const swiftArtist = () => {
    return {
        type: SWIFT,
        payload: "Taylor Swift Albumes"
    }
}

export const timberlakeArtist = () => {
    return {
        type: TIBERLAKE,
        payload: "Justin Timberlake Albumes"
    }
}

export const iglesiasArtist = () => {
    return {
        type: IGLESIAS,
        payload: "Enrique Iglesias Albumes"
    }
}

export const rihannaArtist = () => {
    return {
        type: RIHANNA,
        payload: "Rihanna Albumes"
    }
}

export const shakiraArtist = () => {
    return {
        type: SHAKIRA,
        payload: "Shakira Albumes"
    }
}

export const btsArtist = () => {
    return {
        type: BTS,
        payload: "Bts Group Albumes"
    }
}

export const choseArtist = (Artist) => {
    return (dispatch) => {
        if (Artist === "Eilish") {
            dispatch(eilishArtist())
        } else if (Artist === "Lipa") {
            dispatch(lipaArtist())
        } else if (Artist === "Beiber") {
            dispatch(beiberArtist())
        } else if (Artist === "Pitbull") {
            dispatch(pitbullArtist())
        } else if (Artist === "Gomez") {
            dispatch(gomezArtist())
        } else if (Artist === "Swift") {
            dispatch(swiftArtist())
        } else if (Artist === "Timberlake") {
            dispatch(timberlakeArtist())
        } else if (Artist === "Iglesias") {
            dispatch(iglesiasArtist())
        } else if (Artist === "Rihanna") {
            dispatch(rihannaArtist())
        } else if (Artist === "Shakira") {
            dispatch(shakiraArtist())
        } else if (Artist === "Bts") {
            dispatch(btsArtist())
        }
    }
}