import { combineReducers } from 'redux';
import toolbarReducer from './toolbar/toolbar.reducer'

const rootReducer = combineReducers({
    toolbar: toolbarReducer
})

export default rootReducer;

