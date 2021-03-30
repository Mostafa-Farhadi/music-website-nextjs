import axios from 'axios';

import { FETCH_ALBUM_REQUEST } from './albumTypes';
import { FETCH_ALBUM_SUCCESS } from './albumTypes';
import { FETCH_ALBUM_FAILURE } from './albumTypes';

const fetchAlbumRequest = () => ({
    type: FETCH_ALBUM_REQUEST
})

const fetchAlbumSuccess = album => ({
    type: FETCH_ALBUM_SUCCESS,
    payload: album
})

const fetchAlbumFailure = error => ({
    type: FETCH_ALBUM_FAILURE,
    error: error
})

export const choseAlbum = (artistId, AlbumId) => {
    return (dispatch) => {
        dispatch(fetchAlbumRequest())
        setTimeout(() => {
            axios.get("http://localhost:3000/api/musics")
        .then((response) => {
            const artist = response.data
                dispatch(fetchAlbumSuccess(artist[artistId].albums[AlbumId]))
        }).catch((error) => {
            const errorMessage = error.message
            dispatch(fetchAlbumFailure(errorMessage))
        });
        }, 500);
    }
}

