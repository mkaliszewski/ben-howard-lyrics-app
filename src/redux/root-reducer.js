import { combineReducers } from 'redux';
import toolbarReducer from './toolbar/toolbar.reducer'
import homepageReducer from './homepage/homepage.reducer.jsx'
import albumsDataReducer from './albums/albums.reducer'

const rootReducer = combineReducers({
    toolbar: toolbarReducer,
    homepage: homepageReducer,
    albums: albumsDataReducer,
})

export default rootReducer;

