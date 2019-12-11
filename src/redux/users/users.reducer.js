import usersActionTypes from './users.types'
const INITIAL_STATE = {
    currentUser:null,
}

const usersReducer = (state=INITIAL_STATE, action) =>{
    switch (action.type) {
        case usersActionTypes.SET_CURRENT_USER:
            return{
                ...state,
                currentUser: action.payload
            }
    
        default:
           return state
    }
}

export default usersReducer;