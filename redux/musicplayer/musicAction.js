import { MUSIC_REQUEST } from './musicTypes';
import { MUSIC_SUCCESS } from './musicTypes';

const musicRequest = () => ({
    type: MUSIC_REQUEST
})

const musicSuccess = music => ({
    type: MUSIC_SUCCESS,
    payload: music
})

export const choseMusic = (music) => {
    return (dispatch) => {
        dispatch(musicRequest())
        setTimeout(() => {
            dispatch(musicSuccess(music))
        }, 700);
    }
}