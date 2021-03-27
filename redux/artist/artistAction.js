import axios from 'axios';

import { FETCH_ARTIST_REQUEST } from './artistTypes';
import { FETCH_ARTIST_SUCCESS } from './artistTypes';
import { FETCH_ARTIST_FAILURE } from './artistTypes';

const fetchCityRequest = () => ({
        type: FETCH_ARTIST_REQUEST
    })

const fetchCitySeuccess = artistName => ({
        type: FETCH_ARTIST_SUCCESS,
        payload: artistName
    })

const fetchCityFailure = error => ({
    type: FETCH_ARTIST_FAILURE,
    error: error
})

export const choseArtist = (Artist) => {
    return (dispatch) => {
        dispatch(fetchCityRequest())
        axios.get("http://localhost:3000/api/musics")
        .then((response) => {
            const artist = response.data
            if (Artist === "Eilish") {
                dispatch(fetchCitySeuccess(artist[0]))
            } else if (Artist === "Lipa") {
                dispatch(fetchCitySeuccess(artist[1]))
            } else if (Artist === "Beiber") {
                dispatch(fetchCitySeuccess(artist[2]))
            } else if (Artist === "Pitbull") {
                dispatch(fetchCitySeuccess(artist[3]))
            } else if (Artist === "Gomez") {
                dispatch(fetchCitySeuccess(artist[4]))
            } else if (Artist === "Swift") {
                dispatch(fetchCitySeuccess(artist[5]))
            } else if (Artist === "Timberlake") {
                dispatch(fetchCitySeuccess(artist[6]))
            } else if (Artist === "Iglesias") {
                dispatch(fetchCitySeuccess(artist[7]))
            } else if (Artist === "Rihanna") {
                dispatch(fetchCitySeuccess(artist[8]))
            } else if (Artist === "Shakira") {
                dispatch(fetchCitySeuccess(artist[9]))
            } else if (Artist === "Bts") {
                dispatch(fetchCitySeuccess(artist[10]))
            }
            
        }).catch((error) => {
            const errorMessage = error.message
            dispatch(fetchCityFailure(errorMessage))
        });
    }
}
