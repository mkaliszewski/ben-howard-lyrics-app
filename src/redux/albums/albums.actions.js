import albumsActionTypes from './albums.types'


export const addCurrentAlbum = album =>({
    type: albumsActionTypes.ADD_CURRENT_ALBUM,
    payload: album
})

export const clearCurrentAlbum = () =>({
    type: albumsActionTypes.CLEAR_CURRENT_ALBUM
})

