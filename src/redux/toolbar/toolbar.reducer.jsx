import toolbarActionTypes from './toolbar.types.js'

const INITIAL_STATE = {
    isOpen: false
}

const toolbarReducer = (state = INITIAL_STATE, action)=>{
    switch(action.type){
        case toolbarActionTypes.TOGGLE_SIDEDRAWER_HIDDEN:
            return{
                ...state,
                isOpen: !state.open
            }
        case toolbarActionTypes.HIDE_SIDEDRAWER:
            return{
                ...state,
                isOpen: false
            }
        default:
            return state;
    }
}

export default toolbarReducer;

