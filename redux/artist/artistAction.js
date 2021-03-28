import axios from 'axios';

import { FETCH_ARTIST_REQUEST } from './artistTypes';
import { FETCH_ARTIST_SUCCESS } from './artistTypes';
import { FETCH_ARTIST_FAILURE } from './artistTypes';

const fetchArtistRequest = () => ({
        type: FETCH_ARTIST_REQUEST
    })

const fetchArtistSeuccess = artist => ({
        type: FETCH_ARTIST_SUCCESS,
        payload: artist
    })

const fetchArtistFailure = error => ({
    type: FETCH_ARTIST_FAILURE,
    error: error
})

export const choseArtist = (Artist) => {
    return (dispatch) => {
        dispatch(fetchArtistRequest())
        setTimeout(() => {
            axios.get("http://localhost:3000/api/musics")
        .then((response) => {
            const artist = response.data
            if (Artist === "Eilish") {
                dispatch(fetchArtistSeuccess(artist[0]))
            } else if (Artist === "Lipa") {
                dispatch(fetchArtistSeuccess(artist[1]))
            } else if (Artist === "Beiber") {
                dispatch(fetchArtistSeuccess(artist[2]))
            } else if (Artist === "Pitbull") {
                dispatch(fetchArtistSeuccess(artist[3]))
            } else if (Artist === "Gomez") {
                dispatch(fetchArtistSeuccess(artist[4]))
            } else if (Artist === "Swift") {
                dispatch(fetchArtistSeuccess(artist[5]))
            } else if (Artist === "Timberlake") {
                dispatch(fetchArtistSeuccess(artist[6]))
            } else if (Artist === "Iglesias") {
                dispatch(fetchArtistSeuccess(artist[7]))
            } else if (Artist === "Rihanna") {
                dispatch(fetchArtistSeuccess(artist[8]))
            } else if (Artist === "Shakira") {
                dispatch(fetchArtistSeuccess(artist[9]))
            } else if (Artist === "Bts") {
                dispatch(fetchArtistSeuccess(artist[10]))
            }
            
        }).catch((error) => {
            const errorMessage = error.message
            dispatch(fetchArtistFailure(errorMessage))
        });
        }, 700);
    }
}
