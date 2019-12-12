import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
//or sessionStorage
import toolbarReducer from './toolbar/toolbar.reducer'
import homepageReducer from './homepage/homepage.reducer.jsx'
import albumsDataReducer from './albums/albums.reducer'
import picturesReducer from './pictures/pictures.reducer'
import aboutReducer from './about/about.reducer'
import usersReducer from './users/users.reducer'


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['users']
}

const rootReducer = combineReducers({
    toolbar: toolbarReducer,
    homepage: homepageReducer,
    albums: albumsDataReducer,
    pictures: picturesReducer,
    about: aboutReducer,
    users: usersReducer
})

export default persistReducer(persistConfig, rootReducer);

