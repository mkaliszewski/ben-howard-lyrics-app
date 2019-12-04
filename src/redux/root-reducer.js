import { combineReducers } from 'redux';
import toolbarReducer from './toolbar/toolbar.reducer'
import homepageReducer from './homepage/homepage.reducer.jsx'
import albumsDataReducer from './albums/albums.reducer'
import picturesReducer from './pictures/pictures.reducer'
import aboutReducer from './about/about.reducer'

const rootReducer = combineReducers({
    toolbar: toolbarReducer,
    homepage: homepageReducer,
    albums: albumsDataReducer,
    pictures: picturesReducer,
    about: aboutReducer
})

export default rootReducer;

