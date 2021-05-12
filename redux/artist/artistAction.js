import { FETCH_ARTIST_REQUEST } from './artistTypes';
import { FETCH_ARTIST_SUCCESS } from './artistTypes';
import { FETCH_ARTIST_FAILURE } from './artistTypes';

const fetchArtistRequest = () => ({
    type: FETCH_ARTIST_REQUEST
})

const fetchArtistSuccess = artist => ({
    type: FETCH_ARTIST_SUCCESS,
    payload: artist
})

const fetchArtistFailure = error => ({
    type: FETCH_ARTIST_FAILURE,
    error: error
})

export const choseArtist = (artistId) => (dispatch) => {
    dispatch(fetchArtistRequest());
    setTimeout( async () => {
        try {
            const response = await fetch("http://localhost:3000/api/musics");
            const artist = await response.json();
            dispatch(fetchArtistSuccess(artist[artistId]))
        }
        catch(error) {
            const errorMessage = error.message
            dispatch(fetchArtistFailure(errorMessage))
        };
    }, 500)
};
