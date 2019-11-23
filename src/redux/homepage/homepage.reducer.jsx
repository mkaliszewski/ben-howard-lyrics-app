import homepageActionTypes from './homepage.types'

const INITIAL_STATE = {
    isHovered1: false
}

const homepageReducer = (state=INITIAL_STATE, action) =>{
    switch(action.type){
        case homepageActionTypes.TOGGLE_PULSE_ANIMATION:
            return{
                ...state,
                isHovered: !state.isHovered
            }
        default:
            return state;
    }
}

export default homepageReducer;