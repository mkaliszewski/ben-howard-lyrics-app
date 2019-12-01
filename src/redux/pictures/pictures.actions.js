
import picturesActionTypes from './pictures.types'

export const setActive = picture =>({
    type: picturesActionTypes.SET_ACTIVE,
    payload: picture
})