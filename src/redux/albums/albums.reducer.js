import ALBUMS_DATA from '../../assets/ALBUMS_DATA'
import albumsActionTypes from './albums.types'

const INITIAL_STATE = {
    albums: ALBUMS_DATA,
    currentAlbum:{
        songs: []
    }
}

const albumsDataReducer = (state=INITIAL_STATE, action) =>{
    switch(action.type){
        case albumsActionTypes.ADD_CURRENT_ALBUM:
            return{
                ...state,
                currentAlbum: action.payload
            }
        case albumsActionTypes.CLEAR_CURRENT_ALBUM:
            return{
                ...state,
                currentAlbum:{
                    songs:[]
                }
            }
        default:
            return state;
    }
}

export default albumsDataReducer;