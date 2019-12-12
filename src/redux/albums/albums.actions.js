import albumsActionTypes from './albums.types'
import { firestore, convertAlbumsSnapshotToMap } from '../../firebase/firebase.utils'

export const addCurrentAlbum = album =>({
    type: albumsActionTypes.ADD_CURRENT_ALBUM,
    payload: album
})

export const clearCurrentAlbum = () =>({
    type: albumsActionTypes.CLEAR_CURRENT_ALBUM
})

export const addCurrentSongs = filtredSongs =>({
    type: albumsActionTypes.ADD_CURRENT_SONGS,
    payload: filtredSongs
})


export const fetchAlbumsStart = () =>({
    type: albumsActionTypes.FETCH_ALBUMS_START
})

export const fetchAlbumsSuccess = albumsMap =>({
    type: albumsActionTypes.FETCH_ALBUMS_SUCCESS,
    payload: albumsMap
}
)
export const fetchAlbumsFailure = errorMessage => ({
    type: albumsActionTypes.FETCH_ALBUMS_FAILURE,
    payload: errorMessage
})


//redux-thunk function
export const fetchAlbumStartAsync = () =>{
    return dispatch =>{
        const albumsRef = firestore.collection("albums")
        dispatch(fetchAlbumsStart())

        albumsRef.get().then(snapshot =>{
        const albumsMap = convertAlbumsSnapshotToMap(snapshot);
        dispatch(fetchAlbumsSuccess(albumsMap))
        }).catch(error => dispatch(fetchAlbumsFailure(error.message)))
    }
}