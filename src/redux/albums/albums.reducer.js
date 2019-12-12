import albumsActionTypes from './albums.types'
import { bindActionCreators } from 'redux'

const INITIAL_STATE = {
    albums: null,
    currentAlbum:{
        songs: []
    },
    isFetching: false,
    errorMessage:""
}

const albumsDataReducer = (state=INITIAL_STATE, action) =>{
    switch(action.type){

        //reducer cases to fetch data with redux thunk
        case albumsActionTypes.FETCH_ALBUMS_START:
            return{
                ...state,
                isFetching:true
            }
        case albumsActionTypes.FETCH_ALBUMS_SUCCESS:
            return{
                ...state,
                isFetching:false,
                albums: action.payload,
                
            }
        case albumsActionTypes.FETCH_ALBUMS_FAILURE:
            return{
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }



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
        case albumsActionTypes.ADD_CURRENT_SONGS:
            return{
                ...state,
                currentAlbum:{
                    songs:action.payload
                }
            }
    
        default:
            return state;
    }
}

export default albumsDataReducer;