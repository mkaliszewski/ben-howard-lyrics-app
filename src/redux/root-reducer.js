import { combineReducers } from 'redux';
import toolbarReducer from './toolbar/toolbar.reducer'
import homepageReducer from './homepage/homepage.reducer.jsx'

const rootReducer = combineReducers({
    toolbar: toolbarReducer,
    homepage: homepageReducer
})

export default rootReducer;

