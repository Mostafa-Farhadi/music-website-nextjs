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

export const choseArtist = (ID) => {
    return (dispatch) => {
        dispatch(fetchArtistRequest())
        setTimeout(() => {
            axios.get("http://localhost:3000/api/musics")
        .then((response) => {
            const artist = response.data
                dispatch(fetchArtistSeuccess(artist[ID]))
        }).catch((error) => {
            const errorMessage = error.message
            dispatch(fetchArtistFailure(errorMessage))
        });
        }, 700);
    }
}
